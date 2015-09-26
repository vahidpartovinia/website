#!/bin/bash

#Necessaire d'installer Inkscape

INPUT=$1
 
if [ -n "$2" ]
then
    OUTPUT=$2
else
    OUTPUT=${INPUT%.*}.png
fi
 
echo Converting $INPUT to $OUTPUT...
 
inkscape --without-gui --export-id=svg4 --file=$INPUT --export-png=$OUTPUT &> /dev/null
