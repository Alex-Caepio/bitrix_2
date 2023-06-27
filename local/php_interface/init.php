<?php

namespace App\php_interface;


use App\php_interface\include\ShowCounterEventHandler;

if (file_exists($_SERVER["DOCUMENT_ROOT"] . "/bitrix/vendor/autoload.php"))
    require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/vendor/autoload.php");

AddEventHandler("iblock", "OnBeforeIBlockElementUpdate", array(ShowCounterEventHandler::class, "OnBeforeIBlockElementUpdateHandler"));


