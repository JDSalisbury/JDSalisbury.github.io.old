function functionNameThing() {
  const xarray = {};


  x = 3; // wont work
  x = 'asdsa' // bad

  x.z = 5; // legal!   // Java myMap.set('x', 5)
  x = {}; // NO


  console.log(JSON.stringify(x)) //  { z: 5 }
}

const myVar = 'keyname'

const myBagOfGarbage = {
  [myVar]: 42,
  'anyword': 4,
  'efewgg': 'hello'
  foo: [1,2,4,5, function() { console.log('hey der') }]
  bar: function() { console.log('hey der') }
}

myBagOfGarbage['keyname'] // 42





$('#elementId').attr('data-key', myKey) ==

// vanilla js
document.querySelector('#elementId').setAttribute('data-key', myKey)
