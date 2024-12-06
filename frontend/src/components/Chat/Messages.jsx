import React, { useEffect, useRef } from 'react'
import { useChat } from '../../contextApi/ChatContext'
import { socket } from '../../Socket'
import html2canvas from 'html2canvas';
import styled from 'styled-components';

const Messages = () => {
    const { userId, isSearching, setIsSearching, receiver, messages, setMessages, isTyping, message } = useChat()

    const newChat = () => {
        // setIsSearching(true)
        // setMessages([])
        // socket.emit("pairing-user", userId, (error) => {
        //     if (error) {
        //         return alert(error);
        //     }
        // })
        // return () => {
        //     socket.off("pairing-user");
        // };
            window.location.href = "/";

    }

   

    const messagesRef = useRef()

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div id='savedchat' className='messagesContainer' ref={messagesRef}>
            {!isSearching && !receiver && receiver !== "" && (
                <>
                    <div className='welcomeText'>mateBatu : talk to strangers</div>
                    <div className='startBtnSmall' onClick={newChat}>Start a new conversation</div>
                </>
            )}

            {receiver && <p className='connectedText'>You’re now chatting with a random user from your university</p>}
            {messages.map((message, index) => (
                <div key={index} className={message?.stranger ? "strangerWraper" : "youWraper"}>
                        <p className='msgBy' >
                            {message?.stranger &&<span className='strangerDp' ><img src="https://avatar.iran.liara.run/public/boy?username"   alt="" /></span>}
                        </p>
                    <div className={message?.stranger ? "strangerMsg" : "yourMsg"}>
                        <p className='actualMsg' >{message?.stranger ? message.stranger : message.you}</p>
                    </div>
                </div>
            ))
            }

            {isTyping && <div>Stranger is typing...</div>}

            {isSearching && <p className='loadingText loadingTextMobile'>Connecting to server...</p>}
            {isSearching && <p className='loadingText loadingTextDesktop'>Looking for someone you can chat with...</p>}
            {
                !isSearching && !receiver && receiver === "" &&
                <>
                    <div className='disconnectText disconnectedTextMobile'>Stranger has disconnected.</div>
                    <div className='disconnectText disconnectedTextDesktop'>Your conversational partner has disconnected</div>
                    
                   
                </>
            }
        </div >
    )
}

export default Messages

