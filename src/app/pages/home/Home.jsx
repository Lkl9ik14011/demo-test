import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

import Lcenter from "../../components/layout/Lcenter";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  papre: {
    padding: 8,
    textAlign: "center",
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
    },
  },
  hover: {},
}));

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLink = (link) => () => {
    navigate(link);
  };

  return (
    <div className={classes.root}>
      <Lcenter>
        <Grid container spacing={2}>
          <Grid item xs={6} className={classes.hover}>
            <Box
              component={Paper}
              elevation={3}
              className={classes.papre}
              onClick={handleLink("/calculator")}
            >
              <Typography>TEST 2</Typography>
              <Divider />
              <Box mt={1} />
              <Typography>Calculator</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.hover}>
            <Box
              component={Paper}
              elevation={3}
              className={classes.papre}
              onClick={handleLink("/froms")}
            >
              <Typography>TEST 3</Typography>
              <Divider />
              <Box mt={1} />
              <Typography>Froms Examples</Typography>
            </Box>
          </Grid>
        </Grid>
      </Lcenter>
    </div>
  );
};

export default Home;
