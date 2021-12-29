import React from 'react'
import discord from './../../../contact-block/DISCORD-BOTÃO@2x.png'

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
            flex: "auto",
            marginLeft: "5%",
            position: "absolute",
            top: height,
            justifyContent: "center"
        }}>
            <img 
                src={discord} 
                style={{
                    width: width * 0.07
                }} 
                alt="BullsCryptoBackground" 
            />
        </div>
    )
}

export default ContactBlock
