
    var PATH = 'http://os-mitadores.lucasflicky.com/files/theme/BADGES/';
    var semID = '457676144377257';

    var Badgelist = {};

//Tier
 	 Badgelist.mythUnicorn = createBadge('Mitador Unicorn: Raros porém participativos', 'uni','Mitador Unicorn','Tier',
'Badge reservada a Mitadores de Tier Unicorn.<br> Aparecem raramente mas são muito participativos. (Reserved) ');
     Badgelist.mythPlatinum = createBadge('Mitador Platinum', 'plat','Mitador PLATINUM','Tier',
'Badge reservada a Mitadores de Tier Platinum.<br> São sempre os mais ativos, e estão sempre contribuíndo promovendo conteúdo e interação. (Reserved) ');
     Badgelist.mythSilver = createBadge('Mitador Silver', 'silver','Mitador SILVER','Tier',
'Badge reservada a Mitadores de Tier Silver.<br> São os com atividade regular no grupo. (Reserved) ');
     Badgelist.mythLegacy = createBadge('Mitador Legacy: Veterano dos primórdios!', 'legacy','Mitador Legacy','Tier',
'Badge reservada a Mitadores com privilégios Legacy.<br> São os mais antigos e responsáveis pelo grupo se tornar um grupo. (Unobtainable) ');
     Badgelist.mythFresh = createBadge('Freshman: Mitadores Trainee', 'fresh','Academy Freshman','Tier',
'Badge reservada a Mitadores de Tier Freshman.<br> Tem menos de um mês de casa. (Reserved) ');
     Badgelist.mythGuest = createBadge('Guest: Não-mitador que convive na casa.', 'guest','Convidado','Tier',
'Badge reservada a Mitadores de Tier Guest.<br> Não são exatamente Mitadores, mas estão dentro presenciando o cotidiano dos mitos. (Reserved) ');
     Badgelist.mythHonorary = createBadge('Mitador Honorary: Protegido pessoal de um Prime ou Platinum', 'honor','Mitador Honorário','Tier',
'Badge reservada a Mitadores com privilégios Honorary.<br> Os "protegidos", Mitadores que não podem ser banidos por inatividade. (Reserved) ');
     Badgelist.mythLurker = createBadge('Lurker: Sempre nas sombras, eventualmente se pronuncia.', 'lurk','Lurker','Tier',
'Badge reservada a Mitadores de Tier Lurker.<br> Raramente aparecem, apenas observam, costumam mitar mais durante encontros. (Reserved) ');
     Badgelist.mythGold = createBadge('Mitador Gold', 'gold','Mitador GOLD','Tier',
'Badge reservada a Mitadores de Tier Gold.<br> São os mais ativos no chat, e bastante ativos no grupo, e eventos, e tudo mais.. (Reserved) ');
     Badgelist.mythGhost = createBadge('Mitador Ghost: Inativo há mais de um mês.', 'ghost', 'Mitador Fantasma','Tier',
'Badge reservada a Mitadores de Tier Ghost.<br> Mitadores Fantasmas, aparecem, dão um oi, e somem por meses, geralmente interagem mais pessoalmente. (Reserved) ');
     Badgelist.mythPrime = createBadge('Mitador Prime: Os primeiros Mitadores, criadores da porra toda.', 'prime','Mitador Prime','Tier',
'Badge reservada a Mitadores de Tier Prime.<br> Os três primeiros a iniciar o grupo oficial, naquele modesto chat. (Unobtainable) ');

