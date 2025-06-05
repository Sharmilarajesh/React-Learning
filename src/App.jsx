import './App.css'
import Counter from "./components/state/Counter"
import Cart from './components/state/Cart'
import UseEffectExample from './components/effect/UseEffectExample'
import GithubUsers from './components/effect/GithubUsers'
import Timer from './components/effect/Timer'

function App() {


  return (
    <div className="container">
      {/* <Counter/> */}
      {/* <Cart /> */}
      {/* <UseEffectExample /> */}
      {/* <GithubUsers /> */}
      <Timer /> 
    </div>
  )
}

export default App
