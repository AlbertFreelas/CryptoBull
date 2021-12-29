import React from 'react'
import vacines from './../../../fourth-block/BANNER03@2x.png'
import vacinesBackground from './../../../fourth-block/IMG01-BLC04.png'
import vacinesText from './../../../fourth-block/IMG02-BLC04@2x.png'
import text from './../../../fourth-block/TEXT01-BLC04@2x.png'

import { useState, useEffect } from 'react';

function FourthBlock() {
    const [width, setWidth] = useState(window.innerWidth)
    const [vacineTextDivHeight, setVacineTextDivHeight] = useState(0)
    const [vacineBackgroundDivHeight, setVacineBackgroundDivHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('load', () => {
            var updatedHeight = document.getElementById("vacinesTextDiv").clientHeight
            var updatedBackgroundHeight = document.getElementById("vacinesTextDiv").clientHeight

            setVacineTextDivHeight(updatedHeight)
            setVacineBackgroundDivHeight(updatedBackgroundHeight)
        });
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            var updatedHeight = document.getElementById("vacinesTextDiv").clientHeight
            var updatedBackgroundHeight = document.getElementById("vacinesTextDiv").clientHeight

            setVacineTextDivHeight(updatedHeight)
            setVacineBackgroundDivHeight(updatedBackgroundHeight)
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
                    src={vacines} 
                    style={{
                        width: width * 0.25,
                        marginTop: "3%"
                    }} 
                    alt="BullsCryptoVacines" 
                />
            </div>

            <div
                id='vacinesTextDiv'>
                <img 
                    src={vacinesBackground} 
                    style={{
                        width: width * 0.7,
                        marginTop: "2%"
                    }} 
                    alt="BullsCryptoVacinesBackground" 
                />
            </div>

            <div
                style={{
                    marginTop: 0.9 * -vacineBackgroundDivHeight
                }}>
                <img 
                    src={vacinesText} 
                    style={{
                        width: width * 0.3,
                        marginRight: "37%",
                    }} 
                    alt="BullsCryptoVacinesText" 
                />
            </div>

            <div>
                <img 
                    src={text} 
                    style={{
                        width: width * 0.6,
                        marginTop: "5%",
                    }} 
                    alt="BullsCryptoVacinesBottomText" 
                />
            </div>

        </div>
    )
}

export default FourthBlock
