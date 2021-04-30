# 설정해 놓은 알람 H시 M분
# 이보다 45분 앞선 시간을 설정하기
H, M = input().split()

H = int(H)
M = int(M)

M = M - 45

if(M < 0):
    H = H - 1
    M = 60 + M
    if(H < 0):
        H = 23

print(H, M)
