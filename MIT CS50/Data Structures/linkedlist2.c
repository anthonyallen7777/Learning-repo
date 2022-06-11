#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
    int val;
    struct node *next;
}
node;

int main(void)
{
    node *list = NULL;

    node *n = malloc(sizeof(node));

    if (n == NULL)
    {
        return 1;
    }
    n->val = 2;
    n->next = NULL;
    list = n;

    n = malloc(sizeof(node));
    if (n == NULL)
    {
        free(list);
        return 1;
    }
    n->val = 4;
    n->next = NULL;
    list->next = n;

    n = malloc(sizeof(node));
    if (n == NULL)
    {
        free(list->next);
        free(list);
        return 1;
    }

    n->val = 5;
    n->next = NULL;
    list->next->next = n;
    
    for (node *tmp = list; tmp != NULL; tmp = tmp->next)
    {
        printf("%i\n", tmp->val);
    }

    while (list != NULL) {
        node *tmp = list-> next;
        free(list);
        list = tmp;
    }

   //inserting a node into the front of the list
   n->next = list;

   list = n;
}