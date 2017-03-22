import turtle         
bob = turtle.Turtle()   

bob.speed(0)

def hexagon():
    bob.begin_fill() 
    bob.color("red")
    for i in range(6):
        bob.forward(100)
        bob.left(60)
    bob.end_fill()

def movetostart():
    bob.penup()
    bob.right(90)
    bob.forward(200)
    bob.left(90)
    bob.forward(150)
    bob.pendown()

movetostart()

for i in range(6):
    hexagon()
    bob.penup()
    bob.left(60)    
    bob.forward(250)
    bob.pendown()

turtle.done()



