function getSheetData (sheetName, field, search){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);
  var active_range = sheet.getActiveRange();
  for (i = 0; i < active_range.length; i++) {

    console.log("teste")
  }
}

function validarTurma() {
  console.log("validar turma")
  var str = SpreadsheetApp.getActiveSheet().getActiveCell().getValue();
  let regex = /^[^/-]*-[^/-]*\/[^/-]*-[^/-]*$/;
  var res = regex.test(str);
  if (res == false) {
    Browser.msgBox("Selecione uma Turma válida.");
  }
  return res
}

// function linkCellContents(linha) {
//   // linha = 2
//   var ss = SpreadsheetApp.getActiveSpreadsheet();
//   var sheet = ss.getSheetByName("DIARIO");
//   var lastRow = sheet.getLastRow()
//   // var lastCol = sheet.getLastColumn()
//   var active_range = sheet.getActiveRange();
//   // var currentRow = sheet.getRange(active_range.getRowIndex(), 1).getValue();
//   // var linha = sheet.getRange(active_range.getRow(), 1).getRow();
//   var linha = 17
//   var coluna = 162
  
//   var response = Browser.msgBox('AVISO', 'Linha inicial = '+linha+"?", Browser.Buttons.YES_NO);
//   if (response == "yes") {
//     Logger.log('The user clicked "Yes."');
//   } else {
//     Logger.log('The user clicked "No" or the dialog\'s close button.');
//     return
//   }  
  
//   var range = sheet.getRange(linha, coluna, lastRow, 4)

//   var rangeValues = range.getValues();
//   // var currentRow = range.getRow()
//   // console.log("rangeValues = "+rangeValues)

//   for (i = 0; i < rangeValues.length; i++) {
//     var contratoID = rangeValues[i][0]
//     if (contratoID=="") {
//       console.log(i + " - contratoID=''")
//       break
//     } else {
//       var alunoID = rangeValues[i][1]
//       var turmaID = rangeValues[i][2]
//       // nomeAluno = rangeValues[i][2]
//       // console.log(contratoID + " - " + alunoID)
//       var link_contratoID = SpreadsheetApp.newRichTextValue()
//         .setText(contratoID)
//         .setLinkUrl("https://www.sponteweb.com.br/SPDid/ContratoCadastro.aspx?id=" + contratoID)
//         .build();
//       var link_alunoID = SpreadsheetApp.newRichTextValue()
//         .setText(alunoID)
//         .setLinkUrl("https://www.sponteweb.com.br/SPCad/AlunoCadastro.aspx?id=" + alunoID+"&ce=8")
//         .build();
//       var link_Turma = SpreadsheetApp.newRichTextValue()
//         .setText(turmaID)
//         .setLinkUrl("https://www.sponteweb.com.br/SPDid/TurmaCadastro.aspx?id=" + turmaID)
//         .build();
//       var link_Financeiro = SpreadsheetApp.newRichTextValue()
//         .setText(contratoID)
//         .setLinkUrl("https://www.sponteweb.com.br/SPFin/ContasReceber.aspx?aluno=" + alunoID)
//         .build();

//       sheet.getRange(linha + i, coluna, 1, 1).setRichTextValue(link_contratoID)
//       sheet.getRange(linha + i, coluna+1, 1, 1).setRichTextValue(link_alunoID)
//       sheet.getRange(linha + i, coluna+2, 1, 1).setRichTextValue(link_Turma)
//       sheet.getRange(linha + i, coluna+3, 1, 1).setRichTextValue(link_Financeiro)

//       sheet.getRange(linha + 1, 1).activate()
//     }
//   }
//   // SpreadsheetApp.flush // Force update spreadsheet
// }

// // function gerarLinkContratoID(){
// //   var linhaInicial = 1687
// //   // var linhaFinal = 1686
// //   // var linhas = linhaFinal-linhaInicial
// //   // console.log(linhas)
// //   // for (i=0;i<linhas+1;i++){
// //   for (i=0;i<linhaInicial;i++){
// //     var linha = linhaInicial+i
// //     console.log("linha = "+linha)
// //     linkCellContents(linha)
// //   }
// // }

// function deleteAllFilterViews() {
//   var ss = SpreadsheetApp.getActiveSpreadsheet();
//   var id = ss.getId();
 
//   var myFilterViews = Sheets.Spreadsheets.get(id, {
//     ranges: 'TEMPLATES',
//     fields: 'sheets/filterViews/filterViewId',
//   }).sheets[0].filterViews;
 
//   Sheets.Spreadsheets.batchUpdate({
//     requests: myFilterViews.map(function(e) {
//       return { deleteFilterView: { filterId: e['filterViewId'] } };
//     }),
//   },id);
// };

// function getLibraryProperty(key) {
//   key = "SERVER_URL"
//   // return ScriptProperties.getProperty(key);
//   console.log(ScriptProperties.getProperty(key))
// }

// function aprovacao(M, F, O) {
//   let res = rm.aprovacao(M, F, O)
//   return res
// }

// function imprimirCertificado() {
//   let ss = SpreadsheetApp.getActiveSpreadsheet();
//   let sheet = ss.getSheetByName("DIARIO");

//   let currentRow = ss.getActiveCell().getRow();
//   let alu = sheet.getRange(currentRow, 3).getValue()
//   let id = getSheetId()
//   console.log("alu = " + alu)
//   rm.imprimirCertificado(id, alu)
// }

