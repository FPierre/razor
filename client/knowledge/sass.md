# SASS

## Articles

* [Inception rule](http://thesassway.com/beginner/the-inception-rule)

* [Taking control of the cascade](https://signalvnoise.com/posts/3003-css-taking-control-of-the-cascade)

* [Beware selector nesting SASS](http://www.sitepoint.com/beware-selector-nesting-sass)

* [Handy advanced SASS](http://12devs.co.uk/articles/handy-advanced-sass)

## Utilitaires

* L'option `--time` de `watch` permet d'afficher le temps de compilation

* La gem Ruby [css_parser](https://rubygems.org/gems/css_parser) permet d'afficher des statistiques sur les fichiers CSS compilés
 * Installation `gem install css_parser`
 * Utilisation `compass stats path_to_sass`

* [Compilateur SASS](http://sassmeister.com)

## Best practices

*Dans le cadre d'une utilisation avec Bootstrap*

* Essayer autant que possible de construire le SASS autour des features/zones plutôt que structuré autour du DOM. Cette technique permet d'éviter l'inception rule (cf. [ l'article ci-dessus sur l'inception rule](http://thesassway.com/beginner/the-inception-rule). L'assignation des id/class globales aux features/zones est une des possibilité pour y parvenir

* Limiter l'impact des modifications des margin et padding

```css  
margin-top: 40px; // Bon : ne modifie que le top

margin: 40px auto; // Mauvais : modifie les margin gérées par Bootstrap
```

* En cas de suppression d'un margin ou padding, le commenter `// Reset`

* Limiter **au maximum** l'utilisation de la directive `!important` 

* Déclarer les `@extend` et `@include` en début d'imbrication

* Les mixins Bootstrap n'ont pas forcément le même comportement que les classes natives Bootstrap

```css
@extend .col-sm-12; //

@include make-sm-column(12); //
```
