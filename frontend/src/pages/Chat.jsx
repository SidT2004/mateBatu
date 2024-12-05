import React from 'react'

import Messages from '../components/Chat/Messages';
import MessageInput from '../components/Chat/MessageInput';
import { useChat } from '../contextApi/ChatContext';

const Chat = () => {
    const { receiver } = useChat()

    return (
        <>
            <div className="chat">
            <Messages />
            <MessageInput />
            </div>
        </>

    )
}

export default Chat