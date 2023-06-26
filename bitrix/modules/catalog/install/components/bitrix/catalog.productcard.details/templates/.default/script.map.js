{"version":3,"sources":["script.js"],"names":["exports","main_core","catalog_entityCard","main_core_events","main_popup","ui_buttons","_classPrivateFieldInitSpec","obj","privateMap","value","_checkPrivateRedeclaration","set","privateCollection","has","TypeError","_isQuantityTraceNoticeShown","WeakMap","ProductCard","_EntityCard","babelHelpers","inherits","id","_this","settings","arguments","length","undefined","classCallCheck","this","possibleConstructorReturn","getPrototypeOf","call","assertThisInitialized","writable","initDocumentTypeSelector","createClass","key","getEntityType","onSectionLayout","event","_this2","_event$getCompatData","getCompatData","_event$getCompatData2","slicedToArray","section","eventData","visible","isSimpleProduct","isCardSettingEnabled","EventEmitter","subscribe","_event$getData$","isQuantityTraceRestricted","isWithOrdersMode","isInventoryManagementUsed","classPrivateFieldGet","field","getData","getId","_selectedValue","popup","Popup","content","Loc","getMessage","overlay","titleBar","closeByEsc","closeIcon","buttons","Button","text","className","events","click","classPrivateFieldSet","destroy","bind","onAfterClose","show","getChildren","forEach","hiddenFields","includes","setVisible","_event$getData$2","editor","sender","quantityTraceValue","_model","getField","_editor$getControlByI","getControlById","onGridUpdatedHandler","get","prototype","_event$getCompatData3","_event$getCompatData4","grid","getVariationGridId","getRows","getCountDisplayed","document","location","reload","onEditorAjaxSubmit","_event$getCompatData5","_event$getCompatData6","response","data","NOTIFY_ABOUT_NEW_VARIATION","showNotification","productTypeSelector","getElementById","productTypeSelectorTypes","menuItems","Object","keys","type","push","onclick","e","slider","BX","SidePanel","Instance","getTopSlider","url","Uri","addParam","getUrl","productTypeId","requestMethod","setFrameSrc","popupMenu","MenuManager","create","bindElement","items","minWidth","offsetWidth","addEventListener","preventDefault","EntityCard","Reflection","namespace","window","Catalog","Event","Main","UI"],"mappings":"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","file":"script.map.js"}