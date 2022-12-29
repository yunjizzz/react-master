import styled from "styled-components";

interface ContainerProps{
    bgColor: string;
    borderColor?:string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height: 200px;
    background-color : ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps{
    bgColor: string;
    borderColor?:string;
    text?: string;
}

function Circle({ bgColor, borderColor , text = "defult text"} : CircleProps){
    return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>
    );
}

export default Circle;

interface PlayerShape {
    name:string;
    age:number;
}


const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({name:'yunji', age: 20});
sayHello({name:'jimin', age: 22});