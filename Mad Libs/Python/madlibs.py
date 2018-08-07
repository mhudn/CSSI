print"Mad Libs Assignment\n\n"
story = '''Once, a poor and lonely old {0} lived in a small {1}. Many a times, he would say,
"I have no family. It would be {2} if I was dead." '''

noun = raw_input("Enter a Noun: ")
noun1 = raw_input("Enter a Noun: ")
adj = raw_input("Enter a Adjective: ")
print story.format(noun, noun1, adj)
