import React from 'react';
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

function App() {
  function onChange(newValue) {
    console.log('change',newValue);
  }
  return (
    <div className="App">
      <NavBar/>
      <DivisionView>
        <div style={editorLayoutStyle}>
          <Editor/>
        </div>
        <div style={summaryLayoutStyle}>
          <SummaryView/>
        </div>
      </DivisionView>
    </div>
  );
}

export default App;
