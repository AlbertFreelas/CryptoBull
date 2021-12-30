import React from 'react'
import firstBackground from './../../../first-block/FUNDO-TELA01@2x.png'
import ledBar from './../../../first-block/FUNDO-TELA02@2x.png'
import ledString from './../../../first-block/FUNDO-TELA03@2x.png'
import arm from './../../../first-block/FUNDO-TELA04@2x.png'

import play from './../../../first-block/PLAY-BOTÃO@2x.png'
import grayPlay from './../../../first-block/PLAY-BOTÃOgrey@2x.png'
import withepapper from './../../../first-block/WHITEPAPER-BOTÃO@2x.png'

import './FirstBlock.css';

import { useState, useEffect } from 'react';

function FirstBlock() {

    const [width, setWidth] = useState(window.innerWidth)
    const [ledDivHeight, setLedDivHeight] = useState(0)
    const [mouseHover, setMouseHover] = useState(false)
    
    const changeMouseOnState = props => {
        console.log("Enter On change")
        setMouseHover(true)
    }
    const changeMouseOffState = props => {
        console.log("Enter Off change")
        setMouseHover(false)
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            var updatedHeight = document.getElementById("ledDiv").clientHeight
            setLedDivHeight(updatedHeight)
        });
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            var updatedHeight = document.getElementById("ledDiv").clientHeight
            setLedDivHeight(updatedHeight)
        });
      });

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: "auto",
        }}>
            <div 
                style = {{
                    position:"absolute",
                }}>
                    <div>
                        <img
                            src={withepapper} 
                            style={{
                                width: 0.2 * width,
                                marginTop: "8%",
                                marginLeft: "380%",
                                pointerEvents: "none"
                            }} 
                            alt="BullsCryptoBackground" 
                        />
                    </div>
                    <div
                        style={{
                            width: 0.2 * width,
                            marginTop: "180%",
                            marginLeft: "200%",
                        }}
                        onMouseEnter={() => changeMouseOnState()}
                        onMouseOut={() => changeMouseOffState()}>
                        {mouseHover ? 
                        <img
                        src={grayPlay} 
                        style={{
                            width: 0.2 * width,
                            pointerEvents: "none"
                        }} 
                        alt="BullsCryptoBackground" 
                        />
                        :
                        <img
                            src={play} 
                            style={{
                                width: 0.2 * width,
                                pointerEvents: "none",
                            }} 
                            alt="BullsCryptoBackground" 
                        />}
                    </div>
                </div>
            <div
                id='background'
            >
                <img 
                    src={firstBackground} 
                    style={{
                        width: width,
                        pointerEvents: "none"
                    }} 
                    alt="BullsCryptoBackground" 
                />
            </div>

            <div
                id="ledDiv"
                style={{
                    marginTop: -ledDivHeight
                }}
            >
                <img src={ledBar} style={{
                        width: width,
                        pointerEvents: "none"
                    }} alt="BullsCryptoLed" 
                />
            </div>

            <div
                id="ledStringDiv"
                style={{
                    marginTop: -ledDivHeight
                }}
            >
                <img
                    className='ledStringDiv' 
                    src={ledString} 
                    style={{
                        width: width,
                        pointerEvents: "none"
                    }} alt="BullsCryptoLedText" 
                />
                <img 
                    src={arm} 
                    className='armDiv' 
                    style={{
                        width: 0.09 * width,
                        transform: "rotate(-4deg)",
                        marginTop: "-8.3%",
                        marginLeft: "-12.4%",
                        position: "absolute",
                        pointerEvents: "none"
                    }} alt="BullsCryptoArm" 
                />
            </div>

            

        </div>
    )
}

export default FirstBlock
