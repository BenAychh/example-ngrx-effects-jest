/* tslint:disable */
import "jest-preset-angular";
import "./jestGlobalMocks";

const WARN_SUPPRESSING_PATTERNS = [/because Hammer.JS is not loaded/];

const warn = console.warn;

Object.defineProperty(console, "warn", {
  value: (...params: string[]) => {
    if (!WARN_SUPPRESSING_PATTERNS.some(pattern => pattern.test(params[0]))) {
      warn(...params);
    }
  }
});
