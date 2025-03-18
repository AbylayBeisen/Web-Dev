def combo_string(s, t):
    return s + t + s if len(s)<len(t) else t+s+t

print(combo_string('Hello', 'hi'))
print(combo_string('hi', 'Hello') )
print(combo_string('aaa', 'b') )