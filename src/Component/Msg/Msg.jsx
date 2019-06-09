import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Brief } from 'antd-mobile/lib/list/ListItem';
import {List, Badge} from 'antd-mobile'
class Msg extends Component {
 constructor(props,context){
  super(props,context)
 }
 getLast(arr){
    return arr[arr.length-1]
 }
 render() {
     let userid = this.props.user._id
     let userInfo = this.props.chatuser.users;

     let msgGroup = {}
     this.props.chatuser.chatmsg.forEach(item=>{
         msgGroup[item.chatid] = msgGroup[item.chatid]||[]
         msgGroup[item.chatid].push(item)
     })
     let chatList = Object.values(msgGroup).sort((a,b)=>{
         let a_last = this.getLast(a).create_time
         let b_last = this.getLast(b).create_time
         return b_last-a_last
     })
     console.log(chatList)

  return (
      <div>
              {chatList.map(item=>{
                  let lastItem = this.getLast(item)

                  let targetId = item[0].from===userid?item[0].to:item[0].from;
                  let unreadNum= item.filter(v=>!v.read&& v.to===userid).length
                  return (
                    <List key={lastItem._id}>
                      <List.Item extra={<Badge text={unreadNum}></Badge>}
                      arrow='horizontal' onClick={()=>{this.props.history.push(`/chat/${targetId}`)}}
                      thumb={require(`../img/${userInfo[targetId].avatar}.png`)} >
                           {lastItem.content}
                           <Brief>{userInfo[targetId].name}</Brief>
                      </List.Item>
                      </List>
                  )
              })}
          
      </div>
    )
 }
}
export default connect(state=>state,null)(Msg);