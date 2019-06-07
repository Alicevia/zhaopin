import React, { Component } from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'
class AvatarSelector extends Component {
  static propTypes = {
    selectAvatar:PropTypes.func.isRequired
  }
 constructor(props,context){
  super(props,context)
  this.state={
      
  }
 }
 
 render() {
     let avatarList = 'boy,woman,girl,man,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',')
        avatarList = avatarList.map(item=>({
            icon:require(`./img/${item}.png`),
            text:item
        }))
     let selectHead = this.state.icon?(<div>
                                <span >已选择头像</span>
                                <img style={{width:20}} src={this.state.icon} alt=""/>
                                </div>):<span>请选择头像</span>
     return (
      <div>
        <List renderHeader={()=>selectHead}>
          <Grid  data={avatarList} columnNum={5} activeStyle={false} 
          onClick={ele=>{
              this.setState(ele)
              this.props.selectAvatar(ele.text)
          }}
          />
        </List>
      </div>
    )
 }
}
export default AvatarSelector;