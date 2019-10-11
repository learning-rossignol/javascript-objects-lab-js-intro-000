
function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]: v});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign(obj, {[k]: v});
}
