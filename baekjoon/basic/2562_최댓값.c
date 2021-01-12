#include<stdio.h>

int main() {

	int i, index;
	int nums[9];
	int max = 0;

	for (i = 0; i < 9; i++) {
		scanf_s("%d", nums + i);
	}

	for (i = 0; i < 9; i++) {
		if (nums[i] > max) {
			max = nums[i];
			index = i + 1;
		}
	}

	printf("%d\n%d\n", max, index);

	return 0;
}
