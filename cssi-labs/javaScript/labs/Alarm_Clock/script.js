// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("script is running...");
function Basic_Alarm(alarmMessage)
{
  return alarmMessage;
};
console.log(Basic_Alarm("My Alarm!"));


//My Alarm
function My_Alarm(time)
{
 return  "Hey, Mohiuddin, wake up! It’s "
};
console.log(My_Alarm()+"6:30");


//Mom's Alarm
function My_Alarm(time)
{
 return  "Hey, Mom, wake up! It’s "
};
console.log(My_Alarm()+"5:10AM");


//Family Alarm

function Family_Alarm(name, time)
{
     return  "Hey " + name + ", wake up! It’s " + time;
};
name1 = prompt("Set Alarm for? (first person)");
time1 = prompt("What the time do you want to wake up?");
console.log(Family_Alarm(name1, time1));

name2 = prompt("Set Alarm for? (second person)");
time2 = prompt("What the time do you want to wake up?");
console.log(Family_Alarm(name2, time2));
// console.log(Family_Alarm("Morzina", "9:20am"));
// console.log(Family_Alarm("Farhad", "7:30am"));

//Important Alarm

function Important_Alarm(txt)
{
  txt = "wake up!, wake up!!, wake up!!!"
  return txt.toUpperCase();
};
console.log(Important_Alarm());

//Snooze Alarm

function Snooze_Alarm()
{

};
