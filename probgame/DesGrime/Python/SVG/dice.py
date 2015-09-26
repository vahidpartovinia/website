from pysvg.structure import *
from pysvg.shape import *

class Dice:
	"""A simple dice with N faces"""
	faces = {}
	color = (0,0,0) # I.E. {4:5, 9:1}  Le chiffre 4 se trouve cinq fois et le chiffre 9 une fois.
	name = ""
	size = 50

	def __init__(self, name, faces, color = (0, 0, 0)):
		self.faces = faces
		self.color = color
		self.name = name

	def __str__(self):
		return self.name

	def __hash__(self):
		return hash((self.name, self.color))

	def __eq__(self, other):
		return (self.name, self.color) == (other.name, other.color)

	def width(self):
		return self.size

	def r(self):
		return self.size/2.

	def stringColor(self):
		return "rgb(" + str(self.color[0]) + "," + str(self.color[1]) + "," + str(self.color[2]) + ")"

	def draw(self):
		dice = rect(None, None, self.size, self.size)
		dice.set_style("fill:rgb"+str(self.color))
		return dice

	def numberDifferentSides(self):
		return len(self.faces)

	def numberSides(self):
		total = 0
		for index in self.faces:
			total = total + self.faces[index]
		return total

	def probabilitySide(self, face):
		return str(self.faces[face])+"/"+str(self.numberSides())

	def drawFace(self, number = 1, color = (255, 255, 255), style = None, backgroundColor = None):
		dot_size = self.size/10.0

		if backgroundColor:
			background = backgroundColor
		else:
			background = self.color

		dice = g()
		dice.set_transform("translate(20, 20)")
		dice.addElement(rect(None, None, self.size, self.size, style="fill:rgb"+str(background)+";"+str(style))) 
		
		if number is 1:
			dice.addElement(ellipse(self.size/2., self.size/2., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 2:
			dice.addElement(ellipse(self.size/4., self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 3:
			dice.addElement(ellipse(self.size/4., self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 4:
			dice.addElement(ellipse(1*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 5:
			dice.addElement(ellipse(1*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 6:
			dice.addElement(ellipse(1*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 7:
			dice.addElement(ellipse(1*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 8:
			dice.addElement(ellipse(1*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 3*self.size/8., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 5*self.size/8., dot_size, dot_size, style="fill:rgb"+str(color)))
		elif number is 9:
			dice.addElement(ellipse(1*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(1*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(2*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 1*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 2*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
			dice.addElement(ellipse(3*self.size/4., 3*self.size/4., dot_size, dot_size, style="fill:rgb"+str(color)))
		return dice	