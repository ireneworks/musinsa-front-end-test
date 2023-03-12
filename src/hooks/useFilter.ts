import React, { useReducer } from "react";

type State = Filter<FilterCategory>[];

interface OnChangeFilter {
  type: "ON_CHANGE_FILTER";
  value: string;
}

interface OnDeleteFilter {
  type: "ON_DELETE_FILTER";
  value: string;
}

interface OnRestFilter {
  type: "ON_RESET_FILTER";
}

type Actions = OnChangeFilter | OnDeleteFilter | OnRestFilter;

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ON_CHANGE_FILTER":
      if (state.includes(action.value)) {
        return state.filter((filter) => filter !== action.value);
      }
      return [...state, action.value];
    case "ON_DELETE_FILTER":
      return state.filter((filter) => filter !== action.value);
    case "ON_RESET_FILTER":
      return [];
    default:
      return state;
  }
}

export default function useFilter() {
  const [state, dispatch] = useReducer(reducer, []);

  const onChange = (event: React.MouseEvent<HTMLButtonElement>) =>
    dispatch({ type: "ON_CHANGE_FILTER", value: event.currentTarget.value });

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) =>
    dispatch({ type: "ON_DELETE_FILTER", value: event.currentTarget.value });

  const onReset = () => dispatch({ type: "ON_RESET_FILTER" });

  return { state, onChange, onDelete, onReset } as const;
}
