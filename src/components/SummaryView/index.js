import React, { Component } from 'react';
import Styles from './styles.module.css';
import FunctionCard from '../FunctionCard';

class SummaryView extends Component {

    constructor(props) {
        super(props);

        this.getSummary = this.getSummary.bind(this);
    }

    getSummary() {
        console.log(this.props.funs);
        if (this.props.data && this.props.data.length > 0){
            return `Algorithm used in the function is ${this.props.data}`
        }
    }

    getFunctions() {
        let funs = [];
        if (this.props.funs && this.props.funs.length > 0) {
            funs.push(<p><b>Functions Used</b><span className={Styles.count}>{this.props.funs.length}</span></p>);

            this.props.funs.forEach( fn => {
                let params = [];
                fn.match(/\((.*)\)\s*\:$/).forEach( item => {
                    let p = String(item)
                    params.push(p);
                });
                console.log(params);
                funs.push(<FunctionCard name={fn} params={params}></FunctionCard>);
            });

            return funs;
        }
    }


    render() {
        return(
            <div className={Styles.SummaryView}>
                <div className={Styles.Header}>
                    Summary
                </div>
                <div className={Styles.SummaryLayout}>
                    <p>
                    { this.getSummary() }
                    </p>
                    <p>
                    { this.getFunctions() }
                    </p>
                    
                </div>
                <div className={[Styles.ButtonLayout]}>
                    <button onClick={this.props.callback}>Summarize</button>
                    <button onClick={this.props.copyCallback}>Copy</button>
                    <button onClick={this.props.downloadCallback}>Download</button>
                </div>
            </div>
        )
    }
}

export default SummaryView;

