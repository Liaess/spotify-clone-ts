export function arrayDurationToMilliseconds(durationArray: number[]) {
  let duration: number = 0;
  durationArray.forEach((element: number) => {
    duration += element;
  });
  let seconds: string | number = Math.floor((duration / 1000) % 60),
    minutes: string | number = Math.floor((duration / (1000 * 60)) % 60),
    hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (minutes === "00" && hours === "00") {
    return `,  ${seconds} sec`;
  } else if (hours === "00" && seconds === "00") {
    return `,  ${minutes} min`;
  } else if (minutes === "00" && seconds === "00") {
    return `,  ${hours} hr`;
  } else if (hours === "00") {
    return `,  ${minutes} min ${seconds} sec`;
  } else {
    return `,  ${hours} hr ${minutes} min`;
  }
}

export function singleDurationToMilliseconds(duration: any) {
  let seconds: string | number = Math.floor((duration / 1000) % 60),
    minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);

  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
