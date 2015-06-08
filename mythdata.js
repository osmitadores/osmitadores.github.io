function createBadge(title, imgName, extra) {
/*
*   Descrição: Função que simplifica a criação das variáveis
*   das badges a partir do título da imagem e nome do arquivo
*   sem a extensão.
*   Args: 1. Título da imagem (string); 2. Nome do arquivo (string).
*/  
    if (!imgName){
        imgName = 'placejolder';
    }
    var path = 'http://os-mitadores.lucasflicky.com/files/theme/BADGES/';
    return '<img class="badgeicon" title="' + title + '" src="' + path + imgName + '.png">';
    
};


function dualTier(tierA, tierB) {

  var titleA = tierA[1];
  var path = 'http://os-mitadores.lucasflicky.com/files/theme/BADGES/';
  var imgNameA = tierB;

return ' ' + titleA + '<img class="subtier"  src="' + path + imgNameA + '.png">';
}
 

//Tier
    var mythUnicorn = createBadge('Mitador Unicorn: Raros porém participativos', 'uni');
    var mythPlatinum = createBadge('Mitador Platinum', 'plat');
    var mythSilver = createBadge('Mitador Silver', 'silver');
    var mythLegacy = createBadge('Mitador Legacy: Veterano dos primórdios!', 'legacy');
    var mythFresh = createBadge('Freshman: Mitadores Trainee', 'fresh');
    var mythGuest = createBadge('Guest: Não-mitador que convive na casa.', 'guest');
    var mythHonorary = createBadge('Mitador Honorary: Protegido pessoal de um Prime ou Platinum', 'honor');
    var mythLurker = createBadge('Lurker: Sempre nas sombras, eventualmente se pronuncia.', 'lurk');
    var mythGold = createBadge('Mitador Gold', 'gold');
    var mythGhost = createBadge('Mitador Ghost: Inativo há mais de um mês.', 'ghost');
    var mythPrime = createBadge('Mitador Prime: Os primeiros Mitadores, criadores da porra toda.', 'prime');



    var tierUnicorn   =   ["Unicorn",mythUnicorn];
    var tierPlatinum  =   ["Platinum",mythPlatinum];
    var tierSilver    =   ["Silver",mythSilver];
    var tierLegacy    =   ["Legacy",mythLegacy];
    var tierFreshman  =   ["Freshman",mythFresh];
    var tierGuest     =   ["Guest",mythGuest];
    var tierHonorary  =   ["Honorary",mythHonorary];
    var tierLurker    =   ["Lurker",mythLurker];
    var tierGold      =   ["Gold",mythGold];
    var tierGhost     =   ["Ghost",mythGhost];
    var tierPrime     =   ["Prime",mythPrime];
 



