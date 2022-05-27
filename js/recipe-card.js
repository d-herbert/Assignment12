class Recipe {
    constructor(title, servings, ingredients) {
    this.title = title
    this.servings = servings
    this.ingredients = ingredients
    }

    print_recipe = function() {
        console.log(`${this.title}` + '\n' +`Serves: ${this.servings}` + '\n' +'Ingredients:' + '\n')
        for (var i=0; i<this.ingredients.length; i++){
            console.log('-' + this.ingredients[i] + '\n')
        } 
    }
}

const a = new Recipe(title='Guacamole', servings=4, ingredients=['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'])
a.print_recipe()
