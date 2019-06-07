import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import action from '../../store/action';
import UserCard from '../UserCard/UserCard'
class Boss extends Component {
 constructor(props,context){
  super(props,context)
 }
 componentDidMount(){
     let {getBossAndGeniusInfoList} = this.props;
     getBossAndGeniusInfoList({type:'genius'});
 }
 render() {
     
  return (
      <WingBlank>
         {this.props.bossAndGeniusListInfo.map((item,index)=>{
             return <UserCard key={index} item={item}></UserCard>
         })}
      </WingBlank>
    )
 }
}
export default connect(state=>state.user,action.updateInfo)(Boss);