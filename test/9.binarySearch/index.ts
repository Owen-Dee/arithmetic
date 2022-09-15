import { expect } from 'chai';
import { binarySearch } from '../../src/9.binarySearch/index';

describe('binarySearch:', () => {
    it ('1.nums = [-1,0,3,5,9,12], target: 9, result: 4', () => {
        debugger
        const arrs = [-1,0,3,5,9,12];
        const target = 9;
        const result = 4;
        expect(binarySearch(arrs, target)).to.be.equal(result);
    });

    it ('1.nums = [-1,0,3,5,9,12], target: 3.5, result: -1', () => {
        debugger
        const arrs = [-1,0,3,5,9,12];
        const target = 3.5;
        const result = -1;
        expect(binarySearch(arrs, target)).to.be.equal(result);
    });
});
