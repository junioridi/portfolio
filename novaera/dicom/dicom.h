#include <string>
#include <iostream>
#include <vector>

class dicom
{

    private:
    std::vector<std::string> files;

    public:
    std::string toString ();
    std::vector<std::string> * getAllFiles();
    dicom();

}; // note the need for a semicolon here in C++

void displayObject (dicom* obj);



