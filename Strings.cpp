#include <iostream>
using namespace std;

int main() {
  string fName;
  cout<<"Enter your name:";
  cin>>fName;
  string lName = "chowdary";
  string fullName = fName.append(lName); // concat
  cout << "your Full Name is: " << fullName;
  int len = fullName.length(); // to find length
  cout<<"\nlength of the name:"<<len;
  cout<<"\nprint:"<<fullName[6]; // to get index value
  cout<<fullName.at(0);
  return 0;
}