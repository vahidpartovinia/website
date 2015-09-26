class Game2:
	dice1 = 0
	dice2 = 0

	def __init__(self, dice1, dice2):
		self.dice1 = dice1
		self.dice2 = dice2

	def winningChances(self):
		win1 = 0
		win2 = 0
		for face1 in self.dice1.faces:
			for face2 in self.dice2.faces:
				prob = self.dice1.faces[face1] * self.dice2.faces[face2]
				if face1 > face2:
					win1 = win1 + prob
				else:
					win2 = win2 + prob
		
		return max(win1, win2)

	def totalFaces(self):
		return self.dice1.numberSides() + self.dice2.numberSides()

	def printWinningChances(self):
		return str(self.winningChances()) + "/" + str(self.dice1.numberSides() * self.dice2.numberSides())

	def winningDice(self):
		win1 = 0
		win2 = 0
		for face1 in self.dice1.faces:
			for face2 in self.dice2.faces:
				prob = self.dice1.faces[face1] * self.dice2.faces[face2]
				if face1 > face2:
					win1 = win1 + prob
				else:
					win2 = win2 + prob

		if win1 > win2:
			return self.dice1
		else:
			return self.dice2