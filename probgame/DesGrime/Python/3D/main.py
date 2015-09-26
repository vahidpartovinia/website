import math
from util import *
from die import *
from visual import *
import wx
			# NAME 	   	# FACES     	# COLOR
die1 = Die(	"Red", 		{4:5, 9:1}, 	(255, 0, 0))
die2 = Die(	"Yellow", 	{3:4, 8:2}, 	(253, 210, 67))
die3 = Die(	"Blue", 	{7:3, 2:3}, 	(37, 120, 233))
die4 = Die(	"Purple", 	{6:4, 1:2}, 	(147, 28, 203))
die5 = Die(	"Green", 	{5:5, 0:1}, 	(0, 255, 0))

dice = [die1, die2, die3, die4, die5]


def winner(die1, face1, die2, face2, die3, face3):
	if(face1 > face2):
		winnerDie = die1
		winnerFace = face1
	else:
		winnerDie = die2
		winnerFace = face2
	
	if(face3 > winnerFace):
		winnerDie = die3
		winnerFace = face3

	return winnerDie

class DiceCube:
	die1 = 0
	die2 = 0
	die3 = 0

	# Size of one die
	size = 1

	# Space between dice
	gap = 0

	opacity = 0.5

	boxes = []

	def __init__(self, dice):
		self.die1 = dice[0]
		self.die2 = dice[1]
		self.die3 = dice[2]

		# Draw the boxes and save them init the array
		i = 0
		for face1 in die1.sides():
			self.boxes.append([])
			j = 0
			for face2 in die2.sides():
				self.boxes[i].append([])
				k = 0
				for face3 in die3.sides(): 
					winnerDie = self.winner(face1, face2, face3)
					self.boxes[i][j].append(box(pos=self.pos3D(i, j, k), length=self.size, height=self.size, width=self.size, color=winnerDie.floatColor(), opacity=self.opacity))
					k += 1
				j += 1
			i += 1

	def pos(self, i):
		return i*(self.size+self.gap) - self.width()/2.

	def pos3D(self, i, j, k):
		return (self.pos(i),self.pos(j),self.pos(k))

	def width(self):
		return 5*(self.size+self.gap)

	def winner(self, face1, face2, face3):
		if(face1 > face2):
			winnerDie = self.die1
			winnerFace = face1
		else:
			winnerDie = self.die2
			winnerFace = face2
		
		if(face3 > winnerFace):
			winnerDie = self.die3
			winnerFace = face3

		return winnerDie

	def update(self):
		i = 0
		for face1 in die1.sides():
			j = 0
			for face2 in die2.sides():
				k = 0
				for face3 in die3.sides(): 
					winnerDie = self.winner(face1, face2, face3)
					self.boxes[i][j][k].pos = self.pos3D(i, j, k)
					self.boxes[i][j][k].color = winnerDie.floatColor()
					self.boxes[i][j][k].opacity = self.opacity
					k += 1
				j += 1
			i += 1

	def setOpacity(self, opacity):
		self.opacity = opacity
		self.update()

	def setDistance(self, distance):
		self.gap = distance
		self.update()

	def setDice(self, dice):
		self.die1 = dice[0]
		self.die2 = dice[1]
		self.die3 = dice[2]
		self.update()


def main():
	w = window(menus=True, title="VPython", x=0, y=0, width=850, height=600)
	d = display(window=w, x=0, y=0, width=600, height=600, background=(1,1,1), range=8)
	
	
	# Lights Adjustments
	d.ambient = 0.8
	light = 0.2
	d.lights = [vector(light,light,light), vector(-light/2.,-light/2.,-light/2.)]
	
	triple = {}

	# Draw the dice
	default = 0
	for die1,die2,die3 in triples(dice):
		if default == 0: default = (die1, die2, die3)
		triple[die1.name + " vs " + die2.name + " vs " + die3.name] = (die1, die2, die3)

	def updateOpacity(evt):
		diceCube.setOpacity(opacitySlider.GetValue()/100.)

	def updateDistance(evt):
		diceCube.setDistance(distanceSlider.GetValue()/100.)

	def updateDice(evt):
		diceCube.setDice(triple[diceChoice.GetStringSelection()])

	def updateSize(evt):
		size = p.GetSizeTuple()
		controlPanel.SetPosition((size[0]-240, 10))

	# Some Slider UI Control	
	p = w.panel
	p.Bind(wx.EVT_SIZE, updateSize)


	controlPanel = wx.Panel(p, pos=(610,10), size=(230, 580))
	opacitySlider = wx.Slider(controlPanel, pos=(0,310), size=(220,20), minValue=0, maxValue=100, value = 50)
	distanceSlider = wx.Slider(controlPanel, pos=(0,350), size=(220,20), minValue=0, maxValue=100, value = 0)
	wx.StaticText(controlPanel, pos=(0,290), size=(220,20), label='Opacity: ', style=wx.ALIGN_LEFT | wx.ST_NO_AUTORESIZE)
	wx.StaticText(controlPanel, pos=(0,330), size=(220,20), label='Distance: ', style=wx.ALIGN_LEFT | wx.ST_NO_AUTORESIZE)
	opacitySlider.Bind(wx.EVT_SCROLL, updateOpacity)
	distanceSlider.Bind(wx.EVT_SCROLL, updateDistance)

	# Radio Buttons
	wx.StaticText(controlPanel, pos=(0,10), size=(220,50), label='Select a set of dice', style=wx.ALIGN_LEFT | wx.ST_NO_AUTORESIZE)
	diceChoice = wx.RadioBox(controlPanel, pos=(0, 40), size=(220, 240), choices = triple.keys(), style=wx.RA_SPECIFY_ROWS)
	diceChoice.Bind(wx.EVT_RADIOBOX, updateDice)

	diceCube = DiceCube(triple[diceChoice.GetStringSelection()])	

if __name__ == "__main__":
    main()
