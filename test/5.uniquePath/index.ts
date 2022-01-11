import { expect } from 'chai';
import { uniquePath } from '../../src/5.uniquePath';

describe('1. Get unique path', () => {
    it('1. m = 3, n = 3, res: 6', () => {
        const m = 3;
        const n = 3;
        const res = uniquePath(m, n);
        expect(res).to.equal(6);
    });

    it('2. m = 3, n = 7, res: 28', () => {
        const m = 3;
        const n = 7;
        const res = uniquePath(m, n);
        expect(res).to.equal(28);
    });

    it('3. m = 7, n = 3, res: 28', () => {
        const m = 7;
        const n = 3;
        const res = uniquePath(m, n);
        expect(res).to.equal(28);
    });

    it('4. m = 7, n = 7, res: 924', () => {
        const m = 7;
        const n = 7;
        const res = uniquePath(m, n);
        expect(res).to.equal(924);
    });
});