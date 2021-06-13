import Link from "next/link";
import styled from "styled-components";
const nav = () => {
  return (
    <NavComponent>
      <NavLogo>
        <Link href="/">CreatturTree</Link>
      </NavLogo>
      <List>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/pricing">Pricing</Link>
        </ListItem>
      </List>
      <ButtonsContainer>
        <GetStartBtn firstBtn={true} color={"prime"} bgColor={"lightgray"}>
          <Link href="/creattur/login">Log In</Link>
        </GetStartBtn>
        <GetStartBtn>
          <Link href="/creattur/register">Get Started</Link>
        </GetStartBtn>
      </ButtonsContainer>
    </NavComponent>
  );
};
export default nav;
interface btnProps {
  firstBtn?: boolean;
  bgColor?: string;
}
const NavComponent = styled.nav`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  height: var(--nav-height);
  text-align: center;
  width: var(--width);
`;
const List = styled.ul`
  list-style: none;
  align-self: center;
  text-align: right;
  /* justify-self: center; */
`;
const ListItem = styled.li`
  display: inline;
  margin: 0 10px;
  a {
    text-transform: capitalize;
  }
`;
const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const GetStartBtn = styled.div<btnProps>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgb(33, 52, 85)"};
  color: ${(props) => (props.color ? "rgb(33, 52, 85)" : "#b3c2ce")};
  align-self: center;
  text-align: center;
  justify-self: ${(props) => (props.firstBtn ? "right" : "center")};
  width: 100px;
  padding: 7px 10px;
  font-size: 14px;
  border-radius: 5px;
  /* text-align: ${(props) => (props.firstBtn ? "right" : null)}; */
`;
const NavLogo = styled.div`
  align-self: center;
  justify-self: center;
`;
