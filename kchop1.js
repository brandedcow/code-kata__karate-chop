function kchop1(target, list) {
  let foundIdx = -1,
      beginIdx = 0, 
      endIdx = list.length -1,
      subList = list.slice(beginIdx, endIdx + 1),
      midIdx = Math.ceil((endIdx - beginIdx) / 2),
      midpoint = subList[midIdx]

  // If list length is one save time by checking if target is there
  if (list.length === 1) {
    return target === list[0] ? 0 : -1
  }

  // sublist length halved each time, loop until length is 2
  while (subList.length > 2) {
    subList = list.slice(beginIdx, endIdx + 1)
    midIdx = Math.ceil((endIdx - beginIdx) / 2)
    midpoint = subList[midIdx]

    if (midpoint === target) {
      foundIdx = midIdx
    } else if (midpoint > target) {
      endIdx = midIdx 
    } else {
      beginIdx = midIdx
    }
  }

  // if target is not within the last two elements, not found
  if (subList.length == 2) {
    if (target === subList[0]) {
      return beginIdx
    } else if (target === subList[1]) {
      return endIdx
    }
  }

  return foundIdx
}

module.exports = kchop1