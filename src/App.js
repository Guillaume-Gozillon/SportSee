import Display from './View/AllScreen'
import "./styles/app.scss"
import { Switch, Route } from "react-router"

const App = () => {
  return (
    <div className='none'>
      <Switch>
        <Route path='/' component={Display} exact />
      </Switch>
    </div>
  )
}

export default App