import {
  SET_CATEGORY,
  SET_SEARCH_TEXT,
  SET_VIDEOS,
  SEARCH_FILTER,
  ADD_TO_WATCHLATER,
  REMOVE_FROM_WATCHLATER,
} from "../utils";

export function DataReducer(state, action) {
  switch (action.type) {
    case SET_VIDEOS:
      return state;
    case SET_CATEGORY:
      return {
        ...state,
        filteredVideos: state?.videos?.filter(
          (video) => video?.category === action.payload
        ),
      };
    case ADD_TO_WATCHLATER: {
      return {
        ...state,
        watchLater: [action.payload, ...state.watchLater],
      };
    }
    case REMOVE_FROM_WATCHLATER: {
      const filteredWatchLaterList = state?.watchLater?.filter(
        (videoItem) => videoItem._id !== action.payload._id
      );
      return {
        ...state,
        watchLater: filteredWatchLaterList,
      };
    }
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
