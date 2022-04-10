import { getStockMaxValue } from '../../src/7.stock/index';
import { expect } from 'chai';

describe('getStockMaxValue:', () => {
    it ('1.expect [7,1,5,3,6,4], result: 5', () => {
        const arr = [7,1,5,3,6,4];
        const result = getStockMaxValue(arr);
        expect(result).to.deep.equal(5);
    });

    it ('2.expect [7,6,4,3,1], result: 0', () => {
        const arr = [7,6,4,3,1];
        expect(getStockMaxValue(arr)).to.deep.equal(0);
    });
});
