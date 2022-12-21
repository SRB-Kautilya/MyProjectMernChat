import React from 'react';
import ChatWindow from './ChatWindow';
import Message from './Message';
import './MessageList.css'


type AppProps = {
  messageList: any;
};

const MessageList = ({ messageList }: AppProps) => { 

  return (
    <div className='messageList'>
   {messageList.map((message: any,i:any)=> <div key = {i}><Message key = {i} message={message} displayName = {message.state.mane} /> </div>)}
    </div>
  )

}

export default MessageList;