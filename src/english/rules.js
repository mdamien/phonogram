/**
 * Phonogram English rules
 * ========================
 *
 * Collecting the various rules used to produce a phonetic representation
 * of English words.
 */
import {compileRules, INITIAL, NEGATIVE} from '../helpers';

/**
 * Vowel definitions.
 */
export const A = 'a';
export const E = 'e';
export const I = 'i';
export const O = 'o';
export const U = 'u';
export const Y = 'y';
export const VOWELS = A + E + I + O + U + Y;

// The wall is either:
//   1) a consonant followed by a non-e vowel
//   2) two consonants
//   3) the end of the word preceded by an optional vowel
export const WALL = `(?:[^${VOWELS}][^${E}]|[^${VOWELS}]{2}|[^${VOWELS}]?$)`;
export const SOFT_WALL = `(?:[^${VOWELS}]{2}|[^${VOWELS}]?$)`;

/**
 * Most precise ruleset.
 */
export const POETIC_RULES = compileRules({

  //-- (a)
  //----------------------------------------------------------------------------
  a: [

    // Initial "any" is pronounced *ɛni*
    [/any/, 'ɛni', INITIAL],

    // Final "augh(a)n" is pronounced *ɔn*
    [/augha?n$/, 'ɔn'],

    // Final "asm" is pronounced *azʌm*
    [/asm$/, 'azʌm'],

    // Before "w(e)", "a" is pronounced *o*
    [/awe?/, 'o'],

    // Before "ll", "a" is pronounced *ɔ*
    [/a(?=ll|ls?$)/, 'o'],

    // Before "ai" & "ay" is pronounced *ɛj*
    [/ay$/, 'ɛ'],
    [/ai(?=r)/, 'ɛ'],
    [/a[iy]/, 'ɛj'],

    // Before "nd", "a" is pronounced *ɛ*
    [/a(?=ry)/, 'ɛ'],

    // Before a consonant & followed by a "e", "a" is pronounced *ɛj*
    [/a(?=[cgklmnpt]e)/, 'ɛj'],
    [/a(?=mi)/, 'ɛj', /./],

    // Before a wall, "a" is pronounced *a*
    [`a(?=${WALL})`, 'a'],

    // Else, "a" is pronounced *ɛ*
    [null, 'ɛ']
  ],

  //-- (b)
  //----------------------------------------------------------------------------
  b: [

    // Double "b" is squeezed
    ['bb', 'b'],

    // Final "ble" is pronounced *bʌl*
    [/bl(?=es?$)/, 'bʌl'],

    [null, 'b']
  ],

  //-- (c)
  //----------------------------------------------------------------------------
  c: [

    // "cester" is pronounced *stʌr*
    ['cester', 'stʌr'],

    // Initial "cu" is pronounced *kju*
    [/cu(?:e$)?/, 'kju', INITIAL],

    // "ch" is pronounced *tʃ*
    ['ch', 'tʃ'],

    // "ck" is pronounced *k*
    ['ck', 'k'],

    // Before some vowels, "c" is pronounced *s*
    [`c(?=[${E + I + Y}])`, 's'],

    [null, 'k']
  ],

  //-- (e)
  //----------------------------------------------------------------------------
  e: [

    // Final "er" is pronounced *ʌr*
    [/er(?=s?$)/, 'ʌr'],

    // Final "ese" is pronounced *iz*
    [/ese$/, 'iz'],

    // Final "ern" is prounounced *ʌrn*
    [/ern(?=s?$)/, 'ʌrn'],
    [/en(?=s?$)/, 'ʌn', 'v'],

    // Final "e" is seldom pronounced
    [/e$/, ''],
    [/es$/, 's', /t$/],
    [/es$/, 'iz', /[cs]$/],
    [/es$/, 'z'],

    // Sometimes, final "ed" does not pronounced "e"
    [/ed$/, 'd', /n$/],

    // Sometimes, in the middle of a word, the "e" can be silent
    [/e(?=s.)/, '', /[mt]/],

    // "ew" is pronounced *ju* or *u*
    ['ew', 'ju', /(?:[^k]|^)(?:ph|[bdfmn])/],
    ['ew', 'u'],

    // "eye" is pronounced *aj*
    ['eye', 'aj'],

    // "ee" is pronounced *i*
    ['ee', 'i'],

    // Final "ey" is pronounced *ɛ* after some consonants
    [/ey$/, 'ɛ', /(?:th|[bv])/],

    // "ea" is sometimes pronounced *ɛ*
    ['ea', 'ɛ', /(?:spr|[bdt]r|h)/],

    // "ea|ey" is pronounced *i*
    [/e[ay]/, 'i'],

    // "eipt" is pronounced *it*
    ['eipt', 'it'],

    // "eir" is pronounced *ɛr*
    ['eir', 'ɛr'],

    // "ei" is pronounced *i*
    ['ei', 'i'],

    // Before a final "t", "e" is prounounced *ɛ*
    [/e(?=ts?$)/, 'ɛ'],

    // Before doubled consonants, "e" is pronounced *ɛ*
    [/e(?=gg|ll|rr|ss|tt)/, 'ɛ'],

    // Before some consonants, "e" is pronounced *ɛ*
    [`e(?=qu(?!a)|st|[kln]|c[^${VOWELS}])`, 'ɛ'],
    [`e(?=m(?![${VOWELS}]))`, 'ɛ'],

    // Before "r", "e" is pronounced *ʌ*
    [/e(?=r(?!o))/, 'ʌ'],

    // Before "n" and some other consonants, "e" is pronounced *ɛ*
    // TODO: valid?
    [/en(?=[dt])/, 'ɛn'],

    // Else, "e" is pronounced *i*
    [null, 'i']
  ],

  //-- (f)
  //----------------------------------------------------------------------------
  f: [

    // Final "ful" is pronounced *ful*
    [/ful$/, 'ful'],

    // "ff" is squeezed
    ['ff', 'f'],

    [null, 'f']
  ],

  //-- (g)
  //----------------------------------------------------------------------------
  g: [

    // "gh" is pronounced *g*
    ['gh', 'g'],

    // "gg" is pronounced *g*
    ['gg', 'g'],

    // "gu" before some vowels
    [/gu(?=a)/, 'gw'],

    // Before some vowels "g" is pronounced *dʒ*
    [/geo(?=r)/, 'dʒɔ'],
    [/g(?=[ey])/, 'dʒ'],

    // Else "g" is pronounced *g*
    [null, 'g']
  ],

  //-- (i)
  //----------------------------------------------------------------------------
  i: [

    // Initial "i" before some consonants is pronounced *i*
    [/i(?=n)/, 'i', INITIAL],

    // Final "ify" is pronounced *ifaj*
    [/ify$/, 'ifaj'],

    // Final "ies" is pronounced *ajz*
    [/ies$/, 'ajz'],

    // Final "ind" is pronounced *ajnd* after some consonants
    [/ind/, 'ajnd', /(?:bl|gr|[bfkm])$/],

    // Final "ire" is pronounced *ajʌr*
    [/ire(?=s?$)/, 'ajʌr'],

    // "ight" is pronounced *ajt*
    ['ight', 'ajt'],

    // "ious" is pronounced *jʌs*
    ['ious', 'jʌs'],

    // Before a consonant and a vowel, "i" is pronounced *aj*
    [/i(?=ves?$)/, 'i', /[lt]/],
    [`i(?=[^${VOWELS}]e|o(?!u))`, 'aj'],

    // "i" before some vowels is pronounced *j*
    [/i(?=a|ou)/, 'j'],

    // "ie" is pronounced *i*
    ['ie', 'i'],

    // Else, "i" is pronounced *aj*
    [null, 'i']
  ],

  //-- (j)
  //----------------------------------------------------------------------------
  j: 'dʒ',

  //-- (k)
  //----------------------------------------------------------------------------
  k: [

    // "kn" is pronounced *n*
    ['kn', 'n'],

    [null, 'k']
  ],

  //-- (l)
  //----------------------------------------------------------------------------
  l: [

    // "ll" is squeezed
    ['ll', 'l'],

    [null, 'l']
  ],

  //-- (m)
  //----------------------------------------------------------------------------
  m: [

    // Double "m" is squeezed
    ['mm', 'm'],

    [null, 'm']
  ],

  //-- (n)
  //----------------------------------------------------------------------------
  n: [

    // Double "n" is squeezed
    ['nn', 'n'],

    [null, 'n']
  ],

  //-- (o)
  //----------------------------------------------------------------------------
  o: [

    // Final "omb" is pronounced *umb* after some letters
    [/omb(?=s?$)/, 'umb', /[tw]/],

    // Final "o" is pronounced *o*
    [/o$/, 'o'],

    // "ouse" is pronounced *aʊs* sometimes
    [/ous(?=[ei])/, 'aʊs', /[hm]/],

    // "ous" is pronounced *ʌs*
    [/ous/, 'ʌs'],
    [/ou(?=ce)/, 'ɔ'],

    // "oin" is generally pronounced *ɔjn*
    [/oin(?!g)/, 'ɔjn', 'her', NEGATIVE],

    // "ou" before "n" is pronounced *ʌ*
    [/ou(?=n)/, 'ʌ'],

    // "ow" is pronounced *o*
    ['ow', 'o'],

    // "oa" is pronounced *o*
    ['oa', 'o'],

    // "oo" is pronounced *o* if in "door" words
    ['oo(?=r)', 'ɔ', /^d/],

    // "oo" is pronounced *u*
    ['oo', 'u'],

    // "oy" is pronounced *ɔj*
    ['oy', 'ɔj'],

    // Before a wall, "o" is pronounced *ɔ*
    [/o(?=gr)/, 'o'],
    [`o(?=${SOFT_WALL}|[mr])`, 'ɔ', /e$/, NEGATIVE],

    // Else, "o" is pronounced *o*
    [null, 'o']
  ],

  //-- (p)
  //----------------------------------------------------------------------------
  p: [

    // "ph" is pronounced *f*
    ['ph', 'f'],

    [null, 'p']
  ],

  //-- (q)
  //----------------------------------------------------------------------------
  q: [

    // Final "que" is pronounced *k*
    [/que$/, 'k'],

    // "qu" is pronounced *kw*
    ['qu', 'kw'],

    // Else "q" is pronounced *k*
    [null, 'k']
  ],

  //-- (r)
  //----------------------------------------------------------------------------
  r: [

    // Double "r" is squeezed
    ['rr', 'r'],

    // In "rh", the "h" is silent
    ['rh', 'r'],

    [null, 'r']
  ],

  //-- (s)
  //----------------------------------------------------------------------------
  s: [

    // Final "shire" is pronounced *ʃʌr*
    [/shire$/, 'ʃʌr', /.$/],

    // "sc" before an "i" is pronounced *s*
    [/sc(?=i)/, 's'],

    // Double "s" is squeezed
    ['ss', 's'],

    // "stle" is pronounced "sʌl"
    [/stle(?=s?$)/, 'sʌl'],
    [/stl/, 'sl'],

    // "sh" is pronounced *ʃ*
    ['sh', 'ʃ'],

    // Plural "s" is sometimes pronounced *z*
    [/s$/, 'z', /(?:eye|ew|[bdlmnr])$/],

    // "between" two vowels, "s" is pronounced *z*
    [`s(?=[${VOWELS}])`, 'z', `[${A + I + O + U}]$`],

    [null, 's']
  ],

  //-- (t)
  //----------------------------------------------------------------------------
  t: [

    // Initial "th" for various words
    [/th(?=(?:emselves|emself|yself|eirs?|ese|ine|ose|at|ee|em|ey|is|y)$)/, 'ð', INITIAL],

    // Initial "thom"
    [/th(?=om)/, 't', INITIAL],

    // Initial "th" is usually pronounced *θ*
    [/th/, 'θ', INITIAL],

    // Final "two" is pronounced *tu*
    [/two$/, 'tu'],

    // "tch" is pronounced *tʃ*
    ['tch', 'tʃ'],

    // "tion" is pronounced *ʃʌn*
    ['tion', 'ʃʌn'],

    [null, 't']
  ],

  //-- (u)
  //----------------------------------------------------------------------------
  u: [

    // Leading "u" is sometimes pronounced *ju*
    [/u(?=niqu|nivers)/, 'ju', INITIAL],

    // "u" between some letters is pronounced *ju*
    // TODO

    // "ue" is pronounced *u* or *ju*
    ['ue', 'ju', /[bch]$/],
    ['ue', 'u'],

    // Before "m" or "n", "u" is pronounced *ʌ*
    [/u(?=[mn])/, 'ʌ'],

    [null, 'ʌ']
  ],

  //-- (w)
  //----------------------------------------------------------------------------
  w: [

    // "wh" is pronounced *w*
    ['wh', 'w'],

    // "wr" is pronounced *r*
    ['wr', 'r'],

    [null, 'w']
  ],

  //-- (y)
  //----------------------------------------------------------------------------
  y: [

    // Final "ye" is pronounced *aj*
    [/ye$/, 'aj'],

    // In a three letters or less word, "y" is pronounced *aj*
    [/y$/, 'aj', /^.{1,2}$/],

    // Before another vowel, "y" is pronounced *j*
    [/y(?=m[aei]|[ais])/, 'aj'],
    [`y(?=[${VOWELS}])`, 'j'],

    // As a vowel, "y" is pronounced *i*
    [null, 'i']
  ]
});
