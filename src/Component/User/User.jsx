import React, { Component } from 'react'
import {connect} from 'react-redux'
class User extends Component {
 constructor(props,context){
  super(props,context)
 }
 render() {
  return (
      <div>
          user
      </div>
    )
 }
}
export default connect()(User);