def make_out_words(s,t):
    return s[:2] + t +s[2:]

print(make_out_words('<<>>', 'Yay'))
print(make_out_words('<<>>', 'WooHoo'))
print(make_out_words('[[]]', 'word'))