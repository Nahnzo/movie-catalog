export const getOnlyUniqMoviesLength = (array) => {
  let uniqueObjects = [];
  let uniqueIDs = {};
  for (var i = 0; i < array.length; i++) {
    var currentObject = array[i];
    var currentID = currentObject.id;
    if (!uniqueIDs[currentID]) {
      uniqueObjects.push(currentObject);
      uniqueIDs[currentID] = true;
    }
  }

  return uniqueObjects.length;
};
