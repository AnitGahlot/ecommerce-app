import styled from "styled-components";
import {Facebook,Instagram,Twitter,Pinterest, Room,Phone,Mail} from '@mui/icons-material'

const Container = styled.div`
display: flex;

`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding:20px
`
const Logo = styled.h1`
`
const Desc = styled.p`
margin:20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
margin-right:10px;
`

const Center = styled.div`
flex:1;
padding:20px;
`
const Title = styled.h3`
margin-bottom:30px;
margin-top:10px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
display: flex;
align-items: center;
`

const Right = styled.div`
flex:1;
padding:20px;
`
const ContactItem= styled.div`
display: flex;
align-items: center;
margin-bottom: 10px`

const Payment = styled.img`
width:50%
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AKS</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam.</Desc>
        <SocialContainer>
          <SocialIcon><Facebook/></SocialIcon>
          <SocialIcon><Instagram/></SocialIcon>
          <SocialIcon><Twitter/></SocialIcon>
          <SocialIcon><Pinterest/></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        <ListItem>Helpline</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>sec-22,galaxy road,Hisar,125001</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+1 300929-45968</ContactItem>
        <ContactItem><Mail style={{marginRight:"10px"}}/>contact@aks.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
