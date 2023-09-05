import React from 'react'
import styled from 'styled-components';

interface iBtn {
    w?: string;
    text?: string
    fs?: string;
    fw?: string;
    bc?: string
}

const Button: React.FC<iBtn> = ({text, w, fs, fw, bc}) => {
  return (
    <div>
        <Container w={`${w}`} fs={`${fs}`} bc={`${bc}`}
         fw={`${fw}`}>
            {text}
        </Container>
    </div>
  )
}

export default Button;

const Container = styled.div<{w?: string, fs?: string, fw?: string, bc?: string}>`
    width: ${({w})=>w};
    height: 45px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({bc})=>bc};
    font-size: ${({fs})=> fs};
    font-weight: ${({fw})=>fw};
    border-radius: 20px;
    cursor: pointer;
    line-height: 20px;
`