import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import DivisionView from './components/DivisionView';
import Editor from './components/EditorView';
import SummaryView from './components/SummaryView';


const editorLayoutStyle = {
  display: 'flex',
  flexGrow: '1',
  width: '70%',
  backgroundColor: '#c0c0c0'
}

const summaryLayoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f5f5f5',
  flexGrow: '1',
  width: '30%'
}

class App extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSummarizeClick = this.onSummarizeClick.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
    this.data = "";
    this.state = {
      summary: ""
    };
  }

  onChange(newValue) {
    console.log('change',newValue);
  }

  async onSummarizeClick() {
    console.log("Need to summarize");
    let response = await fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'data': this.data
      })
    });
    let data = JSON.parse(await response.text())
    this.setState({
      summary: data.message
    });
      
  }

  onCodeChange(newCode) {
    this.data = newCode;
    if(this.state.summary.length > 0) {
      this.setState({
        summary: ''
      })
    }
    console.log("Code changed");
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <DivisionView>
          <div style={editorLayoutStyle}>
            <Editor callback={this.onCodeChange} summary={this.state.summary}/>
          </div>
          <div style={summaryLayoutStyle}>
            <SummaryView callback={this.onSummarizeClick} data={this.state.summary}/>
          </div>
        </DivisionView>
      </div>
    );
  }
  
}

export default App;
