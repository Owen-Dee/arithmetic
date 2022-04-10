/**
 *给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

 * 两个链表对应的节点数字相加
 */

class NumberNode {
    public data: number;
    public next: NumberNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class SingleList {
    public head: NumberNode | null;
    public tail: NumberNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data: number) {
        const node = new NumberNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    get() {
        if (!this.head) {
            return;
        }

        const result = [];
        let node = this.head;
        while(node) {
            result.push(node.data);
            console.log(`${node.data}`);
            node = node.next;
        }
        return result;
    }
}

class TwoNumberSum {
    public result: SingleList;
    constructor() {
        this.result = new SingleList();
    }

    add(sl1: SingleList, sl2: SingleList) {
        if (!sl1 || !sl2) {
            return;
        }
        let slNode1 = sl1.head;
        let slNode2 = sl2.head;
        let carry: number = 0;
        while(slNode1 || slNode2) {
            let num1 = slNode1 ? slNode1.data : 0;
            let num2 = slNode2 ? slNode2.data : 0;
            let sum = num1 + num2 + carry;
            let value = sum % 10;
            carry = Math.floor(sum / 10);
            const node = new NumberNode(value);
            if (!this.result.head) {
                this.result.head = node;
                this.result.tail = node;
            } else {
                this.result.tail.next = node;
                this.result.tail = node;
            }
            if (slNode1) {
                slNode1 = slNode1.next;
            }

            if (slNode2) {
                slNode2 = slNode2.next;
            }
        }

        if (carry > 0) {
            const node = new NumberNode(carry);
            this.result.tail.next = node;
            this.result.tail = node;
        }

        return this.result;
    }
}

export {
    SingleList,
    TwoNumberSum
}