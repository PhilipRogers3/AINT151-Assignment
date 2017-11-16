var isLightOn = true;

function ToggleLight()
{
	if(isLightOn == true) {
		isLightOn = false;
	} else {
		isLightOn = true;
	}

	if (isLightOn == false) {
		document.getElementById("lightBulb").src= "img/bulb-on.png"
	} else  {
		document.getElementById("lightBulb").src="img/bulb-off.png"
	}
}

function AddNumbers(numA, numB)
{
	console.log(numA + numB);
  document.getElementById("numbers").innerHTML = numA + numB;
}
