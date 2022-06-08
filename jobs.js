const someDate = new Date('June 7, 2022 15:33:59')
schedule.scheduleJob(someDate, ()=> {
  console.log('1st job ran @',new Date().toString)
});

const somDate = new Date('June 7, 2022 15:06:45')
schedule.scheduleJob(somDate, ()=> {
  console.log('2nd job ran @',new Date().toString)
});
