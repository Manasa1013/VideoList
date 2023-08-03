import { useData } from "../../Contexts/DataContext";
import { SEARCH_FILTER, SET_SEARCH_TEXT } from "../../utils";

export function SearchBar() {
  const {
    state: { searchText },
    dispatch,
  } = useData();
  return (
    <div className="flex flex-row w-11/12 mx-2 my-1 rounded-md bg-blue-100/50 hover:bg-white border-blue-500">
      <input
        type="search"
        placeholder="Search for titles,tags and categories"
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value.length === 0)
            dispatch({ type: SEARCH_FILTER, payload: "" });
          dispatch({ type: SET_SEARCH_TEXT, payload: e.target.value });
        }}
        onBlur={(e) => {
          dispatch({
            type: SEARCH_FILTER,
            payload: e.target.value,
          });
        }}
        value={searchText}
        className="px-2 py-3 text-blue-700 w-9/12 rounded-l-md outline-blue-400"
      />
      <button
        className="px-2 py-3  text-blue-700 text-sm md:text-md rounded-r-md w-3/12 text-center outline-blue-400"
        onClick={() => {
          dispatch({ type: SEARCH_FILTER, payload: searchText });
        }}
      >
        Search
      </button>
    </div>
  );
}
