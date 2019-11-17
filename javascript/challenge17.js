const judgeVegetable = (vegetables, metric) => {
  return vegetables.reduce((pickedVegetable, vegetable) =>
    pickedVegetable[metric] > vegetable[metric] ? pickedVegetable : vegetable
  ).submitter;
}
