
int findMaxConsecutiveOnes(int* nums, int numsSize){
    int count = 0;
    int max = 0;
    int i;
    
    // 카운트를 한다.
    for(i = 0; i < numsSize; i++) {
        if(nums[i] == 1) {
            count++;
            if(count > max)
                max = count;
        }
        if(nums[i] == 0) {
            count = 0;
        }
    }
    return max;
}

int findMaxConsecutiveOnes(int* nums, int numsSize){
    int count = 0;
    int max = 0;
