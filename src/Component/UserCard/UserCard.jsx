import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'

class UserCard extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
     let item = this.props.item;
  return ( 
      <div>
          <WhiteSpace></WhiteSpace>
       <Card >        
        <Card.Header
        title={item.user}
        thumb={require(`../img/${item.avatar}.png`)}
        extra={<span>{item.title}</span>}
        />
        <Card.Body>
        <div>{item.desc.split('\n').map((value,key)=>{
            return <div key={key} style={{lineHeight:1.5}}>{value}</div>
        })}</div>
        </Card.Body>
        <Card.Footer content="现已离职" extra={<div>赶快联系我把</div>} />
    </Card>
      </div>
            )
    
 }
}
export default UserCard;