<<<<<<< HEAD
<?php

    $opcao = $_GET['opcao'];

    switch ($opcao) {
        case "aprovar_encomenda":
            include('source/empresa/aprovarencomenda.php');
            break;
        case "empresainicio":
            include('source/empresa/inicio.php');
            break;
        default:
            include ('source/inicio.php');
            break;
    }

?>
=======
<?

$opcao = $_GET["opcao"];

switch ($opcao) {
    case "aprovarencomenda":
        include ('source/empresa/aprovar_encomenda.php');
        break
    default:
        include ('source/cliente/inicio.php');
        break;    
}
>>>>>>> master
