$(document).ready(function(){

		/*setPixel sets a pixel color in a texture, taking
		the x and y coordinates, as well as the Red Green Blue
		and Alpha parameters*/
		function setPixel(texture_, x_, y_, r_, g_, b_, a_){
			var i = (x_ + (y_ * texture_.width)) * 4;
			texture_.data[i]     = r_;
			texture_.data[i + 1] = g_;
			texture_.data[i + 2] = b_;
			texture_.data[i + 3] = a_;
		}

		 //Dessine les axes x et y pour les 2 graphiques
		function drawAxis(canvas_) {
			var context = canvas_.getContext("2d");
			var hauteur = canvas_.height;
			var largeur = canvas_.width;

			context.beginPath();

			//dessiner axe des x
			context.moveTo(0, hauteur - 5);
			context.lineTo(largeur / 2 - 10, hauteur - 5);
			context.moveTo(largeur / 2 + 10, hauteur - 5);
			context.lineTo(largeur, hauteur - 5);
			//dessiner fleche axe des x
			context.moveTo(largeur - 5, hauteur - 10);
			context.lineTo(largeur, hauteur - 5);
			context.lineTo(largeur - 5, hauteur);
			//dessiner axe des y
			context.moveTo(5, 0);
			context.lineTo(5, hauteur / 2 - 10);
			context.moveTo(5, hauteur / 2 + 10);
			context.lineTo(5, hauteur);
			//dessiner fleche axe des y
			context.moveTo(10, 5);
			context.lineTo(5, 0);
			context.lineTo(0, 5);

			context.strokeStyle = "#000";
			for (var i = 0 ; i < 100 ; i++)
				context.stroke();

			//identifer axes
			context.font = "bold 15px sans-serif";
			context.fillText("x", largeur / 2 - 5, hauteur - 2);
			context.fillText("y", 5, hauteur / 2 + 5);
		}

		function drawAxisCentre(canvas_) {
		    var context = canvas_.getContext("2d");
		    var hauteur = canvas_.height;
		    var largeur = canvas_.width;

		    context.beginPath();

		    //dessiner axe des x
		    context.moveTo(15, hauteur - 5);
		    context.lineTo(largeur, hauteur - 5);
		    context.moveTo(largeur / 2 + 10, hauteur - 5);
		    context.lineTo(largeur, hauteur - 5);
		    //dessiner fleche axe des x
		    context.moveTo(largeur - 5, hauteur - 10);
		    context.lineTo(largeur, hauteur - 5);
		    context.lineTo(largeur - 5, hauteur);
		    //dessiner axe des y
		    context.moveTo(largeur / 2, 0);
		    context.lineTo(largeur / 2, hauteur / 2 - 10);
		    context.moveTo(largeur / 2, hauteur / 2 + 10);
		    context.lineTo(largeur / 2, hauteur);
		    //dessiner fleche axe des y
		    context.moveTo(largeur / 2 + 5, 5);
		    context.lineTo(largeur / 2, 0);
		    context.lineTo(largeur / 2 - 5, 5);

		    context.strokeStyle = "#000";
		    for (var i = 0 ; i < 100 ; i++)
		        context.stroke();

		    //identifer axes
		    context.font = "bold 15px sans-serif";
		    context.fillText("x", 5, hauteur - 2);
		    context.fillText("y", largeur / 2, hauteur / 2 + 5);
		}

		function testAverageSuccess(success_, repetitions_){
			var result = 0;
			for(var i = 0; i < repetitions_; ++i){
				if(Math.random() < (success_ / 100)){
					++result;
				}
			}
			//Prevent from going out of bound in the case of a 100% test result
			if (result == repetitions_)
				result--;
			return result;
		}

		function setVerticalLine(texture_, x_, ratio_){
			var vertical = Math.floor(ratio_ * texture_.height)
			var pi = 3.1416;
			for(var i = 0; i < vertical; ++i){
				var r = Math.sin(((pi * i) / (2 * vertical)) + (pi / 2));
				r *= r * 255;
				var g = Math.sin((pi * i) / vertical);
				g *= g * 255;
				var b = Math.sin((pi * i) / (2 * vertical));
				b *= b * 255;
				setPixel(texture_, x_, texture_.height - i, r, g, b, 255);
			}
		}

		function graphShader(texture_, start_, section_, ratio_){
			for(var i = start_; i < (start_ + section_); ++i)
				setVerticalLine(texture_, i, ratio_);
		}

		function graphShaderCentre(texture_, start_, section_, ratio_, success_){
			for(var i = start_; i < (start_ + section_); ++i)
				setVerticalLine(texture_,
					i + (texture_.width / 2) - (success_ * texture_.width / 100),
					ratio_);
		}

		function drawLines(echantillonParTests_, nbreTests_, maxY_, canvas_) {
			var context = canvas_.getContext("2d");

			//number of x and y lines
			var xLines = Math.ceil(canvas_.width / echantillonParTests_);
			var yLines
			if (maxY_ <= 150)
				yLines = Math.ceil(canvas_.height / maxY_);
			else
				yLines = 3;

			//draw x lines
			for (var x = 0 ; x < canvas_.width ; x += xLines) {
				context.moveTo(x, 0);
				context.lineTo(x, canvas_.height);
			}
			//draw y lines
			for (var y = 0 ; y < canvas_.height ; y += yLines) {
				context.moveTo(0, y);
				context.lineTo(canvas_.width, y);
			}
			context.strokeStyle = "#eee";
			context.lineWidth = 0.5;
			context.stroke();

			context.fillText("100%", canvas_.width - 40, canvas_.height - 10);
			context.fillText(maxY_, 10, 20);
		}

		//Function that calculates the normal law y coordinate for a given x coordinate
		function loiNormale(x_, success_, width_, height_) {
			var pie = 3.14;
			x_ = (x_ - width_ * (success_ / 100)) / 25;
			return (1 / (Math.sqrt(2 * (pie)))) * (Math.exp((-1 / 2) * (x_ * x_))) * ((height_ - 5) / 0.4);
		}

		/*Function that draws the normal law in a canvas*/
		function drawLoiNormal(canvas_, success_) {
			//Cases where normal law doesn't apply
			if (success_ == 0 || success_ == 100)
				return;

			var context = canvas_.getContext("2d");
			context.beginPath();
			context.moveTo(0, canvas_.height + 5);
			for (var x = 0; x < canvas_.width; x++) {
				context.lineTo(x, (canvas_.height - 5 - (loiNormale(x, success_, canvas_.width, canvas_.height))));
			}
			context.strokeStyle = "#000";
			context.stroke();
			/*if ($("#engButton").is(':visible'))
				context.fillText("     LOI NORMALE", 25, 20);
			else
				context.fillText("     NORMAL LAW", 25, 20);*/
		}

		//Function that calculates an array's average
		function arrayMoyenne(array_) {
			var returnValue = 0;
			var tests = 0;
			for (var i = 0 ; i < array_.length ; ++i) {
				returnValue = returnValue + (array_[i]) * i;
				tests = tests + array_[i];
			}
			return (returnValue / array_.length / tests);
		}

		/*Function who updates the average label*/
		function showMoyenne(array_) {
			$("#moyenneFR").text("Moyenne : " + arrayMoyenne(array_));
			$("#moyenneENG").text("Average: " + arrayMoyenne(array_));
		}

		/*Fonction that updates the success label*/
		function showSuccessValue() {
			$("#success_tag").text($("#success").val());
		}
		
		/*Code that executes immediately after the page is loaded*/
		$(window).load(function () {
			showSuccessValue();
			drawAxis($("#canvas").get(0));
			drawAxisCentre($("#canvas2").get(0));
		});

		/*Code that executes when the slider is being move*/
		$("#success").mousemove(function () {
			showSuccessValue();
		});


		/*Code that executes when the graph button is clicked*/
		$("#graphButtonFR, #graphButtonENG").click(function () {

			var repetitions = $("#samples").val();
			var tests = $("#tests").val();
			var success = $("#success").val();
			var canvas = $("#canvas").get(0);
			var canvas2 = $("#canvas2").get(0);

			if (repetitions == 0 || tests == 0)
				return;

			//initialize array
			var array = [];
			array.length = repetitions;
			for (var i = 0; i < array.length; ++i)
				array[i] = 0;

			//fill array with test result
			for (var i = 0; i < tests; ++i)
				array[testAverageSuccess(success, repetitions)]++;

			var context = canvas.getContext("2d");
			var context2 = canvas2.getContext("2d");
			var texture = context.createImageData(canvas.width, canvas.height - 5);
			var texture2 = context.createImageData(canvas2.width, canvas2.height - 5);
			var section = Math.floor(texture.width / array.length);

			//get max value contained in array
			var maxY = Math.max.apply(Math, array);
			for (var i = 0; i < array.length; ++i)
				graphShader(texture, i * section, section, array[i] / maxY);

			for (var i = 0; i < array.length; ++i)
				graphShaderCentre(texture2, i * section, section, array[i] / maxY, success);

			//Clear canvas and apply textures
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.putImageData(texture, 0, 0);
			context2.clearRect(0, 0, canvas2.width, canvas2.height);
			context2.putImageData(texture2, 0, 0);

			drawLines(repetitions, tests, maxY, canvas);
			drawLines(repetitions, tests, maxY, canvas2);
			drawAxis(canvas);
			drawAxisCentre(canvas2);
			drawLoiNormal(canvas, success);
			drawLoiNormal(canvas2, 50);
			showMoyenne(array);
		});
		

		//Code that executes when the focus is out of the input
		$("#samples").focusout( function() {
			if ($("#samples").val() > 200)
				$("#samples").val(200);
			else if ($("#samples").val() < 10)
				$("#samples").val(10);
		});

		//Code that executes when a key is pressed in a input of type number
		$(':input[type="number"]').keypress(function (event) {
			return event.charCode >= 48 && event.charCode <= 57;
		});
		$(".eng").hide();
		$("#engButton, #frButton").click(function(){
			$(".eng").toggle();
			$(".fr").toggle();
		});

});