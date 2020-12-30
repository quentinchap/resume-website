import React from "react";
import { makeStyles } from "@material-ui/core";
import DynamicCard from "../DynamicCard";

const useStyles = makeStyles({
  "@media (min-width: 865px)": {
    container: {
      margin: "20px auto 20px auto",
      width: "calc(52vw + 300px)",
    },

    card__side_front: {
      width: "300px",
    },
    card: {
      flex: "initial",
      position: "relative",
      height: "640px",
      width: "calc(52vw + 300px)",
      transform: "translate(52vw, 0)",
    },

    card__side_back: {
      height: "600px",
      transition: "all 0.8s ease",
      backgroundColor: "#f5f5f5",
      position: "absolute",
      transform: "translate(-51vw, 20px)",
      top: "0",
      left: "0",
      width: "52vw",
      borderRadius: "3px",
      overflow: "scroll",
      boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.15)",
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
  },
  card__theme_box: { color: "#fff", marginBottom: "8rem" },

  card__subject: {
    fontFamily: '"Inconsolata", monospace',
    letterSpacing: "0.8rem",
    fontSize: "1.1rem",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  card__title: {
    fontFamily: '"VT323", monospace',
    textTransform: "uppercase",
    fontSize: "3rem",
    fontWeight: "100",
  },
  card__side_front: {
    height: "640px",
    transition: "all 0.8s ease",
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: "3px",
    boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.15)",
    backgroundSize: "cover",
  },

  card__details: {
    fontFamily: '"Inconsolata", monospace',
    padding: "0 2vw",
    "& ul": { listStyle: "none", width: "80%", margin: "0 auto" },
    "& ul li": {
      textAlign: "center",
      fontSize: "1.8rem",
      padding: "1rem",
    },
    "& ul li:not(:last-child)": { borderBottom: "1px solid #eee" },
  },

  "@media (max-width: 865px)": {
    container: {
      marginBottom: 20,
    },
    card: {
      height: "auto",
      borderRadius: "3px",
      backgroundColor: "#f5f5f5",
      boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.15)",
    },
    card__side_front: {
      clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
      height: "auto",
      position: "relative",
      boxShadow: "none",
      backgroundColor: "#f5f5f5",
    },
    card__side_back: {
      width: "100%",
      transform: "rotateY(0)",
      height: "auto",
      position: "relative",
      backgroundColor: "#f5f5f5",
      boxShadow: "none",
    },
    card__heading: {
      display: "none",
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

const CompactCardFixedRight = ({
  category,
  title,
  text,
  list,
  pic,
  center,
  labelList,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.card__side_back}>
          <div className={classes.card__details}>
            {text ? text : ""}{" "}
            {list
              ? list.map((i) => {
                  return <DynamicCard exp={i} />;
                })
              : ""}
          </div>
        </div>

        <div
          className={classes.card__side_front}
          style={{
            backgroundPosition: center ? "center" : "",
            backgroundImage:
              "linear-gradient(to right bottom, rgba(189, 189, 189, 0.65), rgba(60, 60, 60, 0.7)), url(" +
              pic +
              ")",
          }}
        >
          <div className={classes.card__theme}>
            <div className={classes.card__theme_box}>
              <p className={classes.card__subject}>{category}</p>
              <p className={classes.card__title}>{title}</p>
              {list ? (
                <p>
                  {list.length} {labelList}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactCardFixedRight;
