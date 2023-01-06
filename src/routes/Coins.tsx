import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a{
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a{
      color: ${(props) => props.theme.accentColor}
    }
  }
`;

const Title = styled.h1`
  font-size: 60px;
  color: ${(props) => props.theme.accentColor};

`;

const Loader = styled.span`
  text-align: center;
  display: block;
`

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string
}

function Coins() {

  // 로딩중이면 is Loading이 false다! 끝나면 data에 응답 데이터가 들어감
  // reactQuery는 데이터를 캐시해서 저장하기 때문에 계속 요청하지 않는다.
  // 뒤로가기 요청을 눌러도 Loading 버튼이 보이지 않음
  const { isLoading, data }= useQuery<ICoin[]>("allCoins", fetchCoins);
  console.log(isLoading, data);
  
  
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ?  <Loader>Loading...</Loader> : (<CoinsList>
        {data?.slice(0, 100).map (coin => <Coin key={coin.id}>
          <Link to={{
            pathname: `/${coin.id}`,
            state:{ name : coin.name }
          }}>
            <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
            {coin.name} &rarr;
          </Link>
          </Coin>)}
      </CoinsList>)}
    </Container>
  );
}
export default Coins;
