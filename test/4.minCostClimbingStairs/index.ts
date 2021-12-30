import { expect } from 'chai';
import { getMinCostClimbingStairs } from '../../src/4.minCostClimbingStairs';

describe('1. Min cost climbing stairs', () => {
    it('1. [10, 15, 20]: min cost is 15', () => {
        const costs = [10, 15, 20];
        const res = getMinCostClimbingStairs(costs);
        if (res) {
             expect(res).to.equal(15);
        }
    });

    it('2. [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]: min cost is 6', () => {
        const costs = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        const res = getMinCostClimbingStairs(costs);
        if (res) {
            expect(res).to.equal(6);
        }
    });
});