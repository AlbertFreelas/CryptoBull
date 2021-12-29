import React from 'react'
import firstBackground from './../../../first-block/FUNDO-TELA01@2x.png'
import ledBar from './../../../first-block/FUNDO-TELA02@2x.png'

import { useState, useEffect } from 'react';

function FirstBlock() {

    const [width, setWidth] = useState(window.innerWidth)
    const [ledDivHeight, setLedDivHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('load', () => {
            var updatedHeight = document.getElementById("ledDiv").clientHeight
            console.log(updatedHeight)
            setLedDivHeight(updatedHeight)
        });
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            var updatedHeight = document.getElementById("ledDiv").clientHeight
            console.log(updatedHeight)
            setLedDivHeight(updatedHeight)
        });
      });

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: "auto",
        }}>
            <div>
                <img 
                    src={firstBackground} 
                    style={{
                        width: width,
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
                    }} alt="BullsCryptoLed" 
                />
            </div>

        </div>
    )
}

export default FirstBlock
