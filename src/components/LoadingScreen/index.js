import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const LayoutBackground = styled.div`
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(32, 32, 32, 0.5);
`;

const Card = styled.div`
    max-width: 400px;
    width: 40%;
    background: #202020;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.12);

    p {
    display: inline;
    font-size: 1.3em;
    padding: 10px;
    }
`;

const ScaleOut = keyframes`
   0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`;

const Spinner = styled.div`
    width: 40px;
    height: 40px;
    margin: 10px 30px;
    background-color: #fff;
    z-index: 9999;

    border-radius: 100%;  
    -webkit-animation: ${ScaleOut} 1.0s infinite ease-in-out;
    animation: ${ScaleOut} 1.0s infinite ease-in-out;
`;

export default class LoadinScreen extends Component {
    render() {
        return (
            <LayoutBackground>
                <Card>
                    <Spinner />
                    <p>Summarizing code</p>
                </Card>
            </LayoutBackground>
        )
    }
}
