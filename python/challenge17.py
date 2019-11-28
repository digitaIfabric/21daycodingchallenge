def judgeVegetable(vegetables, metric):
  value = 0;
  name = ""
  for veg in vegetables:
    if (metric == "redness"):
      if (veg["redness"] > value):
        name = veg["submitter"]
        value = veg["redness"]
    if (metric == "plumpness"):
      if (veg["plumpness"] > value):
        name = veg["submitter"]
        value = veg["plumpness"]
  return name

# vegetables = [ { "submitter": 'Old Man Franklin', "redness": 10, "plumpness": 5 }, { "submitter": 'Sally Tomato-Grower', "redness": 2, "plumpness": 8 }, { "submitter": 'Hamid Hamidson', "redness": 4, "plumpness": 3 } ]
# metric = "plumpness"
# judgeVegetable(vegetables, metric)
