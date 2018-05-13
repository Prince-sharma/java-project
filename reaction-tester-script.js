var start = new Date().getTime();

	function getRandomNumber(min,max) {

		return  Math.floor(Math.random() * (max - min + 1)) + min;

	}

				function delay(time) {
			  var d1 = new Date();
			  var d2 = new Date();
			  while (d2.valueOf() < d1.valueOf() + time) {
			    d2 = new Date();
			  }
			}



		function makeCircle(sideLength,colorRect){

		var colorRect = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
		var leftcordinate=getRandomNumber(50,400);
		var topcordinate=getRandomNumber(50,400);
		var sideLength=getRandomNumber(50,100);

		var r = "rect";

		document.getElementById("main-div").innerHTML = '<div id = "' + r + '" style="background-color:'+colorRect+';position: relative;left:'+leftcordinate+'px;top:'+topcordinate+'px;width:'+sideLength+'px;height: '+sideLength+'px ; border-radius:'+50+'%;"  >  '  ;

			document.getElementById("rect").onclick =function(){
				var colorRect = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
				var rand=0;
				rand = getRandomNumber(1,2);
				var timelapse = 0;
				timelapse = getRandomNumber(1,500);


				start = new Date().getTime();

				delay(timelapse);


				if(rand%2==0){

						document.getElementById("rect").style.display="none";

						var elapsed = new Date().getTime() - start;

						document.getElementById("time-delay").innerHTML = 'THE TIME LAPSE IS ' + elapsed/1000 + 'seconds !!!' ;

						makeRectangle(sideLength,colorRect);
				} else {

						document.getElementById("rect").style.display="none";

						var elapsed = new Date().getTime() - start;

						document.getElementById("time-delay").innerHTML = 'THE TIME LAPSE IS ' + elapsed/1000 + 'seconds !!!' ;

						makeCircle(sideLength,colorRect);
				}		
		}
	}




		
	function makeRectangle(sideLength,colorRect){

		var colorRect = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
		var leftcordinate=getRandomNumber(50,400);
		var topcordinate=getRandomNumber(50,400);
		var sideLength=getRandomNumber(50,100);

		var r = "rect";

		document.getElementById("main-div").innerHTML = '<div id = "' + r + '" style="background-color:'+colorRect+';position: relative;left:'+leftcordinate+'px;top:'+topcordinate+'px;width:'+sideLength+'px;height: '+sideLength+'px ;"  >  '  ;

			document.getElementById("rect").onclick =function(){
				var colorRect = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
				var rand=0;
				rand = getRandomNumber(1,6);

				var timelapse = 0;
				timelapse = getRandomNumber(1,500);

				start = new Date().getTime();

				delay(timelapse);


				if(rand%2==0){
						document.getElementById("rect").style.display="none";

						var elapsed = new Date().getTime() - start;

						document.getElementById("time-delay").innerHTML = 'THE TIME LAPSE IS ' + elapsed/1000 + 'seconds !!!' ;


						makeRectangle(sideLength,colorRect);
				} else {
						document.getElementById("rect").style.display="none";

						var elapsed = new Date().getTime() - start;

						document.getElementById("time-delay").innerHTML = 'THE TIME LAPSE IS ' + elapsed/1000 + 'seconds !!!' ;


						makeCircle(sideLength,colorRect);
					}
						
		}
	}

		document.getElementById("button").onclick = function() {

			var colorRect = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
			var sideLength=getRandomNumber(50,100);
			makeRectangle(sideLength,colorRect);
					
		}

	
