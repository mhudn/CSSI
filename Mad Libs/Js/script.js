function init()
{
	/*Add Event Listener to button element that calls generateMsg() function*/
let button = document.getElementById('bID');
button.addEventListener('click', generateMsg);

}

function generateMsg()
{
	//Create a constant array of the ids of the input textfields.*/
 const idNames = ["uID1","uID2","uID3","uID4","uID5"];
 let values = [];
 for (let i = 0; i <idNames.length; i++)
 {
   values[i] = document.getElementById(idNames[i]).value;
   if (values[i] === "")
   {
     values[i] = "Word Not Provided";
   }
 }

	/*Using a for loop, populate the values array with the values of the
	 textfields*/


	let msg = `If anybody is wondering, please know that I am <strong>${values[2]}</strong> at <strong>${values[4]}</strong> without you.
	You might want to consider <strong>${values[3]}</strong> <strong>${values[0]}</strong>... then again, you always preferred
	<strong>${values[1]}</strong>.`;

	//Display the msg string in the paragraph element with id 'msg'
  document.getElementById("msg").innerHTML = msg;
  document.body.style.backgroundColor = "lightblue";

}
