function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function alexSays() {
    return "gym time"
  }
}

function returnsAnAnonymousFunction() {
  return function() { return "gym time"};
}
