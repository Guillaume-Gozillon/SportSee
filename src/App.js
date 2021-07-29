import AllScreen from './View/AllScreen'
import "./styles/app.scss"
import { Switch, Route } from "react-router"
import { USER_MAIN_DATA as data } from './data'

const App = () => {
  return (
    <div className='none'>
      <Switch>
        <Route path='/user/:id' exact >
          <AllScreen data={data}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
