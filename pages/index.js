import styled from "styled-components";
import {
  Animated,
  BigCircle,
  FilledCircle,
} from "../components/decorations/decorations";
import Image from "next/image";
import { Column } from "../components/layouts/layoutElements";
import {
  InlineLink,
  ImageContainer,
  PrimaryColorText,
  Section,
  Text,
  Title,
} from "../components/content/content";
import { IconLink } from "../components/content/linkAndButtons";
import { ExperienceItem } from "../components/content/timeline";
import { Skill } from "../components/content/skill";
import { Contact } from "../components/content/contact";
import { Field } from "../components/content/inputField";
import { devices } from "./_app";
import { Animate } from "../components/decorations/animations";

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
                quality={100}
                src="/MarekFodor.png"
                alt="Marek Fodor, owner of website www.marekfodor.sk"
              />
              <figcaption aria-hidden="true">
                {/* TODO uprav domenu*/}
                Marek Fodor, author of www.marekus.sk
              </figcaption>
            </PhotoContainer>
            <Title fontSize="28px" as="h1" fontFamily="lato">
              <PrimaryColorText>Marek Fodor</PrimaryColorText>
            </Title>
            <Text fontSize="20px" textAlign="center">
              Junior Front-end <br></br>Developer
            </Text>
            <SecondaryNav aria-label="Secondary Navigation">
              {/* TU BUDU INTRA-page linky*/}
              <Ul>
                <IconLink
                  delay="0.5s"
                  as="li"
                  href="#AboutMe"
                  src="/Avatar.svg"
                >
                  About Me
                </IconLink>
                <IconLink
                  delay="0.7s"
                  as="li"
                  href="#Experience"
                  src="/Experience.svg"
                >
                  Experience
                </IconLink>
                <IconLink delay="0.9s" as="li" href="#Skills" src="/Skills.svg">
                  Skills
                </IconLink>
                <IconLink
                  delay="1.1s"
                  as="li"
                  href="#Contact"
                  src="/Contact.svg"
                >
                  Contact
                </IconLink>
                <IconLink
                  delay="1.3s"
                  as="li"
                  href="#ContactMe"
                  src="/Dialog.svg"
                >
                  Contact Me
                </IconLink>
              </Ul>
            </SecondaryNav>
          </Column>
          <Animated aria-hidden="true">
            <BigCircle top={"-60px"} left={"5%"} diameter={130}>
              <FilledCircle
                diameter={19}
                parentDiameter={130}
                delay="0.34s"
                speed="3s"
              ></FilledCircle>
              <FilledCircle
                diameter={14}
                parentDiameter={130}
                delay="0.99s"
                speed="4s"
              ></FilledCircle>
              <FilledCircle
                diameter={8}
                parentDiameter={130}
                delay="0.29s"
                speed="2s"
              ></FilledCircle>
            </BigCircle>
            <BigCircle top={"-80px"} left={"50%"} diameter={100}>
              <FilledCircle
                diameter={26}
                parentDiameter={100}
                delay="0.12s"
                speed="5s"
              ></FilledCircle>
              <FilledCircle
                diameter={5}
                parentDiameter={100}
                delay="0.03s"
                speed="3s"
              ></FilledCircle>
            </BigCircle>
            <BigCircle top={"5%"} left={"30%"} diameter={80}>
              <FilledCircle
                diameter={22}
                parentDiameter={80}
                delay="0.42s"
                speed="3s"
              ></FilledCircle>
              <FilledCircle
                diameter={15}
                parentDiameter={80}
                delay="0.08s"
                speed="1s"
              ></FilledCircle>
            </BigCircle>
            <BigCircle top={"49%"} left={"30%"} diameter={60}>
              <FilledCircle
                diameter={30}
                parentDiameter={60}
                delay="0.32s"
                speed="7s"
              ></FilledCircle>
              <FilledCircle
                diameter={10}
                parentDiameter={60}
                delay="0.63s"
                speed="2s"
              ></FilledCircle>
            </BigCircle>
            <BigCircle top={"20%"} left={"25%"} diameter={90}>
              <FilledCircle diameter={20} parentDiameter={90}></FilledCircle>
            </BigCircle>
            <BigCircle top={"10%"} left={"40%"} diameter={120}>
              <FilledCircle
                diameter={30}
                parentDiameter={120}
                delay="0.92s"
                speed="4s"
              ></FilledCircle>
              <FilledCircle
                diameter={10}
                parentDiameter={120}
                delay="0.63s"
                speed="2s"
              ></FilledCircle>
            </BigCircle>
            <BigCircle top={"0"} left={"60%"} diameter={110}>
              <FilledCircle
                diameter={20}
                parentDiameter={110}
                delay="0.22s"
                speed="4s"
              ></FilledCircle>
              <FilledCircle
                diameter={10}
                parentDiameter={110}
                delay="0.43s"
                speed="2s"
              ></FilledCircle>
            </BigCircle>
            <BigCircle top={"40%"} left={"65%"} diameter={90}>
              <FilledCircle
                diameter={30}
                parentDiameter={90}
                delay="0.63s"
                speed="4s"
              ></FilledCircle>
              <FilledCircle
                diameter={10}
                parentDiameter={90}
                delay="1.15s"
                speed="1.6s"
              ></FilledCircle>
              <FilledCircle
                diameter={5}
                parentDiameter={90}
                speed="2s"
                delay="0.660s"
              ></FilledCircle>
            </BigCircle>

            <BigCircle top={"70%"} left={"15%"} diameter={80}>
              <FilledCircle
                diameter={10}
                parentDiameter={80}
                delay="0.86s"
                speed="3s"
              ></FilledCircle>
              <FilledCircle
                diameter={15}
                parentDiameter={80}
                delay="0.30s"
                speed="2s"
              ></FilledCircle>
              <FilledCircle
                diameter={10}
                parentDiameter={80}
                speed="3.5s"
              ></FilledCircle>
            </BigCircle>
            <BigCircle top={"20%"} left={"75%"} diameter={50}>
              <FilledCircle
                diameter={10}
                speed="1.5s"
                parentDiameter={50}
              ></FilledCircle>
              <FilledCircle
                diameter={15}
                speed="2s"
                parentDiameter={50}
              ></FilledCircle>
              <FilledCircle
                diameter={5}
                speed="1s"
                parentDiameter={50}
              ></FilledCircle>
            </BigCircle>
          </Animated>
        </Content>
      </Header>
      <Main>
        {/* About me */}
        <Section>
          <Animate delay="0.2s" data-inviewport="showUp">
            <Section.Header id="AboutMe">About Me</Section.Header>
          </Animate>
          <Section.Content>
            <Section.Article>
              <Section.ArticleContent>
                <Animate data-inviewport="popRight">
                  <Section.ArticleHeading>Me</Section.ArticleHeading>
                  <p>
                    I am self-taught junior frontend developer, aspiring to be
                    fullstack developer. I have big passion for learning new
                    technologies related to web, games, graphics or computers in
                    general.
                  </p>
                </Animate>
                <Animate data-inviewport="popRight">
                  <Section.ArticleHeading>
                    Web Development
                  </Section.ArticleHeading>
                  <p>
                    I discovered path of web development in november 2020 when I
                    started learning basics of HTML, CSS and javascript. Later I
                    discovered mongodb, node.js, express.js and react.js a.k.a.{" "}
                    <InlineLink
                      href="https://www.mongodb.com/mern-stack"
                      target="_blank"
                      title="MERN Stack description on Mongodb website."
                    >
                      <strong>
                        <abbr title="Mongo Express React Node.">MERN</abbr>
                      </strong>
                    </InlineLink>{" "}
                    stack in which I'm planning to get more experience.
                  </p>
                </Animate>
                <Animate data-inviewport="popRight">
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
                </Animate>
                <Animate data-inviewport="popRight">
                  <Section.ArticleHeading>Future</Section.ArticleHeading>
                  <p>
                    In near future, I'm planning to publish coding blog where
                    I'll post / translate articles about web development,
                    design, server administration and many more.
                  </p>
                </Animate>
              </Section.ArticleContent>
            </Section.Article>
          </Section.Content>
        </Section>

        {/* Experience */}

        <Section>
          <Animate delay="0.2s" data-inviewport="showUp">
            <Section.Header paddingTop="50px" id="Experience">
              Experience
            </Section.Header>
          </Animate>
          <Section.Content>
            <Section.Article>
              <Section.ArticleContent flexBasis="400px">
                <Animate data-inviewport="popRight">
                  <Section.ArticleHeading center>
                    Education
                  </Section.ArticleHeading>
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
                        top={80}
                        right={-30}
                        opacity={0.5}
                      >
                        <Image
                          layout="fixed"
                          width="110"
                          height="110"
                          src="/SosHandlova.svg"
                          alt="Logo of Handlova High School"
                        ></Image>
                        <figcaption aria-hidden="false">
                          School logo of Secondary Vocational School of Handlová
                        </figcaption>
                      </ExperienceItem.PictureContainer>
                    </ExperienceItem.Content>
                    <ExperienceItem.Circle show={false} />
                  </ExperienceItem>
                </Animate>
                <Animate data-inviewport="popRight">
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
                        top={80}
                        right={-30}
                        opacity={0.5}
                      >
                        <Image
                          layout="fixed"
                          width="110"
                          height="110"
                          src="/UniversityOfZilina.svg"
                          alt="Logo of University of Zilina"
                        ></Image>
                        <figcaption aria-hidden="false">
                          School logo of Secondary Vocational School of Handlová
                        </figcaption>
                      </ExperienceItem.PictureContainer>
                    </ExperienceItem.Content>
                    <ExperienceItem.Circle show={false} />
                  </ExperienceItem>
                </Animate>
              </Section.ArticleContent>
              <Section.ArticleContent flexBasis="400px">
                <Animate data-inviewport="popLeft">
                  <Section.ArticleHeading center>Work</Section.ArticleHeading>
                  <ExperienceItem>
                    <ExperienceItem.Circle />
                    <ExperienceItem.Content>
                      <ExperienceItem.Timestamp left={false} dateTime="P90D">
                        6 / 2018 - 9 / 2018
                      </ExperienceItem.Timestamp>
                      <Title fontSize="22px" as="h3">
                        Tesco Distribution Centre, Thurrock UK
                      </Title>
                      <Text>Warehouse Worker</Text>
                      <ExperienceItem.PictureContainer
                        top={50}
                        right={-30}
                        opacity={0.5}
                      >
                        <Image
                          layout="fixed"
                          width="200"
                          height="110"
                          src="/tesco.svg"
                          alt="Tesco Logo."
                        ></Image>
                        <figcaption aria-hidden="false">
                          Tesco company logo.
                        </figcaption>
                      </ExperienceItem.PictureContainer>
                    </ExperienceItem.Content>
                    <ExperienceItem.Circle show={true} />
                  </ExperienceItem>
                </Animate>
                <Animate data-inviewport="popLeft">
                  <ExperienceItem>
                    <ExperienceItem.Circle />
                    <ExperienceItem.Content>
                      <ExperienceItem.Timestamp left={false} dateTime="P90D">
                        5 / 2019 - 8 / 2019
                      </ExperienceItem.Timestamp>
                      <Title fontSize="22px" as="h3">
                        Ocado, Tamsworth UK
                      </Title>
                      <Text>Warehouse worker</Text>
                      <ExperienceItem.PictureContainer
                        top={80}
                        right={-10}
                        opacity={0.5}
                      >
                        <Image
                          layout="fixed"
                          width="120"
                          height="80"
                          src="/ocado.svg"
                          alt="Ocado Logo."
                        ></Image>
                        <figcaption aria-hidden="false">
                          Ocado company logo.
                        </figcaption>
                      </ExperienceItem.PictureContainer>
                    </ExperienceItem.Content>
                    <ExperienceItem.Circle show={true} />
                  </ExperienceItem>
                </Animate>
                <Animate data-inviewport="popLeft">
                  <ExperienceItem>
                    <ExperienceItem.Circle />
                    <ExperienceItem.Content>
                      <ExperienceItem.Timestamp left={false} dateTime="P90D">
                        10 / 2020 - 1 / 2021
                      </ExperienceItem.Timestamp>
                      <Title fontSize="22px" as="h3">
                        Decathlon
                      </Title>
                      <Text>Sales assistant</Text>
                      <ExperienceItem.PictureContainer
                        top={70}
                        right={-30}
                        opacity={0.5}
                      >
                        <Image
                          layout="fixed"
                          width="260"
                          height="110"
                          src="/Decathlon.svg"
                          alt="Decathlon Logo."
                        ></Image>
                        <figcaption aria-hidden="false">
                          Decathlon company logo.
                        </figcaption>
                      </ExperienceItem.PictureContainer>
                    </ExperienceItem.Content>
                    <ExperienceItem.Circle show={true} />
                  </ExperienceItem>
                </Animate>
                <Animate data-inviewport="popLeft">
                  <ExperienceItem>
                    <ExperienceItem.Circle />
                    <ExperienceItem.Content>
                      <ExperienceItem.Timestamp left={false} dateTime="P90D">
                        1 / 2021 - 4 / 2021
                      </ExperienceItem.Timestamp>
                      <Title fontSize="22px" as="h3">
                        Brain:IT
                      </Title>
                      <Text>Junior front-end developer</Text>
                      <ExperienceItem.PictureContainer
                        top={70}
                        right={-30}
                        opacity={0.5}
                      >
                        <Image
                          layout="fixed"
                          width="260"
                          height="110"
                          src="/BrainIT.svg"
                          alt="Braint:IT company Logo."
                        ></Image>
                        <figcaption aria-hidden="false">
                          Decathlon company logo.
                        </figcaption>
                      </ExperienceItem.PictureContainer>
                    </ExperienceItem.Content>
                    <ExperienceItem.Circle show={true} />
                  </ExperienceItem>
                </Animate>
              </Section.ArticleContent>
            </Section.Article>
          </Section.Content>
        </Section>

        {/* Skills */}

        <Section>
          <Animate delay="0.2s" data-inviewport="showUp">
            <Section.Header id="Skills">Skills</Section.Header>
          </Animate>
          <Section.Content>
            <Section.Article>
              <Section.ArticleContent flexBasis="340px">
                <Animate data-inviewport="popUp">
                  <Section.ArticleHeading center>
                    Frontend
                  </Section.ArticleHeading>
                </Animate>
                <Animate data-inviewport="popUp">
                  <SkillContainer template="1fr 1fr" templateTablet="1fr 1fr">
                    <Animate data-inviewport="popUp" delay="0.4s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image
                            layout="fill"
                            src="/ReactJS.svg"
                            alt="ReactJS"
                          />
                        </Skill.ImageContainer>
                        <Skill.Title>React</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="0.6s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image layout="fill" src="/NextJS.svg" alt="NextJS" />
                        </Skill.ImageContainer>
                        <Skill.Title>Next.js</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="0.8s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image
                            layout="fill"
                            src="/ChakraJS.svg"
                            alt="ChakraJS"
                          />
                        </Skill.ImageContainer>
                        <Skill.Title>Chakra.js</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="1s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image
                            layout="fill"
                            src="/StyledComponents.svg"
                            alt="Styled Components"
                          />
                        </Skill.ImageContainer>
                        <Skill.Title>Styled Components</Skill.Title>
                      </Skill>
                    </Animate>
                  </SkillContainer>
                </Animate>
              </Section.ArticleContent>
              <Section.ArticleContent flexBasis="340px">
                <Animate data-inviewport="popUp">
                  <Section.ArticleHeading center>
                    Backend
                  </Section.ArticleHeading>
                </Animate>
                <Animate data-inviewport="popUp">
                  <SkillContainer template="1fr 1fr" templateMobileL="1fr 1fr">
                    <Animate data-inviewport="popUp" delay="0.4s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image
                            layout="fill"
                            src="/ExpressJS.svg"
                            alt="ExpressJS"
                          />
                        </Skill.ImageContainer>
                        <Skill.Title>Express.js</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="0.6s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image layout="fill" src="/NodeJS.svg" alt="NodeJS" />
                        </Skill.ImageContainer>
                        <Skill.Title>Node.js</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="0.8s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image
                            layout="fill"
                            src="/MongoDB.svg"
                            alt="MongoDB"
                          />
                        </Skill.ImageContainer>
                        <Skill.Title>MongoDB</Skill.Title>
                      </Skill>
                    </Animate>
                  </SkillContainer>
                </Animate>
              </Section.ArticleContent>
              <Section.ArticleContent>
                <Animate data-inviewport="popUp">
                  <Section.ArticleHeading center>
                    Programming Languages
                  </Section.ArticleHeading>
                </Animate>
                <Animate data-inviewport="popUp">
                  <SkillContainer template="1fr 1fr">
                    <Animate data-inviewport="popUp" delay="0.4s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image
                            layout="fill"
                            src="/JavaScript.svg"
                            alt="Javascript"
                          />
                        </Skill.ImageContainer>
                        <Skill.Title>Javascript</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="0.6s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image
                            layout="fill"
                            src="/TypeScript.svg"
                            alt="Typescript"
                          />
                        </Skill.ImageContainer>
                        <Skill.Title>Typescript</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="0.8s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image layout="fill" src="/Html5.svg" alt="HTML5" />
                        </Skill.ImageContainer>
                        <Skill.Title>HTML</Skill.Title>
                      </Skill>
                    </Animate>
                    <Animate data-inviewport="popUp" delay="1s">
                      <Skill>
                        <Skill.ImageContainer>
                          <Image layout="fill" src="/Css3.svg" alt="CSS3" />
                        </Skill.ImageContainer>
                        <Skill.Title>CSS</Skill.Title>
                      </Skill>
                    </Animate>
                  </SkillContainer>
                </Animate>
              </Section.ArticleContent>
            </Section.Article>
          </Section.Content>
        </Section>

        {/* Contact */}

        <Section>
          <Animate delay="0.2s" data-inviewport="showUp">
            <Section.Header paddingTop="50px" id="Contact">
              Contact
            </Section.Header>
          </Animate>
          <Section.Content>
            <ContactContainer>
              <Animate data-inviewport="popUp" delay="0s">
                <Contact href="tel:+421915498774">
                  <Contact.ImageContainer>
                    <Image
                      layout="fill"
                      src="/Contact.svg"
                      alt="Contact Picture"
                    />
                  </Contact.ImageContainer>
                  <Contact.Text>+421 915498774</Contact.Text>
                </Contact>
              </Animate>
              <Animate data-inviewport="popUp" delay="0.1s">
                <Contact target="_blank" href="mailto:fodormarek5@gmail.com">
                  <Contact.ImageContainer>
                    <Image layout="fill" src="/Mail.svg" alt="Mail Picture" />
                  </Contact.ImageContainer>
                  <Contact.Text>fodormarek5@gmail.com</Contact.Text>
                </Contact>
              </Animate>
              <Animate data-inviewport="popUp" delay="0.2s">
                <Contact
                  href="https://www.linkedin.com/in/marek-fodor/"
                  target="_blank"
                  userSelect="none"
                >
                  <Contact.ImageContainer>
                    <Image
                      layout="fill"
                      src="/LinkedIn.svg"
                      alt="LinkedIn Logo"
                    />
                  </Contact.ImageContainer>
                  <Contact.Text>Marek Fodor</Contact.Text>
                </Contact>
              </Animate>
              <Animate data-inviewport="popUp" delay="0.3s">
                <Contact
                  target="_blank"
                  href="https://www.instagram.com/marekus.s/"
                  userSelect="none"
                >
                  <Contact.ImageContainer>
                    <Image
                      layout="fill"
                      src="/Instagram.svg"
                      alt="Instagram Logo"
                    />
                  </Contact.ImageContainer>
                  <Contact.Text>Marek Fodor</Contact.Text>
                </Contact>
              </Animate>
              <Animate data-inviewport="popUp" delay="0.4s">
                <Contact
                  href="https://github.com/Makakusnik"
                  target="_blank"
                  userSelect="none"
                >
                  <Contact.ImageContainer>
                    <Image layout="fill" src="/GitHub.svg" alt="GitHub Logo" />
                  </Contact.ImageContainer>
                  <Contact.Text>Marek Fodor</Contact.Text>
                </Contact>
              </Animate>
            </ContactContainer>
          </Section.Content>
        </Section>

        {/* Contact Me */}

        <Section>
          <Animate delay="0.2s" data-inviewport="showUp">
            <Section.Header id="ContactMe">Contact Me</Section.Header>
          </Animate>
          <Section.Content>
            <FormContainer
              action="https://formspree.io/f/mzbojqjd"
              method="POST"
            >
              <Animate data-inviewport="popUp" delay="0.2s">
                <Field>
                  <Field.Label>From</Field.Label>
                  <Field.Input
                    type="email"
                    id="email"
                    name="email"
                  ></Field.Input>
                </Field>
              </Animate>
              <Animate data-inviewport="popUp" delay="0.2s">
                <Field>
                  <Field.Label>To</Field.Label>
                  <Field.FakeInput type="email">
                    fodormarek5@gmail.com
                  </Field.FakeInput>
                </Field>
              </Animate>
              <Animate data-inviewport="popUp" delay="0.2s">
                <Field>
                  <Field.Label>Message</Field.Label>
                  <Field.Input
                    as="textarea"
                    data-size="big"
                    type="text"
                    name="message"
                    id="message"
                  ></Field.Input>
                </Field>
              </Animate>
              <Animate data-inviewport="popUp" delay="0.2s">
                <Field>
                  <Field.Button type="submit">Send</Field.Button>
                </Field>
              </Animate>
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
  display: flex;
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
  max-width: 600px;
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
  display: grid;
  max-width: 90%;
  justify-items: center;
  align-self: center;
  grid-template-columns: ${({ template }) => template || "1fr"};
  row-gap: 20px;
  column-gap: 20px;
  padding-top: 15px;
  padding-bottom: 40px;
  @media (max-width: ${devices.tablet}) {
    grid-template-columns: ${({ templateTablet }) => templateTablet};
  }
  @media (max-width: ${devices.mobileL}) {
    grid-template-columns: ${({ templateMobileL }) => templateMobileL};
  }
  @media (max-width: ${devices.mobileS}) {
    grid-template-columns: ${({ templateMobileS }) => templateMobileS};
  }
`;

const SecondaryNav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
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
  background: url("gradientBG.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  background-position-y: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  z-index: 2;
  position: relative;
  justify-content: center;
  padding-bottom: 80px;
`;

const PhotoContainer = styled(ImageContainer)`
  width: 130px;
  border-radius: 50%;
  height: 130px;
  margin-bottom: 30px;
  & > span {
    position: relative;
    top: 10px;
    left: 5px;
  }
`;
