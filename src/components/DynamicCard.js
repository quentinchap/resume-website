import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Button } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles({
  root: { display: "flex", flexWrap: "wrap", margin: "20px 0 20px 0" },
  dateDiv: { flex: 1, minWidth: 100, padding: 5 },
  contentDiv: { flex: 3, minWidth: 200 },
});

const DynamicCard = ({ exp }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [moreInfo, setmoreInfo] = useState(false);
  const [hide, setHide] = useState(false);
  if (exp.major || hide) {
    return (
      <div className={classes.root}>
        <div className={classes.dateDiv}>
          <Typography variant="body1" gutterBottom color="primary">
            {exp.period}
            <br />
            <strong>{exp.compagny}</strong>
            <br />
            {exp.city}
            <br />
            {exp.country}
            <br />
          </Typography>
        </div>
        <div className={classes.contentDiv}>
          <Typography
            variant="h6"
            gutterBottom
            color="primary"
            style={{
              fontWeight: 100,
              textTransform: "uppercase",
            }}
          >
            {exp.title}
          </Typography>
          <Typography variant="body1" gutterBottom color="primary">
            {exp.shortDescription}
          </Typography>
          {exp.techno && exp.techno.length ? (
            <div style={{ margin: "5px 0 20px 0" }}>
              <Typography variant="h6" gutterBottom color="primary">
                {t("key skills")}
              </Typography>
              {exp.techno.map((e) => {
                if (e.img) {
                  return (
                    <img
                      src={e.img}
                      alt={e.name}
                      style={{
                        height: 24,
                        margin: 5,
                      }}
                    />
                  );
                }
                return e.name;
              })}
            </div>
          ) : (
            ""
          )}
          <AnimatePresence>
            {moreInfo && exp.challenges && exp.challenges.length && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{
                  margin: "5px 0 20px 0",
                }}
              >
                <Typography variant="h6" gutterBottom color="primary">
                  {t("challenges")}
                </Typography>
                <ul>
                  {exp.challenges.map((e) => (
                    <li>{e}</li>
                  ))}
                </ul>
                <Button
                  onClick={() => setmoreInfo(false)}
                  variant="outlined"
                  color="primary"
                >
                  {t("Moins d'info")}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!moreInfo && exp.challenges && exp.challenges.length && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                enter={{ transition: { delay: 3 } }}
                exit={{ scale: 0 }}
              >
                <Button
                  onClick={() => setmoreInfo(true)}
                  variant="outlined"
                  color="primary"
                >
                  {t("En savoir plus")}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <div className={classes.dateDiv}>
        <Typography variant="body1" gutterBottom color="primary">
          {exp.period}
          <br />
          <strong>{exp.compagny}</strong>
        </Typography>
      </div>
      <div className={classes.contentDiv} style={{ textAlign: "left" }}>
        {" "}
        <Button onClick={() => setHide(true)} color="secondary">
          {t("Découvrir cette expérience")}
        </Button>{" "}
      </div>
    </div>
  );
};

export default DynamicCard;
