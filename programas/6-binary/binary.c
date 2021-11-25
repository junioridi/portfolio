#include <stdio.h>
#include <string.h>



void printBits(int const size, void const * const ptr)
{
    unsigned char *b = (unsigned char*) ptr;
    unsigned char byte;
    int i, j;
    
    for (i = size-1; i >= 0; i--) {
        for (j = 7; j >= 0; j--) {
            byte = (b[i] >> j) & 1;
            printf("%u", byte);
        }
    }
    //puts("");
}

void main() {

	unsigned short portas = 0b11110000;
	unsigned short compare = 0; 
	unsigned short result = 0b00000000;

	char operador[256] = ""; 


	while(1)
	{
		printf("Digite um valor (0..255): ");
		scanf("%hu", &portas);

		if(portas == 'q')
		{
			break;
		}

		printf("Operador (&,|,~,<<,>>): ");
		scanf("%s", operador);
		printf("Operador: %s\n", operador);
		
		if( strcmp(operador,"~")!=0 ){
			printf("Digite segundo valor (0..255): "); 
			scanf("%hu", &compare);
			puts(""); 
		}

		if( strcmp(operador,"&")==0 )
		{
			result = (portas & compare); 
		}
		else if( strcmp(operador,"|")==0 )
		{
			result = (portas | compare); 
		}
		else if( strcmp(operador,"^")==0 )
		{
			result = (portas ^ compare); 
		}
		else if( strcmp(operador,"~")==0 )
		{
			result = (~portas); 
		}
		else if( strcmp(operador,">>")==0 )
		{
			result = (portas >> compare); 
		}
		else if( strcmp(operador,"<<")==0 )
		{
			result = (portas << compare); 
		}
		else
		{
			printf("Operador inválido\n");
			continue;
		}

		puts("");

		printf("Decimal: %d %s %d = %d\n", portas, operador, compare, result );
		printf("Binário: ");
		printBits( sizeof(portas), &portas );
		printf(" %s ", operador);
		if( strcmp(operador,"~")!=0 ){
			printBits( sizeof(compare), &compare );
		}
		printf(" = ");
		printBits( sizeof(result), &result );
		puts("");

		printf("Result is ");
		if(result) printf("true");
		else printf("false");
		puts("");


	}
}
