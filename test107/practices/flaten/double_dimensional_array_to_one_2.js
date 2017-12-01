'use strict';

var to_one = require("./double_dimensional_array_to_one_1");

function double_to_one(collection) {

  //在这里写入代码
  let one_collection = to_one(collection);

  let result = one_collection.filter(function(element, index, self){
      return self.indexOf(element) == index;
  })
  return result;
}


module.exports = double_to_one;