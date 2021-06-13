import Link from "next/link";
import styled from "styled-components";
const nav = () => {
  return (
    <NavComponent>
      <List>
        <ListItem>
          <Link href="/"></Link>
        </ListItem>
        <ListItem>
          <Link href="/">create Links</Link>
        </ListItem>
        <ListItem>
          <Link href="/">all links</Link>
        </ListItem>
        <ListItem>
          <Link href="/pricing">settings</Link>
        </ListItem>
      </List>
      <GetStartBtn>public view</GetStartBtn>
    </NavComponent>
  );
};
export default nav;

const NavComponent = styled.nav`
  display: grid;
  /* grid-template-columns: 30% 40% 30%; */
  height: var(--nav-height);
  text-align: center;
  width: var(--width);
`;
const List = styled.ul`
  list-style: none;
  align-self: center;
  justify-self: center;
`;
const ListItem = styled.li`
  /* display: inline; */
  margin: 0 10px;
  text-transform: capitalize;
`;
const GetStartBtn = styled.div`
  background-color: rgb(33, 52, 85);
  color: #b3c2ce;
  align-self: center;
  justify-self: center;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
`;
const NavLogo = styled.div`
  align-self: center;
  justify-self: center;
`;
