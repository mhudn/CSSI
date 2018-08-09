class Pet:
    '''__init__() is a method of the class Pet. A method is a function that belongs to a class instance. All methods of class first paramete is self'''
    def __init__(self,name,age,animal="dog"):
    '''self.name and self.age are instance attributes or data memebers of the class Pet. Instance attributes are unique in every occurance(Instance) of a Pet object'''
        self.name = name
        self.age = age
        self.animal = animal
        self.is_hungry = False
        self.mood = "happy"


    def eat(self):
        self.is_hungry = False

    '''The pet class has the memebrs age,name,couint __init__()self..
    To call __init__() function we use the class name with the respective parameters within parenthesis'''

def madeHungry(pet):
    pet.is_hungry = True
#o is an object of Pet
o = Pet("Dog",3)

#t is another object of Pet
t = Pet("Cat",4)

print "Before call to makeHungry()"
print o.name, o.age, o.count
print t.name, t.age, t.count

makeHungry(o)


print "After call to makeHungry() and before call to eat()"
print o.name, o.age, o.count
print t.name, t.age, t.count

o.eat()

print "After call yo Eat()"
