
#include <iostream>

struct Node {
	int data;
	struct Node *left;
	struct Node *right;
};

Node* FindMin(Node* root);
// Function to search a delete a value from tree.
struct Node* Delete(struct Node *root, int data);
//Function to visit nodes in Inorder
void Inorder(Node *root);
// Function to Insert Node in a Binary Search Tree
Node* Insert(Node *root, int data);


