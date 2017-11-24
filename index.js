var recipes = {Salad: 'romaine lettuce'};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
updateObjectWithKeyAndValue(recipes, Tomatoes, '1 cup');

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}
updateObjectWithKeyAndValue(Toppings, Cheese, '1/2 cup');

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, Sides, 'Cranberries');

function deleteFromObjectByKey(object, key){
  return delete recipes.sides;
}
deleteFromObjectByKey();
