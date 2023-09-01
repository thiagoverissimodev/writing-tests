export abstract class DequeRepository<T> {
  abstract addFront(element: T): void; 
  abstract isEmpty(): boolean; 
  abstract addBack(element: T): void; 
  abstract size(): number; 
  abstract removeFront(): DequeType<T>; 
  abstract removeBack(): DequeType<T>; 
  abstract peekFront(): DequeType<T>; 
  abstract peekBack(): DequeType<T>; 
  abstract peekBack(): DequeType<T>; 
  abstract toString(): string; 
}

export type DequeType<T> = T | null | undefined;