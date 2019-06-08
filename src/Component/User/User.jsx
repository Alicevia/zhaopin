import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../../store/action';
import {Result,List, WhiteSpace,Button,Modal} from 'antd-mobile'
import { Brief } from 'antd-mobile/lib/list/ListItem';
import browserCookie from 'browser-cookies'
import {Redirect} from 'react-router-dom'

class User extends Component {
 constructor(props,context){
  super(props,context)
  this.logout = this.logout.bind(this)
 }

 logout(){
    let alert = Modal.alert;
    alert('注销', '确认退出吗', [
        { text: 'Cancel', onPress: () => console.log('cancel') },
        { text: 'Ok', onPress: () => {
            browserCookie.erase('userid')
           
            this.props.logoutSubmit()
            this.props.history.push('/login')
        } },
      ])
 }



 render() {
     let {user,avatar,type,company,title,desc,money} = this.props;
  return (
      <div>
          <Result
              img={<img src={require(`../img/${avatar}.png`)}
              style={{width:50}}alt='' />}
              title={user}
              message = {type==='boss'?company:null}
              />
           <List renderHeader={()=>'简介'}>
                <List.Item multipleLine>
                    <h4>职位:{title} </h4>
                    {money?<Brief>薪资:{money}</Brief>:null}                  
                    {desc.split('\n').map((item,index)=>{
                        return  <Brief key={index}>{item}</Brief>
                    })}
                </List.Item>
           </List>
           <WhiteSpace></WhiteSpace>   
           <Button type="warning" onClick={this.logout}>退出登陆</Button>                             
      </div>
    
     )
 }
}
export default connect(state=>state.user,action.updateInfo)(User);