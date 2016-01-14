svg = d3.select("#col")
      .append("svg")

var borderPath = svg.append("rect")
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("height", 550)
            .attr("width", 550)
            .style("stroke", 'black')
            .style("fill", "red")
            .style("opacity", .13)
            .style("stroke-width", 5);            

svg1 = d3.select("#bw")
      .append("svg")
var borderPath = svg1.append("rect")
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("height", 550)
            .attr("width", 550)
            .style("stroke", 'black')
            .style("fill", "black")
            .style("opacity", .13)
            .style("stroke-width", 5);            

var text = svg.append("text");
var text1 = svg1.append("text");
var textLabels = text
                .attr("x", 10)
                .attr("y", 20)
                .text("Groups of similar spatio-temporal users")
                .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                .attr("fill", "blue");

var textLabels = text1
                .attr("x", 10)
                .attr("y", 20)
                .text("Spatio-temporal pattern of public transport users")
                .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                .attr("fill", "blue");

String.prototype.repeat = function(times) {
  return (new Array(times + 1)).join(this);
}
function r(data, color, svg)
{
  
  line = "M" + (data[0].x+15) + " " + (data[0].y+15);
  var mpath = svg.append("path").attr('d', line)
    .attr("fill", "none")
    //.range(['lime', 'orange', 'red'])
    .attr("stroke", color)
    //.style("opacity", 0)
  
  //var circle = svg.append("circle")
  var hum;
  if(data[0].h =='U')
  {
      hum = "images/u.png";
  }
  else if(data[0].h =='M')
  {
      hum = "images/m.png";
  }
  else if(data[0].h =='p')
  {
      hum = "images/p.png";
  }

  var circle = svg.append("svg:image")
             .attr("x", data[0].x)
             .attr("y", data[0].y)
             //.attr("r", 6);
             //.attr("class", "plane")
             //.attr("d", "m25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055,0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263,4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143,2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032,0.52703 -5.1609,1.56679 -5.85232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53,-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574,0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496,-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198,-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147,-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655,-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658,-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0z");
             .attr("width", 20)
             .attr("height", 20)
             //.attr("xlink:href","http://www.clker.com/cliparts/1/4/5/a/1331068897296558865Sitting%20Racoon.svg")
             .attr("xlink:href", hum)


  //var circle = svg.append("path")
  //                 .attr("class", "plane")
  //                 .attr("d", "m25.21488,3.93375c-0.44355,0 -0.84275,0.18332 -1.17933,0.51592c-0.33397,0.33267 -0.61055,0.80884 -0.84275,1.40377c-0.45922,1.18911 -0.74362,2.85964 -0.89755,4.86085c-0.15655,1.99729 -0.18263,4.32223 -0.11741,6.81118c-5.51835,2.26427 -16.7116,6.93857 -17.60916,7.98223c-1.19759,1.38937 -0.81143,2.98095 -0.32874,4.03902l18.39971,-3.74549c0.38616,4.88048 0.94192,9.7138 1.42461,13.50099c-1.80032,0.52703 -5.1609,1.56679 -5.85232,2.21255c-0.95496,0.88711 -0.95496,3.75718 -0.95496,3.75718l7.53,-0.61316c0.17743,1.23545 0.28701,1.95767 0.28701,1.95767l0.01304,0.06557l0.06002,0l0.13829,0l0.0574,0l0.01043,-0.06557c0,0 0.11218,-0.72222 0.28961,-1.95767l7.53164,0.61316c0,0 0,-2.87006 -0.95496,-3.75718c-0.69044,-0.64577 -4.05363,-1.68813 -5.85133,-2.21516c0.48009,-3.77545 1.03061,-8.58921 1.42198,-13.45404l18.18207,3.70115c0.48009,-1.05806 0.86881,-2.64965 -0.32617,-4.03902c-0.88969,-1.03062 -11.81147,-5.60054 -17.39409,-7.89352c0.06524,-2.52287 0.04175,-4.88024 -0.1148,-6.89989l0,-0.00476c-0.15655,-1.99844 -0.44094,-3.6683 -0.90277,-4.8561c-0.22699,-0.59493 -0.50356,-1.07111 -0.83754,-1.40377c-0.33658,-0.3326 -0.73578,-0.51592 -1.18194,-0.51592l0,0l-0.00001,0l0,0z");
  
  var a=circle;
  for (var i = 0; i <data.length; i++) 
  {
    var stop;
    if(data[i].t=='B')
    {
      stop="images/bus.png";
    }
    else
    {
      //stop = "http://www.barcelona-airport.com/images/icons/metro.png";
      stop = "images/metro.png";
    }
      svg.append("svg:image")
             .attr("x", data[i].x)
             .attr("y", data[i].y)
             .attr("width", 20)
             .attr("height", 20)             
             .attr("xlink:href",stop)             
  		a=a.transition()
  		.duration(data[i].d)
  		.attr("x", data[i].x)
  		.attr("y", data[i].y)
      .ease('linear');
      
      segment = " L" + (data[i].x+15) + " " + (data[i].y+15)
      new_line = line + segment.repeat(data.length -i)      
      mpath=mpath.transition()      
      .attr('d', new_line)      
      .duration(data[i].d)
      //.attr("stroke", "yellow")
      //.style("opacity", .5)
      .ease('linear');      
      line = line + segment;
  };
};

