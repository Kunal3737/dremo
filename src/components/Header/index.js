import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Divider,
  Avatar,
} from "@material-ui/core";
import Logo from "../../assets/logo.svg";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "15px",
  },
  appBar: {
    backgroundColor: "#fafafa",
    color: "black",
  },
  whatsApp: {
    color: "#00e676",
  },
  linkedIn: {
    color: "#0073b1",
  },
  facebook: {
    color: "#0d8cf0",
  },
  instagram: {
    color: "#ca37ac",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Grid item>
            <img
              src={Logo}
              // style={{
              //   marginLeft: "100px",
              // }}
              height="100px"
            />
          </Grid>
          <Grid container justify="flex-end" spacing="2" alignItems="center">
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                HOME
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                PRODUCTS
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                AFFILIATIONS
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                ENQUIRY
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                SUPPLIERS
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                ABOUT US
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                CONTACT US
              </Typography>
            </Grid>

            <Divider orientation="vertical" flexItem />

            <Grid item>
              <LinkedInIcon className={classes.linkedIn} />
              &nbsp;&nbsp;
              <WhatsAppIcon className={classes.whatsApp} />
              &nbsp;&nbsp;
              <FacebookIcon className={classes.facebook} />
              &nbsp;&nbsp;
              <InstagramIcon className={classes.instagram} />
              &nbsp;&nbsp;
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
              <div
                id="google_translate_element"
                style={{
                  position: "static",
                }}
              ></div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
