#chosenWord = "programming"

def initBoard(word):
    temp = []
    for i in word:
        temp.append('_')
    return temp
#print initBoard(chosenWord)


def printBoard(board,guesslist):
    print " ".join(board)
    print "Guesses: " + " ".join(guesslist)

def addGuess(board,word,guess):
    for i in range(len(word)):
        if guess == word[i]:
            board[i] = guess


def game():
    chosenWord = "programming".lower()
    guesses = []
    board = initBoard(chosenWord)

    while '_' in board:
        printBoard(board,guesses)
        guess = raw_input('Enter a letter: ').lower()

        if len(guess) == 1:
            if guess in chosenWord:
                addGuess(board,chosenWord,guess)

            guesses.append(guess)
    else:
        print "".join(board)
        print "Congrats!! You guessed the word corectly."
game()
