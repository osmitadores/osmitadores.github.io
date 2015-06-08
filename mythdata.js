
function createBadge(title, imgName) {
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
    return '<img class="badgeicon" ' + 'title="' + title + '" src="' + path + imgName + '.png">';
    
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
    var cupidRab = createBadge('Coelho exclusive \'Official Cupid\' Badge');
    var pauHd = createBadge('Aragão exclusive \'Pau em HD\' Badge');
    var likeBomb = createBadge('Like Bomb - Top da balada');
    var vidalGt = createBadge('Vidal exclusive \'Greentext\' Badge');
    var vidalFdp = createBadge('Vidal exclusive \'Filhadaputópolis\' Badge');
    var miauCaralho = createBadge('Ana exclusive \'MIAO CARALHO\' Badge');
    var ajudeiro = createBadge('Ajudeiro - Ele não é o Luciano, mas também ajuda pra caramba!');
    var redCoder = createBadge('Red Coder: Coder Lendário');
    var goldenPen = createBadge('Golden Pen: Desenheiro Lendário');
    var tunelaa = createBadge('Tumeo exclusive \'???\' Badge');
    var wataZomb = createBadge('Watanabe Exclusive \'Japanese Horror Movie\' Badge');
    var preHistoric = createBadge('Mitador Jurássico - Os Mitadores Pré-Históricos');
    var musicist = createBadge('Musiqueiro');
    var keidiPint = createBadge('Keidi exclusive \'Pinteiro\' Badge');
    var merito = createBadge('Mitador por mérito - Admin/Community pick');
    var matricialPrint = createBadge('Vidal exclusive \'Impressora Matricial\' Badge');
    var happyDoor = createBadge('Karen exclusive \'Porta Feliz\' Badge');
    var satanicat = createBadge('Matsuna exclusive \'Satanicat\' Badge');
    var karaoke = createBadge('Karaokê Mitador: Eu fui!');
    var nennys = createBadge('Mitador Nennys: o mais novo');
    var elder = createBadge('Mitador Ancião: o mais velho');
    var mariEx = createBadge('Pall exclusive \'!!!\' Badge');
    var fuQuest = createBadge('Fuquest/OsMitadores the Game: Devteam');
    var radiant = createBadge('Radiant Historia 11k');
    var nonethless = createBadge('nodesc');
    
//Crests
    var cVinicius = createBadge('\"The Piano Key\": Vinicius Crest', 'vkps');
    var cFlicky = createBadge('\"The Mighy Red Hood\": Flicky Crest', 'hood');
    var cGors = createBadge('\"The Bullet Head\": Gors Crest', 'gors');
    var cAna = createBadge('\"Yomiell Hankerchief\": Ana Crest', 'yomi');
    var cPall = createBadge('\"The Kawaii Stick\" Pall Crest', 'pall');
    var cClaro = createBadge('\"Com o Claro você fala ilimitado!\" Claro Crest', 'claro');
    var cHerbe = createBadge('\"A Erva da Alegria\": Herbe Crest', 'herb');
    var cCesar = createBadge('\"The Rockstar Sneakers\": Rasec Crest', 'rasec');

    var Myth = {};

    Myth.alex = {
        nome: null,
        tagId: 'foffano',
        tagId1: 'foffano1',
        faceId: null,
        tier: null,
        ano: null,
        badges: [
            mythUnicorn,
            preHistoric
        ]
    }
    Myth.Ana = [
        'yomiell',
        mythPlatinum,
        preHistoric,
        jogueiro,
        hangouteiro,
        desenheiro,
        vassouraWielder,
        _3dsPlay,
        defiance,
        miauCaralho
    ];
    Myth.AnaErrada = [
        'anaerrada',
        mythUnicorn,
        cVinicius
    ];
    Myth.Aragao = [
        'aragao',
        mythLegacy,
        mythSilver,
        hangouteiro,
        jogueiro,
        vassouraWielder,
        streameiro,
        pauHd,
        badgeWhore
    ];
    Myth.Arthur = [
        'arthur',
        mythFresh,
        cFlicky,
        jogueiro,
        pipoqueiro
    ];
    Myth.Bruna = [
        'bruna',
        mythGuest,
        cFlicky
    ];
    Myth.Cesar = [
        'rasec',
        mythHonorary,
        cFlicky,
        mythLurker,
        radiant,
        encontroMyth,
        smashFesteiro,
        smashFest2014,
        lendsClub
        
    ];
    Myth.Claro = [
        'claro',
        mythGold,
        mechanicPunch,
        hangouteiro,
        defiance,
        vassouraWielder,
        cGors,
        programeiro
    ];
    Myth.Coelho = [
        'coelho',
        mythLegacy,
        mythGhost,
        cupidRab,
        frukiFest,
        streameiro,
        karaoke,
        smashFest2014,
        _3dsPlay,
        elder
    ];
    Myth.Douglas = [
        'douglas',
        mythFresh,
        merito,     
    ];
    Myth.Fernando = [
        'duodyn',
        mythHonorary,
        mythGhost,
        cGors,
        hangouteiro,
        karaoke
    ];
    Myth.Flicky = [
        'flike',
        mythPrime,
        desenheiro,
        preHistoric,
        jogueiro,
        radiant,
        fuQuest,
        hangouteiro,
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
    ];
    Myth.Garland = [
        'garland',
        mythHonorary,
        encontroMyth,
        mythLurker,
        cFlicky,
        smashFest2014
    ];
    Myth.Herbe = [
        'herbe',
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
    ];
    Myth.Karen = [
        'karen',
        mythLurker,
        preHistoric,
        happyDoor,
        radiant,
        smashFesteiro,
        encontroMyth,
        smashFest2014
    ];
    Myth.Keidi = [
        'keidi',
        mythUnicorn,
        cAna,
        keidiPint,
        streameiro,
        kanaFest
    ];
    Myth.Laise = [
        'laise',
        mythHonorary,
        mythGhost,
        mythGuest,
        cFlicky
    ];
    Myth.Luana = [
        'luana',
        mythHonorary,
        encontroMyth,
        doisPotes,
        cFlicky,
        radiant,
        frukiFest,
        mitamores,
        lendsClub
    ];
    Myth.Marcela = [
        'marcela',
        mythLurker,
        cFlicky
    ];
    Myth.Matsuna = [
        'matsuna',
        mythPrime,
        mythGhost,
        satanicat
    ];
    Myth.Pall = [
        'pall',
        mythLegacy,
        mythLurker,
        desenheiro,
        mitamores,
        karaoke,
        jogueiro,
        hangouteiro,
        streameiro,
        _3dsPlay,
        likeBomb,
        mariEx
    ];
    Myth.Pam = [
        'pam',
        mythFresh,
        cPall,
        defiance,
        badgeWhore
    ];
    Myth.Rubens = [
        'rubens',
        mythUnicorn,
        cClaro,
        kanaFest
    ];
    Myth.Tumeo = [
        'tunel',
        mythGold,
        merito,
        programeiro,
        kanaFest,
        redCoder
    ];
    Myth.Vidal = [
        'vidal',
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
        
    ];
    Myth.Vinicius = [
        'vinicius',
        mythLegacy,
        mythUnicorn,
        preHistoric,
        jogueiro,
        fuQuest,
        radiant,
        frukiFest,
        hangouteiro,
        musicist,
        encontroMyth,
        smashFesteiro,
        smashFest2014,
        _3dsPlay
    ];
    Myth.Gors = [
        'gors',
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
    ];
    Myth.Wolvie = [
        'wolvie',
        mythFresh,
        cCesar
    ];