// function gerarBoletim() {
//   // Gera o Boletim do aluno
//   // Retorna o número da linha ativa da aba Diário:
//   let ssID = SpreadsheetApp.getActiveSpreadsheet().getId();
//   let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DIARIO")
//   let currentRow = sheet.getCurrentCell().getRow();
//   console.log("ssID = " + ssID)
//   console.log("Linha ativa (currentRow) = " + currentRow)
//   // console.log("ssID = "+ssID)
//   rm.gerarBoletim(ssID, currentRow - 1)
// }

// function getActiveSheetId() {
//   // retorna id da aba
//   var id = SpreadsheetApp.getActiveSheet().getSheetId();
//   Logger.log("getActiveSheetId() = " + id.toString());
//   return id;
// }

// function getSheetId() {
//   //retorna id da planilha
//   let id = SpreadsheetApp.getActiveSpreadsheet().getId()
//   console.log(id)
//   return id
// }

// function AlunosTurma() { rm.AlunosTurma() }
// function addData() { rm.addData() }
// function getSheetID() { rm.getSheetID() }
// function openDialogue() { rm.openDialogue() }

// function getSheetID() {
//   return SpreadsheetApp.getActiveSpreadsheet().getId();
// }

// //HIDE SHEETS
// function hideSheetsMain(){
//   // var sheetsExceptList=['RIT','DIARIO','SCH','AGENDA-AULAS-ZOOM']
//   var sheetsExceptList=['RIT','DIARIO','SCH']
//   hideAllSheetsExcept(sheetsExceptList);
// }
// /**
// * Hides all sheets except the ones listed.
// *
// * @param {String[]} sheetNamesToShow The names of sheets that should remain visible after hiding others.
// */
// function hideAllSheetsExcept(sheetNamesToShow) {
//   // version 1.1, written by --Hyde, 3 February 2020
//   //  - add |sheetNamesToShow[0]).showSheet()| to guard against the edge case of all excepted sheets being initially hidden
//   //  - fix parentheses in sheetNamesToShow.indexOf()
//   // version 1.0, written by --Hyde, 2 February 2020
//   //  - initial version
//   //  - see https://support.google.com/docs/thread/96365185
//   console.log("sheetNamesToShow = "+sheetNamesToShow)
//   if (!Array.isArray(sheetNamesToShow)) {
//     sheetNamesToShow = [sheetNamesToShow];
//   }
//   const ss = SpreadsheetApp.getActive();
//   ss.getSheetByName(sheetNamesToShow[0]).showSheet();
//   ss.getSheets().forEach(function (sheet) {
//     if (sheetNamesToShow.indexOf(sheet.getName()) === -1) {
//       sheet.hideSheet();
//       console.log("hideSheet = "+sheet.getName())
//     } else {
//       sheet.showSheet();
//       console.log("showSheet = "+sheet.getName())
//     }
//   });
// }
 
// function dadosAlunoDiario (){
//   // Linha do cabeçalho da aba DIARIO = 16
//   let ss = SpreadsheetApp.getActiveSpreadsheet();
//   let sheet = ss.getSheetByName("DIARIO");
//   let currentRow = sheet.getCurrentCell().getRowIndex();
//   let lastRow = sheet.getLastRow()
//   let lastCol = sheet.getLastColumn()
//   let headerRow =  16
//   let range = sheet.getRange(headerRow, 1, lastRow, lastCol)
//   var data = range.getValues();
//   let values = [] 
//   values.push(data[0]) //adiciona o Cabeçalho
//   values.push(data[currentRow-headerRow])
//   let dados = {} // retorna dados em JSON
//   dados = rm.getJsonArrayFromData(values)
//   // console.log(dados)
//   return dados
// }

// function dadosDiario() {
//   // Retorna os dados da linha ativa na aba Diário:
//   var activeSs = activeSheetName()
//   if (activeSs !== 'DIARIO') {
//     console.log("Aba selecionada é a: " + activeSs + "\nNão é a aba DIARIO!")
//     return
//   }
//   // let ssID = SpreadsheetApp.getActiveSpreadsheet().getId();
//   let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DIARIO")
//   let activeRow = sheet.getCurrentCell().getRow();
//   let lastColumn = sheet.getLastColumn();
//   let lastRow = sheet.getLastRow()
//   var dados = sheet.getRange(1, 1, lastRow, lastColumn).getValues()
//   for (var i = 0; i < dados.length; i++) {
//     var dadoCurrentRow = dados[i][0]
//     if (dadoCurrentRow == "TURMA") {
//       var cabecalhoRow = i + 1
//       continue
//     }
//   }
//   var cabecalho = sheet.getRange(cabecalhoRow, 1, 1, lastColumn).getValues()
//   var dadosAluno = sheet.getRange(activeRow, 1, 1, lastColumn).getValues()
//   var validar = dadosAluno[0][0]
//   if (validar == "") {
//     console.log("Dados do Aluno inválidos!");
//     return
//   }
//   var tabela = cabecalho.concat(dadosAluno)
//   // var dadosJSON = JSON.parse(convertJSON(tabela))
//   var dadosJSON = rm.convertJSON(tabela)
//   console.log(dadosJSON)
//   return dadosJSON
// }
