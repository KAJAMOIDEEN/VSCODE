#include <iostream>
using namespace std;

  void sum(int a, int b){
    cout<< "The sum is:"<<a+b;
    mul(a,b);
  }
  void mul(int a, int b){
    cout<< "The sum is:"<<a*b;
  }

  void display(){
    int a,b;
    cout<<"Enter two numbers:";
    cin>>a;
    cin>>b;
    sum(a,b);
  }

  int main(){
    display();
    return 0;
  }