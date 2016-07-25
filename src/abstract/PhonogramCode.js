/**
 * Phonogram Code Abstract
 * ========================
 *
 * Class used to build the phonetic code while applying the substitution
 * rule but also keeping track of the applied substitutions so one could
 * hypothetically go back to the original chain. This is necessary, for
 * instance, if one wants to use the phonetic representation of a given
 * string to syllabify it.
 */

/**
 * Function returning all the matches of a regular expression over the given
 * string.
 *
 * @param  {RegExp} pattern - The regular expression to apply.
 * @param  {string} string  - The string to match.
 * @return {array}          - An array of matches.
 */
export function findall(pattern, string) {
  const matches = [];

  let match;
  while (match = pattern.exec(string))
    matches.push(match);

  // Resetting state of the Regex for safety
  pattern.lastIndex = 0;

  return matches;
}

/**
 * Phonogram Code class.
 *
 * @constructor
 * @param {string} word - The word to encode.
 */
export default class PhonogramCode {
  constructor(word = '') {

    // Properties
    this.word = word;
    this.normalizedWord = word.toLowerCase();
    this.mapping = [];

    for (let i = 0, l = this.normalizedWord.length; i < l; i++) {
      const character = this.normalizedWord[i];
      this.mapping.push([character, character]);
    }
  }

  /**
   * Method used to apply a substitution rule and keeping track of it within
   * the state of the code.
   *
   * @param  {RegExp}        pattern     - Pattern to find.
   * @param  {string}        replacement - Replacement if pattern is found.
   * @return {PhonogramCode}             - Returns itself for chaining purposes.
   */
  replace(pattern, replacement) {
    const matches = findall(pattern, this.normalizedWord);

    if (!matches.length)
      return this;

    // Solving matches in reverse order
    for (let i = matches.length - 1; i >= 0; i--) {
      const match = matches[i],
            index = match.index,
            offset = index + match[0].length;

      for (let j = index; j < offset; j++)
        this.mapping[j][1] = (j === index) ? replacement : '';
    }

    return this;
  }

  /**
   * Method used to retrieve the produced code.
   *
   * @return {string} - The code.
   */
  get() {
    let code = '';

    for (let i = 0, l = this.mapping.length; i < l; i++)
      code += this.mapping[i][1];

    return code;
  }
}
