import random
 
options=["rock","paper","scissors"]
 
for i in range(5):
    userOption = input("Rock, Paper or Scissors?").lower()
     
    computerOption = random.choice(options)
     
    print("You said: " + userOption)
    print("The computer chose: " + computerOption)
     
    if (userOption==computerOption):
        print("It's a draw...")
    elif ((userOption=="rock") and (computerOption=="scissors")):
        print("You win!")
    elif ((userOption=="paper") and (computerOption=="rock")):
        print("You win!")
    elif ((userOption=="scissors") and (computerOption=="paper")):
        print("You win!")
    else:
      print("You lose!")
