// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourIncome, yourExpenses} = props
  const yourBalance = yourIncome - yourExpenses
  return (
    <>
      <div className="container-money-list">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="list-image"
        />
        <div className="container-amount">
          <p className="balance-para">Your Balance</p>
          <p className="amount-para" data-testid="balanceAmount">
            Rs: <span>{yourBalance}</span>
          </p>
        </div>
      </div>

      <div className="container-money-list1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="list-image"
        />
        <div className="container-amount">
          <p className="balance-para">Your Income</p>
          <p className="amount-para" data-testid="incomeAmount">
            Rs: <span>{yourIncome}</span>
          </p>
        </div>
      </div>

      <div className="container-money-list2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="list-image"
        />
        <div className="container-amount">
          <p className="balance-para">Your Expenses</p>
          <p className="amount-para" data-testid="expensesAmount">
            Rs: <span>{yourExpenses}</span>
          </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
