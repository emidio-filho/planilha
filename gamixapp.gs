function getScriptURL(qs) {

  var url = ScriptApp.getService().getUrl();

  //Logger.log(url + qs);

  return url + qs ;

}


function doGet(e) 

{

  //Logger.log('query params: ' + Utilities.jsonStringify(e));

  if(e.queryString !=='')

  {  

    switch(e.parameter.mode)

    {

      case 'page4':

        setPage('Page4')      

        return HtmlService

        .createTemplateFromFile('Page4')

        .evaluate()

        .addMetaTag('viewport', 'width=device-width, initial-scale=1')

        .setTitle("Page4"); 

        break;  

      case 'page3':

        setPage('Page3');        

        return HtmlService

        .createTemplateFromFile('Page3')

        .evaluate()

        .addMetaTag('viewport', 'width=device-width, initial-scale=1')

        .setTitle("Page3");

        break;

      case 'page2':

        setPage('Page2');        

        return HtmlService

        .createTemplateFromFile('Page2')

        .evaluate()

        .addMetaTag('viewport', 'width=device-width, initial-scale=1')

        .setTitle("Page2");

        break;  

      case 'page1':

         setPage('Page1');

         return HtmlService

        .createTemplateFromFile('Page1')

        .evaluate()

        .addMetaTag('viewport', 'width=device-width, initial-scale=1')

        .setTitle("Page1");

        break;

      default:

        setPage('Page1');

        return HtmlService

        .createTemplateFromFile('Page1')

        .evaluate()

        .addMetaTag('viewport', 'width=device-width, initial-scale=1')

        .setTitle("Page1");

        break;

    }

  }

  else

  {

    setPage('Page1');

    return HtmlService

    .createTemplateFromFile('Page1')

    .evaluate()

    .addMetaTag('viewport', 'width=device-width, initial-scale=1')

    .setTitle("Page1");

  }

}


function getPageData()

{

  var s='';

  s+='<input type="button" value="Page1" onClick="getUrl(\'?mode=page1\');" />';

  s+='<br /><input type="button" value="Page2" onClick="getUrl(\'?mode=page2\');" />';

  s+='<br /><input type="button" value="Page3" onClick="getUrl(\'?mode=page3\');" />';

  s+='<br /><input type="button" value="Page4" onClick="getUrl(\'?mode=page4\');" />';

  var rObj={menu:s,title:getPage()};

  Logger.log(rObj);

  return rObj;

}


function include(filename) {

  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}

function setPage(page) {

  var ps=PropertiesService.getUserProperties();

  ps.setProperty('PageTitle', page);

  return ps.getProperty('PageTitle');

}


function initPage() {

  var ps=PropertiesService.getUserProperties();

  ps.setProperty('PageTitle','');

  return ps.getProperty('PageTitle');

}


function getPage() {

  var ps=PropertiesService.getUserProperties();

  var pt=ps.getProperty('PageTitle');

  return pt;

}

  



