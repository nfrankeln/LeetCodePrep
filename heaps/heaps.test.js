
const { describe } = require("node:test");
const { Heap } = require("./heaps");

describe('#Heap Helper Methods', ()=>{

    test('getParentIndex',()=>{
        let heap = new Heap()
        let index = heap.getParentIndex(3)
        expect(index).toBe(1)
    })

    test('getLeftChildIndex',()=>{
        let heap = new Heap()
        let index = heap.getLeftChildIndex(3)
        expect(index).toBe(7)
    })

    test('getRightChildIndex',()=>{
        let heap = new Heap()
        let index = heap.getRightChildIndex(3)
        expect(index).toBe(8)
    })

    test('hasParent',()=>{
        let heap = new Heap()
        let boolean = heap.hasParent(3)
        expect(boolean).toBe(true)
    })
    
})