import React, { Component } from 'react'
import {List,InputItem,NavBar, Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import action from '../../store/action';
import {getChatId} from '../../utils/utils'



class Chat extends Component {
 constructor(props,context){
  super(props,context)
  this.state={
      text:'',
      msg:[]
  }
  this.handleSubmit = this.handleSubmit.bind(this)
 }
 componentDidMount(){
    this.props.recvMsg()
    this.props.getMsgList()
 }

 handleSubmit(){
    let from = this.props.user._id;
    let to =  this.props.match.params.user
    let msg = this.state.text
    this.props.pushMsg({from,to,msg})
     this.setState({
         text:''
     })
 }

 render() {
    let chatmsgs = this.props.chatuser.chatmsg
    let userid = this.props.match.params.user
    let user = this.props.user._id
    let users = this.props.chatuser.users;
    if (!users[userid]) {
        return null;
    }
    let chatId = getChatId(userid,user)
    chatmsgs = chatmsgs.filter(item=>item.chatid===chatId)
  return (
      <div id='chat-page'>
          <NavBar mode='dark'  className='fixd-navbar'
          icon={<Icon type='left' 
          onClick={()=>{this.props.history.goBack()}} ></Icon>} 
          >{users[userid].name}</NavBar>
            {
                chatmsgs.map((item)=>{
                    let avatar= require(`../img/${users[item.from].avatar}.png`)
                    return item.from === userid?(
                        <List key={item._id}> 
                            <List.Item thumb={avatar}>
                                {item.content}
                            </List.Item>
                        </List>
                        ):(<List key={item._id}>
                            <List.Item className='chat-me'
                            extra={<img src={avatar}></img>}
                            >
                                {item.content}
                            </List.Item>
                        </List>)
                })
            }
        <div className='stick-footer'>
            <List >
                <InputItem placeholder='请输入' value={this.state.text}
                onChange={(v)=>{this.setState({text:v})}} 
                extra={<span onClick={this.handleSubmit}>发送</span>}
                >信息</InputItem>
            </List>
        </div>
      </div>

    )
 }
}
export default connect(state=>state,action.message)(Chat)