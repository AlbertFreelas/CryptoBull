import React from 'react'
import nft from './../../../third-block/BANER02@2x.png'
import nero from './../../../third-block/IMG01-BLC03@2x.png'
import descText from './../../../third-block/TEXT01-BLOC03.png'
import status from './../../../third-block/IMG02-BLOC03@2x.png'
import statusText from './../../../third-block/TEXT02-BLC03@2x.png'
import { useState, useEffect } from 'react';

function ThirdBlock() {
    const [width, setWidth] = useState(window.innerWidth)
    const [neroDivHeight, setNeroDivHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('load', () => {
            var updatedHeight = document.getElementById("neroDiv").clientHeight
            setNeroDivHeight(updatedHeight)
        });
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            var updatedHeight = document.getElementById("neroDiv").clientHeight
            setNeroDivHeight(updatedHeight)
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
                    src={nft} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.6,
                        marginLeft: "10%",
                        marginRight: "10%",
                        marginTop: "3%"
                    }} 
                    alt="BullsCryptoNFT" 
                />
            </div>
            <div>
                <img 
                    src={descText} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.6,
                        marginLeft: "14%",
                        marginTop: "2.5%"
                    }} 
                    alt="BullsCryptoNFT" 
                />
            </div>

            <div
                id='statusDiv'>
                <img 
                    src={status} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.21,
                        marginLeft: "35%",
                        marginTop: "2%"
                    }} 
                    alt="BullsCryptoStatus" 
                />
            </div>

            <div
                id='statusTextDiv'>
                <img 
                    src={statusText} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.3,
                        marginLeft: "38%",
                        marginTop: "2%"
                    }} 
                    alt="BullsCryptoStatus" 
                />
            </div>

            <div
                id='neroDiv'
                style={{
                    marginTop: 0.94 * -neroDivHeight
                }}>
                <img 
                    src={nero} 
                    style={{
                        pointerEvents: "none",
                        width: width * 0.32,
                        marginRight: "30%",
                    }} 
                    alt="BullsCryptoNero" 
                />
            </div>

        </div>
    )
}

export default ThirdBlock
