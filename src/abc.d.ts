declare interface Ref<T = any> {
  value: T;
  /**
   * Type differentiator only.
   * We need this to be in public d.ts but don't want it to show up in IDE
   * autocomplete, so we use a private Symbol instead.
   */
  [RefSymbol]: true;
  /* Excluded from this release type: _shallow */
}

declare interface IMethods {
  [propName: string]: Function
}

// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }

declare module 'dyNumber'