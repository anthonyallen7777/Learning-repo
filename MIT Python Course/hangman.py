# Problem Set 2, hangman.py
# Name: 
# Collaborators:
# Time spent:

# Hangman Game
# -----------------------------------
# Helper code
# You don't need to understand this helper code,
# but you will have to know how to use the functions
# (so be sure to read the docstrings!)
import random
import string

WORDLIST_FILENAME = "words.txt"


def load_words():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print("Loading word list from file...")
    # inFile: file
    inFile = open(WORDLIST_FILENAME, 'r')
    # line: string
    line = inFile.readline()
    # wordlist: list of strings
    wordlist = line.split()
    print("  ", len(wordlist), "words loaded.")
    return wordlist



def choose_word(wordlist):
    """
    wordlist (list): list of words (strings)
    
    Returns a word from wordlist at random
    """
    return random.choice(wordlist)

# end of helper code

# -----------------------------------

# Load the list of words into the variable wordlist
# so that it can be accessed from anywhere in the program
wordlist = load_words()


def is_word_guessed(secret_word, letters_guessed):
    x=secret_word
    y=letters_guessed
    d=len(x)
    for letter in y:
        for char in x:
            if char == letter:
                d-=1
    return True if d == 0 else False


def get_guessed_word(secret_word, letters_guessed):
    x=secret_word
    y=letters_guessed
    rString=""
    for i in range(0,len(x)):
        rString = rString[:i] + '_' + rString[i:]
    for letter in y:
        for i in range(0,len(x)):
            if x[i] == letter:
                rString = rString[:i] + x[i] + rString[i+1:]
    return rString.replace('_','_ ')

#print(get_guessed_word("elephant", ['l','a','e']))

def get_available_letters(letters_guessed):
    x=string.ascii_lowercase
    for i in range(0,len(letters_guessed)):
        if letters_guessed[i] in x:
            x = x[:i]+x[i+1:]
    return x
    
    

def hangman(secret_word):
    print("Welcome to the game Hangman!")
    print("I'm thinking of a word that is",
           len(secret_word),"letters long")
    
    guesses = 6
    letters_guessed = []
    available_letters = get_available_letters(letters_guessed)
    warnings = 3
    consonants = "bcdfghjklmnpqrstvwxyz"
    won = False
    while (guesses>0):
        if (is_word_guessed(secret_word, letters_guessed)):
            won = True
            break
        else:
            print(letters_guessed)
            print("You have",warnings,"warnings left.")
            print("You have",guesses,"guesses left.")
            print("Available letters:",available_letters)
            current_letter_guess = input("Please guess a letter: ")
            guessed_word = get_guessed_word(secret_word,letters_guessed)
            if (str.isalpha(current_letter_guess)):
                if (current_letter_guess in letters_guessed):
                    if (warnings > 0):
                        print("Oops you already guessed that letter",
                              "You have",warnings,"warnings:",
                              guessed_word)
                    else:
                        print("Oops you already guessed that letter",
                              "You have",guesses,"guesses:",
                              guessed_word)
                else:
                    letters_guessed.append(str.lower(current_letter_guess))
                    guessed_word = get_guessed_word(secret_word,letters_guessed)
                    if (current_letter_guess in secret_word):
                        print("Good guess:",
                              guessed_word)
                    else:
                        if current_letter_guess in consonants:
                            print("Oops! That letter is not in my word:",
                                  guessed_word)
                            guesses-=1
                        else:
                            print("Oops! That letter is not in my word:",
                                  guessed_word)
                            guesses-=2
            else:
                if (warnings > 0):
                    warnings-=1
                    print("Oops that was an invalid character",
                          "You have",warnings,"warnings:",
                          guessed_word)
                else:
                    guesses-=1
                    print("Oops that was an invalid character",
                          "You have",guesses,"guesses:",
                          guessed_word)
        print("--------------")
    if (won):
        print("Congratulations, you won!")
        unique_letters = ""
        for char in secret_word:
            if char in consonants:
                if char in unique_letters:
                    continue
                else:
                    unique_letters+=char
        print("Your total score for this game is :",
              guesses*len(unique_letters))
    else:
        print(letters_guessed)
        print("Sorry, you ran out of guesses. The word was",secret_word)

#hangman("elephant")

# When you've completed your hangman function, scroll down to the bottom
# of the file and uncomment the first two lines to test
#(hint: you might want to pick your own
# secret_word while you're doing your own testing)


# -----------------------------------