//Badges    
    var jogueiro = createBadge('Jogueiros: Sempre presentes nas jogatinas míticas', 'joy');
    var hangouteiro = createBadge('Hangouteiro: Sempre marcando presença nos Hangouts!', 'hang');
    var desenheiro = createBadge('Desenheiro: Depictador dos melhores momentos.', 'pen');
    var vassouraWielder = createBadge('Vassoura Wielder: Já vassourou alguém em uma situação realmente necessária', 'broom');
    var _3dsPlay = createBadge('3DS Teamplay: Jogou com mitadores via Nintendo 3DS', '3ds');
    var defiance = createBadge('Defiance: Sem medo de umas vassouradas', 'defiance');
    var pipoqueiro = createBadge('Arthur exclusive \'Pipoqueiro Badge\'', 'pop');
    var encontroMyth = createBadge('Encontro Mitador: eu fui!', 'group');
    var smashFesteiro = createBadge('Smashfesteiro', 'ssb');
    var smashFest2014 = createBadge('Newyear 2014: Smashfest - Eu fui!', '2014');
    var mechanicPunch = createBadge('Claro exclusive \'Mechanic Punch\' Badge', 'soc');
    var programeiro = createBadge('Programeiro: Ajuda a codar paradas mitadoras', 'code');
    var frukiFest = createBadge('Newyear 2013: Frukifest - Eu fui!', '2013');
    var streameiro = createBadge('Streameiro: Ocasionalmente promove Livestreams', 'live');
    var gardevoa = createBadge('Flicky exclusive \'Gardevobadge\' ', 'garde');
    var mitamores = createBadge('Os Mitamores: Espalhando amor entre os Mitos', 'mitamores');
    var doisPotes = createBadge('Luana exclusive \'Doooois Pooootes\' Badge', 'pots');
   
   
   
    var lendsClub = createBadge('Lends Club: Board Games com Mitadores', 'lends');
    var badgeWhore = createBadge('Badge Whore - Faço tudo por badges!', 'badwho');
    var kanaFest = createBadge('Kanafester - Gênios do Pseudo-Japonês', 'kana');
    var cupidRab = createBadge('Coelho exclusive \'Official Cupid\' Badge','cupid');
    var pauHd = createBadge('Aragão exclusive \'Pau em HD\' Badge','pauhd');
    var likeBomb = createBadge('Like Bomb - Top da balada','likebomb');
    var vidalGt = createBadge('Vidal exclusive \'Greentext\' Badge','greentxt');
    var vidalFdp = createBadge('Vidal exclusive \'Filhadaputópolis\' Badge','catan');
    var miauCaralho = createBadge('Ana exclusive \'MIAO CARALHO\' Badge');
    var ajudeiro = createBadge('Ajudeiro - Ele não é o Luciano, mas também ajuda pra caramba!');
    var redCoder = createBadge('Red Coder: Coder Lendário','redcoder');
    var goldenPen = createBadge('Golden Pen: Desenheiro Lendário');
    var tunelaa = createBadge('Tumeo exclusive \'???\' Badge');
    var wataZomb = createBadge('Watanabe Exclusive \'Japanese Horror Movie\' Badge','akuma');
    var preHistoric = createBadge('Mitador Jurássico - Os Mitadores Pré-Históricos','jurassic');
    var musicist = createBadge('Musiqueiro','music');
    var keidiPint = createBadge('Keidi exclusive \'Pinteiro\' Badge','print');
    var merito = createBadge('Mitador por mérito - Admin/Community pick','merito');
    var matricialPrint = createBadge('Vidal exclusive \'Impressora Matricial\' Badge','printer');
    var happyDoor = createBadge('Karen exclusive \'Porta Feliz\' Badge','hpydoa');
    var satanicat = createBadge('Matsuna exclusive \'Satanicat\' Badge','satanicat');
    var karaoke = createBadge('Karaokê Mitador: Eu fui!','karaoke');
    var nennys = createBadge('Mitador Nennys: o mais novo','nennys');
    var elder = createBadge('Mitador Ancião: o mais velho','ancient');
    var mariEx = createBadge('Pall exclusive \'!!!\' Badge','excla');
    var fuQuest = createBadge('Fuquest/OsMitadores the Game: Devteam','fq');
    var radiant = createBadge('Radiant Historia 11k','historia');

    var genesis = createBadge('Anfitrião de SEGA Genesis','genesis');
    var n64 = createBadge('Anfitrião de Nintendo 64','n64');
    var ps2 = createBadge('Anfitrião de Playstation 2','ps2');
    var ps3 = createBadge('Anfitrião de Playstation 3','ps3');
    var ps4 = createBadge('Anfitrião de Playstation 4','ps4');
    var wii = createBadge('Anfitrião de Nintendo Wii','wii');

    var nonethless = createBadge('nodesc');
    
