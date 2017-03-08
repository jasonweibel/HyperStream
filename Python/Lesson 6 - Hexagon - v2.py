import turtle         
wn = turtle.Screen()  
t = turtle.Turtle()   

t.speed(0)

def hexagon():
    t.begin_fill() 
    t.color("red")
    for i in range(6):
        t.forward(100)
        t.left(60)
    t.end_fill()

t.penup()
t.right(90)
t.forward(200)
t.left(90)
t.forward(150)
t.pendown()

for i in range(6):
    hexagon()
    t.penup()
    t.left(60)    
    t.forward(250)
    t.pendown()

 

