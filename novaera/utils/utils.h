#pragma once

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <string>
#include <iostream>

#ifdef _WIN32
   #include <cstdint>
   //define something for Windows (32-bit and 64-bit, this part is common)
   #ifdef _WIN64
      //define something for Windows (64-bit only)
   #endif
#endif

#define FIN return 0;
#define CHARS 256


#define dictionary_add(k,v) strcpy(dictionary(k),v )
#define dictionary_print(k) puts(dctionary(k))
#define dictionary_destroy() dictionary("destroy()")




class memory
{
    private:

    public:

       char bytesAllocated;
       void* data;
       int32_t size;

       memory( void* aowner, int32_t asize, int32_t abytesAllocated );
       memory( void* aowner, std::string value );
       ~memory();
       void* add( void* apointer, int32_t asize );

};



char * dictionary(char * k);

