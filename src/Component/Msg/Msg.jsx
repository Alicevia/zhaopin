import React, { Component } from 'react'
import {connect} from 'react-redux'
class Msg extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div>
          msgsdfsdf
      </div>
    )
 }
}
export default connect()(Msg);