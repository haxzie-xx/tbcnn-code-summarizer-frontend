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
    this.downloadCallback = this.downloadCallback.bind(this);
    this.copyCallback = this.copyCallback.bind(this);
    this.data = "";
    this.state = {
      summary: "",
      funData: []
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
    let rx = /def\s([a-zA-Z0-9_].*)\s*\(.*\)\:/gm;
    //let funHeads = newCode.match();
    let funHeads = newCode.match(rx);
    if(this.state.summary.length > 0) {
      this.setState({
        summary: '',
      })
    } else {
      this.setState({
        funData: funHeads,
      })
    }
    console.log("Code changed");
  }

  downloadCallback() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.data));
    element.setAttribute('download', 'summarized.py');
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  copyCallback () {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', this.data);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
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
            <SummaryView 
              callback={this.onSummarizeClick} 
              data={this.state.summary} 
              funs={this.state.funData}
              downloadCallback={this.downloadCallback}
              copyCallback={this.copyCallback}/>
          </div>
        </DivisionView>
      </div>
    );
  }
  
}

export default App;
