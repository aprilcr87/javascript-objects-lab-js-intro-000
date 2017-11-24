var recipes = {Salad: 'romaine lettuce'};

function updateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
  return object;
}
updateObjectWithKeyAndValue(recipes, Tomatoes, '1 cup');
