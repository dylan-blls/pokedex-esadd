// Ce fichier est une sorte d'usine à Pokémons, elle permet de les créer, de faire de la prog orientée objet

export class Pokemon {
    // Propriétés d'un pokémon
    id;
    name;
    sprite;
    types;
    description;
    moves;
    sound;

    // Dans la parenthèse, les paramètres qu'on va passer. ça n'a pas forcément le même nom que les propriétés au-dessus
    // Constructeur de la classe Pokémon, qui peut être mis en commentaire
    constructor(anId, aName, aSprite, types, aDesc, moves, aSound) {
        // On associe les paramètres aux propriétés
        this.id = anId;
        this.name = aName;
        this.sprite = aSprite;
        this.types = types;
        this.description = aDesc;
        this.moves = moves;
        this.sound = aSound;
    }
}