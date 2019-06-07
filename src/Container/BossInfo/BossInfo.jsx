import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem,TextareaItem,Button} from 'antd-mobile'
import  AvatarSelector from '../../Component/Avatar-selector/AvatarSelector'
import action from '../../store/action';
import {Redirect} from 'react-router-dom'
class BossInfo extends Component {
 constructor(props,context){
  super(props,context)
  this.state={
      title:'',
      company:'',
      money:'',
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
          <NavBar mode="dark">BOSS完善信息</NavBar>
          <AvatarSelector selectAvatar={(img)=>{
              this.setState({
                  avatar:img
              })
          }}></AvatarSelector>
          <InputItem onChange={v=>this.onChange('title',v)}>招聘职位</InputItem>
          <InputItem onChange={v=>this.onChange('company',v)}>公司名称</InputItem>
          <InputItem onChange={v=>this.onChange('money',v)}>薪资水平</InputItem>
          <TextareaItem rows={3} autoHeight title='职位要求'
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
export default connect(state=>state.user,action.updateInfo)(BossInfo);