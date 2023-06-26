{"version":3,"file":"utils.bundle.map.js","names":["this","BX","Messenger","v2","exports","im_v2_lib_desktop","main_date","im_v2_lib_dateFormatter","im_v2_const","main_core","UA","navigator","userAgent","toLowerCase","BrowserUtil","isChrome","Browser","isFirefox","isIe","isIE","isSafari","includes","isSafariBased","findParent","item","findTag","isHtmlElement","HTMLElement","Type","isString","document","parentNode","Dom","hasClass","openLink","link","target","window","open","DateUtil","cast","date","def","Date","result","isNumber","Number","isNaN","getTime","getTimeToNextMidnight","nextMidnight","setHours","now","getStartOfTheDay","isToday","toDateString","UA$1","DeviceUtil","isDesktop","isMobile","isUndefined","isMobileStatic","orientationHorizontal","orientationPortrait","getOrientation","Math","abs","orientation","UA$2","PlatformUtil","isMac","isLinux","isWindows","isWin","isBitrixMobile","isBitrixDesktop","DesktopManager","getDesktopVersion","getInstance","isDesktopFeatureEnabled","code","isAndroid","isIos","isIOS","getIosVersion","matches","match","parseFloat","openNewPage","url","MobileTools","openWidget","resolveOpenFunction","app","RestUtil","getLogTrackingParams","params","name","data","dialog","message","files","encodeURIComponent","isPlainObject","dataArray","hasOwnProperty","push","isArray","isObjectLike","type","entityId","split","isNull","length","join","TextUtil","convertHtmlEntities","text","create","tag","html","innerText","convertSnakeToCamelCase","replace","$1","toUpperCase","escapeRegex","string","getLocalizeForNumber","phrase","number","language","pluralFormType","parseInt","Loc","getMessage","getFirstLetters","validSymbolsPattern","words","filter","word","firstLetter","charAt","test","insertUnseenWhitespace","splitIndex","UNSEEN_SPACE","firstPart","slice","secondPart","hasWhitespace","hasUserCode","getUuidV4","c","r","random","v","toString","isUuidV4","uuid","uuidV4pattern","RegExp","search","isTempMessage","messageId","startsWith","checkUrl","allowList","checkCorrectStartLink","find","protocol","element","attrs","href","indexOf","htmlspecialchars","Text","encode","htmlspecialcharsback","decode","settings","Extension","getSettings","UserUtil","getLastDateText","bot","network","lastActivityDate","isOnline","isMobileOnline","mobileLastDate","lastSeenText","getLastSeenText","idle","getIdleText","getStatusTextForLastDate","status","phraseCode","gender","absent","vacationText","DateFormatter","formatByCode","DateCode","shortDateFormat","DateTimeFormat","format","getOnlineLimit","FIVE_MINUTES","_Loc$getMessage","getStatusText","_Loc$getMessage2","formatLastActivityDate","isBirthdayToday","birthday","limitOnline","get","FIFTEEN_MINUTES","getProfileLink","userId","getCalendarLink","path","getMentionBbCode","FileUtil","getFileExtension","fileName","splice","getIconTypeByFilename","extension","getIconTypeByExtension","icon","getFileTypeByExtension","FileType","file","image","video","audio","formatFileSize","fileSize","sizes","KILOBYTE_SIZE","position","roundedSize","round","getShortFileName","maxLength","DOT_LENGTH","SYMBOLS_TO_TAKE_BEFORE_EXTENSION","symbolsToTakeFromEnd","trim","getViewerDataAttributes","viewerAttributes","dataAttributes","Object","entries","forEach","key","value","toKebabCase","isImage","fileType","LETTER_CODE_PREFIX","DIGIT_CODE_PREFIX","CTRL","ALT","SHIFT","MODIFIERS","Set","KeyUtil","isCmdOrCtrl","event","metaKey","ctrlKey","isAltOrOption","altKey","isCombination","combinationList","some","combination","checkCombination","shiftKey","keys","has","map","singleLetterRegexp","singleDigitRegexp","DomUtil","recursiveBackwardNodeSearch","node","className","maxNodeLevel","DialogUtil","isDialogId","dialogId","Utils","browser","device","platform","rest","user","dom","Lib","Main","Im","V2","Const"],"sources":["utils.bundle.js"],"mappings":"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"}