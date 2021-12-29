import React from 'react'
import wellcome from './../../../second-block/WELCOME-BANNER@2x.png'
import text from './../../../second-block/TEXTO01-BLC02@2x.png'
import box from './../../../second-block/IMG01-BLC02@2x.png' 
import santaBull from './../../../second-block/IMG02-BLC02@2x.png' 

import ScrollAnimation from 'react-animate-on-scroll';

import { useState, useEffect } from 'react';

function SecondBlock() {
    const [width, setWidth] = useState(window.innerWidth)
    const [SantaBullDivHeight, setSantaBullDivHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('load', () => {
            var updatedHeight = document.getElementById("santaBullDiv").clientHeight
            setSantaBullDivHeight(updatedHeight)
        });
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            var updatedHeight = document.getElementById("santaBullDiv").clientHeight
            setSantaBullDivHeight(updatedHeight)
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
                    src={wellcome} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.6,
                        marginLeft: "10%",
                        marginRight: "10%",
                        marginTop: "3%"
                    }} 
                    alt="BullsCryptoWellCome" 
                />
            </div>
            <div>
                <img 
                    src={text} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.56,
                        marginLeft: "12%",
                        marginRight: "12%",
                        marginTop: "2%"
                    }} 
                    alt="BullsCryptoText" 
                />
            </div>
            <div>
                <img 
                    src={box} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.6,
                        marginLeft: "10%",
                        marginRight: "10%",
                        marginTop: "2%"
                    }} 
                    alt="BullsCryptoBox" 
                />
            </div>
        <ScrollAnimation animateIn='fadeIn'>
            <div
                id="santaBullDiv"
                style={{
                    marginTop: 0.9 * -SantaBullDivHeight
                }}>
                <img 
                    src={santaBull} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.22,
                        marginLeft: "55%",

                    }} 
                    alt="BullsCryptoSantaBull" 
                />
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default SecondBlock
