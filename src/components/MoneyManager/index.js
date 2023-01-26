import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    balanceList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    yourIncome: 0,
    yourExpenses: 0,
  }

  onDelete = id => {
    const {balanceList} = this.state
    const filteredBalanceList = balanceList.filter(each => each.id !== id)
    this.setState({balanceList: filteredBalanceList})
    let incomeAmountAfterDelete = 0
    let ExpensesAmountAfterDelete = 0
    filteredBalanceList.map(eachList => {
      if (eachList.type === 'Income') {
        incomeAmountAfterDelete = +eachList.amount
      } else {
        ExpensesAmountAfterDelete = +eachList.amount
      }
      return null
    })
    this.setState({yourIncome: incomeAmountAfterDelete})
    this.setState({yourExpenses: ExpensesAmountAfterDelete})
  }

  onAddBalance = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newBalance = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'Income') {
      this.setState(prevState => ({
        yourIncome: prevState.yourIncome + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        yourExpenses: prevState.yourExpenses + parseInt(amount),
      }))
    }

    this.setState(prevState => ({
      balanceList: [...prevState.balanceList, newBalance],
      title: '',
      amount: '',
    }))
  }

  onChangeTittle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {balanceList, title, amount, yourIncome, yourExpenses} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="header-container">
            <h1 className="main-heading">Hi,Richard</h1>
            <p className="main-para">
              Welcome back to your
              <span className="main-span-para"> Money Manager</span>
            </p>
          </div>
          <ul className="unorder-list-moneydetails">
            <MoneyDetails yourIncome={yourIncome} yourExpenses={yourExpenses} />
          </ul>
          <div className="transaction-history-container">
            <form className="transaction-form" onSubmit={this.onAddBalance}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <div className="title-input-container">
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  className="input"
                  type="search"
                  id="title"
                  placeholder="TITLE"
                  onChange={this.onChangeTittle}
                  value={title}
                />
              </div>
              <div className="title-input-container">
                <label htmlFor="amount" className="label">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  type="search"
                  placeholder="AMOUNT"
                  className="input"
                  onChange={this.onChangeAmount}
                  value={amount}
                />
              </div>
              <div className="title-input-container">
                <label htmlFor="TYPE" className="label">
                  TYPE
                </label>
                <select
                  id="TYPE"
                  className="input"
                  onChange={this.onChangeType}
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option value={eachItem.displayText} className="label">
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="title-amount-type-container">
                <p className="para-padding1">Title</p>
                <p className="para-padding2">Amount</p>
                <p className="para-padding3">Type</p>
              </div>
              <ul className="unorder-list">
                {balanceList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    eachItem={eachItem}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className={transactionTypeOptions}>1</p>
      </div>
      // <option className="label">Income</option>
      // <option className="label">Expensive</option>
    )
  }
}
export default MoneyManager
