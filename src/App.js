import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './Login/login';
import Register from './Register/register';

import './App.css';

const App = () => (
    <Switch>
        <Route  path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Redirect to='/login'/> 
    </Switch>
)
export default App;