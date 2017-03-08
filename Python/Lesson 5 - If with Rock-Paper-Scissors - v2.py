import random
 
options=["rock","paper","scissors"]

c = 0
u = 0

for i in range(5):
    if (c==3 or u == 3):
        break

    userOption = input("Rock, Paper or Scissors?").lower()
     
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

print('You win ' + repr(u) + ' Computer wins ' + repr(c))
