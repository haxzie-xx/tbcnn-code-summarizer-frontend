import React from 'react';
import Styles from './styles.module.css';


const FunctionCard = (props) => {
    return(
    <>
        <div className={Styles.FunctionCard}>
            <h3>{props.name}</h3>
            <div className={Styles.CardBottom}>

            </div>
        </div>
    </>)
}

export default FunctionCard;