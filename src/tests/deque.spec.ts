import { Deque } from '../deque';

// test('should add front', () => { 
//     const deque = new Deque();
//     expect(deque.addFront(55)).toBe(deque.items[0]);
// });

test('should isEmpty return true or false', () => { 
    const deque = new Deque();
    expect(deque.isEmpty()).toBe(true || false);
});
test('should size return the quantity in list', () => { 
    const deque = new Deque();
    expect(deque.size()).toBeGreaterThanOrEqual(0);
});