import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Orders from "./components/Orders";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./layout/index";

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
 
}));
export default function ViewOrders() {
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
