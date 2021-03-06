import { getTwoSumIndex, getTwoSumIndex2 } from '../../src/1.targetSum/index';
import { expect } from 'chai';

describe('getTwoSumIndex: Get two number index:', () => {
    it ('1.expect [1, 2, 3, 4, 5 , 6] two numbers sum is 6, result: [0, 4]', () => {
        const arr = [1, 2, 3, 4, 5 , 6];
        const result = getTwoSumIndex(arr, 6);
        expect(result).to.deep.equal([0, 4]);
    });

    it ('2.expect [1, 2, 3] two numbers sum is 6, result: null', () => {
        const arr = [1, 2, 3];
        expect(getTwoSumIndex(arr, 6)).to.deep.equal(null);
    });

    it ('3.expect [1, 2, 3, 4, 5 , 6, 7, 8] two numbers sum is 13, result: [4, 7]', () => {
        const arr = [1, 2, 3, 4, 5 , 6, 7, 8];
        expect(getTwoSumIndex(arr, 13)).to.deep.equal([4, 7]);
    });

    it ('4.expect [1, 2, 3, 4, 5 , 6, 7, 8] two numbers sum is 13, result not: [2, 5]', () => {
        const arr = [1, 2, 3, 4, 5 , 6, 7, 8];
        expect(getTwoSumIndex(arr, 13)).to.not.deep.equal([2, 5]);
    });
});

describe('getTwoSumIndex2: Get two number index:', () => {
    it ('1.expect [1, 2, 3, 4, 5 , 6] two numbers sum is 6', () => {
        const arr = [1, 2, 3, 4, 5 , 6];
        const result = getTwoSumIndex2(arr, 6);
        let sum = 0;
        if (result) {
            console.log(result);
            sum = arr[result[0]] + arr[result[1]];
        }
        expect(sum).to.equal(6);
    });

    it ('2.expect [1, 2, 3] two numbers sum is 6, result: null', () => {
        const arr = [1, 2, 3];
        const result = getTwoSumIndex2(arr, 6);
        expect(result).to.deep.equal(null);
    });

    it ('3.expect [1, 2, 3, 4, 5 , 6, 7, 8] two numbers sum is 13', () => {
        const arr = [1, 2, 3, 4, 5 , 6, 7, 8];
        const result = getTwoSumIndex2(arr, 13);
        let sum = 0;
        if (result) {
            console.log(result);
            sum = arr[result[0]] + arr[result[1]];
        }
        expect(sum).to.equal(13);
    });
});