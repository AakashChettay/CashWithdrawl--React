import './index.css'

const DenominationItem = props => {
  const {value, withDrawMoney} = props
  const withdrawBtn = () => {
    withDrawMoney(value)
  }
  return (
    <li onClick={withdrawBtn} className="denItemStyle">
      {value}
    </li>
  )
}

export default DenominationItem
