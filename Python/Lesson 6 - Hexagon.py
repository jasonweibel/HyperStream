import turtle         
wn = turtle.Screen()  
t = turtle.Turtle()   
 
def hexagon():
  for i in range(6):
      t.forward(100)
      t.left(60)

counter = 1

for i in range(7):
    hexagon()
    t.penup()
    t.left(60)    
    t.forward(200)
    t.pendown()

 

