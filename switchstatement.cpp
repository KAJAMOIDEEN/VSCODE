#include <iostream>
using namespace std;

int main() {
  int day=1;
//   cout<<"Enter the class day:";
//   getline(cin,day);

  switch (day)
  {
  case 1:
    cout<<"CLass time will be 9am to 11am ";
    break;
  
  case 2:
    cout<<"CLass time will be 1pm to 3pm ";
    break;
  
  default:
    cout<<"enter correct day";
    break;
  }
  return 0;
}