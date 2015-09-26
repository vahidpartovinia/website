var playing = false;
var maxThrow = 5001;
var maxNeedles = 5001;
var maxLines = 201;
  
  /*
   * Parametrage des trois slider de selection
   */

  $(function() {
  	
  	
		  
		$('#graph_size').on('input', function() {
			value = $(this).val(); 
			if(value>0 && value<10 ){
		  		graph_heigth = $(this).val(); 
						log("test");
						//updateGraph();
			}
		});

       $('#s_needles').on('input', function() { 
       	value = $(this).val();
    	log(value); // get the current value of the input field.
    	if (value % 1 === 0){
    		if(value>0 && value<maxNeedles ){
    			 $('#s_needles').css("background-color","white");	 
        		clearCanvas();
 				initGraph();
        		drawLines(lines);
        		changeThrowNumber(value);
        	}
        	else{
        	// alert("Invalid value (too large or negativ)"); 
        	  $('#s_needles').css("background-color","#FF5C5C"); 
     		}
        }
        else{
        	// alert("Invalid value (not Integer)"); 
        	  $('#s_needles').css("background-color","#FF5C5C"); 
        }
		});
		
			$('#s_number').on('input', function() {
  		value = $(this).val(); 
    	log(value); // get the current value of the input field.
    	if (value % 1 === 0){
    		if(value<maxThrow ){
    			$('#s_number').css("background-color","white");
    			log("test");
    			clearCanvas();
 				initGraph();
    			changeNeedleNumber(value);
        		drawLines(lines);
        	}
        	else{
        	// alert("Invalid value (too large or negativ)");
        	 $('#s_number').css("background-color","#FF5C5C"); 
     		}
        }
        else{
        	 //alert("Invalid value (not Integer)"); 
        	 $('#s_number').css("background-color","#FF5C5C");
        }   
		});
		
		
		$('#s_line').on('input', function() { 
		value = $(this).val();
    	log(value); // get the current value of the input field.
        if (value % 1 === 0){
        	
    		if(value>0 && value<maxLines ){
    			 $('#s_line').css("background-color","white");
    			 
        		clearCanvas();
 				initGraph();
        		changeLineNumber(value);
        		drawLines(value);
        	}
        	else{
        	 //alert("Invalid value (too large)"); 
        	 $('#s_line').css("background-color","#FF5C5C");
     		}
        }
        else{
        	 //alert("Invalid value (not Integer)"); 
        	 $('#s_line').css("background-color","#FF5C5C");
        }
            
		});
    
    $( "#needleLength-slider" ).slider({
      range: "min",
      value: 50,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( "#s_length" ).val( ui.value  + " %" );
       
        	clearCanvas();
 			initGraph();
 			drawLines(lines);
 			changeNeedleSize(ui.value);
      }
    });
    $("#s_length").val( $( "#needleLength-slider" ).slider( "value" ) + " %" );
    
   
  
   $( "#drawDuration-slider" ).slider({
      range: "min",
      value: 5,
      min: 1,
      max: 10,
      slide: function( event, ui ) {
        $( "#s_duration" ).val( ui.value );
        
        	clearCanvas();
 			initGraph();
 			drawLines(lines);
 			changeDuration(ui.value);
      }
    });
    $("#s_duration").val( $( "#drawDuration-slider" ).slider( "value" ) );
  });
  

		
  
  /*
   * Fonction pour executer une boucle avec un delay entre chaque execution
   * Cette fonction est nécessaire car javascript ne permet pas de simple delay
   */
  function loopDelay(i, packSize, nombreDeLancers){
  	 setTimeout(function () {  
      drawNeedles(packSize); // On dessine les aiguilles par paquet pour eviter les lags dus au delay de quelques ms
      updateGraph();
      i++; 
      throwCounter++;
                 
      if (((i-1) < nombreDeLancers) && playing) {	 
      	log("what ?");           
         loopDelay(i, packSize, nombreDeLancers); // Appel recursif tant qu'on a pas fini           
      }                       
   }, (drawDuration*1000)/nombreDeLancers) // Duree calculee pour se dessiner toujours sur la meme duree, independamment du nombre d'aiguilles
 }



 /*
  * Fonction appelée en cliquant sur le bouton play
  * Demarre le lancer d'aiguille et la creation du graphiqe
  */
 function play() {
 	if(playing){
 		playing=false;
 	}
 	else{
	 	clearCanvas();
	 	initGraph();
	  	drawLines(lines);
	  	playing = true;
	  	
	  	/* 
	  	 * Pour dessiner plusieurs aiguilles a la fois si il y a beaucoup d'aiguilles
	  	 * Cela evite des delay dus au traitement de certaines fonctions
	  	 * La boucle permet de dessiner au minimum toutes les 50ms
	  	 */
		loopDelay(1, needlePerThrow, numberOfThrow);
	
	}
}
	