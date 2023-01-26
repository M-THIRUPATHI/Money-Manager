// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem, onDelete} = props
  const {title, amount, type, id} = eachItem

  const onClicking = () => {
    onDelete(id)
  }
  return (
    <li className="list-items">
      <p className="para-padding4">{title}</p>
      <p className="para-padding5">{amount}</p>
      <p className="para-padding6">{type}</p>
      <button type="button" className="delete-button" onClick={onClicking}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
