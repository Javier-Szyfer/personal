import { useState } from "react";
import Image from "next/image";

//Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridCont: {
    padding: "1rem",
  },
  maxW: {
    maxWidth: "60%",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    marginBottom: "2rem",
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
  },

  marginTop: {
    marginTop: "1rem",
  },
  marginB: {
    marginBottom: "1rem",
  },
  webApps: {
    display: "flex",
    flexDirection: "column",
    gap: ".2rem",
  },
  smMtop: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(false);
  return (
    <main>
      <Grid container className={classes.gridCont}>
        <Grid item lg={3} xs={12}>
          <Typography variant="body1">
            face:{" "}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onMouseEnter={() => setIsShown(true)}
              onClick={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              acceptable-look.jpg
            </span>
            {isShown && (
              <div className="imageContainer">
                <Image
                  placeholder="blur"
                  className="image"
                  src="/profilepic.jpg"
                  alt="javier's portrait"
                  layout="fixed"
                  width={300}
                  height={400}
                />
              </div>
            )}
          </Typography>
          <Box className={classes.flexCol}>
            <Typography variant="body1" className={classes.marginB}>
              Recent work
            </Typography>
            <Box className={classes.marginB}>
              <Typography variant="body1"> Web apps</Typography>
              <Box className={classes.webApps}>
                <div>
                  <a
                    href="https://lyingflat.place/"
                    rel="noopener"
                    target="_blank"
                    style={{ margin: ".2rem 0" }}
                  >
                    lying flat
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.door.link/"
                    rel="noopener"
                    target="_blank"
                    style={{ marginBottom: ".2rem" }}
                  >
                    door.link
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.pond.rest/"
                    rel="noopener"
                    target="_blank"
                    style={{ marginBottom: ".2rem" }}
                  >
                    pond.rest
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.suupcover.com/"
                    rel="noopener"
                    target="_blank"
                    style={{ marginBottom: ".2rem" }}
                  >
                    Suupcover
                  </a>
                </div>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1">Web sites</Typography>
              <a
                href="https://www.hi-malta.com/"
                rel="noopener"
                target="_blank"
              >
                hi-malta
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Box className={classes.maxW}>
            <Typography variant="body1" className={classes.marginB}>
              Opening
            </Typography>
            <Typography variant="h1">
              Hello, i am Javier Szyfer. <br /> A developer focused on web3 and
              adding value to the space. <br /> My favourite things in life are
              starting new projects, making music and learning stuff.
            </Typography>
            <Typography variant="body1" className={classes.marginTop}>
              Also, i find joy in
            </Typography>
            <Typography variant="body1" className={classes.marginTop}>
              meeting cool people <br />
              travelling <br /> web3 <br /> crypto <br />
              art <br />
              tech <br /> cold showers <br /> silence
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Typography variant="body1" className={classes.smMtop}>
            Dev stack
          </Typography>
          <Typography variant="body1" className={classes.marginTop}>
            React - Next.js <br />
            Ethers.js / Wagmi <br />
            The Graph <br />
            Zora stack <br />
            Hardhat
            <br />
          </Typography>
          <Typography variant="body1" className={classes.marginTop}>
            Current status
          </Typography>
          <Typography variant="body1" className={classes.marginTop}>
            learning: Solidity <br />
            education: self-taught <br />
            freelance: available <br />
            location: Buenos Aires <br />
            living with: Romina, Aldo, Walter, & Hugo
            <br />
            food choice: vegan
            <br />
          </Typography>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Typography variant="body1" className={classes.smMtop}>
            Get in touch
          </Typography>
          <Box className={classes.flexCol}>
            <span>javvvs.eth</span>
            <span style={{ marginBottom: "2rem" }}>dovpem~wannul at urbit</span>
            <a
              href="https://twitter.com/javvvs_"
              rel="noopener"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Javier-Szyfer"
              rel="noopener"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.lensfrens.xyz/javvvs.lens"
              rel="noopener"
              target="_blank"
            >
              LensFrens
            </a>
            <a
              href="https://www.instagram.com/szy_e_"
              rel="noopener"
              target="_blank"
            >
              Instagram
            </a>
            <a href="mailto:hello@javier.onl" rel="noopener" target="_blank">
              Mail
            </a>
          </Box>
          <div className={classes.marginTop}>
            <Typography variant="body1">Last update: Jun 9, 2022</Typography>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}
