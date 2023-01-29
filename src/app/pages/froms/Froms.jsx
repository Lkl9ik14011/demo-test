import React from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import Lcenter from "../../components/layout/Lcenter";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Table from "./components/Table";
import AddTools from "./components/AddTools";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "70vh",
    padding: 8,
    width: "100%",
    maxWidth: "100%",
    overflowX: "scroll",
    [theme.breakpoints.down("xs")]: {
      width: "calc(100vw - 32px)",
    },
  },
  thead: {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    "& .MuiTableCell-head": {
      color: theme.palette.primary.main,
      fontWeight: 600,
      borderBottom: "unset",
    },
  },
}));

const Froms = () => {
  const classes = useStyles();

  return (
    <Lcenter maxWidth="lg">
      <Backdrop open={false} style={{ zIndex: 9999, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box mt={3} />
      <AddTools />
      <Box my={2} />
      <Table />
    </Lcenter>
  );
};

export default Froms;
