/*
*   > MITHYBOARD SCRIPT
*   > VERSION: 1.2.0
*   > BUILD: 0605-21
*   > ALTERAÇÕES:
*       > Criação do pseudo-DB.
*       > Função que auto-escreve os badges e a quantidade.
*       > Correção no hover animation das badges.
*       > Mais Badges adicionadas e correção NA IDENTAÇÃO DO FLIKE!
*       > Novo sistema de criação de badges.
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
    var mythUnicorn = '<img class="badgeicon title="Mitador Unicorn: Raros porém participativos" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/uni.png">';
    var mythPlatinum = '<img class="badgeicon" title="Mitador Platinum" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/plat.png">';
    var mythSilver = '<img class="badgeicon" title="Mitador Silver" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/silver.png">';
    var mythLegacy = '<img class="badgeicon" title="Mitador Legacy: Veterano dos primórdios!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/legacy.png">';
    var mythFresh = '<img class="badgeicon" title="Freshman: Mitadores Trainee" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/fresh.png">';
    var mythGuest = '<img class="badgeicon" title="Guest: Não-mitador que convive na casa." src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/guest.png">';
    var mythHonorary = '<img class="badgeicon" title="Mitador Honorary: Protegido pessoal de um Prime ou Platinum" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/honor.png">';
    var mythLurker = '<img class="badgeicon" title="Lurker: Sempre nas sombras, eventualmente se pronuncia." src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/lurk.png">';
    var mythGold = '<img class="badgeicon" title="Mitador Gold" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/gold.png">';
    var mythGhost = '<img class="badgeicon" title="Mitador Ghost: Inativo há mais de um mês." src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/ghost.png">';
    var mythPrime = '<img class="badgeicon" title="Mitador Prime: Os primeiros Mitadores, criadores da porra toda." src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/prime.png">';


//Badges    
    var jogueiro = '<img class="badgeicon" title="Jogueiros: Sempre presentes nas jogatinas míticas" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/joy.png">';
    var hangouteiro = '<img class="badgeicon" title="Hangouteiro: Sempre marcando presença nos Hangouts!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/hang.png">';
    var desenheiro = '<img class="badgeicon" title="Desenheiro: Depictador dos melhores momentos." src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/pen.png">';
    var vassouraWielder = ' <img class="badgeicon" title="Vassoura Wielder: Já vassourou alguém em uma situação realmente necessária" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/broom.png">';
    var _3dsPlay = '<img class="badgeicon" title="3DS Teamplay: Jogou com mitadores via Nintendo 3DS" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/3ds.png">';
    var defiance = '<img class="badgeicon" title="Defiance: Sem medo de umas vassouradas" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/defiance.png">';
    var pipoqueiro = '<img class="badgeicon" title="Arthur exclusive \'Pipoqueiro Badge\'" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/pop.png">';
    var encontroMyth = '<img class="badgeicon" title="Encontro Mitador: eu fui!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/group.png">';
    var smashFesteiro = '<img class="badgeicon" title="Smashfesteiro" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/ssb.png">';
    var smashFest2014 = '<img class="badgeicon" title="Newyear 2014: Smashfest - Eu fui!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/2014.png">';
    var mechanicPunch = '<img class="badgeicon" title="Claro exclusive \'Mechanic Punch\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/soc.png">';
    var programeiro = '<img class="badgeicon" title="Programeiro: Ajuda a codar paradas mitadoras" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/code.png">';
    var frukiFest = '<img class="badgeicon" title="Newyear 2013: Frukifest - Eu fui!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/2013.png">';
    var streameiro = '<img class="badgeicon" title="Streameiro: Ocasionalmente promove Livestreams" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/live.png">';
    var gardevoa = '<img class="badgeicon" title="Flicky exclusive \'Gardevobadge\' " src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/garde.png">';
    var mitamores = '<img class="badgeicon" title="Os Mitamores: Espalhando amor entre os Mitos" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/mitamores.png">';
    var doisPotes = '<img class="badgeicon" title="Luana exclusive \'Doooois Pooootes\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/pots.png">';
   
   
   
    var lendsClub = '<img class="badgeicon" title="Lends Club: Board Games com Mitadores" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/lends.png">';
    var badgeWhore = '<img class="badgeicon" title="Badge Whore - Faço tudo por badges!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/badwho.png">';
    var kanaFest = '<img class="badgeicon" title="Kanafester - Gênios do Pseudo-Japonês" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/kana.png">';
    var cupidRab = '<img class="badgeicon" title="Coelho exclusive \'Official Cupid\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var pauHd = '<img class="badgeicon" title="Aragão exclusive \'Pau em HD\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var likeBomb = '<img class="badgeicon" title="Like Bomb - Top da balada" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var vidalGt = '<img class="badgeicon" title="Vidal exclusive \'Greentext\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var vidalFdp = '<img class="badgeicon" title="Vidal exclusive \'Filhadaputópolis\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var miauCaralho = '<img class="badgeicon" title="Ana exclusive \'MIAO CARALHO\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var ajudeiro = '<img class="badgeicon" title="Ajudeiro - Ele não é o Luciano, mas também ajuda pra caramba!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var redCoder = '<img class="badgeicon" title="Red Coder: Coder Lendário" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var goldenPen = '<img class="badgeicon" title="Golden Pen: Desenheiro Lendário" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var tunelaa = '<img class="badgeicon" title="Tumeo exclusive \'???\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var wataZomb = '<img class="badgeicon" title="Watanabe Exclusive \'Japanese Horror Movie\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var preHistoric = '<img class="badgeicon" title="Mitador Jurássico - Os Mitadores Pré-Históricos" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var musicist = '<img class="badgeicon" title="Musiqueiro" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var keidiPint = '<img class="badgeicon" title="Keidi exclusive \'Pinteiro\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var merito = '<img class="badgeicon" title="Mitador por mérito - Admin/Community pick" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var matricialPrint = '<img class="badgeicon" title="Vidal exclusive \'Impressora Matricial\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var happyDoor = '<img class="badgeicon" title="Karen exclusive \'Porta Feliz\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var satanicat = '<img class="badgeicon" title="Matsuna exclusive \'Satanicat\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var karaoke = '<img class="badgeicon" title="Karaokê Mitador: Eu fui!" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var nennys = '<img class="badgeicon" title="Mitador Nennys: o mais novo" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var elder = '<img class="badgeicon" title="Mitador Ancião: o mais velho" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var mariEx = '<img class="badgeicon" title="Pall exclusive \'!!!\' Badge" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var fuQuest = '<img class="badgeicon" title="Fuquest/OsMitadores the Game: Devteam" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var radiant = '<img class="badgeicon" title="Radiant Historia 11k" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    var nonethless = '<img class="badgeicon" title="nodesc" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/placejolder.png">';
    
//Crests
    var cVinicius = '<img class="badgeicon" title=\'"The Piano Key": Vinicius Crest\' src=\"http://os-mitadores.lucasflicky.com/files/theme/BADGES/vkps.png">';
    var cFlicky = '<img class="badgeicon" title=\'"The Mighy Red Hood": Flicky Crest\' src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/hood.png">';
    var cGors = '<img class="badgeicon" title=\'"The Bullet Head": Gors Crest\' src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/gors.png">';
    var cAna = '<img class="badgeicon" title=\'"Yomiell Hankerchief": Ana Crest\' src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/yomi.png">';
    var cPall = '<img class="badgeicon" title=\'"The Kawaii Stick" Pall Crest\' src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/pall.png">';
    var cClaro = '<img class="badgeicon" title=\'"Com o Claro você fala ilimitado!" Claro Crest\' src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/claro.png">';
    var cHerbe = '<img class="badgeicon" title=\'"A Erva da Alegria": Herbe Crest\' src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/herb.png">';
    var cCesar = '<img class="badgeicon" title=\'"The Rockstar Sneakers": Rasec Crest\' src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/rasec.png">';


    var mAlex = [
        'foffano',
        mythUnicorn,
        preHistoric
    ];
    var mAna = [
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
    var mAnaErrada = [
        'anaerrada',
        mythUnicorn,
        cVinicius
    ];
    var mAragao = [
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
    var mArthur = [
        'arthur',
        mythFresh,
        cFlicky,
        jogueiro,
        pipoqueiro
    ];
    var mBruna = [
        'bruna',
        mythGuest,
        cFlicky
    ];
    var mCesar = [
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
    var mClaro = [
        'claro',
        mythGold,
        mechanicPunch,
        hangouteiro,
        defiance,
        vassouraWielder,
        cGors,
        programeiro
    ];
    var mCoelho = [
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
    var mDouglas = [
        'douglas',
        mythFresh,
        merito,     
    ];
    var mFernando = [
        'duodyn',
        mythHonorary,
        mythGhost,
        cGors,
        hangouteiro,
        karaoke
    ];
    var mFlicky = [
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
    var mGarland = [
        'garland',
        mythHonorary,
        encontroMyth,
        mythLurker,
        cFlicky,
        smashFest2014
    ];
    var mHerbe = [
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
    var mKaren = [
        'karen',
        mythLurker,
        preHistoric,
        happyDoor,
        radiant,
        smashFesteiro,
        encontroMyth,
        smashFest2014
    ];
    var mKeidi = [
        'keidi',
        mythUnicorn,
        cAna,
        keidiPint,
        streameiro,
        kanaFest
    ];
    var mLaise = [
        'laise',
        mythHonorary,
        mythGhost,
        mythGuest,
        cFlicky
    ];
    var mLuana = [
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
    var mMarcela = [
        'marcela',
        mythLurker,
        cFlicky
    ];
    var mMatsuna = [
        'matsuna',
        mythPrime,
        mythGhost,
        satanicat
    ];
    var mPall = [
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
    var mPam = [
        'pam',
        mythFresh,
        cPall,
        defiance,
        badgeWhore
    ];
    var mRubens = [
        'rubens',
        mythUnicorn,
        cClaro,
        kanaFest
    ];
    var mTumeo = [
        'tunel',
        mythGold,
        merito,
        programeiro,
        kanaFest,
        redCoder
    ];
    var mVidal = [
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
    var mVinicius = [
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
    var mGors = [
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
    var mWolvie = [
        'wolvie',
        mythFresh,
        cCesar
    ];


writeBadges(mAlex);
writeBadges(mAna);
writeBadges(mAnaErrada);
writeBadges(mAragao);
writeBadges(mArthur);
writeBadges(mBruna);
writeBadges(mCesar);
writeBadges(mClaro);
writeBadges(mCoelho);
writeBadges(mDouglas);
writeBadges(mFernando);
writeBadges(mFlicky);
writeBadges(mGarland);
writeBadges(mHerbe);
writeBadges(mKaren);
writeBadges(mKeidi);
writeBadges(mLaise);
writeBadges(mLuana);
writeBadges(mMarcela);
writeBadges(mMatsuna);
writeBadges(mPall);
writeBadges(mPam);
writeBadges(mRubens);
writeBadges(mTumeo);
writeBadges(mVidal);
writeBadges(mVinicius);
writeBadges(mGors);
writeBadges(mWolvie);


