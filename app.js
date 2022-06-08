// const cron = require('node-cron');
// const shell = require('shelljs'); // this module helps in interacting with comand line
// var uuid = require('uuid');


// var task = cron.schedule('* * * * * *', () => {
//   console.log('running a task every second');
// },{
//   scheduled: false,
//   timezone: "Asia/Kolkata"
// });

// var task = cron.schedule('40 49 14 7 6 Tuesday', () => {
//   console.log('running a task every second');
// },{
//   scheduled: false,
//   timezone: "Asia/Kolkata"
// });
//
// task.start();
// task.stop();

// **********************************************************************************************************

const schedule = require('node-schedule')

// const dates = [
//   new Date('June 7, 2022 14:55:00'),
//   new Date('August 19, 2021 23:15:30'),
//   new Date('March 13, 2021 04:20'),
//   new Date('October 2, 2021 11:05')
// ];
//
// dates.sort((date1, date2) => date1 - date2);
// console.log(dates);

const someDate = new Date('June 7, 2022 15:43:00')

schedule.scheduleJob(someDate, ()=> {
  console.log('1st job ran @',new Date().toString)
});

const somDate = new Date('June 7, 2022 15:43:05')
schedule.scheduleJob(somDate, ()=> {
  console.log('2nd job ran @',new Date().toString)
});
