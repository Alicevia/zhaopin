import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import action from '../../store/action'
class Authroute extends Component {
 constructor(props,context){
  super(props,context)
 }
 componentDidMount(){
    let publicList = ['/login','/register'];
    let pathname = this.props.location.pathname;
    if (publicList.includes(pathname)) {
      return null;
    }
    this.props.doCheckUserInfo(()=>{
      this.props.history.push('/login');
    })
    
 }
 render() {
  return null
 }
}
export default withRouter(connect(null,action.authroute)(Authroute))