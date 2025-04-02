#include <iostream>
using namespace std;

class Animal{
    public :
    string name;
    int age;
    string breed(string name); //argument/parameter
    void display(string name, int age);

    void dogSounds(){
        cout<<"\nbow bow..\n";
    }
     void catSounds(){
        cout<<"\nMewoo Mewoo..\n";
    }
    
};

string Animal::breed(string name){
    return name+": cross breed";
}

void Animal::display(string name,int age){
    cout<< "\nAnimal Name:"<<name <<"\nAnimal Age:"<< age;
}

int main(){
    
    Animal obj1;
    obj1.name="dog";
    obj1.age=5;
    obj1.display( obj1.name,obj1.age);
    obj1.dogSounds();
    cout<<obj1.breed(obj1.name);
    Animal obj2;
    obj2.name="cat";
    obj2.age=4;
    obj2.display( obj2.name,obj2.age);
    obj2.catSounds();
    cout<<obj2.breed(obj2.name);

    return 0;
}
