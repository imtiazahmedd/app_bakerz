let cities = {
  karachi: [['2015-12-1', 40000], ['2014-12-1', 35000], ['2013-12-1', 30000]],
  lahor: [['2015-12-1', 62000], ['2014-12-1', 45000], ['2013-12-1', 25000]],
  multan: [['2015-12-1', 60000], ['2014-12-1', 45000], ['2013-12-1', 25000]]
 
}

// Group By Date
const map = new Map();
let groupBy = (populations, len) => {
  populations.forEach((record) => {
    if(!map.has(record[0])){
    	map.set(record[0], [record[1]])
    } else {
      map.get(record[0]).push(record[1])
    }
  })
  return map;
}

// Making Heading For Table
let headings = ['year'];
let groupedResult;
for(let heading in cities){
	headings.push(heading)
  groupedResult = groupBy(cities[heading])
}

// Mergining All Togather
let finalResult = [[...headings]];
groupedResult.forEach((value, key) => {
	finalResult.push([key, ...value])
})

// Populating to console
console.table(finalResult)
