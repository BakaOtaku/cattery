import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.cont}>
        <Typography variant="subtitle1" className={classes.text}>
          © BakaOtaku. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  ...theme.overrides.mui,
  footer: {
    borderTop: "12px solid #FFCE32",
    position: "relative",
  },
  cont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: "20px 0 40px 0",
    textAlign: 'center',
    maxWidth: 1080,
    margin: '0px auto'
  },
  title: {
    margin: "20px 0",
    fontSize: 28,
    color: "#48360C",
  },
  text: {
    fontSize: "14px",
  },
}));

export default Footer;