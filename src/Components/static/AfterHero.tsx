import React, { useState } from "react"
import styled from "styled-components";
import {MdOutlineBookmarkAdd} from "react-icons/md"
import img from "../../assets/Mava.jpeg"
import img1 from "../../assets/chaynhq.png"

const AfterHero = ()=>{

    const [scroll, setScroll] = useState<boolean>(false)
    const onScroll = ()=>{
        if (window.scrollY >= 700) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
window.addEventListener("scroll", onScroll)
    return(
        <div>
            <Container>
                <Main>
                    <LeftSide>
                        <Holder>
                            <Hold>
                                <Fall>
                                <Avatar src={img}/>
                                <SmallerTxt>Barack Obama</SmallerTxt>
                                </Fall>
                                <ABigTxt>Boy's Problems</ABigTxt>

                                <SmallTxt>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem sed architecto ipsa amet omnis.</SmallTxt>
                                <SFall>
                                    <Date>Jul 17</Date>
                                    <span style={{alignItems: "center", justifyContent: "center", marginBottom: "30px"}}>.</span>
                                    <Time>4 min read</Time>
                                    <IconH>
                                    <Icon><MdOutlineBookmarkAdd/></Icon>
                                    </IconH>
                                </SFall>
                            </Hold>
                        </Holder>
                        <Img src={img1}/>
                    </LeftSide>
                    <RightSide>
                        <BigTxt>
Discover of what matters to you</BigTxt>
                    <How>
                        <Button>Programming</Button>
                        <Button>Data Science</Button>
                        <Button>Technology</Button>
                        <Button>Self Improvement</Button>
                        <Button>Relationships</Button>
                        <Button>Machine Learning</Button>
                        <Button>Productivity</Button>
                        <Button>Politics</Button>
                        <Button>Politics</Button>
                    </How>
                    <Line/>
                    <Color>See more topics</Color>
                    <Write>
                        <Nav>Help</Nav>
                        <Nav>Status</Nav>
                        <Nav>Writers</Nav>
                        <Nav>Blog</Nav>
                        <Nav>Career</Nav>
                        <Nav>Privacy</Nav>
                        <Nav>Terms</Nav>
                        <Nav>About</Nav>
                        <Nav>Text to speech</Nav>
                        <Nav>Teams</Nav>
                    </Write>
                    </RightSide> 
                </Main>
            </Container>
        </div>
    )
}

export default AfterHero;

const SFall = styled.div`
display: flex;
margin-bottom: 10px;
`
const Fall = styled.div`
display: flex;
margin-bottom: 10px;
`
const Time = styled.div`
color: #6b6b6b;
font-size: 13px;
font-weight: 400;
line-height: 20px;
margin-left: 5px;
`
const Date = styled.div`
color: #6b6b6b;
font-size: 13px;
font-weight: 400;
line-height: 20px;
margin-right: 5px;
`
const ABigTxt = styled.div`
font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 700;
margin-bottom: 5px;
color: #242424;
line-height: 16px;
font-size: 16px;
`
const SmallTxt = styled.div`
font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 400;
color: #6b6b6b;
line-height: 20px;
font-size: 16px;
width: 370px;
margin-bottom: 5px;
`
const SmallerTxt = styled.div`
font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 500;
color: #242424;
line-height: 16px;
display: flex;
margin-top: 8px;
/* justify-content: center; */
align-items: center;
font-size: 13px;
`
const Avatar = styled.img`
border-radius: 50%;
margin-right: 8px;
width: 25px;
height: 25px;
object-fit: cover;
`
const IconH = styled.div`
display: flex;
justify-content: flex-end;
color: rgb(36,37,37);
margin-left: 235px;
`
const Icon = styled.div`
color: rgb(36,37,37);
`
const Line = styled.div`
margin-top: 10px;
border: 1px solid silver;
width: 100%;
`
const Color = styled.div`
color: rgb(27,137,22);
margin-top: 10px;
`
const How = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Button = styled.div`
width: 140px;
border-radius: 15px;
margin-top: 10px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(242,243,243);
font-size: 14px;
font-weight: 400;
color: #242424;
line-height: 20px;
cursor: pointer;
`
const Nav = styled.div`
margin-right: 30px;
margin-bottom: 5px;
cursor: pointer;
`
const Write = styled.div`
display: flex;
margin-top: 10px;
flex-wrap: wrap;
`
const Img = styled.img`
width: 200px;
height: 160px;
object-fit: cover;
background-color: rgb(240,36,77);
`
const BigTxt = styled.div`
font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight: 700;
margin-bottom: 5px;
color: #242424;
line-height: 16px;
font-size: 16px;
`
const Hold = styled.div``
const Holder = styled.div`
display: flex;
flex-direction: column;
`
const RightSide = styled.div`
display: flex;
flex-direction: column;
width: 40%;
`
const LeftSide = styled.div`
display: flex;
width: 60%;
`
const Main = styled.div`
height: 100%;
width: 92%;
display: flex;

`
const Container = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
/* align-items: center; */
margin-top: 60px;
`