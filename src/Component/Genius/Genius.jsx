import React, { Component } from 'react'
import {connect} from 'react-redux'
class Genius extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div>
        boss
      </div>
    )
 }
}
export default connect()(Genius);
