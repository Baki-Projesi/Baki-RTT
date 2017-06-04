/*
TODO:
Codes:
- fix 'eyi' issue
- identify Turkish, Arabic, or Persian

UI:
- highlight selected option
- change menu so the user has to select the keyboard that they are using first
- add a menu for whether or not line numbers should be included
*/

/*
dropdownOrder:
-1 - not in the dropdown
0 - default
1 - combinations (other than tanwin and special cases)
2 - remaining single characters
3 - double characters, sheddah, and special combo options tied to one character
4 - special characters
5 - ?

needsDisambiguation:
true - dropdown present
false - no dropdown needed

comboCategory:
'tanwin'
'hamza'
'izafet'
'special'
'sun'
'double'
'sheddah'
'charCombo' - special combo option tied to one character
'sukun' - no vowel marking for consonants
null

charLanguage:
'arabic'
'persian'
'turkish'
null
*/

export const englishKeyboardDisambiguations = {
    ' ': [
        {
            turkishText: ' ',
            arabicText: ' ',
            code: 'sp',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'b': [
        {
            turkishText: 'b',
            arabicText: 'ب',
            code: 'b',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'b',
            arabicText: 'بْ',
            code: 'b2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'p', // at the end of the word, automatically p
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'بْ',
            code: 'b3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'bb',
            arabicText: 'بّ',
            code: 'bb',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'pp',
            arabicText: 'بّ',
            code: 'bb7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'bb',
            arabicText: 'ب',
            code: 'bb8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'pp',
            arabicText: 'ب',
            code: 'bb9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'B': [
        {
            turkishText: 'B',
            arabicText: 'ب',
            code: 'B',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'B',
            arabicText: 'بْ',
            code: 'B2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'بْ',
            code: 'B3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'c': [
        {
            turkishText: 'c',
            arabicText: 'ج',
            code: 'c',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'c',
            arabicText: 'جْ',
            code: 'c3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'چ',
            code: 'c2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'چْ',
            code: 'c4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'ج',
            code: 'c7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'جْ',
            code: 'c5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'cc', 
            arabicText: 'جّ',
            code: 'cc',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'چّ',
            code: 'cc2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'جّ',
            code: 'cc7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'cc',
            arabicText: 'ج',
            code: 'cc8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'چ',
            code: 'cc9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'çç',
            arabicText: 'ج',
            code: 'cc10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'C': [
        {
            turkishText: 'C',
            arabicText: 'ج',
            code: 'C',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'C',
            arabicText: 'جْ',
            code: 'C1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'چ',
            code: 'C2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'چْ',
            code: 'C3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'ج',
            code: 'C7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'جْ',
            code: 'C4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'd': [
        {
            turkishText: 'd',
            arabicText: 'د',
            code: 'd',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'دْ',
            code: 'd1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ض',
            code: 'd3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ضْ',
            code: 'd2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'دْ',
            code: 'd4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'dd',
            arabicText: 'دّ',
            code: 'dd',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ',
            arabicText: 'ضّ',
            code: 'dd3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'dd',
            arabicText: 'د',
            code: 'dd8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ', 
            arabicText: 'ض',
            code: 'dd9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'D': [
        {
            turkishText: 'D',
            arabicText: 'د',
            code: 'D',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'دْ',
            code: 'D1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ض',
            code: 'D3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ضْ',
            code: 'D2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'دْ',
            code: 'D4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'f': [
        {
            turkishText: 'f',
            arabicText: 'ف',
            code: 'f',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'f',
            arabicText: 'فْ',
            code: 'f1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ff',
            arabicText: 'فّ',
            code: 'ff',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ff',
            arabicText: 'ف',
            code: 'ff1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'F': [
        {
            turkishText: 'F',
            arabicText: 'ف',
            code: 'F',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'F',
            arabicText: 'فْ',
            code: 'F1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'g': [
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'g6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'كْ',
            code: 'g1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ġ',
            arabicText: 'غ',
            code: 'g4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ġ',
            arabicText: 'غْ',
            code: 'g2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'غ',
            code: 'g5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'غْ',
            code: 'g3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'كْ',
            code: 'g8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'gg',
            arabicText: 'كّ',
            code: 'gg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ġġ',
            arabicText: 'غّ',
            code: 'gg4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'gg8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ġġ',
            arabicText: 'غ',
            code: 'gg9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'G': [
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'G6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'كْ',
            code: 'G1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ġ',
            arabicText: 'غ',
            code: 'G4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ġ',
            arabicText: 'غْ',
            code: 'G2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غ',
            code: 'G5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غْ',
            code: 'G3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'كْ',
            code: 'G8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'h': [
        {
            turkishText: 'ḥ',
            arabicText: 'ح',
            code: 'h3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḥ',
            arabicText: 'حْ',
            code: 'h1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'h',
            arabicText: 'ه',
            code: 'h',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'h',
            arabicText: 'هْ',
            code: 'h2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خ',
            code: 'h5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خْ',
            code: 'h4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ḫʷ',
            arabicText: 'خو',
            code: 'hw',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'hh',
            arabicText: 'هّ',
            code: 'hh',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ',
            arabicText: 'حّ',
            code: 'hh3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ',
            arabicText: 'خّ',
            code: 'hh5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'hh', 
            arabicText: 'ه',
            code: 'hh6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ', 
            arabicText: 'ح',
            code: 'hh7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ', 
            arabicText: 'خ',
            code: 'hh8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'H': [
        {
            turkishText: 'Ḥ',
            arabicText: 'ح',
            code: 'H3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḥ',
            arabicText: 'حْ',
            code: 'H1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'H',
            arabicText: 'ه',
            code: 'H',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'H',
            arabicText: 'هْ',
            code: 'H2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خ',
            code: 'H5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خْ',
            code: 'H4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḫᵂ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'HW',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'j': [
        {
            turkishText: 'j',
            arabicText: 'ژ',
            code: 'j',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'j',
            arabicText: 'ژْ',
            code: 'j1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'jj',
            arabicText: 'ژّ',
            code: 'jj',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'jj',
            arabicText: 'ژ',
            code: 'jj1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'J': [
        {
            turkishText: 'J',
            arabicText: 'ژ',
            code: 'J',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'J',
            arabicText: 'ژْ',
            code: 'J1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'k': [
        {
            turkishText: 'k',
            arabicText: 'ك',
            code: 'k',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'k',
            arabicText: 'كْ',
            code: 'k1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ḳ',
            arabicText: 'ق',
            code: 'k3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḳ',
            arabicText: 'قْ',
            code: 'k2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'kg',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'كْ',
            code: 'k4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ke',
            representedText: 'ki',
            arabicText: 'كه' + '\u200c',
            code: 'ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'kk',
            arabicText: 'كّ',
            code: 'kk',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ',
            arabicText: 'قّ',
            code: 'kk3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'gg',
            arabicText: 'كّ',
            code: 'kkg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'kk',
            arabicText: 'ك',
            code: 'kk4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ', 
            arabicText: 'ق',
            code: 'kk5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'kkg6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'K': [
        {
            turkishText: 'K',
            arabicText: 'ك',
            code: 'K',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'K',
            arabicText: 'كْ',
            code: 'K1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'ق',
            code: 'K3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'قْ',
            code: 'K2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'KG',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'كْ',
            code: 'K4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ke',
            representedText: 'Ki',
            arabicText: 'كه' + '\u200c',
            code: 'Ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'l': [
        {
            turkishText: 'l',
            arabicText: 'ل',
            code: 'l',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'l',
            arabicText: 'لْ',
            code: 'l1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'll',
            arabicText: 'لّ',
            code: 'll',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'll',
            arabicText: 'ل',
            code: 'll1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'L': [
        {
            turkishText: 'L',
            arabicText: 'ل',
            code: 'L',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'L',
            arabicText: 'لْ',
            code: 'L1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'm': [
        {
            turkishText: 'm',
            arabicText: 'م',
            code: 'm',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'm',
            arabicText: 'مْ',
            code: 'm1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'mm', 
            arabicText: 'مّ',
            code: 'mm',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'mm',
            arabicText: 'م',
            code: 'mm1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'M': [
        {
            turkishText: 'M',
            arabicText: 'م',
            code: 'M',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'M',
            arabicText: 'مْ',
            code: 'M1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'n': [
        {
            turkishText: 'n',
            arabicText: 'ن',
            code: 'n',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'n',
            arabicText: 'نْ',
            code: 'n1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'ك',
            code: 'n6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'كْ',
            code: 'n2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'nn', 
            arabicText: 'نّ',
            code: 'nn',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'nn',
            arabicText: 'ن',
            code: 'nn1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'N': [
        {
            turkishText: 'N',
            arabicText: 'ن',
            code: 'N',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'N',
            arabicText: 'نْ',
            code: 'N1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ك',
            code: 'N6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'كْ',
            code: 'N2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'p': [
        {
            turkishText: 'p',
            arabicText: 'پ',
            code: 'p',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'پْ',
            code: 'p1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'بْ',
            code: 'p2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'pp',
            arabicText: 'پّ',
            code: 'pp',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'pp',
            arabicText: 'بّ',
            code: 'ppb7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'pp', 
            arabicText: 'پ',
            code: 'pp8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'pp', 
            arabicText: 'ب',
            code: 'ppb9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'P': [
        {
            turkishText: 'P',
            arabicText: 'پ',
            code: 'P',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'پْ',
            code: 'P1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'بْ',
            code: 'P2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'r': [
        {
            turkishText: 'r',
            arabicText: 'ر',
            code: 'r',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'r',
            arabicText: 'رْ',
            code: 'r1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'rr',
            arabicText: 'رّ',
            code: 'rr',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'rr',
            arabicText: 'ر',
            code: 'rr1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'R': [
        {
            turkishText: 'R',
            arabicText: 'ر',
            code: 'R',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'R',
            arabicText: 'رْ',
            code: 'R1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    's': [
        {
            turkishText: 's',
            arabicText: 'س',
            code: 's',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 's',
            arabicText: 'سْ',
            code: 's1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 's2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ş',
            arabicText: 'شْ',
            code: 's4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ṣ',
            arabicText: 'ص',
            code: 's3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṣ',
            arabicText: 'صْ',
            code: 's6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ث',
            code: 's5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ثْ',
            code: 's7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ss',
            arabicText: 'سّ',
            code: 'ss',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'şş',
            arabicText: 'شّ',
            code: 'ss2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ',
            arabicText: 'صّ',
            code: 'ss3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ',
            arabicText: 'ثّ',
            code: 'ss5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ss',
            arabicText: 'س',
            code: 'ss6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'şş', 
            arabicText: 'ش',
            code: 'ss7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ', 
            arabicText: 'ص',
            code: 'ss8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ',
            arabicText: 'ث',
            code: 'ss9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'S': [
        {
            turkishText: 'S',
            arabicText: 'س',
            code: 'S',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'S',
            arabicText: 'سْ',
            code: 'S1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ş',
            arabicText: 'ش',
            code: 'S2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ş',
            arabicText: 'شْ',
            code: 'S4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'ص',
            code: 'S3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'صْ',
            code: 'S6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ث',
            code: 'S5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ثْ',
            code: 'S7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    't': [
        {
            turkishText: 't',
            arabicText: 'ت',
            code: 't',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'تْ',
            code: 't1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ṭ',
            arabicText: 'ط',
            code: 't3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṭ',
            arabicText: 'طْ',
            code: 't2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'ط',
            code: 't6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'طْ',
            code: 't4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'ة',
            code: 't7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'ةْ',
            code: 't5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'دْ',
            code: 't8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'تّ',
            code: 'tt',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ',
            arabicText: 'طّ',
            code: 'tt3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'dd',
            arabicText: 'طّ',
            code: 'tt6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt',
            arabicText: 'ةّ',
            code: 'tt7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ت',
            code: 'tt8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ', 
            arabicText: 'ط',
            code: 'tt9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'dd', 
            arabicText: 'ط',
            code: 'tt10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ة',
            code: 'tt11',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'ttd12',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'T': [
        {
            turkishText: 'T',
            arabicText: 'ت',
            code: 'T',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'تْ',
            code: 'T1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'ط',
            code: 'T3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'طْ',
            code: 'T2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'ط',
            code: 'T6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'طْ',
            code: 'T4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'ة',
            code: 'T7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'ةْ',
            code: 'T5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'دْ',
            code: 'T8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'v': [
        {
            turkishText: 'v',
            arabicText: 'و',
            code: 'v',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'v',
            arabicText: 'وْ',
            code: 'v1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'vv',
            arabicText: 'وّ',
            code: 'vv',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'vv',
            arabicText: 'و',
            code: 'vv1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'V': [
        {
            turkishText: 'V', 
            arabicText: 'و',
            code: 'V',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'V',
            arabicText: 'وْ',
            code: 'V1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'y': [
        {
            turkishText: 'y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'y',
            arabicText: '\u06cc'+ 'ْ',
            code: 'y2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'y',
            arabicText: 'ي',
            code: 'y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'y',
            arabicText: 'يْ',
            code: 'y3',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'yy',
            arabicText: 'يّ',
            code: 'yy',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'yy',
            arabicText: 'ي',
            code: 'yy1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'Y': [
        {
            turkishText: 'Y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'Y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Y',
            arabicText: '\u06cc' + 'ْ',
            code: 'Y2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Y',
            arabicText: 'ي',
            code: 'Y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Y',
            arabicText: 'يْ',
            code: 'Y3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'z': [
        {
            turkishText: 'z', 
            arabicText: 'ز',
            code: 'z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'z',
            arabicText: 'زْ',
            code: 'z1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظ',
            code: 'z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظْ',
            code: 'z2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ż',
            arabicText: 'ض',
            code: 'z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ż',
            arabicText: 'ضْ',
            code: 'z6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذ',
            code: 'z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذْ',
            code: 'z7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'zz',
            arabicText: 'زّ',
            code: 'zz',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظّ',
            code: 'zz3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'żż', 
            arabicText: 'ضّ',
            code: 'zz4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذّ',
            code: 'zz5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'zz', 
            arabicText: 'ز',
            code: 'zz6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظ',
            code: 'zz7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'żż',
            arabicText: 'ض',
            code: 'zz8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذ',
            code: 'zz9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'Z': [
        {
            turkishText: 'Z',
            arabicText: 'ز',
            code: 'Z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Z',
            arabicText: 'زْ',
            code: 'Z1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظ',
            code: 'Z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظْ',
            code: 'Z2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ż',
            arabicText: 'ض',
            code: 'Z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ż',
            arabicText: 'ضْ',
            code: 'Z6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذ',
            code: 'Z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذْ',
            code: 'Z7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'a': [
        {
            turkishText: 'a',
            arabicText: '', // not represented in Arabic
            code: 'a11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'a0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ا',
            code: 'a12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'ا',
            code: 'a1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'آ',
            code: 'a2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: '\u06cc', // Farsi yeh
            code: 'a13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ā', 
            arabicText: 'ى', // alef maksura
            code: 'a14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'a',
            arabicText: 'أ',
            code: 'ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'آ',
            code: 'ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'َ',
            code: 'a10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'A': [
        {
            turkishText: 'A',
            arabicText: '', // not represented in Arabic
            code: 'A11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'A0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ا',
            code: 'A12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'ا',
            code: 'A1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'آ',
            code: 'A2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: '\u06cc', // Farsi yeh
            code: 'A13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ā',
            arabicText: 'ى', // alef maksura
            code: 'A14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'A',
            arabicText: 'أ',
            code: 'Ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'آ',
            code: 'Ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'َ',
            code: 'A10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'e': [
        {
            turkishText: 'e',
            arabicText: '', // not represented in Arabic
            code: 'e11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'e0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė', 
            arabicText: 'ي',
            code: 'e1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ا',
            code: 'e5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ى', // alef maksura
            code: 'e12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: '\u06cc', // Farsi ya
            code: 'e13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: 'أ',
            code: 'ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: 'َ', 
            code: 'e10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'E': [
        {
            turkishText: 'E',
            arabicText: '', // not represented in Arabic
            code: 'E11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'E0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė', // ? No capital E with diacritic in chart
            arabicText: 'ي', 
            code: 'E1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ا',
            code: 'E5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ى', // alef maksura
            code: 'E12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: '\u06cc', // Farsi ya
            code: 'E13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: 'أ',
            code: 'Ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'Eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: 'َ',
            code: 'E10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: 'arabic'
        }
    ],
    'i': [
        {
            turkishText: 'i',
            arabicText: '', // not represented in Arabic
            code: 'i11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'i',
            arabicText: 'اي',
            code: 'i2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ī',
            arabicText: 'ي',
            code: 'i1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'اي',
            code: 'i16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ى',
            code: 'i18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ﺍ',
            code: 'i20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'إ',
            code: 'i4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ٸ',
            code: 'ihamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ي',
            code: 'i6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ِ', // kasrah
            code: 'i10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: '', // not represented in Arabic
            code: 'i12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'اي',
            code: 'i3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ى',
            code: 'i13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'ﺍ',
            code: 'i21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'إ',
            code: 'i5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ي',
            code: 'i7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ِ', // kasrah
            code: 'i0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'I': [
        {
            turkishText: 'İ',
            arabicText: '', // not represented in Arabic
            code: 'I11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'İ',
            arabicText: 'اي',
            code: 'I2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ī',
            arabicText: 'ي',
            code: 'I1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'اي',
            code: 'I16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ى',
            code: 'I18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ﺍ',
            code: 'I20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'إ',
            code: 'I4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ي',
            code: 'I6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },        
        {
            turkishText: 'İ',
            arabicText: 'ٸ',
            code: 'Ihamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'İ', 
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: '', // not represented in Arabic
            code: 'I12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'اي',
            code: 'I3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ى',
            code: 'I13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'ﺍ',
            code: 'I21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'إ',
            code: 'I5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I', 
            arabicText: 'ي',
            code: 'I7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'I', 
            arabicText: 'ِ', // kasrah
            code: 'I0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'o': [
        {
            turkishText: 'o',
            arabicText: '', // not represented in Arabic
            code: 'o10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: '', // not represented in Arabic
            code: 'o11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ō',
            arabicText: 'و',
            code: 'o1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'و',
            code: 'o6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'و',
            code: 'o7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'او',
            code: 'o2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'او',
            code: 'o3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'ﺍ',
            code: 'o4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'ﺍ',
            code: 'o5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'O': [
        {
            turkishText: 'O',
            arabicText: '', // not represented in Arabic
            code: 'O10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: '', // not represented in Arabic
            code: 'O11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ō',
            arabicText: 'ﻮ',
            code: 'O1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'و',
            code: 'O6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'و',
            code: 'O7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'او',
            code: 'O2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'او',
            code: 'O3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'ﺍ',
            code: 'O4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'ﺍ',
            code: 'O5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'u': [
        {
            turkishText: 'u',
            arabicText: '', // not represented in Arabic
            code: 'u11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: '', // not represented in Arabic
            code: 'u12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'و',
            code: 'u6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü', 
            arabicText: 'ُ', // ḍammah
            code: 'u0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'u', 
            arabicText: 'ُ', // ḍammah
            code: 'u10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ū',
            arabicText: 'و',
            code: 'u1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'او',
            code: 'u3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'او',
            code: 'u13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ا',
            code: 'u4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ﺍ',
            code: 'u5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'و',
            code: 'u7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ى',
            code: 'u8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ى',
            code: 'u9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ٶ',
            code: 'uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'U': [
        {
            turkishText: 'U', 
            arabicText: '', // not represented in Arabic
            code: 'U11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: '', // not represented in Arabic
            code: 'U12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'و',
            code: 'U6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ُ', // ḍammah
            code: 'U0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'U', 
            arabicText: 'ُ', // ḍammah
            code: 'U10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ū',
            arabicText: 'و',
            code: 'U1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'او',
            code: 'U3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'او',
            code: 'U13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ا',
            code: 'U4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ﺍ',
            code: 'U5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'و',
            code: 'U7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ى',
            code: 'U8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ü',
            arabicText: 'ى',
            code: 'U9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'U',
            arabicText: 'ٶ',
            code: 'Uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    '\'': [
        {
            turkishText: 'ʿ',
            arabicText: 'ع',
            code: '\'2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ء',
            code: '\'3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: '\'',
            arabicText: '\u2009' + '\u200c' + '\u0671' + '\u200c', // alef wasla
            code: '\'4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aˀ',
            arabicText: 'أ',
            code: 'a\'10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'aˀ',
            arabicText: 'آ',
            code: 'a\'11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'eˀ',
            arabicText: 'أ',
            code: 'e\'6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'iˀ',
            arabicText: 'ٸ',
            code: 'i\'7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'uˀ',
            arabicText: 'ٶ',
            code: 'u\'9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    '0': [
        {
            turkishText: '0',
            arabicText: '٠‎',
            code: '0',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '1': [
        {
            turkishText: '1',
            arabicText: '۱‎',
            code: '1',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '2': [
        {
            turkishText: '2',
            arabicText: '۲‎',
            code: '2',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '3': [
        {
            turkishText: '3',
            arabicText: '٣‎',
            code: '3',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '4': [
        {
            turkishText: '4',
            arabicText: '٤‎',
            code: '4',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '5': [
        {
            turkishText: '5',
            arabicText: '۵‎',
            code: '5',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '6': [
        {
            turkishText: '6',
            arabicText: '٦‎',
            code: '6',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '7': [
        {
            turkishText: '7',
            arabicText: '٧‎',
            code: '7',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '8': [
        {
            turkishText: '8',
            arabicText: '٨‎',
            code: '8',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '9': [
        {
            turkishText: '9',
            arabicText: '٩‎',
            code: '9',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'yi': [ // does this need a capital case?
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            code: 'iHamza',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            code: 'iHamza1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'yi',
            arabicText: 'ۀ',
            code: 'iHamza2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'yı',
            arabicText: 'ۀ',
            code: 'iHamza3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'eyi': [
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009' + '\u06cc',
            code: 'eyi',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'an': [
        {
            turkishText: 'an',
            arabicText: 'ً',
            code: 'e6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: 'ًا',
            code: 'atanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'en': [
        {
            turkishText: 'en',
            arabicText: 'ً',
            code: 'e7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: 'ًا',
            code: 'etanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'un': [
        {
            turkishText: 'un',
            arabicText: 'ٌ',
            code: 'e8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'ün': [
        {
            turkishText: 'ün',
            arabicText: 'ٌ',
            code: 'uumlaute8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'in': [
        {
            turkishText: 'in',
            arabicText: 'ٍ',
            code: 'e9',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    '-i': [
        {
            turkishText: '-i',
            arabicText: '',
            code: 'izafet1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ı',
            arabicText: '',
            code: 'izafet2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    '-u': [
        {
            turkishText: '-u',
            arabicText: '',
            code: 'izafet3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ü',
            arabicText: '',
            code: 'izafet4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    'sh': [
        {
            turkishText: 'ş' + '\ufeff',
            arabicText: 'ش',
            code: 'sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Sh': [
        {
            turkishText: 'Ş' + '\ufeff',
            arabicText: 'ش',
            code: 'Sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'li\'l': [
        {
            turkishText: 'li\'l',
            arabicText: 'لال',
            code: 'li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'lil' + '\ufeff',
            arabicText: 'لل',
            code: 'lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'Li\'l': [ 
        {
            turkishText: 'Li\'l',
            arabicText: 'لال',
            code: 'Li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Lil' + '\ufeff',
            arabicText: 'لل',
            code: 'Lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'ˀa': [ 
        {
            turkishText: 'ˀa',
            arabicText: 'أ',
            code: '\'10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀa',
            arabicText: 'آ',
            code: '\'11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ˀe': [ 
        {
            turkishText: 'ˀe',
            arabicText: 'أ',
            code: '\'6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ˀi': [ 
        {
            turkishText: 'ˀi',
            arabicText: 'ٸ',
            code: '\'7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ˀu': [ 
        {
            turkishText: 'ˀu',
            arabicText: 'ٶ',
            code: '\'9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ad-d': [
        {
            turkishText: 'ad-d',
            arabicText: 'الد',
            code: 'dSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }  
    ],
    'ed-d': [
        {
            turkishText: 'ed-d',
            arabicText: 'الد',
            code: 'dSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }  
    ],
    '\'d-d': [
        {
            turkishText: '\'d-d',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لد', // alef wasla
            code: 'dSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ḍ-ḍ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لض', // alef wasla
            code: 'ddotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ad-d': [
        {
            turkishText: 'Ad-d',
            arabicText: 'الد',
            code: 'DSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ed-d': [
        {
            turkishText: 'Ed-d',
            arabicText: 'الد',
            code: 'DSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'adh-dh': [
        {
            turkishText: 'adh-dh',
            arabicText: 'الذ',
            code: 'dhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'edh-dh': [
        {
            turkishText: 'edh-dh',
            arabicText: 'الذ',
            code: 'dhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'dh-dh': [
        {
            turkishText: '\'dh-dh',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لذ', // alef wasla
            code: 'dhSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Adh-dh': [
        {
            turkishText: 'Adh-dh',
            arabicText: 'الذ',
            code: 'DhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Edh-dh': [
        {
            turkishText: 'Edh-dh',
            arabicText: 'الذ',
            code: 'DhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'an-n': [
        {
            turkishText: 'an-n',
            arabicText: 'الن',
            code: 'nSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'en-n': [
        {
            turkishText: 'en-n',
            arabicText: 'الن',
            code: 'nSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'n-n': [
        {
            turkishText: '\'n-n',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لن', // alef wasla
            code: 'nSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'An-n': [
        {
            turkishText: 'An-n',
            arabicText: 'الن',
            code: 'NSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'En-n': [
        {
            turkishText: 'En-n',
            arabicText: 'الن',
            code: 'NSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ar-r': [
        {
            turkishText: 'ar-r',
            arabicText: 'الر',
            code: 'rSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'er-r': [
        {
            turkishText: 'er-r',
            arabicText: 'الر',
            code: 'rSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'r-r': [
        {
            turkishText: '\'r-r',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لر', // alef wasla
            code: 'rSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ar-r': [
        {
            turkishText: 'Ar-r',
            arabicText: 'الر',
            code: 'RSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Er-r': [
        {
            turkishText: 'Er-r',
            arabicText: 'الر',
            code: 'RSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'as-s': [
        {
            turkishText: 'as-s',
            arabicText: 'الس',
            code: 'sSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'es-s': [
        {
            turkishText: 'es-s',
            arabicText: 'الس',
            code: 'sSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eş-ş',
            arabicText: 'الش',
            code: 'scSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'s-s': [
        {
            turkishText: '\'s-s',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لس', // alef wasla
            code: 'sSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ṣ-ṣ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لص', // alef wasla
            code: 'sdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ŝ-ŝ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لث', // alef wasla
            code: 'shatSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ş-ş',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لش', // alef wasla
            code: 'scSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'As-s': [
        {
            turkishText: 'As-s',
            arabicText: 'الس',
            code: 'SSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aş-ş',
            arabicText: 'الش',
            code: 'ScSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Es-s': [
        {
            turkishText: 'Es-s',
            arabicText: 'الس',
            code: 'SSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eş-ş',
            arabicText: 'الش',
            code: 'ScSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ash-sh': [
        {
            turkishText: 'ash-sh',
            arabicText: 'الش',
            code: 'shSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'esh-sh': [
        {
            turkishText: 'esh-sh',
            arabicText: 'الش',
            code: 'shSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'sh-sh': [
        {
            turkishText: '\'sh-sh',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لش', // alef wasla
            code: 'shSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ash-sh': [
        {
            turkishText: 'Ash-sh',
            arabicText: 'الش',
            code: 'ShSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Esh-sh': [
        {
            turkishText: 'Esh-sh',
            arabicText: 'الش',
            code: 'ShSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'at-t': [
        {
            turkishText: 'at-t',
            arabicText: 'الت',
            code: 'tSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'et-t': [
        {
            turkishText: 'et-t',
            arabicText: 'الت',
            code: 'tSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'t-t': [
        {
            turkishText: '\'t-t',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لت', // alef wasla
            code: 'tSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ṭ-ṭ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لط', // alef wasla
            code: 'tdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'At-t': [
        {
            turkishText: 'At-t',
            arabicText: 'الت',
            code: 'TSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Et-t': [
        {
            turkishText: 'Et-t',
            arabicText: 'الت',
            code: 'TSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ath-th': [
        {
            turkishText: 'ath-th',
            arabicText: 'الث',
            code: 'thSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eth-th': [
        {
            turkishText: 'eth-th',
            arabicText: 'الث',
            code: 'thSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'th-th': [
        {
            turkishText: '\'th-th',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لث', // alef wasla
            code: 'thSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ath-th': [
        {
            turkishText: 'Ath-th',
            arabicText: 'الث',
            code: 'ThSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eth-th': [
        {
            turkishText: 'Eth-th',
            arabicText: 'الث',
            code: 'ThSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'az-z': [
        {
            turkishText: 'az-z',
            arabicText: 'الز',
            code: 'zSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aż-ż',
            arabicText: 'الظ',
            code: 'zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ez-z': [
        {
            turkishText: 'ez-z',
            arabicText: 'الز',
            code: 'zSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eż-ż',
            arabicText: 'الظ',
            code: 'zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'z-z': [
        {
            turkishText: '\'z-z',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لز', // alef wasla
            code: 'zSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ẓ-ẓ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لظ', // alef wasla
            code: 'zdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ẕ-ẕ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لذ', // alef wasla
            code: 'zlineSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ż-ż',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لظ', // alef wasla
            code: 'zdot2Sun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Az-z': [
        {
            turkishText: 'Az-z',
            arabicText: 'الز',
            code: 'ZSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aż-ż',
            arabicText: 'الظ',
            code: 'Zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ez-z': [
        {
            turkishText: 'Ez-z',
            arabicText: 'الز',
            code: 'ZSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eż-ż',
            arabicText: 'الظ',
            code: 'Zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'llāh': [
        {
            turkishText: '\'llāh',
            arabicText: 'ﷲ',
            code: '\'llah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'allāh': [
        {
            turkishText: 'allāh',
            arabicText: 'ﷲ',
            code: 'allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Allāh': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'Allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lillāh': [
        {
            turkishText: 'lillāh',
            arabicText: 'لله',
            code: 'lillah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ]

}

export const turkishKeyboardDisambiguations = {
    ' ': [
        {
            turkishText: ' ',
            arabicText: ' ',
            code: 'sp',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'b': [
        {
            turkishText: 'b',
            arabicText: 'ب',
            code: 'b',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'b',
            arabicText: 'بْ',
            code: 'b1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'بْ',
            code: 'b2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'bb',
            arabicText: 'بّ',
            code: 'bb',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'pp',
            arabicText: 'بّ',
            code: 'bb7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'bb', 
            arabicText: 'ب',
            code: 'bb8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'pp',
            arabicText: 'ب',
            code: 'bb9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'B': [
        {
            turkishText: 'B',
            arabicText: 'ب',
            code: 'B',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'B',
            arabicText: 'بْ',
            code: 'B1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'بْ',
            code: 'B2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'c': [
        {
            turkishText: 'c',
            arabicText: 'ج',
            code: 'c',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'c',
            arabicText: 'جْ',
            code: 'c1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'cc',
            arabicText: 'جّ',
            code: 'cc',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'cc', 
            arabicText: 'ج',
            code: 'cc1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'C': [
        {
            turkishText: 'C', 
            arabicText: 'ج',
            code: 'C',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'C',
            arabicText: 'جْ',
            code: 'C1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'ç': [
        {
            turkishText: 'ç',
            arabicText: 'چ',
            code: 'c2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'چْ',
            code: 'c3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'ج',
            code: 'c7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'جْ',
            code: 'c4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'çç',
            arabicText: 'چّ',
            code: 'cc2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'çç',
            arabicText: 'جّ',
            code: 'cc7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'چ',
            code: 'cc8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'çç', 
            arabicText: 'ج',
            code: 'cc9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'Ç': [
        {
            turkishText: 'Ç',
            arabicText: 'چ',
            code: 'C2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'چْ',
            code: 'C3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ç',
            arabicText: 'ج',
            code: 'C7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ç',
            arabicText: 'جْ',
            code: 'C4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'd': [
        {
            turkishText: 'd',
            arabicText: 'د',
            code: 'd',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'دْ',
            code: 'd1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ض',
            code: 'd3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḍ',
            arabicText: 'ضْ',
            code: 'd2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'دْ',
            code: 'd4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'dd',
            arabicText: 'دّ',
            code: 'dd',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ',
            arabicText: 'ضّ',
            code: 'dd3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'dd', 
            arabicText: 'د',
            code: 'dd8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḍḍ', 
            arabicText: 'ض',
            code: 'dd9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'D': [
        {
            turkishText: 'D',
            arabicText: 'د',
            code: 'D',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'دْ',
            code: 'D1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ض',
            code: 'D3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḍ',
            arabicText: 'ضْ',
            code: 'D2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'دْ',
            code: 'D4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'f': [
        {
            turkishText: 'f',
            arabicText: 'ف',
            code: 'f',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'f',
            arabicText: 'فْ',
            code: 'f1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ff',
            arabicText: 'فّ',
            code: 'ff',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ff',
            arabicText: 'ف',
            code: 'ff1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'F': [
        {
            turkishText: 'F',
            arabicText: 'ف',
            code: 'F',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'F',
            arabicText: 'فْ',
            code: 'F1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'g': [
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'g3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'كْ',
            code: 'g1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ġ',
            arabicText: 'غ',
            code: 'g4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ġ',
            arabicText: 'غْ',
            code: 'g2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'gg',
            arabicText: 'كّ',
            code: 'gg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ġġ',
            arabicText: 'غّ',
            code: 'gg4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'gg5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ġġ', 
            arabicText: 'غ',
            code: 'gg6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'G': [
        {
            turkishText: 'G', 
            arabicText: 'ك',
            code: 'G3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'كْ',
            code: 'G1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ġ', 
            arabicText: 'غ',
            code: 'G4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ġ',
            arabicText: 'غْ',
            code: 'G2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'ğ': [
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'كْ',
            code: 'g8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'غ',
            code: 'g5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'غْ',
            code: 'g9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'ك',
            code: 'g7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ğ',
            arabicText: 'كْ',
            code: 'g10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ğğ',
            arabicText: 'كّ',
            code: 'gg6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ğğ',
            arabicText: 'ك',
            code: 'gg7',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'Ğ': [
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G6',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'كْ',
            code: 'G8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غ',
            code: 'G5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'غْ',
            code: 'G9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'ك',
            code: 'G7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ğ',
            arabicText: 'كْ',
            code: 'G10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'h': [
        {
            turkishText: 'ḥ',
            arabicText: 'ح',
            code: 'h3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḥ',
            arabicText: 'حْ',
            code: 'h1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'h',
            arabicText: 'ه',
            code: 'h',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'h',
            arabicText: 'هْ',
            code: 'h2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خ',
            code: 'h5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẖ',
            arabicText: 'خْ',
            code: 'h4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ḫʷ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'hw',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ', 
            arabicText: 'حّ',
            code: 'hh3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'hh', 
            arabicText: 'هّ',
            code: 'hh',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ', 
            arabicText: 'خّ',
            code: 'hh5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḥḥ', 
            arabicText: 'ح',
            code: 'hh6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'hh', 
            arabicText: 'ه',
            code: 'hh7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẖẖ', 
            arabicText: 'خ',
            code: 'hh8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }

    ],
    'H': [
        {
            turkishText: 'Ḥ', 
            arabicText: 'ح',
            code: 'H3',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḥ',
            arabicText: 'حْ',
            code: 'H1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'H',
            arabicText: 'ه',
            code: 'H',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'H',
            arabicText: 'هْ',
            code: 'H2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خ',
            code: 'H5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḫ',
            arabicText: 'خْ',
            code: 'H4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḫᵂ', // need to be able to string both of these characters together in Latin
            arabicText: 'خو',
            code: 'HW',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'j': [
        {
            turkishText: 'j',
            arabicText: 'ژ',
            code: 'j',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'j',
            arabicText: 'ژْ',
            code: 'j1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'jj',
            arabicText: 'ژّ',
            code: 'jj',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'jj',
            arabicText: 'ژ',
            code: 'jj1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'J': [
        {
            turkishText: 'J',
            arabicText: 'ژ',
            code: 'J',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'J',
            arabicText: 'ژْ',
            code: 'J1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'k': [
        {
            turkishText: 'k',
            arabicText: 'ك',
            code: 'k',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'k',
            arabicText: 'كْ',
            code: 'k1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ḳ',
            arabicText: 'ق',
            code: 'k3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ḳ',
            arabicText: 'قْ',
            code: 'k2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'ك',
            code: 'kg',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'g',
            arabicText: 'كْ',
            code: 'k4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ke',
            representedText: 'ki',
            arabicText: 'كه' + '\u200c',
            code: 'ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        },
        {
            turkishText: 'kk', 
            arabicText: 'كّ',
            code: 'kk',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ', 
            arabicText: 'قّ',
            code: 'kk3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'كّ',
            code: 'kkg',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'kk', 
            arabicText: 'ك',
            code: 'kk4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ḳḳ', 
            arabicText: 'ق',
            code: 'kk5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'gg', 
            arabicText: 'ك',
            code: 'kkg6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'K': [
        {
            turkishText: 'K', 
            arabicText: 'ك',
            code: 'K',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'K',
            arabicText: 'كْ',
            code: 'K1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'ق',
            code: 'K3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ḳ',
            arabicText: 'قْ',
            code: 'K2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'ك',
            code: 'KG',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'G',
            arabicText: 'كْ',
            code: 'K4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ke',
            representedText: 'Ki',
            arabicText: 'كه' + '\u200c',
            code: 'Ke',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'charCombo',
            charLanguage: null
        }
    ],
    'l': [
        {
            turkishText: 'l',
            arabicText: 'ل',
            code: 'l',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'l',
            arabicText: 'لْ',
            code: 'l1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'll', 
            arabicText: 'لّ',
            code: 'll',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'll',
            arabicText: 'ل',
            code: 'll1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'L': [
        {
            turkishText: 'L', 
            arabicText: 'ل',
            code: 'L',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'L',
            arabicText: 'لْ',
            code: 'L1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'm': [
        {
            turkishText: 'm',
            arabicText: 'م',
            code: 'm',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'm',
            arabicText: 'مْ',
            code: 'm1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'mm',
            arabicText: 'مّ',
            code: 'mm',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'mm', 
            arabicText: 'م',
            code: 'mm1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'M': [
        {
            turkishText: 'M', // default
            arabicText: 'م',
            code: 'M',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'M',
            arabicText: 'مْ',
            code: 'M1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
    ],
    'n': [
        {
            turkishText: 'n',
            arabicText: 'ن',
            code: 'n',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'n',
            arabicText: 'نْ',
            code: 'n1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'ك',
            code: 'n6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ñ',
            arabicText: 'كْ',
            code: 'n2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'nn', 
            arabicText: 'نّ',
            code: 'nn',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'nn', 
            arabicText: 'ن',
            code: 'nn1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'N': [
        {
            turkishText: 'N', 
            arabicText: 'ن',
            code: 'N',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'N',
            arabicText: 'نْ',
            code: 'N1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'ك',
            code: 'N6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ñ',
            arabicText: 'كْ',
            code: 'N2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'p': [
        {
            turkishText: 'p', 
            arabicText: 'پ',
            code: 'p',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'پْ',
            code: 'p1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'ب',
            code: 'b7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'p',
            arabicText: 'بْ',
            code: 'p2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'pp', 
            arabicText: 'پّ',
            code: 'pp',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'pp',
            arabicText: 'بّ',
            code: 'ppb7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'pp', 
            arabicText: 'پ',
            code: 'pp8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'pp', 
            arabicText: 'ب',
            code: 'ppb9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'P': [
        {
            turkishText: 'P',
            arabicText: 'پ',
            code: 'P',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'پْ',
            code: 'P1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'ب',
            code: 'B7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'P',
            arabicText: 'بْ',
            code: 'P2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'r': [
        {
            turkishText: 'r', 
            arabicText: 'ر',
            code: 'r',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'r',
            arabicText: 'رْ',
            code: 'r1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'rr',
            arabicText: 'رّ',
            code: 'rr',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'rr',
            arabicText: 'ر',
            code: 'rr1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'R': [
        {
            turkishText: 'R',
            arabicText: 'ر',
            code: 'R',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'R',
            arabicText: 'رْ',
            code: 'R1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    's': [
        {
            turkishText: 's', 
            arabicText: 'س',
            code: 's',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 's',
            arabicText: 'سْ',
            code: 's1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ṣ',
            arabicText: 'ص',
            code: 's3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṣ',
            arabicText: 'صْ',
            code: 's4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ث',
            code: 's5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ŝ',
            arabicText: 'ثْ',
            code: 's6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ss', 
            arabicText: 'سّ',
            code: 'ss',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ', 
            arabicText: 'صّ',
            code: 'ss3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ', 
            arabicText: 'ثّ',
            code: 'ss5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ss', 
            arabicText: 'س',
            code: 'ss6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṣṣ', 
            arabicText: 'ص',
            code: 'ss7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ŝŝ', 
            arabicText: 'ث',
            code: 'ss8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'S': [
        {
            turkishText: 'S', 
            arabicText: 'س',
            code: 'S',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        },
        {
            turkishText: 'S',
            arabicText: 'سْ',
            code: 'S1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'ص',
            code: 'S3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        },
        {
            turkishText: 'Ṣ',
            arabicText: 'صْ',
            code: 'S4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ث',
            code: 'S5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        },
        {
            turkishText: 'Ŝ',
            arabicText: 'ثْ',
            code: 'S6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'ş': [
        {
            turkishText: 'ş',
            arabicText: 'ش',
            code: 's2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: true,
            charLanguage: null
        },
        {
            turkishText: 'ş',
            arabicText: 'شْ',
            code: 's7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'şş', 
            arabicText: 'شّ',
            code: 'ss2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'şş', 
            arabicText: 'ش',
            code: 'ss3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'Ş': [
        {
            turkishText: 'Ş', 
            arabicText: 'ش',
            code: 'S2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ş',
            arabicText: 'شْ',
            code: 'S7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    't': [ 
        {
            turkishText: 't',
            arabicText: 'ت',
            code: 't',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'تْ',
            code: 't1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ṭ',
            arabicText: 'ط',
            code: 't3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ṭ',
            arabicText: 'طْ',
            code: 't2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'ط',
            code: 't6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'd',
            arabicText: 'طْ',
            code: 't4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'ة',
            code: 't7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'ةْ',
            code: 't5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'د',
            code: 'd7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 't',
            arabicText: 'دْ',
            code: 't8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'تّ',
            code: 'tt',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ', 
            arabicText: 'طّ',
            code: 'tt3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'dd',
            arabicText: 'طّ',
            code: 'tt6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ةّ',
            code: 'tt7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ت',
            code: 'tt8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ṭṭ', 
            arabicText: 'ط',
            code: 'tt9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'dd', 
            arabicText: 'ط',
            code: 'tt10',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'ة',
            code: 'tt11',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'tt', 
            arabicText: 'د',
            code: 'ttd12',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'T': [
        {
            turkishText: 'T', 
            arabicText: 'ت',
            code: 'T',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'تْ',
            code: 'T1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'ط',
            code: 'T3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ṭ',
            arabicText: 'طْ',
            code: 'T2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'ط',
            code: 'T6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'D',
            arabicText: 'طْ',
            code: 'T4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'ة',
            code: 'T7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'ةْ',
            code: 'T5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'د',
            code: 'D7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'T',
            arabicText: 'دْ',
            code: 'T8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'v': [
        {
            turkishText: 'v',
            arabicText: 'و',
            code: 'v',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'v',
            arabicText: 'وْ',
            code: 'v1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'vv', 
            arabicText: 'وّ',
            code: 'vv',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'vv',
            arabicText: 'و',
            code: 'vv1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'V': [
        {
            turkishText: 'V', 
            arabicText: 'و',
            code: 'V',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'V',
            arabicText: 'وْ',
            code: 'V1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'y': [
        {
            turkishText: 'y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'y',
            arabicText: '\u06cc' + 'ْ',
            code: 'y2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'y', 
            arabicText: 'ي',
            code: 'y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'y',
            arabicText: 'يْ',
            code: 'y3',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'yy',
            arabicText: 'يّ',
            code: 'yy',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'yy', 
            arabicText: 'ي',
            code: 'yy1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'Y': [
        {
            turkishText: 'Y',
            arabicText: '\u06cc', // Farsi yeh
            code: 'Y1',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: 'arabic',
            charLanguage: null
        },
        {
            turkishText: 'Y',
            arabicText: '\u06cc' + 'ْ',
            code: 'Y2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Y', 
            arabicText: 'ي', 
            code: 'Y',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Y',
            arabicText: 'يْ',
            code: 'Y3',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'z': [
        {
            turkishText: 'z', 
            arabicText: 'ز',
            code: 'z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'z',
            arabicText: 'زْ',
            code: 'z1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظ',
            code: 'z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẓ',
            arabicText: 'ظْ',
            code: 'z2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ż',
            arabicText: 'ض',
            code: 'z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ż',
            arabicText: 'ضْ',
            code: 'z6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذ',
            code: 'z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ẕ',
            arabicText: 'ذْ',
            code: 'z7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'zz',
            arabicText: 'زّ',
            code: 'zz',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ',
            arabicText: 'ظّ',
            code: 'zz3',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'żż',
            arabicText: 'ضّ',
            code: 'zz4',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذّ',
            code: 'zz5',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'sheddah',
            charLanguage: null
        },
        {
            turkishText: 'zz', 
            arabicText: 'ز',
            code: 'zz6',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẓẓ', 
            arabicText: 'ظ',
            code: 'zz7',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'żż', 
            arabicText: 'ض',
            code: 'zz8',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        },
        {
            turkishText: 'ẕẕ', 
            arabicText: 'ذ',
            code: 'zz9',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'double',
            charLanguage: null
        }
    ],
    'Z': [
        {
            turkishText: 'Z',
            arabicText: 'ز',
            code: 'Z',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Z',
            arabicText: 'زْ',
            code: 'Z1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظ',
            code: 'Z3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẓ',
            arabicText: 'ظْ',
            code: 'Z2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ż',
            arabicText: 'ض',
            code: 'Z4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ż',
            arabicText: 'ضْ',
            code: 'Z6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذ',
            code: 'Z5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ẕ',
            arabicText: 'ذْ',
            code: 'Z7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'sukun',
            charLanguage: null
        }
    ],
    'a': [
        {
            turkishText: 'a',
            arabicText: '', // not represented in Arabic
            code: 'a11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'a0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'ا',
            code: 'a12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'ا',
            code: 'a1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ā',
            arabicText: 'آ',
            code: 'a2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: '\u06cc', // Farsi yeh
            code: 'a13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ā',
            arabicText: 'ى', // alef maksura
            code: 'a14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'a',
            arabicText: 'أ',
            code: 'ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'آ',
            code: 'ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'a',
            arabicText: 'َ',
            code: 'a10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'A': [
        {
            turkishText: 'A',
            arabicText: '', // not represented in Arabic
            code: 'a11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ه' + '\u200c' + '\u2009', // non-joiner
            code: 'A0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'ا',
            code: 'A12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'ا',
            code: 'A1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'آ',
            code: 'A2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: '\u06cc', // Farsi yeh
            code: 'A13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'arabic',
            charLanguage: null
        },
        {
            turkishText: 'Ā',
            arabicText: 'ى', // alef maksura
            code: 'A14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'arabic',
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'أ',
            code: 'Ahamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'آ',
            code: 'Ahamza2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'A',
            arabicText: 'َ',
            code: 'A10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'e': [
        {
            turkishText: 'e',
            arabicText: '', // not represented in Arabic
            code: 'e11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'e0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė',
            arabicText: 'ي',
            code: 'e1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ا',
            code: 'e5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'e',
            arabicText: 'ى', // alef maksura
            code: 'e12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: '\u06cc', // Farsi ya
            code: 'e13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: 'أ',
            code: 'ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza1',
            charLanguage: 'arabic',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'e',
            arabicText: 'َ',
            code: 'e10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'E': [
        {
            turkishText: 'E',
            arabicText: '', // not represented in Arabic
            code: 'E11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ه' + '\u200c' + '\u2009',
            code: 'E0',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ė', // ? No E with a diacritic
            arabicText: 'ي',
            code: 'E1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ا',
            code: 'E5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'E',
            arabicText: 'ى', // alef maksura
            code: 'E12',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: '\u06cc', // Farsi ya
            code: 'E13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: 'أ',
            code: 'Ehamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza1',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E-i',
            arabicText: 'ۀ' + '\u200c' + '\u2009',
            code: 'Ehamza2',
            dropdownOrder: 3,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'E',
            arabicText: 'َ',
            code: 'E10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'i': [
        {
            turkishText: 'i', 
            arabicText: '', // not represented in Arabic
            code: 'i11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'i',
            arabicText: 'اي',
            code: 'i2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ī',
            arabicText: 'ي', 
            code: 'i1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'اي',
            code: 'i16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ī',
            arabicText: 'ى',
            code: 'i18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'i',
            arabicText: 'ﺍ',
            code: 'i20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'إ',
            code: 'i4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ٸ',
            code: 'ihamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ي',
            code: 'i6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'i',
            arabicText: 'ِ', // kasrah
            code: 'i10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'İ': [
        {
            turkishText: 'İ', // default
            arabicText: '', // not represented in Arabic
            code: 'I11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I14',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'İ',
            arabicText: 'اي',
            code: 'I2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I19',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Ī',
            arabicText: 'ي', 
            code: 'I1',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'اي',
            code: 'I16',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ī',
            arabicText: 'ى',
            code: 'I18',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'İ',
            arabicText: 'ﺍ',
            code: 'I20',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'إ',
            code: 'I4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ي',
            code: 'I6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ٸ',
            code: 'Ihamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'İ',
            arabicText: 'ِ', // kasrah
            code: 'I10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'ı': [
        {
            turkishText: 'ı', 
            arabicText: '', // not represented in Arabic
            code: 'i12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: '\u06cc', // Farsi yeh
            code: 'i15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'ى',
            code: 'i13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'ı',
            arabicText: 'اي',
            code: 'i3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ﺍ',
            code: 'i21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'إ',
            code: 'i5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ي',
            code: 'i7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ı',
            arabicText: 'ِ', // kasrah
            code: 'i0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'I': [
        {
            turkishText: 'I',
            arabicText: '', // not represented in Arabic
            code: 'I12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: '\u06cc', // Farsi yeh
            code: 'I15',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'ى',
            code: 'i13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'I',
            arabicText: 'اي',
            code: 'I3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ﺍ',
            code: 'I21',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'إ',
            code: 'I5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ي', 
            code: 'I7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'I',
            arabicText: 'ِ', // kasrah
            code: 'I0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        }
    ],
    'o': [
         {
            turkishText: 'o',
            arabicText: '', // not represented in Arabic
            code: 'o10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'و',
            code: 'o6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ō',
            arabicText: 'و',
            code: 'o1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'او',
            code: 'o2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'o',
            arabicText: 'ﺍ',
            code: 'o4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'O': [
         {
            turkishText: 'O', 
            arabicText: '', // not represented in Arabic
            code: 'O10',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'و',
            code: 'O6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ō',
            arabicText: 'و',
            code: 'O1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'او',
            code: 'O2',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'O',
            arabicText: 'ﺍ',
            code: 'O4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'ö': [
        {
            turkishText: 'ö', 
            arabicText: '', // not represented in Arabic
            code: 'o11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'او',
            code: 'o3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'ﺍ',
            code: 'o5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ö',
            arabicText: 'و',
            code: 'o7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Ö': [
        {
            turkishText: 'Ö', 
            arabicText: '', // not represented in Arabic
            code: 'O11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'او',
            code: 'O3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'ﺍ',
            code: 'O5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ö',
            arabicText: 'و',
            code: 'O7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'u': [
        {
            turkishText: 'u', 
            arabicText: '', // not represented in Arabic
            code: 'u11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'و',
            code: 'u6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ُ', // ḍammah
            code: 'u10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'او',
            code: 'u13',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ū',
            arabicText: 'و',
            code: 'u1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ا',
            code: 'u4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ى',
            code: 'u8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'u',
            arabicText: 'ٶ',
            code: 'uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'U': [
        {
            turkishText: 'U', 
            arabicText: '', // not represented in Arabic
            code: 'U11',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'و',
            code: 'U6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ُ', // ḍammah
            code: 'U10',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'او',
            code: 'U13'
        },
        {
            turkishText: 'Ū',
            arabicText: 'و',
            code: 'U1',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ا',
            code: 'U4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'U',
            arabicText: 'ى',
            code: 'U8',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'U',
            arabicText: 'ٶ',
            code: 'Uhamza',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'ü': [
        {
            turkishText: 'ü',
            arabicText: '', // not represented in Arabic
            code: 'u12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'و',
            code: 'u7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ُ', // ḍammah
            code: 'u0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'او',
            code: 'u3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ﺍ',
            code: 'u5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ü',
            arabicText: 'ى',
            code: 'u9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'Ü': [
        {
            turkishText: 'Ü', 
            arabicText: '', // not represented in Arabic
            code: 'U12',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'و',
            code: 'U7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ُ', // ḍammah
            code: 'U0',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'special',
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'او',
            code: 'U3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ﺍ',
            code: 'U5',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'Ü',
            arabicText: 'ى',
            code: 'U9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    '\'': [
        {
            turkishText: 'ʿ',
            arabicText: 'ع',
            code: '\'2',
            dropdownOrder: 0,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        },
        {
            turkishText: 'ˀ',
            arabicText: 'ء',
            code: '\'3',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: '\'',
            arabicText: '\u2009' + '\u200c' + '\u0671' + '\u200c', // alef wasla
            code: '\'4',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aˀ',
            arabicText: 'أ',
            code: 'a\'10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'aˀ',
            arabicText: 'آ',
            code: 'a\'11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'eˀ',
            arabicText: 'أ',
            code: 'e\'6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'iˀ',
            arabicText: 'ٸ',
            code: 'i\'7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'uˀ',
            arabicText: 'ٶ',
            code: 'u\'9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    '0': [
        {
            turkishText: '0',
            arabicText: '٠‎',
            code: '0',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '1': [
        {
            turkishText: '1',
            arabicText: '۱‎',
            code: '1',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '2': [
        {
            turkishText: '2',
            arabicText: '۲‎',
            code: '2',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '3': [
        {
            turkishText: '3',
            arabicText: '٣‎',
            code: '3',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '4': [
        {
            turkishText: '4',
            arabicText: '٤‎',
            code: '4',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '5': [
        {
            turkishText: '5',
            arabicText: '۵‎',
            code: '5',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '6': [
        {
            turkishText: '6',
            arabicText: '٦‎',
            code: '6',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '7': [
        {
            turkishText: '7',
            arabicText: '٧‎',
            code: '7',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '8': [
        {
            turkishText: '8',
            arabicText: '٨‎',
            code: '8',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    '9': [
        {
            turkishText: '9',
            arabicText: '٩‎',
            code: '9',
            dropdownOrder: -1,
            needsDisambiguation: false,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'yi': [
        {
            turkishText: 'yi',
            arabicText: 'ٸ',
            code: 'iHamza',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'yi',
            arabicText: 'ۀ',
            code: 'iHamza2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'yı': [ 
        {
            turkishText: 'yı',
            arabicText: 'ٸ',
            code: 'iHamza1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'yı',
            arabicText: 'ۀ',
            code: 'iHamza3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'eyi': [
        {
            turkishText: 'eyi',
            arabicText: 'ۀ' + '\u200c' + '\u2009' + '\u06cc',
            code: 'eyi',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'an': [
        {
            turkishText: 'an',
            arabicText: 'ً',
            code: 'e6',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'an',
            arabicText: 'ًا',
            code: 'atanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'en': [
        {
            turkishText: 'en',
            arabicText: 'ً',
            code: 'e7',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        },
        {
            turkishText: 'en',
            arabicText: 'ًا',
            code: 'etanwin',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'un': [
        {
            turkishText: 'un',
            arabicText: 'ٌ',
            code: 'e8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'ün': [
        {
            turkishText: 'ün',
            arabicText: 'ٌ',
            code: 'uumlaute8',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    'in': [
        {
            turkishText: 'in',
            arabicText: 'ٍ',
            code: 'e9',
            dropdownOrder: 4,
            needsDisambiguation: true,
            comboCategory: 'tanwin',
            charLanguage: null
        }
    ],
    '-i': [
        {
            turkishText: '-i',
            arabicText: '',
            code: 'izafet1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ı',
            arabicText: '',
            code: 'izafet2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    '-u': [
        {
            turkishText: '-u',
            arabicText: '',
            code: 'izafet3',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        },
        {
            turkishText: '-ü',
            arabicText: '',
            code: 'izafet4',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'izafet',
            charLanguage: null
        }
    ],
    'sh': [
        {
            turkishText: 'ş' + '\ufeff',
            arabicText: 'ش',
            code: 'sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Sh': [
        {
            turkishText: 'Ş' + '\ufeff',
            arabicText: 'ش',
            code: 'Sh',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'li\'l': [
        {
            turkishText: 'li\'l',
            arabicText: 'لال',
            code: 'li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'lil' + '\ufeff',
            arabicText: 'لل',
            code: 'lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'Li\'l': [ 
        {
            turkishText: 'Li\'l' + '\ufeff',
            arabicText: 'لال',
            code: 'Li\'l',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Lil',
            arabicText: 'لل',
            code: 'Lil',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: 'arabic'
        }
    ],
    'ˀa': [ 
        {
            turkishText: 'ˀa',
            arabicText: 'أ',
            code: '\'10',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        },
        {
            turkishText: 'ˀa',
            arabicText: 'آ',
            code: '\'11',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ˀe': [ 
        {
            turkishText: 'ˀe',
            arabicText: 'أ',
            code: '\'6',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ˀi': [ 
        {
            turkishText: 'ˀi',
            arabicText: 'ٸ',
            code: '\'7',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ˀu': [ 
        {
            turkishText: 'ˀu',
            arabicText: 'ٶ',
            code: '\'9',
            dropdownOrder: 2,
            needsDisambiguation: true,
            comboCategory: 'hamza',
            charLanguage: null
        }
    ],
    'ad-d': [
        {
            turkishText: 'ad-d',
            arabicText: 'الد',
            code: 'dSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ed-d': [
        {
            turkishText: 'ed-d',
            arabicText: 'الد',
            code: 'dSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eḍ-ḍ',
            arabicText: 'الض',
            code: 'ddotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'d-d': [
        {
            turkishText: '\'d-d',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لد', // alef wasla
            code: 'dSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ḍ-ḍ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لض', // alef wasla
            code: 'ddotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ad-d': [
        {
            turkishText: 'Ad-d',
            arabicText: 'الد',
            code: 'DSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ed-d': [
        {
            turkishText: 'Ed-d',
            arabicText: 'الد',
            code: 'DSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eḍ-ḍ',
            arabicText: 'الض',
            code: 'DdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'adh-dh': [
        {
            turkishText: 'adh-dh',
            arabicText: 'الذ',
            code: 'dhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'edh-dh': [
        {
            turkishText: 'edh-dh',
            arabicText: 'الذ',
            code: 'dhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'dh-dh': [
        {
            turkishText: '\'dh-dh',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لذ', // alef wasla
            code: 'dhSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Adh-dh': [
        {
            turkishText: 'Adh-dh',
            arabicText: 'الذ',
            code: 'DhSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Edh-dh': [
        {
            turkishText: 'Edh-dh',
            arabicText: 'الذ',
            code: 'DhSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'an-n': [
        {
            turkishText: 'an-n',
            arabicText: 'الن',
            code: 'nSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'en-n': [
        {
            turkishText: 'en-n',
            arabicText: 'الن',
            code: 'nSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'n-n': [
        {
            turkishText: '\'n-n',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لن', // alef wasla
            code: 'nSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'An-n': [
        {
            turkishText: 'An-n',
            arabicText: 'الن',
            code: 'NSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'En-n': [
        {
            turkishText: 'En-n',
            arabicText: 'الن',
            code: 'NSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ar-r': [
        {
            turkishText: 'ar-r',
            arabicText: 'الر',
            code: 'rSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'er-r': [
        {
            turkishText: 'er-r',
            arabicText: 'الر',
            code: 'rSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'r-r': [
        {
            turkishText: '\'r-r',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لر', // alef wasla
            code: 'rSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ar-r': [
        {
            turkishText: 'Ar-r',
            arabicText: 'الر',
            code: 'RSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Er-r': [
        {
            turkishText: 'Er-r',
            arabicText: 'الر',
            code: 'RSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'as-s': [
        {
            turkishText: 'as-s',
            arabicText: 'الس',
            code: 'sSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'es-s': [
        {
            turkishText: 'es-s',
            arabicText: 'الس',
            code: 'sSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṣ-ṣ',
            arabicText: 'الص',
            code: 'sdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eŝ-ŝ',
            arabicText: 'الث',
            code: 'shatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'s-s': [
        {
            turkishText: '\'s-s',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لس', // alef wasla
            code: 'sSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ṣ-ṣ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لص', // alef wasla
            code: 'sdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ŝ-ŝ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لث', // alef wasla
            code: 'shatSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'As-s': [
        {
            turkishText: 'As-s',
            arabicText: 'الس',
            code: 'SSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Es-s': [
        {
            turkishText: 'Es-s',
            arabicText: 'الس',
            code: 'SSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṣ-ṣ',
            arabicText: 'الص',
            code: 'SdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eŝ-ŝ',
            arabicText: 'الث',
            code: 'ShatSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'aş-ş': [
        {
            turkishText: 'aş-ş',
            arabicText: 'الش',
            code: 'scSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eş-ş': [
        {
            turkishText: 'eş-ş',
            arabicText: 'الش',
            code: 'scSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'ş-ş': [
        {
            turkishText: '\'ş-ş',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لش', // alef wasla
            code: 'scSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Aş-ş': [
        {
            turkishText: 'Aş-ş',
            arabicText: 'الش',
            code: 'ScSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eş-ş': [
        {
            turkishText: 'Eş-ş',
            arabicText: 'الش',
            code: 'ScSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ash-sh': [
        {
            turkishText: 'ash-sh',
            arabicText: 'الش',
            code: 'shSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'esh-sh': [
        {
            turkishText: 'esh-sh',
            arabicText: 'الش',
            code: 'shSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'sh-sh': [
        {
            turkishText: '\'sh-sh',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لش', // alef wasla
            code: 'shSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ash-sh': [
        {
            turkishText: 'Ash-sh',
            arabicText: 'الش',
            code: 'ShSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Esh-sh': [
        {
            turkishText: 'Esh-sh',
            arabicText: 'الش',
            code: 'ShSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'at-t': [
        {
            turkishText: 'at-t',
            arabicText: 'الت',
            code: 'tSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'et-t': [
        {
            turkishText: 'et-t',
            arabicText: 'الت',
            code: 'tSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eṭ-ṭ',
            arabicText: 'الط',
            code: 'tdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'t-t': [
        {
            turkishText: '\'t-t',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لت', // alef wasla
            code: 'tSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ṭ-ṭ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لط', // alef wasla
            code: 'tdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'At-t': [
        {
            turkishText: 'At-t',
            arabicText: 'الت',
            code: 'TSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Et-t': [
        {
            turkishText: 'Et-t',
            arabicText: 'الت',
            code: 'TSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eṭ-ṭ',
            arabicText: 'الط',
            code: 'TdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ath-th': [
        {
            turkishText: 'ath-th',
            arabicText: 'الث',
            code: 'thSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'eth-th': [
        {
            turkishText: 'eth-th',
            arabicText: 'الث',
            code: 'thSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'th-th': [
        {
            turkishText: '\'th-th',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لث', // alef wasla
            code: 'thSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ath-th': [
        {
            turkishText: 'Ath-th',
            arabicText: 'الث',
            code: 'ThSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Eth-th': [
        {
            turkishText: 'Eth-th',
            arabicText: 'الث',
            code: 'ThSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'az-z': [
        {
            turkishText: 'az-z',
            arabicText: 'الز',
            code: 'zSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'aż-ż',
            arabicText: 'الظ',
            code: 'zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'ez-z': [
        {
            turkishText: 'ez-z',
            arabicText: 'الز',
            code: 'zSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẓ-ẓ',
            arabicText: 'الظ',
            code: 'zdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eẕ-ẕ',
            arabicText: 'الذ',
            code: 'zlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'eż-ż',
            arabicText: 'الظ',
            code: 'zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'z-z': [
        {
            turkishText: '\'z-z',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لز', // alef wasla
            code: 'zSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ẓ-ẓ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لظ', // alef wasla
            code: 'zdotSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ẕ-ẕ',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لذ', // alef wasla
            code: 'zlineSun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: '\'ż-ż',
            arabicText: '\u2009' + '\u200c' + '\u0671' + 'لظ', // alef wasla
            code: 'zdot2Sun1',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Az-z': [
        {
            turkishText: 'Az-z',
            arabicText: 'الز',
            code: 'ZSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Aż-ż',
            arabicText: 'الظ',
            code: 'Zdot2Sun',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    'Ez-z': [
        {
            turkishText: 'Ez-z',
            arabicText: 'الز',
            code: 'ZSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẓ-ẓ',
            arabicText: 'الظ',
            code: 'ZdotSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eẕ-ẕ',
            arabicText: 'الذ',
            code: 'ZlineSun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        },
        {
            turkishText: 'Eż-ż',
            arabicText: 'الظ',
            code: 'Zdot2Sun2',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: 'sun',
            charLanguage: 'arabic'
        }
    ],
    '\'llāh': [
        {
            turkishText: '\'llāh',
            arabicText: 'ﷲ',
            code: '\'llah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'allāh': [
        {
            turkishText: 'allāh',
            arabicText: 'ﷲ',
            code: 'allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'Allāh': [
        {
            turkishText: 'Allāh',
            arabicText: 'ﷲ',
            code: 'Allah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ],
    'lillāh': [
        {
            turkishText: 'lillāh',
            arabicText: 'لله',
            code: 'lillah',
            dropdownOrder: 1,
            needsDisambiguation: true,
            comboCategory: null,
            charLanguage: null
        }
    ]
}