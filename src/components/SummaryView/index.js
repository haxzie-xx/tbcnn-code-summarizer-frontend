import React, { Component } from 'react';
import Styles from './styles.module.css';

class SummaryView extends Component {

    constructor(props) {
        super(props);

        this.getSummary = this.getSummary.bind(this);
    }

    getSummary() {
        if (this.props.data && this.props.data.length > 0){
            return `Algorithm used in the function is ${this.props.data}`
        }
    }


    render() {
        return(
            <div className={Styles.SummaryView}>
                <div className={Styles.Header}>
                    Summary
                </div>
                <div className={Styles.SummaryLayout}>
                    { this.getSummary() }
                </div>
                <div className={[Styles.ButtonLayout]}>
                    <button onClick={this.props.callback}>Summarize</button>
                    <button>Copy</button>
                    <button>Download</button>
                </div>
            </div>
        )
    }
}

export default SummaryView;

