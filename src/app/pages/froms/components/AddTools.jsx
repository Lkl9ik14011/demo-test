import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 8,
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "calc(100vw - 32px)",
    },
  },
  roundedTextfield: {
    minWidth: 120,
    "& .MuiOutlinedInput-root": {
      lineHeight: "1.6",
      borderRadius: `8px`,
    },
    "& .MuiInputLabel-root": {
      width: "calc(100% - 50px)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .MuiInputLabel-shrink": {
      width: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .MuiSelect-outlined": {
      height: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "97%",
    },
  },
}));

const AddTools = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Box px={2} py={1}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <FormControl
            variant="outlined"
            style={{ width: "120px" }}
            classes={{ root: classes.roundedTextfield }}
            size="small"
          >
            <InputLabel>Title *</InputLabel>
            <Select width="120px" lable="Title">
              <MenuItem value="male">MALE</MenuItem>
              <MenuItem value="female">FEMALE</MenuItem>
            </Select>
          </FormControl>
          <Box mx={1} />
          <Box width="40%" maxWidth="450px" display="flex" alignItems="center">
            <TextField
              fullWidth
              value={""}
              size="small"
              variant="outlined"
              name="search"
              label={"FirstName"}
              style={{ marginBottom: "0px" }}
              onChange={() => ({})}
            />
          </Box>
          <Box mx={1} />
          <Box width="40%" maxWidth="450px" display="flex" alignItems="center">
            <TextField
              fullWidth
              value={""}
              size="small"
              variant="outlined"
              name="search"
              label={"LastName"}
              style={{ marginBottom: "0px" }}
              onChange={() => ({})}
            />
          </Box>
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="hbd"
              value={''}
              onChange={() => ({})}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddTools;
