import { expect } from 'chai';
import { SingleList, TwoNumberSum } from '../../src/2.twoNumberSum';

describe('1.Get single list value:', () => {
    it ('1.[3, 4, 6]', () => {
        const arr = [3, 4, 6];
        const sl = new SingleList();
        arr.forEach((item) => {
            sl.insert(item);
        });
        const res = sl.get();
        expect(res).to.deep.equal([3, 4, 6]);
    });

    it ('1.[8, 5, 9]', () => {
        const arr = [8, 5, 9];
        const sl = new SingleList();
        arr.forEach((item) => {
            sl.insert(item);
        });
        const res = sl.get();
        expect(res).to.deep.equal([8, 5, 9]);
    });
});

describe('2.Two number add:', () => {
    it ('1.[3, 4, 6], [8, 5, 9]', () => {
        const arr = [3, 4, 6];
        const sl1 = new SingleList();
        arr.forEach((item) => {
            sl1.insert(item);
        });

        const arr1 = [8, 5, 9];
        const sl2 = new SingleList();
        arr1.forEach((item) => {
            sl2.insert(item);
        });

        const TWS = new TwoNumberSum();
        const listResult = TWS.add(sl1, sl2);
        const res = listResult.get();
        expect(res).to.deep.equal([1, 0, 6, 1]);
    });

    it ('2.[2,4,3], [5,6,4]', () => {
        const arr = [2,4,3];
        const sl1 = new SingleList();
        arr.forEach((item) => {
            sl1.insert(item);
        });

        const arr1 = [5,6,4];
        const sl2 = new SingleList();
        arr1.forEach((item) => {
            sl2.insert(item);
        });

        const TWS = new TwoNumberSum();
        const listResult = TWS.add(sl1, sl2);
        const res = listResult.get();
        expect(res).to.deep.equal([7, 0, 8]);
    });
});