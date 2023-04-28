const { addItemToMap, removeItemFromMap, maximumSubarraySum } = require('./2461-Medium-Maximum_Sum_of_Distinct_Subarrays_With_Length_K')

describe("#addItemToMap",()=>{
    test("add a single item to a map",()=>{
        let map1 = new Map()
        let map2 =new Map()
        addItemToMap(map1,1)
        map2.set(1,1)
        expect(map1).toEqual(map2)
      
    })

    test("increment map", ()=>{
        let map1 = new Map()
        addItemToMap(map1,1)
        addItemToMap(map1,1)
        let map2 =new Map([[1,2]])
        expect(map1).toEqual(map2)
    })
})

describe("#removeItemFromMap",()=>{
    test('decrent existing item', ()=>{
        const map1 = new Map([[1, 2], [2, 1]])
        removeItemFromMap(map1, 1)
        const map2 = new Map([[1, 1], [2, 1]])
        expect(map1).toEqual(map2)
    })
    test('delete item if value is one',()=>{
        const map1 = new Map([[1, 2], [2, 1]])
        removeItemFromMap(map1, 2)
        const map2 = new Map([[1, 2]])
        expect(map1).toEqual(map2)
    })
})

describe('#Maximum Sum of distinct subbarays with length k',()=>{
    test('K is greater the length of array',()=>{
        let nums = [1]
        let k = 3
        expect(maximumSubarraySum(nums,k)).toEqual(0)
    })
    test('handle multiple elements',()=>{
        let nums = [1,2,3,10,4,6,5,6]
        let k = 3
        expect(maximumSubarraySum(nums,k)).toEqual(20)
    })

    test('handle duplicate elements',()=>{
        let nums = [1,1,1,9,2,2,1]
        let k = 3
        expect(maximumSubarraySum(nums,k)).toEqual(12)
    })
    
})