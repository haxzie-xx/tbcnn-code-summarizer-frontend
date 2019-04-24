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
            code: ''
        }

        this.onChange = this.onChange.bind(this);

    }

    onChange(newValue) {
        this.setState({
            code: newValue
        });
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
                value={this.state.code}
            />
        )
    }
}

export default Editor;