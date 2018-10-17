function binarySearch (list, value) {
    // initial values for start, middle and end
    let start = 0
    let stop = list.length - 1
    let middle = Math.floor((start + stop) / 2)
  
    // While the middle is not what we're looking for and the list does not have a single item
    while (list[middle] !== value && start < stop) {
      if (value < list[middle]) {
        stop = middle - 1
      } else {
        start = middle + 1
      }
  
      // recalculate middle on every iteration
      middle = Math.floor((start + stop) / 2)
    }
  
    // if the current middle item is what we're looking for return it's index, else return -1
    return (list[middle] !== value) ? -1 : middle
  }
  
  const list = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200]

  const list1 = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200]
  console.log(binarySearch(list, 99))
  console.log(binarySearch(list1, 1))
  
  //Time coplexity for Binary search is Big O(1), since it goes though each element meaning that the space taken by the algorithm is the same for any number of elements in the array.


  