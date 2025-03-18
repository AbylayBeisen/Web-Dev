def double_char(s):
    result = ''
    for c in s:
        result += c * 2
    return result

print(double_char('The') )
print(double_char('AAbb'))
print(double_char('Hi-There'))