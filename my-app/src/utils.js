export function getActiveClassName(isActive, isPending) {
  return isPending
    ? "pending p-4 md:py-2 md:px-1 w-full md:w-auto"
    : isActive
    ? "font-bold text-slate-100 p-4 md:py-2 md:px-1 bg-blue-600/100 w-full md:w-auto md:bg-inherit md:text-blue-700"
    : "text-gray-700 p-4 md:py-2 md:px-1 w-full md:w-auto md:bg-inherit";
}

export function getTrimmed(sentence, n) {
  let sentenceArr = sentence.split(" ");
  return sentenceArr.slice(0, n + 1).join(" ");
}

export const SET_VIDEOS = "SET_VIDEOS";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const SEARCH_FILTER = "SEARCH_FILTER";
export const ADD_TO_WATCHLATER = "ADD_TO_WATCHLATER";
export const REMOVE_FROM_WATCHLATER = "REMOVE_FROM_WATCHLATER";
