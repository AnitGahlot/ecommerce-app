import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding:20px
`;

const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor: pointer;
border: ${(props)=> props.type === "filled" && "none"};
background-color:${(props)=>props.type ==="filled" ? "black" : "transparent"};
color:${(props)=>props.type ==="filled" && "white"};
`;

const TopTexts = styled.div``
const TopText = styled.span`
text-decoration: underline;
cursor:pointer;
margin:0px 10px;
&:hover {color:lightcoral}
`

const Bottom = styled.div`
display: flex;
justify-content:space-between;
`;
const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display:flex;
justify-content:space-between;
`;
const ProductDetail = styled.div`
display: flex;
flex:2;

`;
const ProductSize = styled.span`

`;
const Image = styled.img`
width:200px;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color}
`;
const Details = styled.div`
padding:20px;
display:flex;
flex-direction: column;
justify-content:space-around;
`;
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size:24px;
margin:5px
`;
const ProductPrice = styled.div`
font-size:30px;
`;
const Hr = styled.hr`
background-color:#eee;
border:none;
height:5px;
`;
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`;
const SummaryTitle = styled.h1`
font-weight:200;

`;
const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight:${props=>props.type ==="total" && "500"};
font-size:${props=>props.type ==="total" && "24px"}
`;
const SummaryItemText = styled.p`

`;
const SummaryItemPrice = styled.p`

`;
const Button = styled.button`
width:100%;
padding:10px;
background-color:coral;
color:white;
font-weight:600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
          
        </Top>
        <Bottom>
          <Info>
          <Product>
            <ProductDetail>
              <Image src={"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/aaf1e3b1-2d19-4efd-9d92-204d1612b5f31565956541174-Campus-Sutra-Men-Sweatshirts-2091565956539708-5.jpg"}/>
              <Details>
                <ProductName><b>Product:</b>DENIM SWEATSHIRT</ProductName>
                <ProductId><b>ID:</b>58789899987</ProductId>
                <ProductColor color="black"/>
                <ProductSize><b>SIZE:</b>M</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <AmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
              </AmountContainer>
              <ProductPrice>₹799</ProductPrice>
               </PriceDetail>
          </Product>
          <Hr/>
          <Product>
            <ProductDetail>
              <Image src={"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg"}/>
              <Details>
                <ProductName><b>Product:</b>PRINTED T-SHIRT</ProductName>
                <ProductId><b>ID:</b>58789899987</ProductId>
                <ProductColor color="teal"/>
                <ProductSize><b>SIZE:</b>M</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <AmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
              </AmountContainer>
              <ProductPrice>₹499</ProductPrice>
               </PriceDetail>
          </Product>
          </Info>        
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹2596</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹49</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-₹49</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>₹2596</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
      
    </Container>
  )
}

export default Cart
