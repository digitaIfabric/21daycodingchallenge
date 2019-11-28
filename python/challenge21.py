def chooseRecipe(bakeryA, bakeryB, recipes):
  foundA = False
  foundB = False
  for R in recipes:
    for i in range(0, len(R["ingredients"])): 
      for A in bakeryA:
        if (A == R["ingredients"][i]):
          foundA = True
      for B in bakeryB:
        if (B == R["ingredients"][i]):
          foundB = True

      if (foundA and foundB):
        return R["name"]
  foundA = False
  foundB = False

# bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
# bakeryB = ['milk', 'butter', 'cream cheese']
# recipes = [ { 'name': 'Coconut Sponge Cake', 'ingredients': ['coconut', 'cake base'] }, { 'name': 'Persian Cheesecake', 'ingredients': ['saffron', 'cream cheese'] }, { 'name': 'Custard Surprise', 'ingredients': ['custard', 'ground beef'] } ]
# chooseRecipe(bakeryA, bakeryB, recipes)
