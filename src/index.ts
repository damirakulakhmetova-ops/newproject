function getLocalTime(date: Date = new Date()): string {
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log(`Local time: ${getLocalTime()} (${timeZone})`);
