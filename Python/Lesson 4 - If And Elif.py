import turtle          # Allows us to use turtles
wn = turtle.Screen()   # Creates a playground for turtles
t = turtle.Turtle()    # Create a turtle, assign to t
c = "blue"             # Create a variable c with a value of blue
for i in range(4):     # for loop that will be executed 4 times
  t.pencolor(c)        # set pen color to value of c
  t.forward(50)        # Tell t to move forward by 50 units
  t.left(90)           # Tell t to turn by 90 degrees

  if i == 0:           # check if i is equals 0
    c = "red"          # set c variable to red
  elif i == 1:         # check if i is equals 1 
    c = "green"        # set c variable to green
  elif i == 2:         # check if i is equals 2
    c = "yellow"       # set c variable to yellow
  else:                # if c wasn't blue do next command
    c = "pink"         # set the c variable to pink

wn.mainloop()  