function kchop4(target, list) {
  let left = 0, right = list.length - 1, mid

  while (left !== right) {
    mid = Math.ceil( (left + right) / 2 )
    if (list[mid] > target) {
      right = mid - 1
    } else {
      left = mid
    }
  }

  return list[left] === target ? left : -1
}

module.exports = kchop4