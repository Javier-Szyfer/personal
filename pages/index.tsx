import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <Head>
        <title>javvvs</title>
        <meta name="description" content="personal site" />
      </Head>
      <main>
        <section>
          <p>
            Hello, this is javvvs. <br /> Nowdays an engineer working at{" "}
            <Link
              href={"https://catalog.works"}
              target="_blank"
              className="catalog"
            >
              <a>Catalog</a>
            </Link>
            .
          </p>
          <p>I find joy in making music, traveling and learning new things.</p>
        </section>
        <section>
          Some things I've worked on:
          <div className="flex">
            <Link href={"https://door.link"} passHref>
              <a target="_blank" className="customLink" />
            </Link>
            <Link href={"https://lyingflat.place/"} passHref>
              <a target="_blank" className="customLink" />
            </Link>
            <Link href={"https://fjord.feltzine.art/"} passHref>
              <a target="_blank" className="customLink" />
            </Link>
            <Link href={"https://www.pond.rest/"} passHref>
              <a target="_blank" className="customLink" />
            </Link>
            <Link href={"https://romi.link/journal"} passHref>
              <a target="_blank" className="customLink" />
            </Link>
          </div>
        </section>
        <section>
          <p>Get in touch:</p>
          <ul>
            <li>
              <Link href={"https://twitter.com/javvvs"}>
                <a target="_blank">Twitter</a>
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/Javier-Szyfer"}>
                <a target="_blank">Github</a>
              </Link>
            </li>
            <li>
              <Link href={"https://warpcast.com/javvvs"}>
                <a target="_blank">Warpcast</a>
              </Link>
            </li>
            <li>
              <Link href={"mailto:hello@javier.onl"}>
                <a target="_blank">Mail</a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>~dovpem-wannul at urbit</Link>
            </li>
          </ul>
        </section>
        <span>Last update: April 10, 2023</span>
      </main>
    </>
  );
};

export default Home;
