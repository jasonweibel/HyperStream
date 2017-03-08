import random
 
options=["rock","paper","scissors"]

c = 0
u = 0

playing = True
games = 0

while playing:
    userOption = input("Rock, Paper or Scissors?").lower()
     
    games = games + 1
    computerOption = random.choice(options)
     
    print("You said: " + userOption)
    print("The computer chose: " + computerOption)
     
    if (userOption==computerOption):
        print("It's a draw...")
    elif ((userOption=="rock") and (computerOption=="scissors")):
        print("You win!")
        u = u + 1
    elif ((userOption=="paper") and (computerOption=="rock")):
        print("You win!")
        u = u + 1
    elif ((userOption=="scissors") and (computerOption=="paper")):
        print("You win!")
        u = u + 1
    else:
        print("You lose!")
        c = c + 1

    if (games >= 3):
        if (c - u >= 2):
            playing = False
        elif (u - c >= 2):
            playing = False

print('You win ' + repr(u) + ' Computer wins ' + repr(c))
