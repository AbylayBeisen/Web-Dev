def make_tags(s,t):
    return '<'+ s+ '>' + t + '</'+s+'>'

print(make_tags('i', 'Yay'))
print(make_tags('i', 'Hello'))
print(make_tags('cite', 'Yay'))