import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
flex: 1;
margin:3px;
height:70vh;
position:relative
`
const Image = styled.img`
width:100%;
height:100%;

`
const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
color:white;
margin-bottom:20px
`
const Button = styled.button`
border:none;
padding:10px;
cursor: pointer;

`
const CategoryItem = ({item}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={()=>navigate('/products/:category')}>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
