import React from "react";
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
import educ from "./assets/img/school.jpg";
import pro from "./assets/img/profil2.jpg";
import lang from "./assets/img/world.jpg";

import linkedIn from "./assets/img/icon/linkedin.svg";
import github from "./assets/img/icon/github.svg";
import Languages from "./components/Languages";
import Articles from "./components/Article";
import Talk from "./components/Talk";
import CompactCardFixedLeft from "./components/compactCard/compactCardFixedLeft";
import CompactCardFixedRight from "./components/compactCard/compactCardFixedRight";

function App() {
  const { t } = useTranslation();
  const classes = defaultClasses();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.postContainer}>
        <AboutMe />

        <div style={{ marginBottom: 20 }}>
          <CompactCardFixedRight
            pic={pro}
            center={true}
            category="Expériences"
            title="Pro."
            text={<Pro />}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <CompactCardFixedLeft
            pic={educ}
            center={true}
            category={t("eduction section title")}
            title="certif."
            text={<Education />}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <CompactCardFixedRight
            pic={lang}
            center={true}
            category="Culture et"
            title="Langue."
            text={<Languages />}
          />
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
