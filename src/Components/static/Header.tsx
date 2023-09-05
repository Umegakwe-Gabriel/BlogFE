import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../common/Button';
import scroll from "react-scroll"

const Header = () => {

    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = ()=>{
    if (window.scrollY >= 400) {
        setScroll(true)
    } else {
      setScroll(false)
    }
    }

    window.addEventListener("scroll", onScroll)

  return (
    <div>
        {
            scroll ? <Container bg= "white">
            <Main>
                <Logo>Medium</Logo>

                <Holder>
                    <Hold>
                    <Nav>Our story</Nav>
                    <Nav>Membership</Nav>
                    <Nav>Write</Nav>
                    <Nav>Sign In</Nav>
                    </Hold>
                    <Button w='120px' text="Get Started" bc='rgb(27,137,22)'/>
                </Holder>
            </Main>
        </Container> : <Container bg=' rgb(254,193,23)'>
            <Main>
                <Logo>Medium</Logo>

                <Holder>
                    <Hold>
                    <Nav>Our story</Nav>
                    <Nav>Membership</Nav>
                    <Nav>Write</Nav>
                    <Nav>Sign In</Nav>
                    </Hold>
                    <ButtonHolder>
                    <Button w='120px' text="Get Started" bc="#191919"/>
                    </ButtonHolder>
                </Holder>
            </Main>
        </Container>
        }
    </div>
  )
}

export default Header;

const ButtonHolder = styled.div`

`
const Nav = styled.div`
    color: #191919;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;;
    font-weight: 400;
    font-size: 14px;
    color: #191919;
    line-height: 20px;
    margin-right: 19px;
`

const Hold = styled.div`
    display: flex;
    align-items: center;
`

const Holder = styled.div`
    display: flex;

`

const Logo = styled.div`
font-family: medium-content-sans-serif-font;
font-size: 30px;
font-weight: 800;
color: #191919;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div<{bg?: string}>`
width: 100%;
height: 70px;
background-color: ${({bg})=> bg};
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid black;
position: fixed; 
     z-index: 2;
`