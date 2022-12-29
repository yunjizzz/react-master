import styled, { keyframes } from "styled-components";


const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
`

const Emoji = styled.span`
  font-size : 98px;
`;

const Box = styled.div`
  background-color: ${props => props.color};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items:center;
  animation: ${rotationAnimation} 1s linear infinite ;
  span{
    font-size: 36px;
    &:hover{
      font-size:10px;
    }
  }
  ${Emoji}{
    &:hover{
      font-size:10px
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({required:true, minLength:10})`
  background-color: tomato;
`




function TestApp() {
  return (
    <Wrapper>
      <Box color="teal">
        <span>🥰</span>
        <Emoji>😎</Emoji>
      </Box>
      <Emoji>😎</Emoji>
      <Circle color="tomato"/>
      <Btn as="a" href="">login</Btn>
      <Input/>
    </Wrapper>
    
  );
}

export default TestApp;
