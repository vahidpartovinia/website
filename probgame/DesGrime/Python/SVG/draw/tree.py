from pysvg.structure import *
from pysvg.shape import *
from pysvg.text import *

class Tree:
	dice = []
	height = 500.
	width = 600.
	offset = [10., 10.]
	space = 10.
	finalOffset = 220
	percent = False
	s = 0

	wins = {}

	def __init__(self, dice, height = None, width = None, percent = None, finalOffset = None):
		self.dice = dice

		if height:
			self.height = height

		if width:
			self.width = width

		if percent:
			self.percent = percent

		if finalOffset:
			self.finalOffset = finalOffset

		s = svg()

	def depth(self, children = None):
		if children:
			return float(len(self.dice) - len(children))
		return float(len(self.dice))

	def x(self, counter, die, childrenDice):
		depth = self.depth(childrenDice)
		return (depth*self.width)/self.depth() + self.offset[0] - die.r() - self.space

	def y(self, counter, die, childrenDice, progressiveChildCount = 1):
		return (counter*self.height)/(progressiveChildCount + 1) + self.offset[1]

	def startCounter(self, counter, childrenDice):
		if counter == 0: return 1
		return (childrenDice[len(childrenDice)-1].numberDifferentSides() * (counter-1))+ 1

	def getSVG(self):
		self.s = svg()
		self.wins = {}
		
		children = list(self.dice)
		x = self.offset[0]
		y = self.height/2. + self.offset[1]
		self.drawBranch(1, children, x, y)

		self.drawFinalProb()

		return self.s

	def addWin(self, dice, prob):
		if dice in self.wins:
			self.wins[dice] += prob
		else:
			self.wins[dice] = prob

	def textCorrection(self, i):
		if i % 2 == 1:
			return 5
		else:
			return 15

	def maxDenum(self):
		denum = 1
		for die in self.dice:
			denum *= die.numberSides()
		return denum

	def drawFinalProb(self):
		numDice = len(self.wins)
		x = self.x(0, self.dice[0],[]) + self.finalOffset
		i = 1
		for die in sorted(self.wins, key=self.wins.get, reverse=True):
			y = (i*self.height)/(numDice + 1) + self.offset[1]
			if self.percent:
				winningProbability = (self.wins[die]/float(self.maxDenum()))*100
				winningProbability = "{0:.2f} %".format(round(winningProbability,2))
			else:
				winningProbability = str(int(self.wins[die]))+"/"+str(self.maxDenum())

			if i == 1: bonus = ";text-decoration:underline"
			else: bonus = ""

			self.s.addElement(text(str(winningProbability), x+40, y-5, style="fill:"+die.stringColor()+";font-size:40;font-family:arial"+bonus))

			i += 1

	def drawBranch(self, counter, childrenDice, lastX, lastY, winner = None, numerateur=1, denumerateur=1, progressiveChildCount=1):
		childrenCounter = self.startCounter(counter, childrenDice)
		die = childrenDice.pop()

		progressiveChildCount *= len(die.faces)
		denumerateur *= die.numberSides()

		for face in die.faces:
			

			childrenNumerateur = numerateur*die.faces[face]
			x1, y1, x2, y2 = lastX, lastY, self.x(childrenCounter, die, childrenDice), self.y(childrenCounter, die, childrenDice, progressiveChildCount)
			self.s.addElement(line(x1, y1, x2, y2, style="stroke:rgb(0,0,0);stroke-width:2"))

			sProbability = text(die.probabilitySide(face), (x1+x2)/2.-15, (y1+y2)/2. + 10, style="font-size:40;font-family:arial;fill:"+die.stringColor()+";stroke:rgb(0,0,0);stroke-width:0.5")
			self.s.addElement(sProbability)

			sFace = die.drawFace(face)
			sFace.set_transform("translate("+str(x2 + self.space)+","+str(y2-die.r())+")")
			self.s.addElement(sFace)

			x, y = x2 + die.size + 2*self.space, y2

			if winner:
				winnerDie = dict(winner)
			else:
				winnerDie = {}

			if not winnerDie:
				winnerDie = {}
			if not winnerDie or die not in winnerDie:
				winnerDie[die] = face
			else:
				winnerDie[die] += face
		
			if len(childrenDice) > 0:
				self.drawBranch(childrenCounter, list(childrenDice), x, y, winnerDie, childrenNumerateur, denumerateur, progressiveChildCount)
			else:
				y += die.r()-7
				
				maxFace = 0
				winningDie = None
				for key in winnerDie:
					if winnerDie[key] > maxFace:
						maxFace = winnerDie[key]
						winningDie = key

				prob = childrenNumerateur
				self.addWin(winningDie, prob)

				if self.percent:
					winningProbability = (prob/float(denumerateur))*100
					winningProbability = "{0:.2f} %".format(round(winningProbability,2))
				else:
					winningProbability = str(childrenNumerateur)+"/"+str(denumerateur)
				
				self.s.addElement(text("=", x, y, style="font-size:50;font-family:arial;"))
				self.s.addElement(text(str(winningProbability), x+40, y-5, style="fill:"+winningDie.stringColor()+";font-size:40;font-family:arial;"))

			childrenCounter += 1


