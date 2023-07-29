export function getActiveClassName(isActive, isPending) {
  return isPending
    ? "pending p-4 md:py-2 md:px-1 w-full md:w-auto"
    : isActive
    ? "font-bold text-slate-100 p-4 md:py-2 md:px-1 bg-blue-600/100 w-full md:w-auto md:bg-inherit md:text-blue-700"
    : "text-gray-700 p-4 md:py-2 md:px-1 w-full md:w-auto md:bg-inherit";
}
