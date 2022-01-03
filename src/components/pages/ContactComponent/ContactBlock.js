import React from 'react'
import discord from './../../../contact-block/DISCORD-BOTÃO@2x.png'
import telegram from './../../../contact-block/TELEGRAM-BOTÃO@2x.png'
import twitter from './../../../contact-block/TWITTER-BOTÃO.png'
import { useState, useEffect } from 'react';

function ContactBlock() {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    const [scrollPosition, setScrollPosition] = useState(0);
    const contactBasePosition = window.innerHeight * 0.4

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: "auto",
        }}>
            <div
                style={{
                    marginLeft: "3%",
                    marginTop: (contactBasePosition + scrollPosition),
                    position: "absolute",
                    justifyContent: "space-between"
                }}>
                    <div
                        onClick={()=> window.open("https://discord.gg/Jq2QcmH2", "_blank")}
                    >
                    <img 
                        src={discord} 
                        style={{
                            pointerEvents: "none",
                            width: width * 0.05
                        }} 
                        alt="BullsCryptoDiscord" 
                    />
                </div>
                <div
                    onClick={()=> window.open("https://twitter.com/bullscryptoNFT?s=20", "_blank")}
                >
                    <img 
                        src={twitter} 
                        style={{
                            pointerEvents: "none",
                            marginTop: "50%",
                            width: width * 0.05
                        }} 
                        alt="BullsCryptoTwitter" 
                    />
                </div>
                <div
                    onClick={()=> window.open("https://t.me/bullscryptochannel", "_blank")}
                >
                    <img 
                        src={telegram} 
                        style={{
                            pointerEvents: "none",
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
