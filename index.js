
function updateObjectWithKeyAndValue(obj, k, v) {
  Object.assign(obj, {[k]: v});
  return obj;
}
