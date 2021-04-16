
#include "btreechar.h"


cNode::cNode()
{
    std::cout << "cNode Created" << std::endl;
}

cNode::~cNode()
{
    std::cout << "cNode " << this->key << " Destroyed" << std::endl;
    free(this->key);
    free(this->value);
}


//Function to find minimum in a tree.
std::shared_ptr<cNode> FindMin(std::shared_ptr<cNode> root)
{
	while(root->left != NULL) root = root->left;
	return root;
}


std::shared_ptr<cNode> GetValue(std::shared_ptr<cNode> root, char* key )
{
	if(root == NULL) return root;
	else if(strcmp(key,root->key) < 0 )
		return GetValue(root->left,key);
	else if(strcmp(key,root->key) > 0 )
		return GetValue(root->right,key);
	else if(strcmp(key,root->key) == 0 )
		return root;

	return NULL;

}

// Function to search a delete a value from tree.
std::shared_ptr<cNode> Delete(std::shared_ptr<cNode>root, char* key) {
	if(root == NULL) return root;
	else if(strcmp(key,root->key) < 0 ) root->left = Delete(root->left,key);
	else if (strcmp(key,root->key) > 0 ) root->right = Delete(root->right,key);
	// Wohoo... I found you, Get ready to be deleted
	else {
		// Case 1:  No child
		if(root->left == NULL && root->right == NULL) {
            //free(root->key);
            //free(root->value);
			//delete root;
			root = NULL;
		}
		//Case 2: One child
		else if(root->left == NULL) {
			std::shared_ptr<cNode>temp = root;
			root = root->right;
			//free(temp->key);
			//free(temp->value);
			//delete temp;
			temp = NULL;
		}
		else if(root->right == NULL) {
			std::shared_ptr<cNode>temp = root;
			root = root->left;
			//free(temp->key);
			//free(temp->value);
			//delete temp;
			temp = NULL;
		}
		// case 3: 2 children
		else {
			std::shared_ptr<cNode>temp = FindMin(root->right);

            free(root->key);
            free(root->value);
            root->key = (char*)malloc(strlen(temp->key) +1), strcpy(root->key, temp->key);
            root->value = (char*)malloc(strlen(temp->value) +1), strcpy(root->value, temp->value);
			root->right = Delete(root->right,temp->key);
		}
	}
	return root;
}

//Function to visit cNodes in Inorder
void Inorder(std::shared_ptr<cNode>root) {
	if(root == NULL) return;

	Inorder(root->left);       //Visit left subtree
	std::cout << " " << root->key << " : " << root->value << std::endl;  //Print key
	Inorder(root->right);      // Visit right subtree
}

// Function to Insert cNode in a Binary Search Tree
std::shared_ptr<cNode> Insert(std::shared_ptr<cNode>root,char* key, char* value) {
	if(root == NULL) {
		root = (std::shared_ptr<cNode>) new cNode();

		//std::cout << strlen(key) +1 << std::endl;
		root->key = (char*)malloc(strlen(key) +1), strcpy(root->key, key);
		root->value = (char*)malloc(strlen(value) +1), strcpy(root->value, value);
		root->left = root->right = NULL;
	}
	else if(strcmp(key,root->key) <= 0 )
		root->left = Insert(root->left,key,value);
	else
		root->right = Insert(root->right,key,value);
	return root;
}


/*
int main() {
	//Code To Test the logic
	//  Creating an example tree
	//          5
	//		   / \
	//		  3   10
	//		 / \   \
	//		1   4   11
    //
	std::shared_ptr<cNode> root = NULL;
	root = Insert(root,5); root = Insert(root,10);
	root = Insert(root,3); root = Insert(root,4);
	root = Insert(root,1); root = Insert(root,11);

	// Deleting cNode with value 5, change this value to test other cases
	root = Delete(root,5);

	//Print cNodes in Inorder
	cout<<"Inorder: ";
	Inorder(root);
	cout<<"\n";
}

*/




std::shared_ptr<cNode> CTree::GetValue(char* key)
{
    return ::GetValue(this->root, key );
    
}

// Function to search a delete a value from tree.
void* CTree::Delete(char* key) {
    this->root = ::Delete( this->root, key );
    return 0;
}

//Function to visit cNodes in Inorder
void* CTree::Inorder() {
    ::Inorder(this->root);
    return 0;
}

// Function to Insert cNode in a Binary Search Tree
void* CTree::Insert(char* key, char* value) {
    this->root = ::Insert(this->root, key, value );
    return 0;
}






