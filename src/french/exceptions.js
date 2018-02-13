/**
 * Phonogram French Exceptions
 * ============================
 *
 * Gathering every found word that could not be solved by generic rules alone.
 */
import {compileExceptions} from '../helpers';

const EXCEPTIONS = {
  accent: 'a(cc•ks)(ent•ã)',
  agen: 'a(g•ʒ)(en•ẽ)',
  aïe: 'a(ïe•j)',
  ail: 'a(il•j)',
  almanach: 'almana(ch•)',
  amer: 'am(e•ɛ)r',
  août: '(aoû•u)t',
  aout: '(aou•u)t',
  aoûtat: 'a(oû•u)ta(t•)',
  aoutat: 'a(oû•u)ta(t•)',
  aulx: '(aulx•o)',
  auxerres: '(au•o)(x•s)ɛ(rres•r)',
  azimut: 'azim(u•y)t',
  barbecue: 'barb(e•ø)(cue•kju)',
  boniment: 'bonim(ent•ã)',
  broc: 'br(oc•o)',
  bruxelles: 'br(u•y)(x•s)(e•ɛ)(lles•l)',
  but: 'b(u•y)t',
  caen: '(c•k)(aen•ã)',
  caoutchouc: '(c•k)a(ou•u)t(ch•ʃ)(ouc•u)',
  ceci: '(c•s)(e•ø)(c•s)i',
  ceps: '(c•s)(e•ɛ)p(s•)',
  ces: '(c•s)(es•ɛ)',
  cet: '(c•s)(e•ɛ)t',
  chut: '(ch•ʃ)(u•y)t',
  ciment: '(c•s)im(ent•ã)',
  comment: 'c(o•ɔ)(mm•m)(ent•ã)',
  couscous: '(c•k)(ou•u)s(c•k)(ou•u)s',
  croc: '(c•k)r(oc•o)',
  dent: 'd(ent•ã)',
  des: 'd(e•ɛ)(s•)',
  dix: 'di(x•s)',
  en: '(en•ã)',
  entrelac: '(en•ã)tr(e•ø)la(c•)',
  es: '(es•ɛ)',
  est: '(est•ɛ)',
  estomac: '(e•ɛ)stom(ac•a)',
  et: 'e(t•)',
  femme: 'f(e•a)(mme•m)',
  fez: 'f(e•ɛ)z',
  filament: 'filam(ent•ã)',
  fils: 'fi(ls•s)',
  fusil: 'f(u•y)(s•z)(il•i)',
  gageure: 'ga(g•ʒ)(eu•y)r(e•)',
  gentil: '(g•ʒ)(en•ã)t(il•i)',
  hier: '(h•)(ie•ijɛ)r',
  impatiemment: '(im•ẽ)pa(tiemment•sjamã)',
  keus: 'k(eu•ø)s',
  jeun: '(j•ʒ)(eun•ẽ)',
  joug: '(j•ʒ)(oug•u)',
  les: 'l(es•ɛ)',
  long: 'l(ong•õ)',
  mahous: 'ma(h•)(ou•u)s',
  maous: 'ma(ou•u)s',
  ment: 'm(ent•ã)',
  merguez: 'm(e•ɛ)r(gu•g)(e•ɛ)z',
  mes: 'm(es•ɛ)',
  messieurs: 'me(ssieurs•sjø)',
  metz: 'm(e•ɛ)(tz•s)',
  moeurs: 'm(oeu•ʌ)rs',

  // TODO: should avoid this duplication
  mœurs: 'm(oeu•ʌ)rs',
  monsieur: 'm(on•ø)s(ieur•jø)',
  moult: 'm(ou•u)lt',
  munster: 'm(un•ẽ)st(e•ɛ)r',
  münster: 'm(ün•ẽ)st(e•ɛ)r',
  net: 'n(et•ɛt)',
  nos: 'n(os•o)',
  oblong: 'obl(ong•õ)',
  oignon: '(oi•o)(gn•nj)(on•õ)',
  outil: '(ou•u)t(il•i)',
  papaye: 'papa(ye•j)',
  patiemment: 'pa(tiemment•sjamã)',
  perdrix: 'p(e•ɛ)rdri(x•)',
  persil: 'p(e•ɛ)rs(il•i)',
  prix: 'pri(x•)',
  que: '(qu•k)(e•ø)',
  rang: 'r(ang•ã)',
  raout: 'ra(ou•u)t',
  raz: 'ra(z•)',
  rets: 'r(ets•ɛ)',
  rez: 're(z•)',
  rut: 'r(u•y)t',
  sent: 's(ent•ã)',
  sept: 's(e•ɛ)(p•)t',
  ses: 's(es•ɛ)',
  six: 'si(x•s)',
  tabac: 'tab(ac•a)',
  tes: 't(es•ɛ)',
  tous: 't(ou•u)s',
  tranquille: 'tr(an•ã)(qu•k)i(lle•l)',
  trans: 'tr(an•ã)s',
  troyes: 'tr(oyes•wa)',
  uppercut: '(u•y)(pp•p)(e•ɛ)r(c•k)(u•y)t',
  vent: 'v(ent•ã)',
  vos: 'v(os•o)',
  yaourt: '(y•j)a(ou•u)rt',
  zeus: '(z•dz)(eu•ø)s'
};

const plurals = [
  'accent',
  'août',
  'aout',
  'aoûtat',
  'aoutat',
  'azimut',
  'boniment',
  'broc',
  'but',
  'caoutchouc',
  'chut',
  'ciment',
  'croc',
  'dent',
  'entrelac',
  'estomac',
  'femme',
  'filament',
  'fusil',
  'gageure',
  'gentil',
  'joug',
  'long',
  'monsieur',
  'moult',
  'net',
  'oblong',
  'oignon',
  'outil',
  'papaye',
  'persil',
  'rang',
  'raout',
  'rut',
  'tabac',
  'uppercut',
  'vent',
  'villa',
  'yaourt',
  'wagon'
];

plurals.forEach(word => {
  const plural = word + 's';
  EXCEPTIONS[plural] = EXCEPTIONS[word] + '(s•)';
});

export default compileExceptions(EXCEPTIONS);
