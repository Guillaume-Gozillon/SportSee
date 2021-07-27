import Header from './Components/Header'
import VerticalMenu from './Components/VerticalMenu'
import "./styles/app.scss"
import { Switch, Route } from "react-router"

const App = () => {
  return (
    <div className='application-container'>
      <Switch>
        <Route path='/' exact >
          <Header/>
        </Route>
        <Route path='/' exact >
          <VerticalMenu/>
        </Route>
      </Switch>
    </div>
  )
}

export default App