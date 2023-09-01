import { DequeRepository, DequeType} from './repositories/DequeRepository';

interface IDeque<T> {
    [key: number] : T
}

interface DequeTypeProps {
    name: string;
}
export class Deque extends DequeRepository<DequeTypeProps> {
    constructor( 
        protected count: number = 0,
        protected lowestCount: number = 0,
        protected items: IDeque<DequeTypeProps> = {},
    ){
        super();
    }

    addFront(element: DequeTypeProps): void {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    addBack(element: DequeTypeProps): void {
        this.items[this.count] =  element;
        this.count;
    }
    removeFront(): DequeType<DequeTypeProps> {
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack(): DequeType<DequeTypeProps> {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peekFront(): DequeType<DequeTypeProps> {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekBack(): DequeType<DequeTypeProps> {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count -1];
    }
    isEmpty(): boolean {
        return this.size() === 0;
    }
    size(): number {
        return this.count - this.lowestCount;
    }
    toString(): string {
        if (this.isEmpty()) {
            return '';
        }
      
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString; 
    }
}

const deque = new Deque();

console.log(deque);
