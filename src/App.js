import Header from './Components/Header'
import VerticalMenu from './Components/VerticalMenu'
import Display from './Display/Display'
import "./styles/app.scss"
import { Switch, Route } from "react-router"

const App = () => {
  return (
    <div className='application-container'>
      <Switch>
        <Route path='/' exact >
            <Header/>
            <VerticalMenu/>
            <Display/>
          </Route>
      </Switch>
    </div>
  )
}

export default App