// Write your code here
import './index.css'

const TabItem = props => {
  const {apptab, tabItem, isActive} = props
  const {displayText, tabId} = apptab
  const onClickTab = () => {
    tabItem(tabId)
  }
  const activeApp = isActive ? 'active-btn' : ''
  return (
    <li className="tab">
      <button className={`tab-btn ${activeApp}`} onClick={onClickTab}>
        {displayText}{' '}
      </button>
    </li>
  )
}
export default TabItem
