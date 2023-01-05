import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      ...state,
      inputs: {
        ...state.inputs,
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

  const inputHandler = useCallback((id, value, row) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
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
