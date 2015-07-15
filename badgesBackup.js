/*

//// PLAYER EXEMPLOS

var sound = new Howl({
  urls: ['sound.mp3', 'sound.ogg']
}).play();

///////////
var sound = new Howl({
  urls: ['sound.mp3', 'sound.ogg', 'sound.wav'],
  autoplay: 'sim',
  loop: 'sim',
  volume: 0.5,
  onend: function() {
    alert('Finished!');
  }
});

///////
var sound = new Howl({
  urls: ['sounds.mp3', 'sounds.ogg'],
  sprite: {
    blast: [0, 2000],
    laser: [3000, 700],
    winner: [5000, 9000]
  }
});

// shoot the laser!
sound.play('laser');


*/






var PATH = 'http://os-mitadores.lucasflicky.com/files/theme/BADGES/';
var semID = '457676144377257';

var Badges = {
    modelo: {
        titulo: 'titulo da badge',
        img: 'nome da imagem',
        nome: 'nome da badge',
        tipo: 'tipo da badge',
        desc: 'desctrição da badge',
        obtain: 'not'
    }
};

//Tier

Badges.mythMinister = {
    titulo: 'Mythnister: Leading the path of strife!',
    img: 'minister',
    nome: 'Mythnister',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores Ministers.<br> Assumem a bronca em horas de crise, e agitam a casa conforme podem. Conte sempre com eles. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythDiamond = {
    titulo: 'Mitador Diamond: Amor à camisa',
    img: 'diamond',
    nome: 'Mitador Diamond',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Diamond.<br> Participam além do social. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythUnicorn = {
    titulo: 'Mitador Unicorn: Raros porém participativos',
    img: 'uni',
    nome: 'Mitador Unicorn',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Unicorn.<br> Aparecem raramente mas são muito participativos. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythPlatinum = {
    titulo: 'Mitador Platinum',
    img: 'plat',
    nome: 'Mitador PLATINUM',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Platinum.<br> São sempre os mais ativos, e estão sempre contribuíndo promovendo conteúdo e interação. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythSilver = {
    titulo: 'Mitador Silver',
    img: 'silver',
    nome: 'Mitador SILVER',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Silver.<br> São os com atividade regular no grupo. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythLegacy = {
    titulo: 'Mitador Legacy: Veterano dos primórdios!',
    img: 'legacy',
    nome: 'Mitador Legacy',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores com privilégios Legacy.<br> São os mais antigos e responsáveis pelo grupo se tornar um grupo. (Unobtainable) ',
    obtain: 'inobtivel'
};
Badges.mythFresh = {
    titulo: 'Freshman: Mitadores Trainee',
    img: 'fresh',
    nome: 'Academy Freshman',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Freshman.<br> Tem menos de um mês de casa. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythGuest = {
    titulo: 'Guest: Não-mitador que convive na casa.',
    img: 'guest',
    nome: 'Convidado',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Guest.<br> Não são exatamente Mitadores, mas estão dentro presenciando o cotidiano dos mitos. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythHonorary = {
    titulo: 'Mitador Honorary: Protegido pessoal de um Prime ou Platinum',
    img: 'honor',
    nome: 'Mitador Honorário',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores com privilégios Honorary.<br> Os "protegidos", Mitadores que não podem ser banidos por inatividade. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythLurker = {
    titulo: 'Lurker: Sempre nas sombras, eventualmente se pronuncia.',
    img: 'lurk',
    nome: 'Lurker',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Lurker.<br> Raramente aparecem, apenas observam, costumam mitar mais durante encontros. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythGold = {
    titulo: 'Mitador Gold',
    img: 'gold',
    nome: 'Mitador GOLD',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Gold.<br> São os mais ativos no chat, e bastante ativos no grupo, e eventos, e tudo mais.. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythGhost = {
    titulo: 'Mitador Ghost: Inativo há mais de um mês.',
    img: 'ghost',
    nome: 'Mitador Fantasma',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Ghost.<br> Mitadores Fantasmas, aparecem, dão um oi, e somem por meses, geralmente interagem mais pessoalmente. (Reserved) ',
    obtain: 'reserved'
};
Badges.mythPrime = {
    titulo: 'Mitador Prime: Os primeiros Mitadores, criadores da porra toda.',
    img: 'prime',
    nome: 'Mitador Prime',
    tipo: 'Tier',
    desc: 'Badge reservada a Mitadores de Tier Prime.<br> Os três primeiros a iniciar o grupo oficial, naquele modesto chat. (Unobtainable) ',
    obtain: 'inobtivel'
};

//Badges

Badges.jogueiro = {
    titulo: 'Jogueiros: Sempre presentes nas jogatinas míticas',
    img: 'joy',
    nome: 'Jogueiro',
    tipo: 'Participação',
    desc: 'Mitadores que participam regularmente de jogos com outros Mitadores, badge desbloqueada depois de 5 jogatinas.*',
    obtain: 'sim'
};
Badges.hangouteiro = {
    titulo: 'Hangouteiro: Sempre marcando presença nos Hangouts!',
    img: 'hang',
    nome: 'Hangouteiro',
    tipo: 'Participação',
    desc: 'Mitadores que participam regularmente  dos Hangouts, badge desbloqueada após marcar presença em 10 hangouts ao longo do mês*',
    obtain: 'sim'
};
Badges.desenheiro = {
    titulo: 'Desenheiro: Depictador dos melhores momentos.',
    img: 'pen',
    nome: 'Desenheiro',
    tipo: 'Participação',
    desc: 'Badge dedicada a Mitadores que desenham, ilustram, e depictam, cenas e figuras do universo Mitador.',
    obtain: 'sim'
};
Badges.vassouraWielder = {
    titulo: 'Vassoura Wielder: Já vassourou alguém em uma situação realmente necessária',
    img: 'broom',
    nome: 'Vassoureiro ',
    tipo: 'Utilidade',
    desc: 'A Vassoura deve ser usada com responsabilidade, pra expulsar pessoas em rampage, mesmo que em roleplay, o uso bem encenado dela lhe condecora com esta badge. (Deprecated)',
    obtain: 'deprecated'
};
Badges._3dsPlay = {
    titulo: '3DS Teamplay: Jogou com mitadores via Nintendo 3DS',
    img: '3ds',
    nome: '3DS Multiplayer',
    tipo: 'Social',
    desc: 'Jogue com um Mitador num Nintendo3DS por Multiplayer Local ou Online',
    obtain: 'sim'
};
Badges.defiance = {
    titulo: 'Defiance: Sem medo de umas vassouradas',
    img: 'defiance',
    nome: 'Defiance',
    tipo: 'Participação',
    desc: 'Seja novato e zoe com a cara de um veterano na maneira mais mitadora possivel',
    obtain: 'sim'
};
Badges.pipoqueiro = {
    titulo: 'Arthur exclusive \'Pipoqueiro Badge\'',
    img: 'pop',
    nome: 'Pipoqueiro',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Arthur por ser um baita Pipoqueiro de Tretas (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.encontroMyth = {
    titulo: 'Encontro Mitador: eu fui!',
    img: 'group',
    nome: 'Encontro Mitador',
    tipo: 'Evento',
    desc: 'Participe de pelo menos um encontro organizado entre Mitadores ',
    obtain: 'sim'
};
Badges.smashFesteiro = {
    titulo: 'Smashfesteiro',
    img: 'ssb',
    nome: 'Smashfester',
    tipo: 'Evento',
    desc: 'Smashfests são mini-eventos onde se joga Smash Bros durante a noite, jogadores assiduos de SSB que tenham participado de pelo menos uma, recebe esta badge.',
    obtain: 'sim'
};
Badges.smashFest2014 = {
    titulo: 'Newyear 2014: Smashfest - Eu fui!',
    img: '2014',
    nome: 'Newyear 2014',
    tipo: 'Landmark',
    desc: 'Badge exclusiva para quem frequentou o Ano Novo Mitador de 2014 - Smashfest (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.mechanicPunch = {
    titulo: 'Claro exclusive \'Mechanic Punch\' Badge',
    img: 'soc',
    nome: 'Luva de Boxe',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Claro, porque a Luva de Boxe mecânica é sua trademark. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.programeiro = {
    titulo: 'Programeiro: Ajuda a codar paradas mitadoras',
    img: 'code',
    nome: 'Programeiro',
    tipo: 'Utilidade',
    desc: 'Ajude os Mitadores dando uma mão com qualquer tipo de edição de código pras paradas que criamos',
    obtain: 'sim'
};
Badges.frukiFest = {
    titulo: 'Newyear 2013: Frukifest - Eu fui!',
    img: '2013',
    nome: 'Newyear 2013',
    tipo: 'Landmark',
    desc: 'Badge exclusiva para quem frequentou o Ano Novo Mitador de 2013 - Frukifest (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.streameiro = {
    titulo: 'Streameiro: Ocasionalmente promove Livestreams',
    img: 'live',
    nome: 'Streameiro',
    tipo: 'Social',
    desc: 'Promova Livestreams, convide Mitadores',
    obtain: 'sim'
};
Badges.gardevoa = {
    titulo: 'Flicky exclusive \'Gardevobadge\' ',
    img: 'garde',
    nome: 'Gardevoir',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Flicky por ter recebido da Taverna do Cogu o título de PhD em Gardevoir por maioria de votos. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.mitamores = {
    titulo: 'Os Mitamores: Casais Mitadores são lindos',
    img: 'mitamores',
    nome: 'Os Mitamores',
    tipo: 'Social',
    desc: 'Assuma publicamente relacionamento com um Mitador. Ambos devem fazer parte do grupo ANTES. Esta badge não expira com o término.',
    obtain: 'sim'
};
Badges.doisPotes = {
    titulo: 'Luana exclusive \'Doooois Pooootes\' Badge',
    img: 'pots',
    nome: 'DOIS POTES',
    tipo: 'Exclusiva',
    desc: 'Exclusiva da Luana porque ela acha um desaforo o Flicky usar dois potes pra fazer Miojo (Unobtainable) ',
    obtain: 'inobtivel'
};
Badges.lendsClub = {
    titulo: 'Lends Club: Board Games com Mitadores',
    img: 'lends',
    nome: 'Lends Club',
    tipo: 'Evento',
    desc: 'Visite o clube de Board Games Lends Club acompanhado de Mitadores',
    obtain: 'sim'
};
Badges.badgeWhore = {
    titulo: 'Badge Whore - Faço tudo por badges!',
    img: 'badwho',
    nome: 'Badgewhore',
    tipo: 'Participação',
    desc: 'Seja um prick e fique pedindo por badges o tempo todo, essa badge não é uma boa badge, ela vale pontos negativos. (Deprecated)',
    obtain: 'deprecated'
};
Badges.kanaFest = {
    titulo: 'Kanafester - Gênios do Pseudo-Japonês',
    img: 'kana',
    nome: 'Pseudo-Japonês',
    tipo: 'Evento',
    desc: 'Seja figurinha carimbada no momento em que começar um papo aleatório em caracteres japoneses que não querem dizer nada em actual japonês',
    obtain: 'sim'
};
Badges.cupidRab = {
    titulo: 'Coelho exclusive \'Official Cupid\' Badge',
    img: 'cupid',
    nome: 'The Cupid',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Coelho por juntar casais since forever. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.pauHd = {
    titulo: 'Aragão exclusive \'Pau em HD\' Badge',
    img: 'pauhd',
    nome: 'Pau em HD',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Aragão por acidentalmente enviar uma foto em 1080p do seu instrumento no chat. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.likeBomb = {
    titulo: 'Like Bomb - Top da balada',
    img: 'likebomb',
    nome: 'Like Bomb Target',
    tipo: 'Social',
    desc: 'Tenha uma postagem no Facebook com mais de 100 Likes. Puro aumentador de e-peen',
    obtain: 'sim'
};
Badges.vidalGt = {
    titulo: 'Vidal exclusive \'Greentext\' Badge',
    img: 'greentxt',
    nome: 'Greentext',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Vidal, por viralizar seu Greentext (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.vidalFdp = {
    titulo: 'Vidal exclusive \'Filhadaputópolis\' Badge',
    img: 'catan',
    nome: 'Filhadaputópolis',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Vidal por fundar a maravilhosa cidade de Filhadaputópolis, cuja população é VOCÊ (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.miauCaralho = {
    titulo: 'Ana exclusive \'MIAO CARALHO\' Badge',
    nome: 'MIAO CARALHO',
    tipo: 'Exclusiva',
    desc: 'Exclusiva da Ana por berrar MIAU CARALHO enquanto tentamos pescar Matsunas (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.redCoder = {
    titulo: 'Red Coder: Coder Lendário',
    img: 'redcoder',
    nome: 'The Red Coder',
    tipo: 'Patente de Fodisse',
    desc: 'Programadores lendários, que programam coisas absurdas e sensacionais, incansavelmente e voluntariamente, amor de pessoa.',
    obtain: 'sim'
};
Badges.goldenPen = {
    titulo: 'Golden Pen: Desenheiro Lendário',
    nome: 'The Golden Pen',
    tipo: 'Patente de Fodisse',
    desc: 'Desenhistas que botam efforts magníficos nas piadas internas dos Mitadores e fazem delas Obras de Arte intensas.',
    obtain: 'sim'
};
Badges.tunelaa = {
    titulo: 'Tumeo exclusive \'???\' Badge',
    nome: '???',
    tipo: 'Sei lá',
    obtain: 'inobtivel'
};
Badges.wataZomb = {
    titulo: 'Watanabe Exclusive \'Japanese Horror Movie\' Badge',
    img: 'akuma',
    nome: 'Japanese Horror Movie',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Watanabe por se rastejar e desaparecer enquanto dorme na madrugada. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.preHistoric = {
    titulo: 'Mitador Jurássico - Os Mitadores Pré-Históricos',
    img: 'jurassic',
    nome: 'Pré-Mitadores',
    tipo: 'Social',
    desc: 'Mitadores dos primórdios, antes mesmo do chat oficial, essas pessoas já andavam juntas e se identificavam pelo nome de mitos (Unobtainable).',
    obtain: 'inobtivel'
};
Badges.musicist = {
    titulo: 'Musiqueiro',
    img: 'music',
    nome: 'Musiqueiro',
    tipo: 'Participação',
    desc: 'Produza peças musicais especificamente para os Mitadores',
    obtain: 'sim'
};
Badges.keidiPint = {
    titulo: 'Keidi exclusive \'Pinteiro\' Badge',
    img: 'print',
    nome: 'Pinteiro',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Keidi por manter um acervo gigante de Prints inesperados de todos (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.merito = {
    titulo: 'Mitador por mérito - Admin/Community pick',
    img: 'merito',
    nome: 'Mitador por Mérito',
    tipo: 'Entrada',
    desc: 'Mitador que não é exatamente um bestie de ninguém dentro da casa, mas que desperta admiração de todos e por isso mereceu entrar. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.matricialPrint = {
    titulo: 'Vidal exclusive \'Impressora Matricial\' Badge',
    img: 'printer',
    nome: 'Impressora Matricial',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Vidal por roncar igual uma impressora matricial durante um overnight entre Mitadores (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.happyDoor = {
    titulo: 'Karen exclusive \'Porta Feliz\' Badge',
    img: 'hpydoa',
    nome: 'Porta Feliz',
    tipo: 'Exclusiva',
    desc: 'Exclusiva da Karen por dizer que as coisas, incluindo portas, são felizes. Elas não são felizes. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.satanicat = {
    titulo: 'Matsuna exclusive \'Satanicat\' Badge',
    img: 'satanicat',
    nome: 'Satanicat',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Matsuna por invocar gatos espiratânicos dos confins do inferno. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.karaoke = {
    titulo: 'Karaokê Mitador: Eu fui!',
    img: 'karaoke',
    nome: 'Karaoke',
    tipo: 'Evento',
    desc: 'Participe de um Karaoke Party com Mitadores',
    obtain: 'sim'
};
Badges.nennys = {
    titulo: 'Mitador Nennys: o mais novo',
    img: 'nennys',
    nome: 'Nennys',
    tipo: 'Single-Wielder',
    desc: 'Seja o Mitador mais novo.',
    obtain: 'sim'
};
Badges.elder = {
    titulo: 'Mitador Ancião: o mais velho',
    img: 'ancient',
    nome: 'Ancião',
    tipo: 'Single-Wielder',
    desc: 'Seja o Mitador mais velho.',
    obtain: 'sim'
};
Badges.mariEx = {
    titulo: 'Pall exclusive \'!!!\' Badge',
    img: 'excla',
    nome: '!!!',
    tipo: 'Exclusiva',
    desc: 'Exclusiva da Pall por receber qualquer noticias com esse sinal gráfico (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.fuQuest = {
    titulo: 'Fuquest/OsMitadores the Game: Devteam',
    img: 'fq',
    nome: 'Fuquest',
    tipo: 'Projeto',
    desc: 'Participe do desenvolvimento do nosso joguinho dos Mitadores, atualmente em Hiatus',
    obtain: 'sim'
};
Badges.radiant = {
    titulo: 'Radiant Historia 11k',
    img: 'historia',
    nome: 'Radiant Historia 11k',
    tipo: 'Landmark',
    desc: 'Participantes do épico post de Radiant Historia de 2012 que recebeu mais de 11 mil comentários totalmente fora de nexo. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.genesis = {
    titulo: 'Anfitrião de SEGA Genesis',
    img: 'genesis',
    nome: 'Genesis',
    tipo: 'Social',
    desc: 'Convide Mitadores pra jogar SEGA Genesis na sua casa',
    obtain: 'sim'
};
Badges.n64 = {
    titulo: 'Anfitrião de Nintendo 64',
    img: 'n64',
    nome: 'N64',
    tipo: 'Social',
    desc: 'Convide Mitadores pra jogar Nintendo 64 na sua casa',
    obtain: 'sim'
};
Badges.ps2 = {
    titulo: 'Anfitrião de Playstation 2',
    img: 'ps2',
    nome: 'PS2',
    tipo: 'Social',
    desc: 'Convide Mitadores pra jogar PS2 na sua casa',
    obtain: 'sim'
};
Badges.ps3 = {
    titulo: 'Anfitrião de Playstation 3',
    img: 'ps3',
    nome: 'PS3',
    tipo: 'Social',
    desc: 'Convide Mitadores pra jogar PS3 na sua casa',
    obtain: 'sim'
};
Badges.ps4 = {
    titulo: 'Anfitrião de Playstation 4',
    img: 'ps4',
    nome: 'PS4',
    tipo: 'Social',
    desc: 'Convide Mitadores pra jogar PS4 na sua casa',
    obtain: 'sim'
};
Badges.wii = {
    titulo: 'Anfitrião de Nintendo Wii',
    img: 'wii',
    nome: 'Wii',
    tipo: 'Social',
    desc: 'Convide Mitadores pra jogar Wii na sua casa',
    obtain: 'sim'
};
Badges.rplay = {
    titulo: 'Roleplay Masters: *flies away*',
    img: 'rp',
    nome: 'RP Masters',
    tipo: 'Participação',
    desc: 'Entre de cabeça nos roleplays sempre que um estiver rolando, intensamente, como se aquilo fosse realmente real, porque você é biruta, mas não liga.',
    obtain: 'sim'
};
Badges.cah = {
    titulo: 'Mitadores Contra a Humanidade!',
    img: 'cah',
    nome: 'Cards Against Humanity',
    tipo: 'Participação',
    desc: 'Seja jogador assíduo de Cards Against Humanity, 3 ou mais partidas valem a badge',
    obtain: 'sim'
};
Badges.essetop = {
    titulo: '[Evento] ESSE TÓPICO É PRA VOCÊ....',
    img: 'essetop',
    nome: 'ESSE TÓPICO',
    tipo: 'Landmark',
    desc: 'Para quem participou do Evento "ESSE TÓPICO" de Junho de 2015, postando headlines. (Unobtainable) ',
    obtain: 'inobtivel'
};
Badges.ygo = {
    titulo: 'Duelista',
    img: 'ygo',
    nome: 'Duelista',
    tipo: 'Participação',
    desc: 'Duele com Mitadores regularmente',
    obtain: 'sim'
};
Badges.gartic = {
    titulo: 'Círculo Mitador de Gartic',
    img: 'gartic',
    nome: 'Gartic',
    tipo: 'Participação',
    desc: 'Jogue Gartic com Mitadores regularmente',
    obtain: 'sim'
};
Badges.pepe = {
    titulo: 'Rare Pepe Trader Certificado',
    img: 'pepe',
    nome: 'Certified Pepe Trader',
    tipo: 'Participação',
    desc: 'Para os que toda terça enriquecem o mercado de Rare Pepes dos Mitadores',
    obtain: 'sim'
};
Badges.frog = {
    titulo: 'Romulo Exclusive Samango Frog Badge',
    img: 'frog',
    nome: 'Samango Frog',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Rômulo pelo seu deslize imenso na Taverna do Cogu (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.poke = {
    titulo: 'Pam Exclusive *poke poke* Badge',
    img: 'poke',
    nome: '*Poke Poke*',
    tipo: 'Exclusiva',
    desc: 'Exclusiva da Pam por cutucar the hell out of todo mundo incessantemente. (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.idea = {
    titulo: 'Badger: Até eu criei uma Badge e você não!',
    img: 'badgeidea',
    nome: 'Badge Supporter',
    tipo: 'Utilidade',
    desc: 'Dê idéias de badge no tópico oficial de Badges',
    obtain: 'sim'
};
Badges.help = {
    titulo: 'Ajudeiro:  Ele não é o Luciano, mas também ajuda pra caramba!',
    img: 'ajudeiro',
    nome: 'Ajudeiro',
    tipo: 'Utilidade',
    desc: 'Ajude Mitadores novatos a compreender o ambiente, ou ajude Mitadores em qualquer sentido, com qualquer coisa que ele precise.',
    obtain: 'sim'
};
Badges.harass = {
    titulo: 'Harasser: Bulinadores Profissionais',
    img: 'harass',
    nome: 'Harasser',
    tipo: 'Participação',
    desc: 'Seja um bulinador forte que deixa pessoas constrangidas',
    obtain: 'sim'
};
Badges.qqq = {
    titulo: 'Dogolas Exclusive Q Badge',
    img: 'qqq',
    nome: 'Q',
    tipo: 'Exclusiva',
    desc: 'Exclusiva do Douglas pela letra Trademark (Unobtainable)',
    obtain: 'inobtivel'
};
Badges.plugDJ = {
    titulo: 'DJ assíduo nas pistas mitadoras.',
    img: 'plugdj',
    nome: 'Plug DJ',
    tipo: 'Social',
    desc: 'Participe regularmente adicionando playlists durante sessões no PlugDJ dos Mitadores',
    obtain: 'sim'
};



Badges.tumeoEx = {
 titulo: 'Tumeo Exclusive "Black&Purple for no Reason" Badge',
 img:'tumeocoisa',
 nome:' Black&Purple for no Reason',
 tipo:' Exclusiva',
 desc:' Exclusiva do Tumeo porque ele tá sempre com esse fundo roxo e preto sem razão aparente.(Unobtainable)' ,
    obtain: 'inobtivel',
};
Badges.maid = {
 titulo:'The Maid - Alguém tem que limpar essa bagaça',
 img:'maid',
 nome:' The Maid',
 tipo:' Roleplay/Participação',
 desc:' Responsável pela faxina da casa img: limpeza de porão, consertar letreiros, e outras pequenas ordens no lugar.',
obtain: 'sim',
};
Badges.nekomimi = {
 titulo:"Trust me, I'm a cat!",
 img:'nekomimi',
 nome:' I am a Cat',
 tipo:' Roleplay',
 desc:' Seja um gato... apenas isso....',
    obtain: 'reserved',
};
Badges.mitrade = {
 titulo:"Trader de Mitos Raros, compro e vendo",
 img:'mitrade',
 nome:' Trader de Mitos Raros',
 tipo:' Evento',
 desc:'  Guarde suas imagens e reactions de Mitadores, e unleashe elas durante Trades, enriquecendo o acervo dos demais.',
    obtain: 'sim',
};
Badges.tunelaa = {
 titulo:'Tumeo exclusive Golden Gear Badge',
 img:'goldgear',
 nome:' Shiny Golden Gear',
 tipo:' Exclusiva',
 desc: ' Exclusiva do Tumeo por trabalhar duro pra produzir coisas legais pra família.(Unobtainable) ',
    obtain: 'inobtivel',
};

Badges.mitopg = {
 titulo:'MitoPG - RPG com Mitadores',
 img:'mitopg',
 nome:' MitoPG',
 tipo:' Evento/Participação',
 desc: ' Participe das Mesas de RPG promovidas pela casa',
    obtain: 'sim',
};


Badges.skgPart = {
    titulo: 'Skull Girls Tournament - Participei... mas não ganhei. Pq sou noob',
    img: 'skgpt',
    nome: 'Torneio SkullGirls - Participante',
    tipo: 'Evento',
    desc: 'Participe de um torneio de Skullgirls',
    obtain: 'sim'
};
Badges.skullGirls = {
    titulo: 'Skull Girls Tournament - 1o Lugar!!!',
    img: 'skg',
    nome: 'Torneio SkullGirls - Campeão',
    tipo: 'Evento',
    desc: 'Vença um torneio de Skullgirls',
    obtain: 'sim'
};
Badges.mythEvent = {
    titulo: 'Mitador de Evento',
    nome: 'Mitador de Evento',
    tipo: 'Entrada',
    desc: 'Mitadores que entraram por meio de sobrevivência a Eventos que envolve gente de fora(Unobtainable)',
    misc: 'Entre nos Mitadores por meio de seleção aleatória de um Evento',
    obtain: 'inobtivel'
};
Badges.steam = {
    titulo: 'Steamitos',
    nome: 'Steam Group Members',
	    img: 'steam',
    tipo: 'Social',
    desc: 'Mitadores que porventura estão participando do grupo na Steam',
    misc: 'Entre no grupo da Steam',
    obtain: 'sim'
};





//Crests
Badges.Vinicius = {
    titulo: 'The Piano Key: Vinicius Crest',
    nome: 'Vinicius Crest',
    img: 'vkps',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Flicky = {
    titulo: 'The Mighy Red Hood: Flicky Crest',
    nome: 'Flicky Crest',
    img: 'hood',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Gors = {
    titulo: 'The Bullet Head: Gors Crest',
    nome: 'Gors Crest',
    img: 'gors',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Ana = {
    titulo: 'Yomiell Hankerchief: Ana Crest',
    nome: 'Ana Crest',
    img: 'yomi',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Pall = {
    titulo: 'The Kawaii Stick: Pall Crest',
    nome: 'Pall Crest',
    img: 'pall',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Claro = {
    titulo: 'Com o Claro você fala ilimitado! Claro Crest',
    nome: 'Claro Crest',
    img: 'claro',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Herbe = {
    titulo: 'A Erva da Alegria: Herbe Crest',
    nome: 'Herbe Crest',
    img: 'herb',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Cesar = {
    titulo: 'The Rockstar Sneakers: Rasec Crest',
    nome: 'Rasec Crest',
    img: 'rasec',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Garland = {
    titulo: 'The Black Mage: Garland Crest',
    nome: 'Garland Crest',
    img: 'mage',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};
Badges.Zero = {
    titulo: 'The Dimensional Zero: Arthur Crest',
    nome: 'Arthur Crest',
    img: 'zero',
    tipo: 'Crest',
    desc: 'Lorem Ipsum'
};

/*
function (title, imgName, badgename, badgetype, obtain) {

    if (imgName === undefined) {
        imgName = 'badge';
    }
    var obt = '';
    var unobit = '';

    if (obtain !== undefined) {
        if (obtain.search("Unobtainable") !== -1) {
            var obt = 'unob';
            var unobit = 'unobtr';
        }
        if (obtain.search("Reserved") !== -1) {
            var unobit = 'unobtr'
        }
        if (obtain.search("Deprecated") !== -1) {
            var obt = 'grey';
            var unobit = 'unobtr'
        }
    }

    return '  <tr class="' + unobit + '">\
    <td class="badgeslot"> <img height="48" title="' + title + '" src="' + PATH + imgName + '.png"></td> \
    <td badge="' + imgName + '"  href = "javascript:void(0)" onclick="document.getElementById(\'light\').style.display=\'block\';document.getElementById(\'fade\').style.display=\'block\'; document.getElementById(\'lighter\').innerHTML = (\'\'); viewDesc(this.attributes.badge.value)" class="nameslot" ;">' + badgename + ' <br> <div style="font-size:10;color:#aaa;"> ' + title + ' </div></td> \
     <td onclick="viewDesc(this.attributes.id.value)" class="type" id="' + badgetype + '"> ' + badgetype + ' </td> \
    <td class="obtainslot" id="' + obt + '">  ' + obtain + ' </td></tr>';

}
*/

indexTable(Badges);
function showBadge(sttr,toggle){
    
    if(toggle){
        if(sttr === 'minister'){
            document.getElementById('type').innerHTML = '<img height="120px" width="200px" src="'+PATH + sttr+'.png">';
        }else{
            document.getElementById('type').innerHTML = '<img height="200px" width="200px" src="'+PATH + sttr+'.png">';
        }
        $('#type').show();
    }
    else{
        $('#type').hide();
    }
}

function viewDesc(sttr, type) {

    if (sttr === 'close') {
        // document.getElementById('light').style.display='none';
        //document.getElementById('fade').style.display='none';
        document.body.style.overflow = '';
        document.getElementById('lighter').innerHTML = '';
        $('#light').hide('slow', 'linear');
        $('#fade').hide();
        if(type){
            $('#type').hide();
        }
    }else if (type){
        $('#type').show();
        document.getElementById('type').innerHTML = 'Tipo ' + sttr;
    }else{
        document.body.style.overflow = 'hidden';
        $('#light').show('slow', 'linear');
        $('#fade').show();
        
        console.log('############### ' + sttr + ' ###############');
   
        for (var i in Myth) {
            for (var x in Myth[i].badges) {
                if (Myth[i].badges[x][1] === sttr) {
                    console.log(Myth[i].nome + ' confere!');
                    document.getElementById('lighticon').innerHTML = ('<img src="' + PATH + sttr + '.png">');
                    document.getElementById('lititle').innerHTML = (Myth[i].badges[x][0]);

                    document.getElementById('lighter').innerHTML += ('\
               <div class="omito"><td class="lite"> <a target="_blank" href="https://www.facebook.com/' + Myth[i].faceId + '">\
                 <img class="profile" src="http://graph.facebook.com/' + Myth[i].faceId + '/picture?width=50&height=50"></a></td>\
				<td style="padding-left:20px;" class="lite">' + Myth[i].nome + ' Possui essa badge! </td></div><br>');
                }
            }
        }
    }
}

$(document).ready(function () {
    $("#myTable").tablesorter();
});

function indexTable(badge) {
    
    var aux = '';
    var obt = '';
    var unobit = '';
    for (var i in badge) {
        
        if(!badge[i].img){
            badge[i].img = 'badge';
        }
        
        if(badge[i].obtain == 'deprecated'){
            unobit = 'unobtr';
            obt = 'grey';
        }else if(badge[i].obtain == 'inobtivel'){
            unobit = 'unobtr';
            obt = 'unob';
        }else if(badge[i].obtain == 'reserved'){
            unobit = 'unobtr';
            obt = 'reserva';
        }else{
            unobit = 'none';
            obt = 'none';
        }
        
        aux = '  <tr class="'+ unobit +'">\
    <td class="badgeslot"> <img height="48" title="' + badge[i].titulo + '" src="' + PATH + badge[i].img + '.png"></td> \
    <td badge="' + badge[i].img + '" onmouseover="showBadge(this.attributes.badge.value,true)" onmouseout="showBadge()" onclick="viewDesc(this.attributes.badge.value)" class="nameslot">' + badge[i].nome + ' <br> <div style="font-size:10;color:#aaa;"> ' + badge[i].titulo + ' </div></td> \
     <td onmouseover="viewDesc(this.attributes.id.value,true)" onmouseout="viewDesc(\'close\',true)" class="type" id="' + badge[i].tipo + '"> ' + badge[i].tipo + ' </td> \
    <td class="obtainslot" id="' + obt + '">  ' + badge[i].desc + ' </td></tr>';
        
        
        document.getElementById('asofe').innerHTML += aux;
    }
}

function toggle_visibility(unobtr) {
    var e = document.getElementsByClassName(unobtr);

    
    for (var i in e) {
       if(e[i].style.display != 'none') {
            e[i].style.display = 'none';
        } else {
            e[i].style.display = 'table-row';
        }
    }
}
