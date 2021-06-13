// import Nav from "./NavBar";
// import Footer from "./Footer";
import React, { ReactChild } from "react";
import styled from "styled-components";

import Nav from "../components/nav";
import Footer from "../components/footer";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
}: {
  children: React.ReactChild;
}): React.ReactElement {
  return (
    <LayoutContainer>
      <Nav />
      <ChildComponentWrapper>
      {children}
      </ChildComponentWrapper>
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: var(--width);
  min-height: 100vh;
  height: 100%;
  position: relative;
`;
const ChildComponentWrapper = styled.div`
  min-height: 100vh;
  /* padding: 20px 0px 0px; */
`;
