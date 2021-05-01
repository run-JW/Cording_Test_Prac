star_tree = int(input())

for i in range(1, star_tree + 1):
    for j in range(1, i+1):
        print("*", end='')
    print()
