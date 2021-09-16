function kchop3(target, list) {
  let left = 0, right  = list.length - 1, mid

  while (left <= right) {
    mid = Math.floor( (left + right) / 2 )
    if (list[mid] < target) {
      left = mid + 1
    } else if (list[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }

  return -1
}

module.exports = kchop3