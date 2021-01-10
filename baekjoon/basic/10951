/*
  마무리 조건을 알려주지 않는다. 그래서 eof가 일어나면 자동 종료되도록 하는 것이 이 문제의 핵심이다.
  틀린 이유 : eof 개념
*/

#include<iostream>

using namespace std;

int main() {

	int a, b;

	while (1)
	{
		cin >> a >> b;

		if (cin.eof())
			break;

		cout << a + b << endl;
	}

	return 0;
}
