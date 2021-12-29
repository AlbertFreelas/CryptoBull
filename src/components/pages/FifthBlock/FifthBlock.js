import React from 'react'
import banner from './../../../fifith-block/BANNER04-BLC05.png'
import investitorsBulls from './../../../fifith-block/IMG01-BLC05.png'
import soon from './../../../fifith-block/TEXT-BLC05@2x.png'
import bear from './../../../fifith-block/MINIBEAR@2x.png'
 
import { useState, useEffect } from 'react';

function FifthBlock() {
    const [width, setWidth] = useState(window.innerWidth)
    const [bearDivHeight, setBearDivHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('load', () => {
            var updatedHeight = document.getElementById("container").clientHeight
            setBearDivHeight(updatedHeight)
        });
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            var updatedHeight = document.getElementById("container").clientHeight
            setBearDivHeight(updatedHeight)
        });
      });

    return (
        <div 
            id="container"
            style={{
                display: "flex",
                flexDirection: "column",
                flex: "auto",
            }}>
            

            <div>
                <img 
                    src={banner} 
                    style={{
                        width: width * 0.65,
                        marginTop: "3%"
                    }} 
                    alt="BullsCryptoInvestitors" 
                />
            </div>

            <div>
                <img 
                    src={investitorsBulls} 
                    style={{
                        width: width * 0.65,
                        marginTop: "4%"
                    }} 
                    alt="BullsCryptoInvestorsBull" 
                />
            </div>

            <div>
                <img 
                    src={soon} 
                    style={{
                        width: width * 0.07,
                        marginTop: "3%",
                        marginLeft: "58%"

                    }} 
                    alt="BullsCryptoSoon" 
                />
            </div>

        </div>
    )
}

export default FifthBlock
