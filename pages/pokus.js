import { InlineLink, Text } from "../components/content/content";
``;
export default function Home() {
  return (
    <>
      <Header>WHAT IS THIS</Header>
      <Main>POKUS</Main>
      <Footer>
        <Text>
          Created by <InlineLink href="/">Marek Fodor</InlineLink>
        </Text>
      </Footer>
    </>
  );
}
