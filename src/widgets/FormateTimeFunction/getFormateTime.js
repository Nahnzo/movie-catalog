export default function getFormateTime(minutes) {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;

  function getMinutesFormat(minutes) {
    let lastDigit = minutes % 10;
    let lastTwoDigits = minutes % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "минут";
    } else if (lastDigit === 1) {
      return "минута";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "минуты";
    } else {
      return "минут";
    }
  }

  function getHoursFormat(hours) {
    let lastDigit = hours % 10;
    let lastTwoDigits = hours % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return "часов";
    } else if (lastDigit === 1) {
      return "час";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return "часа";
    } else {
      return "часов";
    }
  }

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += hours + " " + getHoursFormat(hours);
    if (remainingMinutes > 0) {
      formattedTime += " " + remainingMinutes + " " + getMinutesFormat(remainingMinutes);
    }
  } else {
    formattedTime += remainingMinutes + " " + getMinutesFormat(remainingMinutes);
  }

  return formattedTime;
}
