import React, { useEffect, useState, useReducer } from "react";
import { Grid, TextField } from "@mui/material";
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
    onInput(id, state.first, state.second, state.third);
  }, [id, onInput, state.first, state.second, state.third]);

  console.log(state);
  const changeHandler1 = (e) => {
    dispatch({
      type: "FIRST",
      first: e.target.value,
    });
  };

  const changeHandler2 = (e) => {
    dispatch({
      type: "SECOND",
      second: e.target.value,
    });
  };

  const changeHandler3 = (e) => {
    dispatch({
      type: "THIRD",
      third: e.target.value,
    });
    console.log(e.target.value, "Inside changehandler#");
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
          onChange={changeHandler1}
          id="outlined-basic"
          variant="outlined"
          value={schedule.first}
        />
      </Grid>
      <Grid item xs={3.5}>
        <TextField
          onChange={changeHandler2}
          id="outlined-basic"
          variant="outlined"
          value={schedule.second}
        />
      </Grid>
      <Grid item xs={3.5}>
        <TextField
          onChange={changeHandler3}
          id="outlined-basic"
          variant="outlined"
          value={schedule.third}
        />
      </Grid>
    </React.Fragment>
  );
}

export default FormRow;
