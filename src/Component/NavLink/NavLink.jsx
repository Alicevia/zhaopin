import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
class NavLink extends Component {
 static propTypes = {
     data:PropTypes.array.isRequired,
 }
 render() {
    let {pathname} = this.props.location
  return (
      <div className='navlink'>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            >
              {this.props.data.map((item,index)=>{
                  return (<TabBar.Item 
                    badge={item.path==='/msg'?parseFloat(this.props.unread):0}
                    key={index} 
                    icon={{uri:require(`./img/${item.icon}.png`)}} 
                    title={item.text} selected={pathname===item.path}
                    selectedIcon={{uri:require(`./img/${item.icon}-active.png`)}}  
                    onPress={()=>{
                        this.props.history.push(item.path)
                    }}
                    ></TabBar.Item> )
              })}
          </TabBar>
      </div>
    )
 }
}
export default withRouter(connect(state=>state.chatuser)(NavLink));