/**
 * @author WMXPY
 * @namespace Locale
 * @description Verify
 */

import { IETF_LOCALE } from "./ietf";
import { POSIX_LOCALE } from "./posix";

export const verifyIETFLocale = (locale: string): locale is IETF_LOCALE => {

    return Object.values(IETF_LOCALE)
        .includes(locale as any);
};

export const verifyPOSIXLocale = (locale: string): locale is POSIX_LOCALE => {

    return Object.values(POSIX_LOCALE)
        .includes(locale as any);
};
