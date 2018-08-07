def count_spaces(s):
    return s.count(" ")
print(count_spaces("hello world!"))  # => 1
print(count_spaces("wow wow wow"))  # => 2


def longest_word(a,b,c):

    if len(a)>len(b) and len(a)>len(c):
        print a
    elif len(b)>len(a) and len(b)>len(c):
        print b
    else:
        print c

longest_word("hello", "helloo", "hellooo")


def reverse_string(race):
    # racelnt = len(race) -1
    # word = ""
    # while (racelnt >= 0):
    #     word += race[racelnt]
    #     racelnt = racelnt -1
    # print word
    print race[::-1]
reverse_string("hello")


def sum_to_n(n):
    total = 0
    for i in range(1,n+1):
        total=total+i
    return total
print sum_to_n(4)







def is_triangle(a,b,c):
    sabc= a+b > c
    sacb= a+c > b
    sbca= b+c > a
    if sabc and sacb and sbca:
        return True
    else:
        return False


def roll_dice(num):
    total = 0
    for i in range(num):
        total = total + random.randint(1,6)
        return total
