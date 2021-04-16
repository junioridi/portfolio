#include "utils.h"

char * dictionary(char * k) {

    typedef struct lookup *plookup;
    struct lookup {
        char *k, *v;
        plookup next;
    };  //lookup;
    int size=(int)strlen(k);

    static int ready = 0;
    static plookup a, b, first;
    if( ready ) {
        if( !strcmp(k, "destroy()")) {   //destroy()
            for( a=first; a; a=b ) free(a->v), free(a->k), b=a->next, free(a);
            ready = 0;
            return (char*)"";
        }
        else {
            for(a=first;a;b=a,a=a->next){   //search()
                if(!strcmp(a->k,k)) {
                    return a->v;
                }
            }
        }
    }

    printf( "First: %d;\n", (int)sizeof first );
    printf( "Lookup: %d;\n", (int)sizeof( struct lookup ) );

    a=(plookup)malloc( sizeof( struct lookup ) );
    a->k = (char*)malloc(size+1);
    a->v = (char*)malloc(CHARS);
    a->next=NULL;

    strcpy(a->k, k);
    strcpy(a->v, "no entry");
    if( !ready ) ready=1, first=a;   //init()
    else b->next=a;

    return a->v;

}




memory::memory( void* aowner, int32_t asize, int32_t abytesAllocated )
{


   try {
      this->size = asize;
      this->data = malloc(asize);
      this->bytesAllocated = abytesAllocated;
   }
   catch(...) {
      this->size = 0;
      this->data = NULL;
      this->bytesAllocated = 0;
   }

   std::cout << "Allocating Memmory " << this->size << std::endl;


};


memory::memory( void* aowner, std::string value )
{

   //int i= 0;

   try {

      this->size = (int32_t) value.size();
      this->data = malloc(value.size()+1);
      this->bytesAllocated = 1;

	  strcpy( (char*)this->data, value.c_str() );
      ((char*)(this->data))[this->size]= 0;

   }
   catch(...)
   {
      this->size = 0;
      this->data = NULL;
      this->bytesAllocated = 0;
   };

   std::cout << "Allocating Memmory " << this->size << std::endl;


};

void* memory::add( void* apointer, int32_t asize )
{

   int oldsize;
   void* newdata;

   oldsize = this->size;
   this->size = oldsize + asize;

   newdata = malloc( oldsize+this->size );

   for( int i = 0;  i < oldsize; i++ )
   {
		((char*)newdata)[i] = ((char*)(this->data))[i];

   }

   for( int i = 0; i < asize; i++ )
   {
		((char*) newdata)[oldsize+i] = ((char*) apointer)[i];
   }

   free(this->data);
   this->data = newdata;

   return 0;

};

memory::~memory()
{

   if( this->data != NULL )
   {
      free( this->data );

      std::cout << "Deallocating Memmory " << this->size << std::endl;
   }

   this->size = 0;
   this->bytesAllocated = 0;
   this->data = NULL;

};
