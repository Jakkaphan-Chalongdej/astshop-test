import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Orders from "./components/Orders";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./layout/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  container: {
    //marginTop:"-800px",
    width: "auto",
    height: "100vh",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginBottom: "120px",
    marginRight: "140px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));
export default function Stock() {
  const classes = useStyles();
  return (
    <div>
      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
