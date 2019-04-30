import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/python';
import 'brace/theme/monokai';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontSize: 20,
            code: '',
            summary: '',
        }
        this.onChange = this.onChange.bind(this);
        this.isSummarized = false;
    }

    onChange(newValue) {
        this.props.callback(newValue);
        
        this.setState({
            code: newValue
        });
    }

    getSummary() {
        if (this.props.summary && this.props.summary.length > 0) {
            return `# Algorithm used in the function is ${this.props.summary}#
`
        } else return '';
    }

    render() {
        return (
            <AceEditor
                mode="python"
                theme="monokai"
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                fontSize={18}
                width="100%"
                height="100%"
                style={{
                    lineHeight: 1.3
                }}
                value={`${this.getSummary()}${this.state.code}`}
            />
        )
    }
}

export default Editor;