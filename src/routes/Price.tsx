import { useState, useEffect } from "react";
import styled from "styled-components";

const PriceDiv = styled.div`
  font-size:30px;
`;
const PercentChangeDiv = styled.div<{ percentColor: boolean }>`
  font-size:25px;
  color:${(props) =>
    props.percentColor ? '#2b88f7' : '#fb334e'};
`;

interface PriceProps {
  price: number;
  percent24h:number;
  percent30d:number;
}

function Price({ price, percent24h, percent30d }: PriceProps) {
  const [percentColor24h, setPercentColor24h] = useState(true);
  const [percentColor30d, setPercentColor30d] = useState(true);
  useEffect(()=>{
    percent24h > 0 ? setPercentColor24h(true) : setPercentColor24h(false);
    percent30d > 0 ? setPercentColor30d(true) : setPercentColor30d(false);
  },[percent24h,percent30d])

  return <div> 
    <PriceDiv>
      Price : $ {price.toFixed(3)}
    </PriceDiv>
    <PercentChangeDiv percentColor={percentColor24h}>
      Percent Change 24 Hour : {percent24h} %
    </PercentChangeDiv>
    <PercentChangeDiv percentColor={percentColor30d}>
      Percent Change 30 Day : {percent30d} %
    </PercentChangeDiv>

  </div >;
}

export default Price;