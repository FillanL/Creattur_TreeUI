import styled from "styled-components";

const LinkComponent = ({ title, link }) => {
  return (
    <LinkContainer>
      <LinkName>{title}</LinkName>
      <LinkParagraph>{link}</LinkParagraph>
    </LinkContainer>
  );
};
export default LinkComponent;

const LinkContainer = styled.div`
  width: 80%;
  height: 40px;
  background-color: rgb(133, 182, 245);
  margin: 20px auto;
  text-align: center;
`;
const LinkParagraph = styled.p`
  color: #0e0e0e;
  font-size: 12px;
`;
const LinkName = styled.h2`
  color: #0e0e0e;
  font-size: 14px;
`;
