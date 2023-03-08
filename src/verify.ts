/**
 * @author WMXPY
 * @namespace Locale
 * @description Verify
 */

import { LOCALE } from "./declare"

export const verifyLocale = (locale: string): boolean => {

    return Boolean(LOCALE[locale])
};
