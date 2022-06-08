const schedule = require('node-schedule')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
var task = new Array();

const months  = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}


// const someDate = new Date('June 8, 2022 11:28:10')
// task.push(schedule.scheduleJob(someDate, ()=> {
//   console.log('1st job ran @',new Date().toString)
// }))
//
// const somDate = new Date('June 8, 2022 11:28:00')
// task.push(schedule.scheduleJob(somDate, ()=> {
//   console.log('2nd job ran @',new Date().toString)
// }))

// app.get("/",function(req,res){
//   res.sendFile(__dirname+"/index.html");
//
// })

//routes

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
  // console.log(req.body);
  
  const {schedulDate, schedulTime} = req.body;
  const reqObj = new Date(schedulDate);
  const reqDate = reqObj.getDate()
  const reqMonthNum = reqObj.getMonth();
  const reqMonth = months[reqMonthNum+1];
  const reqYear = reqObj.getFullYear();
  const reqTime = schedulTime

  const dateStr = `${reqMonth} ${reqDate}, ${reqYear} ${reqTime}:00`;
  // console.log(dateStr);

  task.push(schedule.scheduleJob(dateStr, ()=> {
  console.log('@',new Date().toString)
  
}))

res.redirect("/");


})


app.listen(8080,function(){
  console.log("Server started on port 8080");
});
