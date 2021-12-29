import React from 'react'
import ledBanner from './../../../sixth-block/TOP01-BLC06.png'
import ledTextBanner from './../../../sixth-block/TOP02-BLC06@2x.png'
import background from './../../../sixth-block/BACKGROUND-BLC06@2x.png'
import baner from './../../../sixth-block/BANNER05-BLC06.png'
import road from './../../../sixth-block/IMG01-BLC06.png'
import firstText from './../../../sixth-block/TEXT01-BLC06@2x.png'
import secondText from './../../../sixth-block/TEXT02-BLC06@2x.png'
import thirdText from './../../../sixth-block/TEXT03-BLC06@2x.png'
import fourthText from './../../../sixth-block/TEXT04-BLC06.png'

import { useState, useEffect } from 'react';

function SixthBlock() {
    const [width, setWidth] = useState(window.innerWidth)
    const [ledDivHeight, setLedDivHeight] = useState(0)
    const [roadDivHeight, setRoadDivHeight] = useState(0)

    useEffect(() => {
        window.addEventListener('load', () => {
            var updatedHeight = document.getElementById("ledDiv").clientHeight
            setLedDivHeight(updatedHeight)

            var updatedRoadHeight = document.getElementById("road").clientHeight
            setRoadDivHeight(updatedRoadHeight)
        });
        
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            var updatedHeight = document.getElementById("ledDiv").clientHeight
            setLedDivHeight(updatedHeight)

            var updatedRoadHeight = document.getElementById("road").clientHeight
            setRoadDivHeight(updatedRoadHeight)
        });
    })

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
                    src={ledBanner} 
                    style={{
                        pointerEvents: "none",
                        width: width,
                        marginTop: "3%"
                    }} 
                    alt="BullsCryptoLedBottom" 
                />
            </div>

            <div
                id="ledBannerStringDiv"
                style={{
                    marginTop: -ledDivHeight
                }}
                >
                <img 
                    src={ledTextBanner} 
                    style={{
                        pointerEvents: "none",
                        width: width,
                    }} 
                    alt="BullsCryptoLedBottom" 
                />
            </div>

            <div>
                <img 
                    src={background} 
                    style={{
                        pointerEvents: "none",
                        width: width,
                    }} 
                    alt="BullsCryptoRoadMapBackground" 
                />
            </div>

            <div style={{
                position: "absolute",
                marginTop: ledDivHeight,
            }}>
                <div>
                    <img 
                        src={baner} 
                        style={{
                            pointerEvents: "none",
                            width: width * 0.35,
                            marginTop: "20%",
                            marginLeft: "13%"
                        }} 
                        alt="BullsCryptoRoadMapBanner" 
                    />
                </div>
                <div
                    id="road"
                    style={{
                        marginTop: "-7%"
                    }}
                >
                    <img 
                        src={road} 
                        style={{
                            pointerEvents: "none",
                            width: width * 0.88,
                            marginLeft: "10%"
                        }} 
                        alt="BullsCryptoRoad" 
                    />
                </div>

                <div>
                    <div style={{marginTop: 0.8 *  -roadDivHeight}}>
                        <img 
                            src={firstText} 
                            style={{
                                pointerEvents: "none",
                                width: width * 0.2,
                                marginLeft: "50%"
                            }} 
                            alt="BullsCryptoRoad" 
                        />
                    </div>
                    <div style={{marginTop: 0.05 * roadDivHeight}}>
                        <img 
                            src={secondText} 
                            style={{
                                pointerEvents: "none",
                                width: width * 0.25,
                                marginLeft: "1.5%"
                            }} 
                            alt="BullsCryptoRoad" 
                        />
                    </div>

                    <div style={{marginTop: 0.08 * roadDivHeight}}>
                        <img 
                            src={thirdText} 
                            style={{
                                pointerEvents: "none",
                                width: width * 0.27,
                                marginLeft: "30%"
                            }} 
                            alt="BullsCryptoRoad" 
                        />
                    </div>

                    <div style={{marginTop: 0.088 * roadDivHeight}}>
                        <img 
                            src={fourthText} 
                            style={{
                                pointerEvents: "none",
                                width: width * 0.1,
                                marginLeft: "5%"
                            }} 
                            alt="BullsCryptoRoad" 
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SixthBlock
