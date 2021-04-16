/*This source code copyrighted by Lazy Foo' Productions (2004-2015)
and may not be redistributed without written permission.*/

//Using SDL, SDL_image, standard IO, and strings
#ifdef _WIN32
   #include <SDL_image.h>
   //define something for Windows (32-bit and 64-bit, this part is common)
   #ifdef _WIN64
      //define something for Windows (64-bit only)
   #endif
#elif __APPLE__
    #include <SDL2/SDL.h>
    #include <SDL2_image/SDL_image.h>
    #if TARGET_IPHONE_SIMULATOR
         // iOS Simulator
    #elif TARGET_OS_IPHONE
        // iOS device
    #elif TARGET_OS_MAC
        // Other kinds of Mac OS
    #else
    #   error "Unknown Apple platform"
    #endif
#elif __linux__
    #include <SDL2/SDL.h>
    #include <SDL2/SDL_image.h>
#elif __unix__ // all unices not caught above
    // Unix
#elif defined(_POSIX_VERSION)
    // POSIX
#else
#   error "Unknown compiler"
#endif


#include <iostream>
#include <stdio.h>
#include <string>
#include <curl/curl.h>
#include "../dicom/dicom.h"
#include "../dicom/dicomdictionary.h"
#include "../utils/utils.h"
#include "../utils/btree.h"
#include "../utils/btreechar.h"

//Screen dimension constants
const int SCREEN_WIDTH = 640;
const int SCREEN_HEIGHT = 480;

//Texture wrapper class
class LTexture
{
	public:
		//Initializes variables
		LTexture();

		//Deallocates memory
		~LTexture();

		//Loads image at specified path
		bool loadFromFile( std::string path );

		#ifdef _SDL_TTF_H
		//Creates image from font string
		bool loadFromRenderedText( std::string textureText, SDL_Color textColor );
		#endif

		//Deallocates texture
		void free();

		//Set color modulation
		void setColor( Uint8 red, Uint8 green, Uint8 blue );

		//Set blending
		void setBlendMode( SDL_BlendMode blending );

		//Set alpha modulation
		void setAlpha( Uint8 alpha );

		//Renders texture at given point
		void render( int x, int y, SDL_Rect* clip = NULL, double angle = 0.0, SDL_Point* center = NULL, SDL_RendererFlip flip = SDL_FLIP_NONE );

		//Gets image dimensions
		int getWidth();
		int getHeight();

		//Pixel manipulators
		bool lockTexture();
		bool unlockTexture();
		void* getPixels();
		int getPitch();
        SDL_Texture * getTexture();

	private:
		//The actual hardware texture
		SDL_Texture* mTexture;
		void* mPixels;
		int mPitch;

		//Image dimensions
		int mWidth;
		int mHeight;
};

//Starts up SDL and creates window
bool init();

//Loads media
bool loadMedia();

//Frees media and shuts down SDL
void close();

//The window we'll be rendering to
SDL_Window* gWindow = NULL;

//The window renderer
SDL_Renderer* gRenderer = NULL;

//Scene textures
LTexture gFooTexture;



LTexture::LTexture()
{
	//Initialize
	mTexture = NULL;
	mWidth = 0;
	mHeight = 0;
	mPixels = NULL;
	mPitch = 0;
}

LTexture::~LTexture()
{
	//Deallocate
	free();
}

