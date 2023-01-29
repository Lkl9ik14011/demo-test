import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
  table: {
    width: "300px",
    minWidth: "100%",
  },
}));

const Froms = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead classes={{ root: classes.thead }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Mobile Phone</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>aaa</TableCell>
            <TableCell>men</TableCell>
            <TableCell>+66888888888</TableCell>
            <TableCell>thailand</TableCell>
            <TableCell align="center">
              <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                  size="small"
                  startIcon={<EditIcon fontSize="small" />}
                  variant="outlined"
                  color="primary"
                >
                  EDIT
                </Button>
                <Box mx={1} />
                <Button
                  size="small"
                  startIcon={<DeleteIcon fontSize="small" />}
                  variant="contained"
                  color="error"
                >
                  DELETE
                </Button>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Froms;
