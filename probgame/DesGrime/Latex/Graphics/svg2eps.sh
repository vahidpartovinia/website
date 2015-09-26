#!/bin/bash

#Necessaire d'installer Inkscape

INPUT=$1
 
if [ -n "$2" ]
then
    OUTPUT=$2
else
    OUTPUT=${INPUT%.*}.eps
fi
 
echo Converting $INPUT to $OUTPUT...
 
inkscape --export-text-to-path --without-gui --export-area-drawing --file=$INPUT --export-eps=$OUTPUT &> /dev/null
