# 윤년 구하기
input = int(input())

if((input % 4 == 0) and not(input % 100 == 0) or (input % 400 == 0)):
    print("1")
else:
    print("0")
