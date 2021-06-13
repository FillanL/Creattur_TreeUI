import styled from "styled-components";
import Layout from "../components/mainlayout";

const Pricing = (): React.ReactElement => {
  return (
    <Layout>
      <PricingComponent>
        <CardContainer>
          <PriceCard>
            <h2>Beta</h2>
            <p>Access to:</p>
            <ul>
              <li>feature 1</li>
              <li>feature 1</li>
              <li>feature 1</li>
            </ul>
            <div>Order Now</div>
          </PriceCard>
        </CardContainer>
      </PricingComponent>
    </Layout>
  );
};
export default Pricing;
const PricingComponent = styled.div`
  background-color: lightblue;
  height: 100%;
  min-height: 100vh;
  padding: 0 25px;
  padding-top: 150px;
`;
const PriceCard = styled.div`
  height: 500px;
  border-radius: 1.25rem;
  padding: 50px;
  background-color: #acffdf;
  width: calc(var(--width) / 4);
  h2 {
    text-align: center;
    font-size: 28px;
  }
`;
const CardContainer = styled.div`
  /* align-self: center;
  justify-self: center; */
  /* margin-top: 100px; */
  position: relative;
`;
