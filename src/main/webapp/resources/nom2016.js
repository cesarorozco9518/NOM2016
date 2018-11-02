/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('nom2016', []);

var archivoPdfBase64 = null;
var base64ArchivoDeTexto = null;

app.controller('formnom2016', function($scope, $http, $window) {
   
   $scope.generaValidacion = function(){     
        if(validaDatos()){
            var jsonSend = "{\"archivoBase64\":\""+archivoPdfBase64+"\",\"constanciaBase64\":\""+base64ArchivoDeTexto+"\"}";
            $http({
                url: 'http://10.51.59.71:9090/validacion/nom2016',
                method: 'POST',
                data: jsonSend               
            }).success(function(response) {
                alert('exito');
            }).error(function(response){
                if(response === null){
                    alert('Estimado usuario, ha ocurrido un problema para conectar con el servidor, intentelo mas tarde.');
                }
                console.log(response);
                alert(response);
            });
        }
   };   
});

function convierteBase64Pdf() {
    var selectedFile = document.getElementById("pdfFile").files[0];
    if(selectedFile === undefined){
        alert('Lo sentimo no selecciono ningun archivo');
        archivoPdfBase64 = null;
        return;
    }
    if(confirm("Es correcto este archivo seleccionado: " + selectedFile.name)){
        if(validaArchivoPdfTiff(selectedFile.name)){
            var fileToLoad = selectedFile;
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) {
                archivoPdfBase64 = fileLoadedEvent.target.result.split(',')[1];
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }else{        
        document.getElementById("pdfFile").value=null;
        archivoPdfBase64 = null;
    }
}

function extraeTextTxt() {
    var selectedFile = document.getElementById("txtFile").files[0];if(selectedFile === undefined){
        alert('Lo sentimo no selecciono ningun archivo');
        base64ArchivoDeTexto = null;
        return;
    }    
    if(confirm("Es correcto este archivo seleccionado: " + selectedFile.name)){
        if(validaArchivoTxt(selectedFile.name)){
            var lector = new FileReader();
            lector.onload = function(e) {
                var contenido = e.target.result;
                extraeBase64Txt(contenido);
            };
            lector.readAsText(selectedFile);
        }
    }else{
        document.getElementById("txtFile").value=null;
        base64ArchivoDeTexto = null;
    }
}

function extraeBase64Txt(texto){
    if(texto.includes('@')){        
        var base64DeTextoPdf = texto.split('@');        
        base64ArchivoDeTexto = base64DeTextoPdf[0];
    }else{        
        base64ArchivoDeTexto = texto;
    }
}

function validaArchivoTxt(nombre){    
    if(nombre.includes('.txt')){
        return true;
    }else{
        alert("Estimado usuario el archivo seleccionado no se reconoce como .txt, porfavor selecione un archivo valido");
        document.getElementById("txtFile").value=null;
        base64ArchivoDeTexto = null;
        return false;
    }
}

function validaArchivoPdfTiff(nombre){    
    if(nombre.includes('.pdf') || nombre.includes('.tiff')){
        return true;
    }else{
        alert("Estimado usuario el archivo no se reconoce como .pdf o .tiff, seleccione otro archivo.");
        document.getElementById("pdfFile").value=null;
        return false;
    }
}

function validaDatos(){
    if(archivoPdfBase64 === null || base64ArchivoDeTexto === null){
        alert('Lo sentimos no se reconocio ningun archivo, carge uno e intentelo de nuevo');
        return false;
    }else{
        return true;
    }
}