//Badges
     Badgelist.jogueiro = createBadge('Jogueiros: Sempre presentes nas jogatinas míticas', 'joy','Jogueiro','Participação',
'Mitadores que participam regularmente de jogos com outros Mitadores, badge desbloqueada depois de 5 jogatinas.*');
     Badgelist.hangouteiro = createBadge('Hangouteiro: Sempre marcando presença nos Hangouts!', 'hang','Hangouteiro','Participação',
'Mitadores que participam regularmente  dos Hangouts, badge desbloqueada após marcar presença em 10 hangouts ao longo do mês*');
     Badgelist.desenheiro = createBadge('Desenheiro: Depictador dos melhores momentos.', 'pen', 'Desenheiro','Participação',
'Badge dedicada a Mitadores que desenham, ilustram, e depictam, cenas e figuras do universo Mitador.');
     Badgelist.vassouraWielder = createBadge('Vassoura Wielder: Já vassourou alguém em uma situação realmente necessária', 'broom','Vassoureiro','Utilidade',
'A Vassoura deve ser usada com responsabilidade, pra expulsar pessoas em rampage, mesmo que em roleplay, o uso bem encenado dela lhe condecora com esta badge.');
     Badgelist._3dsPlay = createBadge('3DS Teamplay: Jogou com mitadores via Nintendo 3DS', '3ds','3DS Multiplayer','Social',
'Jogue com um Mitador num Nintendo3DS por Multiplayer Local ou Online');
     Badgelist.defiance = createBadge('Defiance: Sem medo de umas vassouradas', 'defiance','Defiance','Participação',
'Seja novato e zoe com a cara de um veterano na maneira mais mitadora possivel');
     Badgelist.pipoqueiro = createBadge('Arthur exclusive \'Pipoqueiro Badge\'', 'pop','Pipoqueiro','Exclusiva',
' Exclusiva do Arthur por ser um baita Pipoqueiro de Tretas (Unobtainable)');
     Badgelist.encontroMyth = createBadge('Encontro Mitador: eu fui!', 'group','Encontro Mitador','Evento',
'Participe de pelo menos um encontro organizado entre Mitadores ');
     Badgelist.smashFesteiro = createBadge('Smashfesteiro', 'ssb','Smashfester','Evento',
'Smashfests são mini-eventos onde se joga Smash Bros durante a noite, jogadores assiduos de SSB que tenham participado de pelo menos uma, recebe esta badge.');
     Badgelist.smashFest2014 = createBadge('Newyear 2014: Smashfest - Eu fui!', '2014','Newyear 2014','Landmark',
'Badge exclusiva para quem frequentou o Ano Novo Mitador de 2014 - Smashfest (Unobtainable)');
     Badgelist.mechanicPunch = createBadge('Claro exclusive \'Mechanic Punch\' Badge', 'soc','Luva de Boxe','Exclusiva',
'Exclusiva do Claro, porque a Luva de Boxe mecânica é sua trademark. (Unobtainable)');
     Badgelist.programeiro = createBadge('Programeiro: Ajuda a codar paradas mitadoras', 'code','Programeiro','Utilidade',
'Ajude os Mitadores dando uma mão com qualquer tipo de edição de código pras paradas que criamos');
     Badgelist.frukiFest = createBadge('Newyear 2013: Frukifest - Eu fui!', '2013','Newyear 2013','Landmark',
'Badge exclusiva para quem frequentou o Ano Novo Mitador de 2013 - Frukifest (Unobtainable)');
     Badgelist.streameiro = createBadge('Streameiro: Ocasionalmente promove Livestreams', 'live','Streameiro','Social',
'Promova Livestreams, convide Mitadores');
     Badgelist.gardevoa = createBadge('Flicky exclusive \'Gardevobadge\' ', 'garde','Gardevoir','Exclusiva',
'Exclusiva do Flicky por ter recebido da Taverna do Cogu o título de PhD em Gardevoir por maioria de votos. (Unobtainable)');
     Badgelist.mitamores = createBadge('Os Mitamores: Casais Mitadores são lindos', 'mitamores','Os Mitamores','Social',
'Assuma publicamente relacionamento com um Mitador. Ambos devem fazer parte do grupo ANTES. Esta badge não expira com o término.');
     Badgelist.doisPotes = createBadge('Luana exclusive \'Doooois Pooootes\' Badge', 'pots','DOIS POTES','Exclusiva',
'Exclusiva da Luana porque ela acha um desaforo o Flicky usar dois potes pra fazer Miojo (Unobtainable) ');
     Badgelist.lendsClub = createBadge('Lends Club: Board Games com Mitadores', 'lends','Lends Club','Evento',
'Visite o clube de Board Games Lends Club acompanhado de Mitadores');
     Badgelist.badgeWhore = createBadge('Badge Whore - Faço tudo por badges!', 'badwho','Badgewhore','Participação',
'Seja um prick e fique pedindo por badges o tempo todo, essa badge não é uma boa badge, ela vale pontos negativos.');
     Badgelist.kanaFest = createBadge('Kanafester - Gênios do Pseudo-Japonês', 'kana', 'Pseudo-Japonês','Evento',
'Seja figurinha carimbada no momento em que começar um papo aleatório em caracteres japoneses que não querem dizer nada em actual japonês');
     Badgelist.cupidRab = createBadge('Coelho exclusive \'Official Cupid\' Badge','cupid','The Cupid','Exclusiva',
'Exclusiva do Coelho por juntar casais since forever. (Unobtainable)');
     Badgelist.pauHd = createBadge('Aragão exclusive \'Pau em HD\' Badge','pauhd','Pau em HD','Exclusiva',
'Exclusiva do Aragão por acidentalmente enviar uma foto em 1080p do seu instrumento no chat. (Unobtainable)');
     Badgelist.likeBomb = createBadge('Like Bomb - Top da balada','likebomb','Like Bomb Target','Social',
'Tenha uma postagem no Facebook com mais de 100 Likes. Puro aumentador de e-peen');
     Badgelist.vidalGt = createBadge('Vidal exclusive \'Greentext\' Badge','greentxt','Greentext','Exclusiva',
'Exclusiva do Vidal, por viralizar seu Greentext (Unobtainable)' );
     Badgelist.vidalFdp = createBadge('Vidal exclusive \'Filhadaputópolis\' Badge','catan','Filhadaputópolis','Exclusiva',
'Exclusiva do Vidal por fundar a maravilhosa cidade de Filhadaputópolis, cuja população é VOCÊ (Unobtainable)');
     Badgelist.miauCaralho = createBadge('Ana exclusive \'MIAO CARALHO\' Badge',undefined,'MIAO CARALHO','Exclusiva',
'Exclusiva da Ana por berrar MIAU CARALHO enquanto tentamos pescar Matsunas (Unobtainable)');
     Badgelist.redCoder = createBadge('Red Coder: Coder Lendário','redcoder','The Red Coder','Patente de Fodisse',
'Programadores lendários, que programam coisas absurdas e sensacionais, incansavelmente e voluntariamente, amor de pessoa.');
     Badgelist.goldenPen = createBadge('Golden Pen: Desenheiro Lendário',undefined,'The Golden Pen','Patente de Fodisse',
'Desenhistas que botam efforts magníficos nas piadas internas dos Mitadores e fazem delas Obras de Arte intensas.');
     Badgelist.tunelaa = createBadge('Tumeo exclusive \'???\' Badge',undefined,'???',
'Sei lá');
     Badgelist.wataZomb = createBadge('Watanabe Exclusive \'Japanese Horror Movie\' Badge','akuma','Japanese Horror Movie','Exclusiva',
'Exclusiva do Watanabe por se rastejar e desaparecer enquanto dorme na madrugada. (Unobtainable)');
     Badgelist.preHistoric = createBadge('Mitador Jurássico - Os Mitadores Pré-Históricos','jurassic','Pré-Mitadores','Social',
'Mitadores dos primórdios, antes mesmo do chat oficial, essas pessoas já andavam juntas e se identificavam pelo nome de mitos (Unobtainable).');
     Badgelist.musicist = createBadge('Musiqueiro','music','Musiqueiro','Participação',
'Produza peças musicais especificamente para os Mitadores');
     Badgelist.keidiPint = createBadge('Keidi exclusive \'Pinteiro\' Badge','print','Pinteiro','Exclusiva',
'Exclusiva do Keidi por manter um acervo gigante de Prints inesperados de todos (Unobtainable)');
     Badgelist.merito = createBadge('Mitador por mérito - Admin/Community pick','merito','Mitador por Mérito','Entrada',
'Mitador que não é exatamente um bestie de ninguém dentro da casa, mas que desperta admiração de todos e por isso mereceu entrar. (Unobtainable)');
     Badgelist.matricialPrint = createBadge('Vidal exclusive \'Impressora Matricial\' Badge','printer','Impressora Matricial','Exclusiva',
'Exclusiva do Vidal por roncar igual uma impressora matricial durante um overnight entre Mitadores (Unobtainable)');
     Badgelist.happyDoor = createBadge('Karen exclusive \'Porta Feliz\' Badge','hpydoa','Porta Feliz','Exclusiva',
'Exclusiva da Karen por dizer que as coisas, incluindo portas, são felizes. Elas não são felizes. (Unobtainable)');
     Badgelist.satanicat = createBadge('Matsuna exclusive \'Satanicat\' Badge','satanicat','Satanicat','Exclusiva',
'Exclusiva do Matsuna por invocar gatos espiratânicos dos confins do inferno. (Unobtainable)');
     Badgelist.karaoke = createBadge('Karaokê Mitador: Eu fui!','karaoke','Karaoke','Evento',
'Participe de um Karaoke Party com Mitadores');
     Badgelist.nennys = createBadge('Mitador Nennys: o mais novo','nennys','Nennys','Single-Wielder',
'Seja o Mitador mais novo.');
     Badgelist.elder = createBadge('Mitador Ancião: o mais velho','ancient','Ancião','Single-Wielder',
'Seja o Mitador mais velho.');
     Badgelist.mariEx = createBadge('Pall exclusive \'!!!\' Badge','excla','!!!','Exclusiva',
'Exclusiva da Pall por receber qualquer noticias com esse sinal gráfico (Unobtainable)');
     Badgelist.fuQuest = createBadge('Fuquest/OsMitadores the Game: Devteam','fq','Fuquest','Projeto',
'Participe do desenvolvimento do nosso joguinho dos Mitadores, atualmente em Hiatus');
     Badgelist.radiant = createBadge('Radiant Historia 11k','historia','Radiant Historia 11k','Landmark',
'Participantes do épico post de Radiant Historia de 2012 que recebeu mais de 11 mil comentários totalmente fora de nexo. (Unobtainable)');
     Badgelist.genesis = createBadge('Anfitrião de SEGA Genesis','genesis','Genesis','Social',
'Convide Mitadores pra jogar SEGA Genesis na sua casa');
     Badgelist.n64 = createBadge('Anfitrião de Nintendo 64','n64','N64','Social',
'Convide Mitadores pra jogar Nintendo 64 na sua casa');
     Badgelist.ps2 = createBadge('Anfitrião de Playstation 2','ps2','PS2','Social',
'Convide Mitadores pra jogar PS2 na sua casa');
     Badgelist.ps3 = createBadge('Anfitrião de Playstation 3','ps3','PS3','Social',
'Convide Mitadores pra jogar PS3 na sua casa');
     Badgelist.ps4 = createBadge('Anfitrião de Playstation 4','ps4', 'PS4','Social',
'Convide Mitadores pra jogar PS4 na sua casa');
     Badgelist.wii = createBadge('Anfitrião de Nintendo Wii','wii', 'Wii','Social',
'Convide Mitadores pra jogar Wii na sua casa');
     Badgelist.rplay = createBadge('Roleplay Masters: *flies away*','rp','RP Masters','Participação',
'Entre de cabeça nos roleplays sempre que um estiver rolando, intensamente, como se aquilo fosse realmente real, porque você é biruta, mas não liga.');
     Badgelist.cah = createBadge('Mitadores Contra a Humanidade!','cah','Cards Against Humanity','Participação',
'Seja jogador assíduo de Cards Against Humanity, 3 ou mais partidas valem a badge');
     Badgelist.essetop = createBadge('[Evento] ESSE TÓPICO É PRA VOCÊ....','essetop','ESSE TÓPICO','Landmark',
'Para quem participou do Evento "ESSE TÓPICO" de Junho de 2015, postando headlines. (Unobtainable) ');
     Badgelist.ygo = createBadge('Duelista','ygo','Duelista','Participação',
'Duele com Mitadores regularmente');
     Badgelist.gartic = createBadge('Círculo Mitador de Gartic','gartic','Gartic','Participação',
'Jogue Gartic com Mitadores regularmente');
     Badgelist.pepe = createBadge('Rare Pepe Trader Certificado','pepe','Certified Pepe Trader','Participação',
'Para os que toda terça enriquecem o mercado de Rare Pepes dos Mitadores');
     Badgelist.frog = createBadge('Romulo Exclusive Samango Frog Badge','frog','Samango Frog','Exclusiva',
'Exclusiva do Rômulo pelo seu deslize imenso na Taverna do Cogu (Unobtainable)');
     Badgelist.poke = createBadge('Pam Exclusive *poke poke* Badge','poke','*Poke Poke*','Exclusiva',
'Exclusiva da Pam por cutucar the hell out of todo mundo incessantemente. (Unobtainable)');
     Badgelist.idea = createBadge('Badger: Até eu criei uma Badge e você não!','badgeidea','Badge Supporter','Utilidade',
'Dê idéias de badge no tópico oficial de Badges');
     Badgelist.help = createBadge('Ajudeiro:  Ele não é o Luciano, mas também ajuda pra caramba!','ajudeiro','Ajudeiro','Utilidade',
'Ajude Mitadores novatos a compreender o ambiente, ou ajude Mitadores em qualquer sentido, com qualquer coisa que ele precise.');
     Badgelist.harass = createBadge('Harasser: Bulinadores Profissionais','harass','Harasser','Participação',
'Seja um bulinador forte que deixa pessoas constrangidas');
     Badgelist.qqq = createBadge('Dogolas Exclusive Q Badge','qqq','Q','Exclusiva',
'Exclusiva do Douglas pela letra Trademark (Unobtainable)');
     Badgelist.plugDJ = createBadge('DJ assíduo nas pistas mitadoras.','plugdj','Plug DJ','Social',
'Participe regularmente adicionando playlists durante sessões no PlugDJ dos Mitadores');


     Badgelist.skgPart = createBadge('Skull Girls Tournament - Participei... mas não ganhei. Pq sou noob','skgpt','Torneio SkullGirls - Participante','Evento',
'Participe de um torneio de Skullgirls');
     Badgelist.skullGirls = createBadge('Skull Girls Tournament - 1o Lugar!!!','skg','Torneio SkullGirls - Campeão','Evento',
'Vença um torneio de Skullgirls');
     Badgelist.mythEvent = createBadge('Mitador de Evento',undefined,'Mitador de Evento','Entrada','Mitadores que entraram por meio de sobrevivência a Eventos que envolve gente de fora(Unobtainable)',
'Entre nos Mitadores por meio de seleção aleatória de um Evento');
     Badgelist.nonethless = createBadge('nodesc',
'               ');

