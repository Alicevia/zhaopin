import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../Component/Logo/Logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import action from '../../store/action';

class Login extends Component {
  constructor(props,context){
    super(props,context)
    this.state={
      user:'',
      pwd:''
      
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.register = this.register.bind(this)
   }
   register(){
     this.props.history.push('/register')
   }

   handleLogin(){
  
      this.props.doLogin(this.state)
   }


   handleChange(key,val){
    this.setState({
      [key]:val
    })
  }
 

 render() {
   let {redirectTo} = this.props;
  return (
      <div>
        {redirectTo?<Redirect to={redirectTo}></Redirect>:null}
        <Logo></Logo>

        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
        <WingBlank>
            <List>
              <InputItem onChange={(v)=>{this.handleChange('user',v)}} >用户名:</InputItem>
              <WhiteSpace></WhiteSpace>
              <InputItem type='password'
              onChange={(v)=>{this.handleChange('pwd',v)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            </List>
            <WhiteSpace></WhiteSpace>
            <Button onClick={this.handleLogin} type='warning'>登陆</Button>
            <WhiteSpace></WhiteSpace>
            <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
 }
}
export default connect(state=>({...state.user}),action.login)(Login);