import styled from "styled-components";

const PriceDiv = styled.div`
  font-size:30px;
`;

interface PriceProps {
  price: number;
}

function Price({ price }: PriceProps) {
  //console.log(tickersData);
  return <div>
    <PriceDiv>
      $ {price.toFixed(3)}
    </PriceDiv>

  </div >;
}

export default Price;