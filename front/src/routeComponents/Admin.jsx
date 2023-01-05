import React, { useState, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import FormRow from "../components/FormRow";
import { useCustomState } from "../utils/useCustomFunctions";

const dummyTest = [
  {
    id: "firstmecha",
    schedule: [
      {
        day: 1,
        first: "Math",
        second: "Astronomy",
        third: "Optics",
      },
      {
        day: 2,
        first: "History",
        second: "Math",
        third: "Dance",
      },
      {
        day: 3,
        first: "History",
        second: "Math",
        third: "Dance",
      },
      {
        day: 4,
        first: "History",
        second: "Math",
        third: "Dance",
      },
      {
        day: 5,
        first: "History",
        second: "Math",
        third: "Dance",
      },
      {
        day: 6,
        first: "History",
        second: "Math",
        third: "Dance",
      },
    ],
  },
];

function Admin() {
  const IdentifiedField = dummyTest.find((item) => item.id === "firstmecha");
  console.log([...IdentifiedField.schedule]);
  const [initialState, inputHandler, setFormData] = useCustomState({
    monday: {
      first: "",
      second: "",
      third: "",
    },
    tuesday: {
      first: "",
      second: "",
      third: "",
    },
    wednesday: {
      first: "",
      second: "",
      third: "",
    },
    thursday: {
      first: "",
      second: "",
      third: "",
    },
    friday: {
      first: "",
      second: "",
      third: "",
    },
    sunday: {
      first: "",
      second: "",
      third: "",
    },
  });

  useEffect(() => {
    if (IdentifiedField.schedule) {
      console.log(IdentifiedField.schedule[0].first, "Inside useEffect asdmin");
      setFormData({
        monday: {
          first: IdentifiedField.schedule[0].first,
          second: IdentifiedField.schedule[0].second,
          third: IdentifiedField.schedule[0].third,
        },
        tuesday: {
          first: IdentifiedField.schedule[1].first,
          second: IdentifiedField.schedule[1].second,
          third: IdentifiedField.schedule[1].third,
        },
        wednesday: {
          first: IdentifiedField.schedule[2].first,
          second: IdentifiedField.schedule[2].second,
          third: IdentifiedField.schedule[2].third,
        },
        thursday: {
          first: IdentifiedField.schedule[3].first,
          second: IdentifiedField.schedule[3].second,
          third: IdentifiedField.schedule[3].third,
        },
        friday: {
          first: IdentifiedField.schedule[4].first,
          second: IdentifiedField.schedule[4].second,
          third: IdentifiedField.schedule[4].third,
        },
        sunday: {
          first: IdentifiedField.schedule[5].first,
          second: IdentifiedField.schedule[5].second,
          third: IdentifiedField.schedule[5].third,
        },
      });
    }
  }, [setFormData, IdentifiedField]);

  console.log(initialState.inputs.monday);
  return (
    <Container className="my-3">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1.5}>
          <Grid container item spacing={3}>
            <FormRow
              onInput={inputHandler}
              schedule={initialState.inputs.monday}
              id="monday"
              row="1"
            />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow
              onInput={inputHandler}
              schedule={initialState.inputs.tuesday}
              id="tuesday"
              row="2"
            />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow
              onInput={inputHandler}
              schedule={initialState.inputs.wednesday}
              id="wednesday"
              row="3"
            />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow
              onInput={inputHandler}
              schedule={initialState.inputs.thursday}
              id="thursday"
              row="4"
            />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow
              onInput={inputHandler}
              schedule={initialState.inputs.friday}
              id="friday"
              row="5"
            />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow
              onInput={inputHandler}
              schedule={initialState.inputs.sunday}
              id="sunday"
              row="6"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Admin;
