import { Add, Remove } from '@mui/icons-material'
import styled from'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container=styled.div`

`
const Wrapper=styled.div`
padding:50px;
display: flex;
`
const ImageContainer=styled.div`
flex:1;
`
const Image=styled.img`
width:100%;
height:90vh;

`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px

`
const Title = styled.h1`
font-weight:200;
`
const Desc = styled.p`
margin:20px 0px;
`
const Price = styled.span`
font-weight:200;
font-size:40px;

`
const Filter= styled.div`
display:flex;
align-items: center;
`
const FilterContainer= styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
`
const FilterTitle= styled.span`
font-size:20px;
font-weight:200;
`
const FilterColor= styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor: pointer;

`
const FilterSize= styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption= styled.option``

const AddContainer= styled.div`
width:50%;
display: flex;
align-items: center;
justify-content:space-between;
`
const AmountContainer= styled.div`
display: flex;
align-items: center;
font-weight:700
`;
const Amount= styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`;
const Button= styled.button`
padding:10px;
border:2px solid teal;
background-color:white;
cursor: pointer; 
font-weight:500;
&:hover{background-color:#ffb6c1}
`;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10381447/2019/8/16/aaf1e3b1-2d19-4efd-9d92-204d1612b5f31565956541174-Campus-Sutra-Men-Sweatshirts-2091565956539708-5.jpg"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Campus-Sutra-Men-Sweatshirt</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque saepe numquam eveniet corrupti quasi ipsa accusantium tempora, ratione ipsum.</Desc>
          <Price>₹699</Price>
          <FilterContainer>
            <Filter> 
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="blue"/>
              <FilterColor color="green"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>             
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
