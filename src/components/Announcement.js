import styled from 'styled-components';
import {mobile} from "../responsive";

const Container = styled.div`
  height:30px;
  ${mobile({width:"140%",
})}
  background-color:teal;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  font-weight:500;

`
const Announcement = () => {
  return (
    <Container>
      Lightening deal! Free delivery on orders above ₹499
    </Container>
  )
}

export default Announcement
