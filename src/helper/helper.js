import { format } from "date-fns";

export const formatTimestamp = (timestamp) => {
  const date = timestamp.toDate();
  return format(date, "dd MMMM yyyy, HH:mm");
};
