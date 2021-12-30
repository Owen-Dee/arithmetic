import { expect } from 'chai';
import { palindrome } from '../../src/3.palindrome';

describe('1.Test palindrome', () => {
    it('1.abac', () => {
        const str = 'abac';
        const res = palindrome(str);
        console.log(`result: ${res}`);
        expect(res).to.equal('aba');
    });

    it('2.4556655423457', () => {
        const str = '4556655423457';
        const res = palindrome(str);
        console.log(`result: ${res}`);
        expect(res).to.equal('45566554');
    });

    it('3.ab', () => {
        const str = 'ab';
        const res = palindrome(str);
        console.log(`result: ${res}`);
        expect(res).to.equal('a');
    });

    it('4.a', () => {
        const str = 'a';
        const res = palindrome(str);
        console.log(`result: ${res}`);
        expect(res).to.equal('a');
    });
});