import { useReducer } from "react";
import { FilterOption } from "../@types/model/filter";

type State = FilterOption[];

interface OnChangeFilter {
  type: "ON_CHANGE_FILTER";
  payload: FilterOption;
}

interface OnRestFilter {
  type: "ON_RESET_FILTER";
}

type Actions = OnChangeFilter | OnRestFilter;

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ON_CHANGE_FILTER":
      return state.some((filter) => filter.value === action.payload.value)
        ? state.filter((filter) => filter.value !== action.payload.value)
        : state.concat(action.payload);
    case "ON_RESET_FILTER":
      return [];
    default:
      return state;
  }
}

export default function useFilter() {
  const [state, dispatch] = useReducer(reducer, []);

  const onChange = (payload: FilterOption) =>
    dispatch({ type: "ON_CHANGE_FILTER", payload });

  const onReset = () => dispatch({ type: "ON_RESET_FILTER" });

  return { state, onChange, onReset };
}
