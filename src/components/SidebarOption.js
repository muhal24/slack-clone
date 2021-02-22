import React from 'react';
import styled from "styled-components";

function SidebarOption({Icon, title, addChannelOption}) {
     const addChannel =  () => {
         const channelName = prompt('Enter channel name')
     };
     const selectChannel = () => {};

    return <SidebarOptionContainer
    onClick={ addChannelOption ? addChannel : selectChannel }
    >
      {Icon && <Icon fontSize="small" styled={{padding: 10}} />}
      {Icon ? (
          <h3>{title}</h3>
      ) : (
          <SidebarOptionChannel>
              <span>#</span> {title}
          </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
height: 50px;
cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }
>h3 {
    font-weight: 500; 
}
>h3 > span  {
    padding:15px;
}
`;

const SidebarOptionChannel = styled.div`

`;