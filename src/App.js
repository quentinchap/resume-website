import React from "react";
import HeaderImage from "./assets/img/profil2.jpg";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import Typography from "@material-ui/core/Typography";

import AboutMe from "./components/AboutMe";
import { theme, defaultClasses } from "./theme";
import Pro from "./components/Pro";
import Education from "./components/Education";

import workBg from "./assets/img/work.jpeg";

import linkedIn from "./assets/img/icon/linkedin.svg";
import github from "./assets/img/icon/github.svg";
import Languages from "./components/Languages";
import Articles from "./components/Article";
import Talk from "./components/Talk";

function App() {
  const { t } = useTranslation();
  const classes = defaultClasses();

  return (
    <ThemeProvider theme={theme}>
      <Parallax
        blur={0}
        bgImage={HeaderImage}
        bgImageAlt="the cat"
        strength={200}
      >
        <Typography
          variant="h2"
          gutterBottom
          style={{
            fontFamily: "'Assistant', sans-serif",
            fontSize: "1.5em",
            margin: "150px 0 0 20px",
            color: "rgba(148, 147, 147, 0.82)",
            fontWeight: 100,
          }}
        >
          {t("Welcome")}
          <br />
          {t("My name is")}
        </Typography>
        <Typography
          variant="h1"
          gutterBottom
          style={{
            fontSize: "1.7rem",
            margin: "0px 0 0 20px",
            fontWeight: 400,
            color: "#3e3e3e",
          }}
        >
          Quentin CHAPELLE
        </Typography>
        <div style={{ height: "200px" }} />
      </Parallax>
      <div className={classes.postContainer}>
        <AboutMe />
        <div className={classes.flexContainer}>
          <div className={classes.column}>
            <Pro />
          </div>
          <div className={classes.column}>
            <Education />
            <Languages />
          </div>
        </div>
      </div>

      <Parallax blur={0} bgImage={workBg} bgImageAlt="work" strength={200}>
        <div style={{ backgroundColor: "rgba(33,33,33,.69)" }}>
          <Typography
            variant="h1"
            gutterBottom
            className={classes.columnTitle}
            style={{
              textAlign: "center",
              paddingTop: "5%",
              fontSize: "3rem",
              fontWeight: 100,
              color: "White",
              letterSpacing: ".3rem",
            }}
          >
            {t("personnalProject")}
          </Typography>
          <div style={{ height: "200px" }}>
            <Typography
              variant="h2"
              gutterBottom
              color="primary"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "1.8rem",
              }}
            >
              Section en construction
            </Typography>
          </div>
        </div>
      </Parallax>
      <Typography
        variant="h2"
        gutterBottom
        color="primary"
        className={classes.sectionTitle}
        style={{ marginTop: "5%" }}
      >
        {t("Articles")}
      </Typography>
      <Articles />

      <Typography
        variant="h2"
        gutterBottom
        color="primary"
        className={classes.sectionTitle}
        style={{ marginTop: "5%" }}
      >
        {t("Talks")}
      </Typography>
      <Talk />
      <Parallax blur={0} bgImage={workBg} bgImageAlt="work" strength={200}>
        <div style={{ backgroundColor: "rgba(33,33,33,.69)" }}>
          <div
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                textAlign: "center",
                maxWidth: 300,
                marginRight: 50,
              }}
            >
              <a href="https://www.linkedin.com/in/quentinchapelle">
                <img
                  alt="linkedin"
                  src={linkedIn}
                  style={{
                    float: "left",
                    width: "6vw",
                    minWidth: "50px",
                  }}
                />{" "}
                <span
                  style={{
                    lineHeight: "6vw",
                    display: "inline-block",
                    fontSize: "1.4em",
                    color: "#d2d2d2",
                    marginLeft: "10px",
                  }}
                >
                  quentinchapelle
                </span>
              </a>
            </div>
            <div style={{ flex: 1, textAlign: "center", maxWidth: 300 }}>
              <a href="https://github.com/quentinchap">
                <img
                  alt="github"
                  src={github}
                  style={{ float: "left", width: "6vw", minWidth: "50px" }}
                />{" "}
                <span
                  style={{
                    lineHeight: "6vw",
                    display: "inline-block",
                    fontSize: "1.4em",
                    color: "#d2d2d2",
                    marginLeft: "10px",
                  }}
                >
                  quentinchap
                </span>
              </a>
            </div>
          </div>
        </div>
      </Parallax>
    </ThemeProvider>
  );
}

export default App;
