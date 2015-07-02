/*
*   > MITHYBOARD SCRIPT
*   > VERSION: 2.0.0
*   > BUILD: 0629-20
*   > ALTERAÇÕES:
*       > Criação do pseudo-DB.
*       > Função que auto-escreve os badges e a quantidade.
*       > Correção no hover animation das badges.
*       > Mais Badges adicionadas e correção NA IDENTAÇÃO DO FLIKE!
*       > Novo sistema de criação de badges.
*       > Mitadores agora são arrays de um objeto.
*       > Miadores agora são objetos com atributos.
*       > Inserido a escrita do documento inteiro via script.
*       > Arrumando método de escrita no documento.
*       > Limpeza no código e criação de sort alfabético.
*       > Added ordenar por quantidade de badges.
*       > Adicionado tinysort (novo método de sort).
*       > Tentativas com o gayQuery.
*       > Adicionado músicas.
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

document.getElementById('titl').innerHTML = "Mostrando lista na ordem default";
document.getElementById('videoobject').innerHTML = "" + videoObject;
function writeBadges(myth){
/*
*   Descrição: Função que escreve no #document as imagens
*   das badges e e a quantidade delas (a quantidade é cal-
*   culada a partir do array.length e não dos filhos da tag).
*   Args: 1. O array do mitador.
*/
    for (var i in myth.badges) {
        document.getElementById(myth.tagId).innerHTML += ' <img class="badgeicon" title="' + myth.badges[i][0] + '" src="' + PATH + myth.badges[i][1] + '.png"> ';
    }
    document.getElementById(myth.tagId1).innerHTML += myth.badges.length;
}


function indexMyth(osMitos){
/*
*   Descrição: Função que simplifica a escrita das badges
*   no #document.
*   Agora simplifica a escrita do documento todo.
*   Args: 1. Os Mitadores (object). **apesar de não ter um
*   outro argumento válido**
*/


    for (var i in osMitos){

        document.getElementById('tabelas').innerHTML += createTable(osMitos[i]);
    }

    for (var x in osMitos){
        writeBadges(osMitos[x]);
    }
}

//////////////////////////////

var checkAlfa = true;
var checkBadge = false;
var checkTier = true;
var checkAno = true;
indexMyth(Myth);
//////////////////////////////////
function toggleSort(type){

    if (!type) {
        tinysort('div#tabelas>table',{order:'rand'});
        document.getElementById('titl').innerHTML = "Mostrando lista em ordem aleatória";
    }

    if (type == 'alfa'){

        if (checkAlfa) {
            tinysort('div#tabelas>table');
            checkAlfa = false;
            document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabética (A-Z)";
        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            checkAlfa = true;
            document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabética (Z-A)";
        }
    }

    if (type == 'badge') {

        if (checkBadge) {
            tinysort('div#tabelas>table');
            tinysort('div#tabelas>table',{selector:'td.badges2'});
            checkBadge = false;
            document.getElementById('titl').innerHTML = "Mostrando lista por quantidade de badges (Crescente)";

        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            tinysort('div#tabelas>table',{selector:'td.badges2',order:'desc'});
            checkBadge = true;
            document.getElementById('titl').innerHTML = "Mostrando lista por quantidade de badges (Decrescente)";
        }



    }

    if (type == 'tier') {

        if (checkTier) {
            tinysort('div#tabelas>table');
            tinysort('div#tabelas>table',{selector:'span.tierlevel'});
            checkTier = false;
            document.getElementById('titl').innerHTML = "Mostrando lista por Tier (Decrescente)";
        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            tinysort('div#tabelas>table',{selector:'span.tierlevel',order:'desc'});
            checkTier = true;
            document.getElementById('titl').innerHTML = "Mostrando lista por Tier (Crescente)";
        }

    }

    if (type == 'ano') {

        if (checkAno) {
            tinysort('div#tabelas>table');
            tinysort('div#tabelas>table',{selector:'strong.mythano'});
            checkTier = false;
            document.getElementById('titl').innerHTML = "Mostrando lista por Ano (Decrescente)";
        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            tinysort('div#tabelas>table',{selector:'strong.mythano',order:'desc'});
            checkTier = true;
            document.getElementById('titl').innerHTML = "Mostrando lista por Ano (Crescente)";
        }

    }
}

