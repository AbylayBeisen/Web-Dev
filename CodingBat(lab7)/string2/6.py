def xyz_there(s):
    return "xyz" in s.replace(".xyz", "")

print(xyz_there('abcxyz'))  
print(xyz_there('abc.xyz'))  
print(xyz_there('xyz.abc'))  