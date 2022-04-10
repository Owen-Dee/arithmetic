import { getStockMaxValue } from '../../src/7.stock/index4';
import { expect } from 'chai';

describe('getStockMaxValue:', () => {
    // it ('1.expect prices=[2,4,1], k = 2, result: 2', () => {
    //     const arr = [2,4,1];
    //     const result = getStockMaxValue(arr, 2);
    //     expect(result).to.deep.equal(2);
    // });

    // it ('1.expect prices=[3,2,6,5,0,3], k=2, result: 7', () => {
    //     const arr = [3,2,6,5,0,3];
    //     const result = getStockMaxValue(arr, 2);
    //     expect(result).to.deep.equal(7);
    // });

    it ('1.expect prices=[3,3,5,0,0,3,1,4], k=2, result: 6', () => {
        const arr = [3,3,5,0,0,3,1,4];
        const result = getStockMaxValue(arr, 2);
        debugger
        expect(result).to.deep.equal(6);
    });
});
