#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{

    int square[1001];

    int row, column;
    int width = 1000;
    int height = 1000;
    int size = width * height * 4; //for 32-bit bitmap only

    int value = 1;
    for( int i=1; i <= 1000; i++ )
    {
       square[i] = value/8000;
       printf("%d² = %d\n", i, value/8000);  	
       value = value + 1 + (i*2);
    }

    char header[54] = { 0 };
    strcpy(header, "BM");


    size += 54;
    memcpy(&header[2], &size, 4);
    size -= 54;
    memset(&header[6],  0, 1);
    memset(&header[10], 54, 1);//always 54
    memset(&header[14], 40, 1);//always 40
    memcpy(&header[18], &width, 4);
    memcpy(&header[22], &height, 4);
    memset(&header[26], 1, 1);
    memset(&header[28], 32, 1);//32bit
    memset(&header[30], 0, 1);
    memset(&header[34], 0, 1);
    memcpy(&header[38], &size, 4);//pixel size
    memset(&header[42], 0, 1);//pixel size
    memset(&header[46], 0, 1);//pixel size
    memset(&header[50], 0, 1);//pixel size


    unsigned char *pixels = malloc(size);
    for(row = height - 1; row >= 0; row--) {
        for(column = 0; column < width; column++) {

            //char color = (char) ( (square[row] + square[column]) / (int)1000000 * (int)255);
            int color = (square[row] + square[column]);
            int p = (row * width + column) * 4;
            pixels[p + 0] = color; //blue
            pixels[p + 1] = 0xff; //green
            pixels[p + 2] = color; //red
	        
            if(color > 10)
            {
               pixels[p + 0] = 0x00; //red
               pixels[p + 1] = 0x00; //red
            }
        }
    }    


    char filename[100] = "";
    sprintf( filename, "32bit_%d.bit", 1 ); 
    
    FILE *fout = fopen(filename, "wb");
    fwrite(header, 1, 54, fout);
    fwrite(pixels, 1, size, fout);
    free(pixels);
    fclose(fout);

    return 0;
}

