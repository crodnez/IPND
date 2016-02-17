"""
These are the quizzes which range from easy to hard. It has a list
of blank numbers that correspond to correct answers and will also
be linked to the 'begin_quiz' function.
"""
easy_quiz = """___1___ is an open ___2___ programming language made  \
made to both ___3___ good and be easy to ___4___."""
correct_easy_blanks = ["Python", "source", "look", "read"]

medium_quiz = """___1___ is named ___2___ the ___3___ show Monty ___4___'s  \
Flying ___5___."""
correct_medium_blanks = ["Python", "after", "television", "Python", "Circus"]

hard_quiz = """___1___ is an ___2___ ___3___ which doesn't need to be  \
___4___ to run. A program called an interpreter will run python ___5___  \
on any kind of ___6___."""
correct_hard_blanks = ["Python", "interpreted", "language", "compiled", "code", "computer"]

easy_blanks  = ["___1___", "___2___", "___3___", "___4___"]
medium_blanks = ["___1___", "___2___", "___3___", "___4___", "___5___"]
hard_blanks = ["___1___", "___2___", "___3___", "___4___", "___5___", "___6___"]


"""
    It tells the user to choose 
    their level of difficulty 
    and then the quiz begins.
    """
def quizchoice():
	difficulty = raw_input("Choose a quiz; Easy, Medium, or Hard: ")
	while difficulty not in ["Easy", "Medium", "Hard"]:
		difficulty = raw_input("Please input Easy/Medium/Hard. ")
	if difficulty == "Easy":
		begin_quiz(easy_quiz, easy_blanks, correct_easy_blanks)
	elif difficulty == "Medium":
		begin_quiz(medium_quiz, medium_blanks, correct_medium_blanks)
	else:
		begin_quiz(hard_quiz, hard_blanks, correct_hard_blanks)

"""
Depending on the users selects a difficulty level,
the quiz offers chances at guessing the blank words
in a quiz. If the answer is correct the user moves on
to the next blank. If incorrect is tells user to try again.
"""
def begin_quiz(quiz, blanks, answers):
	print quiz
	number_blanks = len(blanks)
	for quiz_number in range(0, number_blanks):
		user_input = raw_input("What's " + blanks[quiz_number] + "? ")
		while answer_incorrect(user_input, answers[quiz_number]):
			user_input = raw_input("Unfortunately, that's incorrect. What's " + blanks[quiz_number] + "? ")
		quiz = quiz.replace(blanks[quiz_number], answers[quiz_number])
		print quiz
		if quiz_number == number_blanks - 1: 
			print "Well done! You passed the quiz! Goodbye!"


"""
This function compares the user's answer
with the correct_answer to see if it is
incorrect or not. 
"""
def answer_incorrect(user_input, correct_answer):
	user_input = user_input.lower()
	correct_answer = correct_answer.lower()
	return user_input != correct_answer


"""
This function initiates the string that
will make up the body of the quiz.
"""
def main():
	quizchoice()
	
main()
