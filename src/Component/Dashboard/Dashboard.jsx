import React, { Component } from 'react'
import {connect} from 'react-redux'
import './dashboard.css'
import {NavBar} from 'antd-mobile'
import NavLink from '../NavLink/NavLink';
import {Route,Switch} from 'react-router-dom'
import action from '../../store/action';
import Boss from '../Boss/Boss'
import Msg from '../Msg/Msg'
import User from '../User/User'
import Genius from '../Genius/Genius'
class Dashboard extends Component {
 constructor(props,context){
  super(props,context)
 }

 componentDidMount(){
    if (!this.props.chatmsg.length) {
        this.props.getMsgList()
        this.props.recvMsg()
    }

 }
 
 headerTitle(){
    let {category,location:{pathname}} =this.props;
    let headerTitle=category.filter(item=>item.path===pathname)[0].headerTitle
    return headerTitle
 }
 categoryData(){
    let {category,type} = this.props
    category = category.filter(item=>item.hide!==type)
    return category
 }

 render() {
     let {user} = this.props;
     if (!user) {
         return null
     }
  return (
      <div className='dashboard'>
          <NavBar className='fixd-header' mode='dark'>{this.headerTitle()}</NavBar>
            <Switch>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/genius' component={Genius}></Route>
                <Route path='/msg' component={Msg}></Route>
                <Route path='/me' component={User}></Route>
            </Switch>
          <NavLink data={this.categoryData()}></NavLink>
      </div>
    )
 }
}
export default connect(state=>({
    ...state.user,
    ...state.chatuser
}),action.message)(Dashboard);