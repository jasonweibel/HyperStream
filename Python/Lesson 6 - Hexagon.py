import turtle         
bob = turtle.Turtle()   

bob.speed(0)

def hexagon():
  for i in range(6):
      bob.forward(100)
      bob.left(60)

bob.penup()
bob.right(90)
bob.forward(200)
bob.left(90)
bob.forward(150)
bob.pendown()

counter = 1

for i in range(7):
    hexagon()
    bob.penup()
    bob.left(60)    
    bob.forward(200)
    bob.pendown()

 

