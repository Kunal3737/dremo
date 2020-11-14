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
import { withRouter } from "react-router";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      fontSize: "18px",
    },
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
  currentRoute: {
    color: "blue",
    fontSize: "18px",
    cursor: "pointer",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  let currentRoute = props.location.pathname.slice(1);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Grid item>
            <img src={Logo} height="90px" />
          </Grid>
          <Grid container justify="flex-end" spacing="2" alignItems="center">
            <Grid
              item
              onClick={() => {
                props.history.push("/home");
              }}
            >
              <Typography
                variant="h6"
                className={classNames(
                  currentRoute === "home" ? classes.currentRoute : classes.title
                )}
              >
                HOME
              </Typography>
            </Grid>
            <Grid
              item
              onClick={() => {
                props.history.push("/products");
              }}
            >
              <Typography
                variant="h6"
                className={classNames(
                  currentRoute !== "products"
                    ? classes.title
                    : classes.currentRoute
                )}
              >
                PRODUCTS
              </Typography>
            </Grid>
            <Grid
              item
              onClick={() => {
                props.history.push("/affiliations");
              }}
            >
              <Typography
                variant="h6"
                className={classNames(
                  currentRoute !== "affiliations"
                    ? classes.title
                    : classes.currentRoute
                )}
              >
                AFFILIATIONS
              </Typography>
            </Grid>
            <Grid
              item
              onClick={() => {
                props.history.push("/enquiry");
              }}
            >
              <Typography
                variant="h6"
                className={classNames(
                  currentRoute !== "enquiry"
                    ? classes.title
                    : classes.currentRoute
                )}
              >
                ENQUIRY
              </Typography>
            </Grid>
            <Grid
              item
              onClick={() => {
                props.history.push("/suppliers");
              }}
            >
              <Typography
                variant="h6"
                className={classNames(
                  currentRoute !== "suppliers"
                    ? classes.title
                    : classes.currentRoute
                )}
              >
                SUPPLIERS
              </Typography>
            </Grid>
            <Grid
              item
              onClick={() => {
                props.history.push("/aboutus");
              }}
            >
              <Typography
                variant="h6"
                className={classNames(
                  currentRoute !== "aboutus"
                    ? classes.title
                    : classes.currentRoute
                )}
              >
                ABOUT US
              </Typography>
            </Grid>
            <Grid
              item
              onClick={() => {
                props.history.push("/contactus");
              }}
            >
              <Typography
                variant="h6"
                className={classNames(
                  currentRoute !== "contactus"
                    ? classes.title
                    : classes.currentRoute
                )}
              >
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
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
