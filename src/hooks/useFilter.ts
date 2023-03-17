import { useReducer } from "react";
import { FilterOption } from "../@types/model/filter";

type State = FilterOption[];

interface OnChangeFilter {
  type: "ON_CHANGE_FILTER";
  payload: FilterOption;
}

interface OnChangeSearch {
  type: "ON_CHANGE_SEARCH";
  payload: FilterOption;
}

interface OnRestFilter {
  type: "ON_RESET_FILTER";
}

type Actions = OnChangeFilter | OnRestFilter | OnChangeSearch;

function onChangeSearchReducer(state: State, payload: FilterOption) {
  const isExist = state.some((filter) => filter.type === payload.type);

  return isExist
    ? payload.label.length !== 0
      ? state.map((filter) => {
          return filter.type === payload.type ? payload : filter;
        })
      : state.filter((filter) => filter.type !== payload.type)
    : state.concat(payload);
}

function onChangeFilterReducer(state: State, payload: FilterOption) {
  const isExist = state.some((filter) => filter.type === payload.type);

  return isExist
    ? state.filter((filter) => filter.type !== payload.type)
    : state.concat(payload);
}

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
