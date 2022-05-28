import React, { Component } from 'react'

export class ClickEvent2 extends Component {
    clickHandler(){
        console.log("Thanks for clicking me")
    }
  render() {
    return (
      <>
          <button onClick = {this.clickHandler}>Click me !</button>
      </>
    )
  }
}

export default ClickEvent2