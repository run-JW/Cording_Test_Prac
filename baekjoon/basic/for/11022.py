test_case = int(input())

for i in range(1, test_case + 1):
    x, y = input().split()
    x = int(x)
    y = int(y)
    print(f"Case #{i}: {x} + {y} = {x + y}")
