import styled from 'styled-components'

const Container =styled.div`
width:100vw;
height:100vh;
background-color:	
rgba(0,128,128,0.3);

background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper =styled.div`
width:40%;
padding:20px;
background-color:white; 
`
const Title =styled.h1`
font-size:24px;
font-weight:300;
`
const Form =styled.form`
display:flex;
flex-direction: column;
`
const Input =styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px
`
const Button =styled.button`
display:flex;
justify-content:center;
width:40%;
background-color:lightgray;
margin:10px 0px;
padding:10px 15px;
&:hover{background-color:teal;}
cursor: pointer;
`
const LinkContainer =styled.div`
display:flex;
justify-content:space-between;
`
const Link =styled.a`
margin:5px 0px;
cursor: pointer;
&:hover{color:coral}

`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"/>
          
          <Input placeholder="password"/>
        </Form>
        
        <Button>LOGIN</Button>
        <LinkContainer>
        <Link>Forgot your password?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
        </LinkContainer>
        
      </Wrapper>
    </Container>
  )
}

export default Login
