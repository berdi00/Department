import { useCallback, useReducer } from "react";

export function saveToLocalStorage(key, data) {
  if (data) {
    console.log(data);
    return localStorage.setItem(key, JSON.stringify(data));
  }
}

export function getFromLocalStorage(key) {
  let data = localStorage.getItem(key);
  if (data !== undefined || null) {
    return JSON.parse(data);
  }
}

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      ...state,
      inputs: {
        ...state.inputs,
        [action.id]: {
          first: action.value.first,
          second: action.value.second,
          third: action.value.third,
        },
      },
    };
  }

  if (action.type === "SET_FORM") {
    return {
      inputs: action.value,
    };
  }
};

export function useCustomState(dataState) {
  const [initialState, dispatch] = useReducer(inputReducer, {
    inputs: dataState,
  });
  //   const [initialState, setState] = useState(state);
  console.log(initialState);

  const inputHandler = useCallback((id, first, second, third) => {
    dispatch({
      type: "INPUT",
      id: id,
      value: {
        first,
        second,
        third,
      },
    });
  }, []);

  const setFormData = useCallback((state) => {
    dispatch({
      type: "SET_FORM",
      value: state,
    });
  }, []);

  console.log(initialState);
  return [initialState, inputHandler, setFormData];
}
