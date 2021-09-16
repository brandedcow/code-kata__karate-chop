function kchop2(target, list) {
  // res is object to "pass by reference"
  let res = { index: -1 }, midIdx = Math.ceil(list.length / 2)

  kchop_rec(target, list, midIdx, res)

  return res.index
}

function kchop_rec(target, list, midIdx, res) {
  // if no elements, nothin to do
  if (list.length === 0) return

  // if one element, check if target is the element
  if (list.length === 1) {
    if (target === list[0]) {
      res.index = midIdx -1
    }
  }

  // check left
  if (target < list[midIdx]) {
    const listLeft = list.slice(0, midIdx)
    midIdx = Math.ceil(listLeft.length / 2)
    kchop_rec(target, listLeft, midIdx, res)
  }
  // check right
  else {
    const listRight = list.slice(midIdx)
    midIdx = Math.ceil(listRight.length / 2) + midIdx
    kchop_rec(target, listRight, midIdx, res)
  }
}

module.exports = kchop2