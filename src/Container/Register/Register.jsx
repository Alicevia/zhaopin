import React, { Component } from 'react'
import {connect} from 'react-redux'
import Logo from '../../Component/Logo/Logo'
import {List,InputItem,WingBlank,WhiteSpace,Button,Radio} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import action from '../../store/action'
import './register.css'


class Register extends Component {
 constructor(props,context){
  super(props,context)
  this.state={
      type:'genius',
      user:'',
      pwd:'',
      repeatPWD:'',

  }
  this.handleRegister = this.handleRegister.bind(this)
  this.toLogin = this.toLogin.bind(this)
 }

 toLogin(){
   this.props.history.push('/login')
 }
 handleChange(key,val){
   this.setState({
     [key]:val
   })
 }

 handleRegister(){
   let {doRegister} = this.props;
   let {type,user,pwd,repeatPWD} = this.state;

   doRegister({type,user,pwd,repeatPWD}) 

 }


 render() {
   let {redirectTo} = this.props;
  return (
      <div>
        {redirectTo?<Redirect to={redirectTo}></Redirect>:null}
       
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem onChange={(v)=>{this.handleChange('user',v)}}>用户名:</InputItem>
            <InputItem type='password'
            onChange={(v)=>{this.handleChange('pwd',v)}}>密码:</InputItem>
            <InputItem type='password'
            onChange={(v)=>{this.handleChange('repeatPWD',v)}}>确认密码:</InputItem>
          </List>
            
            <WhiteSpace></WhiteSpace>
            <Radio.RadioItem checked={this.state.type==='genius'}
            onClick={()=>this.handleChange('type','genius')}
            >牛人</Radio.RadioItem>
            <Radio.RadioItem checked={this.state.type==='boss'}
            onClick={()=>this.handleChange('type','boss')}
            >BOSS</Radio.RadioItem>
            
          <WhiteSpace></WhiteSpace>

          <Button onClick={this.register} type='warning'
          onClick={this.handleRegister}
          >注册</Button>
          <WhiteSpace></WhiteSpace>
          <Button type='primary' onClick={this.toLogin}>已经有账号? 立即登陆></Button>
          </WingBlank>
        
      </div>
    )
 }
}
export default connect(state=>({...state.user}),action.register)(Register);