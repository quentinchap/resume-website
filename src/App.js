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
import { Card } from "@material-ui/core";
import franceFlag from "./assets/img/france.png";
import ukFlag from "./assets/img/uk.png";
import esFlag from "./assets/img/es.png";
import workBg from "./assets/img/work.jpeg";

import linkedIn from "./assets/img/icon/linkedin.svg";
import github from "./assets/img/icon/github.svg";

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
            <Card className={classes.section}>
              <Typography
                variant="h2"
                gutterBottom
                color="primary"
                className={classes.columnTitle}
              >
                {t("language")}
              </Typography>
              <div
                className={classes.column}
                style={{ margin: 5, lineHeight: "42px", display: "flex" }}
              >
                <img
                  alt="Français"
                  src={franceFlag}
                  style={{ margin: "5px 10px 5px 0px" }}
                />{" "}
                {t("nativeLanguage")}
              </div>
              <div
                className={classes.column}
                style={{ margin: 5, lineHeight: "42px", display: "flex" }}
              >
                <img
                  alt="En"
                  src={ukFlag}
                  style={{ margin: "5px 10px 5px 0px" }}
                />{" "}
                {t("(TOEIC: 890) Capacités professionnelles complètes")}
              </div>
              <div
                className={classes.column}
                style={{ margin: 5, lineHeight: "42px", display: "flex" }}
              >
                <img
                  alt="En"
                  src={esFlag}
                  style={{ margin: "5px 10px 5px 0px" }}
                />{" "}
                {t("basicLevel")}
              </div>
            </Card>
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
          <div style={{ height: "200px" }} />
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

      <Typography
        variant="h2"
        gutterBottom
        color="primary"
        className={classes.sectionTitle}
        style={{ marginTop: "5%" }}
      >
        {t("Talks")}
      </Typography>
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
            <div style={{ flex: 1, textAlign: "center", maxWidth: 300, marginRight:50 }}>
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
