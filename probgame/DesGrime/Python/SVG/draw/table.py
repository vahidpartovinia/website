from pysvg.structure import *
from pysvg.shape import *
from pysvg.text import *

class Table:
	dice1 = []
	dice2 = []
	
	offset = [10., 10.]
	border = 2
	borderMaster = 4
	

	wins = {}

	def __init__(self, dice1, dice2, height = None, width = None):
		self.dice1 = dice1
		self.dice2 = dice2

		if height:
			self.height = height

		if width:
			self.width = width

		s = svg()

	def dx(self):
		return self.dice1.width()

	def dy(self):
		return self.dice2.width()

	def x(self, counter1, counter2):
		#dx = dice1.width() (width-(border*dice1.numberSides()))/(dice1.numberSides() + 1)
		return (counter1+1)*self.dx() + (counter1+1)*self.border + self.borderMaster-self.border

	def y(self, counter1, counter2):
		#dy = dice1.width()
		return (counter2+1)*self.dy() + (counter2+1)*self.border + self.borderMaster-self.border

	def width(self):
		return self.x(self.dice1.numberSides()-1, 0) + self.dx()

	def height(self):
		return self.y(0, self.dice2.numberSides()-1) + self.dy()

	def getSVG(self):
		self.s = svg()
		self.wins = {}

		self.drawHeader()		
		self.draw()

		return self.s

	def drawHeader(self):
		counter1 = 0
		for face1 in self.dice1.faces:
			for i in range(self.dice1.faces[face1]):
				
				face = self.dice1.drawFace(face1, color = self.dice1.color, backgroundColor = (255, 255, 255))
				face.set_transform("translate("+str(self.x(counter1, 0))+","+str(0)+")")
				self.s.addElement(face)

				x = self.x(counter1, 0)-(self.borderMaster/2.) 
				if counter1 == 0:
					self.s.addElement(line(x, 0, x, self.height(), style="stroke:rgb(64,64,64);stroke-width:"+str(self.borderMaster)))
				else:
					self.s.addElement(line(x + self.borderMaster/4., 0, x + self.borderMaster/4., self.dice1.width(), style="stroke:rgb(128,128,128);stroke-width:"+str(self.border)))

				counter1 += 1

		counter2 = 0
		for face2 in self.dice2.faces: 
			for j in range(self.dice2.faces[face2]):

				face = self.dice2.drawFace(face2, color = self.dice2.color, backgroundColor = (255, 255, 255))
				face.set_transform("translate("+str(0)+","+str(self.y(0, counter2))+")")
				self.s.addElement(face)

				y = self.y(0, counter2)-(self.borderMaster/2.)
				if counter2 == 0:
					self.s.addElement(line(0, y, self.width(), y, style="stroke:rgb(64,64,64);stroke-width:"+str(self.borderMaster)))
				else:
					self.s.addElement(line(0, y + self.borderMaster/4., self.dice2.width(), y + self.borderMaster/4., style="stroke:rgb(128,128,128);stroke-width:"+str(self.border)))

				counter2 += 1

	def draw(self):
		container = g();

		counter1 = 0
		for face1 in self.dice1.faces:
			for i in range(self.dice1.faces[face1]):
				counter2 = 0
				for face2 in self.dice2.faces: 
					for j in range(self.dice2.faces[face2]):
						if(face1 > face2):
							face = self.dice1.drawFace(face1)
						else:
							face = self.dice2.drawFace(face2)

						face.set_transform("translate("+str(self.x(counter1, counter2))+","+str(self.y(counter1, counter2))+")")
						self.s.addElement(face)

						counter2 += 1
				counter1 += 1

