SDL_Texture* LTexture::getTexture()
{
    return mTexture;
}
bool LTexture::loadFromFile( std::string path )
{
	//Get rid of preexisting texture
	free();

	//The final texture
	SDL_Texture* newTexture = NULL;

	//Load image at specified path
	SDL_Surface* loadedSurface = IMG_Load( path.c_str() );
	if( loadedSurface == NULL )
	{
		printf( "Unable to load image %s! SDL_image Error: %s\n", path.c_str(), IMG_GetError() );
	}
	else
	{

        //SDL_Surface* wsurface = SDL_GetWindowSurface( gWindow );

        //if (wsurface == NULL) {
            // Unrecoverable error, exit here.
        //    printf("SDL_GetWindowSurface failed: %s\n", SDL_GetError());
        //}

		//Convert surface to display format
		//SDL_Surface* formattedSurface = SDL_ConvertSurface( loadedSurface, wsurface->format, NULL );
		//if( formattedSurface == NULL )
		//{
		//	printf( "Unable to convert loaded surface to display format! SDL Error: %s\n", SDL_GetError() );
		//}
		//else
		//{
			//Create blank streamable texture
			newTexture = SDL_CreateTexture( gRenderer, SDL_GetWindowPixelFormat( gWindow ), SDL_TEXTUREACCESS_STREAMING, loadedSurface->w, loadedSurface->h );
			if( newTexture == NULL )
			{
				printf( "Unable to create blank texture! SDL Error: %s\n", SDL_GetError() );
			}
			else
			{
				//Lock texture for manipulation
				SDL_LockTexture( newTexture, NULL, &mPixels, &mPitch );

				//Copy loaded/formatted surface pixels
				memcpy( mPixels, loadedSurface->pixels, loadedSurface->pitch * loadedSurface->h );

				//Unlock texture to update
				SDL_UnlockTexture( newTexture );
				mPixels = NULL;

				//Get image dimensions
				mWidth = loadedSurface->w;
				mHeight = loadedSurface->h;
			}

			//Get rid of old formatted surface
			//SDL_FreeSurface( formattedSurface );
		//}

		//Get rid of old loaded surface
		SDL_FreeSurface( loadedSurface );
	}

	//Return success
	mTexture = newTexture;
	return mTexture != NULL;
}

#ifdef _SDL_TTF_H
bool LTexture::loadFromRenderedText( std::string textureText, SDL_Color textColor )
{
	//Get rid of preexisting texture
	free();

	//Render text surface
	SDL_Surface* textSurface = TTF_RenderText_Solid( gFont, textureText.c_str(), textColor );
	if( textSurface != NULL )
	{
		//Create texture from surface pixels
        mTexture = SDL_CreateTextureFromSurface( gRenderer, textSurface );
		if( mTexture == NULL )
		{
			printf( "Unable to create texture from rendered text! SDL Error: %s\n", SDL_GetError() );
		}
		else
		{
			//Get image dimensions
			mWidth = textSurface->w;
			mHeight = textSurface->h;
		}

		//Get rid of old surface
		SDL_FreeSurface( textSurface );
	}
	else
	{
		printf( "Unable to render text surface! SDL_ttf Error: %s\n", TTF_GetError() );
	}


	//Return success
	return mTexture != NULL;
}
#endif

void LTexture::free()
{
	//Free texture if it exists
	if( mTexture != NULL )
	{
		SDL_DestroyTexture( mTexture );
		mTexture = NULL;
		mWidth = 0;
		mHeight = 0;
		mPixels = NULL;
		mPitch = 0;
	}
}

void LTexture::setColor( Uint8 red, Uint8 green, Uint8 blue )
{
	//Modulate texture rgb
	SDL_SetTextureColorMod( mTexture, red, green, blue );
}

void LTexture::setBlendMode( SDL_BlendMode blending )
{
	//Set blending function
	SDL_SetTextureBlendMode( mTexture, blending );
}

void LTexture::setAlpha( Uint8 alpha )
{
	//Modulate texture alpha
	SDL_SetTextureAlphaMod( mTexture, alpha );
}

void LTexture::render( int x, int y, SDL_Rect* clip, double angle, SDL_Point* center, SDL_RendererFlip flip )
{
	//Set rendering space and render to screen
	SDL_Rect renderQuad = { x, y, mWidth, mHeight };

	//Set clip rendering dimensions
	if( clip != NULL )
	{
		renderQuad.w = clip->w;
		renderQuad.h = clip->h;
	}

	//Render to screen
	SDL_RenderCopyEx( gRenderer, mTexture, clip, &renderQuad, angle, center, flip );
}

int LTexture::getWidth()
{
	return mWidth;
}

int LTexture::getHeight()
{
	return mHeight;
}

bool LTexture::lockTexture()
{
	bool success = true;

	//Texture is already locked
	if( mPixels != NULL )
	{
		printf( "Texture is already locked!\n" );
		success = false;
	}
	//Lock texture
	else
	{
		if( SDL_LockTexture( mTexture, NULL, &mPixels, &mPitch ) != 0 )
		{
			printf( "Unable to lock texture! %s\n", SDL_GetError() );
			success = false;
		}
	}

	return success;
}

bool LTexture::unlockTexture()
{
	bool success = true;

	//Texture is not locked
	if( mPixels == NULL )
	{
		printf( "Texture is not locked!\n" );
		success = false;
	}
	//Unlock texture
	else
	{
		SDL_UnlockTexture( mTexture );
		mPixels = NULL;
		mPitch = 0;
	}

	return success;
}