//Crests
    var cVinicius = createBadge('The Piano Key: Vinicius Crest', 'vkps');
    var cFlicky = createBadge('The Mighy Red Hood: Flicky Crest', 'hood');
    var cGors = createBadge('The Bullet Head: Gors Crest', 'gors');
    var cAna = createBadge('Yomiell Hankerchief: Ana Crest', 'yomi');
    var cPall = createBadge('The Kawaii Stick Pall Crest', 'pall');
    var cClaro = createBadge('Com o Claro você fala ilimitado! Claro Crest', 'claro');
    var cHerbe = createBadge('A Erva da Alegria: Herbe Crest', 'herb');
    var cCesar = createBadge('The Rockstar Sneakers: Rasec Crest', 'rasec');
    var cGarland = createBadge('The Black Mage: Garland Crest', 'mage');
    var cZero = createBadge('The Dimensional Zero: Arthur Crest', 'zero');


function createBadge(title, imgName, badgename, badgetype,  obtain) {

    if (imgName===undefined){
        imgName = 'badge';
    }
    var obt = '';
    var unobit = '';

    if (obtain!==undefined){
        if (obtain.search("Unobtainable") !== -1){
            var obt = 'unob';
            var unobit = 'unobtr';
        }
        if (obtain.search("Reserved") !== -1){
            var unobit = 'unobtr'
        }
    }

    return '  <tr class="' + unobit + '">\
    <td class="badgeslot"> <img height="48" title="' + title + '" src="' + PATH + imgName + '.png"></td> \
    <td badge="'+ imgName +'"  href = "javascript:void(0)" onclick="document.getElementById(\'light\').style.display=\'block\';document.getElementById(\'fade\').style.display=\'block\'; document.getElementById(\'lighter\').innerHTML = (\'\'); viewDesc(this.attributes.badge.value)" class="nameslot" ;">' + 	badgename + ' <br> <div style="font-size:10;color:#aaa;"> ' + title + ' </div></td> \
     <td onclick="viewDesc(this.attributes.id.value)" class="type" id="' + badgetype + '"> ' + badgetype + ' </td> \
    <td class="obtainslot" id="' + obt + '">  ' + obtain + ' </td></tr>';

}


