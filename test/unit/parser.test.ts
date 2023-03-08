/**
 * @author WMXPY
 * @namespace Locale
 * @description Verify
 * @override Unit
 */

import { expect } from 'chai';
import { verifyLocale } from '../../src';

describe('Given [Verify] helper methods', (): void => {

    it('should be able to verify locale - happy path', (): void => {

        const verifyResult: boolean = verifyLocale('en_US');

        expect(verifyResult).to.be.true;
    });
});
