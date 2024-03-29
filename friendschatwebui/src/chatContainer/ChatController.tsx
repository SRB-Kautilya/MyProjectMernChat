import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatHeader/ChatHeader';
import './ChatController.css'
import { io } from 'socket.io-client'
import { useLocation } from 'react-router-dom';
import MessageList from './MessageList';
const socket = io('http://localhost:3001')




const ChatController = (props: any) => { 
    const { state } = useLocation();
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState<any[]>([])


    socket.on('receive_message', (data) => {
        //  console.log('messageList',messageList)
        console.log('receive_message', data)
        setMessageList([...messageList, data])
        console.log('setMessageList', messageList)
    })

    const sendMessage = (e: any) => { 

       // console.log('data', e)
        let id = socket.id
        setMessageList([...messageList, { state, message, id }])

        socket.emit('send_message', { state, message, id })
        setMessage('')
    }

    const submitMessage = (e: any) => {
        if (e.key === 'Enter') {
            sendMessage(e)
            // setMessage('')
        }
    }

    return (
        <div className='chat_box'>
            <ChatHeader userName={state} />
            <MessageList messageList={messageList} />
            <>
                <div className='type_message' >
                    <input placeholder='Message...' onChange={(event) => {
                        setMessage(event.target.value)
                    }} onKeyDown={submitMessage} value={message}></input>
                    <button onClick={sendMessage}>send Message</button>
                </div>
            </>

        </div>
    )

}

export default ChatController;