import React from "react"
import Button from "../common/Button";
import styled from "styled-components";

const Hero = ()=>{
    return(
        <div>
            <Container>
                <Main>
                    <LeftSide>
                        <BigTxt>Stay Curious.</BigTxt>
                        <SmallTxt>Discover stories, thinking, and expertise from writers on any topic.</SmallTxt>
                        <Button w="260px" text="Start Reading" fs="17px" fw="650" bc="#191919"/> 
                    </LeftSide>
                    <RightSide>M  M  M  M   M   M   M M MM M M  M   M   M M M   M M M M M M  M MM MM M M M M M   M M M M M M M M M M   M M M M M M M  MM  M  MM  MM  MM  MM  M  M  M   M   M   M M MM M M  M   M   M M M   M M M M M M  M MM MM M M M M M   M M M M M M M M M M   M M M M M M M  MM  M  MM  MM  MM  MM  M  M  M   M   M   M M MM M M  M   M   M M M   M M M M M M  M MM MM M M M M M   M M M M M M M M M M   M M M M M M M  MM  M  MM  MM  MM  MM  M  M  M   M   M   M M MM M M  M   M   M M M   M  M  M  M   M   M   M M MM M M  M   M   M M M M   M   M M M M   M   M M M M   M   M M    </RightSide>
                </Main>
            </Container>
        </div>
    )
}

export default Hero;

const SmallTxt = styled.div`
font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 24px;
line-height: 24px;
font-weight: 400;
width: 430px;
color: #242424;
margin-bottom: 40px;
`
const BigTxt = styled.div`
font-family: gt-super, Georgia, Cambria, "Times New Roman", Times, serif;
font-size: 106px;
font-weight: 400;
line-height: 95px;
color: #000000;
margin-bottom: 30px;
`
const RightSide = styled.div`
width: 40%;
font-size: 25px;
font-weight: 550;
font-family: Shne;
color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`
const LeftSide = styled.div`
width: 60%;
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
`
const Container = styled.div`
width: 1005;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(254,193,23);
border-bottom: 1px solid black;
`