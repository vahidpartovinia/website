import math
from pysvg.structure import *

from util import *
from dice import *
from draw.tree import *
from draw.table import *
from draw.list import *
from games.oneDie import *
from games.twoDice import *


dice1 = Dice("Rouge", {4:5, 9:1}, (255, 0, 0))
dice2 = Dice("Jaune", {3:4, 8:2}, (253, 210, 67))
dice3 = Dice("Bleu", {7:3, 2:3}, (37, 120, 233))
dice4 = Dice("Mauve", {6:4, 1:2}, (147, 28, 203))
dice5 = Dice("Vert", {5:5, 0:1}, (0, 255, 0))
dices = [dice1, dice2, dice3, dice4, dice5]


def main():
	for dice1,dice2 in pairs(dices):
		# On genere les arbres pour un lance
		s = svg()
		tree = Tree([dice1, dice2])
		s.addElement(tree.getSVG())
		s.save('./svg/1-die/'+dice1.name+'-'+dice2.name+'.svg')

		# On genere les arbres pour deux lances
		s = svg()
		tree = Tree([dice1, dice2, dice1, dice2], height=1200, width=900, percent=True, finalOffset=280)
		s.addElement(tree.getSVG())
		s.save('./svg/2-dice/'+dice1.name+'-'+dice2.name+'.svg')		

		# On genere les tableaus pour un lance
		s = svg()
		table = Table(dice1, dice2)
		s.addElement(table.getSVG())
		s.save('./svg/table/'+dice1.name+'-'+dice2.name+'.svg')

		# On genere les listes pour un lance
		s = svg()
		liste = List(dice1, dice2)
		s.addElement(liste.getSVG())
		s.save('./svg/list/'+dice1.name+'-'+dice2.name+'.svg')

if __name__ == "__main__":
    main()
