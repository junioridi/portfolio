#include <stdio.h> 
 
void main() { 

    int result = 1;
   
    for ( int i = 1; i <= 10000; i++)
    {
        result+=1+i+i;
        printf("%d²=%d\n", i+1, result);
    } 
}    

