import SequentialContainer from './Base/index';
import { ContainerIterator, initContainer } from "../ContainerBase/index";
export declare class LinkNode<T> {
    value: T | undefined;
    pre: LinkNode<T> | undefined;
    next: LinkNode<T> | undefined;
    constructor(element?: T);
}
export declare class LinkListIterator<T> extends ContainerIterator<T> {
    protected node: LinkNode<T>;
    private readonly header;
    pre: () => this;
    next: () => this;
    constructor(node: LinkNode<T>, header: LinkNode<T>, iteratorType?: boolean);
    get pointer(): T;
    set pointer(newValue: T);
    equals(obj: LinkListIterator<T>): boolean;
    copy(): LinkListIterator<T>;
}
declare class LinkList<T> extends SequentialContainer<T> {
    private header;
    private head;
    private tail;
    constructor(container?: initContainer<T>);
    clear(): void;
    begin(): LinkListIterator<T>;
    end(): LinkListIterator<T>;
    rBegin(): LinkListIterator<T>;
    rEnd(): LinkListIterator<T>;
    front(): T | undefined;
    back(): T | undefined;
    forEach(callback: (element: T, index: number) => void): void;
    getElementByPos(pos: number): T;
    eraseElementByPos(pos: number): void;
    eraseElementByValue(value: T): void;
    eraseElementByIterator(iter: LinkListIterator<T>): LinkListIterator<T>;
    pushBack(element: T): void;
    popBack(): void;
    setElementByPos(pos: number, element: T): void;
    insert(pos: number, element: T, num?: number): void;
    find(element: T): LinkListIterator<T>;
    reverse(): void;
    unique(): void;
    sort(cmp?: (x: T, y: T) => number): void;
    /**
     * @description Push an element to the front.
     * @param element The element you want to push.
     */
    pushFront(element: T): void;
    /**
     * @description Removes the first element.
     */
    popFront(): void;
    /**
     * @description Merges two sorted lists.
     * @param list The other list you want to merge (must be sorted).
     */
    merge(list: LinkList<T>): void;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
export default LinkList;
