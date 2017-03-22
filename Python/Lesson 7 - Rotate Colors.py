import turtle

bob = turtle.Turtle()
bob.speed(0)

flag = True

def rotatePinColor(flag):
    if flag == True:
        bob.pencolor("blue")
    else:
        bob.pencolor("red")
    return not flag

def drawLine():
    bob.forward(100)
    bob.right(30)
    bob.forward(20)
    bob.left(60)
    bob.forward(50)
    bob.right(30)

for i in range(180):
    flag = rotatePinColor(flag)
    drawLine()
    
    bob.penup()
    bob.setposition(0, 0)
    bob.pendown()
    
    bob.right(2)
    
turtle.done()


