import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
// import "../styles/subbornimage.css"
// import styles from '../styles/Home.module.css'
// import vercel from '../public/tstfigma.png'
// import Svg from "../components/svg"

export default function Home() {
  return (
    <HomeComponent>
      <Nav />
      <Hero>
        <HeroContentContainer>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisi cing Incidunt amet !
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            optio ipsam nam voluptates. Excepturi nihil ipsum error voluptatem
            doloribus totam.
          </p>
          <GetStartBtn><Link href="/creattur/register">START TRIAL</Link></GetStartBtn>
        </HeroContentContainer>
      </Hero>
      <Section>
        <SectionInfoContainer bgColor="rgb(158, 176, 199)">
          <InfoContent bgColor="rgb(158, 176, 199)">
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium eius, impedit, provident minima ratione !
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus reiciendis eius delectus minus beatae obcaecati
              dolorum corporis, aspernatur veniam quod velit quia facilis odit
              praesentium incidunt amet iure error distinctio?
            </p>
          </InfoContent>
        </SectionInfoContainer>
        <SectionInfoContainer bgColor="rgb(158, 176, 199)">
          <ImageContainer>
            <Image
              src={
                "https://res.cloudinary.com/flee01/image/upload/v1623490350/tst_bvkw4t.png"
              }
              alt={"projectInfo.name"}
              layout="responsive"
              width="10"
              height="10"
            />
          </ImageContainer>
        </SectionInfoContainer>
      </Section>

      <Section bgColor="white">
        <SectionInfoContainer>
          <ImageContainer>
            <Image
              src={
                "https://res.cloudinary.com/flee01/image/upload/v1623490350/tst_bvkw4t.png"
              }
              alt={"projectInfo.name"}
              layout="responsive"
              width="10"
              height="10"
            />
            <Image
              className={"subbornimage"}
              src={
                "https://res.cloudinary.com/flee01/image/upload/v1623490350/tst_bvkw4t.png"
              }
              alt={"projectInfo.name"}
              layout="responsive"
              width="10"
              height="10"
            />
          </ImageContainer>
        </SectionInfoContainer>
        <SectionInfoContainer bgColor="rgb(158, 176, 199)">
          <InfoContent bgColor="rgb(158, 176, 199)">
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium eius, impedit, provident minima ratione !
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus reiciendis eius delectus minus beatae obcaecati
              dolorum corporis, aspernatur veniam quod velit quia facilis odit
              praesentium incidunt amet iure error distinctio?
            </p>
          </InfoContent>
        </SectionInfoContainer>
      </Section>
      <Footer />
    </HomeComponent>
  );
}

const Hero = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: var(--width);
  height: 450px;
  background-color: rgb(11, 24, 41);
  margin-bottom: 150px;
`;
const HeroContentContainer = styled.div`
  width: 70%;
  height: 70%;
  text-align: center;
  margin: auto;
  color: white;
  h2 {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

interface componentImpl {
  bgColor?: string;
  move?: boolean;
}
const Section = styled.div<componentImpl>`
  display: grid;
  width: var(--width);
  height: 450px;
  padding: 25px 0;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgb(158, 176, 199)"};
  grid-template-columns: 50% 50%;
  margin-bottom: 25px;
  overflow: hidden;
`;
const SectionInfoContainer = styled.div<componentImpl>`
  display: grid;
  width: 85%;
  height: 350px;
  margin: auto;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgb(255, 255, 255)"};
  position: relative;
  border-radius: 5px;
`;
const InfoContent = styled.div<componentImpl>`
  padding: 10px;
  width: 75%;
  margin: auto;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgb(255, 255, 255)"};
  h2 {
    text-transform: capitalize;
    font-size: 28px;
    text-align: center;
  }
`;
const ImageContainer = styled.div<componentImpl>`
  /* background-color: aquamarine; */
  width: 70%;
  height: 100%;
  overflow: hidden;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  img {
    transform: ${(props) => (props.move ? "translate(-50%,-50%)" : null)};
    /* object-fit: fill; */
  }
  position: relative;
`;

const HomeComponent = styled.div`
  min-height: 100vh;
`;
const GetStartBtn = styled.div`
  background-color: rgb(33, 52, 85);
  color: #b3c2ce;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  width: 150px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
`;
