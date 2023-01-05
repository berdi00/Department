import React, { useEffect, useState, useReducer } from "react";
import { Grid, Input, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const inputReducer = (state, action) => {
  if (action.type === "FIRST") {
    return {
      ...state,
      first: action.first,
    };
  }

  if (action.type === "SECOND") {
    return {
      ...state,
      second: action.second,
    };
  }

  if (action.type === "THIRD") {
    return {
      ...state,
      third: action.third,
    };
  }
};

function FormRow({ row, schedule, onInput, id }) {
  console.log(schedule, id);

  const [state, dispatch] = useReducer(inputReducer, {
    first: schedule.first,
    second: schedule.second,
    third: schedule.third,
  });

  console.log(state, "Before UseEffect");

  useEffect(() => {
    onInput(id, {
      inputValues: {
        first: state.first,
        second: state.second,
        third: state.third,
      },
    });
  }, [id, onInput, state.first, state.second, state.third]);

  console.log(state, "after useEffect");
  const changeHandler1 = (val) => {
    dispatch({
      type: "FIRST",
      first: val,
    });
  };
  const changeHandler2 = (val) => {
    dispatch({
      type: "SECOND",
      second: val,
    });
  };

  const changeHandler3 = (val) => {
    dispatch({
      type: "THIRD",
      third: val,
    });
    console.log(val, "Inside changehandler#");
  };

  return (
    <React.Fragment>
      <Grid item xs={1.5}>
        <Item className="h-100 d-flex justify-content-center align-items-center">
          {row}
        </Item>
      </Grid>
      <Grid item xs={3.5}>
        <TextField
          onChange={(e) => changeHandler1(e.target.value)}
          id="outlined-basic"
          variant="outlined"
          value={schedule.first}
        />
      </Grid>
      <Grid item xs={3.5}>
        <TextField
          onChange={(e) => changeHandler2(e.target.value)}
          id="outlined-basic"
          variant="outlined"
          value={schedule.second}
        />
      </Grid>
      <Grid item xs={3.5}>
        <TextField
          onChange={(e) => changeHandler3(e.target.value)}
          id="outlined-basic"
          variant="outlined"
          value={schedule.third}
        />
      </Grid>
    </React.Fragment>
  );
}

export default FormRow;
