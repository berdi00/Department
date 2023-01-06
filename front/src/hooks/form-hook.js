import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    console.log(action.id, "input change");
    return {
      inputs: {
        ...state.inputs,
        [action.id]: action.values,
      },
    };
  }
  if (action.type === "SET_DATA") {
    return {
      inputs: action.inputs,
    };
  }
};

export const useForm = (initialInputs) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
  });

  const inputHandler = useCallback((id, inputValues, row) => {
    dispatch({
      type: "INPUT_CHANGE",
      values: inputValues,
      field: id,
    });
  }, []);

  const setFormData = useCallback((inputData) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
