import Head from "next/head";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const anim1 = keyframes`
  from {
    transform: translate(0vh, -50vh);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;
const anim2 = keyframes`
  from {
    transform: translate(-70vh, 0vh);
    opacity: 0;
  }
  to {
    transform: translate(0px, 0px);
    opacity: 1;
  }
`;
const anim3 = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const anim4 = keyframes`
  0% {
    transform: translateY(0px) scale3d(0.6, 1.3, 1);
  }
  50% {
    transform: translateY(10px) scale3d(1, 1, 1);
  }
  100% {
    transform: translateY(0px) scale3d(0.6, 1.3, 1);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid #e0e1dd;
  padding: 0 2rem;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: -1em;
`;

const Menu = styled.menu`
  font-weight: 100;
`;

const Main = styled.main`
  font-family: "Work Sans", sans-serif;
  color: hsl(75, 4%, 90%);
  background-color: hsl(219, 37%, 10%);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 70vh;
  height: 600px;
  width: 70vh;
  margin: 0vh 10vw 0 0;
  transform: rotate(-45deg);
`;

const Lastname = styled.h1`
  grid-column: 1 / span 8;
  grid-row: 5;
  font-size: 7rem;
  font-weight: 800;
  letter-spacing: 0.5rem;
  filter: blur(0.4px);
  text-transform: uppercase;
  animation: ${anim2} 1.5s 0.5s ease both;
`;

const Firstname = styled.h1`
  justify-self: start;
  align-self: end;
  grid-column: 6;
  grid-row: 3 / span 2;
  writing-mode: vertical-rl;
  text-align: center;
  font-size: 7rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  filter: blur(0.4px);
  text-transform: uppercase;
  border-left: 1px solid #e0e1dd;
  animation: ${anim1} 1.5s ease both;
`;

const Subtitle = styled.div`
  grid-column: 1 / span 4;
  grid-row: 6;
  font-weight: 200;
  font-size: 1.5rem;
  animation: ${anim3} 6s 2s ease both;
`;

const HeroMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 7;
  grid-row: 8;
  width: 80px;
  gap: 3px;
  font-weight: 100;
  font-size: 1.2rem;
  align-self: center;
  justify-self: center;
  transform: rotate(45deg) translate(-3vh, 7vh);
  animation: ${anim3} 8s 2s cubic-bezier(0.55, 0.01, 0.27, 1.55) both;
`;

const Arrow = styled.div`
  font-size: 1.1rem;
  animation: ${anim4} 1s infinite;
`;

const ProjectsLink = styled(Link)`
  :hover {
    transform: scale(1.2);
    color: #fff;
    transition: transform 0.6s ease, color 0.6s ease;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Nisenson</title>
        <meta name="description" content="Dan Nisenson Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Nav> */}
      {/* <Logo>DN</Logo>
        <Menu>Menu</Menu> */}
      {/* </Nav> */}
      <Main>
        <Hero>
          <Lastname>Nisenson</Lastname>
          <Firstname>Dan</Firstname>
          <Subtitle>( Web Developer )</Subtitle>
          <HeroMenu>
            <ProjectsLink href={"#"}>Projects</ProjectsLink>
            <Arrow>&#8593;</Arrow>
          </HeroMenu>
        </Hero>
      </Main>
    </>
  );
}
