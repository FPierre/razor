## Bases

### Types de variables

* signed char (printf : "%d" pour ASCII, "%c" pour caractère) : -127 à 127 (stocke 1 caractère)
* int (printf : "%d") : -32 767 à 32 767
* long (printf : "%ld") : -2 147 483 647 à 2 147 483 647
* float (printf : "%f") : -1 x1037 à 1 x1037
* double (printf : "%f", scanf : "%lf") : -1 x1037 à 1 x1037
* unsigned char : 0 à 255
* unsigned int : 0 à 65 535
* unsigned long : 0 à 4 294 967 295
* Booléen avec int 0 et 1 (`if (variable)` est différent de `if (variable == 1)`)
* Constantes : `const int NOM_DE_CONSTANTE = 5;`

### Chaine de caractère

* printf : "%s" : `char chaine[5];`
* Une chaine de caractère doit **toujours finir par un \0**
* Déclarer une chaine : 
  * Initialisation seulement : `char chaine[] = "abc";`
  *  

            char chaine[];
            chaine[0] = 'a';
            chaine[1] = 'b';
            chaine[2] = 'c';
            chaine[3] = '\0';

* Fonctions sur les chaines : `#include <string.h>` :
 * Taille de la chaine (sans le \0) : `int longueur = strlen(chaine);`
 * Concaténer 2 chaines : `strcat(chaine1, chaine2);`
    * chaine1 doit être assez grande pour accueillir chaine2
    * \0 de chaine1 est automatiquement supprimé
 * Comparer 2 chaines : `strcmp(chaine1, chaine2)`
        * 0 si égales, autre chose si non (s'utilise dans un if) 
 * Rechercher un caractère dans une chaine :
    
            char chaine[] = "Texte de test", *suiteChaine = NULL;              
            suiteChaine = strchr(chaine, 'd');                                
            if (suiteChaine != NULL) {
                printf("Fin chaine depuis premier d : %s", suiteChaine);
            }

   * [Autres fonctions sur les chaines de caractères](http://openclassrooms.com/courses/apprenez-a-programmer-en-c/les-chaines-de-caracteres)

## Programmation modulaire

### Prototype

    double functionName(double param1, int param2);

    int main(int argc, char *argv[]) {   
        printf("%f", functionName(5, 10));

        return 0;
    }

    double functionName(double param1, int param2) {
        // ...
    }


## Compilation séparée

![](http://uploads.siteduzero.com/files/175001_176000/175843.png)

### Portée

#### Variables

* Locale : déclarée dans une fonction
* Globale : déclarée après les #include. A éviter
* Propre à un fichier : déclarée après les #include, `static int variable = 0;`
* Globale dans une fonction : déclarée dans une fonction, `static int variable = 0;`, mais conserve la valeur de la variable lors des appels de la fonction

### Fonction

* Une fonction est accessible dans tous les fichiers .c
* `static int function maFonction()` : fonction propre à un fichier (le prototype de cette fonction doit être déclaré avec `static`)

### Pointeur

* Un pointeur contient l'adresse d'une variable
* Afficher l'adresse d'une variable : `printf("%p", &variable);`
* Créer un pointeur : `int *pointeur = NULL;` (le type du pointeur doit être le même que celui de la variable dont le pointeur va contenir l'adresse)
* Afficher l'adresse de la variable que contient le pointeur : `printf("%d", pointeur);`
* Afficher la valeur de la variable dont l'adresse est contenue dans le pointeur : `printf("%d", *pointeur);`
* Afficher l'adresse du pointeur : `printf("%d", &pointeur);`

### Tableau

* Emplacement des cases en mémoire contiguës
* Contient un seul type de variable
* Nouveau tableau d'int : `int tableau[4];`
* Adresse du 1er élément du tableau : `printf("%d", tableau);` (tableau est un pointeur)
* Remplissage par :
 * `tableau[0] = 0;`
 * `tableau[1] = {0};`

### Préprocesseur

* #include
* Constante de préprocesseur. Remplace dans le code toute les occurences :
 * `#define USEFULL_DATA = 5;`
 * `#define COUCOU() printf("Coucou");`
* Constantes prédéfinies :
 * \__LINE__ : donne le numéro de la ligne actuelle.
 * \__FILE__ : donne le nom du fichier actuel.
 * \__DATE__ : donne la date de la compilation.
 * \__TIME__ : donne l'heure de la compilation.
* Conditions :
 \#if condition
     // ...
#elif condition2
    // ...
#endif

// Si la constante n'a pas été définie le fichier n'a jamais été inclu
#ifndef DEF_NOMDUFICHIER
    #define DEF_NOMDUFICHIER
#endif



    void swap(float *a, float *b) {
        float c;

        c = *a;
        *a = *b;
        *b = c;
    }