var u1 = [ 
      {x:10, y:10, d: 0, t:'B'}, 
      {x:10, y:10, d: 100, t:'B'}, 
      {x:10, y:450, d: 2500, t:'B'},
      {x:450, y:10,  d: 2500, t:'B'},
      {x:10, y:10,   d: 3500, t:'B'},
      {x:10, y:455,  d: 500, t:'B'}, 
      {x:455, y:455, d: 2500, t:'B'},
      {x:350, y:350, d: 50, t:'B'}, 
      {x:20, y:20, d: 4000, t:'B'} 
  ];

var u2 = [ 
      {x:10, y:150, d: 0, t:'B', h:'U'},
      {x:10, y:150, d: 2000, t:'B'},
      {x:250, y:25,  d: 3500, t:'B'},
      {x:485, y:200,   d: 5500, t:'M'},
      {x:485, y:200,   d: 10000, t:'M'},
      {x:250, y:25,  d: 1500, t:'B'}, 
      {x:10, y:150, d: 4500, t:'B'}
  ];
var u3 = [ 
      {x:10, y:100, d: 0, t:'M', h:'M'},
      {x:10, y:100, d: 8000, t:'M'},
      {x:250, y:25,  d: 3500, t:'B'},
      {x:485, y:150,   d: 5500, t:'B'},
      {x:485, y:150,   d: 6000, t:'B'},
      {x:250, y:25,  d: 2500, t:'B'}, 
      {x:10, y:100, d: 3500, t:'M'}
  ];
//r(u1, "red");
r(u2, "blue", svg);
r(u3, "blue", svg);
r(u2, "black", svg1);
r(u3, "black", svg1);
var p1 = [ 
      {x:250, y:250, d: 0, t:'B', h:'M'},
      {x:250, y:250, d: 5000, t:'B'},
      {x:250, y:100,  d: 500, t:'B'},
      {x:250, y:100,  d: 5500, t:'B'},
      {x:250, y:250,   d: 500, t:'B'},
      {x:250, y:250,   d: 5500, t:'B'},
      {x:385, y:385,   d: 600, t:'B'},
      {x:385, y:385,   d: 4600, t:'B'},
      {x:250, y:250,  d: 500, t:'B'}
  ];
  var p2 = [ 
      {x:200, y:250, d: 0, t:'M', h:'M'},
      {x:200, y:250, d: 2500, t:'M'},
      {x:150, y:100,  d: 500, t:'M'},
      {x:150, y:100,  d: 5500, t:'M'},
      {x:200, y:250,   d: 500, t:'M'},
      {x:200, y:250,   d: 5500, t:'M'},
      {x:85, y:385,   d: 600, t:'M'},
      {x:85, y:385,   d: 4600, t:'M'},
      {x:200, y:250,  d: 500, t:'M'}
  ];
  r(p1,"green", svg)
  r(p2,"green", svg)
  r(p1,"black", svg1)
  r(p2,"black", svg1)
  var s1 = [ 
      {x:20, y:380, d: 0, t:'B', h:'p'},
      {x:20, y:380, d: 10000, t:'B'},
      {x:250, y:490,  d: 500, t:'B'},
      {x:250, y:490,  d: 2500, t:'B'},
      {x:490, y:450,   d: 1500, t:'B'},
      {x:490, y:450,   d: 15500, t:'B'},
      {x:250, y:490,   d: 2600, t:'B'},
      {x:20, y:380, d: 2220, t:'B'}
  ];
  var s2 = [ 
      {x:50, y:300, d: 0, t:'M', h:'U'},
      {x:50, y:300, d: 8000, t:'M'},
      {x:290, y:400,  d: 1500, t:'M'},
      {x:270, y:420,  d: 1200, t:'B'},
      {x:270, y:420,  d: 3200, t:'B'},
      {x:490, y:450,   d: 1500, t:'B'},
      {x:490, y:450,   d: 15500, t:'B'},
      {x:250, y:490,   d: 2600, t:'B'},
      {x:250, y:490,   d: 5000, t:'B'},
      {x:50, y:300, d: 2220, t:'M'}
  ];
  r(s1, "red", svg)
  r(s2, "red", svg)
  r(s1, "black", svg1)
  r(s2, "black", svg1)