def match_with_gaps(my_word, other_word):
    '''
    my_word: string with _ characters, current guess of secret word
    other_word: string, regular English word
    returns: boolean, True if all the actual letters of my_word match the 
        corresponding letters of other_word, or the letter is the special symbol
        _ , and my_word and other_word are of the same length;
        False otherwise: 
    '''
    r = ""
    let_match = ""
    for char in my_word:
        if (str.isalpha(char) or char == "_"):
            r+=char
    finB = False
    if(len(r)==len(other_word)):
        for i in range(0,len(other_word)):
            if (r[i] == other_word[i] or r[i]=="_"):
                if (other_word[i] in let_match and r[i] != "_"):
                    return False
                if r[i]=="_":
                    let_match+=other_word[i]
                finB = True
            else:
                return False
    else:
        return False
    return finB

#match_with_gaps("a_ ple", "apple")
#print(match_with_gaps("a_ _ le", "apple"))
#tact tart taut teat tent test text

def show_possible_matches(my_word):
    '''
    my_word: string with _ characters, current guess of secret word
    returns: nothing, but should print out every word in wordlist that matches my_word
             Keep in mind that in hangman when a letter is guessed, all the positions
             at which that letter occurs in the secret word are revealed.
             Therefore, the hidden letter(_ ) cannot be one of the letters in the word
             that has already been revealed.

    '''
    matches = ""
    for word in wordlist:
        if match_with_gaps(my_word,word):
            matches+=word+" "
    
    if matches!= "":
        return matches
    else:
        return "No matches found"

#show_possible_matches("t_ _ t")

def hangman_with_hints(secret_word):
    print("Welcome to the game Hangman!")
    print("I'm thinking of a word that is",
           len(secret_word),"letters long")
    
    guesses = 6
    letters_guessed = []
    available_letters = get_available_letters(letters_guessed)
    warnings = 3
    consonants = "bcdfghjklmnpqrstvwxyz"
    won = False
    while (guesses>0):
        if (is_word_guessed(secret_word, letters_guessed)):
            won = True
            break
        else:
            print(letters_guessed)
            print("You have",warnings,"warnings left.")
            print("You have",guesses,"guesses left.")
            print("Available letters:",available_letters)
            current_letter_guess = input("Please guess a letter: ")
            guessed_word = get_guessed_word(secret_word,letters_guessed)
            possible_matches = show_possible_matches(guessed_word)
            if (current_letter_guess == "*" and
                len(possible_matches) > 100):
                print("Please guess a few more times before asking"+
                      " for a hint")
            elif (current_letter_guess == "*" and
                  len(possible_matches) <= 100):
                possible_matches = show_possible_matches(guessed_word)
                print("Possible word matches are:")
                print(possible_matches)
            else:
                if (str.isalpha(current_letter_guess)
                    and len(current_letter_guess)==1):
                    if (current_letter_guess in letters_guessed):
                        if (warnings > 0):
                            print("Oops you already guessed that letter",
                                  "You have",warnings,"warnings:",
                                  guessed_word)
                        else:
                            print("Oops you already guessed that letter",
                                  "You have",guesses,"guesses:",
                                  guessed_word)
                    else:
                        letters_guessed.append(str.lower(current_letter_guess))
                        guessed_word = get_guessed_word(secret_word,letters_guessed)
                        if (current_letter_guess in secret_word):
                            print("Good guess:",
                                  guessed_word)
                        else:
                            if current_letter_guess in consonants:
                                print("Oops! That letter is not in my word:",
                                      guessed_word)
                                guesses-=1
                            else:
                                print("Oops! That letter is not in my word:",
                                      guessed_word)
                                guesses-=2
                else:
                    if (warnings > 0):
                        warnings-=1
                        print("Oops that was an invalid character",
                              "You have",warnings,"warnings:",
                              guessed_word)
                    else:
                        guesses-=1
                        print("Oops that was an invalid character",
                              "You have",guesses,"guesses:",
                              guessed_word)
        print("--------------")
    if (won):
        print("Congratulations, you won!")
        unique_letters = ""
        for char in secret_word:
            if char in consonants:
                if char in unique_letters:
                    continue
                else:
                    unique_letters+=char
        print("Your total score for this game is :",
              guesses*len(unique_letters))
    else:
        print(letters_guessed)
        print("Sorry, you ran out of guesses. The word was",secret_word)



# When you've completed your hangman_with_hint function, comment the two similar
# lines above that were used to run the hangman function, and then uncomment
# these two lines and run this file to test!
# Hint: You might want to pick your own secret_word while you're testing.


if __name__ == "__main__":
    #pass

    # To test part 2, comment out the pass line above and
    # uncomment the following two lines.
    
    #secret_word = choose_word(wordlist)
    #hangman(secret_word)

###############
    
    # To test part 3 re-comment out the above lines and 
    # uncomment the following two lines. 
    
    secret_word = choose_word(wordlist)
    hangman_with_hints(secret_word)