void* LTexture::getPixels()
{
	return mPixels;
}

int LTexture::getPitch()
{
	return mPitch;
}

bool init()
{
	//Initialization flag
	bool success = true;

	//Initialize SDL
	if( SDL_Init( SDL_INIT_VIDEO ) < 0 )
	{
		printf( "SDL could not initialize! SDL Error: %s\n", SDL_GetError() );
		success = false;
	}
	else
	{
		//Set texture filtering to linear
		if( !SDL_SetHint( SDL_HINT_RENDER_SCALE_QUALITY, "1" ) )
		{
			printf( "Warning: Linear texture filtering not enabled!" );
		}

		//Create window
		gWindow = SDL_CreateWindow( "SDL Tutorial", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, SCREEN_WIDTH, SCREEN_HEIGHT, SDL_WINDOW_SHOWN );
		if( gWindow == NULL )
		{
			printf( "Window could not be created! SDL Error: %s\n", SDL_GetError() );
			success = false;
		}
		else
		{
			//Create renderer for window
			gRenderer = SDL_CreateRenderer( gWindow, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC );
			if( gRenderer == NULL )
			{
				printf( "Renderer could not be created! SDL Error: %s\n", SDL_GetError() );
				success = false;
			}
			else
			{
				//Initialize renderer color
				SDL_SetRenderDrawColor( gRenderer, 0xFF, 0xFF, 0xFF, 0xFF );

				//Initialize PNG loading
				int imgFlags = IMG_INIT_PNG;
				if( !( IMG_Init( imgFlags ) & imgFlags ) )
				{
					printf( "SDL_image could not initialize! SDL_image Error: %s\n", IMG_GetError() );
					success = false;
				}
			}
		}
	}

	return success;
}

bool loadMedia()
{
	//Loading success flag
	bool success = true;

	//Load foo' texture
	if( !gFooTexture.loadFromFile( "./logo.png" ) )
	{
		printf( "Failed to load corner texture!\n" );
		success = false;
	}
	else
	{
		//Lock texture
		if( !gFooTexture.lockTexture() )
		{
			printf( "Unable to lock Foo' texture!\n" );
		}
		//Manual color key
		else
		{
			//Get pixel data
			Uint32* pixels = (Uint32*)gFooTexture.getPixels();
			int pixelCount = ( gFooTexture.getPitch() / 4 ) * gFooTexture.getHeight();

			//Map colors
			//Uint32 colorKey = SDL_MapRGB( SDL_GetWindowSurface( gWindow )->format, 0, 0xFF, 0xFF );
			//Uint32 Red = SDL_MapRGB( SDL_GetWindowSurface( gWindow )->format, 0xFF, 0, 0 );
			//Uint32 transparent = SDL_MapRGBA( SDL_GetWindowSurface( gWindow )->format, 0xFF, 0xFF, 0xFF, 0x00 );

			//Color key pixels
			for( int i = 0; i < pixelCount; ++i )
			{
				if( pixels[ i ] == pixels[i] )
				{
					//pixels[ i ] = transparent;
                    pixels[ i ] = pixels[i];
				}
			}

			//Unlock texture
			gFooTexture.unlockTexture();
		}
	}

	return success;
}

void close()
{
	//Free loaded images
	gFooTexture.free();

	//Destroy window
	SDL_DestroyRenderer( gRenderer );
	SDL_DestroyWindow( gWindow );
	gWindow = NULL;
	gRenderer = NULL;

	//Quit SDL subsystems
	IMG_Quit();
	SDL_Quit();
}

