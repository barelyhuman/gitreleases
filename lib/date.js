import tinydate from "tinydate";

export function formatDate(date = new Date()) {
  const dateStamp = tinydate("{DD} {MMM}, {YYYY}", {
    MMM: (d) => d.toLocaleString("default", { month: "short" }),
  });
  return dateStamp(new Date(date));
}

export function formatTime(date = new Date()) {
  const stamp = tinydate("{HH}:{mm}:{ss}");
  return stamp(new Date(date));
}
