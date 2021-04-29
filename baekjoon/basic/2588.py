x = input()
y = input()

result = x * y

y = str(y)

sol_1 = x * int(y[2])
sol_2 = x * int(y[1])
sol_3 = x * int(y[0])

print(sol_1)
print(sol_2)
print(sol_3)
print(result)
