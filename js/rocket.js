var timer = null;
var countDownNumber = 10;

var changeState = function (state) {

	"use strict";

	document.body.className = "body-state" + state;
	clearInterval(timer)
	countDownNumber = 10;
	document.getElementbyId("countDown").innerHTML = countDownNumber;

	if (state == 2) {
		timer = setInterval(function () {
			countDownNumber = countDownNumber - 1;
			document.getElementbyId('countdown').innerHTML = countDownNumber;

			if (countDownNumber <= 0) {
				changeState(3);
			}
		}, 500);
		}
		else if (state = 3) {
			var success = setTimeout (function (){
				var randomNumber = Math.round.(Math.round() * 10);
				console.log ("randomNumber: " + randomNumber)

				if (randomNumber > 5) {
					changeState(4);
				} else {
					changeState(5);
					}
			}, 2000)
			}
		}
