const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let R of recipes){
    const A = ~bakeryA.indexOf(R.ingredients[0])
    const Y = ~bakeryA.indexOf(R.ingredients[1])
    const B = ~bakeryB.indexOf(R.ingredients[0])
    const Z = ~bakeryB.indexOf(R.ingredients[1])
    if ((A || Y)  && (B || Z)) {
      return R.name;
    }
  }
}