//Crests
    var cVinicius = createBadge('The Piano Key: Vinicius Crest', 'vkps');
    var cFlicky = createBadge('The Mighy Red Hood: Flicky Crest', 'hood');
    var cGors = createBadge('The Bullet Head: Gors Crest', 'gors');
    var cAna = createBadge('Yomiell Hankerchief: Ana Crest', 'yomi');
    var cPall = createBadge('The Kawaii Stick Pall Crest', 'pall');
    var cClaro = createBadge('Com o Claro você fala ilimitado! Claro Crest', 'claro');
    var cHerbe = createBadge('A Erva da Alegria: Herbe Crest', 'herb');
    var cCesar = createBadge('The Rockstar Sneakers: Rasec Crest', 'rasec');





    var Myth = {};

    Myth.alex = {
        nome: 'Alex',
        tagId: 'foffano',
        tagId1: 'foffano1',
        faceId: 'alexfoffano',
        tier: tierUnicorn,
        ano: '2013',
        badges: [
        mythUnicorn,
        preHistoric
        ]
    }
    Myth.Ana = {
        nome: 'Ana',
        tagId: 'yomiell',
        tagId1: 'yomiell1',
        faceId: 'anabeatriz.s.oliveira',
        tier: tierPlatinum,
        ano: '2014',
        crest:['Yomiell Hankerchief: Ana Crest', 'yomi'],
        badges: [
        mythPlatinum,
        preHistoric,
        jogueiro,
        hangouteiro,
        desenheiro,
        vassouraWielder,
        _3dsPlay,
        defiance,
        miauCaralho
        ]
    };
    Myth.AnaErrada = {
        nome: 'Ana Errada',
        tagId: 'anaerrada',
        tagId1: 'anaerrada1',
        faceId: '100007384087758',
        tier: tierUnicorn,
        ano: '2015',
        badges: [
        mythUnicorn,
        cVinicius
        ]
    };
    Myth.Aragao = {
        nome: 'Aragão',
        tagId: 'aragao',
        tagId1: 'aragao1',
        faceId: 'paulosergio.aragao.5',
        tier: tierSilver,
        ano: '2013',
        badges: [
        
        mythLegacy,
        mythSilver,
        hangouteiro,
        jogueiro,
        vassouraWielder,
        streameiro,
        pauHd,
        badgeWhore
        ]
    };
    Myth.Arthur = {
        nome: 'Arthur Zero',
        tagId: 'arthur',
        tagId1: 'arthur1',
        faceId: 'ArthurLimaT',
        tier: tierFreshman,
        ano: '2015',
        badges: [
        
        mythFresh,
        cFlicky,
        jogueiro,
        pipoqueiro
        ]
    };
    Myth.Bruna = {
        nome: 'Bruna',
        tagId: 'bruna',
        tagId1: 'bruna1',
        faceId: '100004056698492',
        tier: tierGuest,
        ano: '2015',
        badges: [
        
        mythGuest,
        cFlicky
        ]
    };
    Myth.Cesar = {
        nome: 'Cesar',
        tagId: 'rasec',
        tagId1: 'rasec1',
        faceId: 'cesar.augusto.184007',
        tier: tierHonorary,
        ano: '2014',
        crest: ['The Rockstar Sneakers: Rasec Crest', 'rasec'],
        badges: [

        mythHonorary,
        cFlicky,
        mythLurker,
        radiant,
        encontroMyth,
        smashFesteiro,
        smashFest2014,
        lendsClub
        
        ]
    };
    Myth.Claro = {
        nome: 'Claro',
        tagId: 'claro',
        tagId1: 'claro1',
        faceId: 'MatheusOClaro',
        tier: tierGold,
        ano: '2014',
        crest:['Com o Claro você fala ilimitado! Claro Crest', 'claro'],
        badges: [
        
        mythGold,
        mechanicPunch,
        hangouteiro,
        defiance,
        vassouraWielder,
        cGors,
        programeiro
        ]
    };
    Myth.Coelho = {
        nome: 'Coelho',
        tagId: 'coelho',
        tagId1: 'coelho1',
        faceId: 'BlackLabHorus',
        tier: tierLegacy,
        ano: '2013',
        badges: [
        
        mythLegacy,
        mythGhost,
        cupidRab,
        ps2,
        ps3,
        frukiFest,
        streameiro,
        karaoke,
        smashFest2014,
        _3dsPlay,
        elder
        ]
    };
    Myth.Douglas = {
        nome: 'Douglas',
        tagId: 'douglas',
        tagId1: 'douglas1',
        faceId: 'oekintarokun',
        tier: tierFreshman,
        ano: '2015',
        badges: [
        
        mythFresh,
        merito,     
        ]
    };
    Myth.Fernando = {
        nome: 'Fernando',
        tagId: 'duodyn',
        tagId1: 'duodyn1',
        faceId: 'fernando.lopes.7927',
        tier: tierHonorary,
        ano: '2014',
        badges: [
        
        mythHonorary,
        mythGhost,
        cGors,
        hangouteiro,
        karaoke
        ]
    };
    Myth.Flicky = {
        nome: 'Flicky',
        tagId: 'flike',
        tagId1: 'flike1',
        faceId: 'lucasflicky',
        tier: tierPrime,
        ano: '2013',
        crest:['The Mighy Red Hood: Flicky Crest', 'hood'],
        badges: [
        
        mythPrime,
        desenheiro,
        preHistoric,
        jogueiro,
        radiant,
        fuQuest,
        hangouteiro,
        genesis,
        frukiFest,
        vassouraWielder,
        encontroMyth,
        gardevoa,
        streameiro,
        mitamores,
        karaoke,
        smashFest2014,
        kanaFest,
        programeiro,
        _3dsPlay,
        lendsClub,
        ]
    };
    Myth.Garland = {
        nome: 'Garland',
        tagId: 'garland',
        tagId1: 'garland1',
        faceId: 'GarlandtheChaos',
        tier: tierHonorary,
        ano: '2014',
        badges: [
        
        mythHonorary,
        encontroMyth,
        mythLurker,
        cFlicky,
        smashFest2014
        ]
    };
    Myth.Herbe = {
        nome: 'Herbe',
        tagId: 'herbe',
        tagId1: 'herbe1',
        faceId: '100000980181670',
        tier: tierPrime,
        ano: '2013',
        crest:['A Erva da Alegria: Herbe Crest', 'herb'],
        badges: [
        
        mythPrime,
        frukiFest,
        encontroMyth,
        smashFesteiro,
        vassouraWielder,
        smashFest2014,
        _3dsPlay,
        mitamores,
        lendsClub,
        nennys
        ]
    };
    Myth.Karen = {
        nome: 'Karen',
        tagId: 'karen',
        tagId1: 'karen1',
        faceId: 'karen.sama.25',
        tier: tierLurker,
        ano: '2014',
        badges: [
        
        mythLurker,
        preHistoric,
        n64,
        happyDoor,
        radiant,
        smashFesteiro,
        encontroMyth,
        smashFest2014
        ]
    };
    Myth.Keidi = {
        nome: 'Keidi',
        tagId: 'keidi',
        tagId1: 'keidi1',
        faceId: 'Edukeidi',
        tier: tierFreshman,
        ano: '2015',
        badges: [
        
        mythUnicorn,
        cAna,
        keidiPint,
        streameiro,
        kanaFest
        ]
    };
    Myth.Laise = {
        nome: 'Laíse',
        tagId: 'laise',
        tagId1: 'laise1',
        faceId: 'laise.dosanjosfailace',
        tier: tierGuest,
        ano: '2015',
        badges: [
        
        mythHonorary,
        mythGhost,
        mythGuest,
        cFlicky
        ]
    };
    Myth.Luana = {
        nome: 'Luana',
        tagId: 'luana',
        tagId1: 'luana1',
        faceId: 'lreisluana',
        tier: tierHonorary,
        ano: '2014',
        badges: [
        
        mythHonorary,
        encontroMyth,
        doisPotes,
        cFlicky,
        radiant,
        frukiFest,
        mitamores,
        lendsClub
        ]
    };
    Myth.Marcela = {
        nome: 'Marcela',
        tagId: 'marcela',
        tagId1: 'marcela1',
        faceId: 'MaahMarceline',
        tier: tierLurker,
        ano: '2014',
        badges: [
        
        mythLurker,
        cFlicky
        ]
    };
    Myth.Matsuna = {
        nome: 'Matsuna',
        tagId: 'matsuna',
        tagId1: 'matsuna1',
        faceId: 'matheus.melo.184',
        tier: tierPrime,
        ano: '2013',
        badges: [
        
        mythPrime,
        mythGhost,
        satanicat
        ]
    };
    Myth.Pall = {
        nome: 'Pall',
        tagId: 'pall',
        tagId1: 'pall1',
        faceId: 'mariana.pall',
        tier: tierLegacy,
        ano: '2013',
        crest:['The Kawaii Stick Pall Crest', 'pall'],
        badges: [
        
        mythLegacy,
        mythLurker,
        desenheiro,
        mitamores,
        karaoke,
        jogueiro,
        ps3,
        hangouteiro,
        streameiro,
        _3dsPlay,
        likeBomb,
        ps4,
        mariEx
        ]
    };
    Myth.Pam = {
        nome: 'PamGrether',
        tagId: 'pam',
        tagId1: 'pam1',
        faceId: 'pamela.machadogrether',
        tier: tierFreshman,
        ano: '2015',
        badges: [
        
        mythFresh,
        cPall,
        defiance,
        badgeWhore
        ]
    };
    Myth.Rubens = {
        nome: 'Switch',
        tagId: 'rubens',
        tagId1: 'rubens1',
        faceId: 'switch.zetto',
        tier: tierUnicorn,
        ano: '2015',
        badges: [
        
        mythUnicorn,
        cClaro,
        kanaFest
        ]
    };
    Myth.Tumeo = {
        nome: 'Tumeo',
        tagId: 'tunel',
        tagId1: 'tunel1',
        faceId: 'williamd1k0',
        tier: tierGold,
        ano: '2015',
        badges: [

        mythGold,
        merito,
        programeiro,
        kanaFest,
        redCoder
        ]
    };
    Myth.Vidal = {
        nome: 'Vidal',
        tagId: 'vidal',
        tagId1: 'vidal1',
        faceId: 'rics.vidal',
        tier: tierSilver,
        ano: '2015',
        badges: [

        mythSilver,
        encontroMyth,
        cHerbe,
        smashFesteiro,
        smashFest2014,
        matricialPrint,
        _3dsPlay,
        likeBomb,
        vidalGt,
        vidalFdp
        
        ]
    };
    Myth.Vinicius = {
        nome: 'Vinicius',
        crest: ['The Piano Key: Vinicius Crest', 'vkps'],
        tagId: 'vinicius',
        tagId1: 'vinicius1',
        faceId: 'viniciuskps',
        tier: tierUnicorn,
        ano: '2013',
        badges: [
        
        mythLegacy,
        mythUnicorn,
        preHistoric,
        jogueiro,
        fuQuest,
        wii,
        radiant,
        frukiFest,
        hangouteiro,
        musicist,
        encontroMyth,
        smashFesteiro,
        smashFest2014,
        _3dsPlay
        ]
    };
    Myth.Gors = {
        nome: 'Watanabe',
        tagId: 'gors',
        tagId1: 'gors1',
        faceId: 'william.watanabe.90',
        tier: tierPlatinum,
        ano: '2013',
        crest:['The Bullet Head: Gors Crest', 'gors'],
        badges: [
        
        mythLegacy,
        mythPlatinum,
        preHistoric,
        desenheiro,
        jogueiro,
        fuQuest,
        frukiFest,
        radiant,
        hangouteiro,
        encontroMyth,
        streameiro,
        smashFesteiro,
        _3dsPlay,
        smashFest2014,
        wataZomb,
        kanaFest,
        musicist,
        likeBomb
        ]
    };
    Myth.Wolvie = {
        nome: 'Wolvie',
        tagId: 'wolvie',
        tagId1: 'wolvie1',
        faceId: 'wolviie.medeiros',
        tier: tierFreshman,
        ano: '2015',
        badges: [

        mythFresh,
        cCesar
        ]
    };











