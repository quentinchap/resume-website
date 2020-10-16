import React from "react";
import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import profilPic from "../../assets/img/profil.jpg";

const useStyles = makeStyles({
  artboard: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem",
    height: "100%",
    position: "relative",
  },
  "@media (max-width: 37.5em)": { artboard: { padding: "1rem" } },
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.15)",
    flex: "initial",
    position: "relative",
    height: "52rem",
    width: "30rem",
    M: "200rem",
    perspective: "200rem",
    margin: "2rem",
    "&:hover": {
      card__side_back: { transform: "rotateY(0)" },
      card__side_front: { transform: "rotateY(-180deg)" },
    },
  },

  card__side_front: {
    height: "52rem",
    transition: "all 0.8s ease",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    W: "hidden",
    backfaceVisibility: "hidden",
    borderRadius: "3px",
    overflow: "hidden",
    boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.15)",
    "&:hover": {
      transform: "rotateY(-180deg)",
    },
    backgroundSize: "cover",
    backgroundImage:
      "linear-gradient(to right bottom, rgba(189, 189, 189, 0.65), rgba(60, 60, 60, 0.7)), url(" +
      profilPic +
      ")",
  },
  card__side_back: {
    height: "52rem",
    transition: "all 0.8s ease",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    W: "hidden",
    backfaceVisibility: "hidden",
    borderRadius: "3px",
    overflow: "hidden",
    boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.15)",
    backgroundColor: "#fff",
    transform: "rotateY(180deg)",
    "&:hover": {
      transform: "rotateY(0)",
    },
  },

  card__theme: {
    position: "absolute",
    top: "54%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fallbacks: [{ top: "50%" }],
    width: "90%",
    textAlign: "center",
  },
  card__theme_box: { color: "#fff", marginBottom: "8rem" },
  card__subject: {
    fontFamily: '"Inconsolata", monospace',
    letterSpacing: "0.8rem",
    fontSize: "1.6rem",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  card__title: {
    fontFamily: '"VT323", monospace',
    textTransform: "uppercase",
    fontSize: "6rem",
    fontWeight: "100",
  },
  card__cover: {
    position: "relative",
    backgroundSize: "cover",
    height: "14rem",
    W: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    backgroundImage:
      "linear-gradient(to top right, rgba(189,189,189, 0.65), rgba(60,60,60, 0.65)), url(../../assets/img/AI1.jpeg)",
  },
  card__heading: {
    textAlign: "center",
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
  },
  card__heading_span: {
    fontFamily: '"VT323", monospace',
    fontSize: "4.2rem",
    fontWeight: "300",
    textTransform: "uppercase",
    padding: "1rem 1.5rem",
    color: "#fff",
  },
  card__details: {
    fontFamily: '"Inconsolata", monospace',
    padding: "4rem 2rem",
    "& ul": { listStyle: "none", width: "80%", margin: "0 auto" },
    "& ul li": {
      textAlign: "center",
      fontSize: "1.8rem",
      padding: "1rem",
    },
    "& ul li:not(:last-child)": { borderBottom: "1px solid #eee" },
  },

  "@media only screen and (max-width: 37.5em), only screen and (hover: none)": {
    card: {
      height: "auto",
      borderRadius: "3px",
      backgroundColor: "#fff",
      boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.15)",
      "&:hover": {
        card__side_front: { transform: "rotateY(0)" },
      },
    },
    card__side_front: {
      clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
      height: "auto",
      position: "relative",
      boxShadow: "none",
    },
    card__side_back: {
      transform: "rotateY(0)",
      height: "auto",
      position: "relative",
      boxShadow: "none",
    },
    card__details: { padding: "3rem 2rem" },
    card__theme: {
      position: "relative",
      top: "0",
      left: "0",
      transform: "translate(0)",
      width: "100%",
      padding: "5rem 0rem 1.5rem 0rem",
      textAlign: "right",
    },
    card__theme_box: { marginBottom: "1.5rem" },
    card__title: { fontSize: "2rem" },
  },
});

const CompactCard = ({ category, title, title2, text, list }) => {
  const classes = useStyles();

  return (
    <div className={classes.artboard}>
      <div className={classes.card}>
        <div className={classes.card__side_bac}>
          <div className={classes.card__cover}>
            <h4 className={classes.card__heading}>
              <span className={classes.card__heading_span}>{title2}</span>
            </h4>
          </div>
          <div className={classes.card__details}>
            {text ? text : ""}
            {list ? (
              <ul>
                <li>Advanced JS and CSS</li>
                <li>JS/CSS Preprocessors</li>
                <li>JS Frameworks</li>
                <li>Advanced Animations</li>
                <li>Deployment Pipelines</li>
                <li>Large Apps Architectures</li>
                <li>Naming Conventions</li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={classes.card__side_front}>
          <div className={classes.card__theme}>
            <div className={classes.card__theme_box}>
              <p className={classes.card__subject}>{category}</p>
              <p className={classes.card__title}>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactCard;
