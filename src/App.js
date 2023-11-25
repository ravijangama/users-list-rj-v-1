import UserProfile from './components/UserProfile'
import './App.css'

const userDetailList = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'RAVI',
    role: 'CCBPIAN LEARNER',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'RAVI',
    role: 'CCBPIAN LEARNER',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'RAVI',
    role: 'CCBPIAN LEARNER',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'RAVI',
    role: 'CCBPIAN LEARNER',
  },
]
const listItem = userDetailList.map(eachUser => (
  <UserProfile userDetails={eachUser} key={eachUser.id} />
))
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>{listItem}</ul>
  </div>
)

export default App
