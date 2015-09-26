from pysvg.structure import *
from pysvg.shape import *
from pysvg.text import *

class List:
	dice1 = []
	dice2 = []
	
	distance = 30
	gap = 4
	innerDistance = 0

	offset = [10, 10]

	wins = {}

	def __init__(self, dice1, dice2):
		self.dice1 = dice1
		self.dice2 = dice2

		s = svg()

	def dx(self):
		return self.dice1.width()+self.innerDistance+self.dice2.width()

	def dy(self):
		return max(self.dice1.width(), self.dice2.width())

	def x(self, counter1, counter2):
		return (counter1)*self.dx() + (counter1+1)*self.distance + self.offset[0]

	def y(self, counter1, counter2):
		return (counter2)*self.dy() + (counter2+1)*self.distance + self.offset[1]

	def width(self):
		return self.x(self.dice1.numberSides()-1, 0) + self.dx()

	def height(self):
		return self.y(0, self.dice2.numberSides()-1) + self.dy()

	def getSVG(self):
		self.s = svg()
		self.wins = {}
	
		self.draw()

		return self.s

	def draw(self):
		container = g();

		counter1 = 0
		for face1 in self.dice1.faces:
			for i in range(self.dice1.faces[face1]):
				counter2 = 0
				for face2 in self.dice2.faces: 
					for j in range(self.dice2.faces[face2]):
						if face1 > face2:
							dice = self.dice1
						else:
							dice = self.dice2

						x = self.x(counter1, counter2)
						y = self.y(counter1, counter2)

						diff = self.distance/2.0 - self.gap

						background = polygon(str(x-diff)+" "+str(y-diff)+" "+
											 str(x+self.dx()+diff)+" "+str(y-diff)+" "+
											 str(x+self.dx()+diff)+" "+str(y+self.dy()+diff)+" "+
											 str(x-diff)+" "+str(y+self.dy()+diff), fill=dice.stringColor(), opacity=0.6)
						self.s.addElement(background)

						face = self.dice1.drawFace(face1, style="stroke:rgb(0,0,0);stroke-linecap:butt;stroke-width:1")
						face.set_transform("translate("+str(x)+","+str(y)+")")
						self.s.addElement(face)

						face = self.dice2.drawFace(face2, style="stroke:rgb(0,0,0);stroke-linecap:butt;stroke-width:1")
						face.set_transform("translate("+str(x+self.innerDistance+self.dice1.width())+","+str(self.y(counter1, counter2))+")")
						self.s.addElement(face)

						counter2 += 1
				counter1 += 1

