indexMyth(Badgelist);

function viewDesc(sttr) {

    if (sttr === 'close') {
       // document.getElementById('light').style.display='none';
        //document.getElementById('fade').style.display='none';
        
        $('#light').hide('slow','linear');
        $('#fade').hide();
    }else{

    console.log('############### ' +sttr+ ' ###############');
    var aux = [];
    for(var i in Myth){
        for(var x in Myth[i].badges){
            if (Myth[i].badges[x][1] === sttr) {
                console.log(Myth[i].nome + ' confere!');
							document.getElementById('lighticon').innerHTML = ('<img src="' + PATH + sttr + '.png">');
														document.getElementById('lititle').innerHTML = (Myth[i].badges[x][0]);

				                document.getElementById('lighter').innerHTML += ('\
               <div class="omito"><td class="lite"> <a target="_blank" href="https://www.facebook.com/' + Myth[i].faceId + '">\
                 <img class="profile" src="http://graph.facebook.com/' + Myth[i].faceId + '/picture?width=50&height=50"></a></td>\
				<td style="padding-left:20px;" class="lite">' + Myth[i].nome + ' Possui essa badge! </td></div><br>\
 ');
            }
        }
    }
}}

$(document).ready(function()
    {
        $("#myTable").tablesorter();
    }
);

function indexMyth(mitabela){

    for (var i in mitabela){

        document.getElementById('asofe').innerHTML += mitabela[i];
    }
}

function toggle_visibility(unobtr) {
   var e = document.getElementsByClassName(unobtr);

    for ( var i=0; i < e.length; i++ ) {
        if(e[i].style.display != 'none'){
            e[i].style.display = 'none';
        }else{
            e[i].style.display = 'table-row';
        }
    }
}
