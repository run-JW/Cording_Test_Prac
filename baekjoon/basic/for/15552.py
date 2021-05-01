# input()은 느림 sys.stdin.readline() 의 입력이 빠름
# 빠른 a + b

import sys

test_case = int(sys.stdin.readline())

for i in range(test_case):
    a, b = sys.stdin.readline().split()
    a = int(a)
    b = int(b)

    print (a + b)
