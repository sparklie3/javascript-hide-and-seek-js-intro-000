function getFirstSelector(selector) {
  var value = document.querySelector(selector);
  return(value)
}

function nestedTarget() {
  var value = document.getElementById('nested').querySelector('div.target');
  return(value)
}

function deepestChild() {
  let newObject = document.getElementById('grand-node');
  let newArray = document.getElementById('grand-node').querySelectorAll('div');
  let deepestValue = (newArray[newArray.length-1].innerHTML).toString();
  return(newArray[newArray.length-1])
}

function increaseRankBy(n) {
  const array = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < array.length; i++) {
    array[i].innerHTML = (parseInt(array[i].innerHTML)+n).toString()
  }
}
