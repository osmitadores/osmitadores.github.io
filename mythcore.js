/*
*   > MITHYBOARD SCRIPT
*   > VERSION: 1.7.0
*   > BUILD: 0610-21
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
		document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabética (A-Z)";
    }else{
        mitadores.reverse();
        checkAlfa = true;
		document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabética (Z-A)";
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