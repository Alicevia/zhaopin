import React, { Component } from 'react'
import {connect} from 'react-redux'

import {  WingBlank } from 'antd-mobile'
import action from '../../store/action';
import UserCard from '../UserCard/UserCard'

class Genius extends Component {


 componentDidMount(){
  let {getBossAndGeniusInfoList} = this.props;
  getBossAndGeniusInfoList({type:'boss'});
}

 render() {
  return (
      <div>
         <WingBlank>
         {this.props.bossAndGeniusListInfo.map((item,index)=>{
             return <UserCard key={index} item={item}></UserCard>
         })}
      </WingBlank>
      </div>
    )
 }
}
export default connect(state=>({

  ...state.chatuser
}),action.updateInfo)(Genius);
