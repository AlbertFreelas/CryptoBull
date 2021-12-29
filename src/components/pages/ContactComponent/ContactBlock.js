import React from 'react'
import discord from './../../../contact-block/DISCORD-BOTÃO@2x.png'
import telegram from './../../../contact-block/TELEGRAM-BOTÃO@2x.png'
import twitter from './../../../contact-block/TWITTER-BOTÃO.png'
import { useState, useEffect } from 'react';

function ContactBlock() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        });
    });

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: "auto"
        }}>
            <div
            style={{
                marginLeft: "3%",
                marginTop: "20%",
                position: "absolute",
                justifyContent: "space-between"
            }}>
                <div>
                    <img 
                        src={discord} 
                        style={{
                            width: width * 0.05
                        }} 
                        alt="BullsCryptoDiscord" 
                    />
                </div>
                <div>
                    <img 
                        src={twitter} 
                        style={{
                            marginTop: "50%",
                            width: width * 0.05
                        }} 
                        alt="BullsCryptoTwitter" 
                    />
                </div>
                <div>
                    <img 
                        src={telegram} 
                        style={{
                            marginTop: "50%",
                            width: width * 0.05
                        }} 
                        alt="BullsCryptoTelegram" 
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactBlock
