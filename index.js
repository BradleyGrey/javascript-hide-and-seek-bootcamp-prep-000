function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.getElementsByClassName(`target`)[0]
}
function deepestChild() {
  return document.querySelector(`#grand-node div div div div`)
}
function increaseRankBy(n) {
  var ranks = document.getElementById(`app`).querySelectorAll('ul.ranked-list li')
  for (let i = 0, 1 = ranks.length; i < 1; i++)
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n 
}