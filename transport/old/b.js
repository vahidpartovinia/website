svg = d3.select("#main")

String.prototype.repeat = function(times) {
  return (new Array(times + 1)).join(this);
}

function r(segments, color) {  
  line = "M" + segments[0].x + " " + segments[0].y
  new_line = line + (" L" + segments[0].x + " " + 
    segments[0].y).repeat(segments.length);
   
  var mpath = svg.append('path').attr('d', new_line)
    .attr('fill', 'none')
    .attr('stroke', color)
  for (var i = 0; i < segments.length; i++) {
    new_segment = " L" + segments[i].x + " " + segments[i].y
    //new_line = line + new_segment.repeat(segments.length -i)
    new_line = line + new_segment
    mpath.transition()
    .attr('d', new_line)
    .duration(segments[i].t)
    .delay( i*segments[i].d);
    line = line + new_segment
  }
}

u1 = [{  x: 10,  y: 10,  d: 0, t:0}, 
{  x: 20,  y: 200,  d: 0, t:500}, 
{  x: 200,  y: 200,  d: 500, t:5000}, 
{  x: 250,  y: 20,  d: 500, t:5000}];
r(u1, 'black');

s1 = [{  x: 35,  y: 48,  d: 1000, t:200}, 
{  x: 22,  y: 48,  d: 1000, t:200}, 
{  x: 22,  y: 35,  d: 1000, t:200}, 
{  x: 34,  y: 35,  d: 1000, t:200}, 
{  x: 64,  y: 60,  d: 1000, t:200}];
s2 = [{  x: 35,  y: 148,  d: 3000, t:1000}, 
{  x: 22,  y: 148,  d: 3000, t:1000}, 
{  x: 22,  y: 135,  d: 3000, t:1000}, 
{  x: 34,  y: 135,  d: 3000, t:1000}, 
{  x: 64,  y: 160,  d: 3000, t:1000}];
s3 = [{  x: 235,  y: 48,  d: 500, t:50}, 
{  x: 222,  y: 48,  d: 500, t:50}, 
{  x: 222,  y: 35,  d: 500, t:50}, 
{  x: 234,  y: 35,  d: 500, t:50}, 
{  x: 264,  y: 60,  d: 500, t:50}];

//r(s1, 'blue');
//r(s2, 'red');
//r(s3, 'green');
//r(u1, 'black');


