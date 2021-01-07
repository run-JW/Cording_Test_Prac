// 자리수 구해서 넘기기

int findNumbers(int* nums, int numsSize){
    int find = 0;
    int count;
    int tmp;
    int i;
    
    for(i = 0; i < numsSize; i++) {
        count = 0;
        tmp = nums[i];
        while(tmp != 0)
        {
            tmp /= 10;
            count ++;
        }
        
        if(count % 2 == 0)
            find++;
    }
    
    return find;
}