int main( int argc, char* args[] )
{

    dictionary_add((char*)"name", (char*)"Fernando Antonio Calzzani Junior");
    dictionary_add((char*)"email", (char*)"junioridi@gmail.com");
    dictionary_add((char*)"address", (char*)"Rua Abilio Rebordoes, 70");
    dictionary_add((char*)"city", (char*)"Ribeirao Preto");

    std::cout << dictionary((char*)"name") << "\n";

    dicom* objdicom = new dicom();
    std::cout << objdicom->toString();

    std::vector<std::string> v = * objdicom->getAllFiles();

    for(std::vector<std::string>::iterator it = v.begin(); it != v.end(); ++it) {
        std::cout << *it << "\n";
    }


    Node* root = NULL;
    root = Insert(root,100);
    root = Insert(root,(int)19);
	root = Insert(root,5); root = Insert(root,10);
	root = Insert(root,3); root = Insert(root,4);
	root = Insert(root,1); root = Insert(root,11);

	// Deleting node with value 5, change this value to test other cases
	root = Delete(root,5);

	//Print Nodes in Inorder
	std::cout<<"Inorder: ";
	Inorder(root);
	std::cout<<"\n";



    std::shared_ptr<cNode> croot = NULL;
    croot = Insert(croot,(char*)"fernando", (char*)"Fernando Antonio Calzzani Junior");
    croot = Insert(croot,(char*)"andrea",(char*)"Andrea de Oliveira Tosta Calzzani");
	croot = Insert(croot,(char*)"isadora", (char*)"Isadora Fernando Tosta Calzzani");
	croot = Insert(croot,(char*)"gilenia", (char*)"Gilenia de Oliveira Freitas");
	croot = Insert(croot,(char*)"sebastiao", (char*)"Sebastiao Salgado");
	croot = Insert(croot,(char*)"ernesto", (char*)"Ernesto Paglia");


    //CTree* tree = new CTree();
    //tree.



    memory *memtest0 = new memory(NULL,"Fernando Antonio Calzzani Junior");
    memory *memtest1 = new memory(NULL,"Fernando A. Calzzani Junior");
    memory *memtest2 = new memory(NULL,"Fernando A. Calzzani Junior");

    delete memtest0;
    delete memtest1;
    delete memtest2;

	// Deleting node with value 5, change this value to test other cases
	//croot = Delete(croot, "sebastiao");

	//Print Nodes in Inorder
	std::cout<<"Inorder: ";
	Inorder(croot);
	std::cout<<"\n";



	//cNode* temp;
	char * temp = NULL;
	char *input;
	input = new char[1024];

	char vrtype[3] = "  ";

	DicomDictionary * dict = new DicomDictionary();

	while( 1 )
	{

		std::cout << "Entre com a Dicom TAG : ";
		std::cin >> input;

		//temp = GetValue( croot, input );
		temp = dict->get( input );

		//if( temp != NULL ) std::cout << "Resultado : "  << temp->value << std::endl;
		if( temp != NULL ){
            memcpy( vrtype, temp, 2 );
            std::cout << "Resultado : "  << vrtype << " " << (char*) (temp+2) << std::endl;
		}
		else std::cout << "Resultado : NULL" << std::endl;

		if( strlen(input) < 2  ) break;
        //break;

	}


    delete dict;


    CURLcode imgresult;
    FILE *fp;

    CURL *curl = curl_easy_init();
    if (curl) printf("curl_easy_init() succeeded!\n");
    else fprintf(stderr, "Error calling curl_easy_init().\n");

	getchar();

	//return 0;

    if( curl ){
        // Open file
        fp = fopen("./logo.png", "wb");
        if( fp == NULL ){
            printf("File cannot be opened");
            return 0;
        }

        curl_easy_setopt(curl, CURLOPT_URL, "http://idi.loginto.me/infomodule/images/logo-small-v.png");
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, NULL);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, fp);

        // Grab image
        imgresult = curl_easy_perform(curl);
        if( imgresult ){
            printf("Cannot grab the image!\n");
        }
		// Close the file
		fclose(fp);
    }

    // Clean up the resources
    curl_easy_cleanup(curl);











	//Start up SDL and create window
	if( !init() )
	{
		printf( "Failed to initialize!\n" );
	}
	else
	{
		//Load media
		if( !loadMedia() )
		{
			printf( "Failed to load media!\n" );
		}
		else
		{
			//Main loop flag
			bool quit = false;

			//Event handler
			SDL_Event e;

			//While application is running
			while( !quit )
			{
				//Handle events on queue
				while( SDL_PollEvent( &e ) != 0 )
				{
					//User requests quit
					if( e.type == SDL_QUIT )
					{
						quit = true;
					}
				}

				//Clear screen
				SDL_SetRenderDrawColor( gRenderer, 0xFF, 0xFF, 0xFF, 0xFF );
				SDL_RenderClear( gRenderer );

				//Render stick figure
				gFooTexture.render( ( SCREEN_WIDTH - gFooTexture.getWidth() ) / 2, ( SCREEN_HEIGHT - gFooTexture.getHeight() ) / 2 );

				//Update screen
				SDL_RenderPresent( gRenderer );
			}
		}
	}

	//Free resources and close SDL
	close();


	return 0;
}
