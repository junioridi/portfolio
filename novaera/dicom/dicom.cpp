#include "dicom.h"

// no class is needed, we can have free-standing functions
void displayObject (dicom* obj)
{
    // calls the virtual toString method on the concrete type passed in
    // the arrow operator is used to access methods of a pointed-to class
    std::cout << obj->toString() << '\n';
}

dicom::dicom(){
    this->files.push_back("~/Teste'.txt");
    this->files.push_back("~/Teste2'.txt");
    this->files.push_back("~/Teste3'.txt");
    this->files.push_back("~/Teste4'.txt");
    this->files.push_back("~/Teste5'.txt");





};

std::string dicom::toString ()
{
    return "This is DICOM!";
}

std::vector<std::string> * dicom::getAllFiles()
{

    return &(this->files);

}



