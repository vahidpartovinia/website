
class Die:
	"""A simple die with N faces"""
	faces = {}
	color = (0,0,0) # I.E. {4:5, 9:1}  Le chiffre 4 se trouve cinq fois et le chiffre 9 une fois.
	name = ""

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

	def stringColor(self):
		return "rgb(" + str(self.color[0]) + "," + str(self.color[1]) + "," + str(self.color[2]) + ")"

	def floatColor(self):
		return (self.color[0]/255., self.color[1]/255., self.color[2]/255.)

	def numberDifferentSides(self):
		return len(self.faces)

	def numberSides(self):
		total = 0
		for index in self.faces:
			total = total + self.faces[index]
		return total

	def probabilitySide(self, face):
		return str(self.faces[face])+"/"+str(self.numberSides())
	
	def sides(self):
		for face in self.faces:
			for i in range(self.faces[face]):
				yield face