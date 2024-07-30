/// <reference types="vite/client" />

/** TODO 需要看看 新拓展名 如何声明类型 */
declare module '*.mdx' {}

interface Array<T> {
  /**
   * Determines whether an array includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this array at which to begin searching for searchElement.
   */
  includes(searchElement: unknown, fromIndex?: number): searchElement is T;
}
