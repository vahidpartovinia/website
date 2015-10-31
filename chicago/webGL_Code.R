remove(list=ls())
library(ggmap)
library(ggplot2)
library(rgl)
library(knitr)
library(MASS)
library(RCurl)
crimes <- read.csv(text = getURL("https://data.cityofchicago.org/resource/6zsd-86xi.csv?$where=year=2015&$limit=50000"))#API limit is 50000 rows max
crimes<-crimes[!is.na(crimes$longitude),]#removing unkown location (no need to do it on latitude too)
crimes.coordinate<-data.frame(lon=crimes$longitude,lat=crimes$latitude)#getting crime coordinates
# !!!!!!!! 

library(rgdal)
library(raster)
library(spatstat)
knit_hooks$set(webgl = hook_webgl)
library(RCurl)
# courtesy R Lovelace 
#https://github.com/Robinlovelace/Creating-maps-in-R/blob/master/vignettes/download-raster.R
ggmap_rast <- function(map){#converts the google map classed raster object into a pure raster object
  map_bbox <- attr(map, 'bb') 
  .extent <- extent(as.numeric(map_bbox[c(2,4,1,3)]))
  my_map <- raster(.extent, nrow= nrow(map), ncol = ncol(map))
  #creating three raster layers each one containing the values of one colour
  rgb_cols <- setNames(as.data.frame(t(col2rgb(map))), c('red','green','blue'))
  red <- my_map
  values(red) <- rgb_cols[['red']]
  green <- my_map
  values(green) <- rgb_cols[['green']]
  blue <- my_map
  values(blue) <- rgb_cols[['blue']]
  stack(red,green,blue)
}
map<-get_map(location="chicago",zoom=10, maptype = "terrain")
#geting pure raster object to be able to compress map with aggregate (works only on "pure" raster object)
compressionFactor=5
map.rast <- ggmap_rast(map = map)
compressed_map<-aggregate(map.rast,fact=compressionFactor)
dc.df <- data.frame(rasterToPoints(compressed_map))
#adding third dimension
colours<-matrix(as.integer(values(compressed_map)),ncol=3)
colours<-rgb2hex(colours)
nx=attributes(compressed_map)$ncols
ny=attributes(compressed_map)$nrow
xmin = xmin(compressed_map)
xmax = xmax(compressed_map)
ymin = ymin(compressed_map)
ymax = ymax(compressed_map)
xc = seq(xmin,xmax,len=ny)
yc = seq(ymin,ymax,len=nx)
colours = matrix(colours,ny,nx)
m = matrix(0,ny,nx)
#plotting compressed map

#computting density and overlay it on top of map
nmax=100
dens=kde2d(crimes$longitude,crimes$latitude,n=nmax)
dens$z<-dens$z/100#normalizing to create clear view
dens$z<-t(dens$z)#transforming matrix so that it's well oriented
dens$z<-t(dens$z)[ncol(dens$z):1,]
color = rev(rainbow(nmax, start = 0/6, end = 3/6))
zcol  = cut(dens$z, nmax)

xc2 = seq(xmin,xmax,len=nmax)
yc2 = seq(ymin,ymax,len=nmax)

rgl.pop("lights") 
light3d(specular="black") 
rgl.viewpoint(theta = 25, phi = 25);#Theta=horizontal angle, Phi vertical angle 
rgl.surface(xc,yc,m,col=colours,back="fill")
rgl.surface(xc2,yc2,dens$z, col = color[zcol], alpha=0.2)

browseURL(paste("file://", writeWebGL(dir=file.path("E:/sauvegarde/ordi_tim/autres/Tim/UTC/A15/MTH6312/exercices/exercice3/R", "webGL"), width=700), sep=""))
