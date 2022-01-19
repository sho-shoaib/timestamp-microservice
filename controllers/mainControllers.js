const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getCurrentTime = (req, res) => {
  try {
    let currentTime = new Date();
    let resString = `${
      days[currentTime.getDay()]
    }, ${currentTime.getUTCDate()} ${
      months[currentTime.getUTCMonth()]
    } ${currentTime.getUTCFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}, timezone offset: ${currentTime.getTimezoneOffset()}`;
    res.status(200).json({
      status: "success",
      data: {
        unix: currentTime.getTime(),
        utc: resString,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

export const getTimeFromInput = (req, res) => {
  try {
    const { input } = req.params;
    let resString = "";
    if (input.includes("-")) {
      const [day, month, year] = input.split("-");
      //"July 21, 1983 01:15:00"
      const dateString = `${months[month - 1]} ${day}, ${year} 00:00:00`;
      const getDate = new Date(dateString);
      resString = `${days[getDate.getDay()]}, ${day} ${
        months[month - 1]
      } ${year} 00:00:00 GMT`;
    } else {
      const { input } = req.params;
      const date = new Date(+input);
      resString = `${date.toUTCString()}`;
    }
    if (resString.includes(undefined) || resString.includes("Invalid Date"))
      throw new Error("Invalid Date");
    res.status(200).json({
      status: "success",
      data: resString,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
