import tinydate from "tinydate";

export function formatDate(date = new Date()) {
  const dateStamp = tinydate("{DD} {MMM}, {YYYY}", {
    MMM: (d) => d.toLocaleString("default", { month: "short" }),
  });
  return dateStamp(new Date(date));
}

export function formatTime(date = new Date()) {
  const stamp = tinydate("{hh}:{mm}:{ss} {aa}", {
    hh: (d) => {
      let hours = d.getHours();
      hours = hours % 12;
      hours = hours ? hours : 12;
      return hours < 10 ? "0" + hours : hours;
    },
    aa: (d) => {
      let hours = d.getHours();
      return hours > 12 ? "pm" : "am";
    },
  });
  return stamp(new Date(date));
}
