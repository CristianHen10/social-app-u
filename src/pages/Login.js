import React from "react";
import HelpImg from "../assets/images/login/help-hands.png";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Divider, TextField } from "@material-ui/core";

import "../assets/css/login.css";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  containerLeft: {
    backgroundColor: "#A3D2CA",
    minHeight: "100vh",
    padding: "25px;",
    display: "grid",
  },
  contentSlogan: {
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "bold",
  },
  contentCopy: {
    display: "flex",
    placeContent: "flex-start",
    placeItems: "flex-end",
  },
  containerRight: {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
  },
  buttonSignIn: {
    marginRight: "5px",
  },
  dividerLogin: {
    marginTop: "25px",
  },
  contentUser: {
      display: "grid",
      marginTop: "25px",
  },
  contentPassword: {
    display: "grid",
      marginTop: "25px",
    marginBottom: "25px",
  },
  inputUser : {
    borderRadius: "8px !important",
  },
  linkToLogin : {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={4} className={classes.containerLeft}>
          <div className={classes.contentSlogan}>
            <h2>
              SI DAS UN POCO,
              <br />
              LO ESTAS DANDO TODO.
            </h2>
          </div>
          <div>
            <img src={HelpImg} alt="Imagen representativa" width={"100%"} />
          </div>
          <div className="content-copy">
            <label>Copyright - Todos los derechos reservados 2021</label>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.containerRight}>
          <div>
            <h2>Inicia Sesion</h2>
            <div>
              <Button
                className={classes.buttonSignIn}
                variant="contained"
                color="secondary"
                startIcon={<AlternateEmailIcon />}
              >
                Sign in with Google
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<FacebookIcon />}
              >
                with Facebook
              </Button>
            </div>
            <Divider className={classes.dividerLogin} variant="middle" />
            <div>
              <div className={classes.contentUser}>
                <label>Username or Email Address</label>
                <TextField id="standard-basic" label="Correo" />
              </div>
              <div className={classes.contentPassword}>
                <label>Password</label>
                <TextField id="standard-basic" label="Contraseña" />
              </div>
              <Button
                variant="contained"
                color="secondary"
              >
                <Link className={classes.linkToLogin} to="/">Iniciar Sesion</Link>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
