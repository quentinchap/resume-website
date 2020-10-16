import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import DevoticsLogo from "../assets/img/work/devotics-ex.png";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import clermontech from "../assets/img/clermontech-classic-slim.png";
import medium from "../assets/img/medium.png";
import franceFlag from "../assets/img/france.png";
import ukFlag from "../assets/img/uk.png";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    minWidth: 350,
    width: "30%",
    margin: 10,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 140,
  },
});

export default function ArticleCard({
  img,
  title,
  description,
  date,
  link,
  video,
  type,
  lang,
}) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.root}>
      {img && <CardMedia className={classes.media} image={img} title={title} />}
      {video && (
        <iframe
          style={{ position: "relative", height: "140px", width: "100%" }}
          src={video}
          frameborder="0"
          allowfullscreen
          title="video"
        ></iframe>
      )}
      <CardContent style={{ padding: 10, flex: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          color="primary"
          style={{
            fontWeight: 100,
            textTransform: "uppercase",
            marginBottom: 0,
          }}
        >
          {title}{" "}
          <img
            src={lang === "en" ? ukFlag : franceFlag}
            alt="logo medium"
            style={{ width: 20, height: 20 }}
          />
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <a
          href={link}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          {type === "devotics" && (
            <div
              style={{
                background: "#3c3c3c",
                width: 40,
                height: 40,
                borderRadius: 40,
                marginRight: 5,
              }}
            >
              <img
                src={DevoticsLogo}
                alt="logo devotics"
                style={{ width: 20, height: 20, margin: 10 }}
              />
            </div>
          )}
          {type === "clermontech" && (
            <div
              style={{
                background: "#1f85c7",
                width: 40,
                height: 40,
                borderRadius: 40,
              }}
            >
              <img
                src={clermontech}
                alt="logo clermontech"
                style={{ width: 20, height: 20, margin: 10 }}
              />
            </div>
          )}
          {type === "medium" && (
            <div
              style={{
                border: "1px solid #3c3c3c",
                width: 40,
                height: 40,
                borderRadius: 40,
              }}
            >
              <img
                src={medium}
                alt="logo medium"
                style={{ width: 20, height: 20, margin: 10 }}
              />
            </div>
          )}

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginLeft: 5 }}
          >
            {t("voir sur")} {type}
          </Typography>
        </a>
      </CardActions>
    </Card>
  );
}