// Do a POST request
function doPost(e) {
  var params = JSON.parse(e.postData.contents); // assuming you're sending JSON data
  var name = params.name || 'Guest';
  return ContentService.createTextOutput(JSON.stringify({ message: `Hello, ${name}!` }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getApiData(consulta) {
  console.log("getGamixData consulta = "+consulta)
  // var consulta = "games"
  // var consulta = "rank"
  var url = "http://neorouter.hopto.org:30000/" + consulta
  try {
    var options = {
      "method": "GET",
      "contentType": "application/json",
      "muteHttpExceptions": true
    };
    var response = UrlFetchApp.fetch(url, options);
    var data = response.getContentText();
    console.log(data);
    return(data)
  } catch (error) {
    console.log(error.message);
    return (error)
  }
}

function jsonToArray(gamix) {
  // var gamix = `[{"gameID":100,"gameName":"Evento CCAA","gameDescription":"Evento CCAA","gameType":"Missão","continuousGame":"Não","gameCoins":1000,"gameXPs":1500,"date":"2025-01-31T03:00:00.000Z"},{"gameID":120,"gameName":"Minha primeira missão!","gameDescription":"Publique uma foto ou vídeo com a seguinte frase: 'Minha escola é gamificada'. Marque o @ccaaduque e envie o print ou video comprovando o cumprimento da missão para a coordenação da escola.","gameType":"Missão","continuousGame":"Não","gameCoins":1500,"gameXPs":1500,"date":"2025-01-31T03:00:00.000Z"},{"gameID":130,"gameName":"Rematrícula Ancecipada","gameDescription":"Faça sua Rematrícula antecipada até 30/11/2024","gameType":"Missão","continuousGame":"Não","gameCoins":1500,"gameXPs":1500,"date":"2025-01-31T03:00:00.000Z"},{"gameID":140,"gameName":"Matrícula no segundo idioma","gameDescription":"Faça sua matrícula no segundo idioma e ganhe 1700 coins","gameType":"Missão","continuousGame":"Não","gameCoins":1700,"gameXPs":1700,"date":"2025-01-31T03:00:00.000Z"},{"gameID":150,"gameName":"Seu amigo no CCAA","gameDescription":"Convide uma amigo para conhecer a escola e se ele matricular você garante coins.","gameType":"Missão","continuousGame":"Sim","gameCoins":2500,"gameXPs":2500,"date":"2025-01-31T03:00:00.000Z"},{"gameID":160,"gameName":"Ganho de Coins +1 🎉","gameDescription":"Você ganhou 1 coin e XP.","gameType":"Atitude","continuousGame":"Sim","gameCoins":1,"gameXPs":0,"date":"2025-01-31T03:00:00.000Z"},{"gameID":170,"gameName":"Ganho de XPs +1 🚀","gameDescription":"Você ganhou 1 coin e XP.","gameType":"Atitude","continuousGame":"Sim","gameCoins":0,"gameXPs":1,"date":"2025-01-31T03:00:00.000Z"},{"gameID":180,"gameName":"Fazer as provas na data certa","gameDescription":"Fazer as provas na data certa","gameType":"Atitude","continuousGame":"Sim","gameCoins":350,"gameXPs":350,"date":"2025-01-31T03:00:00.000Z"},{"gameID":190,"gameName":"Obter nota entre 80 e 99 nas provas","gameDescription":"Obter nota entre 80 e 99 nas provas","gameType":"Atitude","continuousGame":"Sim","gameCoins":150,"gameXPs":150,"date":"2025-01-31T03:00:00.000Z"},{"gameID":200,"gameName":"Obter nota máxima (100) nas provas","gameDescription":"Obter nota máxima (100) nas provas","gameType":"Atitude","continuousGame":"Sim","gameCoins":200,"gameXPs":200,"date":"2025-01-31T03:00:00.000Z"},{"gameID":210,"gameName":"✅ Estar presente na aula","gameDescription":"Estar presente na aula e ligar a câmera se estiver remoto.","gameType":"Atitude","continuousGame":"Sim","gameCoins":160,"gameXPs":160,"date":"2025-01-31T03:00:00.000Z"},{"gameID":220,"gameName":"👼 Comportar-se bem na aula","gameDescription":"Comportar-se bem na aula","gameType":"Atitude","continuousGame":"Sim","gameCoins":100,"gameXPs":100,"date":"2025-01-31T03:00:00.000Z"},{"gameID":230,"gameName":"📚 Entregar os exercícios escritos em dia","gameDescription":"Entregar os exercícios escritos em dia","gameType":"Atitude","continuousGame":"Sim","gameCoins":250,"gameXPs":250,"date":"2025-01-31T03:00:00.000Z"},{"gameID":240,"gameName":"📷 Foto no Meta","gameDescription":"Tirar foto na escola e postar no instagram ou facebook.","gameType":"Atitude","continuousGame":"Não","gameCoins":200,"gameXPs":200,"date":"2025-01-31T03:00:00.000Z"},{"gameID":250,"gameName":"🗺️ Avaliação Google","gameDescription":"Fazer avaliação no Google, printar e mandar pra gente","gameType":"Atitude","continuousGame":"Não","gameCoins":350,"gameXPs":350,"date":"2025-01-31T03:00:00.000Z"},{"gameID":260,"gameName":"Perda de Coins -1 🎉","gameDescription":"Você ganhou 1 coin e XP.","gameType":"Atitude","continuousGame":"Sim","gameCoins":-1,"gameXPs":0,"date":"2025-01-31T03:00:00.000Z"},{"gameID":270,"gameName":"Perda de XPs -1 🚀","gameDescription":"Você ganhou 1 coin e XP.","gameType":"Atitude","continuousGame":"Sim","gameCoins":0,"gameXPs":-1,"date":"2025-01-31T03:00:00.000Z"},{"gameID":280,"gameName":"Faltou uma aula","gameDescription":"Perdeu uma aula","gameType":"Atitude","continuousGame":"Sim","gameCoins":-80,"gameXPs":0,"date":"2025-01-31T03:00:00.000Z"},{"gameID":290,"gameName":"🤦 Comportamento","gameDescription":"Atrapalhou a aula","gameType":"Atitude","continuousGame":"Sim","gameCoins":-100,"gameXPs":0,"date":"2025-01-31T03:00:00.000Z"}]`
  
  var json = JSON.parse(gamix)
  console.log (typeof(json))
  var data = new Array()
  for (var i = 0; i < json.length; i++) {
    //   data.push([json.rows[i].keys[0], json.rows[i].keys[1], json.rows[i].clicks]); 
    data.push(
      [json[i].gameID,
      json[i].gameName,
      json[i].gameDescription,
      json[i].gameType,
      json[i].continuousGame,
      json[i].gameCoins,
      json[i].gameXPs,
      json[i].date
      ])
  }
  // var res = JSON.stringify(data)
  return (data)

  // var lastRow = sheet.getLastRow();
  // sheet.getRange(lastRow + 1, 1, data.length, data[0].length).setValues(data); 
}


