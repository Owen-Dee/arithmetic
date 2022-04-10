import { getStockMaxValue } from '../../src/7.stock/index3';
import { expect } from 'chai';

describe('getStockMaxValue:', () => {
    it ('1.expect [3,3,5,0,0,3,1,4], result: 6', () => {
        const arr = [3,3,5,0,0,3,1,4];
        const result = getStockMaxValue(arr);
        expect(result).to.deep.equal(6);
    });

    it ('1.expect [1,2,3,4,5], result: 4', () => {
        const arr = [1,2,3,4,5];
        const result = getStockMaxValue(arr);
        expect(result).to.deep.equal(4);
    });

    it ('2.expect [7,6,4,3,1], result: 0', () => {
        const arr = [7,6,4,3,1];
        expect(getStockMaxValue(arr)).to.deep.equal(0);
    });
});
