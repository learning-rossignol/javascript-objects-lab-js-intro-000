
function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]: v});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign(obj, {[k]: v});
}

var recipes = {};

function deleteFromObjectByKey(obj, k) {
  var new-obj = Object.assign({}, obj);
  delete new-obj[k];
  return new-obj;
}
