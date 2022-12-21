import React from 'react';
import './Chatheader.css'


type AppProps = {
    userName: any;
};

export default function ChatHeader({ userName }: AppProps) {


    return (
        <div className='chatHeader'>
            <h1>Heap Over Flow</h1>
            <h2 className='welcomeHead'> Welcome Developer {userName.name}! </h2>
        </div>
    )
}

