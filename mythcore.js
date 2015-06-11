/*
*   > MITHYBOARD SCRIPT
*   > VERSION: 1.7.0
*   > BUILD: 0610-21
*   > ALTERAÃ‡Ã•ES:
*       > CriaÃ§Ã£o do pseudo-DB.
*       > FunÃ§Ã£o que auto-escreve os badges e a quantidade.
*       > CorreÃ§Ã£o no hover animation das badges.
*       > Mais Badges adicionadas e correÃ§Ã£o NA IDENTAÃ‡ÃƒO DO FLIKE!
*       > Novo sistema de criaÃ§Ã£o de badges.
*       > Mitadores agora sÃ£o arrays de um objeto.
*       > Miadores agora sÃ£o objetos com atributos.
*       > Inserido a escrita do documento inteiro via script.
*       > Arrumando mÃ©todo de escrita no documento.
*       > Limpeza no cÃ³digo e criaÃ§Ã£o de sort alfabÃ©tico.
*       > Added ordenar por quantidade de badges.
*
*   > WARNINGS:
*       > NÃƒO ALTERAR O MÃ‰TODO "writeBadges(myth)", ELE Ã‰ O CORE QUE FAZ A PORA TODA.
*       > NÃƒO ALTERAR A PRIMEIRA POSIÃ‡ÃƒO DOS ARRAYS (0), A MENOS QUE O ID DO MITADOR SEJA ALTERADO.
*       > CLARO, NÃƒO FUÃ‡E.
*          
*   > NOMENCLATURAS:
*       > VARIÃVEIS DE BADGES COMUNS: NOMES SUGESTIVOS COM NO MÃXIMO DUAS PALAVRAS (EX: doisPotes).
*       > VARIÃVEIS DE BADGES TIPO TIER: UMA PALAVRA SEGUIDA DE "myth" (EX: mythLegacy).
*       > VARIÃVEIS DE BADGES TIPO CREST: NOME DO MITADOR SEGUIDO DE "c" (EX: cFlicky).
*       > NOVO SISTEMA DE CRIAÃ‡ÃƒO DE BADGES! CRIAR VAR CHAMANDO A FUNÃ‡ÃƒO createBadge(title,imgName).
*
*   > CRIAÃ‡ÃƒO DE BADGES:
*       > var nomeDaBadge = createBadge('TÃ­tulo da Badge', 'nome do arquivo da imagem sem extensÃ£o');
*       > Exemplo: var doisPotes = createBadge('Luana exclusive \'Doooois Pooootes\' Badge', 'pots');
*       > Caso a badge nÃ£o tenha imagem, Ã© sÃ³ ignorar o segundo argumento, a imagem serÃ¡ automaticamente adicionada.
*       > Exemplo: var pauHd = createBadge('AragÃ£o exclusive \'Pau em HD\' Badge');
*/

   document.getElementById('titl').innerHTML = "Mostrando lista na ordem default";
 
function writeBadges(myth){
/*
*   DescriÃ§Ã£o: FunÃ§Ã£o que escreve no #document as imagens 
*   das badges e e a quantidade delas (a quantidade Ã© cal-
*   culada a partir do array.length e nÃ£o dos filhos da tag).
*   Args: 1. O array do mitador.
*/
    for (var i in myth.badges) {
        document.getElementById(myth.tagId).innerHTML += ' <img class="badgeicon" title="' + myth.badges[i][0] + '" src="' + PATH + myth.badges[i][1] + '.png"> ';
    }
    document.getElementById(myth.tagId1).innerHTML += myth.badges.length; 
}


function indexMyth(osMitos){
/*
*   DescriÃ§Ã£o: FunÃ§Ã£o que simplifica a escrita das badges
*   no #document.
*   Agora simplifica a escrita do documento todo.
*   Args: 1. Os Mitadores (object). **apesar de nÃ£o ter um 
*   outro argumento vÃ¡lido**
*/  
    

    for (var i in osMitos){

        document.getElementById('tabelas').innerHTML += createTable(osMitos[i]);
    }

    for (var x in osMitos){
        writeBadges(osMitos[x]);
    }
}

//////////////////////////////

var mitadores = [];
var badges = [];
var tier = [];
var checkAlfa = true;
var checkBadge = false;
var checkTier = true;
for (var i in Myth){
    
    mitadores[mitadores.length] = [Myth[i].nome, Myth[i]];

}
for (var i in Myth){
    
    badges[badges.length] = [Myth[i].badges.length, Myth[i]];
	
}
for (var i in Myth){
    
    tier[tier.length] = [Myth[i].tier[2], Myth[i], Myth[i].badges.length];
	console.log(Myth[i].badges.length);
}
//////////////////////////////////

function toggleAlfabetic(){

    if (checkAlfa) {
        mitadores.sort();
        checkAlfa = false;
		document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabÃ©tica (A-Z)";
    }else{
        mitadores.reverse();
        checkAlfa = true;
		document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabÃ©tica (Z-A)";
    }


    document.getElementById('tabelas').innerHTML = '';
    for (var i in mitadores){

        document.getElementById('tabelas').innerHTML += createTable(mitadores[i][1]);
    }
    for (var x in Myth){
        writeBadges(Myth[x]);
    }
}


function toggleBadge(){

    if (checkBadge) {
       badges.sort(function(a,b){return a[0]-b[0];});
        checkBadge = false;
		document.getElementById('titl').innerHTML = "Mostrando lista por quantidade de badges (Crescente)";
	
    }else{
        badges.sort(function(a,b){return b[0]-a[0];});
        checkBadge = true;
			document.getElementById('titl').innerHTML = "Mostrando lista por quantidade de badges (Decrescente)";
    }


    document.getElementById('tabelas').innerHTML = '';
    for (var i in badges){

        document.getElementById('tabelas').innerHTML += createTable(badges[i][1]);
    }
    for (var x in Myth){
        writeBadges(Myth[x]);
    }
}

function toggleTier(){




    if (checkTier) {
		
       tier.sort(function(a,b)
	   {
		   
		   if (a[0] === b[0])
		   {
			   var x = a[2], y = b[2];
			   return x < y ? 1 : 0;
			   
		   }
		   return a[0]-b[0];
		   		   
		});
	  
        checkTier = false;
			document.getElementById('titl').innerHTML = "Mostrando lista por Tier(Decrescente)";
    }else{
		
  tier.sort(function(a,b)
	   {
		   
		   if (a[0] === b[0])
		   {
			   var x = a[2], y = b[2];
			   return x < y ? 1 : 0;
			   
		   }
		   return a[0]-b[0];
		   		   
		});
	  tier.reverse();
	
        checkTier = true;
			document.getElementById('titl').innerHTML = "Mostrando lista por Tier (Crescente)";
    }


    document.getElementById('tabelas').innerHTML = '';
    for (var i in tier){

        document.getElementById('tabelas').innerHTML += createTable(tier[i][1]);
    }
    for (var x in Myth){
        writeBadges(Myth[x]);
    }
}

indexMyth(Myth);
