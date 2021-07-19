import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: ["Ask again later.","As I see it, yes.","It is certain.","Don't count on it.","Better not tell you now","Definitely, yes!"],
      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    //Math.random() to get a random number index.
    const randomNumber = Math.floor(Math.random() * answerArray.length);
    console.log(randomNumber)
    //generate response based on index.
    // ACTION ITEM: Update the answerArray selection
    this.setState({ selectedAnswer: answerArray[randomNumber] })
  }

  render(){
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <div class="ball">
          <div class="window">
            <p class="answer">{ this.state.selectedAnswer }</p>
            </div>
        </div>
        <br></br>
        <input
          className="inputBox"
          type="text"
        />
        <br />
        <button className="button" onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        
      </>
    )
  }
}

export default App
