/**
 * @author WMXPY
 * @namespace Locale
 * @description Verify
 * @override Unit
 */

import { expect } from 'chai';
import { verifyIETFLocale, verifyPOSIXLocale } from '../../src';

describe('Given [Verify] helper methods', (): void => {

    it('should be able to verify ietf locale - happy path', (): void => {

        const verifyResult: boolean = verifyIETFLocale('en-US');

        expect(verifyResult).to.be.true;
    });

    it('should be able to verify posix locale - sad path', (): void => {

        const verifyResult: boolean = verifyPOSIXLocale('en_US');

        expect(verifyResult).to.be.true;
    });
});
