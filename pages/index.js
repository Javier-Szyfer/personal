import { useState } from "react";
import Image from "next/image";

//Material UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

//Components
import ButtonA from "../components/circleA";
import ButtonS from "../components/circleS";

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
  flexRowMb: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
  },

  marginTop: {
    marginTop: "1rem",
  },
  marginB: {
    marginBottom: "1rem",
  },
  marginR: {
    marginRight: ".5rem",
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
                  className="image"
                  src="/profilepic.jpg"
                  alt="javier's portrait"
                  layout="fixed"
                  width={300}
                  height={300}
                />
              </div>
            )}
          </Typography>
          <Box className={classes.flexCol}>
            <Typography variant="body1" className={classes.marginB}>
              Recent work
            </Typography>
            <Box className={classes.marginB}>
              <Typography variant="body1" className={classes.marginR}>
                Web apps
              </Typography>

              <a href="https://www.door.link/" rel="noopener" target="_blank">
                door.link
              </a>
            </Box>

            <Typography variant="body1" className={classes.marginR}>
              Web sites
            </Typography>

            <a href="https://www.hi-malta.com/" rel="noopener" target="_blank">
              hi-malta
            </a>
          </Box>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Box className={classes.maxW}>
            <Typography variant="body1" className={classes.marginB}>
              Opening
            </Typography>
            <Typography variant="h1">
              Hello, i am Javier Szyfer. <br /> I work in web development and
              design. <br /> My favourite things in life are starting new
              projects, making music and learning stuff.
            </Typography>
            <Typography variant="body1" className={classes.marginTop}>
              Also, i find joy in
            </Typography>
            <Typography variant="body1" className={classes.marginTop}>
              bootrstaping projects <br /> meeting cool people <br />
              travelling <br /> remote work <br /> art <br />
              tech <br /> cold showers <br /> silence
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Typography variant="body1" className={classes.smMtop}>
            Actual dev stack
          </Typography>
          <Typography variant="body1" className={classes.marginTop}>
            React - Next.js <br />
            Vercel <br />
            Firebase <br />
            AWS <br />
            Heroku
            <br />
            Strapi <br />
          </Typography>
          <Typography variant="body1" className={classes.marginTop}>
            Current status
          </Typography>
          <Typography variant="body1" className={classes.marginTop}>
            education: self-taught <br />
            freelance: available <br />
            location: Buenos Aires <br />
            living with: Romina & Aldo <br />
            food choice: vegan
            <br />
            religion: none
            <br />
            gender: male
            <br />
          </Typography>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <Typography variant="body1" className={classes.smMtop}>
            Get in touch
          </Typography>
          <Box className={classes.flexCol}>
            <a href="https://www.google.com/" rel="noopener" target="_blank">
              Twitter
            </a>
            <a href="https://www.google.com/" rel="noopener" target="_blank">
              Instagram
            </a>
            <a href="https://www.google.com/" rel="noopener" target="_blank">
              Are.na
            </a>
            <a href="https://www.google.com/" rel="noopener" target="_blank">
              Mail
            </a>
          </Box>
          <Typography variant="body1" className={classes.marginTop}>
            Last update: Dec 5, 2020
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
}
