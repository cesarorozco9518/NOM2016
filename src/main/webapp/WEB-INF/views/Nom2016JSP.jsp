<%-- 
    Document   : Nom2016JSP
    Created on : 29/10/2018, 09:59:58 AM
    Author     : Cesar M Orozco R
--%>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Validacion de Nom 2016</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Estilos CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <!-- Scripts JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
        <script src="https://code.angularjs.org/1.4.8/angular-resource.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.js"></script>
        <!-- Import My Scrips JS --> 
        <script src="<c:url value='/resources/nom2016.js' />"></script>
    </head>
    <body ng-app="nom2016" ng-controller="formnom2016">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="alert alert-info">
                        <center><h4><strong>Validador de Constancias NOM 2016</strong></h4></center>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div class="row">
                <div class="col-xl-6">
                    <label><strong>Selecciona un archivo PDF o TIFF(.pdf o .tiff)</strong></label>
                    <input type="file" class="form-control-file border" id="pdfFile" onchange="convierteBase64Pdf();"> 
                </div>
                <div class="col-xl-6">
                    <label><strong>Selecciona un archivo de TEXTO(.txt)</strong></label>
                    <input type="file" class="form-control-file border" id="txtFile" onchange="extraeTextTxt();"> 
                </div>
            </div>
            <br/><br/><br/>
            <div class="row">
                <div class="col-xl-4">                    
                    <button type="button" class="btn btn-outline-success btn-block" ng-click="generaValidacion()">Iniciar Validacion</button>
                </div>
                <div class="col-xl-4">
                    <button type="button" class="btn btn-outline-danger btn-block">Quitar Archivos</button>
                </div>
                <div class="col-xl-4">
                    <button type="button" class="btn btn-outline-info btn-block">Validacion NOM2002</button>                    
                </div>
            </div>
        </div>
    </body>
</html>
