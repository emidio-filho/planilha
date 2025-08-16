function onOpen(ssid) { 
  var ssid = getSpreadsheetId()
  rm.onOpen(ssid) 
  }

function gamixRank() { rm.gamixRank() }
function gameCollect(id) {rm.gameCollect(id)}
function placeOrder(id) {rm.placeOrder(id)}
function processOrder(id) {rm.processOrder(id)}
function openGamixManager() { rm.openGamixManager() }
function gamixMobile() { 
  var alunoAtual = valorCelulaAtual()
  // const alunoAtual = "Ivy Mafra Bitencourt"
  rm.gamixMobile(alunoAtual) 
  }
function getMyOrders (id) {
  console.log(`getMyOrders (${id})`)
  rm.getMyOrders (id) }
function getStocksData(id){ rm.getStocksData(id)}
function cancelOrder(id){ rm.cancelOrder(id)}
function getMyGames (alunoID) { rm.getMyGames(alunoID) }

function linksSponte(){
  var alunoAtual = valorCelulaAtual()
  var spreadsheetId = getSpreadsheetId()
  rm.linksSponte(alunoAtual, spreadsheetId)   
}
function ritsDoAluno() { 
  rm.ritsDoAluno() }

function gerarBoletim(){
  var spreadsheetId = getSpreadsheetId()
  // var alunoAtual = valorCelulaAtual()
  var linhaAtual = getLinhaAtual()
  // rm.gerarBoletim(spreadsheetId, alunoAtual)}  
  rm.gerarBoletim(spreadsheetId, linhaAtual)}  

function imprimirCertificado() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("DIARIO");

  var currentRow = ss.getActiveCell().getRow();
  var alu = sheet.getRange(currentRow, 3).getValue()
  var id = getSpreadsheetId()
  console.log("alu = " + alu)
  rm.imprimirCertificado(id, alu)
}

function aprovacao(M,F,O) { 
  if(M === undefined || F === undefined || O === undefined){
    // console.log("sem notas")
    return ("Sem notas")
  }
  return (rm.aprovacao(M,F,O) )
}

function valorCelulaAtual(){
  var celulaAtual = SpreadsheetApp.getActiveSheet().getActiveCell().getValue()
  console.log(celulaAtual);
  return (celulaAtual) 
}

function getSpreadsheetId() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ssId = ss.getId();
  console.log(ssId);
  return ssId
}

function activeSheetName() {
  const sheetName = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName()
  console.log(sheetName)
  return sheetName;
}

function convertJSON(dados) { rm.convertJSON(dados) }

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

function getLinhaAtual(){
  var arrayRow = SpreadsheetApp.getActiveSheet().getActiveCell().getRow() -1
    console.log(arrayRow);
  return (arrayRow)
}

