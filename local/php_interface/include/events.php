<?php

class ShowCounterEventHandler
{
    public static function OnBeforeIBlockElementUpdateHandler(&$arFields)
    {
        if ($arFields['IBLOCK_ID'] == IBLOCK_CATALOG_ID) {
            if ($arFields['ACTIVE'] == 'N') {
                $arSelect = array("ID", "IBLOCK_ID", "NAME", "SHOW_COUNTER");
                $arFilter = array("IBLOCK_ID" => IBLOCK_CATALOG_ID, "ID" => $arFields["ID"]);
                $res = CIBlockElement::GetList(array(), $arFilter, false, false, $arSelect);
                $arItems = $res->Fetch();

                if ($arItems["SHOW_COUNTER"] > MAX_COUNT) {
                    global $APPLICATION;
                    $APPLICATION->throwException("Товар невозможно деактивировать, у него " . $arItems["SHOW_COUNTER"] . " просмотров.");

                    return false;
                }
            }
        }
    }
}