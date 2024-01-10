// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app
  return (
    <li className="app-item-container">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-item-name"> {appName} </p>
    </li>
  )
}
export default AppItem
