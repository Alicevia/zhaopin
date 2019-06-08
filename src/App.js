import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Login from './Container/Login/Login'
import Register from './Container/Register/Register'
import Authroute from './Component/Authroute/Authroute'
import BossInfo from './Container/BossInfo/BossInfo';
import GeniusInfo from './Container/GeniusInfo/GeniusInfo';
import Dashboard from './Component/Dashboard/Dashboard'
import Chat from './Component/Chat/Chat'


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className='dashboard'>
            <Authroute></Authroute>
            <Switch>
            {/* <Route path='/' component={Login}></Route> */}

              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
              <Route path='/bossinfo'  component={BossInfo}></Route>
              <Route path='/geniusinfo'  component={GeniusInfo}></Route>
              <Route path='/chat/:user' component={Chat}></Route>
              <Route component={Dashboard}></Route>
            </Switch>
          </div>
        </BrowserRouter>
    </Provider>
   
  );
}

export default App;