function clickedButton(type){

    if(type == 'random'){
        var unclick = ['alfa','tier','badge','ano'];
    }else if (type == 'badge'){
        var unclick = ['alfa','tier','random','ano'];
    }else if (type == 'alfa'){
        var unclick = ['badge','tier','random','ano'];
    }else if (type == 'tier'){
        var unclick = ['alfa','badge','random','ano'];
    }else if (type == 'ano'){
        var unclick = ['alfa','badge','random','tier'];
    }
    for (var i in unclick){
        document.getElementById('butt'+unclick[i]).style.backgroundColor = '#224';
    }
    document.getElementById('butt'+type).style.backgroundColor = 'red';
}
/*
function toggleGay() {
    var videoPATH = 'https://www.youtube.com/v/';
    var randomNum = parseInt(10 * Math.random());
    console.log(randomNum);
    switch (randomNum) {
        case 0: videoLink = [videoPATH + 'Kz2WjqV9Dc8', '「O lado bom de ser gay」'];
            break;
        case 1: videoLink = [videoPATH + 'lWqJTKdznaM', '「Erasure - Always」'];
            break;
        case 2: videoLink = [videoPATH + '85ftfVUTzM4', '「Gayzão, garoto gay」'];
            break;
        case 3: videoLink = [videoPATH + 'geC2gHZ6m2g', '「It\'s Raining men」'];
            break;
        case 4: videoLink = [videoPATH + 'AO43p2Wqc08', '「Macho man」'];
            break;
        case 5: videoLink = [videoPATH + 'f4Mc-NYPHaQ', '「I want to break free」'];
            break;
        case 6: videoLink = [videoPATH + 'lcOxhH8N3Bo', '「Total eclipse of the heart」'];
            break;
        case 7: videoLink = [videoPATH + 'ZBR2G-iI3-I', '「I wil survive」'];
            break;
        case 8: videoLink = [videoPATH + 'CS9OO0S5w2k', '「YMCA」'];
            break;
        case 9: videoLink = [videoPATH + 'lcOxhH8N3Bo', '「Total eclipse of the heart」'];
            break;
        case 10: videoLink = [videoPATH + '596qaxm-u4o', '「I will survive」'];
            break;
    }
    videoObject = '<object width="300" height="300"> \
        <param name="movie" value="'+ videoLink[0] +'?hd=1&amp;autoplay=1&amp;loop=1&amp;playlist=yzC4hFK5P3g"></param> \
        <param name="allowscriptaccess" value="always"></param> \
        <embed src="'+ videoLink[0] +'?hd=1&amp;autoplay=1&amp;loop=1&amp;playlist=yzC4hFK5P3g" type="application/x-shockwave-flash" allowscriptaccess="always" width="300" height="300"> \
        </embed></object>';
    document.getElementById('videoobject').innerHTML = "" + videoObject;
}
*///////////////////////////////

function toggleTable() {
    document.getElementById('tabelas').innerHTML = '<iframe id="gayframe" frameborder="0" height="100%" width="100%" src="mitabela.html"></iframe>';
}

///////////////////////////////
// Gay Query
$(document).ready(function(){


    // fais slide inicial
    $('#tabelas').hide(0, function(){

        $('#tabelas').delay(1000).toggle('slow','linear', function() {
            //$('#flikegay').delay(7000).toggle('slow','linear',function() {
             //   document.getElementById('flikegay'). innerHTML = 'Aprecie as músicas em homenagem ao Mitagay Flicky!';
             //   $('#flikegay').delay(8000).toggle('slow','linear');
            //});
        });
    });

    $('#hidden2').click(function() {
        toggleTable();
        $('#hidden').hide('slow','linear');
        $('#hidden2').hide('slow','linear');
        $('#xis').show('slow','linear');
    });

    $('#xis').click(function() {
        document.getElementById('tabelas').innerHTML = '';
        indexMyth(Myth);
        $('#hidden').delay(1).show('slow','linear');
        $('#hidden2').delay(1).show('slow','linear');
        $('#xis').hide('slow','linear');
    });

    // fais slide ao apertar o botão
    $('#buttalfa').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('alfa');
            $('#tabelas').toggle(950);

        });
        clickedButton('alfa');
    });
    $('#buttbadge').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('badge');
            $('#tabelas').toggle(950);
        });
        clickedButton('badge');
    });
    $('#butttier').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('tier');
            $('#tabelas').toggle(950);
        });
        clickedButton('tier');
    });
    $('#buttrandom').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort();
            $('#tabelas').toggle(950);
        });
        clickedButton('random');
    });
    $('#buttano').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('ano');
            $('#tabelas').toggle(950);
        });
        clickedButton('ano');
    });
    /*
    $('#buttgay').click(function(){
        document.getElementById('flikegay').innerHTML = '';
        $('#flikegay').delay(7000).toggle('slow','linear',function() {
            document.getElementById('flikegay').innerHTML = 'Você está ouvindo: ' + videoLink[1];
            $('#flikegay').delay(7000).toggle('slow','linear');
        });
        toggleGay();
    });*/

    $('#tabelas').click(function(){

            $('.button').delay(1).hide('slow','linear');
            $('#titl').delay(1).hide('slow','linear');
            $('#hidden').delay(1).show('slow','linear');
            $('#hidden2').delay(1).show('slow','linear');
        });

    $('#hidden').click(function(){
        $('.button').show('slow','linear');
        $('#titl').show('slow','linear');
        $('#hidden').hide('slow','linear');
        $('#hidden2').hide('slow','linear');
    });

});
