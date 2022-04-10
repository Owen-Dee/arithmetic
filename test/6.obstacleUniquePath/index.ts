import { expect } from 'chai';
import { obstacleUniquePath } from '../../src/6.obstacleUniquePath';

// describe('1. Get obstacle unique path', () => {
//     it('1. m = 3, n = 3', () => {
//         const onstacleArr = [
//             [0, 0, 0],
//             [0, 1, 0],
//             [0, 0, 0]
//         ];
//         const res = obstacleUniquePath(onstacleArr);
//         expect(res).to.deep.equal(2);
//     });
// });

// describe('2. Get obstacle unique path', () => {
//     it('2. m = 2, n = 2', () => {
//         const onstacleArr = [
//             [0, 1],
//             [0, 0]
//         ];
//         const res = obstacleUniquePath(onstacleArr);
//         expect(res).to.deep.equal(1);
//     });
// });

describe('3. Get obstacle unique path', () => {
    it('3. m = 4, n = 4', () => {
        const onstacleArr = [
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0] 
        ];
        const res = obstacleUniquePath(onstacleArr);
        expect(res).to.deep.equal(12);
    });
});

// describe('4. Get obstacle unique path', () => {
//     it('4. m = 7, n = 7', () => {
//         const onstacleArr = [
//             [0, 0, 0, 0, 0, 1, 0],
//             [0, 0, 0, 0, 0, 0, 1],
//             [0, 0, 0, 0, 1, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0],
//             [1, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0] 
//         ];
//         const res = obstacleUniquePath(onstacleArr);
//         expect(res).to.deep.equal(680);
//     });
// });

const pricesList = [5,7,3,6,2,1,1];