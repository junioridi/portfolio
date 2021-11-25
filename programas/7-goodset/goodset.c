#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);

/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */
 
 class node {
     node * root;
     node * left;
     node * right;
 }
 

void noPrefix(vector<string> words) {
    for( int index=0; index < words.size(); index++ )
    {
        for( int i = 0; i < index; i++ )
        {   
            string value1 = "";
            string value2 = "";
            if(words[i].length() < words[index].length())
            {
                value1 = words[index];
                value2 = words[i];
            }     
            else
            {
                value1 = words[i];
                value2 = words[index];               
            }
            
            if(value1.rfind(value2,0) ==0)
            {
                cout << "BAD SET" << "\n";
                cout << words[index];
                return;
            }
        }
     }
    cout << "GOOD SET";
}

int main()
{
    string n_temp;
    getline(cin, n_temp);

    int n = stoi(ltrim(rtrim(n_temp)));

    vector<string> words(n);

    for (int i = 0; i < n; i++) {
        string words_item;
        getline(cin, words_item);

        words[i] = words_item;
    }

    noPrefix(words);

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}


