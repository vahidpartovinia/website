from itertools import *

def pairs(lst):
	pairs = []

	for dice1,dice2 in product(lst, lst):
		uid = str(dice1)+'-'+str(dice2)
		if uid in pairs or dice1 == dice2:
			continue

		pairs.append(str(dice1)+'-'+str(dice2))
		pairs.append(str(dice2)+'-'+str(dice1))
		yield dice1, dice2