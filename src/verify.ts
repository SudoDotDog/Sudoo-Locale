/**
 * @author WMXPY
 * @namespace Locale
 * @description Verify
 */

import { LOCALE } from "./declare";

export const verifyLocale = (locale: string): locale is LOCALE => {

    return Object.values(LOCALE)
        .includes(locale as any);
};
