// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.

function createDateObject() {
  return new Date(2012, 2, 20, 3, 12, 0)
  // return new Date("2012-02-20T03:12")
}
// alert(createDateObject())

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// For instance:

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

function getWeekDay(date) {
  // let weekLabels = { 0: "SU", 1: 'MO', 2: 'TU', 3: 'WE', 4: 'TH', 5: 'FR', 6: 'SA'}
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()]
}
// alert(getWeekDay(new Date(2012, 0, 3)))

// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2

function getLocalDay(date) {
  let day = date.getDay();
  return day === 0 ? 7 : day
}
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2


// Which day of month was many days ago?
// importance: 4
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

function getDateAgo(date, days) {
  // return new Date(date.getTime() - days * 24* 3600 * 1000).getDate()
  let dateCopy = new Date(date)
  dateCopy.setDate(dateCopy.getDate() - days)
  return dateCopy.getDate()
}

// let date = new Date(2015, 0, 2);
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// alert( getDateAgo(date, 366) ); // 1, (1 Jan 2014)
// alert( getDateAgo(date, 367) ); // 31, (31 Dec 2013)
// alert( getDateAgo(date, 368) ); // 30, (30 Des 2013)
// P.S. The function should not modify the given date.

// Last day of month?
// importance: 5
// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
  // let date = new Date(year, month + 1)
  // date.setDate(date.getDate()-1)
  let date = new Date(year, month + 1, 0) // if we pass 0 at day parameter, then it mean "day before 1st date of the month"
  date.setDate(date.getDate()-1)
  return date.getDate()
}
// alert(getLastDayOfMonth(2012, 1))
// alert( getLastDayOfMonth(2012, 0) ); // 31
// alert( getLastDayOfMonth(2012, 1) ); // 29
// alert( getLastDayOfMonth(2013, 1) ); // 28

// How many seconds have passed today?
// importance: 5
// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

// getSecondsToday() == 36000 // (3600 * 10)
// The function should work in any day. That is, it should not have a hard-coded value of “today”.

function getSecondsToday() {
  let timePassTillNow = Date.now()
  let timestampToday = new Date()
  timestampToday.setHours(0, 0, 0, 0)
  return Math.round((timePassTillNow - (+timestampToday)) / 1000)
}

function getSecondsToday() {
  let now = new Date()

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((now - today) / 1000) 
}

// alert(getSecondsToday())

// How many seconds till tomorrow?
// importance: 5
// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow2() {
  let date = new Date()
  date.setDate(date.getDate() + 1)
  date.setHours(0, 0, 0, 0);
  let diff = date.getTime() - Date.now()
  return Math.round(diff / 1000)
}

function getSecondsToTomorrow() {
  let now = new Date()
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  let diff = tomorrow - now
  return Math.round(diff / 1000)
}

// alert(getSecondsToTomorrow())
// alert(getSecondsToTomorrow2())

// Format the relative date
// importance: 4
// Write a function formatDate(date) that should format date as follows:

// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
// For instance:

// alert( formatDate(new Date(new Date - 1)) ); // "right now"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // yesterday's date like 31.12.16 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
  let diff = new Date() - date

  if(diff < 1000 ) {
    return "right now"
  }
  let secondsPassed = Math.round(diff/1000)

  if(secondsPassed < 60) {
    return `${secondsPassed} sec. ago`
  }

  let minutesPassed = secondsPassed / 60

  if(minutesPassed < 60) {
    return `${minutesPassed} min. ago`
  }

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = String(date.getFullYear()).slice(2)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let d = [
    `0${day}`,
    `0${month}`,
    `0${year}`,
    `0${hours}`,
    `0${minutes}`
  ].map(timeComponent => timeComponent.slice(-2))

  console.log(d)
  return `${d.slice(0, 3).join(".")} ${d.slice(3).join(":")}`

  return `${day >= 10 ? day : '0' + day}.${month >= 10 ? month : '0' + month}.${year} ${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes }`
}