function createTable(mito) {    
    
    var crest = mito.crest;

     if (!mito.crest){
        crest = ['Este Mitador ainda não possui Crest própria','none'];
    }

 var path = 'http://os-mitadores.lucasflicky.com/files/theme/BADGES/';
    return ('<table  class="tg" style="table-layout: margin-bottom: 10px; fixed; width: 100%"> \
  <colgroup>\
  <col style="width: 50px"><col style="width: 150px">\
</colgroup>\
<tr>\
  <!-- CREST ICON -->\
  <th class="crest">\
    <img class="crestpic" title="'+ crest[0] + '" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/' + crest[1] + '.png">\
  </th>\
  <!-- NAME -->\
  <th align="left" class="name" colspan="2">'+ mito.nome +'</th>  <th align="left" class="tiername"></th> <!-- Espacinho -->\
  <!-- TIER -->\
  <th align="left" class="tiername">Tier: <strong>' + mito.tier[0] + '</strong></th>\
  <th align="right" class="tiericon"> <div align="right" style="overflow:hidden; border-style:solid; align:right ;border-width:2px;width:24px;height:24px;background:#FFF;border-radius:105px;" >' + mito.tier[1] + '</th>\
</tr>\
<tr>\
  <!-- PROFILE PIC -->\
  <td align="center" class="profilepic" colspan="2" rowspan="5"><a target="_blank" href="https://www.facebook.com/' + mito.faceId + '"><img class="profile" src="http://graph.facebook.com/' + mito.faceId + '/picture?width=150&height=150"></a></td><tr><td HEIGHT="1px" colspan="2" ></td></tr>\
  <td class="tg-e3zv"> Badges\
  </td>\
  <td class="tg-031e"></td>\
  <td class="since" align="right"  colspan="3" >Mitando since  <strong>' + mito.ano + '</strong></td>\
</tr>\
<tr>\
  <!-- BADGES -->\
  <td class="badges" id="' + mito.tagId + '" colspan="4">\
  </td>\
</tr>\
<tr><td class="badges"><td class="badges"><td colspan="2" align="right" class="badges2">  <i>Badges Coletadas:</i> <b id="' + mito.tagId1 + '"></b> </td></tr>\
</table>');
    
}
