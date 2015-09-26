from itertools import *

# Trivial technique to find a 3-tuples of dice. For 5 dice it should not be a performance issue.
def triples(lst):
	triples = []

	for dice1,dice2,dice3 in product(lst, lst, lst):
		uid = str(dice1)+'-'+str(dice2)+'-'+str(dice3)
		if uid in triples or dice1 == dice2 or dice1 == dice3 or dice2 == dice3:
			continue

		# Yeah, not so great but this will work for now.
		triples.append(str(dice1)+'-'+str(dice2)+'-'+str(dice3))
		triples.append(str(dice1)+'-'+str(dice3)+'-'+str(dice2))
		triples.append(str(dice2)+'-'+str(dice1)+'-'+str(dice3))
		triples.append(str(dice2)+'-'+str(dice3)+'-'+str(dice1))
		triples.append(str(dice3)+'-'+str(dice2)+'-'+str(dice1))
		triples.append(str(dice3)+'-'+str(dice1)+'-'+str(dice2))
		yield dice1, dice2, dice3


