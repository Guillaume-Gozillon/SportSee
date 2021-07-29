import AllScreen from './View/AllScreen'
import "./styles/app.scss"
import { Switch, Route } from "react-router"

const App = () => {
  return (
    <div className='none'>
      <Switch>
        <Route path='/user/:id' exact >
          <AllScreen />
        </Route>
      </Switch>
    </div>
  )
}

export default App
