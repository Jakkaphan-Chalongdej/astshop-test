import React from "react";
import Dashboard from "../components/Dashboard";
import { makeStyles } from "@material-ui/core/styles";

import { Row } from "react-bootstrap";

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
    position: "relative",
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
export default function Adminview(props) {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.container}>
        <Row>
          <div className="col-md-2 col-lg-2 shop-hide">
            <Dashboard />
          </div>
          <div className={"col-md-10 col-lg-10"}>
            <div maxWidth="lg" className={classes.container}>
              <div style={{ marginTop: "30px" }} className="row">
                {props.children}
              </div>
            </div>
          </div>
        </Row>
      </main>
    </div>
  );
}
