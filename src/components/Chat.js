import React from 'react';
import styled from "styled-components";
import ChatInput from './ChatInput';

function Chat() {
    return <ChatContainer>
        <h1>Chat screen will be here</h1>

        <ChatInput/>
    </ChatContainer>
}

export default Chat;

const ChatContainer = styled.div`
flex: 0.7;
flex-grow:1;
overflow-y: scroll;
margin-top: 70px;

`;