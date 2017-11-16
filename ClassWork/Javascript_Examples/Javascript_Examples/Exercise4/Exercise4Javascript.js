function CreatePlayer()
{
  var playername = document.getElementById('playername').value;
  var playercolour = document.getElementById('playercolour').value;
  var playerhealth = document.getElementById('playerhealth').value;
  var playerWeapon = document.getElementById("playerweapon").value;

  document.getElementById("name").innerHTML = playername;
  document.getElementById("colour").style.backgroundColor = playercolour;
  document.getElementById("health").innerHTML = playerhealth
  if( playerWeapon == 1) {
      document.getElementById("weapon").innerHTML = "Crossbow of much hurting"
  }
  else if (playerWeapon == 2) {
     document.getElementById("weapon").innerHTML = "Broadsword of so so slicing"
  }
  else {
       document.getElementById("weapon").innerHTML = "Wand of amaze magics"
  }

}
