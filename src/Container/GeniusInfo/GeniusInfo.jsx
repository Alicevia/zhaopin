import React, { Component } from 'react'

import {connect} from 'react-redux'
import {NavBar, InputItem,TextareaItem,Button} from 'antd-mobile'
import  AvatarSelector from '../../Component/Avatar-selector/AvatarSelector'
import action from '../../store/action';
import {Redirect} from 'react-router-dom'
class GeniusInfo extends Component {
 constructor(props,context){
  super(props,context)
  this.state={
      title:'',
      desc:'',
      avatar:''
  }
 }
 onChange(key,val){
     this.setState({
         [key]:val
     })
 }
 render() {
     let redirectTo = this.props.redirectTo;
     let pathname = this.props.location.pathname;
     console.log(this.props)
  return (
      <div>
          {redirectTo&&redirectTo!==pathname?<Redirect to={redirectTo}></Redirect>:null}
          <NavBar mode="dark">牛人信息完善</NavBar>
          <AvatarSelector selectAvatar={(img)=>{
              this.setState({
                  avatar:img
              })
          }}></AvatarSelector>
          <InputItem onChange={v=>this.onChange('title',v)}>求职岗位</InputItem>
          <TextareaItem rows={3} autoHeight title='个人简介'
          onChange={v=>this.onChange('desc',v)}></TextareaItem>
          <Button type='primary'
          onClick={()=>{
              this.props.doUpdateInfo(this.state)
          }}
          >保存</Button>
      </div>
    )
 }
}
export default connect(state=>state.user,action.updateInfo)(GeniusInfo);