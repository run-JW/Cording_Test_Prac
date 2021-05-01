star_tree = int(input())

blank = star_tree - 1

for i in range(1, star_tree + 1):
    
    for j in range(blank):
        print(" ", end='')
    
    for k in range(1, i+1):
        print("*", end='')
    print()
    blank -= 1
