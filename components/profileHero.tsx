import styled from "styled-components";
const profileHero = () => {
  return (
    <Hero>
      <ProfileContainer></ProfileContainer>
    </Hero>
  );
};
export default profileHero;
const Hero = styled.div`
  width: 100vw;
  height: calc(var(--width) / 3.5);
  background-color: #428bca;
  position: relative;
  margin-bottom: calc(var(--width) / 5);
`;
const ProfileContainer = styled.div`
  border-radius: 100%;
  width: calc(var(--width) / 3.5);
  height: calc(var(--width) / 3.5);
  background-color: black;
  margin: auto;
  transform: translateY(calc(var(--width) / 10 + 10px));
  border: 3px rgb(255, 255, 255) solid;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`;
