// g++ abba.cpp -o out -std=c++11



#include <iostream>
#include <string>
#include <cstdlib>
using namespace std;


string _alphabet = "abcdefghijklmnopqrstuvwxyz";




string generate() {

    string value = "";
    string result = "";

    cout << "start";

    int  randomized = rand() % 100;
   
    cout << randomized;

    for( int i; i < randomized; i++ )
    {
        value = _alphabet.at( rand()% _alphabet.length()); 
        result += value + value;
        cout << value;
    }

    randomized = rand() % 100;

    cout << randomized;
    for( int i; i < randomized; i++ )
    {        
        value = _alphabet.at( rand()% _alphabet.length()); 
        result += value + result + value;
        cout << value;
    }

    return result;

}

int main() { 

    cout << "Teste" << generate();

}
 
