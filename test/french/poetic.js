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
    ['Abidjan', 'abidʒã'],
    ['aigüe', 'ɛgy'],
    ['aiguës', 'ɛgy'],
    ['ail', 'aj'],
    ['alcool', 'alkɔl'],
    ['alcoolisé', 'alkɔlize'],
    ['almanach', 'almana'],
    ['accentuation', 'aksãtyasjõ'],
    ['âme', 'am'],
    ['ambiance', 'ãbjãs'],
    ['amphétamine', 'ãfetamin'],
    ['an', 'ã'],
    ['antagoniste', 'ãtagonist'],
    ['antisocial', 'ãtisosjal'],
    ['août', 'ut'],
    ['aplomb', 'aplõ'],
    ['arabesque', 'arabɛsk'],
    ['architecture', 'arʃitɛktyr'],
    ['arhe', 'ar'],
    ['aux', 'o'],
    ['Auxerres', 'osɛr'],
    ['auxilliaire', 'oksiljɛr'],
    ['ayant', 'ɛjã'],
    ['ayatollah', 'ajatɔla'],
    ['ayez', 'ɛje'],

    ['Bach', 'bak'],
    ['baie', 'bɛ'],
    ['baignoire', 'bɛnwar'],
    ['barbecue', 'barbøkju'],
    ['beauvillaine', 'bovilɛn'],
    ['bel', 'bɛl'],
    ['belle', 'bɛl'],
    ['belles', 'bɛl'],
    ['beau', 'bo'],
    ['bibelot', 'bibelo'],
    ['bitte', 'bit'],
    ['blanc', 'blã'],
    ['bœuf', 'bʌf'],
    ['bogoss', 'bogɔs'],
    ['bonbon', 'bõbõ'],
    ['bretzel', 'bretsɛl'],
    // ['brioche', 'briɔʃ'],
    ['Bruxelles', 'brysɛl'],
    ['buisson', 'bɥisõ'],

    ['cacochyme', 'kakoʃim'],
    ['caecum', 'sekʌm'],
    ['cæcal', 'sekal'],
    ['calmement', 'kalmømã'],
    ['camembert', 'kamãbɛr'],
    ['Carentan', 'karãtã'],
    ['cartes', 'kart'],
    ['cases', 'kaz'],
    ['cerf', 'sɛr'],
    ['ceriseraies', 'sørizørɛ'],
    ['chaire', 'ʃɛr'],
    ['chateau', 'ʃato'],
    ['chateaux', 'ʃato'],
    ['chemin', 'ʃømẽ'],
    ['chevreuil', 'ʃøvrøj'],
    ['chien', 'ʃjẽ'],
    ['chiroubles', 'ʃirubl'],
    ['chnoque', 'ʃnɔk'],
    ['chorizo', 'ʃorizo'],
    ['chrysanthème', 'krizãtɛm'],
    ['chtonien', 'ktonjẽ'],
    ['claymore', 'klɛmɔr'],
    ['clef', 'kle'],
    ['cloque', 'klɔk'],
    ['coelacanthe', 'kølakãt'],
    ['cœlacanthe', 'kølakãt'],
    ['coing', 'kwẽ'],
    ['coings', 'kwẽ'],
    ['coït', 'koit'],
    ['coit', 'kwa'],
    ['col', 'kɔl'],
    ['cool', 'kul'],
    ['confidentiel', 'kõfidãsjɛl'],
    ['confidentielle', 'kõfidãsjɛl'],
    ['conne', 'kɔn'],
    ['constitution', 'kõstitysjõ'],
    ['contestation', 'kõtɛstasjõ'],
    ['coucou', 'kuku'],
    ['couille', 'kuj'],
    ['craie', 'krɛ'],
    ['cruel', 'kryɛl'],
    ['cul', 'ky'],

    ['daim', 'dẽ'],
    ['darmstadt', 'darmstat'],
    ['démocratie', 'demokrasi'],
    ['dessein', 'desẽ'],
    ['deuil', 'døj'],
    ['dévorée', 'devore'],
    ['doigt', 'dwa'],
    ['Doisneau', 'dwano'],
    ['du', 'dy'],
    ['dû', 'dy'],

    ['effet', 'efɛ'],
    ['effraie', 'efrɛ'],
    ['élection', 'elɛksjõ'],
    ['emmerder', 'ãmɛrde'],
    ['empâtement', 'ãpatømã'],
    // ['engrosser', 'ãgrose'],
    ['essaim', 'esẽ'],
    ['ès', 'ɛs'],
    ['es', 'ɛ'],
    ['est', 'ɛ'],
    ['et', 'e'],
    ['euphorie', 'øfori'],
    ['eu', 'y'],
    ['eusse', 'ys'],
    ['eussiez', 'ysje'],
    ['Eustache', 'østaʃ'],
    ['eût', 'y'],
    ['eux', 'ø'],
    ['excalibur', 'ekskalibyr'],
    ['exception', 'eksepsjõ'],
    ['excitation', 'eksitasjõ'],
    ['exulter', 'egzylte'],
    ['exutoire', 'egzytwar'],

    ['faisan', 'føzã'],
    ['faisons', 'føzõ'],
    ['faisiez', 'føzje'],
    ['faon', 'fã'],
    ['femme', 'fam'],
    ['fenouil', 'fønuj'],
    ['fête', 'fɛt'],
    ['fils', 'fis'],
    ['finaux', 'fino'],
    ['floc', 'flɔk'],
    ['flop', 'flɔp'],
    ['fluet', 'flyɛ'],
    ['folie', 'foli'],
    ['folle', 'fɔl'],
    ['folles', 'fɔl'],
    ['forestier', 'forɛstje'],
    ['forêt', 'forɛ'],
    ['fouine', 'fuin'],
    ['fresne', 'frɛn'],

    ['gageure', 'gaʒyr'],
    ['galop', 'galo'],
    ['gaufres', 'gofr'],
    ['gazole', 'gazɔl'],
    ['genoux', 'ʒenu'],
    ['gérard', 'ʒerar'],
    ['gleyre', 'glɛr'],
    ['gout', 'gu'],
    ['goût', 'gu'],
    ['gnaquer', 'njake'],
    ['gnognotte', 'njonjɔt'],
    ['gnôle', 'njol'],
    ['gnon', 'njõ'],
    ['gnosticisme', 'gnostisism'],
    ['gnou', 'gnu'],
    ['gouache', 'guaʃ'],
    ['guacamole', 'gwakamɔl'],
    ['guatémala', 'gwatemala'],
    ['guatémaltèque', 'gwatemaltɛk'],
    ['guam', 'gwam'],
    ['guillaume', 'gijom'],
    ['güise', 'gyiz'],

    ['hasard', 'azar'],
    ['haschich', 'aʃiʃ'],
    ['hêtre', 'ɛtr'],
    ['homosexuel', 'omoseksyɛl'],
    ['horrible', 'oribl'],
    ['hun', 'ẽ'],

    ['illégal', 'illegal'],
    ['imbu', 'ẽby'],
    ['inquiet', 'ẽkjɛ'],
    ['inquisition', 'ẽkizisjõ'],

    ['javelot', 'ʒavelo'],
    ['jeu', 'ʒø'],
    ['jeun', 'ʒẽ'],
    ['julie', 'ʒyli'],

    ['laitue', 'lɛty'],
    ['lapin', 'lapẽ'],
    ['lavabo', 'lavabo'],
    ['litigieuse', 'litiʒjøz'],
    ['Livaro', 'livaro'],
    ['lobe', 'lɔb'],
    ['lunaire', 'lynɛr'],
    ['lyncher', 'lẽʃe'],

    ['mangeant', 'mãʒã'],
    ['mangeoire', 'mãʒwar'],
    ['mangeoires', 'mãʒwar'],
    ['manger', 'mãʒe'],
    ['manteau', 'mãto'],
    ['mes', 'mɛ'],
    ['mesclun', 'mɛsklẽ'],
    ['messieurs', 'mesjø'],
    ['mezzanine', 'mɛdzanin'],
    ['milliard', 'miljar'],
    ['milliers', 'milje'],
    ['million', 'miljõ'],
    ['minutie', 'minysi'],
    ['moignon', 'mwanjõ'],
    ['monsieur', 'møsjø'],
    ['monsieurs', 'møsjø'],
    ['montez', 'mõte'],
    ['motte', 'mɔt'],
    ['Munster', 'mẽstɛr'],
    ['Münster', 'mẽstɛr'],

    ['nerf', 'nɛr'],
    ['nimbée', 'nẽbe'],
    ['noir', 'nwar'],
    ['nos', 'no'],
    ['noyau', 'nwajo'],
    ['noyauter', 'nwajote'],
    ['nuit', 'nɥi'],

    ['ocre', 'ɔkr'],
    ['oeil', 'ʌj'],
    ['œil', 'ʌj'],
    ['oeuf', 'ʌf'],
    ['oignon', 'onjõ'],
    ['oiseau', 'wazo'],
    ['ombres', 'õbr'],
    ['onion', 'onjõ'],
    ['oreille', 'orɛj'],
    ['ornithorynque', 'ornitorẽk'],
    ['ôter', 'ote'],
    ['où', 'u'],
    ['Ouzbékistan', 'uzbekistã'],
    ['oyez', 'oje'],

    ['pain', 'pẽ'],
    ['paon', 'pã'],
    ['parpaing', 'parpẽ'],
    ['parterre', 'partɛr'],
    ['patronage', 'patronaʒ'],
    ['pause', 'poz'],
    ['pestacle', 'pɛstakl'],
    ['pétaouchnok', 'petauʃnɔk'],
    ['pétrole', 'petrɔl'],
    ['pharisien', 'farizjẽ'],
    ['pharynx', 'farẽks'],
    ['pigeon', 'piʒõ'],
    ['plomb', 'plõ'],
    ['plombes', 'plõb'],
    ['plongeoir', 'plõʒwar'],
    ['pneu', 'pnø'],
    ['poing', 'pwẽ'],
    ['point', 'pwẽ'],
    ['poix', 'pwa'],
    ['pomme', 'pɔm'],
    ['pommes', 'pɔm'],
    ['pommeaux', 'pomo'],
    ['pose', 'poz'],
    ['posément', 'pozemã'],
    ['poubelle', 'pubɛl'],
    ['poux', 'pu'],
    ['proc', 'prɔk'],
    ['puissamment', 'pɥisamã'],

    ['quadrilatère', 'kwadrilatɛr'],
    ['qualité', 'kalite'],
    ['quantité', 'kãtite'],
    ['quartz', 'kwarts'],
    ['que', 'kø'],
    ['quidam', 'kidam'],
    ['quoi', 'kwa'],

    ['rach', 'rak'],
    ['rappelle', 'rapɛl'],
    ['rappelez', 'rapøle'],
    ['rat', 'ra'],
    ['rayon', 'rɛjõ'],
    ['rayoner', 'rɛjone'],
    ['reine', 'rɛn'],
    ['remerciements', 'rømɛrsimã'],
    ['renard', 'rønar'],
    ['renart', 'rønar'],
    ['renne', 'rɛn'],
    ['requartzifier', 'røkwartsifje'],
    ['resnober', 'røsnobe'],
    ['resurgir', 'røsyrʒir'],
    ['rhume', 'rym'],
    ['roi', 'rwa'],
    ['rose', 'roz'],
    ['rote', 'rɔt'],
    ['roter', 'rote'],
    ['roy', 'rwa'],

    ['salop', 'salo'],
    ['salut', 'saly'],
    ['sagement', 'saʒømã'],
    ['savon', 'savõ'],
    ['sashimi', 'saʃimi'],
    ['scenario', 'senarjo'],
    ['schnock', 'ʃnɔk'],
    ['schnoque', 'ʃnɔk'],
    ['sciemment', 'sjamã'],
    ['scotcher', 'skotʃe'],
    ['sensation', 'sãsasjõ'],
    ['sensationnel', 'sãsasjonɛl'],
    ['serf', 'sɛr'],
    ['ses', 'sɛ'],
    ['shawarma', 'ʃawarma'],
    ['snob', 'snɔb'],
    ['sortie', 'sorti'],
    ['souhaites', 'suɛt'],
    ['squale', 'skwal'],
    ['Staël', 'stɛl'],
    ['susurrer', 'sysyre'],
    ['synthèse', 'sẽtɛz'],
    ['synthétique', 'sẽtetik'],
    ['syrop', 'siro'],

    ['tapecul', 'tapky'],
    ['téraflops', 'teraflɔps'],
    ['terrain', 'tɛrrẽ'],
    ['tes', 'tɛ'],
    ['thérapie', 'terapi'],
    ['tiare', 'tjar'],
    ['toc', 'tɔk'],
    ['top', 'tɔp'],
    ['toque', 'tɔk'],
    ['toquer', 'tɔke'],
    ['toutou', 'tutu'],
    ['tricératops', 'triseratɔps'],
    ['troène', 'troɛn'],
    ['tronc', 'trõ'],
    ['trop', 'tro'],
    ['truelle', 'tryɛl'],
    ['tunnel', 'tynɛl'],

    ['un', 'ẽ'],
    ['unitaire', 'ynitɛr'],

    ['vademecum', 'vademekʌm'],
    ['vair', 'vɛr'],
    ['verre', 'vɛr'],
    ['villa', 'vila'],
    ['villain', 'vilẽ'],
    ['villardière', 'vilardjɛr'],
    ['ville', 'vil'],
    ['vîmes', 'vim'],
    ['vos', 'vo'],
    ['vraie', 'vrɛ'],

    ['wagon', 'vagõ'],
    ['wapiti', 'wapiti'],

    ['xylophone', 'gzilofɔn'],

    ['yannick', 'janik'],
    ['yeux', 'jø'],

    ['zèbre', 'zɛbr'],
    ['zoo', 'zoo'],
    ['zoologie', 'zooloʒi'],
    ['zyeuter', 'zjøte']
  ]
};
