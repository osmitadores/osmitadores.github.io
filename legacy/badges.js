/*
*   > MITHYBOARD SCRIPT
*   > VERSION: 1.3.0
*   > BUILD: 0607-04
*   > ALTERAÇÕES:
*       > Criação do pseudo-DB.
*       > Função que auto-escreve os badges e a quantidade.
*       > Correção no hover animation das badges.
*       > Mais Badges adicionadas e correção NA IDENTAÇÃO DO FLIKE!
*       > Novo sistema de criação de badges.
*       > Mitadores agora são arrays de um objeto.
*
*   > WARNINGS:
*       > NÃO ALTERAR O MÉTODO "writeBadges(myth)", ELE É O CORE QUE FAZ A PORA TODA.
*       > NÃO ALTERAR A PRIMEIRA POSIÇÃO DOS ARRAYS (0), A MENOS QUE O ID DO MITADOR SEJA ALTERADO.
*       > CLARO, NÃO FUÇE.
*          
*   > NOMENCLATURAS:
*       > VARIÁVEIS DE BADGES COMUNS: NOMES SUGESTIVOS COM NO MÁXIMO DUAS PALAVRAS (EX: doisPotes).
*       > VARIÁVEIS DE BADGES TIPO TIER: UMA PALAVRA SEGUIDA DE "myth" (EX: mythLegacy).
*       > VARIÁVEIS DE BADGES TIPO CREST: NOME DO MITADOR SEGUIDO DE "c" (EX: cFlicky).
*       > NOVO SISTEMA DE CRIAÇÃO DE BADGES! CRIAR VAR CHAMANDO A FUNÇÃO createBadge(title,imgName).
*
*   > CRIAÇÃO DE BADGES:
*       > var nomeDaBadge = createBadge('Título da Badge', 'nome do arquivo da imagem sem extensão');
*       > Exemplo: var doisPotes = createBadge('Luana exclusive \'Doooois Pooootes\' Badge', 'pots');
*       > Caso a badge não tenha imagem, é só ignorar o segundo argumento, a imagem será automaticamente adicionada.
*       > Exemplo: var pauHd = createBadge('Aragão exclusive \'Pau em HD\' Badge');
*/


function writeBadges(myth){
/*
*   Descrição: Função que escreve no #document as imagens 
*   das badges e e a quantidade delas (a quantidade é cal-
*   culada a partir do array.length e não dos filhos da tag).
*   Args: 1. O array do mitador.
*/
    for (var i = 1; i < myth.length; i++) {
        document.getElementById(myth[0]).innerHTML += " " + myth[i] + " ";
    }
    document.getElementById(myth[0] + "1").innerHTML += (myth.length - 1); 
}


function indexMyth(osMitos){
/*
*   Descrição: Função que simplifica a escrita das badges
*   no #document.
*   Args: 1. Os Mitadores (object). **apesar de não ter um 
*   outro argumento válido**
*/
    for (var i in osMitos){
        writeBadges(osMitos[i]);
    }
}


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

    var myth = {};

    myth.Alex = [
        'foffano',
        mythUnicorn,
        preHistoric
    ];
    myth.Ana = [
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
    myth.AnaErrada = [
        'anaerrada',
        mythUnicorn,
        cVinicius
    ];
    myth.Aragao = [
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
    myth.Arthur = [
        'arthur',
        mythFresh,
        cFlicky,
        jogueiro,
        pipoqueiro
    ];
    myth.Bruna = [
        'bruna',
        mythGuest,
        cFlicky
    ];
    myth.Cesar = [
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
    myth.Claro = [
        'claro',
        mythGold,
        mechanicPunch,
        hangouteiro,
        defiance,
        vassouraWielder,
        cGors,
        programeiro
    ];
    myth.Coelho = [
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
    myth.Douglas = [
        'douglas',
        mythFresh,
        merito,     
    ];
    myth.Fernando = [
        'duodyn',
        mythHonorary,
        mythGhost,
        cGors,
        hangouteiro,
        karaoke
    ];
    myth.Flicky = [
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
    myth.Garland = [
        'garland',
        mythHonorary,
        encontroMyth,
        mythLurker,
        cFlicky,
        smashFest2014
    ];
    myth.Herbe = [
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
    myth.Karen = [
        'karen',
        mythLurker,
        preHistoric,
        happyDoor,
        radiant,
        smashFesteiro,
        encontroMyth,
        smashFest2014
    ];
    myth.Keidi = [
        'keidi',
        mythUnicorn,
        cAna,
        keidiPint,
        streameiro,
        kanaFest
    ];
    myth.Laise = [
        'laise',
        mythHonorary,
        mythGhost,
        mythGuest,
        cFlicky
    ];
    myth.Luana = [
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
    myth.Marcela = [
        'marcela',
        mythLurker,
        cFlicky
    ];
    myth.Matsuna = [
        'matsuna',
        mythPrime,
        mythGhost,
        satanicat
    ];
    myth.Pall = [
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
    myth.Pam = [
        'pam',
        mythFresh,
        cPall,
        defiance,
        badgeWhore
    ];
    myth.Rubens = [
        'rubens',
        mythUnicorn,
        cClaro,
        kanaFest
    ];
    myth.Tumeo = [
        'tunel',
        mythGold,
        merito,
        programeiro,
        kanaFest,
        redCoder
    ];
    myth.Vidal = [
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
    myth.Vinicius = [
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
    myth.Gors = [
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
    myth.Wolvie = [
        'wolvie',
        mythFresh,
        cCesar
    ];

indexMyth(myth);

