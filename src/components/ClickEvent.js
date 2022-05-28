import React from 'react'

function ClickEvent() {
    function clickHandler(){
        console.log("Button clicked");
    }
  return (
    <>
        <h1>Hi, Enid.</h1>
        <button onClick ={clickHandler}>Click here</button>
    </>
  )
}

export default ClickEvent