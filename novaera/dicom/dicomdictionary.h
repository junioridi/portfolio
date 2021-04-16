#include "../utils/btreechar.h"
#include "../utils/utils.h"
#include <memory>

class DicomDictionary
{
    private:
        std::shared_ptr<cNode> dictionary;

    public:
        char * get( char * key );
        DicomDictionary();

}; // note the need for a semicolon here in C++



