import React from 'react'
import styled from 'styled-components';
import {FcGoogle} from "react-icons/fc"
import {AiFillFacebook, AiFillMail} from "react-icons/ai"
import {FiKey} from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form"
import * as yup from "yup"

const SignIn = ()=> {

  const navigate = useNavigate()
  const model = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup?.ref("password")])
  })

  const {
    register, reset, handleSubmit, formState: {errors}
  } = useForm({
    resolver: yupResolver(model)
  })



  return (
    <div>
      <Container>
        <Main>
          <Top>
            <Logo/>
            <Title>Sign In</Title>

            <Div>
              {/* <SocialButton text='Use Google' color='#fb8585'
              icon={<FcGoogle/>}/>
              <SocialButton text='Use Facebook' color='#579cfd'icon={<AiFillFacebook/>}/> */}
            </Div>
            <br />
            <DotLine>
              <Line/>
              <Text>OR</Text>
              <Line/>
            </DotLine>
          </Top>

          <Bottom>
            <Holder>
              <TextHolder>Email: </TextHolder>
              <InputHolder>
                <Input placeholder='Your Email' {...register("email")}/>
                <IconMail/>
                </InputHolder>
                {errors.email && <Error>Please input your Email</Error>}
            </Holder>

            <Holder>
              <TextHolder>Password: </TextHolder>
              <InputHolder>
                <Input placeholder='Your Password' {...register("password")} type='password'/>
                <IconKey/>
                </InputHolder>
                {errors.password && <Error>Please input your password</Error>}
            </Holder>

            <Button type="submit" 
            onClick={()=>{
              navigate("/sign-in")
            }}>Sign In</Button>
            <TextContent>By SignIning you agree to our <span>Teams</span> and <span>Privacy</span></TextContent>

            <Signed to= "/sign-in">Sign In</Signed>
          </Bottom>
        </Main>
      </Container>
    </div>
  )
}

export default SignIn;

const Button = styled.button`
outline: none;
border: 0;
background-color: purple;
width: 100%;
height: 40px;
display: flex;
align-items: center;
cursor: pointer;
justify-content: center;
border-radius: 3px;
color: white;
font-size: 20px;
font-weight: 600;
`
const Signed = styled(Link)`
margin-bottom: 10px;
color: purple;
cursor: pointer;
font-weight: 600;
text-decoration: none;
`
const TextContent = styled.div`
font-size: 13px;
text-align: center;
margin: 10px 0;

span{
  font-weight: 700;
}
`
const Error = styled.div`
color: red;
font-size: 12px;
display: flex;
justify-content: flex-end;
`
const IconMail = styled(AiFillMail)`
margin-right: 5px;
font-size: 30px;
color: rgba(0,0,0,0.4);
`
const Input = styled.input`
outline: none;
flex: 1;
border: 0;
padding-left: 10px;
`
const InputHolder = styled.div`
width: 100%;
height: 35px;
border: 1px solid silver;
border-radius: 5px;
display: flex;
align-items: center;
`
const IconKey = styled(FiKey)`
margin-right: 5px;
font-size: 30px;
color: rgba(0,0,0,0.4);
`
const TextHolder = styled.div`
font-size: 14px;
font-weight: 600;
margin-bottom: 3px;
`
const Holder = styled.div`
width: 100%;
margin: 10px 0;
`
const Bottom = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
const Text = styled.div``
const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver;
`
const DotLine = styled.div`
display: flex;
width: 100%;
align-items: center;
`
const Div = styled.div`
display: flex;
`
const Title = styled.div`
font-weight: 600;
font-size: 30px;
margin-top: 10px;
`
const Logo = styled.div`
width: 60px;
height: 50px;
border-radius: 3px;
background-color: purple;
`
const Top = styled.div`
margin: 10px 0;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
`
const Main = styled.div`
width: 350px;
min-height: 450px;
border: 1px solid silver;
border-radius: 5px;
display: flex;
align-items: center;
flex-direction: column;
padding: 0 10px;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* height: 90vh;
margin-top: 20px; */
`