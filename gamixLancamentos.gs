!DOCTYPE html>
<html>  
    <script>
        var datags = <?!= JSON.stringify(data) ?>;
        var gameData = <?!= JSON.stringify(gameData) ?>;
        // var datags = [["22/12/2024 11:12:15", "English 11.1 - 2024/2R - DUQUE", "Lucciano", "Antônio Bernardo Cavalcante Gonçalves", 9230, 5648, 333, 4349], ["22/12/2024 11:12:15", "English 11.1 - 2024/2R - DUQUE", "Lucciano", "Laise Ferreira Camarão", 12763, 5648, 333, 4349]]

        // var gameData = [[100,"Evento CCAA","Evento CCAA","Missão","Não",1000,1500,"2025-01-31T03:00:00.000Z"],[120,"Minha primeira missão!","Publique uma foto ou vídeo com a seguinte frase: 'Minha escola é gamificada'. Marque o @ccaaduque e envie o print ou video comprovando o cumprimento da missão para a coordenação da escola.","Missão","Não",1500,1500,"2025-01-31T03:00:00.000Z"],[130,"Rematrícula Ancecipada","Faça sua Rematrícula antecipada até 30/11/2024","Missão","Não",1500,1500,"2025-01-31T03:00:00.000Z"],[140,"Matrícula no segundo idioma","Faça sua matrícula no segundo idioma e ganhe 1700 coins","Missão","Não",1700,1700,"2025-01-31T03:00:00.000Z"],[150,"Seu amigo no CCAA","Convide uma amigo para conhecer a escola e se ele matricular você garante coins.","Missão","Sim",2500,2500,"2025-01-31T03:00:00.000Z"],[160,"Ganho de Coins +1 🎉","Você ganhou 1 coin e XP.","Atitude","Sim",1,0,"2025-01-31T03:00:00.000Z"],[170,"Ganho de XPs +1 🚀","Você ganhou 1 coin e XP.","Atitude","Sim",0,1,"2025-01-31T03:00:00.000Z"],[180,"Fazer as provas na data certa","Fazer as provas na data certa","Atitude","Sim",350,350,"2025-01-31T03:00:00.000Z"],[190,"Obter nota entre 80 e 99 nas provas","Obter nota entre 80 e 99 nas provas","Atitude","Sim",150,150,"2025-01-31T03:00:00.000Z"],[200,"Obter nota máxima (100) nas provas","Obter nota máxima (100) nas provas","Atitude","Sim",200,200,"2025-01-31T03:00:00.000Z"],[210,"✅ Estar presente na aula","Estar presente na aula e ligar a câmera se estiver remoto.","Atitude","Sim",160,160,"2025-01-31T03:00:00.000Z"],[220,"👼 Comportar-se bem na aula","Comportar-se bem na aula","Atitude","Sim",100,100,"2025-01-31T03:00:00.000Z"],[230,"📚 Entregar os exercícios escritos em dia","Entregar os exercícios escritos em dia","Atitude","Sim",250,250,"2025-01-31T03:00:00.000Z"],[240,"📷 Foto no Meta","Tirar foto na escola e postar no instagram ou facebook.","Atitude","Não",200,200,"2025-01-31T03:00:00.000Z"],[250,"🗺️ Avaliação Google","Fazer avaliação no Google, printar e mandar pra gente","Atitude","Não",350,350,"2025-01-31T03:00:00.000Z"],[260,"Perda de Coins -1 🎉","Você ganhou 1 coin e XP.","Atitude","Sim",-1,0,"2025-01-31T03:00:00.000Z"],[270,"Perda de XPs -1 🚀","Você ganhou 1 coin e XP.","Atitude","Sim",0,-1,"2025-01-31T03:00:00.000Z"]]
    </script>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <!-- Bootstrap 5 CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .container {
        margin-top: 50px;
        }
        .spinner-container {
        display: none; /* Initially hide the spinner */
        }
    </style>
  
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
  
    <style>
        input[type=checkbox] {
            /* Double-sized Checkboxes */
            -ms-transform: scale(1.8);
            /* IE */
            -moz-transform: scale(1.8);
            /* FF */
            -webkit-transform: scale(1.8);
            /* Safari and Chrome */
            -o-transform: scale(1.8);
            /* Opera */
            padding: 100px;
        }
    </style>
  </head>
  
  <body>
  
    <div class="container-fluid">
        <div class="">

            <div class="card">
                <!-- <h5 class="card-header text-center">Selecione os alunos para lançar no GAMIX. -->
                </h5>
                <h5 class="card-header text-center" type="card-title" id="cab"></h5>
                <div class="card-body">
                  <!-- <h5 class="card-title" id="cab"></h5> -->
                  <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                  <div class="row mx-auto p-2">

                    <div class="col">
                        <div class="toast align-items-center text-white bg-primary border-0" role="alert"
                        aria-live="assertive" aria-atomic="true">
                            <div class="d-flex">
                                <div class="toast-body  mx-auto p-2">
                                    Selecione pelo menos um aluno e um game.
                                </div>
                                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                    aria-label="Close"></button>
                            </div>
                        </div> 
                        
                    </div>
                    
                    <div class="col text-end">  
                        <button type="submit" class="btn btn-primary" id="sendButton">Send</button>
                        <button class="btn btn-danger" id="cancelar" onClick="closeIt()">Cancel</button>                        
                    </div>           
                    <br>
                </div>                  
                </div>
              </div>

        </div>

        <div class="row p- justify-content-between">
            <div label="alunos" class="col">
                <div class="row g-0">
                    <table id="namesTable" class="table table-striped">
                        <tr class="align-middle">
                            <th><input id="selecionar" type="checkbox" checked="checked"></th>
                            <th>NOME DO ALUNO</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div label="games" class="col">
                <div style="float: left;margin-right:10px">
                    <table class="table table-striped" id="gamesTable">
                        <tr class="table table table-hover">
                            <th>#</th>
                            <th>GAME</th>
                            <th>COINS</th>
                            <th>XPs</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class = "d-flex justify-content-center">
            <div class="spinner-container" id="spinnerContainer">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden"></span>
                </div>
            </div>
        </div>
  
    </div>
  
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    
    <script>
        $('#cab').text('' + datags[0][1]);
  
        $(function () {
            // Fill Students List
            jQuery.each(datags, function () {
                $('#namesTable tr:last').after('<tr class="align-middle"><td><input class="custom-control custom-checkbox mr-sm-2" type="checkbox" checked="checked" id="nomes"></input></td><td class="text-primary">' + this[3] + '</td></tr>');
            })
        });
  
        $(function () {
            // Fill GAMES List
            jQuery.each(gameData, function () {
                $('#gamesTable tr:last').after('<tr class="align-middle"><td><input class="jogos custom-control custom-checkbox mr-sm-2" type="checkbox" id="games"></input></td><td class="text-primary">' + this[1] + '</td><td>' + this[5] + '</td><td>' + this[6] + '</td></tr>');
            })
        });
    </script>
  
    <script>
        function sendDataToServer() { 
            // Hide the send button and show the spinner
            document.getElementById('sendButton').disabled = true;
            document.getElementById('spinnerContainer').style.display = 'block'             
            // console.log("function sendDataToServer()");
            const runGoogleScript = new Promise((resolve, reject) => {
                var selectedNames = 0;
                var selectedGames = 0;
                var listNames = {}
                var nomesAlunos = []
                var outputData = []
                var count = 0
                var alunosList = document.querySelectorAll("#nomes");
                var gamesSelect = document.querySelectorAll(".jogos");
                for (var i = 0; i < gamesSelect.length; i++) { //LOOP Selected Games
                    if (gamesSelect[i].checked == true) {
                        selectedNames = selectedNames + 1;
                        if (gameData[i] != null) {
                            for (var x = 0; x < alunosList.length; x++) { // LOOP Alunos List
                                if (alunosList[x].checked == true) {
                                    selectedGames = selectedGames + 1;
                                    if (datags[x] != null) {
                                        var datagstmp = {}
                                        datagstmp = {
                                            "alunoID": JSON.stringify(datags[x][4]), //alunoID
                                            "funcionarioID": JSON.stringify(datags[x][6]), //funcionarioID
                                            "empresaID": JSON.stringify(datags[x][7]), //empresaID
                                            "gameID": JSON.stringify(gameData[i][0]) //gameID                          
                                        }
                                        // console.log(JSON.stringify(datagstmp))
                                        outputData.push(JSON.stringify(datagstmp))
                                    }
                                }
                            } // end add Games
                        }
                    }
                };
                // var listNames= JSON.stringify(transactions)
                // var listNames= JSON.stringify(outputData)
                var listNames = '{"dados":[' + outputData + ']}'
                // console.log("listNames = " + listNames)             
  
                if (selectedNames == 0 || selectedGames== 0 ) {
                    // $('.toast').toast({delay: 0});
                    $('.toast').toast({ delay: 3000, autohide: true });
                    $('.toast').toast('show');
                    // Hide the spinner and enable the send button again
                    document.getElementById('spinnerContainer').style.display = 'none';
                    document.getElementById('sendButton').disabled = false;                    
                    return
                };
                // if (selectedGames == 0) {
                //     // $('.toast').toast({delay: 0});
                //     $('.toast').toast({ delay: 2000, autohide: true });
                //     $('.toast').toast('show');
                //     return
                // };
  
                google.script.run.withSuccessHandler(data => {
  
                    if (data.name == "Exception") {
                        alert("Erro no envio! Verifique se o servidor Gamix está online!\n" + data.name)
                        closeIt()
                    }
                    alert("Dados enviados ok!\n")
                    resolve(data)
                    


                    closeIt()
                }).withFailureHandler(er => {
                    var erro = er + "\n" + listNames
                    console.log(erro)
                    alert(erro)
                    reject(er)
                }).addDadosGames(listNames)
            }); // end runGoogleScript
        };
  
        // document.getElementById("enviar").addEventListener("click", sendDataToServer);
  
        // var checkbox = document.querySelector("input[id=selecionar]");
        var checkbox = document.querySelector("input[id=selecionar]");
        checkbox.addEventListener('change', function () {
            console.log("NOME DO ALUNO");
            if (this.checked) {
                // Checkbox is checked..
                todos();
            } else {
                // Checkbox is not checked..
                limpar();
            };
        });
  
        function todos() {
            // var inputs = document.querySelectorAll("input[type='checkbox']");
            var inputs = document.querySelectorAll("input[id='nomes']");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = true;
            }
        }
        function limpar() {
            // var inputs = document.querySelectorAll("input[type='checkbox']");
            var inputs = document.querySelectorAll("input[id='nomes']");
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
            }
        }
  
        function Cancelar() {
            closeIt();
        }
  
        function closeIt() {
            google.script.host.close()
        };
    </script>
  
  <script>
  
  document.getElementById("sendButton").addEventListener("click",sendDataToServer);

  </script>

  </body>
  </html>
