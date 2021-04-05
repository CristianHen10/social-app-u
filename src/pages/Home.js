import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import MainLayout from "../shared/MainLayout";
import DataMenu from "../data/menu.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    linkToLogin : {
        textDecoration: "none",
        color: "inherit",
    },
    cardStyles: {
        padding: theme.spacing(3),
    }
}));

export default function Home() {
    const classes = useStyles();
  return (
    <>
      <MainLayout>
        <children>
          <div>
            <div className="">
              <h1>Información General</h1>
              <div>
                <p>
                  Este proyecto llamado “Si doy un poco, lo doy todo” esta
                  enfocado en solucionar una problemática reciente en nuestra
                  ciudad y que estoy seguro que se da en casi todo el territorio
                  colombiano. Si miramos en la ciudad de Cali, encontraremos que
                  en las ultimas semanas la temporada de lluvias no ha tenido
                  mesura en cuanto a la cantidad de agua y la agresividad que el
                  clima a tenido sobre nuestra ciudad y es evidente como en las
                  zonas de las laderas de la ciudad hay cientos y tal vez miles
                  de personas afectadas por esta ola de lluvias y vendavales.
                </p>
                <div>
                  <Grid container>
                    {DataMenu.map((values) => (
                      <Grid item xs={12} sm={6} md={4} className={classes.cardStyles}>
                        <Card>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {values.nombre}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {values.descripcion}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary">
                              <Link className={classes.linkToLogin} to={values.ruta}>Visitar</Link>
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </children>
      </MainLayout>
    </>
  );
}
