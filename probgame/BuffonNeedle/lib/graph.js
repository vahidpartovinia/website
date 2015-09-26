var datas = [[0, 0]]; // Tableau de donnees
var bdat = [[[0, 0]],[[0, 0]]]; // Tableau de donnees confidence down
var up = [[0, 0]];
var down = [[0,0]];

var graph_heigth = 3;

$.jqplot.config.enablePlugins = true;

/*
 * Met à jour les valeurs du graphique
 * Ajoute des données sans recharger l'ensemble du graphique
 */
function updateGraph() {

	// Calcule du rapport needleCounter / onLineCounter
	rapportNeedle = onLineCounter/needleCounter;

	// Calcule de l'approximation de Pi
	value = 2*needleLength*(needleCounter/onLineCounter);
	
	// Calcule des intervales de confiance sup et inf
	intervaleSup = 2*needleLength/(rapportNeedle-(1.96*Math.sqrt(rapportNeedle*(1-rapportNeedle)/needleCounter))) 
	intervaleInf = 2*needleLength/(rapportNeedle+(1.96*Math.sqrt(rapportNeedle*(1-rapportNeedle)/needleCounter)))	

	new_conf_datas_up = new Array(throwCounter+1, intervaleSup);
	new_conf_datas_down = new Array(throwCounter+1, intervaleInf);
	bdat[0].push(new_conf_datas_down);
	bdat[1].push(new_conf_datas_up);
	
	up.push(new_conf_datas_up);
	down.push(new_conf_datas_down);
	
	// Mise à jour de la valeur de l'approximation de Pi sous les sliders 
	var container = document.getElementById("approximation");
	container.innerHTML = "Pi Approximation : " + value;
	
	
	// Ajoute les donnees au tableau de donnees	
	new_datas = new Array(throwCounter+1, value);
    datas.push(new_datas);
    
    // Redessine la courbe
//	plot.replot({data:datas});
	plot.series[0].data =  datas;
	plot.series[1].data =  bdat[0];
	plot.series[2].data =  bdat[1];
	//plot.series[1].data =  bdat;
	plot.axes.yaxis.min = 3.14159-graph_heigth/2;
	plot.axes.yaxis.max = 3.14159+graph_heigth/2;
    plot.replot();
}



/*
 * Initialise le graphique
 * Prépare l'affichage et les noms de axes
 * Re initialise certaines variable à 0 afin de pouvoir redessiner
 */
function initGraph(){
	datas.length = 0;
	datas = [[[0, 0]]];
	bdat.length = 0;
	bdat = [[[0, 0]],[[0, 0]]];
	playing = false;
	needleCounter = 0;
    onLineCounter = 0;
    throwCounter = 0;
    
    
	plot = $.jqplot('graph', [datas, bdat[0], bdat[1]], $.extend(true, {}, {
		
			series:[{
			  	color:'#0066FF',
			  	show: true,

			  	 markerOptions: { 
			  	 		size: 1, 
			  	 		style:"x" 
			  	 },
				},
				{
					label: 'Intervale de confiance suppérieur',
			linePattern: 'dashed',
			lineWidth: 2, 
			  rendererOptions: {
					bandData: [bdat[0], bdat[1]],
	                 bands: {
	                    show: true,
	                    showLine: true,
                    	fillColor: 'rgba(198, 88, 88, 0.6)'

	               	 },	                 		
         	    },
         	    
			  },
			  	{
			  		label: 'Intervale de confiance inférieur',
				linePattern: 'dashed',
				lineWidth: 2, 
			  rendererOptions: {
					bandData: [bdat[0], bdat[1]],
	                 bands: {
	                    show: true,
	                    showLine: true,
                    	fillColor: 'rgba(198, 88, 88, 0.6)'

	               	 },	                 		
         	    },
         	    
			  	}
			  	
			  	],
			  	
			  title:'Pi Approximation : ',
			  axes:{
			  	
			  	xaxis:{
			  		min:1, 
			  		max:numberOfThrow,
			  		label: "Number of Throw",
					labelRenderer: $.jqplot.CanvasAxisLabelRenderer
			  		}, 
			  	yaxis:{
			  		min:3.14159-graph_heigth/2, 
			  		max:3.14159+graph_heigth/2
			  		}
			  
			  	},
			  	
			  	grid: {
				        drawGridLines: false,        // wether to draw lines across the grid or not.
				      	
				    },
			  	
			  	seriesDefaults: {
  				  	shadow: false,
    				showMarker: false
 				},
			  

		        canvasOverlay: {
		            show: true,
		            objects: [
		            // Ligne horizontale pour representer pi
		                {horizontalLine: {
		                    name: 'pi',
		                    y: 3.14159,
		                    lineWidth: 2,
		                    color: '#003399',
		                    shadow: false,

		                }}
		                
		            ]
		        },
		        cursor:{
            		zoom:true,
            		looseZoom: true
        		}
			  	
			}));
}
