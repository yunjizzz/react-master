import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
    coinId: string;
}

const Title = styled.h1`
  font-size: 60px;
  color: ${(props) => props.theme.accentColor};

`;

const Loader = styled.span`
  text-align: center;
  display: block;
`

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;

interface RouteState{
    name: string;
}

function Coin() {
    const { coinId } = useParams<RouteParams>();
    const [loading, setLoading] = useState(true);
    const {state} = useLocation<RouteState>(); // dom에서 보내주는 정보 확인 가능
    
    useEffect(()=>{
        (
           async () => {
                const json = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
                const priceData =  await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
                console.log(priceData);
           }
        )();
    },[]);

    

    return (
    <Container>
        <Header>
            <Title>{state?.name || "Loading..."}</Title>
        </Header>
        {loading? <Loader>Loading...</Loader> : null}
    </Container>
    );

}
export default Coin;