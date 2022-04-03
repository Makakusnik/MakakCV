import styled from "styled-components";
import {
  BigTriangleBackground,
  SmallTriangleBackground,
} from "../components/decorations/decorations";
import Image from "next/Image";
import { Column } from "../components/layouts/layoutElements";
import {
  InlineLink,
  ImageContainer,
  PrimaryColorText,
  Section,
  SectionArticle,
  Text,
  Title,
} from "../components/content/content";
import { IntraPageLink } from "../components/content/linkAndButtons";
import {
  ExperienceItem,
  ExperienceItemLeft,
} from "../components/content/timeline";
import { Skill } from "../components/content/skill";
import { Contact } from "../components/content/contact";
import { Field } from "../components/content/inputField";

export default function Home() {
  return (
    <>
      <Header>
        <Content>
          <Column alignItems="center" rowGap="25px">
            <PhotoContainer>
              <Image
                layout="responsive"
                width="67,5"
                height="75"
                priority
                src="/MarekFodor.png"
                alt="Marek Fodor, owner of website www.marekfodor.sk"
              />
              <figcaption aria-hidden="true">
                {/* TODO uprav domenu*/}
                Marek Fodor, author of www.web.sk
              </figcaption>
            </PhotoContainer>
            <Title fontSize="32px" as="h1" fontFamily="lato">
              <PrimaryColorText>Marek Fodor</PrimaryColorText>
            </Title>
            <Text fontSize="20px" textAlign="center">
              Junior Front-end <br></br>Developer
            </Text>
          </Column>
        </Content>
        <BigTriangleBackground
          glow={true}
          color="mediumDark"
        ></BigTriangleBackground>
      </Header>
      <Main>
        <SecondaryNav aria-label="Secondary Navigation">
          {/* TU BUDU INTRA-page linky*/}
          <Ul>
            <IntraPageLink as="li" href="#AboutMe" src="/Avatar.svg">
              About Me
            </IntraPageLink>
            <IntraPageLink as="li" href="#Experience" src="/Experience.svg">
              Experience
            </IntraPageLink>
            <IntraPageLink as="li" href="#Skills" src="/Skills.svg">
              Skills
            </IntraPageLink>
            <IntraPageLink as="li" href="#Contact" src="/Contact.svg">
              Contact
            </IntraPageLink>
            <IntraPageLink as="li" href="#ContactMe" src="/Dialog.svg">
              Contact Me
            </IntraPageLink>
          </Ul>
        </SecondaryNav>
        <Section>
          <Section.Header id="AboutMe">About Me</Section.Header>
          <Section.Content>
            <Section.Article title="Me">
              <Section.ArticleHeading>Me</Section.ArticleHeading>
              <p>
                I am self-taught junior frontend, soon fullstack developer. I
                have big passion for learning new technologies related to web,
                games, graphics or computers in general.
              </p>
              <Section.ArticleHeading>Coding</Section.ArticleHeading>
              <p>
                Web related “career” started for me in november 2020 when I
                started learning basics of HTML, CSS and javascript. Later I
                discovered mongodb, node.js, express.js and react.js a.k.a. MERN
                stack.
              </p>
              <Section.ArticleHeading>Career</Section.ArticleHeading>
              <p>
                I have experience as frontend developer in company{" "}
                <InlineLink
                  title="Company website of Brain:IT"
                  target="_blank"
                  href="https://brainit.sk/en/home/"
                >
                  Brain:IT
                </InlineLink>
                , where I was using mostly wordpress.
                <br></br>Currently I am working in{" "}
                <InlineLink
                  title="Company website of Syncreon"
                  target="_blank"
                  href="https://www.syncreon.com/"
                >
                  Syncreon
                </InlineLink>{" "}
                in Netherlands, as warehouse worker.
              </p>
            </Section.Article>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header id="Experience">Experience</Section.Header>
          <Section.Content>
            <>
              <Heading>
                <Title as="h3" fontSize="22px">
                  Education
                </Title>
              </Heading>
              <ExperienceItem>
                <ExperienceItem.Circle show />
                <ExperienceItem.Content>
                  <ExperienceItem.Timestamp left={true} dateTime="P182D">
                    4 / 2021 - 9 / 2022
                  </ExperienceItem.Timestamp>
                  <Title fontSize="22px" as="h3">
                    <abbr title="Stredná Odborná Škola">SOŠ</abbr> Handlová
                  </Title>
                  <Text>Techical Lyceum</Text>
                  <Text fontSize="14px">Mechanical Engineer</Text>
                  <ExperienceItem.PictureContainer
                    top={60}
                    right={-50}
                    opacity={0.5}
                  >
                    <Image
                      layout="fixed"
                      width="110"
                      height="110"
                      src="/SosHandlova.svg"
                    ></Image>
                    <figcaption aria-hidden="false">
                      School logo of Secondary Vocational School of Handlová
                    </figcaption>
                  </ExperienceItem.PictureContainer>
                </ExperienceItem.Content>
                <ExperienceItem.Circle show={false} />
              </ExperienceItem>
              <ExperienceItem>
                <ExperienceItem.Circle show />
                <ExperienceItem.Content>
                  <ExperienceItem.Timestamp left={true} dateTime="P182D">
                    4 / 2021 - 9 / 2022
                  </ExperienceItem.Timestamp>
                  <Title fontSize="22px" as="h4">
                    University of Žilina
                  </Title>
                  <Text>Faculty of Informatics</Text>
                  <Text fontSize="14px">Computer Science</Text>
                  <ExperienceItem.PictureContainer
                    top={60}
                    right={-50}
                    opacity={0.5}
                  >
                    <Image
                      layout="fixed"
                      width="110"
                      height="110"
                      src="/UniversityOfZilina.svg"
                    ></Image>
                    <figcaption aria-hidden="false">
                      School logo of Secondary Vocational School of Handlová
                    </figcaption>
                  </ExperienceItem.PictureContainer>
                </ExperienceItem.Content>
                <ExperienceItem.Circle show={false} />
              </ExperienceItem>
            </>
            <>
              <Heading>
                <Title as="h3" fontSize="22px">
                  Work
                </Title>
              </Heading>
              <ExperienceItem>
                <ExperienceItem.Circle />
                <ExperienceItem.Content>
                  <ExperienceItem.Timestamp left={false} dateTime="P182D">
                    4 / 2021 - 9 / 2022
                  </ExperienceItem.Timestamp>
                  <Title fontSize="22px" as="h3">
                    Decathlon
                  </Title>
                  <Text>Sales assistant</Text>
                  <ExperienceItem.PictureContainer
                    top={70}
                    right={-50}
                    opacity={0.5}
                  >
                    <Image
                      layout="fixed"
                      width="260"
                      height="110"
                      src="/Decathlon.svg"
                    ></Image>
                    <figcaption aria-hidden="false">
                      Decathlon company logo.
                    </figcaption>
                  </ExperienceItem.PictureContainer>
                </ExperienceItem.Content>
                <ExperienceItem.Circle show={true} />
              </ExperienceItem>
              <ExperienceItem>
                <ExperienceItem.Circle />
                <ExperienceItem.Content>
                  <ExperienceItem.Timestamp left={false} dateTime="P182D">
                    4 / 2021 - 9 / 2022
                  </ExperienceItem.Timestamp>
                  <Title fontSize="22px" as="h3">
                    Brain:IT
                  </Title>
                  <Text>Junior front-end developer</Text>
                  <ExperienceItem.PictureContainer
                    top={70}
                    right={-50}
                    opacity={0.5}
                  >
                    <Image
                      layout="fixed"
                      width="260"
                      height="110"
                      src="/Brainit.svg"
                    ></Image>
                    <figcaption aria-hidden="false">
                      Decathlon company logo.
                    </figcaption>
                  </ExperienceItem.PictureContainer>
                </ExperienceItem.Content>
                <ExperienceItem.Circle show={true} />
              </ExperienceItem>
            </>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header id="Skills">Skills</Section.Header>
          <Section.Content>
            <Heading>
              <Title as="h3" fontSize="22px">
                Frontend
              </Title>
            </Heading>
            <SkillContainer>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/ReactJS.svg" />
                </Skill.ImageContainer>
                <Skill.Title>React</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/NextJS.svg" />
                </Skill.ImageContainer>
                <Skill.Title>Next.js</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/ChakraJs.svg" />
                </Skill.ImageContainer>
                <Skill.Title>Chakra.js</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/StyledComponents.svg" />
                </Skill.ImageContainer>
                <Skill.Title>Styled Components</Skill.Title>
              </Skill>
            </SkillContainer>
            <Heading>
              <Title as="h3" fontSize="22px">
                Backend
              </Title>
            </Heading>
            <SkillContainer>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/ExpressJS.svg" />
                </Skill.ImageContainer>
                <Skill.Title>Express.js</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/NodeJS.svg" />
                </Skill.ImageContainer>
                <Skill.Title>Node.js</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/MongoDB.svg" />
                </Skill.ImageContainer>
                <Skill.Title>MongoDB</Skill.Title>
              </Skill>
            </SkillContainer>
            <Heading>
              <Title as="h3" fontSize="22px">
                Programming Languages
              </Title>
            </Heading>
            <SkillContainer>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/Javascript.svg" />
                </Skill.ImageContainer>
                <Skill.Title>Javascript</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/TypeScript.svg" />
                </Skill.ImageContainer>
                <Skill.Title>Typescript</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/Html5.svg" />
                </Skill.ImageContainer>
                <Skill.Title>HTML</Skill.Title>
              </Skill>
              <Skill>
                <Skill.ImageContainer>
                  <Image layout="fill" src="/Css3.svg" />
                </Skill.ImageContainer>
                <Skill.Title>CSS</Skill.Title>
              </Skill>
            </SkillContainer>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header id="Contact">Contact</Section.Header>
          <Section.Content>
            <ContactContainer>
              <Contact>
                <Contact.ImageContainer>
                  <Image layout="fill" src="/Contact.svg" />
                </Contact.ImageContainer>
                <Contact.Text>+421 915498774</Contact.Text>
              </Contact>
              <Contact>
                <Contact.ImageContainer>
                  <Image layout="fill" src="/Mail.svg" />
                </Contact.ImageContainer>
                <Contact.Text>fodormarek5@gmail.com</Contact.Text>
              </Contact>
              <Contact>
                <Contact.ImageContainer>
                  <Image layout="fill" src="/LinkedIn.svg" />
                </Contact.ImageContainer>
                <Contact.Text>Marek Fodor</Contact.Text>
              </Contact>
              <Contact>
                <Contact.ImageContainer>
                  <Image layout="fill" src="/Instagram.svg" />
                </Contact.ImageContainer>
                <Contact.Text>Marek Fodor</Contact.Text>
              </Contact>
              <Contact href="github.com">
                <Contact.ImageContainer>
                  <Image layout="fill" src="/Github.svg" />
                </Contact.ImageContainer>
                <Contact.Text>Marek Fodor</Contact.Text>
              </Contact>
            </ContactContainer>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header id="ContactMe">Contact Me</Section.Header>
          <Section.Content>
            <FormContainer>
              <Field>
                <Field.Label>From</Field.Label>
                <Field.Input type="email"></Field.Input>
              </Field>
              <Field>
                <Field.Label>To</Field.Label>
                <Field.FakeInput type="email">
                  fodormarek5@gmail.com
                </Field.FakeInput>
              </Field>
              <Field>
                <Field.Label>Message</Field.Label>
                <Field.Input
                  as="textarea"
                  data-size="big"
                  type="text"
                ></Field.Input>
              </Field>
              <Field>
                <Field.Button>Send</Field.Button>
              </Field>
            </FormContainer>
          </Section.Content>
        </Section>
      </Main>
      <Footer>
        <Text>
          Created by <InlineLink href="/">Marek Fodor</InlineLink>
        </Text>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  color: ${({ theme }) => theme.text};
  border-top: 3px solid ${({ theme }) => theme.primary};
  height: 60px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  padding: 50px;
  flex-direction: column;
  row-gap: 15px;
`;

const ContactContainer = styled.div`
  padding: 50px 0;
  display: flex;
  row-gap: 50px;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const SkillContainer = styled.div`
  display: flex;
  max-width: 90%;
  justify-content: center;
  row-gap: 20px;
  flex-wrap: wrap;
`;

const Heading = styled.div`
  display: flex;
  margin: 60px 0 30px 0;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  justify-content: center;
`;

const SecondaryNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
`;

const Ul = styled.ul`
  justify-content: center;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 40px;
  max-width: 450px;
  column-gap: 40px;
`;

const Header = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  bottom: 40px;
  background-color: ${({ theme }) => theme.mediumDark};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  top: 50px;
  position: relative;
  justify-content: center;
`;

const PhotoContainer = styled(ImageContainer)`
  width: 150px;
  border-radius: 50%;
  height: 150px;
  & > span {
    position: relative;
    top: 10px;
    left: 5px;
  }
`;
