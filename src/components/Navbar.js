import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  margin-left: 25px;
  align-items: center;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left:25px;
`

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:'grey',fontSize:'16'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={()=>navigate('/')}>AKS</Logo>
        </Center>
        <Right>
          <MenuItem onClick={()=>navigate('/register')}>REGISTER</MenuItem>
          <MenuItem onClick={()=>navigate('/login')}>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon onClick={()=>navigate('/cart')}/>
          </Badge>
         </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
