import {
  SET_CATEGORY,
  SET_SEARCH_TEXT,
  SET_VIDEOS,
  SEARCH_FILTER,
} from "../utils";

export function DataReducer(state, action) {
  switch (action.type) {
    case SET_VIDEOS:
      return state;
    case SET_CATEGORY:
      console.log({
        ...state,
        filteredVideos: state?.videos?.filter(
          (video) => video?.category === action.payload
        ),
      });
      return {
        ...state,
        filteredVideos: state?.videos?.filter(
          (video) => video?.category === action.payload
        ),
      };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SEARCH_FILTER:
      return {
        ...state,
        filteredVideos: state?.videos?.filter((video) => {
          if (action.payload.length === 0) return state?.filteredVideos;
          else {
            return (
              video?.category
                ?.toLowerCase()
                .trim()
                .includes(action.payload.toLowerCase().trim()) ||
              video?.chips?.filter((chip) =>
                chip
                  .toLowerCase()
                  .trim()
                  .includes(action.payload.toLowerCase().trim())
              ).length > 0 ||
              video?.title
                .toLowerCase()
                .trim()
                .includes(action.payload.toLowerCase().trim())
            );
          }
        }),
      };
    default:
      return state;
  }
}
