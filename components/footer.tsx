import styled from "styled-components";

const footer = () => {
  return <FooteerComponent> &copy; 2021 &nbsp; Creattur Tree</FooteerComponent>;
};
export default footer;

const FooteerComponent = styled.footer`
  background-color: rgb(11, 22, 41);
  text-align: center;
  padding: 10px;
  bottom: 0;
  height: 50px;
  width: var(--width);
  color: white;
`;
