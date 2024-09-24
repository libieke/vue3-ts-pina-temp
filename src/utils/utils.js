export function getRandomNum(Min, Max) {
  const Range = Max - Min + 1;
  const Rand = Math.random();
  return Min + Math.floor(Rand * Range);
}

// 导出excel
export function export_excel_file(export_data, list_name) {
  let link = document.createElement("a");
  //    type就是blob的type,是MIME类型的，可以自己查看MIME类型都有哪些
  let blogw = new Blob([export_data], { type: "application/vnd.ms-excel" });
  let objectUrl = window.URL.createObjectURL(blogw); //创建一个新的url对象
  link.href = objectUrl;
  let file_name = ` ${list_name + new Date()}列表.xlsx`;
  link.download = file_name; //  下载的时候自定义的文件名
  link.click();
  window.URL.revokeObjectURL(objectUrl); //为了更好地性能和内存使用状况，应该在适当的时候释放url.
}

function DateTimeConvert(time, type) {
  var d = time ? new Date(time) : new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var hours = d.getHours();
  var min = d.getMinutes();
  var seconds = d.getSeconds();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hours < 0) hours = "0" + hours;
  if (min < 10) min = "0" + min;
  if (seconds < 10) seconds = "0" + seconds;

  var res = "";
  switch (type) {
    case "yyyy-mm-dd":
      res = year + "-" + month + "-" + day;
      break;

    case "yyyy-mm-dd hh:mm":
      res = year + "-" + month + "-" + day + " " + hours + ":" + min;
      break;

    default:
      res =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        min +
        ":" +
        seconds;
      break;
  }
  return res;
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string") {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }

    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
  return time_str;
}
