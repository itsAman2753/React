
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
        <p>      <h1>Login Card using Context API </h1>
        </p>
        <p>
        <Login />
        <Profile />
        </p>
      
    </UserContextProvider>
  )
}

export default App