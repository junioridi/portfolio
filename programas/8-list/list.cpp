#include <iostream>
#include <string>
using namespace std;



class Node {
  public:
        string data; 
        Node * next;
        Node(string data);
        void Insert( Node * node );
};

Node::Node(string data)
{
    this->data = data;
}

void Node::Insert( Node * node )
{
     this->next = node;
}

class NodeList {
    public:
        Node * head;
        Node * last;
        void Add( Node * node );
        void Add( string data );
        void Invert();
};
                    

void NodeList::Add( Node * node )
{
	if(!this->head)
	{
		this->head = node;
	}

    if(this->last)
    {
	    this->last->next = node;
    }

	this->last = node;	

}

void NodeList::Add(string data)
{
    Node * node = new Node(data);
    this->Add( node );
}

void NodeList::Invert()
{

    Node * previous = NULL;
    Node * next = NULL;
    Node * node = this->head;
    
    while(node)
    {  

        cout << node->data << "\n";
        next = node->next;
        node->next = previous;

        previous = node;

        node = next;

    }

    node = this->last;
    this->last = this->head;
    this->head = node;
 
}
 
int main() 
{
	
    NodeList * list = new NodeList();
    
    list->Add("Fernando"); 
    list->Add("Antonio"); 
    list->Add("Calzzani"); 
    list->Add("Junior"); 
    list->Add("O"); 
    list->Add("Programador"); 
    
    Node * node = list->head;
    while(node)
    {
        cout << node->data << "\n";
        node = node->next;
    }
    
    list->Invert();

    node = list->head;
    while(node)
    {
        cout << node->data << "\n";
        node = node->next;
    } 
 
    cout << "TESTE";

    return 0;

}


