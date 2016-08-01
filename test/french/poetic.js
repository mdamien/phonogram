/**
 * Phonogram French Poetic Unit Tests
 * ===================================
 */
import {poetic} from '../../src/french';

export default {
  fn: poetic,
  cases: [
    ['abasourdie', 'abazurdi'],
    ['abeille', 'abɛj'],
    ['almanach', 'almana'],
    ['accentuation', 'aksãtyasjõ'],
    ['âme', 'am'],
    ['ambiance', 'ãbjãs'],
    ['amphétamine', 'ãfetamin'],
    ['an', 'ã'],
    ['antagoniste', 'ãtagonist'],
    ['aplomb', 'aplõ'],
    ['arabesque', 'arabɛsk'],
    ['arhe', 'ar'],
    ['aux', 'o'],
    ['Auxerres', 'osɛr'],
    ['auxilliaire', 'oksiljɛr'],
    ['ayant', 'ɛjã'],
    ['ayatollah', 'ajatola'],
    ['ayez', 'ɛje'],

    ['Bach', 'bak'],
    ['baignoire', 'bɛnwar'],
    ['barbecue', 'barbøkju'],
    ['beauvillaine', 'bovilɛn'],
    ['bel', 'bɛl'],
    ['belle', 'bɛl'],
    ['belles', 'bɛl'],
    ['bibelot', 'bibelo'],
    ['blanc', 'blã'],
    ['bœuf', 'bøf'],
    ['bogoss', 'bogos'],
    ['bonbon', 'bõbõ'],
    ['Bruxelles', 'brysɛl'],
    ['buisson', 'bɥisõ'],

    ['caecum', 'sekʌm'],
    ['cæcal', 'sekal'],
    ['calmement', 'kalmømã'],
    ['cartes', 'kart'],
    ['cases', 'kaz'],
    ['cerf', 'sɛr'],
    ['chaire', 'ʃɛr'],
    ['chateau', 'ʃato'],
    ['chateaux', 'ʃato'],
    ['chemin', 'ʃemẽ'],
    ['chevreuil', 'ʃevrøj'],
    ['chien', 'ʃjẽ'],
    ['chrysanthème', 'krizãtɛm'],
    ['chtonien', 'ktonjẽ'],
    ['clef', 'kle'],
    ['coelacanthe', 'kølakãt'],
    ['cœlacanthe', 'kølakãt'],
    ['coing', 'kwẽ'],
    ['coings', 'kwẽ'],
    ['cool', 'kul'],
    ['conne', 'kɔn'],
    ['constitution', 'kõstitysjõ'],
    ['contestation', 'kõtɛstasjõ'],
    ['coucou', 'kuku'],

    ['daim', 'dẽ'],
    ['darmstadt', 'darmstat'],
    ['démocratie', 'demokrasi'],
    ['dessein', 'desẽ'],
    ['deuil', 'døj'],
    ['dévorée', 'devore'],
    ['doigt', 'dwa'],

    ['emmerder', 'ãmɛrde'],
    ['essaim', 'esẽ'],
    ['et', 'e'],
    ['euphorie', 'øfori'],
    ['eux', 'ø'],
    ['excalibur', 'ekskalibyr'],
    ['exception', 'eksepsjõ'],

    ['faisan', 'føzã'],
    ['faisons', 'føzõ'],
    ['faisiez', 'føzje'],
    ['faon', 'fã'],
    ['femme', 'fam'],
    ['fête', 'fɛt'],
    ['finaux', 'fino'],
    ['flop', 'flop'],
    ['fluet', 'flyɛ'],
    ['forestier', 'forɛstje'],
    ['forêt', 'forɛ'],

    ['galop', 'galo'],
    ['genoux', 'ʒenu'],
    ['gérard', 'ʒerar'],
    ['gnaquer', 'njake'],
    ['gnognotte', 'njonjot'],
    ['gnon', 'njõ'],
    ['gnosticisme', 'gnostisism'],
    ['gnou', 'gnu'],
    ['guillaume', 'gijom'],

    ['hasard', 'azar'],
    ['horrible', 'oribl'],

    ['illégal', 'illegal'],
    ['imbu', 'ẽby'],
    ['inquiet', 'ẽkjɛ'],
    ['inquisition', 'ẽkizisjõ'],

    ['javelot', 'ʒavelo'],
    ['jeu', 'ʒø'],
    ['julie', 'ʒyli'],

    ['laitue', 'lɛty'],
    ['lapin', 'lapẽ'],
    ['lyncher', 'lẽʃe'],

    ['manger', 'mãʒe'],
    ['manteau', 'mãto'],
    ['mes', 'mɛ'],
    ['milliard', 'miljar'],
    ['million', 'miljõ'],
    ['montez', 'mõte'],
    ['motclef', 'mokle'],

    ['nerf', 'nɛr'],
    ['nimbée', 'nẽbe'],
    ['noir', 'nwar'],
    ['nos', 'no'],
    ['noyau', 'nwajo'],
    ['noyauter', 'nwajote'],

    ['oeil', 'øj'],
    ['œil', 'øj'],
    ['oeuf', 'øf'],
    ['oiseau', 'wazo'],
    ['ombres', 'õbr'],
    ['oreille', 'orɛj'],
    ['ornithorynque', 'ornitorẽk'],
    ['ôter', 'ote'],
    ['où', 'u'],
    ['oyez', 'oje'],

    ['pain', 'pẽ'],
    ['paon', 'pã'],
    ['parpaing', 'parpẽ'],
    ['parterre', 'partɛr'],
    ['pharisien', 'farizjẽ'],
    ['pharynx', 'farẽks'],
    ['plomb', 'plõ'],
    ['plombes', 'plõb'],
    ['poing', 'pwẽ'],
    ['point', 'pwẽ'],
    ['poix', 'pwa'],
    ['pomme', 'pɔm'],
    ['pommes', 'pɔm'],
    ['pommeaux', 'pomo'],
    ['posément', 'pozemã'],
    ['poubelle', 'pubɛl'],
    ['poux', 'pu'],
    ['puissamment', 'pɥisamã'],

    ['quidam', 'kidam'],

    ['rach', 'rak'],
    ['rayon', 'rɛjõ'],
    ['rayonner', 'rɛjone'],
    ['renne', 'rɛn'],
    ['rhume', 'rym'],

    ['salop', 'salo'],
    ['sagement', 'saʒømã'],
    ['savon', 'savõ'],
    ['sashimi', 'saʃimi'],
    ['scenario', 'senarjo'],
    ['sciemment', 'sjamã'],
    ['scotcher', 'skotʃe'],
    ['serf', 'sɛr'],
    ['ses', 'sɛ'],
    ['shawarma', 'ʃawarma'],
    ['synthèse', 'sẽtɛz'],
    ['synthétique', 'sẽtetik'],
    ['syrop', 'siro'],

    ['terrain', 'tɛrrẽ'],
    ['tes', 'tɛ'],
    ['thérapie', 'terapi'],
    ['tiare', 'tjar'],
    ['top', 'top'],
    ['toutou', 'tutu'],
    ['tronc', 'trõ'],
    ['trop', 'tro'],
    ['truelle', 'tryɛl'],

    ['vademecum', 'vademekʌm'],
    ['vair', 'vɛr'],
    ['verre', 'vɛr'],
    ['villa', 'villa'],
    ['villain', 'vilẽ'],
    ['vos', 'vo'],

    ['wagon', 'vagõ'],
    ['wapiti', 'wapiti'],

    ['xylophone', 'gzilofon'],

    ['yannick', 'janik'],
    ['yeux', 'jø'],

    ['zèbre', 'zɛbr'],
    ['zoo', 'zoo'],
    ['zoologie', 'zooloʒi'],
    ['zyeuter', 'zjøte']
  ]
};
