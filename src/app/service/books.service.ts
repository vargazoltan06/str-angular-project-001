import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  list: Book[] = [{
    id: 1,
    catId: 1,
    name: "Star Wars: Lázadók és zsiványok ",
    description: "Kutaszdroidok ezrei rajzottak szét a galaxisban, hogy a lázadók nyomára leljenek, ezért a Felkelők Szövetségének hősei új küldetésekre indulnak, hogy eltereljék a figyelmet szorongatott helyzetben lévő bajtársaikról.",
    image: "../../assets/img/Star wars lázadók.jpg",
    price: 0.04,
    stock: 14,
    featured: true,
    active: true
  }, {
    id: 2,
    catId: 1,
    name: "Star Wars: Thrawn",
    description: "Vajon hogyan vált Thrawn főadmirális a messzi-messzi galaxis egyik legfélelmetesebb stratégájává? A fiatal Thrawn hadnagy a legkiemelkedőbb eredménnyel végzett a Birodalmi Akadémián",
    image: "../../assets/img/Star Wars Thrawn.jpg",
    price: 1.60,
    stock: 15,
    featured: true,
    active: true
  }, {
    id: 3,
    catId: 2,
    name: "Digitális hajsza",
    description: "Zsarolóvírusok, trójai alkalmazások és fertőzött számítógépekből álló botnetek lesnek ránk a világháló minden sarkában.",
    image: "../../assets/img/Digitális hajsza.jpg",
    price: 0.32,
    stock: 4,
    featured: false,
    active: true
  }, {
    id: 4,
    catId: 2,
    name: "Digitális hajsza 2",
    description: "Internetes zaklatók üldöznek minket, elkövetők honlapokat törnek fel vagy tesznek elérhetetlenné a kibertérben.",
    image: "../../assets/img/Digitális hajsza 2.jpg",
    price: 1.77,
    stock: 20,
    featured: true,
    active: true
  }, {
    id: 5,
    catId: 2,
    name: "HTML5 Canvas grafika programozása",
    description: "A HTML5 nagyon jó minőségű dinamikus grafikus megjelenítést tesz lehetővé a Canvas objektumán keresztül.",
    image: "../../assets/img/HTML5 Canvas grafika programozása.jpg",
    price: 6.29,
    stock: 8,
    featured: false,
    active: true
  }, {
    id: 6,
    catId: 2,
    name: "Nyomtatók programozása",
    description: "A nyomtatók programozása méltatlanul az egyik leginkább elhanyagolt programozási témakör.",
    image: "../../assets/img/Nyomtatók programozása.jpg",
    price: 7.42,
    stock: 20,
    featured: true,
    active: false
  }, {
    id: 7,
    catId: 1,
    name: "Thor: Mennydörgés istene 2. ",
    description: "Malekith, az Elátkozott újra Asgardot fenyegeti! A sötét elfek egykori ura megszökik az alvilágból, hogy visszafoglalja trónját, és kegyetlen bosszút álljon Asgardon. ",
    image: "../../assets/img/Thor Mennydörgés istene 2.jpg",
    price: 1.31,
    stock: 5,
    featured: true,
    active: true
  }, {
    id: 8,
    catId: 2,
    name: "Direct2D programozás dióhéjban",
    description: "Ez a kiadvány a jelenleg elérhető legtömörebb gyakorlati bevezetést nyújtja a Direct2D programozásába.",
    image: "../../assets/img/Direct2D programozás dióhéjban.jpg",
    price: 6.10,
    stock: 17,
    featured: false,
    active: true
  }, {
    id: 9,
    catId: 2,
    name: "Numerikus módszerek Python nyelven",
    description: "Ez a könyv azoknak szól, akiknek gyors, azonnal alkalmazható numerikus megoldásokra van szükségük, akár tanulmányaik, akár mindennapi munkájuk során.",
    image: "../../assets/img/Numerikus módszerek Python nyelven.jpg",
    price: 4.70,
    stock: 19,
    featured: false,
    active: false
  }, {
    id: 10,
    catId: 1,
    name: "The Walking Dead - Élőhalottak 27. - A Suttogó háború",
    description: "Rettenetes járvány söpört végig a bolygón. Visszatértek a holtak, és az élőkre vadásznak.",
    image: "../../assets/img/The Walking Dead - Élőhalottak 27.jpg",
    price: 6.88,
    stock: 3,
    featured: true,
    active: true
  }, {
    id: 11,
    catId: 2,
    name: "Online térképes alkalmazások",
    description: "Könyvünkben az internet segítségével bárki számára hozzáférhető, az élet számos területén használható térképes oldalakat és érdekes lehetőségeket mutatunk be.",
    image: "../../assets/img/Online térképes alkalmazások.jpg",
    price: 7.65,
    stock: 13,
    featured: false,
    active: true
  }, {
    id: 12,
    catId: 2,
    name: "Influencer videók készítése netre",
    description: "Az influencer jelenség napjaink népszerű, divatos trendje, melyben sikeresnek lenni nem egyszerű feladat.",
    image: "../../assets/img/Influencer videók készítése netre.jpg",
    price: 6.84,
    stock: 19,
    featured: false,
    active: true
  }, {
    id: 13,
    catId: 2,
    name: "PHP, MySQL & JavaScript 7 könyv 1-ben",
    description: "A könyvben az összes olyan különböző, dinamikus webalkalmazások létrehozásához használt technológiával foglalkozunk, amely képes adatokat nyomon követni, és rendezett és kellemes módon megjeleníteni azokat.",
    image: "../../assets/img/PHP, MySQL, JavaScript 7 könyv 1-ben.jpg",
    price: 8.81,
    stock: 11,
    featured: true,
    active: false
  }, {
    id: 14,
    catId: 1,
    name: "Megváltás 2.",
    description: "A dél-francia falucska, Beaucaire lakói szembeszállnak a Szerzetessel és rablóbandájával, akik az Úr nevében gyilkolják az ártatlanokat. ",
    image: "../../assets/img/Megváltás 2.jpg",
    price: 7.11,
    stock: 7,
    featured: false,
    active: true
  }, {
    id: 15,
    catId: 2,
    name: "Kiáltvány a bizalomról",
    description: "Attól a pillanattól kezdve, hogy felébredünk, és feloldjuk a telefonunk képernyőjét, adatokat állítunk elő.",
    image: "../../assets/img/Kiáltvány a bizalomról.jpg",
    price: 9.77,
    stock: 9,
    featured: false,
    active: true
  }, {
    id: 16,
    catId: 2,
    name: "Tervezz bátran!",
    description: "Az oldaltervezés és a tipográfia szabályait néhány egyszerű alapelvre visszavezető könyv anyaga Robin Williams évtizedes oktatói és tervezőgrafikusi tapasztalatait összegzi közérthető módon. ",
    image: "../../assets/img/Tervezz bátran.jpg",
    price: 9.05,
    stock: 1,
    featured: false,
    active: false
  }, {
    id: 17,
    catId: 2,
    name: "Behálózva",
    description: "A 21. század elejének talán legfontosabb tudományos felfedezése annak meglátása, hogy minden hálózat, rendszer azonos szervezőelv alapján jön létre, és egyszerű, de hatékony szabályok révén működik.",
    image: "../../assets/img/Behálózva.jpg",
    price: 7.45,
    stock: 5,
    featured: true,
    active: true
  }, {
    id: 18,
    catId: 1,
    name: "Pókember: Új kezdet",
    description: "Peter Parker felvette már a versenyt veszedelmes gonosztevőkkel és legendás hősökkel is, de lehet, hogy a gimis élet kifog rajta.",
    image: "../../assets/img/Pókember Új kezdet.jpg",
    price: 0.24,
    stock: 3,
    featured: true,
    active: false
  }, {
    id: 19,
    catId: 1,
    name: "Star Wars: A célpont: Vader",
    description: "A Sith sötét nagyura egy titokzatos bűnöző szindikátus után nyomoz, amely a Birodalom határán túl működik.",
    image: "../../assets/img/Star Wars A célpont Vader.jpg",
    price: 4.54,
    stock: 12,
    featured: true,
    active: true
  }, {
    id: 20,
    catId: 1,
    name: "Star Wars: A Vérvörös Birodalom",
    description: "A Dark Horse gondozásában 1997 és 2012 között megjelent képregénysorozat három összefüggő történetfüzérből áll (A Vérvörös Birodalom, A vér tanácsa és az Elveszett birodalom)",
    image: "../../assets/img/Star Wars A Vérvörös Birodalom.jpg",
    price: 4.55,
    stock: 5,
    featured: false,
    active: true
  }, {
    id: 21,
    catId: 2,
    name: "DarkNet",
    description: "A DarkNet olyan szerverek és egyenrangú számítógépek összessége, melyek csak speciális, titkosítást alkalmazó web böngésző segítségével érhetők el, így ez egyúttal az anonim internetezés lehetőségét is jelenti.",
    image: "../../assets/img/DarkNet.jpg",
    price: 3.73,
    stock: 7,
    featured: true,
    active: false
  }, {
    id: 22,
    catId: 1,
    name: "Rick and Morty - Tizedik rész",
    description: "Ez a kötet a gátlástalan tudósgéniusz, Rick Sanchez és ügyefogyott unokája, Morty Smith néhány önálló kalandját meséli el.",
    image: "../../assets/img/Rick and Morty Tizedik rész.jpg",
    price: 4.30,
    stock: 5,
    featured: false,
    active: true
  }, {
    id: 23,
    catId: 2,
    name: "3D programozás",
    description: "3D programozási elméletről sokat olvasni, de annál kevesebb információ lelhető fel konkrét programírási fogásokról.",
    image: "../../assets/img/3D programozás.jpg",
    price: 7.89,
    stock: 18,
    featured: true,
    active: true
  }, {
    id: 24,
    catId: 1,
    name: "A Vízió ",
    description: "Vízió emberré szeretne válni - és nincs emberibb dolog a családnál.",
    image: "../../assets/img/A Vízió.jpg",
    price: 2.42,
    stock: 6,
    featured: false,
    active: true
  }, {
    id: 25,
    catId: 1,
    name: "Nővérek",
    description: "Három hét. Két nővér. Egy autó. Egy igaz történet arról, milyen felnőni... egy hugival.",
    image: "../../assets/img/Nővérek.jpg",
    price: 3.86,
    stock: 1,
    featured: true,
    active: false
  }, {
    id: 26,
    catId: 2,
    name: "Digitális etikett",
    description: "A könyv célja, hogy ismertesse a digitális etikettet hétköznapi életünk négy fő területén: a munka, a párkapcsolat, a barátság és közösség terén.",
    image: "../../assets/img/Digitális etikett.jpg",
    price: 7.62,
    stock: 5,
    featured: false,
    active: true
  }, {
    id: 27,
    catId: 1,
    name: "Orgyilkos osztály - Deadly Class 5. - Körhinta",
    description: "Köszöntünk a 80-as évek Amerikájában, ahol kezdetét veszi az Orgyilkos osztály új korszaka!",
    image: "../../assets/img/Orgyilkos osztály Körhinta.jpg",
    price: 1.44,
    stock: 14,
    featured: true,
    active: false
  }, {
    id: 28,
    catId: 1,
    name: "Assassin's Creed: Origins",
    description: "Egyiptom, a Ptolemaidák uralmának utolsó, zűrzavaros évei.",
    image: "../../assets/img/Assassin's Creed Origins.jpg",
    price: 7.82,
    stock: 9,
    featured: true,
    active: true
  }, {
    id: 29,
    catId: 1,
    name: "Lucky Luke 40",
    description: "Lucky Luke egy váratlan örökségnek köszönhetően Lousianába megy.",
    image: "../../assets/img/Lucky Luke 40.jpg",
    price: 6.00,
    stock: 18,
    featured: true,
    active: false
  }, {
    id: 30,
    catId: 2,
    name: "Modern átverések",
    description: "Jelen könyv 25 különböző történetet tartalmaz, amelyekben a szereplők és a párbeszédek kitaláltak, de a bennük szereplő veszélyek nagyon is valósak, bárki, bármikor találkozhat azokkal a mindennapokban.",
    image: "../../assets/img/Modern átverések.jpg",
    price: 6.44,
    stock: 4,
    featured: true,
    active: false
  }, {
    id: 31,
    catId: 1,
    name: "1984",
    description: "Első alkalommal elevenedik meg képregényformában George Orwell 1949-ben megjelent világhírű, a náci és kommunista diktatúrák ihlette negatív utópiája.",
    image: "../../assets/img/1984.jpg",
    price: 4.63,
    stock: 2,
    featured: true,
    active: true
  }, {
    id: 32,
    catId: 2,
    name: "Az Excel példákon keresztül",
    description: "Az Excel nem véletlenül a világ egyik legnépszerűbb táblázatkezelő programja.",
    image: "../../assets/img/Az Excel példákon keresztül.jpg",
    price: 0.36,
    stock: 16,
    featured: true,
    active: false
  }, {
    id: 33,
    catId: 1,
    name: "Konc 3",
    description: "A Konc-sorozat harmadik kötetében Lucius, Bazsaly és Svindli túlélik a patkánylények támadását és épségben térnek vissza Lucius kocsmájába, Hordórévbe.",
    image: "../../assets/img/Konc 3.jpg",
    price: 9.63,
    stock: 20,
    featured: false,
    active: true
  }, {
    id: 34,
    catId: 2,
    name: "Android zsebkönyv",
    description: "Az androidos okostelefonok mára olyannyira részeivé váltak életünknek, hogy számos tevékenységet el sem lehetne képzelni nélküle.",
    image: "../../assets/img/Android zsebkönyv.jpg",
    price: 3.10,
    stock: 20,
    featured: false,
    active: false
  }, {
    id: 35,
    catId: 2,
    name: "Az SQL példákon keresztül",
    description: "Az SQL a relációs adatbázis-kezelők széles körben elterjedt lekérdezési nyelve.",
    image: "../../assets/img/Az SQL példákon keresztül.jpg",
    price: 5.26,
    stock: 2,
    featured: false,
    active: true
  }, {
    id: 36,
    catId: 2,
    name: "Office 2019",
    description: "E könyv segítségével megismerhetjük az Office 2019 programjainak kezelését.",
    image: "../../assets/img/Office 2019.jpg",
    price: 2.43,
    stock: 4,
    featured: true,
    active: false
  }, {
    id: 37,
    catId: 1,
    name: "Egri csillagok",
    description: "A képregény nemcsak gondosan felépített historikus korrajz, de egyben egy izgalmas és fordulatos hősi és szerelmi történet.",
    image: "../../assets/img/Egri csillagok.jpg",
    price: 8.25,
    stock: 8,
    featured: false,
    active: false
  }, {
    id: 38,
    catId: 2,
    name: "Word 2019 zsebkönyv",
    description: "E könyvecske segítségével megismerhetjük az Office 2019 szövegszerkesztő programjának, a Word 2019-nek kezelését.",
    image: "../../assets/img/Word 2019 zsebkönyv.jpg",
    price: 4.28,
    stock: 17,
    featured: true,
    active: false
  }, {
    id: 39,
    catId: 2,
    name: "Szoftverfejlesztés Java SE platformon",
    description: "Napjainkra a szoftverfejlesztés egyik vezető platformjává a Java nyelv vált: széles körben használják ipari és kutatási feladatok megvalósítására.",
    image: "../../assets/img/Szoftverfejlesztés Java SE platformon.jpg",
    price: 5.07,
    stock: 19,
    featured: true,
    active: true
  }, {
    id: 40,
    catId: 1,
    name: "Konc 2",
    description: "A sorozat második kötetében Konc Füle és a kuzinjai úgy tervezik, hogy a Hordórévben rendezett tavaszi vásár után hazatérnek Koncfalvára.",
    image: "../../assets/img/Konc 2.jpg",
    price: 4.28,
    stock: 10,
    featured: false,
    active: true
  }, {
    id: 41,
    catId: 1,
    name: "Ricky and Morty - Kilencedik rész",
    description: "Rick jó pár ellenséget szerzett magának az évek során, vajon mi történik, ha összeállnak, hogy revansot vegyenek rajta?",
    image: "../../assets/img/Ricky and Morty Kilencedik rész.jpg",
    price: 3.99,
    stock: 11,
    featured: true,
    active: false
  }, {
    id: 42,
    catId: 1,
    name: "Transmetropolitan",
    description: "A cyberpunk műfaj egyik alapművének is tartott TRANSMETROPOLITAN sorozattal vált Warren Ellis az egyik legjelentősebb képregényszerzővé.",
    image: "../../assets/img/Transmetropolitan.jpg",
    price: 2.16,
    stock: 1,
    featured: false,
    active: true
  }, {
    id: 43,
    catId: 2,
    name: "WTF?",
    description: "Ha valaki szeretne felkészülni a jövőre, és szeretné tudni, a technológia hogyan alakíthatja és segítheti majd a társadalmakat, számára a WTF? elengedhetetlen kalauz.",
    image: "../../assets/img/WTF.jpg",
    price: 0.69,
    stock: 3,
    featured: true,
    active: false
  }, {
    id: 44,
    catId: 2,
    name: "Hackertechnikák",
    description: "A Kezdő hackerek kézikönyve után jelen kiadvány segítségével erősen gyakorlatorientált módon, haladó szintű kiberbiztonsági témaköröket ismerhet meg és próbálhat ki az olvasó.",
    image: "../../assets/img/Hackertechnikák.jpg",
    price: 7.92,
    stock: 6,
    featured: false,
    active: false
  }, {
    id: 45,
    catId: 2,
    name: "Alkalmazásfejlesztés Android Studio rendszerben",
    description: "Az Android rendszer programozásával ismerkedők számára készült könyvünk segítségével egyszerűen megtanulhatja, hogyan készítsen saját maga is Androidos alkalmazásokat.",
    image: "../../assets/img/Alkalmazásfejlesztés Android Studio rendszerben.jpg",
    price: 6.95,
    stock: 9,
    featured: true,
    active: true
  }, {
    id: 46,
    catId: 1,
    name: "Kingsman - A titkos szolgálat",
    description: "Szupersztárokat rabolnak el szerte a világon, mindenféle magyarázat nélkül. A szuperkém Jack London kezd el dolgozni az ügyön.",
    image: "../../assets/img/Kingsman - A titkos szolgálat.jpg",
    price: 3.81,
    stock: 17,
    featured: true,
    active: false
  }, {
    id: 47,
    catId: 1,
    name: "Ánya kísértete",
    description: "Ánya sok mindenre számított, mit találhat egy kiszáradt kút mélyén, de egy új barát nem jutott volna eszébe.",
    image: "../../assets/img/Ánya kísértete.jpg",
    price: 1.32,
    stock: 3,
    featured: false,
    active: true
  }, {
    id: 48,
    catId: 1,
    name: "Deadpool a Megtorló ellen",
    description: "A Bank nevű bűnöző egy napon felbérli a nagydumás, zsémbes zsoldost, Deadpoolt, hogy vadássza le és ölje meg magát Frank Castle-t.",
    image: "../../assets/img/Deadpool a Megtorló ellen.jpg",
    price: 5.43,
    stock: 13,
    featured: false,
    active: false
  }, {
    id: 49,
    catId: 2,
    name: "AJAX adatbázis-kezelés Javascript alapon",
    description: "Könyvünk a JavaScript alapokon programozható adatbáziskezelés alapjait mutatja be, az AJAX technológián keresztül, könnyen érthető formában.",
    image: "../../assets/img/AJAX adatbázis kezelés Javascript alapon.jpg",
    price: 7.52,
    stock: 5,
    featured: true,
    active: false
  }, {
    id: 50,
    catId: 1,
    name: "A képregény története",
    description: "Ki ne emlékezne azokra a tikkasztó és lassan múló nyári szüneti délutánokra, amikor a forróság elől a Balaton-­parti hűs árnyékot adó fák alá menekülve, pokrócon fekve vagy a kempingszékben kuporogva képregényt olvasott?",
    image: "../../assets/img/A képregény története.jpg",
    price: 3.53,
    stock: 11,
    featured: false,
    active: true
  }]
  constructor() { }

  getFeatured(randomized?: boolean): Book[] {
    const featured = this.list.filter(item => item.featured);
    return randomized ? this.randomize(featured) : featured;
  }

  getActive(randomized?: boolean): Book[] {
    const active = this.list.filter(item => item.active);
    return randomized ? this.randomize(active) : active;
  }

  getCategory(category: number, randomized?: boolean): Book[] {
    const cat = this.list.filter(item => item.catId === category);
    return randomized ? this.randomize(cat) : cat;
  }

  randomize(sourceArray: any[]): any[] {
    return sourceArray.sort(() => Math.random() - 0.5);
  }

}
