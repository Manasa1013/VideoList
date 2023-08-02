import { useParams } from "react-router";
import { LeftSideMenu, Navbar, VideoList } from "../Components";
import { useData } from "../Contexts/DataContext";
import { SEARCH_FILTER, SET_CATEGORY, SET_SEARCH_TEXT } from "../utils";
import { useEffect } from "react";
export function Explore() {
  const { category } = useParams();
  const {
    dispatch,
    state: { searchText },
  } = useData();
  useEffect(() => {
    dispatch({ type: SET_CATEGORY, payload: category });
  }, [category]);
  return (
    <>
      <div className="two-column-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-blue-700">Explore</h1>
          <div className="flex flex-row  rounded-md bg-blue-100/50 hover:bg-white border-blue-500">
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
              className="px-2 py-3  md:w-full md:max-w-3/4 text-blue-700 "
            />
            <button
              className="px-2 py-3  text-blue-700 "
              onClick={() => {
                dispatch({ type: SEARCH_FILTER, payload: searchText });
              }}
            >
              Search
            </button>
          </div>
          <div className="md:ml-8">
            <VideoList category={category} />
          </div>
        </main>
      </div>
    </>
  );
}
