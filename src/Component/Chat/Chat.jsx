import React, { Component } from 'react'
import {List,InputItem,NavBar,Icon,Grid} from 'antd-mobile'
import {connect} from 'react-redux'
import action from '../../store/action';
import {getChatId} from '../../utils/utils'



class Chat extends Component {
 constructor(props,context){
  super(props,context)
  this.state={
      text:'',
      msg:[],
      showEmoji:false
  }
  this.handleSubmit = this.handleSubmit.bind(this)
 }
 componentWillMount(){
    this.props.getMsgList()

 }
 componentDidMount(){
    if (!this.props.chatuser.chatmsg.length) {
        this.props.recvMsg()
        this.props.getMsgList()
    }

 }
 componentWillUnmount(){
    let to = this.props.match.params.user
    this.props.readMsg(to)

 }
 fixCarousel(){
    setTimeout(()=>{
        window.dispatchEvent(new Event('resize'))
    })
 }

 handleSubmit(){
    let from = this.props.user._id;
    let to =  this.props.match.params.user
    let msg = this.state.text

     this.setState({
         text:'',
         showEmoji:false
     },()=>{
        this.props.pushMsg({from,to,msg})
     })
 }

 render() {
    let emoji='😂 😍 😝 😋 🤩 😂 😍 😝 😋 🤩 😂 😍 😝 😋 🤩 😂 😍 😝 😋 🤩 😂 😍 😝 😋 🤩 🤩 😂 😍 😝 😋 🤩 😂 😍 😝 😋 🤩 😂 😍 😝 😋 🤩';
    emoji = emoji.split(' ').filter(item=>item).map(v=>({text:v}));
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
                chatmsgs.map((item,index)=>{
                    let avatar= require(`../img/${users[item.from].avatar}.png`)||''
                    return item.from === userid?(
                        <List key={index}> 
                            <List.Item thumb={avatar}>
                                {item.content}
                            </List.Item>
                        </List>
                        ):(<List key={index}>
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
                extra={<div>
                    <span style={{marginRight:15}}
                    onClick={()=>{
                        this.setState({
                            showEmoji:!this.state.showEmoji
                        })
                       this.fixCarousel()
                    }}
                    >😂</span>
                    <span onClick={this.handleSubmit}>发送</span>
                </div>
                }
                >信息</InputItem>
            </List>
            {this.state.showEmoji?(
                 <Grid onClick={el=>{this.setState({text:this.state.text+el.text})}}
                 data={emoji} isCarousel={true}
                 columnNum={9} carouselMaxRow={3}
                 ></Grid>
            ):null}
           
        </div>
      </div>

    )
 }
}
export default connect(state=>state,action.message)(Chat)