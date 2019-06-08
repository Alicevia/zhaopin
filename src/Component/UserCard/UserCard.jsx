import React, { Component } from 'react'
import { Card, WhiteSpace } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
class UserCard extends Component {
 constructor(props,context){
  super(props,context)
  this.handleClick = this.handleClick.bind(this)
 }
 handleClick(id){
     this.props.history.push(`/chat/${id}`)
 }
 render() {
     let item = this.props.item;
  return (
       <div className='usercard'>
        <WhiteSpace></WhiteSpace>
        <Card onClick={()=>this.handleClick(item._id)}>        
            <Card.Header
            title={item.user}
            thumb={require(`../img/${item.avatar}.png`)}
            extra={<span>{item.title}</span>}
            />
            <Card.Body>
            {item.type==='boss'?(<div>
                <h4>公司:{item.company}</h4>
                <h4>薪资:{item.money}</h4>
            </div>):null}
            <div>{item.desc.split('\n').map((value,key)=>{
                return <div key={key} style={{lineHeight:1.5}}>{value}</div>
            })}</div>

            <WhiteSpace></WhiteSpace>
            </Card.Body>
            <Card.Footer content={item.type==='boss'?'招有志之士':'现已离职'} extra={<div>赶快联系我把</div>} />
        </Card>
      </div>)
    
 }
}
export default withRouter(UserCard);