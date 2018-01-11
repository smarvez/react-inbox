import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessagesList from './Components/MessageList';
import Toolbar from './Components/Toolbar';
import Navbar from './Components/Navbar';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: this.props.messages
    }
  }

  toggleClass = (event, message, nameOfClass) => {
    event.stopPropagation()
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
    })
    return newMessages
    this.setState({messages:newMessages})
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
          deleteMessage = {this.deleteMessage}/>
          <MessagesList messages={this.state.messages} toggleClass = {this.toggleClass}/>
        </div>

      </div>
    );
  }
}

export default App;
