#pragma once

#include <iostream>
#include <string.h>
#include <stdlib.h>
#include <memory>

class cNode {
public:
	char* key;
	char* value;
	std::shared_ptr<cNode> left;
	std::shared_ptr<cNode> right;
	cNode();
	~cNode();
};


std::shared_ptr<cNode> GetValue(std::shared_ptr<cNode> root, char* key );

std::shared_ptr<cNode> FindMin(std::shared_ptr<cNode> root);
// Function to search a delete a value from tree.
std::shared_ptr<cNode> Delete(std::shared_ptr<cNode>root, char *key);
//Function to visit cNodes in Inorder
void Inorder(std::shared_ptr<cNode>root);
// Function to Insert cNode in a Binary Search Tree
std::shared_ptr<cNode> Insert(std::shared_ptr<cNode>root, char * key, char *value);



class CTree {
    
private:
    std::shared_ptr<cNode>root;
    
public:
    
    std::shared_ptr<cNode> GetValue( char* key );
    void* Delete( char *key);
    void* Inorder();
    void* Insert( char * key, char *value);

    
};


