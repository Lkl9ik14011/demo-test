import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Link, Paper, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "block",
    textAlign: "center",
    padding: "32px 32px 0",
    width: "50%",
    minHeight: "80vh",
    [theme.breakpoints.down("sm")]: {
      minWidth: 500,
    },
    [theme.breakpoints.down("xs")]: {
      boxShadow: theme.shadows[0],
      backgroundColor: "unset",
      width: "100%",
      minWidth: "unset",
    },
  },
  vector: {
    maxWidth: "100%",
    width: "100%",
    height: "auto",
  },
  wrapperImg: {
    width: "50%",
    height: "auto",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ErrorPages = () => {
  const classes = useStyles();
  return (
    <Box
      bgcolor={{ xs: "#fafbfc", sm: "unset" }}
      display="flex"
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Paper classes={{ root: classes.paper }}>
        <Typography variant="h5">ERROR PAGES</Typography>
        <Box mb={2} />
        <div className={classes.wrapperImg}>
          <img
            className={classes.vector}
            src="../../../../public/assets/images/error404.svg"
            alt="error"
          />
        </div>
        <Box px={2}>
          <Nomalpage />
        </Box>
      </Paper>
    </Box>
  );
};

export default ErrorPages;

const Nomalpage = () => {
  return (
    <Box p={1} alignItems={"center"} display="flex" justifyContent="center">
      <Box>
        <Link
          href="/"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          color="inherit"
        >
          <img
            height="50"
            width="90"
            src="../../../../public/assets/images/react.svg"
            alt="logo"
          />
        </Link>
      </Box>
    </Box>
  );
};
