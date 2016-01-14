  // Set the size of our graph
var w = 500;
var h = 500;
var padding = 10;

// SVG container
  var svg = d3.select('#line')
    .append('svg')
    .attr( { width: w, height: h, id: 'visualization' } )
function R(data, color){
  // Line generator function
  var line = d3.svg.line()
    .interpolate('cardinal')
    .x(function(d) {return x(d.x);})
    .y(function(d) {return y(d.y);})

  
  var max_x = d3.max(data, function(d) {return d.x;});
  var max_y = d3.max(data, function(d) {return d.y;});

  var x = d3.scale.linear().domain([0, max_x]).range([padding, (w - padding)]);
  var y = d3.scale.linear().domain([0, max_y]).range([padding, (h - padding)]);
  // Add circles so we can see that the speed changes at the right points. Can remove later
  svg.selectAll('.point')
      .data(data)
    .enter().append('circle')
      .attr( {r: 5, cx: function(d) { return x(d.x); }, cy: function(d) { return y(d.y); } });

  // Find the length of the line at each given point.
  // Hack: draw hidden line with portion of the points -- surely there is a more elegant way but I'm not sure how to get the 'cardinal' interpolation
  var lengthAt = [];
  for (var i = 1; i < data.length - 1; i++) {
    var path = svg.append('path').attr( { d: line( data.slice(i) ), class: 'temppath', visibility: 'hidden' } )
    //lengthAt.push(path.node().getTotalLength());
  };  

  // Add the path
  var path = svg.append('path')
    .attr( {d: line(data), stroke: color, 'stroke-width': 3, fill: 'none'} );

  var totalLength = path.node().getTotalLength();

  path.attr( {'stroke-dasharray': totalLength + " " + totalLength, 'stroke-dashoffset': totalLength } );

  // transition will be chained from either the original path or the last transition
  var transitionFrom = path;
  // start at 1 since no transition needed to first point
  for (var i = 1; i < data.length; i++) {
    transitionFrom = transitionFrom.transition()
      //.duration(data[i].speed)
      .duration(1000)
      .delay(2000)
      .ease("linear")
      .attr("stroke-dashoffset", lengthAt[i-1] || 0);
  };
}
var lineData1 = [ 
      {x:50, y:150, speed: 0}, // there is no transition to the first element
      {x:150, y:200, speed: 550},
      {x:150, y:150, speed: 2500},
      {x:200, y:175, speed: 3500},
      {x:250, y:155, speed: 500}, 
      {x:275, y:250, speed: 2500},
      {x:350, y:350, speed: 50}, 
      {x:250, y:450, speed: 4000} 
  ];
var lineData2 = [ 
      {x:100, y:150, speed: 0}, // there is no transition to the first element
      {x:150, y:200, speed: 55},
      {x:200, y:150, speed: 200},
      {x:250, y:175, speed: 300},
      {x:250, y:250, speed: 5000}, 
      {x:275, y:300, speed: 250},
      {x:350, y:380, speed: 50}, 
      {x:250, y:400, speed: 400} 
  ];
R(lineData2, "red");
R(lineData1, "steelblue");
