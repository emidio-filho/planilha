function alunosGamix() {
  if (validarTurma()==false){
    return
  }
  var listaAlunos = getAlunosTurma()
  if (listaAlunos.length == 0) {  /*Verifica se existem alunos na Turma*/
    Browser.msgBox("Não existem alunos na Turma selecionada.");
    return;
  }  
  openGameDialogue(listaAlunos);
}

function openGameDialogue(val) {
  var htmlDest = "gamixLancamentos";
  var template = HtmlService.createTemplateFromFile(htmlDest);

  template.data = val;
  var gameData = gamePoints()
  template.gameData = gameData;

  var html = template.evaluate()
    .setHeight(1000)
    .setWidth(1000);
  // template.data=val;
  // console.log ("openDialogue(val) = "+val)
  const ui = SpreadsheetApp.getUi().showModalDialog(html,
    "Selecione os alunos para lançar no GAMIX!");
}

function gamePoints() {
  var consulta = "games"
  var dados = getApiData(consulta)
  var gamePoints = jsonToArray(dados)
  return gamePoints
  // console.log(gamePoints)
}

function addDadosGames(dadosAluGam) {

// var dadosAluGam = '{"dados":[{"alunoID":"5409","funcionarioID":"0","empresaID":"4349","gameID":"1"},{"alunoID":"4002","funcionarioID":"0","empresaID":"4349","gameID":"1"},{"alunoID":"16677","funcionarioID":"0","empresaID":"4349","gameID":"1"},{"alunoID":"16800","funcionarioID":"0","empresaID":"4349","gameID":"1"},{"alunoID":"25467","funcionarioID":"0","empresaID":"4349","gameID":"1"},{"alunoID":"8751","funcionarioID":"0","empresaID":"4349","gameID":"1"},{"alunoID":"8183","funcionarioID":"0","empresaID":"4349","gameID":"1"},{"alunoID":"25055","funcionarioID":"0","empresaID":"4349","gameID":"1"}]}'

//   dadosAluGam = JSON.parse(dadosAluGam)
  payload = {
    "data" : dadosAluGam
  };
  console.log(JSON.stringify(dadosAluGam))
  const url = "http://neorouter.hopto.org:30000/users"
  try {
    const options = {
      "method": "POST",
      "contentType": "application/json",
      "payload": dadosAluGam,
      "muteHttpExceptions": true
    };
    const response = UrlFetchApp.fetch(url, options);
    if (response !== 200){
      const message = 'Erro no lançamento dos Games. Verifique se o servidor está online.' 
      console.log(message)
      return (message)
    }
    const data = JSON.parse(response.getContentText());
    console.log(data);
  } catch (error) {
    console.log(error.message);
    return(error)
  }
}


// function addDadosGames(dadosAluGam) {
//   // var dadosAluGam = [["26214","0","4349","1","2","3","7","9","15","16","17"],["26507","0","4349","1","2","3","7","9","15","16","17"],["24636","0","4349","1","2","3","7","9","15","16","17"],["25278","0","4349","1","2","3","7","9","15","16","17"],["17603","0","4349","1","2","3","7","9","15","16","17"],["17186","0","4349","1","2","3","7","9","15","16","17"],["23008","0","4349","1","2","3","7","9","15","16","17"],["26944","0","4349","1","2","3","7","9","15","16","17"]]
//   console.log('Executando addDadosGames(example)');
  
//   dadosAluGam = JSON.parse(dadosAluGam)
//   console.log("dadosAluGam = "+dadosAluGam)
//   console.log("dadosAluGam.length = "+dadosAluGam.length)

//   // Get sheets Data
//   var ss = SpreadsheetApp.getActiveSpreadsheet();
//   var transSheet = ss.getSheetByName("transactions");
//   var transDetSheet = ss.getSheetByName("transactions_det");

  
//   var transactions = []
//   var transactions_det = []

//   var maxValueIDtransSheet = transSheet.getRange(1, 1, transSheet.getLastRow(), 1).getValues().reduce((max, item) => item[0] > max ? item[0] : max, 0);
//   var maxValueIDtransDetSheet = transDetSheet.getRange(1, 1, transDetSheet.getLastRow(), 1).getValues().reduce((max, item) => item[0] > max ? item[0] : max, 0);
//   // if (typeof maxValueIDtransSheet !== "number" || maxValueIDtransSheet < 1 ){
//   var transLastID = maxValueIDtransSheet + 1
//   // } else { transLastID = 1}
//   var transDetLastID = maxValueIDtransDetSheet + 1
  
//   //transactions: alunoID, funcionarioID, empresaID
//   // var detIndex = transDetLastID
//   console.log("detIndex = "+transDetLastID)
//   var transactionID = 0
//   for (var i = 0; i < dadosAluGam.length; i++) {
//     var trans = [];
//     transactionID = transLastID + i
//     trans.push(
//       transactionID,    // transactionID
//       dadosAluGam[i][0],  // alunoID
//       dadosAluGam[i][1],  // funcionarioID
//       dadosAluGam[i][2]); // empresaID
//     transactions.push(trans);
//     var dadosGames = dadosAluGam[i].length - 3

//     // transactions_det: transactionDetID, transactionID, gameID, status[pendende, coletado, cancelado, entregue, devolvido],lastTransactionDate
//     var lastTransactionDate = new Date()
//     for (var x = 0; x < dadosGames; x++) {
//       var transDet = [];
//       transDetLastID = transDetLastID + x
//       // transLastID = transLastID + 1
//       transDet.push(
//         transDetLastID,   // transactionDetID
//         transactionID,        // transactionID
//         dadosAluGam[i][x+3],  // gameID
//         "pendente",           // status
//         lastTransactionDate   // lastTransactionDate
//       );
//       transactions_det.push(transDet);
//       // console.log(transactions)
//     }
//   }
//   // console.log(transactions)
//   console.log("transactions = " + transactions)
//   console.log("transactions_det = " + transactions_det)
 
//   // Add data to sheet transactions
//   // var teste = JSON.stringify(transactions)
//   // var row = transSheet.getRange(1, 1, 5, 5).getValues();
//   var rowStart = transSheet.getLastRow()+1;
//   var columnStart = 1
//   var rowsTotal= transactions.length
//   var columnsTotal=transactions[0].length
//   transSheet.getRange(rowStart, columnStart, rowsTotal, columnsTotal).setValues(transactions);
  
//   // Add data to sheet transactions_det
//   rowStart = transDetSheet.getLastRow()+1;
//   columnStart = 1
//   rowsTotal= transactions_det.length
//   columnsTotal=transactions_det[0].length
//   transDetSheet.getRange(rowStart, columnStart, rowsTotal, columnsTotal).setValues(transactions_det);
  
//   return
// }


function createSpreadsheetOpenTrigger() {
  //Executar uma vez para permitir acessos futuros através dos Triggers
  //https://stackoverflow.com/questions/65310525/how-to-access-data-from-an-external-spreadsheet-with-google-apps-script
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.newTrigger('getExternalSheet')
    .forSpreadsheet(ss)
    .onOpen()
    .create();
}


function getExternalSheet() {
  ss = SpreadsheetApp.getActiveSpreadsheet();
  var spreadsheetID = "19z637Jdc4Vx9-rs0zntRIoZxJ-RNOojZ0AdShjQjedg"
  src = SpreadsheetApp.openById(spreadsheetID);
  Logger.log(src.getActiveSheet().getName());
}
