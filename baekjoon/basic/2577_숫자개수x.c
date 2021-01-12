// 아직 못품

#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>

int main() {

	int a, b, c, i, m;
	int nums[10] = { 0 };
	char p[100];

	scanf_s("%d%d%d", &a, &b, &c);

	m = a * b * c;

	sprintf(p, "%d", m);

	i = 0;
	
	while (1) {
		m = atoi(p + i);

		nums[m]++;
		
		if (*p == EOF)
			break;

		i++;
	}

	for (i = 0; i < 10; i++) {
		printf("%d\n", nums[i]);
	}

	return 0;
}
