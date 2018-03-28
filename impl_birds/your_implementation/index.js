var intCount = 0

function GetBirdImage(elemId) {
  var divImg = document.getElementById(elemId)
  return divImg
}

function BirdFlying() {
  var divImg = GetBirdImage("imgFly")
  if (divImg)
    if (intCount == 3) {                         
			intCount = 0
		}            
		var pos = -(intCount*88)
		var posStr = pos.toString()+ "px 0px"

		divImg.style.backgroundPosition = posStr   		
		intCount++
}

function ImgMoveFunc() {
  var divImgMove = GetBirdImage("imgMove")
  var divImgFly = GetBirdImage("imgFly")

  if (divImgMove && divImgFly) {
	var iMouseClientX = window.event.clientX
	var iMouseClientY = window.event.clientY 
	var imgLeft = divImgMove.style.left || "0px"
	
	if(imgLeft.replace(/px/, '') > iMouseClientX) {
		divImgFly.style.transform = "rotateY(180deg)";
	}
	else {
		divImgFly.style.transform = "rotateY(0deg)";
	}
		
	divImgMove.style.left = iMouseClientX - divImgMove.offsetWidth + "px"
	divImgMove.style.top = iMouseClientY - divImgMove.offsetHeight + "px"
  }
}

document.onmousedown = function() {
	if(window.event.button === 0) {
		ImgMoveFunc();
	}
}