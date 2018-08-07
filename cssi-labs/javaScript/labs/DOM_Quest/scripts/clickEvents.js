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

// console.log("Running Click Events Script");
// // let bloxclass = document.getElementsByClassName("box");
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
//
// let box4 = document.getElementById("box4");
// let box5 = document.getElementById("box5");
// let box6 = document.getElementById("box6");
// let box7 = document.getElementById("box7");
//
// box1.addEventListener{'click',() => selector("box2", "box3", "red"));
// box2.addEventListener{'click',() => selector("box1", "box3", "pink"));
// box3.addEventListener{'click',() => selector("box2", "box1", "orange"));
//
// box1.addEventListener{'click',() => selector("box2", "box3", "red"));
// box2.addEventListener{'click',() => selector("box1", "box3", "pink"));
// box3.addEventListener{'click',() => selector("box2", "box1", "orange"));
// box4.addEventListener{'click',() => toggle(box4);)
console.log("Running Click Events Script");
let divCol = ["box1","box2","box3"];
var value = [];


for (let i = 0; i < divCol.length; i++){
  let colorSpec;
   value[i] = document.getElementById(divCol[i]);

   value[i].addEventListener('click', function colorChange(){

    var cs=document.defaultView.getComputedStyle(value[i],null);
    var bg=cs.getPropertyValue('background-color');
      colorSpec = bg;

      for(let x = 0; x < value.length ;x++){
           value[x].style.backgroundColor = bg;  } });

}
