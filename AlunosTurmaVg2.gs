function AlunosTurmaV2() {
  console.log("Executanto AlunosTurmaV2()");
  if (validarTurma()==false){
    return
  }
  var listaAlunos = getAlunosTurma();
  if (listaAlunos.length == 0) {  /*Verifica se existem alunos na Turma*/
    Browser.msgBox("Não existem alunos na Turma selecionada.");
    return;
  }
  var alunosSelecionados = openDialogue(listaAlunos);
  // return
}

function addDados(example) {

  // example = [["12/12/2024 20:53:48", "English T 1.02 - 2o20 | DUQUE", "Lucciano", "Clarice Pinheiro dos Santos"], ["12/12/2024 20:53:48", "English T 1.02 - 2o20 | DUQUE", "Lucciano", "Giovanna Carvalho Reis"], ["12/12/2024 20:53:48", "English T 1.02 - 2o20 | DUQUE", "Lucciano", "Gustavo Bittencourt Lobato Vianna"]]

  example = "[" + example + "]"
  example = JSON.parse(example)

  console.log('addDados(example)');
  console.log("example = " + example);

  var actualSheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
  console.log("actualSheetName = " + actualSheetName)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var targetSheet = "RIT";
  var sheet = ss.getSheetByName(targetSheet);
  if (actualSheetName == targetSheet) {
    var rowStart = sheet.getActiveCell().getRow();
  } else {
    console.log("actualSheet= " + actualSheetName)
    var lastRow = sheet.getLastRow();
    console.log("lastRow = " + lastRow)
    var rowStart = lastRow + 1;
    console.log("rowStart = " + rowStart)
  }
  var columnStart = 1
  console.log("columnStart = " + columnStart)
  var rowsTotal = example.length
  console.log("rowsTotal = " + rowsTotal)
  var columnsTotal = example[0].length
  console.log("columnsTotal = " + columnsTotal)

  var range = sheet.getRange(rowStart, columnStart, rowsTotal, columnsTotal).setValues(example);
  sheet.setActiveRange(range);
  //  return
}

function getAlunosTurma() {
  console.log("Executanto getAlunosTurma()")
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var actualSheetName = ss.getActiveSheet().getName();
  var timeZone = "GMT-3";
  var formatoData = "dd/MM/yyyy HH:mm:ss";
  var fSheet = "MAT-ATIVAS";
  var FromSheet = ss.getSheetByName(fSheet);
  // var ToSheet = ss.getActiveSheet();
  var valorCelula = ss.getActiveCell();
  var currentRow = valorCelula.getRow();
  // var currentCol = valorCelula.getColumn();
  //  Verifica se a planilha ativa é o RIT
  if (actualSheetName == "RIT") {
    //Data ao lado da Turma
    var now = SpreadsheetApp.getActiveSheet().getRange(currentRow, 1).getValue();
    if (now == "") {
      now = new Date(); // Data de hoje
    };
  } else {
    now = new Date();
  }
  var GetDate = Utilities.formatDate(now, timeZone, formatoData);
  var ToTurma = valorCelula.getValue(); // Nome da Turma

  var lastRow = FromSheet.getLastRow();
  var range = FromSheet.getRange(1, 1, lastRow, 20);   //assign the range you want to copy
  var data = range.getValues();
  // get values from fSheet
  // Filtered Data will be stored in this array
  var values = [];
  var x = 0;
  for (i in data) {
    var col = data[i];
    var turma = col[0];
    var professor = col[1];
    var nome = col[2];
    var contratoID = col[3]
    var alunoID = col[4];
    var turmaID = col[5];
    var funcionarioID = col[6];
    var empresaID = col[7];
    if (turma == ToTurma) {
      values.push([GetDate, turma, professor, nome, alunoID, turmaID, funcionarioID, empresaID]);
      x = x + 1;
    }
  }

values.sort((a, b) => a[3].localeCompare(b[3]));

  // console.log(values)
  // console.log("JSON.stringify(values) = \n"+JSON.stringify(values));
  return values;
}
//------------------------------------------------------------
function openDialogue(val) {
  var htmlDest = "AlunosTurmaSelecionar";
  var template = HtmlService.createTemplateFromFile(htmlDest);
  template.data = val;
  var html = template.evaluate()
    .setHeight(800)
    .setWidth(800);
  // template.data=val;
  // console.log ("openDialogue(val) = "+val)
  SpreadsheetApp.getUi().showModalDialog(html, "Selecione os alunos para lançar no RIT");
  // SpreadsheetApp.getUi().showSidebar(html);
  // return
}
//------------------------------------------------------------
function setFocusSheetCell(sheet, cellRow, CellCol) {
  // The code below makes the setFocusSheetCell the active spreadsheet and cell.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //SpreadsheetApp.setActiveSheet(ss.getargetSheets()[1]);
  SpreadsheetApp.setActiveSheet(ss.getargetSheetByName(sheet));
  //  ss.setActiveSelection("B5");
  ss.setActiveRange(SpreadsheetApp.getActiveSheet().getRange(cellRow, CellCol).activateAsCurrentCell());
}
