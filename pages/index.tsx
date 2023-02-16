import Head from "next/head";
import styled from "styled-components";

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
  border-bottom: 1px solid #e0e1dd;
  height: calc(100vh - 4rem);
`;

const Hero = styled.div`
  display: grid;
  grid-template-rows: 6fr 5fr 3fr;
  height: 100%;
`;

const HeroTitle = styled.h1`
  justify-self: center;
  align-self: end;
  text-align: center;
  font-size: 4rem;
  font-weight: 300;
  line-height: 1em;
  letter-spacing: 0.5rem;
  filter: blur(0.4px);
  text-transform: uppercase;
`;

const Subtitle = styled.div`
  height: 100%;
  width: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
  padding-top: 1rem;
  font-weight: 100;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const Projects = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e0e1dd;
  font-weight: 100;
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
      <Nav>
        <Logo>DN</Logo>
        <Menu>Menu</Menu>
      </Nav>
      <Main>
        <Hero>
          <HeroTitle>
            <div>Dan</div>
            <div>Nisenson</div>
          </HeroTitle>
          <Subtitle>( Web Developer )</Subtitle>

          <Projects>
            <div>Click me!</div>
             </Projects>
        </Hero>
      </Main>
    </>
  );
}
