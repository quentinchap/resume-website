import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const defaultClasses = makeStyles({
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  column: {
    flex: 1,
    minWidth: 200,
  },
  section: {
    padding: 15,
    margin: 10,
  },
  postContainer: {
    background: "#efefef",
    minHeight: 300,
    padding: "5%",
    width: "90%",
    overflow: "auto",
  },
  columnTitle: {
    textTransform: "uppercase",
    fontFamily: "'Assistant', sans-serif",
    margin: 0,
    fontWeight: 400,
    color: "#3c3c3c",
    marginBottom: 10,
    fontSize: "1.5rem",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: 100,
    textTransform: "uppercase",
    marginTop: 0,
    letterSpacing: ".3rem",
  },
  sectionTitleCompact: {
    fontSize: "3rem",
    fontWeight: 100,
    textTransform: "uppercase",
    marginTop: 0,
    letterSpacing: ".3rem",
  },
  moreInfo: {
    height: 15,
    width: 100,
    fontSize: 15,
    lineHeight: 15,
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 5,
    color: "rgba(0, 0, 0, 0.62)",
    border: "1px solid rgba(0, 0, 0, 0.37)",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3e3e3e",
    },
    secondary: {
      main: "#0086c3",
    },
  },
});

export { theme, defaultClasses };
