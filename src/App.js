import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessagesList from './Components/MessageList';
import Toolbar from './Components/Toolbar';
import Navbar from './Components/Navbar';
import Compose from './Components/Compose';
const api = 'http://localhost:8082/api/messages'

class App extends Component {
  state = {
    messages: [],
    clicked: false,
    subject: '',
    bodyContent: '',
  }

  handleSubject = (event) => {
    let subject = event.target.value
    this.setState({'subject': subject})
    console.log(this.state);
  }

  handleBody = (event) => {
    let bodyContent = event.target.value
    this.setState({'body': bodyContent})
    console.log(this.state);
  }

  composeMessage = async (body, method) => {
    const response = await fetch('http://localhost:8082/api/messages', {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const newMessage = await response.json()
    console.log(newMessage);
    this.setState({
      messages: [
        newMessage,
        ...this.state.messages
      ]
    })
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    console.log(json);
    this.setState({messages: json._embedded.messages})
  }

  async updateMessage (body, method) {
    await fetch('http://localhost:8082/api/messages', {
     method: method,
     body: JSON.stringify(body),
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
     }
   })
 }

  toggleClass = (message, nameOfClass) => {
    // event.stopPropagation()
    const index = this.state.messages.indexOf(message)
    let newMessages = this.state.messages.slice(0)
    newMessages[index][nameOfClass] = !newMessages[index][nameOfClass]
    this.setState({messages:newMessages})
  }

  selectAll = () => {
    let newMessages = this.state.messages
    if (newMessages.filter(message => (message.selected === true)).length === 8) {
      let selectAllFalse = newMessages.map(message => {
        message.selected = false;
        return message;
      })
      this.setState({messages:selectAllFalse})
    } else {
      let selectAllTrue = newMessages.map(message => {
        message.selected = true;
        return message;
      })
      this.setState({messages:selectAllTrue})
    }
  }

  markAllRead = () => {
    let newMessages = this.state.messages.map(message => {
      if(message.selected === true) {
        message.read = true
        message.selected = false
      }
      return message
    })
    this.setState({messages:newMessages})
  }

  markUnread = () => {
    let newMessages = this.state.messages.map(message => {
      if(message.selected === true) {
        message.read = false
        message.selected = false
      }
      return message
    })
    this.setState({messages:newMessages})
  }

  applyLabel = (value) => {
    let newMessages = this.state.messages.map(message => {
      if(message.selected === true) {
        message.labels.push(value)
        message.selected = false
      }
      return message
    })
    this.setState({messages:newMessages})
  }

  removeLabel = (value) => {
    let newMessages = this.state.messages.map(message => {
      if(message.selected === true) {
        let i = message.labels.indexOf(value)
        message.labels.splice(i, 1)
        message.selected = false
      }
      return message
    })
    this.setState({messages:newMessages})
  }

  deleteMessage = () => {
    let newMessages = this.state.messages
    let deleteMessages = newMessages.filter(message => (message.selected === true))
    deleteMessages.forEach(message => {
      let i = newMessages.indexOf(message)
      newMessages.splice(i, 1)
      return newMessages
    })
    this.setState({messages:newMessages})
  }

  updateUnread = () => {
    let newMessages = this.state.messages

  }

  composeNew = () => {
    let composeClicked = this.state.clicked
    composeClicked = !composeClicked
    this.setState({clicked: composeClicked})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Toolbar messages={this.state.messages}
          selectAll = {this.selectAll}
          markAllRead = {this.markAllRead}
          markUnread = {this.markUnread}
          applyLabel = {this.applyLabel}
          removeLabel = {this.removeLabel}
          deleteMessage = {this.deleteMessage}
          composeNew = {this.composeNew}/>
          <Compose composeNew = {this.composeNew}
          composeMessage = {this.composeMessage}
          clicked = {this.state.clicked}
          subject = {this.state.subject}
          bodyContent = {this.state.bodyContent}
          createItem = {this.createItem}
          handleSubject = {this.handleSubject}
          handleBody = {this.handleBody}/>
          <MessagesList messages={this.state.messages} toggleClass = {this.toggleClass}
          updateMessage = {this.updateMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
