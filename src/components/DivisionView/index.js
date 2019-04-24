import React from 'react';
import Styles from './styles.module.css';

const DivisionView = ({ children }) => (
    <div className={Styles.division}>
        { children }
    </div>
)

export default DivisionView;