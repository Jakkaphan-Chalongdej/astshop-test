import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import "../style.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    marginTop: "-40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: "2.1rem 1rem",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "0.6rem 0.1rem",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  drawerPaper: {
    position: "relative",
   
    padding: "1rem 0.2rem",
    // whiteSpace: "nowrap",
    height: "100vh",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  //   drawerPaperClose: {
  //     position: "fixed",
  //     overflowX: "hidden",
  //     height: "100vh",
  //     transition: theme.transitions.create("width", {
  //       easing: theme.transitions.easing.sharp,
  //       duration: theme.transitions.duration.leavingScreen,
  //     }),
  //     width: theme.spacing(7),
  //     [theme.breakpoints.up("sm")]: {
  //       width: theme.spacing(9),
  //     },
  //   },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  appBarSpacer: theme.mixins.toolbar,

  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(true);
  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} >
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            // className={clsx(
            //   classes.menuButton,
            //   open && classes.menuButtonHidden
            // )}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={"TODO"} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
           <AccountCircleIcon/>
          </IconButton>
          <Link to="/" className={"link-style"}>
            <IconButton color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <div
        variant="permanent"
        classes={{ paper: clsx(classes.drawerPaper) }}
        // classes={{
        //   paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        // }}
        // open={open}
      >
        <div className={classes.toolbarIcon}>
          {/* </div><IconButton onClick={handleDrawerClose}>
         
            <ChevronLeftIcon />
          </IconButton> */}
        </div>
        <Divider />
        <List className="link-style">{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </div>
    </div>
  );
}
