import React, { Component } from 'react';
import Styles from './styles.module.css';

class SummaryView extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={Styles.SummaryView}>
                <div className={Styles.Header}>
                    Summary
                </div>
                <div className={Styles.SummaryLayout}>
                
                </div>
                <div className={[Styles.ButtonLayout]}>
                    <button>Summarize</button>
                    <button>Copy</button>
                    <button>Download</button>
                </div>
            </div>
        )
    }
}

export default SummaryView;

