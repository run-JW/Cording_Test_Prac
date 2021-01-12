#include<stdio.h>
#include<stdlib.h>

int main() {

	int n, i;
	int* p;
	int min = 1000000;
	int max = -1000000;

	scanf("%d", &n);

	p = (int*)malloc(sizeof(int) * n);

	for (i = 0; i < n; i++) {
		scanf("%d", p + i);
	}

	for (i = 0; i < n; i++) {
		if (p[i] < min)
			min = p[i];
		if (p[i] > max)
			max = p[i];
	}

	printf("%d %d", min, max);

	free(p);

	return 0;
}

