# numbers = list(range(1, 101))

for n in list(range(1, 101)):
	fizz = n%3 == 0
	buzz = n%5 == 0
	word_fizz = "fizz"
	word_buzz = "buzz"

	if fizz and buzz:
		print word_fizz + word_buzz
	elif fizz:
		print word_fizz
	elif buzz:
		print word_buzz
	else:
		print n
