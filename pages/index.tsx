import Head from "next/head";

import { Content } from "../components/Content";
import { Title } from "../components/Title";
import { Link } from "../components/Link";
import { Grid } from "../components/Grid";
import { NextPage } from "next";
import { List } from "../components/List";
import { LastUpdate } from "../components/LastUpdate";
import { Flex } from "../components/Flex";
import { WorkSection } from "../components/WorkSection";
import { ContactLinks } from "../components/ContactLinks";
import { Workplace } from "../components/WorkPlace";

const Home: NextPage = () => {
  return (
    <Content>
      <Head>
        <title>javvvs</title>
        <meta name="description" content="personal site" />
        <meta property="og:image" content="https://www.javier.onl/api/og" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Grid>
        <div>
          <Title>Recent work</Title>
          <WorkSection>
            <Flex>
              <Link href="https://www.door.link/" title="door.link" />
            </Flex>
            <Flex>
              <Link href="https://www.neosound.xyz/" title="neosound" />
            </Flex>
            <Flex>
              <Link href="https://fjord.feltzine.art/" title="feltzine" />
            </Flex>
            <Flex>
              <Link href="https://lyingflat.place/" title="lying flat" />
            </Flex>
            <Flex>
              <Link href="https://www.pond.rest/" title="pond.rest" />
            </Flex>
            <Flex>
              <Link href="https://www.suupcover.com/" title="suupcover" />
            </Flex>
            <Flex>
              <Link href="https://www.hi-malta.com/" title="hi-malta" />
            </Flex>
          </WorkSection>
        </div>
        <div>
          <Title>Opening</Title>
          <List>
            <li> Hello, this is javvvs.</li>
            <li>Nowdays a web3 developer.</li>
            <li>I like starting new projects,</li>
            <li>making music and learning stuff.</li>
            <Title>Also, i find joy in</Title>
            <li>travelling</li>
            <li>crypto</li>
            <li>art</li>
            <li>tech</li>
            <li>modular synths</li>
            <li>silence</li>
          </List>
        </div>
        <div>
          <Title>Currently</Title>
          <List>
            <li>
              working at:{" "}
              <Workplace href="https://beta.catalog.works" title="catalog" />
            </li>
            <li>living in: Buenos Aires</li>
            <li>learning: piano</li>
            <Title>Get in touch</Title>
            <ContactLinks>
              <li>
                <Link href="https://twitter.com/javvvs_" title="twitter" />
              </li>
              <li>
                <Link href="https://github.com/Javier-Szyfer" title="github" />
              </li>
              <li>
                <Link
                  href="https://www.lensfrens.xyz/javvvs.lens"
                  title="lens"
                />
              </li>
              <li>
                <Link href="mailto:hello@javier.onl" title="mail" />
              </li>
            </ContactLinks>
            <li>~dovpem~wannul</li>
          </List>
        </div>
      </Grid>
      <LastUpdate>Last update: Oct 22, 2022</LastUpdate>
    </Content>
  );
};

export default Home;
