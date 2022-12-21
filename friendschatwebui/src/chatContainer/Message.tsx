import React from 'react';
import ChatWindow from './ChatWindow';
import './MessageList.css'



const Message = ({message,displayName}:any) => {
  console.log('message',message)
  const isAgent = message.state.agentOrCustomer === 'agent';
  const isCust = message.state.agentOrCustomer === 'customer';

  return (
    <div className = 'messageContainer'>
       {isCust &&
       <><div className='displayName right'>{displayName}</div>
       <div className='message-time right'> </div>
       </>

       }
    </div>
  )


}

export default Message;