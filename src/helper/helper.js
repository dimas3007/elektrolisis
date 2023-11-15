import { format } from "date-fns";

export const formatTimestamp = (timestamp) => {
  const date = timestamp.toDate();
  return format(date, "dd MMMM yyyy, HH:mm");
};

export const downloadVideo = (
  source,
  name = "Video Tutorial Excel Elektrolisis Interaktif.mp4"
) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = source;
  downloadLink.download = name;

  downloadLink.click();
};
