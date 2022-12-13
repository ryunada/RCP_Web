
function getLocalizeGlobalNamespace() {
  var globalContainer;

  if (typeof process !== 'undefined' && typeof process.release !== 'undefined' && process.release.name === 'node') {
    globalContainer = global;
  } else {
    globalContainer = window;
  }

  return globalContainer;
}
!function(){function r(e){if(!(this instanceof r))return new r(e);t(e,"locale"),u(e,"locale"),this._locale=e}var a,n,i,l,t,o,u;getLocalizeGlobalNamespace().TabGlobalize=(a=function(e,r){return e=e.replace(/{[0-9a-zA-Z-_. ]+}/g,function(e){return e=e.replace(/^{([^}]*)}$/,"$1"),"string"==typeof(e=r[e])?e:"number"==typeof e?""+e:JSON.stringify(e)})},n=function(e,r,t){return r=e+(r?": "+a(r,t):""),(r=new Error(r)).code=e,function(){var t=arguments[0];[].slice.call(arguments,1).forEach(function(e){for(var r in e)t[r]=e[r]})}(r,t),r},i=function(e,r,t){e.length&&e[e.length-1].type===r?e[e.length-1].value+=t:e.push({type:r,value:t})},l=function(e,r,t,a){if(!t)throw n(e,r,a)},t=function(e,r){l("E_MISSING_PARAMETER","Missing required parameter `{name}`.",void 0!==e,{name:r})},o=function(e,r,t,a){l("E_INVALID_PAR_TYPE","Invalid `{name}` parameter ({value}). {expected} expected.",t,{expected:a,name:r,value:e})},u=function(e,r){o(e,r,void 0===e||"string"==typeof e,"a string")},r.locale=function(e){return u(e,"locale"),arguments.length&&(this._locale=e),this._locale},r._createError=n,r._formatMessage=a,r._formatMessageToParts=function(a,n){var l=0,o=[];return a.replace(/{[0-9a-zA-Z-_. ]+}/g,function(e,r){var t=e.slice(1,-1);i(o,"literal",a.slice(l,r)),i(o,"variable",n[t]),o[o.length-1].name=t,l+=r+e.length}),o.filter(function(e){return""!==e.value})},r._partsJoin=function(e){return e.map(function(e){return e.value}).join("")},r._partsPush=i,r._regexpEscape=function(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},r._runtimeKey=function(e,r,t,a){return a=a||(t=t,JSON.stringify(t,function(e,r){return r&&r.runtimeKey?r.runtimeKey:r})),a=e+r+a,0<(a=[].reduce.call(a,function(e,r){return 0|(e=(e<<5)-e+r.charCodeAt(0))},0))?"a"+a:"b"+Math.abs(a)},r._stringPad=function(e,r,t){for(var a=(e="string"!=typeof e?String(e):e).length;a<r;a+=1)e=t?e+"0":"0"+e;return e},r._validateParameterPresence=t,r._validateParameterTypeString=u,r._validateParameterType=o,r)}(),function(e){var r,t,a,n;r=e.TabGlobalize,t=r._runtimeKey,a=r._validateParameterType,n=function(e,r){a(e,r,void 0===e||null!==(r=e)&&""+r=="[object Object]"||Array.isArray(e),"Array or Plain Object")},r._messageFormatterFn=function(r){return function(e){return"number"!=typeof e&&"string"!=typeof e||(e=[].slice.call(arguments,0)),n(e,"variables"),r(e)}},r._messageFormat={number:function(e,r){if(isNaN(e))throw new Error("'"+e+"' isn't a number.");return e-(r||0)},plural:function(e,r,t,a,n){if({}.hasOwnProperty.call(a,e))return a[e]();r&&(e-=r);n=t(e,n);return n in a?a[n]():a.other()},select:function(e,r){return{}.hasOwnProperty.call(r,e)?r[e]():r.other()}},r._validateParameterTypeMessageVariables=n,r.messageFormatter=r.prototype.messageFormatter=function(){return r[t("messageFormatter",this._locale,[].slice.call(arguments,0))]},r.formatMessage=r.prototype.formatMessage=function(e){return this.messageFormatter(e).apply({},[].slice.call(arguments,1))}}(getLocalizeGlobalNamespace()),function(e){var r,t,a,n,l;r=e.TabGlobalize,t=r._runtimeKey,a=r._validateParameterPresence,n=r._validateParameterType,l=function(e,r){n(e,r,void 0===e||"number"==typeof e,"Number")},r._pluralGeneratorFn=function(r){return function(e){return a(e,"value"),l(e,"value"),r(e)}},r._validateParameterTypeNumber=l,r.plural=r.prototype.plural=function(e,r){return a(e,"value"),l(e,"value"),this.pluralGenerator(r)(e)},r.pluralGenerator=r.prototype.pluralGenerator=function(e){return r[t("pluralGenerator",this._locale,[e=e||{}])]}}(getLocalizeGlobalNamespace());
(function( root, factory ) {
  root.Localize = root.Localize || {};
  root.Localize.currentMessageLocale = 'ko_KR';
  root.Localize.msg = new root.TabGlobalize('ko');
  root.Localize.message = root.Localize.message || {};
  root.Localize.message.currentLocale = 'ko_KR';

  factory( root.TabGlobalize, root.Localize );
  if (root.Localize.initFormattersAndParsers) {
    root.Localize.initFormattersAndParsers();
  }
}(getLocalizeGlobalNamespace(), function( Globalize ) {
// TODO: remove workaround below
var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
// ----
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1835044563 = pluralGeneratorFn(function(n
) {
  return 'other';
});
Globalize.a1463265407 = messageFormatterFn((function(  ) {
  return function(d) { return ""; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b770267580 = messageFormatterFn((function(  ) {
  return function(d) { return "다중 값 허용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1964034135 = messageFormatterFn((function(  ) {
  return function(d) { return "오류 발생: " + d.EXCEPTION_CODE + ". Salesforce 플로 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b724078073 = messageFormatterFn((function(  ) {
  return function(d) { return "워크플로우가 실패했습니다. Salesforce 플로 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1612091983 = messageFormatterFn((function(  ) {
  return function(d) { return "동작이 트리거되었지만 완료하는 데 시간이 다소 걸릴 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b649591806 = messageFormatterFn((function(  ) {
  return function(d) { return "동작이 구성되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b243307115 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce 플로에 데이터를 제출할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a162713243 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름에 데이터를 제출할 수 없습니다. 워크플로우 작성자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2124483309 = messageFormatterFn((function(  ) {
  return function(d) { return "워크플로우 완료"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1903331828 = messageFormatterFn((function(  ) {
  return function(d) { return "상수 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1431669649 = messageFormatterFn((function(  ) {
  return function(d) { return "배열의 단일 값만 흐름으로 전송됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b968325706 = messageFormatterFn((function(  ) {
  return function(d) { return "뒤로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b994432132 = messageFormatterFn((function(  ) {
  return function(d) { return "백그라운드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1433168062 = messageFormatterFn((function(  ) {
  return function(d) { return "테두리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2078646309 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce 플로에서 흐름 찾아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b524217783 = messageFormatterFn((function(  ) {
  return function(d) { return "단추 제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1359163105 = messageFormatterFn((function(  ) {
  return function(d) { return "트리거: 단추 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1250722804 = messageFormatterFn((function(  ) {
  return function(d) { return "지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1519921532 = messageFormatterFn((function(  ) {
  return function(d) { return "열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1112465315 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.ACTION_NAME + "\" 구성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1716528748 = messageFormatterFn((function(  ) {
  return function(d) { return "워크플로우 구성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b694583742 = messageFormatterFn((function(  ) {
  return function(d) { return "작성자: " + d.CREATOR; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1224550095 = messageFormatterFn((function(  ) {
  return function(d) { return "만든 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1426853134 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드 속성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1039459854 = messageFormatterFn((function(  ) {
  return function(d) { return d.DATA_TYPE + "은(는) 지원되지 않는 데이터 유형입니다. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1793137968 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a783500050 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce 플로에서 해당 데이터를 업데이트합니다. 최종 사용자가 대시보드에서 직접 흐름을 만들고 실행할 수 있도록 하려면 이 옵션을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1608884454 = messageFormatterFn((function(  ) {
  return function(d) { return "참고: Salesforce 플로로 외부 동작을 구성하도록 선택했습니다. 완료되면 선택된 데이터가 선택한 Salesforce org에 공유됩니다. Salesforce로 전송된 데이터는 Salesforce와의 계약이 적용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b897816175 = messageFormatterFn((function(  ) {
  return function(d) { return "완료"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a620327726 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름 입력을 가져오는 동안 오류 발생"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1461804422 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 마크를 찾을 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b255175902 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b177267080 = messageFormatterFn((function(  ) {
  return function(d) { return "필터(" + d.SHEET_NAME + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1860263455 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름에 지원되지 않는 데이터 유형이 하나 이상 포함되어 있습니다. 뒤로 돌아가 다른 흐름을 선택하거나, 지원되지 않는 데이터 유형을 이 흐름에서 제거하려면 Salesforce 플로 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1564676262 = messageFormatterFn((function(  ) {
  return function(d) { return "단추 스타일을 선택합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2073539338 = messageFormatterFn((function(  ) {
  return function(d) { return "단추 서식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1166286868 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 업데이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a31869024 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1397639369 = messageFormatterFn((function(  ) {
  return function(d) { return "0이 아닌 양의 정수 또는 공백이어야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b607232477 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 제한 = " + d.MAX_MARKS; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2096476532 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자가 대시보드에서 선택하여 흐름에 보낼 수 있는 마크 수를 제한합니다. (선택 사항)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2060355160 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 선택 제한 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2106744442 = messageFormatterFn((function(  ) {
  return function(d) { return "트리거: \"" + d.WORKSHEET_NAME + "\"에서 마크 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1032341077 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 1개 마크 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b25626364 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 " + d.MAX_MARKS + "개 마크 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a63589725 = messageFormatterFn((function(  ) {
  return function(d) { return "새 동작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b620447550 = messageFormatterFn((function(  ) {
  return function(d) { return "다음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b484515535 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자가 선택한 데이터를 Salesforce 플로로 보내는 단추를 대시보드에 추가합니다. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1122547991 = messageFormatterFn((function(  ) {
  return function(d) { return "설정된 제한이 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1855334544 = messageFormatterFn((function(  ) {
  return function(d) { return "결과를 찾을 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2042850331 = messageFormatterFn((function(  ) {
  return function(d) { return "사용할 수 있는 시트가 없습니다. 대시보드에 시트를 추가하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b643247887 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 쿼리를 시도하거나 새 동작을 만드십시오. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a494061696 = messageFormatterFn((function(  ) {
  return function(d) { return "트리거: 매개 변수 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b67621127 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b206449745 = messageFormatterFn((function(  ) {
  return function(d) { return "미리 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a61606402 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a674095607 = messageFormatterFn((function(  ) {
  return function(d) { return "필수 입력 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1346161455 = messageFormatterFn((function(  ) {
  return function(d) { return "워크플로우 실행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b684104527 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce에 로그인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a612969438 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce에 로그인하십시오"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1208470259 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a761644693 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce 플로에서 흐름을 선택하십시오. 다음 단계에서 Tableau 외부 동작 워크플로우를 구성합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a227879545 = messageFormatterFn((function(  ) {
  return function(d) { return "워크플로우 입력에 매핑되는 필드를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1739125931 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 매핑"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2067751335 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1157192312 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름에 데이터를 전송할 시트를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a230748510 = messageFormatterFn((function(  ) {
  return function(d) { return "시트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a722058660 = messageFormatterFn((function(  ) {
  return function(d) { return "시트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1643529777 = messageFormatterFn((function(  ) {
  return function(d) { return "동작의 트리거를 선택하십시오. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1487390617 = messageFormatterFn((function(  ) {
  return function(d) { return "단일 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b138094235 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 흐름은 단일 값만 지원합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a810142540 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 선택 시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b430454967 = messageFormatterFn((function(  ) {
  return function(d) { return "유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b748329929 = messageFormatterFn((function(  ) {
  return function(d) { return "정의되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1871304846 = messageFormatterFn((function(  ) {
  return function(d) { return "워크플로우"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b13526498 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to submit due to workflow configuration error. Contact your dashboard author."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a700507340 = messageFormatterFn((function(  ) {
  return function(d) { return "One or more data type mismatches exist in the mapping of input fields."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b25083708 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheet for workflow removed. Undo deletion or have dashboard author configure a new sheet for the workflow."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1164467677 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks must be selected from only one pane."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b232787779 = messageFormatterFn((function(  ) {
  return function(d) { return "Uh oh! You need to be authenticated to use this extension"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a763874730 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 연결의 데이터를 라이브 데이터베이스 연결로 이동할 수 있습니다. 이 옵션은 더 빠를 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a872868933 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 또는 기존 데이터베이스 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b935961656 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스를 신뢰할 수 있는 원본에서 가져온 경우에만 이 옵션을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b987270998 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b840004813 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a690069461 = messageFormatterFn((function(  ) {
  return function(d) { return "교차 데이터베이스 조인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b832296262 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b887189371 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1188544794 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b577653831 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau만 사용(기본값)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a128756008 = messageFormatterFn((function(  ) {
  return function(d) { return "성능이 향상됩니다. 여러 원본에서 데이터를 조인할 때 조인 프로세스가 발생하는 위치를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a272706120 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 교차 데이터베이스 조인에 대한 성능 향상을 포함합니다. 계속하려면 옵션을 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b653002036 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2072020901 = messageFormatterFn((function(  ) {
  return function(d) { return "교차 데이터베이스 조인에 데이터베이스 연결을 사용하면 파일 연결의 데이터가 라이브 데이터베이스 연결로 이동될 수 있으며, 이 경우 연결이 더 빠를 수 있습니다. 데이터베이스를 신뢰할 수 있는 원본에서 가져온 경우에만 이 옵션을 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b312793076 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a468099483 = messageFormatterFn((function(  ) {
  return function(d) { return "계속하려면 다음 중 하나를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1777609430 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1170215932 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 연결 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a127239710 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a936003042 = messageFormatterFn((function(  ) {
  return function(d) { return "You must save the workbook before configuring an analytics extension."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a246781280 = messageFormatterFn((function(  ) {
  return function(d) { return "Please save workbook"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b170970707 = messageFormatterFn((function(  ) {
  return function(d) { return "애니메이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b959378823 = messageFormatterFn((function(  ) {
  return function(d) { return "계정 설정 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b576901799 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1230285554 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1697193306 = messageFormatterFn((function(  ) {
  return function(d) { return "기본값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b183470981 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 기본값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1486142025 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 전환"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a202173956 = messageFormatterFn((function(  ) {
  return function(d) { return "애니메이션을 현재 사용할 수 없습니다. 도움말 > 설정 및 성능 메뉴에서 사용하도록 설정할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a45399892 = messageFormatterFn((function(  ) {
  return function(d) { return "사이트에서 애니메이션을 사용할 수 없습니다. 자세한 내용은 Tableau 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1606861814 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 계정에서 애니메이션을 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1029079519 = messageFormatterFn((function(  ) {
  return function(d) { return d["0"] + "초(" + d["1"] + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1012669799 = messageFormatterFn((function(  ) {
  return function(d) { return "기간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b40940188 = messageFormatterFn((function(  ) {
  return function(d) { return "애니메이션 서식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2124718750 = messageFormatterFn((function(  ) {
  return function(d) { return d["0"] + "(기본값)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1077492398 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b753492552 = messageFormatterFn((function(  ) {
  return function(d) { return "기간은 음수여서는 안 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1642360208 = messageFormatterFn((function(  ) {
  return function(d) { return "(선택된 항목 없음)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a396676312 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자여야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1937638212 = messageFormatterFn((function(  ) {
  return function(d) { return "해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1948215984 = messageFormatterFn((function(  ) {
  return function(d) { return "설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b15770582 = messageFormatterFn((function(  ) {
  return function(d) { return "게시할 때 일부 시트의 애니메이션이 작동되지 않을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b291331455 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 시트 재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1913226728 = messageFormatterFn((function(  ) {
  return function(d) { return "초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1117314024 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1558348260 = messageFormatterFn((function(  ) {
  return function(d) { return "순차"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a743201138 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서의 일부 애니메이션은 Tableau Desktop에서만 재생됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1854221336 = messageFormatterFn((function(  ) {
  return function(d) { return "동시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1593388064 = messageFormatterFn((function(  ) {
  return function(d) { return "스타일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1828095260 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 애니메이션은 Tableau Desktop과 호환되지만 일부 애니메이션은 Tableau Server에 게시될 때 재생되지 않을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b84562176 = messageFormatterFn((function(  ) {
  return function(d) { return "이 사이트에서 데이터에 질문을 사용 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b514670552 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 렌즈를 사용할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1882799919 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b23041030 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2000864044 = messageFormatterFn((function(  ) {
  return function(d) { return "새 렌즈"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1035078972 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b194758242 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 렌즈를 선택하고 해당하는 선택적 기능을 설정하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b824862150 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 개체 구성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a445011034 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 열기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b790051797 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문을 사용하려면 서버 메뉴에서 [로그인]을 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b498005412 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문을 구성하려면 Tableau Cloud 또는 Tableau Server에서 이 대시보드를 편집하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a731530271 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 대시보드 개체의 이 버전(" + d.version + ")은 서버에서 지원되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1670371956 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문을 로드할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a792913878 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈를 로드할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1155108288 = messageFormatterFn((function(  ) {
  return function(d) { return "서버가 응답하지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a100203509 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문이 구성되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2132560237 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문은 이 버전의 Tableau Server에서 지원되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b70289279 = messageFormatterFn((function(  ) {
  return function(d) { return "인증할 수 없습니다. 데이터에 질문을 로드하려면 대시보드를 새로 고치세요."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a512409176 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서가 게시된 데이터 원본에 연결될 때까지 데이터에 질문을 구성할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a565275798 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본을 새로 고칠 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2087539100 = messageFormatterFn((function(  ) {
  return function(d) { return "새로운 데이터에 질문 렌즈를 생성할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a656923731 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 렌즈를 만들 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a685661942 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 렌즈를 적용하지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b444756992 = messageFormatterFn((function(  ) {
  return function(d) { return "자세한 내용은 Tableau 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1896325357 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2031345085 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a65531863 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1340576815 = messageFormatterFn((function(  ) {
  return function(d) { return "수정한 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1187060518 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1294494122 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어, 선택한 필드, 추천 비주얼리제이션 등의 데이터에 질문 설정은 렌즈로 게시됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b533791692 = messageFormatterFn((function(  ) {
  return function(d) { return "목록 새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1926113624 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 렌즈"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1733027349 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 사용자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a186219215 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문을 사용하려면 먼저 이 통합 문서를 게시된 데이터 원본에 연결합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1658840038 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 데이터 원본 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1612112373 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 데이터 원본 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b843560172 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1242277171 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고치는 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1879971199 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 페이지로 이동하여 새 렌즈를 만드십시오. 그런 다음 위의 [새로 고침]을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b712656283 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 페이지로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b695848229 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본에 대한 렌즈가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2043019633 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에는 Tableau Cloud 또는 Tableau Server에 게시되고 게시된 데이터 원본에 연결된 통합 문서가 필요합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b396573046 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문을 사용하도록 통합 문서 게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1569182844 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 렌즈 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1855745413 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 또는 해당 데이터 원본이 사이트에서 제거되었거나 더 이상 액세스 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a305893465 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 툴바 옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a553980218 = messageFormatterFn((function(  ) {
  return function(d) { return "핀에 비주얼리제이션 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a72317838 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서로 게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1871654268 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b788194904 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1927542054 = messageFormatterFn((function(  ) {
  return function(d) { return "나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1588988413 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2096962440 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b599801980 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 범위를 확장하여 예측된 필드 및 계산된 필드의 값을 표시합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a785030468 = messageFormatterFn((function(  ) {
  return function(d) { return "추가 기간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1756146544 = messageFormatterFn((function(  ) {
  return function(d) { return "기간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a106561977 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b864144131 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1680026029 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b882452707 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1693221943 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b323702771 = messageFormatterFn((function(  ) {
  return function(d) { return "초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b511520557 = messageFormatterFn((function(  ) {
  return function(d) { return "시간 단위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b444425459 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b387279594 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1896202186 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 범위 연장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a753430945 = messageFormatterFn((function(  ) {
  return function(d) { return "배경 불투명도 슬라이더"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1912515868 = messageFormatterFn((function(  ) {
  return function(d) { return "시각적 상태 탭 전환"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1067133758 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1638881936 = messageFormatterFn((function(  ) {
  return function(d) { return "백그라운드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2111719314 = messageFormatterFn((function(  ) {
  return function(d) { return "테두리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2009389043 = messageFormatterFn((function(  ) {
  return function(d) { return "단추 스타일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1262951714 = messageFormatterFn((function(  ) {
  return function(d) { return "단추"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1505917690 = messageFormatterFn((function(  ) {
  return function(d) { return "제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1504947138 = messageFormatterFn((function(  ) {
  return function(d) { return "제목 입력(선택 사항)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a209953984 = messageFormatterFn((function(  ) {
  return function(d) { return "자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a800451656 = messageFormatterFn((function(  ) {
  return function(d) { return "편집 단추"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1752898340 = messageFormatterFn((function(  ) {
  return function(d) { return "오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2070974115 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a572749177 = messageFormatterFn((function(  ) {
  return function(d) { return "서식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2053409509 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1725098605 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b562873652 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지 선택..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1771739174 = messageFormatterFn((function(  ) {
  return function(d) { return "선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b78879174 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b433608322 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b686080664 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 항목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1610450806 = messageFormatterFn((function(  ) {
  return function(d) { return "표시된 항목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a749462495 = messageFormatterFn((function(  ) {
  return function(d) { return "불투명도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b850253415 = messageFormatterFn((function(  ) {
  return function(d) { return "%"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b203238826 = messageFormatterFn((function(  ) {
  return function(d) { return "단추 모양"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b499567461 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a887098995 = messageFormatterFn((function(  ) {
  return function(d) { return "도구 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b864370094 = messageFormatterFn((function(  ) {
  return function(d) { return "도구 설명 텍스트를 입력하십시오(선택 사항)."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1687606855 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Button"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1847246744 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1238230301 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1810551519 = messageFormatterFn((function(  ) {
  return function(d) { return "추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a935095776 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 값 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1352811150 = messageFormatterFn((function(  ) {
  return function(d) { return "집계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a210008035 = messageFormatterFn((function(  ) {
  return function(d) { return "(검색에서 전체)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a946877334 = messageFormatterFn((function(  ) {
  return function(d) { return "(전체)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1264059610 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1508126101 = messageFormatterFn((function(  ) {
  return function(d) { return "하위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1555882703 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1120770491 = messageFormatterFn((function(  ) {
  return function(d) { return "수식 기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b480997873 = messageFormatterFn((function(  ) {
  return function(d) { return "로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b771954140 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2096822839 = messageFormatterFn((function(  ) {
  return function(d) { return "목록 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a664277107 = messageFormatterFn((function(  ) {
  return function(d) { return "비교"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a806000327 = messageFormatterFn((function(  ) {
  return function(d) { return "조건"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1840078728 = messageFormatterFn((function(  ) {
  return function(d) { return "조건:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b560452407 = messageFormatterFn((function(  ) {
  return function(d) { return "포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1279857093 = messageFormatterFn((function(  ) {
  return function(d) { return "카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1939312495 = messageFormatterFn((function(  ) {
  return function(d) { return "새 매개 변수 만들기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1532800362 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 값 목록"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1242360627 = messageFormatterFn((function(  ) {
  return function(d) { return "유효한 데이터 값을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a170932501 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a257822340 = messageFormatterFn((function(  ) {
  return function(d) { return "포함하지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1912567119 = messageFormatterFn((function(  ) {
  return function(d) { return "제외할 끝 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1415424907 = messageFormatterFn((function(  ) {
  return function(d) { return "일치하지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a986778552 = messageFormatterFn((function(  ) {
  return function(d) { return "제외할 시작 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b49681799 = messageFormatterFn((function(  ) {
  return function(d) { return "계층의 모든 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b728257908 = messageFormatterFn((function(  ) {
  return function(d) { return "계층 및 컨텍스트의 모든 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1933799049 = messageFormatterFn((function(  ) {
  return function(d) { return "컨텍스트의 모든 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1596947913 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 집합의 모든 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1722293107 = messageFormatterFn((function(  ) {
  return function(d) { return "관련된 값만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b567886136 = messageFormatterFn((function(  ) {
  return function(d) { return "끝 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b67371479 = messageFormatterFn((function(  ) {
  return function(d) { return "같음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1246094330 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 값 제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1196027750 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b989455094 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 제한은 0보다 커야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1102455662 = messageFormatterFn((function(  ) {
  return function(d) { return "수식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a978100717 = messageFormatterFn((function(  ) {
  return function(d) { return "수식이 비어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1334276864 = messageFormatterFn((function(  ) {
  return function(d) { return "브라우저에서 수식을 편집할 수 없습니다. 대신 Tableau Desktop을 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1649654676 = messageFormatterFn((function(  ) {
  return function(d) { return "일반"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a109521447 = messageFormatterFn((function(  ) {
  return function(d) { return "보다 큼"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2063489381 = messageFormatterFn((function(  ) {
  return function(d) { return "보다 크거나 같음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a341310531 = messageFormatterFn((function(  ) {
  return function(d) { return "비워둘 경우 모든 값 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2064814957 = messageFormatterFn((function(  ) {
  return function(d) { return "이 값은 올바른 형식이 아닙니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1446230856 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서를 연 최근 날짜 값으로 필터링"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1723687620 = messageFormatterFn((function(  ) {
  return function(d) { return "보다 작음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b480981346 = messageFormatterFn((function(  ) {
  return function(d) { return "보다 작거나 같음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a230231144 = messageFormatterFn((function(  ) {
  return function(d) { return "제한:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2011894536 = messageFormatterFn((function(  ) {
  return function(d) { return "목록"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a879416817 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 값 로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1429051377 = messageFormatterFn((function(  ) {
  return function(d) { return "검색 또는 추가할 텍스트 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1817467546 = messageFormatterFn((function(  ) {
  return function(d) { return "추가할 텍스트 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1988239958 = messageFormatterFn((function(  ) {
  return function(d) { return "값 일치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1977242911 = messageFormatterFn((function(  ) {
  return function(d) { return "정확히 일치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1409153740 = messageFormatterFn((function(  ) {
  return function(d) { return "최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2113334982 = messageFormatterFn((function(  ) {
  return function(d) { return "최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b652011999 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 항목이 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2074530594 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1366127142 = messageFormatterFn((function(  ) {
  return function(d) { return "같지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2089300070 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b691619673 = messageFormatterFn((function(  ) {
  return function(d) { return "백분위수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1263560542 = messageFormatterFn((function(  ) {
  return function(d) { return "값 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2118843626 = messageFormatterFn((function(  ) {
  return function(d) { return "순위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1140610437 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b110168220 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a832549719 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1257469614 = messageFormatterFn((function(  ) {
  return function(d) { return "목록에서 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1564334711 = messageFormatterFn((function(  ) {
  return function(d) { return "선택 내용:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a194776481 = messageFormatterFn((function(  ) {
  return function(d) { return "시작 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1418419502 = messageFormatterFn((function(  ) {
  return function(d) { return "요약"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a349556033 = messageFormatterFn((function(  ) {
  return function(d) { return "상위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1378107316 = messageFormatterFn((function(  ) {
  return function(d) { return "상위/하위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b959795644 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2006082019 = messageFormatterFn((function(  ) {
  return function(d) { return "값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2058924340 = messageFormatterFn((function(  ) {
  return function(d) { return "값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1603201476 = messageFormatterFn((function(  ) {
  return function(d) { return "와일드카드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1702500651 = messageFormatterFn((function(  ) {
  return function(d) { return "와일드카드:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1293224256 = messageFormatterFn((function(  ) {
  return function(d) { return "인증 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b787101877 = messageFormatterFn((function(  ) {
  return function(d) { return "인증 주체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1593008455 = messageFormatterFn((function(  ) {
  return function(d) { return "인증된 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1078485445 = messageFormatterFn((function(  ) {
  return function(d) { return "인증된 데이터 원본(라이브)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b599917154 = messageFormatterFn((function(  ) {
  return function(d) { return "인증된 Tableau Server 연결 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a173597706 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 연결 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1158238770 = messageFormatterFn((function(  ) {
  return function(d) { return "외부 서버 연결 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1695024604 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2046614904 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 추출:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1590235405 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a396879479 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 연결 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1828242205 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a627001961 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server 연결 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b184374011 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서의 연결 대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1308266015 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 갤러리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1934456051 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1524211053 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 갤러리에 연결할 수 없습니다. 인터넷에 연결되어 있는지 확인하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2037884241 = messageFormatterFn((function(  ) {
  return function(d) { return "다운로드한 확장 프로그램은 계속 사용할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1957138509 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 읽기가 중단됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1167957297 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 파일이 너무 큽니다. " + d.fileSize + "MB 미만의 파일을 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1007392949 = messageFormatterFn((function(  ) {
  return function(d) { return "이 브라우저에서는 확장 프로그램 갤러리를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1428000949 = messageFormatterFn((function(  ) {
  return function(d) { return "잘못된 확장 프로그램 매니페스트가 선택되었습니다. .trex 파일만 지원됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1359272722 = messageFormatterFn((function(  ) {
  return function(d) { return "내 확장 프로그램"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b350517256 = messageFormatterFn((function(  ) {
  return function(d) { return "잘못된 파일 수가 선택됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1614931760 = messageFormatterFn((function(  ) {
  return function(d) { return "<p><strong>액세스 권한을 부여할 수 없음</strong><br />Tableau에서 끝점에 대한 액세스 권한을 부여할 수 없습니다.</p><p>지금 수행할 일:<ul><li>액세스 권한이 있는지 확인하고 다시 시도하십시오. <a target='_blank' href='https://help.tableau.com/current/pro/desktop/en-us/examples_azure_data_lake_gen2.htm'>자세히 알아보기</a>.</li><li>이 커넥터를 닫고 다시 시도하십시오.</li><ul></p>"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1421869668 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2110951070 = messageFormatterFn((function(  ) {
  return function(d) { return "연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a770089342 = messageFormatterFn((function(  ) {
  return function(d) { return "문서 라이브러리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1950487200 = messageFormatterFn((function(  ) {
  return function(d) { return "끝점 URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1727256098 = messageFormatterFn((function(  ) {
  return function(d) { return "파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1044704983 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 확장명:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1087578384 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1004585328 = messageFormatterFn((function(  ) {
  return function(d) { return "폴더"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1664426879 = messageFormatterFn((function(  ) {
  return function(d) { return "홈"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a576165543 = messageFormatterFn((function(  ) {
  return function(d) { return "끝점은 https://{accountName}.dfs.core.windows.net/ 형식이어야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a145293501 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 URL은 " + d.urlBase + "로 시작해야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1584051722 = messageFormatterFn((function(  ) {
  return function(d) { return "종류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b501145376 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막으로 수정한 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1505581267 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1239580971 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive 및 SharePoint Online"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1581360890 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive(개인 파일)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1894711125 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive(내게 공유된 항목)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1531630341 = messageFormatterFn((function(  ) {
  return function(d) { return "검색된 텍스트와 일치하는 항목이 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b410050230 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a775952765 = messageFormatterFn((function(  ) {
  return function(d) { return "비즈니스 계정에 대해 지원되지 않는 항목 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1800692251 = messageFormatterFn((function(  ) {
  return function(d) { return "검색 결과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a638384237 = messageFormatterFn((function(  ) {
  return function(d) { return "사이트 이름 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b347847665 = messageFormatterFn((function(  ) {
  return function(d) { return "SharePoint 사이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b547816379 = messageFormatterFn((function(  ) {
  return function(d) { return "로그아웃"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1495817941 = messageFormatterFn((function(  ) {
  return function(d) { return "다음으로 로그인됨: " + d.user + " "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1354838807 = messageFormatterFn((function(  ) {
  return function(d) { return "사이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1354660061 = messageFormatterFn((function(  ) {
  return function(d) { return "크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2108787825 = messageFormatterFn((function(  ) {
  return function(d) { return "찾아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1298304956 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1218907230 = messageFormatterFn((function(  ) {
  return function(d) { return "입력한 URL이 잘못되었거나 보기 권한이 없는 파일을 가리킴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b173026064 = messageFormatterFn((function(  ) {
  return function(d) { return "끝점 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1184186967 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a575170524 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1217654116 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a608637673 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b339717350 = messageFormatterFn((function(  ) {
  return function(d) { return "누군가에게 알리려면 @을 사용해 언급하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b334578475 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2122889604 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글에 뷰 스냅샷 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1309480186 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰의 스냅샷을 만들 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a153895033 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰의 스냅샷을 추가할 수 있는 사용 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b229836915 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + "의 스냅샷을 뷰에 적용할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a753007212 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰에 스냅샷 필터를 적용하려면 Enter 또는 스페이스바 키를 누릅니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1378693315 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷 필터와 선택 내용을 뷰에 적용하는 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a193980545 = messageFormatterFn((function(  ) {
  return function(d) { return "오류 발생"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a178358051 = messageFormatterFn((function(  ) {
  return function(d) { return "패널 닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1940383641 = messageFormatterFn((function(  ) {
  return function(d) { return "더 이상 댓글 추가 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2135898613 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return "사용자에게";}, other: function() { return d.formattedItemCount + "명의 사용자에게";} }) + " " + d.comment + "에 대한 알림이 전달되지 않습니다."; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b1900410927 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글을 볼 수 있는 사용 권한이 더 이상 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1337521365 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a663860746 = messageFormatterFn((function(  ) {
  return function(d) { return d.date + "에 " + d.user + "의 댓글 삭제 확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a723052685 = messageFormatterFn((function(  ) {
  return function(d) { return "인터넷 연결을 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1196866745 = messageFormatterFn((function(  ) {
  return function(d) { return "인터넷 연결을 확인한 후 다시 시도할 수 있도록 새로 고치십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b17484924 = messageFormatterFn((function(  ) {
  return function(d) { return "관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1950273835 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1828546396 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1109899047 = messageFormatterFn((function(  ) {
  return function(d) { return "이 메시지는 이미 삭제되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b153202627 = messageFormatterFn((function(  ) {
  return function(d) { return "이 댓글을 삭제할 수 있는 사용 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b7663414 = messageFormatterFn((function(  ) {
  return function(d) { return "이 댓글을 삭제하려면 Delete 또는 백스페이스 키를 누릅니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a628685734 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2146607628 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지를 다운로드하지 못함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1328413675 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없는 오류 발생"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1054703755 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글을 가져오지 못함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b409917214 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지를 가져오지 못함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1049028680 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1197343763 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글을 로드할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1014240911 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글 로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1388547918 = messageFormatterFn((function(  ) {
  return function(d) { return "메시지가 너무 깁니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a711330582 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰에 대한 댓글이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a227018967 = messageFormatterFn((function(  ) {
  return function(d) { return "게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1496935383 = messageFormatterFn((function(  ) {
  return function(d) { return "누군가에게 알리려면 댓글에서 해당 사용자를 @을 사용해 언급하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1829790822 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b62684953 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1934628255 = messageFormatterFn((function(  ) {
  return function(d) { return "보낼 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2120843995 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷이 추가되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a53116204 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰의 스냅샷이 이 댓글에 첨부됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a984947619 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷 미리 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1195013573 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷이 제거되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1209122176 = messageFormatterFn((function(  ) {
  return function(d) { return "눌러서 다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1778032543 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글을 로드할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a782528899 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + "의 Tableau 계정에 이메일 주소가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1209306400 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + "에게 댓글을 볼 수 있는 사용 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b501656182 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + "에게 이 뷰를 볼 수 있는 사용 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1306433535 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자에게 알림이 전달되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b579794159 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return d.formattedItemCount + "명의 사용자에게";}, other: function() { return d.formattedItemCount + "명의 사용자에게";} }) + " 알림이 전달되지 않습니다."; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b2126885356 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 제거됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1688085120 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2002449508 = messageFormatterFn((function(  ) {
  return function(d) { return "All Tables"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1678160621 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b111272224 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a505110596 = messageFormatterFn((function(  ) {
  return function(d) { return "Data sources"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2055107556 = messageFormatterFn((function(  ) {
  return function(d) { return "Database / Schema"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1034190217 = messageFormatterFn((function(  ) {
  return function(d) { return "Default"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b188729 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand / Collapse"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b413414991 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b575615445 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1334888385 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b66092856 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a318591681 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for data"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1262524847 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b907072721 = messageFormatterFn((function(  ) {
  return function(d) { return "정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b623456833 = messageFormatterFn((function(  ) {
  return function(d) { return "열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1238009975 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1371607034 = messageFormatterFn((function(  ) {
  return function(d) { return "연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1852047265 = messageFormatterFn((function(  ) {
  return function(d) { return "콘텐츠 유형:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1062361244 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 연결은 지원되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1071957499 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터에 연결할 수 있는 사용 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2024142036 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a424497500 = messageFormatterFn((function(  ) {
  return function(d) { return "전체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b708536421 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자: " + d.displayName + ", 시간: " + d.updatedAt; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a726421579 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 자산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1666463472 = messageFormatterFn((function(  ) {
  return function(d) { return "경고 없는 자산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1109169200 = messageFormatterFn((function(  ) {
  return function(d) { return "경고 있는 자산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1225255315 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 품질 경고"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1646232431 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1035806374 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b506326086 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b277878854 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 및 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a91678117 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 및 파일(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a655764857 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1146049808 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2044682031 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a635273886 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a177715886 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 다운스트림 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1727756647 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a160266064 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 콘텐츠가 필터링되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1221357308 = messageFormatterFn((function(  ) {
  return function(d) { return "아직 아무것도 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1191368982 = messageFormatterFn((function(  ) {
  return function(d) { return "오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a789750036 = messageFormatterFn((function(  ) {
  return function(d) { return "서버에서 오류가 발생했습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a787389429 = messageFormatterFn((function(  ) {
  return function(d) { return "세션 시간이 초과되었습니다. 연결하려면 대화 상자를 다시 여십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1295909385 = messageFormatterFn((function(  ) {
  return function(d) { return "예기치 않은 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b602778771 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1598143771 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1655613493 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 경로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b567365735 = messageFormatterFn((function(  ) {
  return function(d) { return "파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a641288797 = messageFormatterFn((function(  ) {
  return function(d) { return "필터: " + d.count; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1468554666 = messageFormatterFn((function(  ) {
  return function(d) { return "인증됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a265664580 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1750011473 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2028694657 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1836972612 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1330891697 = messageFormatterFn((function(  ) {
  return function(d) { return "연락처"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2059553867 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 이름 / 경로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a302937210 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브/마지막 추출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1200919108 = messageFormatterFn((function(  ) {
  return function(d) { return "위치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1574777106 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1814593272 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1072338122 = messageFormatterFn((function(  ) {
  return function(d) { return "서버"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a668922962 = messageFormatterFn((function(  ) {
  return function(d) { return "서버 / 경로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1768805889 = messageFormatterFn((function(  ) {
  return function(d) { return "유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1266024905 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 사용자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b391118809 = messageFormatterFn((function(  ) {
  return function(d) { return "호스트 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a141580382 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b337859988 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b767113003 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1757805842 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자의 표시 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1539948752 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자의 ID"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a539491131 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.ITEM + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1368280539 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 권한 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1375415834 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2066961403 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a124957316 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b371462059 = messageFormatterFn((function(  ) {
  return function(d) { return "스키마"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1817248107 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1319937230 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b203950404 = messageFormatterFn((function(  ) {
  return function(d) { return "보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b314572568 = messageFormatterFn((function(  ) {
  return function(d) { return "시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b281912282 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 유형(사전순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b75850606 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 유형(사전역순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b355604262 = messageFormatterFn((function(  ) {
  return function(d) { return "연락처(사전순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1934665310 = messageFormatterFn((function(  ) {
  return function(d) { return "연락처(사전역순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b65337040 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 이름 / 경로(사전순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1951952696 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 이름 / 경로(사전역순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1720370307 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬 기준:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1120654902 = messageFormatterFn((function(  ) {
  return function(d) { return "순서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a9777932 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2106515661 = messageFormatterFn((function(  ) {
  return function(d) { return "이름(사전순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b803980507 = messageFormatterFn((function(  ) {
  return function(d) { return "이름(사전역순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a847763446 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(최소-최대)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a584358594 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(최대-최소)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2099774613 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서(최소-최대)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b595008019 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서(최대-최소)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1979092409 = messageFormatterFn((function(  ) {
  return function(d) { return "최소-최대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1655918305 = messageFormatterFn((function(  ) {
  return function(d) { return "최대-최소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a281409894 = messageFormatterFn((function(  ) {
  return function(d) { return "관련성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a167611478 = messageFormatterFn((function(  ) {
  return function(d) { return "서버 / 경로(사전순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a974484066 = messageFormatterFn((function(  ) {
  return function(d) { return "서버 / 경로(사전역순)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1265289424 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a210779394 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블(" + d.name + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b569190375 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b295505882 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1379689916 = messageFormatterFn((function(  ) {
  return function(d) { return "태그"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b179209459 = messageFormatterFn((function(  ) {
  return function(d) { return "태그"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1845632815 = messageFormatterFn((function(  ) {
  return function(d) { return "대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b293857444 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 설정/해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b172673853 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 데이터 커넥터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1220583259 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1845546524 = messageFormatterFn((function(  ) {
  return function(d) { return "개인 공간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a282930312 = messageFormatterFn((function(  ) {
  return function(d) { return "사전순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a283651062 = messageFormatterFn((function(  ) {
  return function(d) { return "사전역순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1362475523 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b131078757 = messageFormatterFn((function(  ) {
  return function(d) { return "Anytime"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b505604400 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1144393199 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1284608484 = messageFormatterFn((function(  ) {
  return function(d) { return "Certification"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b803423288 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear All"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b225451614 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Filters"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b874015334 = messageFormatterFn((function(  ) {
  return function(d) { return "Last 7 days"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1452448318 = messageFormatterFn((function(  ) {
  return function(d) { return "Last 30 days"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b975591560 = messageFormatterFn((function(  ) {
  return function(d) { return "Last 90 days"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1154439485 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b645631224 = messageFormatterFn((function(  ) {
  return function(d) { return "More Filters"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b621027501 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for data"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b862942749 = messageFormatterFn((function(  ) {
  return function(d) { return "Today"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2081196594 = messageFormatterFn((function(  ) {
  return function(d) { return "View More"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b972267420 = messageFormatterFn((function(  ) {
  return function(d) { return "Yesterday"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a668602783 = messageFormatterFn((function(  ) {
  return function(d) { return "인증:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1883794524 = messageFormatterFn((function(  ) {
  return function(d) { return "Active Directory 비밀번호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2056717240 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Azure HDInsight 서비스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1614272642 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 인증"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b826435706 = messageFormatterFn((function(  ) {
  return function(d) { return "Kerberos"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b551954254 = messageFormatterFn((function(  ) {
  return function(d) { return "LDAP"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b453623773 = messageFormatterFn((function(  ) {
  return function(d) { return "인증 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1599895294 = messageFormatterFn((function(  ) {
  return function(d) { return "OAuth를 사용하여 로그인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1288980166 = messageFormatterFn((function(  ) {
  return function(d) { return "비밀번호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1666351853 = messageFormatterFn((function(  ) {
  return function(d) { return "SAML IdP"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a768209013 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata 데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1950780863 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2017280999 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름 및 비밀번호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b672833514 = messageFormatterFn((function(  ) {
  return function(d) { return "Windows 인증"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1679665736 = messageFormatterFn((function(  ) {
  return function(d) { return "찾아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b772052769 = messageFormatterFn((function(  ) {
  return function(d) { return "찾아보기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a926001538 = messageFormatterFn((function(  ) {
  return function(d) { return "연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1588884474 = messageFormatterFn((function(  ) {
  return function(d) { return "직접"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b551506393 = messageFormatterFn((function(  ) {
  return function(d) { return "HiveServer2"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a907346459 = messageFormatterFn((function(  ) {
  return function(d) { return "Impala"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a912648960 = messageFormatterFn((function(  ) {
  return function(d) { return "다중 노드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1361050093 = messageFormatterFn((function(  ) {
  return function(d) { return "SharkServer(Shark 0.8.1 이하)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b757106437 = messageFormatterFn((function(  ) {
  return function(d) { return "SharkServer2(Shark 0.9.*)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b343891141 = messageFormatterFn((function(  ) {
  return function(d) { return "단일 노드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1901255451 = messageFormatterFn((function(  ) {
  return function(d) { return "SparkThriftServer(Spark 1.1 이상)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1977767729 = messageFormatterFn((function(  ) {
  return function(d) { return "ZooKeeper"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a317569247 = messageFormatterFn((function(  ) {
  return function(d) { return "유형:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1216461107 = messageFormatterFn((function(  ) {
  return function(d) { return "복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a177967962 = messageFormatterFn((function(  ) {
  return function(d) { return "잘라내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1603192026 = messageFormatterFn((function(  ) {
  return function(d) { return "자세한 오류 메시지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1458284610 = messageFormatterFn((function(  ) {
  return function(d) { return "언어:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a95573200 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 이름:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1445027898 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 세부 정보 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1885149920 = messageFormatterFn((function(  ) {
  return function(d) { return "초기 SQL 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1510533270 = messageFormatterFn((function(  ) {
  return function(d) { return "HTTP:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2079492724 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 시간에 실행할 SQL 문을 추가하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1297324593 = messageFormatterFn((function(  ) {
  return function(d) { return "삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1700497653 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1111292122 = messageFormatterFn((function(  ) {
  return function(d) { return "초기 SQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1495376861 = messageFormatterFn((function(  ) {
  return function(d) { return "OAuth 서비스 URL:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1584504936 = messageFormatterFn((function(  ) {
  return function(d) { return "속성 파일:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1277656748 = messageFormatterFn((function(  ) {
  return function(d) { return "호스트 FQDN:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1816179401 = messageFormatterFn((function(  ) {
  return function(d) { return "영역:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1002710941 = messageFormatterFn((function(  ) {
  return function(d) { return "서비스 이름:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a555919831 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 비밀번호:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1575363294 = messageFormatterFn((function(  ) {
  return function(d) { return "비밀번호:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1696779736 = messageFormatterFn((function(  ) {
  return function(d) { return "작업 그룹 파일:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1624858197 = messageFormatterFn((function(  ) {
  return function(d) { return "작업 그룹 보안"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a479962759 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1713581061 = messageFormatterFn((function(  ) {
  return function(d) { return d.connectorName + " 커넥터용 드라이버가 설치되지 않았습니다. 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b244310009 = messageFormatterFn((function(  ) {
  return function(d) { return " 그런 다음 연결합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b227194461 = messageFormatterFn((function(  ) {
  return function(d) { return "드라이버 다운로드 및 설치,"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a154481901 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 파일 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1087877666 = messageFormatterFn((function(  ) {
  return function(d) { return "열기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a790957278 = messageFormatterFn((function(  ) {
  return function(d) { return "선택 사항"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1717403266 = messageFormatterFn((function(  ) {
  return function(d) { return "연결하려는 데이터베이스의 DSN(데이터 원본 이름)을 선택하십시오. Tableau Server에서 흐름을 게시하고 실행하려면 서버에 일치하는 DSN이 구성되어 있어야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a369595486 = messageFormatterFn((function(  ) {
  return function(d) { return "DSN:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1009631291 = messageFormatterFn((function(  ) {
  return function(d) { return "DSN 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b326875813 = messageFormatterFn((function(  ) {
  return function(d) { return "비밀 액세스 키:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a482096604 = messageFormatterFn((function(  ) {
  return function(d) { return "비밀번호:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1605078059 = messageFormatterFn((function(  ) {
  return function(d) { return "붙여넣기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b371094003 = messageFormatterFn((function(  ) {
  return function(d) { return d.prompt + ":"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a65082543 = messageFormatterFn((function(  ) {
  return function(d) { return "커밋되지 않은 데이터 읽기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1190304731 = messageFormatterFn((function(  ) {
  return function(d) { return "비밀번호 저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b477658208 = messageFormatterFn((function(  ) {
  return function(d) { return "암호화 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a730493285 = messageFormatterFn((function(  ) {
  return function(d) { return "SSL 필요(권장)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b188782731 = messageFormatterFn((function(  ) {
  return function(d) { return "SAML IdP(Okta):"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b743384417 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 세부 정보 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b618154811 = messageFormatterFn((function(  ) {
  return function(d) { return "초기 SQL 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1041131882 = messageFormatterFn((function(  ) {
  return function(d) { return "로그인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a270810617 = messageFormatterFn((function(  ) {
  return function(d) { return "로그인 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1742161256 = messageFormatterFn((function(  ) {
  return function(d) { return "SSL 인증서 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1921885554 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 연결을 암호화하여 데이터를 안전하게 유지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2134835802 = messageFormatterFn((function(  ) {
  return function(d) { return "파일에 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a698980769 = messageFormatterFn((function(  ) {
  return function(d) { return "서버에 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1336655484 = messageFormatterFn((function(  ) {
  return function(d) { return "이진"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1947081254 = messageFormatterFn((function(  ) {
  return function(d) { return "전송:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1330818781 = messageFormatterFn((function(  ) {
  return function(d) { return "HTTP"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1133314061 = messageFormatterFn((function(  ) {
  return function(d) { return "전송 유형 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1033478654 = messageFormatterFn((function(  ) {
  return function(d) { return "SASL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a194494279 = messageFormatterFn((function(  ) {
  return function(d) { return "URL:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a837797334 = messageFormatterFn((function(  ) {
  return function(d) { return "액세스 키 ID:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1757544639 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2093631565 = messageFormatterFn((function(  ) {
  return function(d) { return "지원이 필요한 경우 공급업체에 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2141235184 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1508586692 = messageFormatterFn((function(  ) {
  return function(d) { return "SQL로 변환"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b694823919 = messageFormatterFn((function(  ) {
  return function(d) { return "새 매개 변수 만들기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1460123854 = messageFormatterFn((function(  ) {
  return function(d) { return "여기에 SQL 쿼리를 입력하십시오. 예: 'SELECT * FROM table_name'"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1143666281 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 SQL 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1546533559 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수 삽입:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a157934162 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b306256199 = messageFormatterFn((function(  ) {
  return function(d) { return "결과 미리 보기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1201489378 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2144376019 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1304693995 = messageFormatterFn((function(  ) {
  return function(d) { return "계속하시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2066193115 = messageFormatterFn((function(  ) {
  return function(d) { return "작성자:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a479728229 = messageFormatterFn((function(  ) {
  return function(d) { return " (기본값)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b950598924 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰 삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b150667312 = messageFormatterFn((function(  ) {
  return function(d) { return "이름을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1748650576 = messageFormatterFn((function(  ) {
  return function(d) { return "아직 저장된 항목 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a853815786 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰 관리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1646577386 = messageFormatterFn((function(  ) {
  return function(d) { return "뒤로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b114537977 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰는 비공개 뷰입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a786828987 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰는 공개 뷰입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a94117290 = messageFormatterFn((function(  ) {
  return function(d) { return "내 기본값으로 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1365680003 = messageFormatterFn((function(  ) {
  return function(d) { return "문자 제한은 최대 255자입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b358675440 = messageFormatterFn((function(  ) {
  return function(d) { return "내 뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1371701506 = messageFormatterFn((function(  ) {
  return function(d) { return "원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1930454682 = messageFormatterFn((function(  ) {
  return function(d) { return "기타 뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b870541055 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰의 이름 바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b614469565 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰의 이름 바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2146044980 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰 관리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b67184905 = messageFormatterFn((function(  ) {
  return function(d) { return "저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1354336634 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 필드에 사용자 지정 뷰의 이름을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b632077445 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 뷰 저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1151262978 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰의 이름 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a638637344 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰를 기본 뷰로 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1055699893 = messageFormatterFn((function(  ) {
  return function(d) { return "이는 현재 기본값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a915413185 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 사용자가 볼 수 있도록 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1504857960 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰에 대한 액세스 권한이 있는 사용자는 이 사용자 지정 뷰를 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1136709285 = messageFormatterFn((function(  ) {
  return function(d) { return "동작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1842574391 = messageFormatterFn((function(  ) {
  return function(d) { return "동작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a27103554 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b764544464 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1114280134 = messageFormatterFn((function(  ) {
  return function(d) { return "다음에 대한 동작 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1641100206 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1327418576 = messageFormatterFn((function(  ) {
  return function(d) { return "이 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a34450517 = messageFormatterFn((function(  ) {
  return function(d) { return "실행 조건"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1363380448 = messageFormatterFn((function(  ) {
  return function(d) { return "원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1808019279 = messageFormatterFn((function(  ) {
  return function(d) { return "동작으로 데이터, 대시보드 개체, 기타 통합 문서 시트와 웹 사이에 대화형 관계를 만들 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b127774364 = messageFormatterFn((function(  ) {
  return function(d) { return "브라우저에서 이 동작을 편집할 수 없습니다. 대신 Tableau Desktop을 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1797142634 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2119109164 = messageFormatterFn((function(  ) {
  return function(d) { return "빈 이름은 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b169400814 = messageFormatterFn((function(  ) {
  return function(d) { return "마우스오버"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a237426872 = messageFormatterFn((function(  ) {
  return function(d) { return "마우스오버"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a543862623 = messageFormatterFn((function(  ) {
  return function(d) { return "메뉴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1221990283 = messageFormatterFn((function(  ) {
  return function(d) { return "메뉴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a462823036 = messageFormatterFn((function(  ) {
  return function(d) { return "선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a737448590 = messageFormatterFn((function(  ) {
  return function(d) { return "선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1319921444 = messageFormatterFn((function(  ) {
  return function(d) { return "단일 선택만 해당"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b633764618 = messageFormatterFn((function(  ) {
  return function(d) { return "동작 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b325702066 = messageFormatterFn((function(  ) {
  return function(d) { return "필터..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b626206546 = messageFormatterFn((function(  ) {
  return function(d) { return "시트로 이동..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a202577350 = messageFormatterFn((function(  ) {
  return function(d) { return "하이라이트..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a748079361 = messageFormatterFn((function(  ) {
  return function(d) { return "URL로 이동..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b715100735 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수 변경..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1802606074 = messageFormatterFn((function(  ) {
  return function(d) { return "집합 값 변경..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b640133743 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 동작 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a947365337 = messageFormatterFn((function(  ) {
  return function(d) { return "시트로 이동 동작 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a405413383 = messageFormatterFn((function(  ) {
  return function(d) { return "하이라이트 동작 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b241747844 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수 동작 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1850609781 = messageFormatterFn((function(  ) {
  return function(d) { return "집합 동작 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1924403458 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 동작 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1323054259 = messageFormatterFn((function(  ) {
  return function(d) { return "집합에 값 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1953661075 = messageFormatterFn((function(  ) {
  return function(d) { return "집계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b494114717 = messageFormatterFn((function(  ) {
  return function(d) { return "집합에 값 할당"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a324141574 = messageFormatterFn((function(  ) {
  return function(d) { return "거짓"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1810228103 = messageFormatterFn((function(  ) {
  return function(d) { return "참"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2126550556 = messageFormatterFn((function(  ) {
  return function(d) { return "부울 유형 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b191821163 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b423959863 = messageFormatterFn((function(  ) {
  return function(d) { return "집합에 모든 값 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1447095934 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 값 제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a526029965 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 값 유지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b618238139 = messageFormatterFn((function(  ) {
  return function(d) { return "집합 값 유지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a178422583 = messageFormatterFn((function(  ) {
  return function(d) { return "필터링된 값 유지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1730291722 = messageFormatterFn((function(  ) {
  return function(d) { return "집합에서 모든 값 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1418583674 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 값으로 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1617216849 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 값 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a200061830 = messageFormatterFn((function(  ) {
  return function(d) { return "선택을 해제할 경우의 결과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2112105403 = messageFormatterFn((function(  ) {
  return function(d) { return "새 매개 변수 만들기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2106729362 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b823259771 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1909932533 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 및 시간 유형 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b978758846 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 유형 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1882068389 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1025763050 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 동작 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1553131404 = messageFormatterFn((function(  ) {
  return function(d) { return "시트로 이동 동작 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1160245346 = messageFormatterFn((function(  ) {
  return function(d) { return "하이라이트 동작 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a513084119 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수 동작 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b649886960 = messageFormatterFn((function(  ) {
  return function(d) { return "집합 동작 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b576093283 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 동작 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b277770338 = messageFormatterFn((function(  ) {
  return function(d) { return "오류 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2006816299 = messageFormatterFn((function(  ) {
  return function(d) { return "원본 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1086265842 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1441576987 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜/시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a392860073 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a526930095 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1540920381 = messageFormatterFn((function(  ) {
  return function(d) { return "하이퍼링크 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a870729884 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1861217440 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b27989799 = messageFormatterFn((function(  ) {
  return function(d) { return "계속"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1352411445 = messageFormatterFn((function(  ) {
  return function(d) { return "삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2075878286 = messageFormatterFn((function(  ) {
  return function(d) { return "정수 유형 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1882884498 = messageFormatterFn((function(  ) {
  return function(d) { return "동작 실행 결과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b433700833 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 항목이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1522903049 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b343146761 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a302817946 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 매개 변수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a820381522 = messageFormatterFn((function(  ) {
  return function(d) { return "실수 유형 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a144976543 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a581641247 = messageFormatterFn((function(  ) {
  return function(d) { return "집합에서 값 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1498629599 = messageFormatterFn((function(  ) {
  return function(d) { return "동작 실행 조건"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a459699550 = messageFormatterFn((function(  ) {
  return function(d) { return "시트 선택 위치:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a384639127 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 원본 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b962530819 = messageFormatterFn((function(  ) {
  return function(d) { return "원본 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1438243417 = messageFormatterFn((function(  ) {
  return function(d) { return "스토리 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a692371647 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열 유형 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b732249230 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b410318508 = messageFormatterFn((function(  ) {
  return function(d) { return "추가하려면 클릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a521694617 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2146216086 = messageFormatterFn((function(  ) {
  return function(d) { return "행 " + d.rowIndex; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b274998488 = messageFormatterFn((function(  ) {
  return function(d) { return "원본 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1811004013 = messageFormatterFn((function(  ) {
  return function(d) { return "원본 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2027330658 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b274579401 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2035843985 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 필드를 지정하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1851264111 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1557266349 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b217551675 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b384577938 = messageFormatterFn((function(  ) {
  return function(d) { return "대상에서 하이라이트할 필드를 하나 이상 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a70543560 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b68910494 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 및 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1519744164 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 하이라이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b318950020 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1559422168 = messageFormatterFn((function(  ) {
  return function(d) { return "대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1274199265 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 대상 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a868123281 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 집합"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1580104307 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a401083436 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 매개 변수를 통해 다중 값 허용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a735026495 = messageFormatterFn((function(  ) {
  return function(d) { return "값 구분 기호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b456260555 = messageFormatterFn((function(  ) {
  return function(d) { return "값 구분 기호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2105129419 = messageFormatterFn((function(  ) {
  return function(d) { return "URL이 지원하지 않는 데이터 값 인코딩"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1749933856 = messageFormatterFn((function(  ) {
  return function(d) { return "구분 기호 이스케이프 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1934337612 = messageFormatterFn((function(  ) {
  return function(d) { return "구분 기호 이스케이프 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a12265986 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1293760505 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b877882883 = messageFormatterFn((function(  ) {
  return function(d) { return "다중 선택 구분 기호를 지정하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1232408289 = messageFormatterFn((function(  ) {
  return function(d) { return "다중 선택 이스케이프를 지정하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b942176068 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1325146016 = messageFormatterFn((function(  ) {
  return function(d) { return "새 브라우저 탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b917485789 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 페이지 개체가 없는 경우 새 탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a424418933 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 페이지 개체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b402917389 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1137531126 = messageFormatterFn((function(  ) {
  return function(d) { return "경고 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1740351624 = messageFormatterFn((function(  ) {
  return function(d) { return "워크시트 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1273826954 = messageFormatterFn((function(  ) {
  return function(d) { return "초과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1650655640 = messageFormatterFn((function(  ) {
  return function(d) { return "이상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a656848987 = messageFormatterFn((function(  ) {
  return function(d) { return "동작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1383444443 = messageFormatterFn((function(  ) {
  return function(d) { return "나를 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1168413500 = messageFormatterFn((function(  ) {
  return function(d) { return "알림이 잘못됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1842392 = messageFormatterFn((function(  ) {
  return function(d) { return "알림이 일시 중단됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a790186188 = messageFormatterFn((function(  ) {
  return function(d) { return "받는 사람만 이 알림을 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b285012378 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 사용자가 이 알림을 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1331323198 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 알림으로 돌아가기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1195393740 = messageFormatterFn((function(  ) {
  return function(d) { return "알림으로 돌아가기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2050711010 = messageFormatterFn((function(  ) {
  return function(d) { return "미만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1328139132 = messageFormatterFn((function(  ) {
  return function(d) { return "이하"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a388932207 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1495267124 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1149142517 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.alertSubject + "\" 알림의 소유자를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a547425591 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b215084199 = messageFormatterFn((function(  ) {
  return function(d) { return "참"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1709159166 = messageFormatterFn((function(  ) {
  return function(d) { return "거짓"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1729344847 = messageFormatterFn((function(  ) {
  return function(d) { return "실패"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b563483704 = messageFormatterFn((function(  ) {
  return function(d) { return "—"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1447215349 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정(" + d.viewName + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a847718488 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b564649105 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b796840118 = messageFormatterFn((function(  ) {
  return function(d) { return "작업"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a714133123 = messageFormatterFn((function(  ) {
  return function(d) { return "조건"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2108762374 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 상태"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b442396337 = messageFormatterFn((function(  ) {
  return function(d) { return "이메일 전송됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b883305641 = messageFormatterFn((function(  ) {
  return function(d) { return "빈도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b681726740 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a43371292 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 트리거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1631460057 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1433796134 = messageFormatterFn((function(  ) {
  return function(d) { return "알림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1453872031 = messageFormatterFn((function(  ) {
  return function(d) { return "운영자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a891324142 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1621999883 = messageFormatterFn((function(  ) {
  return function(d) { return "받는 사람"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1454593370 = messageFormatterFn((function(  ) {
  return function(d) { return "임계값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1585141408 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1068933695 = messageFormatterFn((function(  ) {
  return function(d) { return "알림 개요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b650442249 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2043660612 = messageFormatterFn((function(  ) {
  return function(d) { return "같음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b15483086 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정(자동 저장)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b648674431 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 1일 간격"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b366129271 = messageFormatterFn((function(  ) {
  return function(d) { return "가능한 한 자주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b363828961 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 1시간 간격"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a998549999 = messageFormatterFn((function(  ) {
  return function(d) { return "참인 경우 처음 한 번만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1066746552 = messageFormatterFn((function(  ) {
  return function(d) { return d.interval + "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b741110993 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 1주 간격"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1977376062 = messageFormatterFn((function(  ) {
  return function(d) { return "무효 날짜 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1091975311 = messageFormatterFn((function(  ) {
  return function(d) { return "무효"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1927388594 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 트리거: " + d.lastTriggeredTime; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1849986169 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1472958278 = messageFormatterFn((function(  ) {
  return function(d) { return "알림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2006901925 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1595534099 = messageFormatterFn((function(  ) {
  return function(d) { return "인터넷 연결을 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1967403640 = messageFormatterFn((function(  ) {
  return function(d) { return "알림을 로드할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a562654966 = messageFormatterFn((function(  ) {
  return function(d) { return "알림 로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1322496836 = messageFormatterFn((function(  ) {
  return function(d) { return "안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1956879220 = messageFormatterFn((function(  ) {
  return function(d) { return "트리거되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a285401352 = messageFormatterFn((function(  ) {
  return function(d) { return "알림 벨 기호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b485601732 = messageFormatterFn((function(  ) {
  return function(d) { return "만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a357918184 = messageFormatterFn((function(  ) {
  return function(d) { return "알림을 만들면 데이터가 알림 조건을 충족할 때 알림이 발송됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1451136113 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b319320996 = messageFormatterFn((function(  ) {
  return function(d) { return "차트의 숫자 축을 선택하십시오. 그런 다음 [만들기]를 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a39643565 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰에 대한 알림 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b945258453 = messageFormatterFn((function(  ) {
  return function(d) { return "원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1139788678 = messageFormatterFn((function(  ) {
  return function(d) { return d.recipientCount + "명의 받는 사람"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a745219481 = messageFormatterFn((function(  ) {
  return function(d) { return d.recipientCount + "명의 받는 사람"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1728042665 = messageFormatterFn((function(  ) {
  return function(d) { return "나를 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a486465370 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1872390491 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a767975074 = messageFormatterFn((function(  ) {
  return function(d) { return "일시 중단 날짜 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a691643349 = messageFormatterFn((function(  ) {
  return function(d) { return "일시 중단됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b168822134 = messageFormatterFn((function(  ) {
  return function(d) { return "정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1784800390 = messageFormatterFn((function(  ) {
  return function(d) { return "동작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a144038425 = messageFormatterFn((function(  ) {
  return function(d) { return "작성자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a604039796 = messageFormatterFn((function(  ) {
  return function(d) { return "외부 자산으로 돌아가기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1050050326 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스로 돌아가기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a429001940 = messageFormatterFn((function(  ) {
  return function(d) { return "필드로 돌아가기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b954911511 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블로 돌아가기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1613968115 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b377245065 = messageFormatterFn((function(  ) {
  return function(d) { return "인증"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a80506075 = messageFormatterFn((function(  ) {
  return function(d) { return "인증 주체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1882643786 = messageFormatterFn((function(  ) {
  return function(d) { return "지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2107708787 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b792922206 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1672428327 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1362279241 = messageFormatterFn((function(  ) {
  return function(d) { return "열 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a165753434 = messageFormatterFn((function(  ) {
  return function(d) { return "열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a46108421 = messageFormatterFn((function(  ) {
  return function(d) { return "열(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1013429353 = messageFormatterFn((function(  ) {
  return function(d) { return "결합된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1976260562 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1654971073 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 연결은 지원되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1641206029 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1091075611 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 데이터 원본 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a720338986 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a334320177 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2113968734 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 SQL 쿼리 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2084874956 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 SQL 쿼리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a941625271 = messageFormatterFn((function(  ) {
  return function(d) { return "클립보드로 복사하지 못했습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1955653744 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 SQL이 이 내장 데이터 원본에 사용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1531512303 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 SQL이 이 흐름에 사용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a7643144 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 SQL이 이 데이터 원본에 사용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b707019650 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 SQL이 이 연결에 사용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b429295842 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.queryName + "\"이(가) 클립보드에 복사되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a534437376 = messageFormatterFn((function(  ) {
  return function(d) { return "내장 데이터 원본이 사용자 지정 SQL을 사용하는 경우 업스트림 계보가 불완전할 수도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a543225727 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름이 사용자 지정 SQL을 사용하는 경우 업스트림 계보가 불완전할 수도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1100391304 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본이 사용자 지정 SQL을 사용하는 경우 업스트림 계보가 불완전할 수도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1661540504 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a719572615 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a26905698 = messageFormatterFn((function(  ) {
  return function(d) { return "나중에 다시 시도하십시오.\n\n정보가 아직 로드되지 않은 경우 콘텐츠 소유자이면 다시 게시해 보십시오.\n\n다시 게시해도 문제가 해결되지 않으면 Tableau 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b255061046 = messageFormatterFn((function(  ) {
  return function(d) { return "계보 정보를 계속 로드하는 중입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a294548266 = messageFormatterFn((function(  ) {
  return function(d) { return "계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b53499965 = messageFormatterFn((function(  ) {
  return function(d) { return "✔ 클립보드에 복사됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b765021600 = messageFormatterFn((function(  ) {
  return function(d) { return "계산 확장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1943795370 = messageFormatterFn((function(  ) {
  return function(d) { return "인증된 데이터 원본(추출)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b124457159 = messageFormatterFn((function(  ) {
  return function(d) { return "인증된 데이터 원본(라이브)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1852628630 = messageFormatterFn((function(  ) {
  return function(d) { return "인증된 가상 연결 테이블(추출)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a543931513 = messageFormatterFn((function(  ) {
  return function(d) { return "인증된 가상 연결 테이블(라이브)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a87382941 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(추출)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a162522918 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(라이브)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b640127246 = messageFormatterFn((function(  ) {
  return function(d) { return "예기치 않은 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1065015082 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터를 로드할 수 없습니다.\n\n콘텐츠 소유자인 경우 다시 게시해 보십시오.\n\n다시 게시해도 문제가 해결되지 않으면 Tableau 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b776250705 = messageFormatterFn((function(  ) {
  return function(d) { return "서버에서 오류가 발생했습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1709390357 = messageFormatterFn((function(  ) {
  return function(d) { return "너무 많은 결과에 대한 요청입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1754336097 = messageFormatterFn((function(  ) {
  return function(d) { return "요청 크기 제한 초과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1131646991 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2132178000 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a670666576 = messageFormatterFn((function(  ) {
  return function(d) { return "나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1773310308 = messageFormatterFn((function(  ) {
  return function(d) { return "서버가 사용 중입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1746989174 = messageFormatterFn((function(  ) {
  return function(d) { return "쿼리의 모든 결과를 표시할 수 없습니다.\n\n나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1527919158 = messageFormatterFn((function(  ) {
  return function(d) { return "시간 제한 초과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2052436445 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결 테이블(추출)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1793509146 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결 테이블(라이브)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b912075744 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자: " + d.displayName + ", 시간: " + d.updatedAt; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1804792118 = messageFormatterFn((function(  ) {
  return function(d) { return "품질 경고…"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1436792878 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 품질 경고"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b737470879 = messageFormatterFn((function(  ) {
  return function(d) { return "경고"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a341946932 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1274165970 = messageFormatterFn((function(  ) {
  return function(d) { return "범주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b386240035 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹화된 데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a378936735 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1686608301 = messageFormatterFn((function(  ) {
  return function(d) { return d.databaseName + "(" + d.databaseHostName + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2010496405 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b700086635 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 및 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a883193386 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1367850750 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1782536018 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2121364155 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1622126606 = messageFormatterFn((function(  ) {
  return function(d) { return "추출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b24423459 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a829731822 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 배치 페이지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b546223605 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b283079052 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b891935402 = messageFormatterFn((function(  ) {
  return function(d) { return "수정한 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1235100089 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a348084094 = messageFormatterFn((function(  ) {
  return function(d) { return "설명(데이터 원본)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1770074119 = messageFormatterFn((function(  ) {
  return function(d) { return "설명이 상속됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b704891671 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + " 테이블의 " + d.column + " 열에서 설명이 상속되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a346304364 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 " + d.datasource + "의 " + d.field + " 필드를 통해 " + d.table + " 테이블의 " + d.column + " 열에서 설명이 상속되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1833713315 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 " + d.datasource + "의 " + d.field + " 필드에서 설명이 상속되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b814646573 = messageFormatterFn((function(  ) {
  return function(d) { return "설명(통합 문서)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1711422058 = messageFormatterFn((function(  ) {
  return function(d) { return "복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1712436954 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 대시보드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1604065925 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 대시보드(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1174450413 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a634630764 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 데이터베이스(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1031566345 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 다운스트림 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1366409782 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 다운스트림 데이터 원본(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b138772864 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1451061857 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 흐름(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b90286745 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 렌즈"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a148146840 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 렌즈(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a693342910 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 메트릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a447307553 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 메트릭(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b374167973 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1717957596 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 소유자(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1616849967 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1493488848 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 시트(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1362232160 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1534950209 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 테이블(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b74767543 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 가상 연결 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b908838154 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 가상 연결 테이블(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1733844731 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 가상 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1852010682 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 가상 연결(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a552458932 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a759278571 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 통합 문서(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1531482831 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1993650341 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 편집…"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a603508732 = messageFormatterFn((function(  ) {
  return function(d) { return "태그 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b127860413 = messageFormatterFn((function(  ) {
  return function(d) { return "내장된 자산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1952790031 = messageFormatterFn((function(  ) {
  return function(d) { return "서버의 게시된 자산에 내장된 테이블 또는 파일이므로 이로부터 새 통합 문서를 만들 수 없습니다. 통합 문서에 내장된 파일은 다른 Tableau 사이트 사용자와 공유되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1759580767 = messageFormatterFn((function(  ) {
  return function(d) { return "내장된 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1881314206 = messageFormatterFn((function(  ) {
  return function(d) { return "내장된 데이터 원본(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1236968950 = messageFormatterFn((function(  ) {
  return function(d) { return "이 열은 어떠한 필드에서도 사용되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b41317872 = messageFormatterFn((function(  ) {
  return function(d) { return "이 열은 어떠한 흐름에서도 사용되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1017239544 = messageFormatterFn((function(  ) {
  return function(d) { return "아직 아무것도 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1172390335 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 대시보드가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2131696568 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 데이터베이스가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b341508242 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 데이터 원본이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a831201592 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 대시보드가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1503591905 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 데이터베이스가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1640299351 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 데이터 원본이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a734050318 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 흐름이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1951339899 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 렌즈가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1391813324 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 메트릭이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1565104519 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 소유자가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a474259277 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 시트가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1303614402 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1283893609 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 가상 연결 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1180873053 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 가상 연결이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b62373054 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 다운스트림 통합 문서가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a245324133 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 흐름이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a78017550 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 렌즈가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b122615197 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 메트릭이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a464252930 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 소유자가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1791350570 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 시트가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a725743047 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b415698898 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 가상 연결 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a766235308 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 가상 연결이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a565731609 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 통합 문서가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a963773278 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드는 어떠한 열에서도 사용되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1502295718 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드는 다른 필드를 참조하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b433001537 = messageFormatterFn((function(  ) {
  return function(d) { return "실행하지 못한 흐름에는 계보를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1598820191 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 데이터베이스가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1334598315 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 데이터 원본이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b337814904 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 업스트림 데이터베이스가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1574881854 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 업스트림 데이터 원본이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b142770123 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 업스트림 흐름이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a931997502 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 업스트림 렌즈가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1579722999 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 업스트림 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b108461314 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 업스트림 가상 연결 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1917895204 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 필터가 적용된 업스트림 가상 연결이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a624834700 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 흐름이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1042056761 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 렌즈가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b394331264 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1837960299 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 가상 연결 테이블이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b482800923 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 가상 연결이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2069966609 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블이 없는 가상 연결에는 계보를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a709799616 = messageFormatterFn((function(  ) {
  return function(d) { return "계보는 내장된 데이터 원본이 없는 통합 문서에는 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b453118395 = messageFormatterFn((function(  ) {
  return function(d) { return "오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b444044189 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Catalog가 완전히 구성되지 않았습니다. Tableau 관리자에게 요청하여 “tsm maintenance metadata-services enable” 명령을 실행하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b852842617 = messageFormatterFn((function(  ) {
  return function(d) { return "이 페이지의 정보를 찾을 수 없습니다. 아직 로드 중이거나, 볼 수 있는 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b21631696 = messageFormatterFn((function(  ) {
  return function(d) { return "이 페이지에 대한 정보를 로드할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b546715481 = messageFormatterFn((function(  ) {
  return function(d) { return "외부 자산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1334728260 = messageFormatterFn((function(  ) {
  return function(d) { return "추출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1061644097 = messageFormatterFn((function(  ) {
  return function(d) { return "부울 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a730511734 = messageFormatterFn((function(  ) {
  return function(d) { return "부울 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1743522404 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a46546056 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a294535573 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜/시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a177549818 = messageFormatterFn((function(  ) {
  return function(d) { return "정수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a450488952 = messageFormatterFn((function(  ) {
  return function(d) { return "실수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b778013632 = messageFormatterFn((function(  ) {
  return function(d) { return "공간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1784849515 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1553234742 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b967722428 = messageFormatterFn((function(  ) {
  return function(d) { return "튜플"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a830917126 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1600698391 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 날짜 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a745813267 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 날짜 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1647736308 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 날짜 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1334667742 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 날짜 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1922826198 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 날짜 및 시간 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2117076032 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 날짜 및 시간 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a688270433 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 날짜 및 시간 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b775825525 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 날짜 및 시간 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b374290847 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1054250404 = messageFormatterFn((function(  ) {
  return function(d) { return "집계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2139063839 = messageFormatterFn((function(  ) {
  return function(d) { return "집계 매개 변수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1168045502 = messageFormatterFn((function(  ) {
  return function(d) { return "자동 생성됨?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b777206166 = messageFormatterFn((function(  ) {
  return function(d) { return "구간차원 크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a313433131 = messageFormatterFn((function(  ) {
  return function(d) { return "조합 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b657492132 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 범주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b631516136 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1761265946 = messageFormatterFn((function(  ) {
  return function(d) { return "기본 서식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b292412087 = messageFormatterFn((function(  ) {
  return function(d) { return "구분 기호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a37339714 = messageFormatterFn((function(  ) {
  return function(d) { return "폴더"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1835062616 = messageFormatterFn((function(  ) {
  return function(d) { return "수식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1055459798 = messageFormatterFn((function(  ) {
  return function(d) { return "‘기타’ 항목이 있습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b121928742 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 참조가 있습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2031098754 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨집니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b707526827 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1211718006 = messageFormatterFn((function(  ) {
  return function(d) { return "역할"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1642665232 = messageFormatterFn((function(  ) {
  return function(d) { return "의미 체계 역할"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b448558231 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1257362260 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 지리적 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1740595394 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 지리적 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1679986977 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 지리적 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b974937719 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 지리적 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1219991458 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b717750103 = messageFormatterFn((function(  ) {
  return function(d) { return "지리적 그룹 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b41108332 = messageFormatterFn((function(  ) {
  return function(d) { return "계층 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1566617667 = messageFormatterFn((function(  ) {
  return function(d) { return d.FieldName + "(카운트)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b271599996 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 숫자 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b526545298 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 숫자 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a873228815 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 숫자 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1391962297 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 숫자 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1760580096 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 숫자 구간차원 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b957949718 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 숫자 구간차원 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a806651304 = messageFormatterFn((function(  ) {
  return function(d) { return "명목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a535062013 = messageFormatterFn((function(  ) {
  return function(d) { return "순서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1698716897 = messageFormatterFn((function(  ) {
  return function(d) { return "수량"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1961248150 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b239981228 = messageFormatterFn((function(  ) {
  return function(d) { return "차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b301537268 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1060692984 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b781632895 = messageFormatterFn((function(  ) {
  return function(d) { return "집합 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a496615272 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 텍스트 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2107867054 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 텍스트 계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1676051699 = messageFormatterFn((function(  ) {
  return function(d) { return "연속형 텍스트 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b6083427 = messageFormatterFn((function(  ) {
  return function(d) { return "불연속형 텍스트 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1550377367 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a808152946 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1232302867 = messageFormatterFn((function(  ) {
  return function(d) { return "필드(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1225646826 = messageFormatterFn((function(  ) {
  return function(d) { return "이 파일 유형에는 여러 테이블이 포함될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a293858272 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a351327994 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 경로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b480021881 = messageFormatterFn((function(  ) {
  return function(d) { return "이 파일 유형에는 단일 테이블만 포함될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a487887055 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a170884852 = messageFormatterFn((function(  ) {
  return function(d) { return "파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1015974001 = messageFormatterFn((function(  ) {
  return function(d) { return "필터: " + d.filteredItemName; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1532407847 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b797574551 = messageFormatterFn((function(  ) {
  return function(d) { return "출력 열 정보를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1236929053 = messageFormatterFn((function(  ) {
  return function(d) { return "출력 필드 정보를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1469460531 = messageFormatterFn((function(  ) {
  return function(d) { return "열로 출력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1347930925 = messageFormatterFn((function(  ) {
  return function(d) { return "필드로 출력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1486099806 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름 매개 변수는 계보 그래프에서 아직 지원되지 않습니다. 마지막 흐름 실행만 반영됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a260079106 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1269374883 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1996799667 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a806898599 = messageFormatterFn((function(  ) {
  return function(d) { return "열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b942177228 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b760347844 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 상태:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a234002500 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1753099478 = messageFormatterFn((function(  ) {
  return function(d) { return "연락처"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1733020786 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1505350647 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 이름 / 경로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1991308504 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b522335098 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1156787669 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브 / 마지막 추출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1404458431 = messageFormatterFn((function(  ) {
  return function(d) { return "위치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b361727977 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1393929867 = messageFormatterFn((function(  ) {
  return function(d) { return "소유 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1128200662 = messageFormatterFn((function(  ) {
  return function(d) { return "소유한 메트릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1801207477 = messageFormatterFn((function(  ) {
  return function(d) { return "소유한 가상 연결 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1688858087 = messageFormatterFn((function(  ) {
  return function(d) { return "소유한 가상 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1899224288 = messageFormatterFn((function(  ) {
  return function(d) { return "소유 통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1105289027 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2058166243 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b188207473 = messageFormatterFn((function(  ) {
  return function(d) { return "서버"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1368483415 = messageFormatterFn((function(  ) {
  return function(d) { return "서버 / 경로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2086872576 = messageFormatterFn((function(  ) {
  return function(d) { return "시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b190118363 = messageFormatterFn((function(  ) {
  return function(d) { return "태그"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b167699194 = messageFormatterFn((function(  ) {
  return function(d) { return "유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b125527631 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b284423597 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a876527302 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1402618691 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1961502251 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹화된 자산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1805474200 = messageFormatterFn((function(  ) {
  return function(d) { return d.name + "(그룹화됨)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a121298484 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹화된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1978110798 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 사용자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1695404308 = messageFormatterFn((function(  ) {
  return function(d) { return "호스트 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b610777563 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1485475738 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b513113730 = messageFormatterFn((function(  ) {
  return function(d) { return "계보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a643463502 = messageFormatterFn((function(  ) {
  return function(d) { return d.name + "(" + d.parentName + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1794924701 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b584474631 = messageFormatterFn((function(  ) {
  return function(d) { return "로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a640726869 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 세부 정보 로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1087252661 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1737996736 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1045169569 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1996279901 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1009167357 = messageFormatterFn((function(  ) {
  return function(d) { return "새 흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b358932663 = messageFormatterFn((function(  ) {
  return function(d) { return "새 통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b636711673 = messageFormatterFn((function(  ) {
  return function(d) { return "설명이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a365354315 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a126165612 = messageFormatterFn((function(  ) {
  return function(d) { return "사용할 수 있는 태그가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1764164529 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2087418195 = messageFormatterFn((function(  ) {
  return function(d) { return "이 자산은 프로젝트 또는 개인 공간에 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b9623921 = messageFormatterFn((function(  ) {
  return function(d) { return "해당 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b497266113 = messageFormatterFn((function(  ) {
  return function(d) { return "내장된 자산은 프로젝트 또는 개인 공간에 있을 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a908516835 = messageFormatterFn((function(  ) {
  return function(d) { return "출력 단계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1644704356 = messageFormatterFn((function(  ) {
  return function(d) { return "출력 단계(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b28862416 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1965808277 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자의 ID"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b894658791 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b380628698 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a911935040 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 권한 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b951742130 = messageFormatterFn((function(  ) {
  return function(d) { return "개인 공간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b473683000 = messageFormatterFn((function(  ) {
  return function(d) { return "+ " + d.count; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1417021078 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1368182890 = messageFormatterFn((function(  ) {
  return function(d) { return "쿼리 메타데이터(GraphiQL)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1002794891 = messageFormatterFn((function(  ) {
  return function(d) { return "참조된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1894619318 = messageFormatterFn((function(  ) {
  return function(d) { return "저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1039469658 = messageFormatterFn((function(  ) {
  return function(d) { return "스키마"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1381499650 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1898074113 = messageFormatterFn((function(  ) {
  return function(d) { return "보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1886602116 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 중인 필드(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1096359149 = messageFormatterFn((function(  ) {
  return function(d) { return "시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1464149550 = messageFormatterFn((function(  ) {
  return function(d) { return "시트(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1686410098 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 12주간의 조회수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b527038837 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a841741342 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b197621311 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1922815058 = messageFormatterFn((function(  ) {
  return function(d) { return "태그"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a180585448 = messageFormatterFn((function(  ) {
  return function(d) { return "태그…"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1311507892 = messageFormatterFn((function(  ) {
  return function(d) { return "대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b128197276 = messageFormatterFn((function(  ) {
  return function(d) { return "(총 " + d.count + "개)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a584073661 = messageFormatterFn((function(  ) {
  return function(d) { return "URL이 인식되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1055071930 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a783388325 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 데이터베이스(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a413857264 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 업스트림 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1706462161 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 업스트림 데이터 원본(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b254920281 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a312569432 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 흐름(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a604110624 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 렌즈"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1013858049 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 렌즈(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2056629529 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1598012198 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 테이블(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1069874512 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 가상 연결 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a488357743 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 가상 연결 테이블(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1585087170 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 가상 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1883814751 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 가상 연결(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1021526534 = messageFormatterFn((function(  ) {
  return function(d) { return "필드에서 사용됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1375340782 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름에서 사용됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1112125364 = messageFormatterFn((function(  ) {
  return function(d) { return " 이 데이터베이스 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b140423735 = messageFormatterFn((function(  ) {
  return function(d) { return " 이 테이블 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a710895481 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a871664087 = messageFormatterFn((function(  ) {
  return function(d) { return "간단히 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a909485203 = messageFormatterFn((function(  ) {
  return function(d) { return "자세한 정보 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b447332186 = messageFormatterFn((function(  ) {
  return function(d) { return "이 대시보드의 조회수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1852829647 = messageFormatterFn((function(  ) {
  return function(d) { return "이 시트의 뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1275787701 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2137823796 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결 테이블(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1485282109 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1228931772 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1433219448 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 데이터 커넥터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b722855715 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 데이터 커넥터 URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1819103629 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1384915446 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b105728274 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 ID"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b557561546 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1007841193 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서(" + d.count + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1438172198 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.ko, { one: function() { return d.COUNT_LOC + "개 열이 선택됨";}, other: function() { return d.COUNT_LOC + "개 열이 선택됨";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a1721293270 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.ko, { one: function() { return d.COUNT_LOC + "개 필드가 선택됨";}, other: function() { return d.COUNT_LOC + "개 필드가 선택됨";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b372580068 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.ko, { one: function() { return d.COUNT_LOC + "개 항목이 선택됨";}, other: function() { return d.COUNT_LOC + "개 항목이 선택됨";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a184941482 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs.ko, { one: function() { return d.COUNT_LOC + "개 테이블이 선택됨";}, other: function() { return d.COUNT_LOC + "개 테이블이 선택됨";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a2050195608 = messageFormatterFn((function(  ) {
  return function(d) { return d.countX + " / " + d.countN; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1036213243 = messageFormatterFn((function(  ) {
  return function(d) { return "정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2074630762 = messageFormatterFn((function(  ) {
  return function(d) { return "MySQL용 Alibaba AnalyticDB"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1392850767 = messageFormatterFn((function(  ) {
  return function(d) { return "Aster Database"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1053265893 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Athena"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2058551838 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Aurora"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1543452698 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon EMR Hadoop Hive"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1142636694 = messageFormatterFn((function(  ) {
  return function(d) { return "Azure SQL Data Warehouse"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1605666442 = messageFormatterFn((function(  ) {
  return function(d) { return "Google BigQuery"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1607870416 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM BigInsights"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1188146465 = messageFormatterFn((function(  ) {
  return function(d) { return "Box"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1584973323 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel(Box)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1411265123 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON 파일(Box)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b391180562 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일(Box)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b375588700 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel(Dropbox)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1778818354 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON 파일(Dropbox)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1022001891 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일(Dropbox)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1977930993 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel(Google Drive)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b396430397 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON 파일(Google Drive)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1825283336 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일(Google Drive)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a863735858 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel(OneDrive)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1725490944 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON 파일(OneDrive)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1444547499 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일(OneDrive)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b785292837 = messageFormatterFn((function(  ) {
  return function(d) { return "TIBCO 데이터 가상화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1187105702 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일(레거시)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1175904130 = messageFormatterFn((function(  ) {
  return function(d) { return "Databricks"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a450870894 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 데이터 엔진"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1186753976 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM DB2"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1739801935 = messageFormatterFn((function(  ) {
  return function(d) { return "Denodo"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1216234224 = messageFormatterFn((function(  ) {
  return function(d) { return "비정규화된 큐브"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b750077378 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba Data Lake Analytics"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1793157329 = messageFormatterFn((function(  ) {
  return function(d) { return "Apache Drill"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a195349712 = messageFormatterFn((function(  ) {
  return function(d) { return "Dropbox"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1015877718 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle Essbase"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b221817189 = messageFormatterFn((function(  ) {
  return function(d) { return "Exasol"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b739628405 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel(레거시)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b811506829 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1924574771 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel Reader"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b662970856 = messageFormatterFn((function(  ) {
  return function(d) { return "페더레이션됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a210267377 = messageFormatterFn((function(  ) {
  return function(d) { return "Firebird"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a752066470 = messageFormatterFn((function(  ) {
  return function(d) { return "기타 데이터베이스(JDBC)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a895212225 = messageFormatterFn((function(  ) {
  return function(d) { return "기타 데이터베이스(ODBC)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1840277186 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Analytics"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b146102834 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Sheets"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b652610636 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Cloud SQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a553185669 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Drive"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1359597973 = messageFormatterFn((function(  ) {
  return function(d) { return "Pivotal Greenplum Database"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1960966441 = messageFormatterFn((function(  ) {
  return function(d) { return "Cloudera Hadoop"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1988402098 = messageFormatterFn((function(  ) {
  return function(d) { return "Apache Hive"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1509543875 = messageFormatterFn((function(  ) {
  return function(d) { return "Hortonworks Hadoop Hive"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1963523328 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 데이터 엔진"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a418567756 = messageFormatterFn((function(  ) {
  return function(d) { return "Impala"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1885992129 = messageFormatterFn((function(  ) {
  return function(d) { return "인메모리 페더레이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2040445053 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1115265762 = messageFormatterFn((function(  ) {
  return function(d) { return "Kognitio"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a336907072 = messageFormatterFn((function(  ) {
  return function(d) { return "Kyvos"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1769258771 = messageFormatterFn((function(  ) {
  return function(d) { return "MapR Hadoop Hive"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b289008568 = messageFormatterFn((function(  ) {
  return function(d) { return "MariaDB"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2120560005 = messageFormatterFn((function(  ) {
  return function(d) { return "MarkLogic"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b145015301 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba MaxCompute"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a220675099 = messageFormatterFn((function(  ) {
  return function(d) { return "MemSQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1011484787 = messageFormatterFn((function(  ) {
  return function(d) { return "MonetDB"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b958844090 = messageFormatterFn((function(  ) {
  return function(d) { return "MongoDB BI 커넥터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a921931980 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Access"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b188854412 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Analysis Services"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2109196726 = messageFormatterFn((function(  ) {
  return function(d) { return "MySQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1888642197 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2030923059 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM PDA (Netezza)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1028519955 = messageFormatterFn((function(  ) {
  return function(d) { return "OData"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2111376488 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1176384786 = messageFormatterFn((function(  ) {
  return function(d) { return "공간 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b250859945 = messageFormatterFn((function(  ) {
  return function(d) { return "공간 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a678260390 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2000459904 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a587527145 = messageFormatterFn((function(  ) {
  return function(d) { return "Actian Matrix"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1175562170 = messageFormatterFn((function(  ) {
  return function(d) { return "PDF 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a287591346 = messageFormatterFn((function(  ) {
  return function(d) { return "PDF Reader"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1688111621 = messageFormatterFn((function(  ) {
  return function(d) { return "PostgreSQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2113970719 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft PowerPivot"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b422156179 = messageFormatterFn((function(  ) {
  return function(d) { return "Presto"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a324586742 = messageFormatterFn((function(  ) {
  return function(d) { return "Progress OpenEdge"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1526578849 = messageFormatterFn((function(  ) {
  return function(d) { return "QuBole Presto"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1868997395 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Redshift"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1916689457 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1380832417 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1846022261 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP NetWeaver Business Warehouse"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b52173022 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP HANA"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1702977439 = messageFormatterFn((function(  ) {
  return function(d) { return ""; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1376522207 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b820723757 = messageFormatterFn((function(  ) {
  return function(d) { return "SharePoint 목록"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1113939942 = messageFormatterFn((function(  ) {
  return function(d) { return "Snowflake"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1429972687 = messageFormatterFn((function(  ) {
  return function(d) { return "Spark SQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1061631323 = messageFormatterFn((function(  ) {
  return function(d) { return "Splunk"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a145310242 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1720979611 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft SQL Server"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1982097002 = messageFormatterFn((function(  ) {
  return function(d) { return "통계 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b776863224 = messageFormatterFn((function(  ) {
  return function(d) { return "통계 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b260278544 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP Sybase ASE"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2086371679 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP Sybase IQ"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1969857706 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata OLAP Connector"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1188808268 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1594180784 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1125800084 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a43173324 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 파일 판독기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1093115479 = messageFormatterFn((function(  ) {
  return function(d) { return "Actian Vector"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b672644726 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertica"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b337930243 = messageFormatterFn((function(  ) {
  return function(d) { return "VizEngine"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a34762962 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 데이터 커넥터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1177669452 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 데이터 커넥터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1871561492 = messageFormatterFn((function(  ) {
  return function(d) { return "ServiceNow ITSM"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1062517816 = messageFormatterFn((function(  ) {
  return function(d) { return "Anaplan"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a751691283 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Ads"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1611410264 = messageFormatterFn((function(  ) {
  return function(d) { return "Intuit QuickBooks Online(9.3-2018.1)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a730837146 = messageFormatterFn((function(  ) {
  return function(d) { return "Intuit QuickBooks Online"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1723368712 = messageFormatterFn((function(  ) {
  return function(d) { return "LinkedIn Sales Navigator"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1797452852 = messageFormatterFn((function(  ) {
  return function(d) { return "Marketo"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2071298243 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle Eloqua"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a494647512 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1979774223 = messageFormatterFn((function(  ) {
  return function(d) { return d.characters + "자 남음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2037013213 = messageFormatterFn((function(  ) {
  return function(d) { return "문제 제한을 초과함(현재 " + d.total + "자, 제한 " + d.maximum + "자)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b898127490 = messageFormatterFn((function(  ) {
  return function(d) { return "열 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2074589636 = messageFormatterFn((function(  ) {
  return function(d) { return "열 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b173446891 = messageFormatterFn((function(  ) {
  return function(d) { return "열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a941105942 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1692261379 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1064974274 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(추출)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1081342687 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본(라이브)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1796727784 = messageFormatterFn((function(  ) {
  return function(d) { return "설정 주체: " + d.name; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b164034930 = messageFormatterFn((function(  ) {
  return function(d) { return "인증 주체: " + d.name; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1218641118 = messageFormatterFn((function(  ) {
  return function(d) { return "이 자산 관련"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2077495579 = messageFormatterFn((function(  ) {
  return function(d) { return "이 자산의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b671219529 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs.ko, { one: function() { return d.MESSAGE_COUNT_LOC + "개 데이터 품질 경고";}, other: function() { return d.MESSAGE_COUNT_LOC + "개 데이터 품질 경고";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b188993081 = messageFormatterFn((function(  ) {
  return function(d) { return "이 열 관련"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b692031409 = messageFormatterFn((function(  ) {
  return function(d) { return "이 연결 관련"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1732807380 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터베이스 관련"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a393782262 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본 관련"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a221556511 = messageFormatterFn((function(  ) {
  return function(d) { return "이 흐름 관련"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1786242707 = messageFormatterFn((function(  ) {
  return function(d) { return "이 테이블 관련"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1107051450 = messageFormatterFn((function(  ) {
  return function(d) { return "이 연결의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1659426985 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터베이스의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2102102175 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1637099124 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1191039286 = messageFormatterFn((function(  ) {
  return function(d) { return "이 흐름의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b294623604 = messageFormatterFn((function(  ) {
  return function(d) { return "이 메트릭의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a945445960 = messageFormatterFn((function(  ) {
  return function(d) { return "이 테이블의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b736041343 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a474489750 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서의 업스트림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1740865270 = messageFormatterFn((function(  ) {
  return function(d) { return "인증됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1010360474 = messageFormatterFn((function(  ) {
  return function(d) { return "더 이상 사용되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b828210465 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 새로 고침 실패"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1312075444 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름 실행 실패"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1160098526 = messageFormatterFn((function(  ) {
  return function(d) { return "유지 관리 중"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1487514927 = messageFormatterFn((function(  ) {
  return function(d) { return "민감한 데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a33710888 = messageFormatterFn((function(  ) {
  return function(d) { return "오래된 데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1386195605 = messageFormatterFn((function(  ) {
  return function(d) { return "경고"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1216391813 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자: " + d.displayName + ", 시간: " + d.updatedAt; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1583328551 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1399200828 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1555469614 = messageFormatterFn((function(  ) {
  return function(d) { return d.databaseName + "(" + d.databaseHostName + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1197410841 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스(" + d.type + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1838468720 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1985951133 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1434866874 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a346456820 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1818424472 = messageFormatterFn((function(  ) {
  return function(d) { return "상속된 열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1439278105 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b206843982 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1529640961 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 대시보드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a383534414 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b688601212 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 다운스트림 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1491716667 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1368600064 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a622417876 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a367800069 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2110389886 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2110443759 = messageFormatterFn((function(  ) {
  return function(d) { return "다운스트림 통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1358989522 = messageFormatterFn((function(  ) {
  return function(d) { return "새 메시지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a225588961 = messageFormatterFn((function(  ) {
  return function(d) { return "메시지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a407158300 = messageFormatterFn((function(  ) {
  return function(d) { return "제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1719742925 = messageFormatterFn((function(  ) {
  return function(d) { return "아직 아무것도 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1320509504 = messageFormatterFn((function(  ) {
  return function(d) { return "오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1588973739 = messageFormatterFn((function(  ) {
  return function(d) { return "계보 정보를 계속 로드하는 중입니다. 나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a393516690 = messageFormatterFn((function(  ) {
  return function(d) { return "부분 결과를 표시하는 중입니다. 계보 정보를 계속 로드하는 중입니다. 나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a608845192 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Catalog가 완전히 구성되지 않았습니다. Tableau 관리자에게 요청하여 “tsm maintenance metadata-services enable” 명령을 실행하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a545754807 = messageFormatterFn((function(  ) {
  return function(d) { return "이 페이지의 정보를 사용할 수 없습니다. 콘텐츠 소유자인 경우 다시 게시해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a795565182 = messageFormatterFn((function(  ) {
  return function(d) { return "서버에서 오류가 발생했습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b910274965 = messageFormatterFn((function(  ) {
  return function(d) { return "이 페이지에 대한 정보를 로드할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a343469570 = messageFormatterFn((function(  ) {
  return function(d) { return "요청 크기 제한을 초과했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1802422373 = messageFormatterFn((function(  ) {
  return function(d) { return "부분 결과를 표시하는 중입니다. 요청 크기 제한을 초과했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1194874893 = messageFormatterFn((function(  ) {
  return function(d) { return "요청 속도 제한을 초과했습니다. 나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1127347126 = messageFormatterFn((function(  ) {
  return function(d) { return "부분 결과를 표시하는 중입니다. 요청 속도 제한을 초과했습니다. 나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a553957847 = messageFormatterFn((function(  ) {
  return function(d) { return "요청 시간 제한을 초과했습니다. 나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2049214694 = messageFormatterFn((function(  ) {
  return function(d) { return "부분 결과를 표시하는 중입니다. 요청 시간 제한을 초과했습니다. 나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2132740813 = messageFormatterFn((function(  ) {
  return function(d) { return "예기치 않은 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2142538886 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b311167657 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a798190170 = messageFormatterFn((function(  ) {
  return function(d) { return "파일(" + d.type + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b529832843 = messageFormatterFn((function(  ) {
  return function(d) { return "필터링됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b607312003 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1375691085 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 사용자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a674287505 = messageFormatterFn((function(  ) {
  return function(d) { return "호스트 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b923674956 = messageFormatterFn((function(  ) {
  return function(d) { return "로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1043447510 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a702686474 = messageFormatterFn((function(  ) {
  return function(d) { return "해당 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1625085320 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.USER_COUNT, 0, pluralFuncs.ko, { one: function() { return d.USER_COUNT_LOC + "명의 받는 사람";}, other: function() { return d.USER_COUNT_LOC + "명의 받는 사람";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a19873566 = messageFormatterFn((function(  ) {
  return function(d) { return "출력 단계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b896253525 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1989958694 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자의 ID"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2013979394 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b877957268 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 권한 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b148778351 = messageFormatterFn((function(  ) {
  return function(d) { return "보기 권한이 없는 자산에 대한 경고입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1825047429 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 권한 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1060132448 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1053997364 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1635551751 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 및 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1668862262 = messageFormatterFn((function(  ) {
  return function(d) { return "정수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b650054468 = messageFormatterFn((function(  ) {
  return function(d) { return "실수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a724577711 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1972737726 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1173902299 = messageFormatterFn((function(  ) {
  return function(d) { return "저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1177357094 = messageFormatterFn((function(  ) {
  return function(d) { return "보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b261497556 = messageFormatterFn((function(  ) {
  return function(d) { return "이메일 보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a554820027 = messageFormatterFn((function(  ) {
  return function(d) { return "여기서 이메일을 보낼 수 있는 사용 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b466125885 = messageFormatterFn((function(  ) {
  return function(d) { return "이메일을 보낼 사용자를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b22961454 = messageFormatterFn((function(  ) {
  return function(d) { return "시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1394429946 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b277579261 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1202098039 = messageFormatterFn((function(  ) {
  return function(d) { return "태그"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1418020377 = messageFormatterFn((function(  ) {
  return function(d) { return "대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a292448181 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 데이터베이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1971842091 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 업스트림 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a457390114 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1631552002 = messageFormatterFn((function(  ) {
  return function(d) { return "업스트림 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1867315757 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 데이터 커넥터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b111559375 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b69650951 = messageFormatterFn((function(  ) {
  return function(d) { return d.countX + "/" + d.countN; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1786369510 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Quality Warnings"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1606815550 = messageFormatterFn((function(  ) {
  return function(d) { return "카디널리티: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1947977295 = messageFormatterFn((function(  ) {
  return function(d) { return "(기본값)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1413479912 = messageFormatterFn((function(  ) {
  return function(d) { return "(검색됨)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2123437367 = messageFormatterFn((function(  ) {
  return function(d) { return "여기로 테이블 끌기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b561823365 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.tableCount, 0, pluralFuncs.ko, { one: function() { return "1개 테이블";}, other: function() { return d.formattedTableCount + "개 테이블";} }) + "로 구성되어 있습니다."; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a808863788 = messageFormatterFn((function(  ) {
  return function(d) { return d.name1 + " 대 " + d.name2; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b705069186 = messageFormatterFn((function(  ) {
  return function(d) { return "로드 중"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1510171243 = messageFormatterFn((function(  ) {
  return function(d) { return "논리적 테이블: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a155511290 = messageFormatterFn((function(  ) {
  return function(d) { return "다대다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1133689155 = messageFormatterFn((function(  ) {
  return function(d) { return "다대일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1173913827 = messageFormatterFn((function(  ) {
  return function(d) { return "새로운 기본도 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1436818448 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1449069659 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1223423976 = messageFormatterFn((function(  ) {
  return function(d) { return " 논리적 테이블 간의 차이점에 대해 알아보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a347280466 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.tableCount, 0, pluralFuncs.ko, { one: function() { return "1개의 물리적 테이블이";}, other: function() { return d.formattedTableCount + "개의 물리적 테이블이";} }) + " 논리적 테이블을 정의합니다. "; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a949094025 = messageFormatterFn((function(  ) {
  return function(d) { return "일대다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a970120270 = messageFormatterFn((function(  ) {
  return function(d) { return "일대일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1577302722 = messageFormatterFn((function(  ) {
  return function(d) { return "물리적 테이블: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1441247820 = messageFormatterFn((function(  ) {
  return function(d) { return "관련 필드: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1686018718 = messageFormatterFn((function(  ) {
  return function(d) { return "관계: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1600725013 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.truncatedAmount + "개 이상)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1840264797 = messageFormatterFn((function(  ) {
  return function(d) { return "여기에 테이블을 끌어놓아 관계를 만드십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1227035316 = messageFormatterFn((function(  ) {
  return function(d) { return "더 많은 데이터가 필요하십니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a598815414 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "이 논리적 테이블을 두 번 클릭하면 해당 물리적 " + plural(d.tableCount, 0, pluralFuncs.ko, { one: function() { return "테이블";}, other: function() { return "테이블";} }) + "을 볼 수 있습니다."; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b2022042907 = messageFormatterFn((function(  ) {
  return function(d) { return "유니온"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b850858269 = messageFormatterFn((function(  ) {
  return function(d) { return "유니온으로 통합된 테이블: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a726146208 = messageFormatterFn((function(  ) {
  return function(d) { return "다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1590395735 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 테이블로 구성되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a562339164 = messageFormatterFn((function(  ) {
  return function(d) { return "Double click "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b32135410 = messageFormatterFn((function(  ) {
  return function(d) { return " to build a join or union."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1409611778 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables to "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a639136564 = messageFormatterFn((function(  ) {
  return function(d) { return " to relate them"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1223758381 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag out additional base tables to enable multi-fact analysis."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1863797195 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a570284834 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 추가 또는 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1810151544 = messageFormatterFn((function(  ) {
  return function(d) { return "추가 리소스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a967138458 = messageFormatterFn((function(  ) {
  return function(d) { return "적용된 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1479482204 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 위치: " + d.date; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a208972422 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a742025832 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b460515738 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 가이드 닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a494897495 = messageFormatterFn((function(  ) {
  return function(d) { return "열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b263780564 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 고유 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b439891454 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 고유 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2106031980 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b766779494 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1997141646 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1425599109 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + "은(는) 예측보다 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1355810601 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + "은(는) 예측보다 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b518493223 = messageFormatterFn((function(  ) {
  return function(d) { return "예기치 않은 값임"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b220267764 = messageFormatterFn((function(  ) {
  return function(d) { return "기간별 추세를 바탕으로 중요한 데이터 변경이 감지되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a441240836 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 및 매개 변수 설정이 변경되었습니다. 현재 설정에 사용할 수 있는 데이터 변경이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2019907437 = messageFormatterFn((function(  ) {
  return function(d) { return "중요한 데이터 변경(" + d.NumberOfSignals + "개)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a663363758 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 24시간 동안 이 뷰에서 예기치 않은 데이터 변경이 발견되지 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b741524327 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + ": 예측보다 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1569729468 = messageFormatterFn((function(  ) {
  return function(d) { return "예측보다 낮음: " + d.timeStamp + "에 발견"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b811312835 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + ": 예측보다 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b299877024 = messageFormatterFn((function(  ) {
  return function(d) { return "예측보다 높음: " + d.timeStamp + "에 발견"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1004042427 = messageFormatterFn((function(  ) {
  return function(d) { return "예기치 않은 값임"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a858199653 = messageFormatterFn((function(  ) {
  return function(d) { return d.unexpectedValue + "은(는) " + d.aggTargetMeasureLabel + "의 예측된 값보다 현저히 낮습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a788411145 = messageFormatterFn((function(  ) {
  return function(d) { return d.unexpectedValue + "은(는) " + d.aggTargetMeasureLabel + "의 예측된 값보다 현저히 높습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b430824889 = messageFormatterFn((function(  ) {
  return function(d) { return "이 정보를 검색하는 데 문제가 있습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b639182789 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionNames + "에 대한 " + d.aggTargetMeasureLabel; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b705677821 = messageFormatterFn((function(  ) {
  return function(d) { return "예측 범위보다 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1256800366 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a9286767 = messageFormatterFn((function(  ) {
  return function(d) { return "예측 범위보다 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1573803841 = messageFormatterFn((function(  ) {
  return function(d) { return "사용할 수 없는 예측 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a478061537 = messageFormatterFn((function(  ) {
  return function(d) { return d.DATE + " " + d.TIMESTAMP + " " + d.RELATIVE_TIME + "에 데이터 변경이 감지되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b516092269 = messageFormatterFn((function(  ) {
  return function(d) { return d.truncatedHeader + "..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b15250978 = messageFormatterFn((function(  ) {
  return function(d) { return "예측 범위 이내"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a191957307 = messageFormatterFn((function(  ) {
  return function(d) { return "14일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b480937437 = messageFormatterFn((function(  ) {
  return function(d) { return "최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2029662861 = messageFormatterFn((function(  ) {
  return function(d) { return "1일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1996983738 = messageFormatterFn((function(  ) {
  return function(d) { return "7일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1973098820 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 변경을 식별하는 것이 유용했습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1725448424 = messageFormatterFn((function(  ) {
  return function(d) { return d.MIN + " ~ " + d.MAX; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b147017998 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a109422367 = messageFormatterFn((function(  ) {
  return function(d) { return "예측 범위를 추정하기 위해 Tableau는 데이터를 새로 고칠 때마다 이 측정값의 값을 자동으로 기록하여 기계 학습 모델을 학습시킵니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1808983353 = messageFormatterFn((function(  ) {
  return function(d) { return "모델은 차트에 표시된 것보다 더 많은 기간별 레코드를 사용할 수 있습니다(최대 960개의 데이터 요소)."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b698641533 = messageFormatterFn((function(  ) {
  return function(d) { return "이 예측 범위에 대한 정보입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1988886583 = messageFormatterFn((function(  ) {
  return function(d) { return "귀하의 답변은 기록되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1799771256 = messageFormatterFn((function(  ) {
  return function(d) { return "피드백을 주셔서 감사합니다!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b252653716 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1463378684 = messageFormatterFn((function(  ) {
  return function(d) { return "전체: 지난 " + d.numDays + "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b953400586 = messageFormatterFn((function(  ) {
  return function(d) { return "최신: 지난 " + d.numHours + "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1649338088 = messageFormatterFn((function(  ) {
  return function(d) { return "중요한 데이터 변경 정보를 더 이상 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b746770917 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 마크의 데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1025006487 = messageFormatterFn((function(  ) {
  return function(d) { return "이 " + d.paneTypeText + "의 데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b453085765 = messageFormatterFn((function(  ) {
  return function(d) { return d.thisItem + "의 총 데이터가 미리 필터링된 결과 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a612116995 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 요약"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1180178076 = messageFormatterFn((function(  ) {
  return function(d) { return "순위: " + d.currentIndex + "/" + d.totalNumber + ", 기준: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2006228516 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b97975151 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬 순서: " + d.sortDirection + ". 기반: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1732070967 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2012089430 = messageFormatterFn((function(  ) {
  return function(d) { return d.shelfType; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2052858508 = messageFormatterFn((function(  ) {
  return function(d) { return d.paneTypeText + " 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1712117645 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자가 이 " + d.paneTypeText + "을(를) 이해하는 데 도움이 되는 설명을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1818004812 = messageFormatterFn((function(  ) {
  return function(d) { return d.paneTypeText + " 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1257282452 = messageFormatterFn((function(  ) {
  return function(d) { return "이상값 감지 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b63264583 = messageFormatterFn((function(  ) {
  return function(d) { return "이 이상값에 대한 가능한 설명을 보시겠습니까? 설명을 설정하려면 다음 연락처로 문의하십시오. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b791373386 = messageFormatterFn((function(  ) {
  return function(d) { return "이상값 마크를 찾을 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1046809632 = messageFormatterFn((function(  ) {
  return function(d) { return "이상값 감지(1)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1952921993 = messageFormatterFn((function(  ) {
  return function(d) { return d.MeasureName + ": " + d.MeasureValue; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1277804969 = messageFormatterFn((function(  ) {
  return function(d) { return "높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a101213909 = messageFormatterFn((function(  ) {
  return function(d) { return "낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a252669616 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 마크는 동일한 비주얼리제이션의 다른 마크와 비교하여 정상이 아닌 것으로 감지되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b31096765 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 마크는 선택한 비주얼리제이션의 다른 마크와 비교하여 정상이 아닌 것으로 감지되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a892937591 = messageFormatterFn((function(  ) {
  return function(d) { return "이상값 감지(" + d.NumberOfOutliers + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a925261520 = messageFormatterFn((function(  ) {
  return function(d) { return "이상값 감지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1340516390 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1948604277 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 업데이트할 수 없습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1364864244 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터를 사용할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1726209556 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1553080995 = messageFormatterFn((function(  ) {
  return function(d) { return "뒤로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a614530912 = messageFormatterFn((function(  ) {
  return function(d) { return d.recordCount + "개의 레코드가 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b753560660 = messageFormatterFn((function(  ) {
  return function(d) { return "1개의 레코드가 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b52790512 = messageFormatterFn((function(  ) {
  return function(d) { return d.recordCount + "개의 레코드가 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1239038812 = messageFormatterFn((function(  ) {
  return function(d) { return "1개의 레코드가 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b326304799 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 가이드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a847101167 = messageFormatterFn((function(  ) {
  return function(d) { return "도움말"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1244983363 = messageFormatterFn((function(  ) {
  return function(d) { return "특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1300850225 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2052567338 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b143860483 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b507868246 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 및 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b278852424 = messageFormatterFn((function(  ) {
  return function(d) { return "지리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1538179797 = messageFormatterFn((function(  ) {
  return function(d) { return "수준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b193689384 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1214726647 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자 구간차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1540844983 = messageFormatterFn((function(  ) {
  return function(d) { return "기타"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b267765367 = messageFormatterFn((function(  ) {
  return function(d) { return "집합"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b807208032 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2137244635 = messageFormatterFn((function(  ) {
  return function(d) { return "변화한 특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a431164014 = messageFormatterFn((function(  ) {
  return function(d) { return "레이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1562401805 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2035050460 = messageFormatterFn((function(  ) {
  return function(d) { return d.includedDataPointCount + "개의 데이터 요소가 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1567038505 = messageFormatterFn((function(  ) {
  return function(d) { return "마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a429245091 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b686158293 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1975234583 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 중앙값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b731058121 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 중앙값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b818804747 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a544711065 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b904429714 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 마크에 적용된 필터가 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b415142538 = messageFormatterFn((function(  ) {
  return function(d) { return "이 마크에 적용된 필터가 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a826447796 = messageFormatterFn((function(  ) {
  return function(d) { return "이 비주얼리제이션에 적용된 필터가 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b443876252 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 " + d.N + "번째 백분위수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1633039024 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1896966528 = messageFormatterFn((function(  ) {
  return function(d) { return "1개의 데이터 요소가 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1927673824 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1723270197 = messageFormatterFn((function(  ) {
  return function(d) { return "행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a873278350 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1693645843 = messageFormatterFn((function(  ) {
  return function(d) { return "오름차순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b889918037 = messageFormatterFn((function(  ) {
  return function(d) { return "내림차순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b232704418 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a901547920 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2008181439 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a997358735 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a816183832 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 합계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1690438550 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 합계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a730900895 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b555488595 = messageFormatterFn((function(  ) {
  return function(d) { return "이 " + d.paneTypeText; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1997114857 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1188816508 = messageFormatterFn((function(  ) {
  return function(d) { return "유효한 URL을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1422806893 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a561938209 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b582822768 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b524388834 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1998767777 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a72295974 = messageFormatterFn((function(  ) {
  return function(d) { return "Detecting Data Changes..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b940261951 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 미리 보기를 생성하려면 분석 확장 프로그램 테이블 변경 내용을 적용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b341020639 = messageFormatterFn((function(  ) {
  return function(d) { return "구간차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b3524097 = messageFormatterFn((function(  ) {
  return function(d) { return "계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1248638625 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1283826070 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명을 바꿀 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1893827617 = messageFormatterFn((function(  ) {
  return function(d) { return "카디널리티"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1376674638 = messageFormatterFn((function(  ) {
  return function(d) { return "값 복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b38330985 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 미리 보기 사용 불가능"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b243868217 = messageFormatterFn((function(  ) {
  return function(d) { return "관계 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1026035679 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 '" + d.fieldName + "'인 필드 또는 논리적 테이블이 이미 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2054453794 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1404584745 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1748495940 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldCount + "개 필드 " + d.rowCount + "개 행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1483849780 = messageFormatterFn((function(  ) {
  return function(d) { return "입력 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1572967817 = messageFormatterFn((function(  ) {
  return function(d) { return "입력 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1587946337 = messageFormatterFn((function(  ) {
  return function(d) { return "논리적 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b882981666 = messageFormatterFn((function(  ) {
  return function(d) { return "다대다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1636307741 = messageFormatterFn((function(  ) {
  return function(d) { return "다대일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b714340432 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1028527520 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 가능한 필드가 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a36444931 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 항목이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a341459153 = messageFormatterFn((function(  ) {
  return function(d) { return "일대다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b402404150 = messageFormatterFn((function(  ) {
  return function(d) { return "일대일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b373581185 = messageFormatterFn((function(  ) {
  return function(d) { return "출력 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1812085282 = messageFormatterFn((function(  ) {
  return function(d) { return "출력 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b431641908 = messageFormatterFn((function(  ) {
  return function(d) { return "관계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b586583170 = messageFormatterFn((function(  ) {
  return function(d) { return "행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1435594030 = messageFormatterFn((function(  ) {
  return function(d) { return "별칭 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2056992379 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 필드 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b689268595 = messageFormatterFn((function(  ) {
  return function(d) { return "오름차순(A~Z)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1757978398 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블별 오름차순(A~Z)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a532666748 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 순서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1202642076 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 정렬:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a997085868 = messageFormatterFn((function(  ) {
  return function(d) { return "수정한 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a851842471 = messageFormatterFn((function(  ) {
  return function(d) { return "내림차순(Z~A)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a852124216 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블별 내림차순(Z~A)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1803112583 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1837983599 = messageFormatterFn((function(  ) {
  return function(d) { return "논리적 테이블 " + d.tableName + "에 " + d.numCols + "개의 열이 있으며, 이는 미리 보기 제한인 " + d.colLimit + "개 열을 초과합니다. 이 테이블의 콘텐츠를 보려면 테이블의 열 수를 줄이거나 뷰를 작성하거나 데이터 보기를 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a193542827 = messageFormatterFn((function(  ) {
  return function(d) { return "자동 업데이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1557942622 = messageFormatterFn((function(  ) {
  return function(d) { return "지금 업데이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1887152521 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1094983589 = messageFormatterFn((function(  ) {
  return function(d) { return "특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1549094937 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1460949570 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1683603995 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a386480274 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 및 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1334046416 = messageFormatterFn((function(  ) {
  return function(d) { return "지리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2025588413 = messageFormatterFn((function(  ) {
  return function(d) { return "수준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1876512704 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b739258127 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자 구간차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1053436367 = messageFormatterFn((function(  ) {
  return function(d) { return "기타"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1345133473 = messageFormatterFn((function(  ) {
  return function(d) { return "집합"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1262994056 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b548730685 = messageFormatterFn((function(  ) {
  return function(d) { return "변화한 특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b564114789 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명 " + d.NAME + "에 대한 추가 옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1806687563 = messageFormatterFn((function(  ) {
  return function(d) { return "null"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b602952439 = messageFormatterFn((function(  ) {
  return function(d) { return "물리적 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1719848687 = messageFormatterFn((function(  ) {
  return function(d) { return "원격 필드명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1982268990 = messageFormatterFn((function(  ) {
  return function(d) { return "유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b183440038 = messageFormatterFn((function(  ) {
  return function(d) { return "Image"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1825180958 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1703561011 = messageFormatterFn((function(  ) {
  return function(d) { return "교차 데이터베이스 조인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1578448745 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau를 사용하여 교차 데이터베이스 조인 수행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1296725072 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 또는 라이브 데이터베이스 연결을 사용하여 교차 데이터베이스 조인을 수행합니다. 라이브 데이터베이스 연결이 사용된 경우 파일 연결의 데이터가 일시적으로 해당 데이터베이스로 이동될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1545161410 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2129172517 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터베이스 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b718969284 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a209363305 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2086692686 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1004808088 = messageFormatterFn((function(  ) {
  return function(d) { return "추출이 데이터 하위 집합을 포함합니다. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1753998478 = messageFormatterFn((function(  ) {
  return function(d) { return "추출에 데이터 하위 집합이 포함됩니다. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b150092024 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 데이터 원본으로 전환하거나 탭을 전환하면 자동으로 추출이 만들어집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a68105649 = messageFormatterFn((function(  ) {
  return function(d) { return "추출이 모든 데이터를 포함합니다. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1667453931 = messageFormatterFn((function(  ) {
  return function(d) { return "추출에 모든 데이터가 포함됩니다. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a901096827 = messageFormatterFn((function(  ) {
  return function(d) { return "문자 집합:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a798796906 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 항목이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2017418017 = messageFormatterFn((function(  ) {
  return function(d) { return "로캘:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1408108455 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 한정자:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1630976044 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 구분 기호:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1529791642 = messageFormatterFn((function(  ) {
  return function(d) { return "추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a362338521 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a983807820 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1688138519 = messageFormatterFn((function(  ) {
  return function(d) { return "연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1455575545 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1589349312 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a958480024 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b80873720 = messageFormatterFn((function(  ) {
  return function(d) { return "쉼표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2117542019 = messageFormatterFn((function(  ) {
  return function(d) { return "기타"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1206670820 = messageFormatterFn((function(  ) {
  return function(d) { return "세미콜론"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1251536121 = messageFormatterFn((function(  ) {
  return function(d) { return "공백"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b65261112 = messageFormatterFn((function(  ) {
  return function(d) { return "탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2131833072 = messageFormatterFn((function(  ) {
  return function(d) { return "세로 막대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b285938797 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2004767884 = messageFormatterFn((function(  ) {
  return function(d) { return "연결: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1987961006 = messageFormatterFn((function(  ) {
  return function(d) { return "동일한 연결의 데이터만 유니온할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a965558997 = messageFormatterFn((function(  ) {
  return function(d) { return "유니온으로 테이블 끌기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1338553190 = messageFormatterFn((function(  ) {
  return function(d) { return "여기로 테이블 끌기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1321401408 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 이 테이블을 찾거나 인식할 수 없습니다. 테이블을 제거하거나 바꾸십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b664911391 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b257385960 = messageFormatterFn((function(  ) {
  return function(d) { return "유니온의 테이블: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1035805502 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터베이스에는 유니온을 사용할 수 없으므로 선택한 첫 번째 테이블만 추가됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1451279110 = messageFormatterFn((function(  ) {
  return function(d) { return "추출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b118562723 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1337518138 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b564007672 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1710911455 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 필터 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1249922635 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1297851500 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1837364957 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a402753056 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1424696806 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1147199867 = messageFormatterFn((function(  ) {
  return function(d) { return "복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1833092715 = messageFormatterFn((function(  ) {
  return function(d) { return "오류 메시지 복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a705267755 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 주소 복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a51498543 = messageFormatterFn((function(  ) {
  return function(d) { return "해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1975381978 = messageFormatterFn((function(  ) {
  return function(d) { return "오류 코드: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1307283839 = messageFormatterFn((function(  ) {
  return function(d) { return "오류가 클립보드에 복사됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1307250567 = messageFormatterFn((function(  ) {
  return function(d) { return "지원 센터로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1742146321 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1071352678 = messageFormatterFn((function(  ) {
  return function(d) { return "동작을 완료할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1818101971 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b798912332 = messageFormatterFn((function(  ) {
  return function(d) { return d.device + " 레이아웃 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1625703030 = messageFormatterFn((function(  ) {
  return function(d) { return "기기 미리 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1990041619 = messageFormatterFn((function(  ) {
  return function(d) { return "기기 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1354078340 = messageFormatterFn((function(  ) {
  return function(d) { return "모델"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a643769591 = messageFormatterFn((function(  ) {
  return function(d) { return "가로 모드로 전환"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b267537399 = messageFormatterFn((function(  ) {
  return function(d) { return "세로 모드로 전환"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b337455136 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Mobile 앱"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1165656217 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Mobile을 실행하는 기기의 사용 가능한 화면 크기를 표시하기 위해 미리 보기 프레임을 조정합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b302500405 = messageFormatterFn((function(  ) {
  return function(d) { return "https://help.tableau.com/current/pro/desktop/ko-kr/dates_custom_date_formats.htm"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b985100176 = messageFormatterFn((function(  ) {
  return function(d) { return "서식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a733749962 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1440432266 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b457262824 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a533933943 = messageFormatterFn((function(  ) {
  return function(d) { return "축 편집 속성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1039851371 = messageFormatterFn((function(  ) {
  return function(d) { return "축 범위 옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b971951451 = messageFormatterFn((function(  ) {
  return function(d) { return "축 제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1597742432 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a806027883 = messageFormatterFn((function(  ) {
  return function(d) { return "고정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b752562554 = messageFormatterFn((function(  ) {
  return function(d) { return "고정된 끝"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1946548147 = messageFormatterFn((function(  ) {
  return function(d) { return "고정된 시작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1873572191 = messageFormatterFn((function(  ) {
  return function(d) { return "일반"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1661799932 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1143549209 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO 분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b883867875 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO 요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1427842051 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO 주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1095603430 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO 연도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b719914851 = messageFormatterFn((function(  ) {
  return function(d) { return "0 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a732652071 = messageFormatterFn((function(  ) {
  return function(d) { return "독립"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b588527572 = messageFormatterFn((function(  ) {
  return function(d) { return "각 행 또는 열에 독립적인 축 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a762280194 = messageFormatterFn((function(  ) {
  return function(d) { return "삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b141591410 = messageFormatterFn((function(  ) {
  return function(d) { return "간격"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a69685515 = messageFormatterFn((function(  ) {
  return function(d) { return "유효한 날짜를 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1676211696 = messageFormatterFn((function(  ) {
  return function(d) { return "유효한 숫자를 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1706322575 = messageFormatterFn((function(  ) {
  return function(d) { return "양수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1270769171 = messageFormatterFn((function(  ) {
  return function(d) { return "로그 밑은 1보다 커야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a718105570 = messageFormatterFn((function(  ) {
  return function(d) { return "로그 축 원점은 0보다 커야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b115147604 = messageFormatterFn((function(  ) {
  return function(d) { return "로그"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1012683655 = messageFormatterFn((function(  ) {
  return function(d) { return "주 눈금선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2142076797 = messageFormatterFn((function(  ) {
  return function(d) { return "주 눈금선 간격은 0보다 커야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a435561725 = messageFormatterFn((function(  ) {
  return function(d) { return "보조 눈금선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a360161407 = messageFormatterFn((function(  ) {
  return function(d) { return "보조 눈금선 간격은 0보다 커야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b586126516 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b98501188 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1298862783 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1539919216 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1322916997 = messageFormatterFn((function(  ) {
  return function(d) { return "범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1658377276 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a659969611 = messageFormatterFn((function(  ) {
  return function(d) { return "반전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b34565160 = messageFormatterFn((function(  ) {
  return function(d) { return "눈금"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1722790124 = messageFormatterFn((function(  ) {
  return function(d) { return "초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1364105266 = messageFormatterFn((function(  ) {
  return function(d) { return "시간 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1283611425 = messageFormatterFn((function(  ) {
  return function(d) { return "부제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1988155462 = messageFormatterFn((function(  ) {
  return function(d) { return "대칭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b357173115 = messageFormatterFn((function(  ) {
  return function(d) { return "이중 축 동기화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a43018734 = messageFormatterFn((function(  ) {
  return function(d) { return "눈금선 간격"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1623430061 = messageFormatterFn((function(  ) {
  return function(d) { return "눈금선 간격(거듭제곱)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a620754707 = messageFormatterFn((function(  ) {
  return function(d) { return "눈금선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1099709553 = messageFormatterFn((function(  ) {
  return function(d) { return "눈금선 원점"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b745948411 = messageFormatterFn((function(  ) {
  return function(d) { return "제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a130664370 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 행 또는 열에서 균일한 축 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b955617237 = messageFormatterFn((function(  ) {
  return function(d) { return "균일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1099516787 = messageFormatterFn((function(  ) {
  return function(d) { return "단위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1788176876 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b735268605 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1774831935 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Title Using Value"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1004252416 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a696299076 = messageFormatterFn((function(  ) {
  return function(d) { return "오른쪽 아래 셀: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b881157808 = messageFormatterFn((function(  ) {
  return function(d) { return ":"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b657344290 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a339225935 = messageFormatterFn((function(  ) {
  return function(d) { return "왼쪽 위 셀: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1206139423 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a743717137 = messageFormatterFn((function(  ) {
  return function(d) { return "별칭 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1760575555 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1207376203 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1992200938 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1383184495 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1695217264 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b101531363 = messageFormatterFn((function(  ) {
  return function(d) { return "높이 (픽셀)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1686892462 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a574265811 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b218376101 = messageFormatterFn((function(  ) {
  return function(d) { return "높이 맞추기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b161843928 = messageFormatterFn((function(  ) {
  return function(d) { return "너비 맞추기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a324112650 = messageFormatterFn((function(  ) {
  return function(d) { return "너비(픽셀)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1066081287 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1675097730 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a890667172 = messageFormatterFn((function(  ) {
  return function(d) { return "스크립트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b288708701 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 스크립트 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a660363250 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1087682401 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b697606569 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 분석 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1625745380 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1687835041 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서에 대해 구성된 분석 확장 프로그램이 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1436740452 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1975820589 = messageFormatterFn((function(  ) {
  return function(d) { return "EPS URL cannot be empty"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a437320002 = messageFormatterFn((function(  ) {
  return function(d) { return "항상 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b18417068 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a507041316 = messageFormatterFn((function(  ) {
  return function(d) { return "자동(멤버 수가 큰 경우 제외)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a268607687 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1480562704 = messageFormatterFn((function(  ) {
  return function(d) { return "사용할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a781820369 = messageFormatterFn((function(  ) {
  return function(d) { return "이 측정값에는 필요한 집계(AVG)를 사용할 수 없기 때문에 " + d.fieldName + "을(를) 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b420727831 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 자동으로 숨겨지기 때문에 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a799668221 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 불연속형 차원이 아니기 때문에 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2030865163 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 연속형 측정값이 아니기 때문에 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1250720168 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 해당 범위 정보를 사용할 수 없기 때문에 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1010121950 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 기하 도형, 위도 및 경도가 지원되지 않기 때문에 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1180352590 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 500개 이상의 멤버가 있기 때문에 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1841405789 = messageFormatterFn((function(  ) {
  return function(d) { return "유효하지 않은 필드는 고려 사항으로 선택할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a116119034 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 해당 필드 유형이 지원되지 않기 때문에 설명에 사용할 수 없습니다. 차원에 대해 지원되는 필드 유형은 데이터 원본의 데이터베이스에 정의된, 계산된 필드 및 물리적 열입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1388216882 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 해당 필드 유형이 지원되지 않기 때문에 설명에 사용할 수 없습니다. 측정값에 대해 지원되는 필드 유형은 데이터 원본의 데이터베이스 정의된 계산된 필드 및 물리적 열입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b433460932 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 해당 데이터 유형이 지원되지 않기 때문에 설명에 사용할 수 없습니다. 차원에 대해 지원되는 데이터 유형은 문자열, 숫자 및 부울입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1383301644 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 해당 데이터 유형이 지원되지 않기 때문에 설명에 사용할 수 없습니다. 측정값에 대해 지원되는 데이터 유형은 숫자입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1469451556 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b363691405 = messageFormatterFn((function(  ) {
  return function(d) { return "평균 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a47150510 = messageFormatterFn((function(  ) {
  return function(d) { return "평균을 설명합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1768596039 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b132080753 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 하나 이상의 레코드에 대상 측정값 대부분의 레코드보다 훨씬 높거나 낮은 값이 있는 경우를 나타냅니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1209270405 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본에서 필드 메타데이터를 가져올 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b537207482 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1833667768 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명에 사용된 필드를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2058433809 = messageFormatterFn((function(  ) {
  return function(d) { return "포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b230381719 = messageFormatterFn((function(  ) {
  return function(d) { return "포함 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a655990916 = messageFormatterFn((function(  ) {
  return function(d) { return "연결되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1367257508 = messageFormatterFn((function(  ) {
  return function(d) { return "지원되지 않은 연결 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1765136482 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b68618313 = messageFormatterFn((function(  ) {
  return function(d) { return "마크의 평균 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1802490346 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 대상 측정값의 평균이 SUM과 상관 관계가 있는 경우를 설명합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b484828904 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1442209993 = messageFormatterFn((function(  ) {
  return function(d) { return "포함하지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a857919285 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서의 어떤 데이터 원본도 설명에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b207455085 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2135685234 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 null인 대상 측정값의 비율이 해당 측정값의 집계 값에 어떻게 기여할 수 있는지를 보여줍니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1866036742 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a949205819 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 기초 레코드의 수가 대상 측정값의 SUM과 상관 관계가 있는 경우를 설명합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1730105207 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1310032801 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a479640527 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값에 기여한 요소:\n\n이 설명 유형은 시각화되지 않은 차원의 값 분포가 분석된 마크의 집계 값에 기여할 수도 있는 경우를 나타냅니다. 이 유형의 설명은 합계, 카운트 및 평균에 사용됩니다.\n\n고유 특성:\n\n이 설명 유형은 또한 분석된 마크에 있는 시각화되지 않은 차원의 값 분포가 뷰의 다른 모든 마크에 대한 값 분포와는 달리 비정상적인 경우를 나타낼 수 있습니다.\n\n시각화되지 않은 차원은 데이터 원본에 존재하지만 뷰에서 현재 사용되지 않는 차원입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1559350889 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1652233879 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 시각화되지 않은 측정값의 평균이 분석된 마크의 집계 값에 기여할 수도 있음을 나타냅니다.\n\n시각화되지 않은 측정값은 데이터 원본에 존재하지만 뷰에서 현재 사용되지 않는 측정값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a723332703 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 측정값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2025161908 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값에 기여한 요소:\n\n이 설명 유형은 시각화되지 않은 차원의 단일 값이 분석된 마크의 집계 값에 기여할 수도 있는 경우를 나타냅니다. 이 설명은 차원의 모든 기초 레코드가 동일한 값을 갖는 경우를 나타냅니다.\n\n고유 특성:\n\n이 설명 유형은 또한 분석된 마크의 값이 뷰의 다른 모든 마크에 대한 값 분포와는 달리 비정상적인 경우를 나타낼 수 있습니다.\n\n시각화되지 않은 차원은 데이터 원본에 존재하지만 뷰에서 현재 사용되지 않는 차원입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b470497708 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 단일 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1525355384 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b878970303 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1824589676 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서에 표시할 설명 유형:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1650851258 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b365092757 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1153756723 = messageFormatterFn((function(  ) {
  return function(d) { return "평균값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1699414870 = messageFormatterFn((function(  ) {
  return function(d) { return d.columnCaption + ":"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806319449 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 고유 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2000628665 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a845951248 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대해 예기치 않게 변경된 것은 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1002316846 = messageFormatterFn((function(  ) {
  return function(d) { return "예기치 않은 데이터 변경이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1658706290 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서에는 데이터 변경 레이더를 사용하지 않도록 설정했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1644853155 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1126284000 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명은 이 뷰를 생성할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a102963765 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값 제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1371543263 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 집계된 값이 예측 값보다 높지만 예상되는 범위 내에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1563972679 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 집계된 값이 예측 값보다 낮지만 예상되는 범위 내에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1469840553 = messageFormatterFn((function(  ) {
  return function(d) { return "예상 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a734069649 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 값이 예상 범위 내에 있습니다.\n\n예상 범위는 시각화된 차원만을 기반으로 분석된 마크에 대해 통계 모델이 예측하는 15번째 백분위수에서 85번째 백분위수까지입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1570263665 = messageFormatterFn((function(  ) {
  return function(d) { return "중앙값인 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a595358634 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 현저히 높은 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a292008476 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 현저히 낮은 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b99000950 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 높은 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a546704444 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 낮은 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a408389717 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.aggTargetMeasureName + "은(는) 비주얼리제이션의 현재 값 모델을 고려할 때 " + d.low + "에서 " + d.high + " 사이로 예상됩니다. 이는 " + d.fieldCaptions + "에 설정된 필터를 고려한 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a762855172 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.aggTargetMeasureName + "은(는) 비주얼리제이션의 현재 값 모델을 고려할 때 " + d.low + "에서 " + d.high + " 사이로 예상됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b486028152 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.aggTargetMeasureName + "은(는) 비주얼리제이션의 현재 값 모델을 고려할 때 " + d.low + "에서 " + d.high + " 사이로 예상됩니다. 이는 " + d.fieldCaption + "에 설정된 필터를 고려한 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b8026545 = messageFormatterFn((function(  ) {
  return function(d) { return "예상 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b969269479 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 예상 범위 이내에 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b142911913 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 이 비주얼리제이션의 예상과 부합함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1770281947 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 이 비주얼리제이션의 예상보다 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a769407637 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 이 비주얼리제이션의 예상보다 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b71879243 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 이 비주얼리제이션의 예상보다 다소 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a824194821 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 이 비주얼리제이션의 예상보다 다소 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2048375326 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b197238170 = messageFormatterFn((function(  ) {
  return function(d) { return "분석에 필요한 시간과 리소스를 줄이기 위해 " + d.numFields + "개 필드를 건너뛰었습니다. 이러한 추가 필드를 고려하는 더 긴 분석을 실행하려면 [전체 설명]을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b665179990 = messageFormatterFn((function(  ) {
  return function(d) { return "'" + d.datasourceCaption + "'에 대한 필드 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1285386630 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명은 이 뷰를 생성할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1266927157 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본이 현재 연결되어 있지 않으므로 이 비주얼리제이션에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1465292861 = messageFormatterFn((function(  ) {
  return function(d) { return "CountD 집계 또는 교차 테이블 조인을 지원하지 않는 데이터 원본을 서로 다른 세부 수준으로 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1737595294 = messageFormatterFn((function(  ) {
  return function(d) { return "스토리에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b114533462 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 마크에서 설명을 동시에 분석할 수 없습니다. 단일 마크를 선택해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1350259544 = messageFormatterFn((function(  ) {
  return function(d) { return "차원이 없거나 측정값 이름만 차원으로 포함된 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a979731069 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값이 없는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1438164080 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 분석하려면 비주얼리제이션에 마크가 선택되어 있어야 합니다. 단일 마크를 선택해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1108540647 = messageFormatterFn((function(  ) {
  return function(d) { return "집계되지 않은 마크는 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b305561407 = messageFormatterFn((function(  ) {
  return function(d) { return "총계인 마크는 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1511189826 = messageFormatterFn((function(  ) {
  return function(d) { return "너무 많은 마크가 있어 이 비주얼리제이션에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1207086301 = messageFormatterFn((function(  ) {
  return function(d) { return "이 비주얼리제이션에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1609954881 = messageFormatterFn((function(  ) {
  return function(d) { return "혼합을 사용하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a905747335 = messageFormatterFn((function(  ) {
  return function(d) { return "클러스터를 포함하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1607401332 = messageFormatterFn((function(  ) {
  return function(d) { return "페이지를 사용하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1997621091 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 계산을 필터로 사용하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a432789547 = messageFormatterFn((function(  ) {
  return function(d) { return "이 작업을 완료할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1224641411 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 마크가 변경되었기 때문에 설명 분석을 완료할 수 없습니다. 데이터 설명 패널을 닫고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1667936546 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션이 변경되었기 때문에 설명 분석을 완료할 수 없습니다. 데이터 설명 패널을 닫고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1759300902 = messageFormatterFn((function(  ) {
  return function(d) { return "아래 나열된 측정값의 경우 " + d.analyzedMark + "이(가) 다른 마크와 다른 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b681391145 = messageFormatterFn((function(  ) {
  return function(d) { return "아래 나열된 측정값의 경우 " + d.analyzedMark + "이(가) 다른 마크와 다른 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1731888384 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 기초 값 탐색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1671189072 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명을 생성할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1653584542 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 표시하는 동안 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1420359556 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 " + d.X + "개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 높아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1427000066 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 " + d.X + "개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 낮아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b156088260 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 한 개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 높아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a683410250 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 한 개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 낮아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1013421176 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfValues + "개의 극한 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a924975593 = messageFormatterFn((function(  ) {
  return function(d) { return "한 개의 극한 값: " + d.outlierValue; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1099509547 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값 포함 또는 제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b733235768 = messageFormatterFn((function(  ) {
  return function(d) { return "기초 레코드 세부 정보를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1740574146 = messageFormatterFn((function(  ) {
  return function(d) { return "뒤로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b709246316 = messageFormatterFn((function(  ) {
  return function(d) { return "도움말"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a672153493 = messageFormatterFn((function(  ) {
  return function(d) { return "숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2133788893 = messageFormatterFn((function(  ) {
  return function(d) { return "높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1572835929 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1045093237 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션에서 마크를 선택하고 데이터 설명을 실행하면 Tableau가 뷰의 데이터 및 연결된 데이터 원본의 데이터를 분석합니다. 데이터 원본의 다른 레코드 값을 고려하면서 선택한 마크를 기반으로 하여 값에 대한 가능한 설명이 이 패널에 표시됩니다. 가능한 설명을 살펴보려면 아래 섹션 이름을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1107379799 = messageFormatterFn((function(  ) {
  return function(d) { return "극한?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b958573320 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a358935078 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a586496072 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1788710739 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a453334995 = messageFormatterFn((function(  ) {
  return function(d) { return "극한"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1857507772 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 모든 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a889344378 = messageFormatterFn((function(  ) {
  return function(d) { return "기타"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b613887242 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a766338185 = messageFormatterFn((function(  ) {
  return function(d) { return "낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b930872053 = messageFormatterFn((function(  ) {
  return function(d) { return "기초 특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a962688069 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 설명은 " + d.analyzedMark + "을(를) 구성하는 기초 레코드와 " + d.aggTargetMeasureName + " 값 간의 관계를 보여줍니다.\n\n**극한 값** 하나 또는 여러 개의 레코드가 " + d.aggTargetMeasureName + " 쪽으로 왜곡되어 있습니까?\n\n**Null 값** null 값의 존재가 " + d.aggTargetMeasureName + "에 영향을 미칩니까?\n\nSUM 집계의 경우:\n\n**레코드 수** 레코드가 많거나 적기 때문에 " + d.measureName + "의 합계가 높거나 낮습니까?\n\n**마크의 평균 값** 개별 레코드에 높거나 낮은 값이 있기 때문에 " + d.measureName + "의 합계가 높거나 낮습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b144820088 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a505118815 = messageFormatterFn((function(  ) {
  return function(d) { return "평균적으로 " + d.analyzedMark + "의 레코드 값은 다른 마크의 레코드 값보다 높습니다. 이는 " + d.aggTargetMeasureName + "이(가) 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1258928839 = messageFormatterFn((function(  ) {
  return function(d) { return "평균적으로 " + d.analyzedMark + "의 레코드 값은 다른 마크의 레코드 값보다 낮습니다. 이는 " + d.aggTargetMeasureName + "이(가) 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1879910915 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 평균 레코드 값이 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1619601375 = messageFormatterFn((function(  ) {
  return function(d) { return "평균 " + d.baseColumnCaption + ": " + d.averageOfRecords; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1749285932 = messageFormatterFn((function(  ) {
  return function(d) { return d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a432695698 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 중앙값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1392869926 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a109720448 = messageFormatterFn((function(  ) {
  return function(d) { return "이 차트는 " + d.analyzedMark + "에 대한 " + d.measureCaption + "의 모든 레코드를 보여줍니다. 극한 값이 하이라이트됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2108531270 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값이 제외되면 " + d.aggTargetMeasureName + "이(가) " + d.measureValue + "에서 " + d.measureValueWithoutOutlier + "(으)로 변경됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a629581047 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 레코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1138630211 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1279826051 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 값이 예상 범위를 벗어나고 시각화되지 않은 예측자를 포함한 통계 모델이 마크를 설명할 수 없는 경우 설명이 생성되지 않습니다.\n\n예상 범위는 시각화된 차원만을 기반으로 분석된 마크에 대해 통계 모델이 예측하는 15번째 백분위수에서 85번째 백분위수까지입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b483704673 = messageFormatterFn((function(  ) {
  return function(d) { return d.consideredFields + " 필드는 각각 예측자로 간주되었지만 이 중 마크를 적절하게 설명하는 것은 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1209763997 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfFields + " 필드는 " + d.fieldCaption1 + ", " + d.fieldCaption2 + ", " + d.fieldCaption3 + " 등 각각 예측자로 간주되었지만 이 중 마크를 적절하게 설명하는 것은 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1454506908 = messageFormatterFn((function(  ) {
  return function(d) { return "이 분석에서는 추가 필드를 고려하지 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1054021895 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldCaption + " 필드는 예측자로 간주되었지만 마크를 적절히 설명하지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1050954806 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) " + d.numRows + "개 레코드로 구성되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1876366546 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) 단일 레코드로 구성되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1258168703 = messageFormatterFn((function(  ) {
  return function(d) { return "임의 변형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b359763397 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크에 적은 수의 레코드가 있는 경우 데이터 설명이 통계적으로 유의미한 설명을 구성하는 데 필요한 데이터가 부족할 수 있습니다. 마크의 값이 예상 범위를 벗어난 경우 데이터 설명은 예기치 않은 값이 임의 변형으로 인해 발생한 것인지, 아니면 기초 레코드의 의미 있는 차이로 인해 발생한 것인지를 구분할 수 없습니다.\n\n예상 범위는 시각화된 차원만을 기반으로 분석된 마크에 대해 통계 모델이 예측하는 15번째 백분위수에서 85번째 백분위수까지입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2058334249 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) " + d.numRows + "개 레코드로 구성되어 있습니다. 이 예기치 않은 값은 기초 레코드의 의미 있는 차이라기보다는 임의 변형으로 인해 발생할 가능성이 큽니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b7163935 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) 단일 레코드로 구성되어 있습니다. 이 예기치 않은 값은 기초 레코드의 의미 있는 차이라기보다는 임의 변형으로 인해 발생할 가능성이 큽니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b665144695 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 " + d.N + "번째 백분위수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1102651782 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값: " + d.percentNull; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b592077337 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 null 레코드 비율로 인해 높을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1500630079 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 null 레코드 비율로 인해 낮을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1483026409 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 null 레코드 비율이 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1938666160 = messageFormatterFn((function(  ) {
  return function(d) { return d.targetMeasureName + "의 Null 비율"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1027386218 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 레코드 수가 많기 때문에 높을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a378209200 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 레코드 수가 적기 때문에 낮을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a999191276 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 레코드 수가 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a441042504 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 수: " + d.numberOfRows; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1382622731 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2023969213 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1817062069 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 열기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b432514315 = messageFormatterFn((function(  ) {
  return function(d) { return "워크시트에서 열기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b302990104 = messageFormatterFn((function(  ) {
  return function(d) { return "더 큰 뷰에서 열기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1676371614 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크에서 " + d.measureCaption + "의 분포"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1718485832 = messageFormatterFn((function(  ) {
  return function(d) { return "차이 시각화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2063102331 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b112014597 = messageFormatterFn((function(  ) {
  return function(d) { return "이전 레코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a975475176 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1695888528 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + ": " + d.primaryDisplayValue + "에 대한 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2118147895 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + ": " + d.primaryDisplayValue + "인 레코드의 비율"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1594078678 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 적고 " + d.baseColumnCaption + "은(는) " + d.markValue + "에 대해 더 낮은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a739867248 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 적고 " + d.baseColumnCaption + "은(는) " + d.markValue + "에 대해 더 높은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a534386138 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 적어서 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b238085310 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 많고 " + d.baseColumnCaption + " " + d.markValue + "에 대해 더 높은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a819312516 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 많고 " + d.baseColumnCaption + "은(는) " + d.markValue + "에 대해 더 낮은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b428122642 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 많아서 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b948994625 = messageFormatterFn((function(  ) {
  return function(d) { return "평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b448774749 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 주기로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 높은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1366705411 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 주기로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1630439341 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 주기는 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 미칠 수도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b384458930 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 추세"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b264474612 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 평균 추세로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 높은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1536843398 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 평균 추세로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1246191004 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 평균 추세는 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 미칠 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1986736677 = messageFormatterFn((function(  ) {
  return function(d) { return "관련 추세"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1947633387 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 가장 큰 영향을 미치는 시간 추세는 무엇입니까? 시간 추세가 설명의 타당성 순으로 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1403803073 = messageFormatterFn((function(  ) {
  return function(d) { return "월별 변동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1944654271 = messageFormatterFn((function(  ) {
  return function(d) { return "계절적 변동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a344281497 = messageFormatterFn((function(  ) {
  return function(d) { return "월별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a377308997 = messageFormatterFn((function(  ) {
  return function(d) { return "분기별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a622123802 = messageFormatterFn((function(  ) {
  return function(d) { return "연별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a837128417 = messageFormatterFn((function(  ) {
  return function(d) { return ": "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1221141333 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1212926082 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1473480435 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1674784425 = messageFormatterFn((function(  ) {
  return function(d) { return "원래 마크가 선택되지 않았거나 사용할 수 없는 경우 설명을 공유할 수 없습니다. 관련 설명을 공유하려면 마크를 다시 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a531161184 = messageFormatterFn((function(  ) {
  return function(d) { return "유사함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1771301688 = messageFormatterFn((function(  ) {
  return function(d) { return "이 차트는 " + d.analyzedMark + "에 대한 " + d.measureCaption + "의 모든 레코드를 보여줍니다. 극한 값 " + d.outlierValue + "이(가) 하이라이트됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1645250046 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값이 제외되면 " + d.aggTargetMeasureName + "이(가) " + d.measureValue + "에서 " + d.measureValueWithoutOutlier + "(으)로 변경됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a499708621 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 단일 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1909476203 = messageFormatterFn((function(  ) {
  return function(d) { return "관련 단일 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1431441986 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 차원의 모든 기초 레코드가 동일한 값을 갖는 경우를 나타냅니다. 또한 시각화되지 않은 차원의 단일 값이 마크 값에 상당한 기여를 하는 경우를 나타낼 수도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1414980124 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 모든 레코드는 시각화되지 않은 차원에서 동일한 단일 값을 갖습니다. 이는 뷰의 다른 모든 마크에 대한 값 분포와는 달리 비정상적인 경우입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a669879367 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 모든 기초 레코드는 " + d.dimensionName + "의 값이 " + d.markValue + "입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2013914026 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 분석된 마크에서 예상 " + d.aggTargetMeasureName + "을(를) 증가시킵니다. 분석된 마크의 모든 레코드에는 값이 " + d.primaryDisplayValue + "인 " + d.dimensionName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1030504988 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 분석된 마크에서 예상 " + d.aggTargetMeasureName + "을(를) 줄입니다. 분석된 마크의 모든 레코드에는 값이 " + d.primaryDisplayValue + "인 " + d.dimensionName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a664380038 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 예상된 " + d.aggTargetMeasureName + "에 기여할 수 있습니다. 분석된 마크의 모든 레코드에는 값이 " + d.primaryDisplayValue + "인 " + d.dimensionName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1434258875 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터가 변경된 경우 설명은 공유된 내용과 다를 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b533682407 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1908442724 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1642264380 = messageFormatterFn((function(  ) {
  return function(d) { return d.consideredFieldsNum + "/" + d.totalFieldsNum + "개 필드 분석됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b430805417 = messageFormatterFn((function(  ) {
  return function(d) { return "마크에 대해 데이터 설명을 실행하는 경우 통계 분석은 집계된 마크에 대해 먼저 실행된 다음 현재 뷰에 표시되지 않는 데이터 원본의 가능한 관련 필드에 대해 실행됩니다. 데이터 설명은 분석에서 데이터 원본의 어떤 열도 포함하지 않습니다. 분석에서 고려되는 필드는 아래에 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b849531286 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본: " + d.datasourceCaption; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1156519183 = messageFormatterFn((function(  ) {
  return function(d) { return "제외(" + d.fieldNum + "개)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1265140609 = messageFormatterFn((function(  ) {
  return function(d) { return "포함(" + d.fieldNum + "개)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a562071497 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b185128323 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 합계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b675249658 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 수 비율(%)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1504664705 = messageFormatterFn((function(  ) {
  return function(d) { return "고유 특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b944940576 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값 외에 " + d.analyzedMark + "이(가) 다른 마크와 다른 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a863192567 = messageFormatterFn((function(  ) {
  return function(d) { return "탐색할 기타 사항"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1098915504 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 고유 특성은 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2064675238 = messageFormatterFn((function(  ) {
  return function(d) { return "예측을 사용하는 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b364286954 = messageFormatterFn((function(  ) {
  return function(d) { return "이 집계를 사용하는 측정값을 분석할 수 없습니다. 합계, 평균, 카운트 또는 고유 카운트의 집계 유형을 사용해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1677943104 = messageFormatterFn((function(  ) {
  return function(d) { return "이 측정값에 대한 값이 너무 적어서 이 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b178822603 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값을 사용하는 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b5559669 = messageFormatterFn((function(  ) {
  return function(d) { return "이 측정값의 집계를 분석할 수 없습니다. 집계를 합계 또는 카운트로 변경해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1448378205 = messageFormatterFn((function(  ) {
  return function(d) { return "특수 값인 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1392988730 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 계산을 사용하는 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a752958521 = messageFormatterFn((function(  ) {
  return function(d) { return "이 마크에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1613946766 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + "별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1931779711 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a535052319 = messageFormatterFn((function(  ) {
  return function(d) { return "관심 가질 만한 다른 차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b453563634 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 가장 큰 영향을 미치는 차원은 무엇입니까? 차원이 설명의 타당성 순으로 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1044181168 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 나열된 차원이 비주얼리제이션에 표시된 측정값과 상관 관계가 없더라도 다른 마크와 비교하여 " + d.analyzedMark + "을(를) 고유하게 만드는 요소에 대해 제안합니다.\n\n예를 들어, 이 설명 유형은 \"이 영업 담당자는 고양이를 키우는 유일한 사람이었습니다.\" 또는 \"뉴욕의 직원은 다른 주의 직원과 다른 애완 동물 분포를 갖고 있습니다.\"와 같은 정보를 표시할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1442473509 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "에 대한 레코드 분포는 " + d.aggTargetMeasureName + "과(와) 상관 관계가 있으며, 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b50822709 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "에 대한 레코드 분포는 " + d.aggTargetMeasureName + "과(와) 상관 관계가 있으며, 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a890548853 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 " + d.aggTargetMeasureName + "과(와) 상관 관계가 있지만 분석된 마크 " + d.analyzedMark + "은(는) 아직 예상 범위에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b136955773 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.dimensionName + "의 레코드 분포는 다른 마크와 다르지만 비주얼리제이션에 표시된 측정값과 상관 관계가 발견되지 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b437661145 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + "별 레코드 분포"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1125162958 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 높습니다. 이 값은 더 높은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b6072395 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 낮습니다. 이 값은 더 높은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a790697108 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 낮습니다. 이 값은 더 낮은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1356197101 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 높습니다. 이 값은 더 낮은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2137241342 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 " + d.aggTargetMeasureName + " 값에 영향을 줄 수 있는 평균 " + d.measureName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b960962362 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 측정값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1854874176 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 가장 큰 영향을 미치는 측정값은 무엇입니까? 측정값은 설명의 타당성 순으로 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1454642456 = messageFormatterFn((function(  ) {
  return function(d) { return d.unvisualizedMeasureName + ": " + d.unvisualizedMeasureValue; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b374486725 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureName + " 및 " + d.targetMeasureName + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b392503933 = messageFormatterFn((function(  ) {
  return function(d) { return "분석 시간 " + d.datetime; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b762769326 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1198974133 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b775442191 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 데이터 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2027570688 = messageFormatterFn((function(  ) {
  return function(d) { return "원래 마크가 더 이상 선택되지 않았거나 사용할 수 없기 때문에 전체 데이터를 볼 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1184605140 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터가 변경되었기 때문에 이 설명을 새 워크시트에 표시할 수 없습니다. 설명을 새로 고치려면 데이터 설명을 다시 실행하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2081281398 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a469730991 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1159080183 = messageFormatterFn((function(  ) {
  return function(d) { return "평균값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1599956933 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a21725667 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 고유 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a674124541 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1375924641 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1834994141 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 집계된 값이 예측 값보다 높지만 예상되는 범위 내에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b202031997 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 집계된 값이 예측 값보다 낮지만 예상되는 범위 내에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1036327021 = messageFormatterFn((function(  ) {
  return function(d) { return "예상 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a115657933 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 값이 예상 범위 내에 있습니다.\n\n예상 범위는 시각화된 차원만을 기반으로 분석된 마크에 대해 통계 모델이 예측하는 15번째 백분위수에서 85번째 백분위수까지입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1247670573 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureValue + "은(는) 중앙값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2005809894 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureValue + "은(는) 다른 마크와 비교하여 예상보다 높지만 자연적인 변형 범위 내에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a614601568 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureValue + "은(는) 다른 마크와 비교하여 예상보다 낮지만 자연적인 변형 범위 내에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b513919026 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureValue + "은(는) 다른 마크와 비교하여 예상보다 높습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1544889992 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureValue + "은(는) 다른 마크와 비교하여 예상보다 낮습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1683204719 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.aggTargetMeasureName + "은(는) 비주얼리제이션의 현재 값 모델을 고려할 때 " + d.low + "에서 " + d.high + " 사이로 예상됩니다. 이는 " + d.fieldCaptions + "에 설정된 필터를 고려한 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b825317056 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.aggTargetMeasureName + "은(는) 비주얼리제이션의 현재 값 모델을 고려할 때 " + d.low + "에서 " + d.high + " 사이로 예상됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2074200380 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.aggTargetMeasureName + "은(는) 비주얼리제이션의 현재 값 모델을 고려할 때 " + d.low + "에서 " + d.high + " 사이로 예상됩니다. 이는 " + d.fieldCaption + "에 설정된 필터를 고려한 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b828904309 = messageFormatterFn((function(  ) {
  return function(d) { return "예상 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1999193693 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 예상과 부합함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1908916589 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 다른 마크와 비교하여 예상과 부합함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1767673785 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 예상보다 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b681852055 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 다른 마크와 비교하여 예상보다 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b615502369 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 예상보다 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b996597039 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 다른 마크와 비교하여 예상보다 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1673399113 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 예상보다 다소 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a137744633 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 다른 마크와 비교하여 예상보다 다소 높음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1050106735 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 마크와 비교하여 예상보다 다소 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a276767553 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 찾을 수 없지만 다른 마크와 비교하여 예상보다 다소 낮음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a658419742 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1963242846 = messageFormatterFn((function(  ) {
  return function(d) { return "분석에 필요한 시간과 리소스를 줄이기 위해 " + d.numFields + "개 필드를 건너뛰었습니다. 이러한 추가 필드를 고려하는 더 긴 분석을 실행하려면 [전체 설명]을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b111162386 = messageFormatterFn((function(  ) {
  return function(d) { return "'" + d.datasourceCaption + "'에 대한 필드 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a125064630 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명은 이 뷰를 생성할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b571239665 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본이 현재 연결되어 있지 않으므로 이 비주얼리제이션에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1335192441 = messageFormatterFn((function(  ) {
  return function(d) { return "CountD 집계 또는 교차 테이블 조인을 지원하지 않는 데이터 원본을 서로 다른 세부 수준으로 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a566477990 = messageFormatterFn((function(  ) {
  return function(d) { return "스토리에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b92091930 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 마크에서 설명을 동시에 분석할 수 없습니다. 단일 마크를 선택해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1068968092 = messageFormatterFn((function(  ) {
  return function(d) { return "차원이 없거나 측정값 이름만 차원으로 포함된 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2068160961 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값이 없는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b550534732 = messageFormatterFn((function(  ) {
  return function(d) { return "설명을 분석하려면 비주얼리제이션에 마크가 선택되어 있어야 합니다. 단일 마크를 선택해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b479631581 = messageFormatterFn((function(  ) {
  return function(d) { return "집계되지 않은 마크는 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1897811453 = messageFormatterFn((function(  ) {
  return function(d) { return "총계인 마크는 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2058617094 = messageFormatterFn((function(  ) {
  return function(d) { return "너무 많은 마크가 있어 이 비주얼리제이션에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b381085927 = messageFormatterFn((function(  ) {
  return function(d) { return "이 비주얼리제이션에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1587513349 = messageFormatterFn((function(  ) {
  return function(d) { return "혼합을 사용하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a928188867 = messageFormatterFn((function(  ) {
  return function(d) { return "클러스터를 포함하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1397777456 = messageFormatterFn((function(  ) {
  return function(d) { return "페이지를 사용하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2096521817 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 계산을 필터로 사용하는 비주얼리제이션을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1488544921 = messageFormatterFn((function(  ) {
  return function(d) { return "이 작업을 완료할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b295479617 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 마크가 변경되었기 때문에 설명 분석을 완료할 수 없습니다. 데이터 설명 패널을 닫고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a861026074 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션이 변경되었기 때문에 설명 분석을 완료할 수 없습니다. 데이터 설명 패널을 닫고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2063214358 = messageFormatterFn((function(  ) {
  return function(d) { return "아래 나열된 측정값의 경우 " + d.analyzedMark + "이(가) 다른 마크와 다른 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b962682597 = messageFormatterFn((function(  ) {
  return function(d) { return "아래 나열된 측정값의 경우 " + d.analyzedMark + "이(가) 다른 마크와 다른 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1709446852 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 기초 값 탐색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1348595980 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명을 생성할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b729149752 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 " + d.X + "개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 높아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b859096258 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 " + d.X + "개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 낮아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1615306624 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 한 개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 높아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a774886022 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfRows + "개 중 한 개 레코드에 극한 값이 있어서 분석된 마크 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 낮아집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1189951684 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfValues + "개의 극한 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1045863981 = messageFormatterFn((function(  ) {
  return function(d) { return "한 개의 극한 값: " + d.outlierValue; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1310144006 = messageFormatterFn((function(  ) {
  return function(d) { return "뒤로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1983435816 = messageFormatterFn((function(  ) {
  return function(d) { return "도움말"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b602036007 = messageFormatterFn((function(  ) {
  return function(d) { return "숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b491075633 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션에서 마크를 선택하고 데이터 설명을 실행하면 Tableau가 뷰의 데이터 및 연결된 데이터 원본의 데이터를 분석합니다. 데이터 원본의 다른 레코드 값을 고려하면서 선택한 마크를 기반으로 하여 값에 대한 가능한 설명이 이 패널에 표시됩니다. 가능한 설명을 살펴보려면 아래 섹션 이름을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a128063620 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a479579207 = messageFormatterFn((function(  ) {
  return function(d) { return "기초 특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a415260801 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 설명은 " + d.analyzedMark + "을(를) 구성하는 기초 레코드와 " + d.aggTargetMeasureName + " 값 간의 관계를 보여줍니다.\n\n**극한 값** 하나 또는 여러 개의 레코드가 " + d.aggTargetMeasureName + " 쪽으로 왜곡되어 있습니까?\n\n**Null 값** null 값의 존재가 " + d.aggTargetMeasureName + "에 영향을 미칩니까?\n\nSUM 집계의 경우:\n\n**레코드 수** 레코드가 많거나 적기 때문에 " + d.measureName + "의 합계가 높거나 낮습니까?\n\n**마크의 평균 값** 개별 레코드에 높거나 낮은 값이 있기 때문에 " + d.measureName + "의 합계가 높거나 낮습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a690003660 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b42308453 = messageFormatterFn((function(  ) {
  return function(d) { return "평균적으로 " + d.analyzedMark + "의 레코드 값은 다른 마크의 레코드 값보다 높습니다. 이는 " + d.aggTargetMeasureName + "이(가) 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1379817227 = messageFormatterFn((function(  ) {
  return function(d) { return "평균적으로 " + d.analyzedMark + "의 레코드 값은 다른 마크의 레코드 값보다 낮습니다. 이는 " + d.aggTargetMeasureName + "이(가) 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2000799303 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 평균 레코드 값이 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1454574115 = messageFormatterFn((function(  ) {
  return function(d) { return "평균 " + d.baseColumnCaption + ": " + d.averageOfRecords; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1315772400 = messageFormatterFn((function(  ) {
  return function(d) { return d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2034226482 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 중앙값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b558046178 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b437706820 = messageFormatterFn((function(  ) {
  return function(d) { return "이 차트는 " + d.analyzedMark + "에 대한 " + d.measureCaption + "의 모든 레코드를 보여줍니다. 극한 값이 하이라이트됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a119832458 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값이 제외되면 " + d.aggTargetMeasureName + "이(가) " + d.measureValue + "에서 " + d.measureValueWithoutOutlier + "(으)로 변경됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1461223303 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1158937663 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 값이 예상 범위를 벗어나고 시각화되지 않은 예측자를 포함한 통계 모델이 마크를 설명할 수 없는 경우 설명이 생성되지 않습니다.\n\n예상 범위는 시각화된 차원만을 기반으로 분석된 마크에 대해 통계 모델이 예측하는 15번째 백분위수에서 85번째 백분위수까지입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1822563811 = messageFormatterFn((function(  ) {
  return function(d) { return d.consideredFields + " 필드는 각각 예측자로 간주되었지만 이 중 마크를 적절하게 설명하는 것은 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1096504487 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfFields + " 필드는 " + d.fieldCaption1 + ", " + d.fieldCaption2 + ", " + d.fieldCaption3 + " 등 각각 예측자로 간주되었지만 이 중 마크를 적절하게 설명하는 것은 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1289479648 = messageFormatterFn((function(  ) {
  return function(d) { return "이 분석에서는 추가 필드를 고려하지 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a233144131 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldCaption + " 필드는 예측자로 간주되었지만 마크를 적절히 설명하지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b715049870 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) " + d.numRows + "개 레코드로 구성되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b465915286 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) 단일 레코드로 구성되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2143536069 = messageFormatterFn((function(  ) {
  return function(d) { return "임의 변형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a414552703 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크에 적은 수의 레코드가 있는 경우 데이터 설명이 통계적으로 유의미한 설명을 구성하는 데 필요한 데이터가 부족할 수 있습니다. 마크의 값이 예상 범위를 벗어난 경우 데이터 설명은 예기치 않은 값이 임의 변형으로 인해 발생한 것인지, 아니면 기초 레코드의 의미 있는 차이로 인해 발생한 것인지를 구분할 수 없습니다.\n\n예상 범위는 시각화된 차원만을 기반으로 분석된 마크에 대해 통계 모델이 예측하는 15번째 백분위수에서 85번째 백분위수까지입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a67440237 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) " + d.numRows + "개 레코드로 구성되어 있습니다. 이 예기치 않은 값은 기초 레코드의 의미 있는 차이라기보다는 임의 변형으로 인해 발생할 가능성이 큽니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1081265957 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 " + d.analyzedMark + "은(는) 단일 레코드로 구성되어 있습니다. 이 예기치 않은 값은 기초 레코드의 의미 있는 차이라기보다는 임의 변형으로 인해 발생할 가능성이 큽니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b111127091 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 " + d.N + "번째 백분위수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a725393334 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값: " + d.percentNull; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b597400797 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 null 레코드 비율로 인해 높을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2054647683 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 null 레코드 비율로 인해 낮을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1317999149 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 null 레코드 비율이 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2048398572 = messageFormatterFn((function(  ) {
  return function(d) { return d.targetMeasureName + "의 Null 비율"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b906497830 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 레코드 수가 많기 때문에 높을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1141911828 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + "은(는) " + d.analyzedMark + "의 레코드 수가 적기 때문에 낮을 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b520929752 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 레코드 수가 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a435719044 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 수: " + d.numberOfRows; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1950796367 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b935539321 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b728632177 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 열기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b265920354 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크에서 " + d.measureCaption + "의 분포"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1553458572 = messageFormatterFn((function(  ) {
  return function(d) { return "차이 시각화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1220930753 = messageFormatterFn((function(  ) {
  return function(d) { return "마크 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1824762668 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + ": " + d.primaryDisplayValue + "에 대한 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a588647173 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + ": " + d.primaryDisplayValue + "인 레코드의 비율"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1685554450 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 적고 " + d.baseColumnCaption + "은(는) " + d.markValue + "에 대해 더 낮은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1435554740 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 적고 " + d.baseColumnCaption + "은(는) " + d.markValue + "에 대해 더 높은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b924832226 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 적어서 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a457602182 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 많고 " + d.baseColumnCaption + " " + d.markValue + "에 대해 더 높은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a841754048 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 많고 " + d.baseColumnCaption + "은(는) " + d.markValue + "에 대해 더 낮은 경향이 있습니다. 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b336646870 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 다른 마크보다 " + d.dimensionName + ": " + d.markValue + "이(가) 포함된 레코드 수가 많아서 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 줄 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b996202017 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 주기로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 높은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1487593799 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 주기로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1840063217 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 주기는 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 미칠 수도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a703970962 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 추세"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b811901880 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 평균 추세로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 높은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1415955010 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 평균 추세로 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유를 설명할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1036567128 = messageFormatterFn((function(  ) {
  return function(d) { return "연간 평균 추세는 " + d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 영향을 미칠 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1664143585 = messageFormatterFn((function(  ) {
  return function(d) { return "관련 추세"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1826744999 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 가장 큰 영향을 미치는 시간 추세는 무엇입니까? 시간 추세가 설명의 타당성 순으로 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b362201603 = messageFormatterFn((function(  ) {
  return function(d) { return "월별 변동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b46239741 = messageFormatterFn((function(  ) {
  return function(d) { return "계절적 변동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1118597597 = messageFormatterFn((function(  ) {
  return function(d) { return "월별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1465738889 = messageFormatterFn((function(  ) {
  return function(d) { return "분기별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2032575062 = messageFormatterFn((function(  ) {
  return function(d) { return "연별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1084206051 = messageFormatterFn((function(  ) {
  return function(d) { return ": "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1152491495 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b438609982 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b385050543 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1884408301 = messageFormatterFn((function(  ) {
  return function(d) { return "원래 마크가 선택되지 않았거나 사용할 수 없는 경우 설명을 공유할 수 없습니다. 관련 설명을 공유하려면 마크를 다시 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1003544580 = messageFormatterFn((function(  ) {
  return function(d) { return "이 차트는 " + d.analyzedMark + "에 대한 " + d.measureCaption + "의 모든 레코드를 보여줍니다. 극한 값 " + d.outlierValue + "이(가) 하이라이트됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b345643966 = messageFormatterFn((function(  ) {
  return function(d) { return "극한 값이 제외되면 " + d.aggTargetMeasureName + "이(가) " + d.measureValue + "에서 " + d.measureValueWithoutOutlier + "(으)로 변경됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b47718647 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 단일 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1931917735 = messageFormatterFn((function(  ) {
  return function(d) { return "관련 단일 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1632266374 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 차원의 모든 기초 레코드가 동일한 값을 갖는 경우를 나타냅니다. 또한 시각화되지 않은 차원의 단일 값이 마크 값에 상당한 기여를 하는 경우를 나타낼 수도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1153125848 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 모든 레코드는 시각화되지 않은 차원에서 동일한 단일 값을 갖습니다. 이는 뷰의 다른 모든 마크에 대한 값 분포와는 달리 비정상적인 경우입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1321014645 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크의 모든 기초 레코드는 " + d.dimensionName + "의 값이 " + d.markValue + "입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2071429394 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 분석된 마크에서 예상 " + d.aggTargetMeasureName + "을(를) 증가시킵니다. 분석된 마크의 모든 레코드에는 값이 " + d.primaryDisplayValue + "인 " + d.dimensionName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a483077720 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 분석된 마크에서 예상 " + d.aggTargetMeasureName + "을(를) 줄입니다. 분석된 마크의 모든 레코드에는 값이 " + d.primaryDisplayValue + "인 " + d.dimensionName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1427214398 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 예상된 " + d.aggTargetMeasureName + "에 기여할 수 있습니다. 분석된 마크의 모든 레코드에는 값이 " + d.primaryDisplayValue + "인 " + d.dimensionName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b824849419 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1679134491 = messageFormatterFn((function(  ) {
  return function(d) { return "실행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a175111183 = messageFormatterFn((function(  ) {
  return function(d) { return "업데이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b286475699 = messageFormatterFn((function(  ) {
  return function(d) { return "변경으로 인해 원래 분석된 마크가 뷰에서 제거되었습니다.  설명할 새 마크를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b611196399 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 마크 다시 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2134054783 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 마크에서 데이터 설명을 실행합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2083711275 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 마크에서 데이터 설명을 실행합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a136059198 = messageFormatterFn((function(  ) {
  return function(d) { return "설명 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a711199113 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터가 변경된 경우 설명은 공유된 내용과 다를 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2121854635 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2063931480 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 표준 편차"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1088246776 = messageFormatterFn((function(  ) {
  return function(d) { return d.consideredFieldsNum + "/" + d.totalFieldsNum + "개 필드 분석됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a137368219 = messageFormatterFn((function(  ) {
  return function(d) { return "마크에 대해 데이터 설명을 실행하는 경우 통계 분석은 집계된 마크에 대해 먼저 실행된 다음 현재 뷰에 표시되지 않는 데이터 원본의 가능한 관련 필드에 대해 실행됩니다. 데이터 설명은 분석에서 데이터 원본의 어떤 열도 포함하지 않습니다. 분석에서 고려되는 필드는 아래에 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b854854746 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본: " + d.datasourceCaption; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1590032715 = messageFormatterFn((function(  ) {
  return function(d) { return "제외(" + d.fieldNum + "개)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1698654141 = messageFormatterFn((function(  ) {
  return function(d) { return "포함(" + d.fieldNum + "개)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b331191027 = messageFormatterFn((function(  ) {
  return function(d) { return "분석된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b615558463 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 합계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1938178237 = messageFormatterFn((function(  ) {
  return function(d) { return "고유 특성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1359858652 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값 외에 " + d.analyzedMark + "이(가) 다른 마크와 다른 이유는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1422903757 = messageFormatterFn((function(  ) {
  return function(d) { return "탐색할 기타 사항"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1736833428 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 고유 특성은 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1662118422 = messageFormatterFn((function(  ) {
  return function(d) { return "예측을 사용하는 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a724142938 = messageFormatterFn((function(  ) {
  return function(d) { return "이 집계를 사용하는 측정값을 분석할 수 없습니다. 합계, 평균, 카운트 또는 고유 카운트의 집계 유형을 사용해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1028851964 = messageFormatterFn((function(  ) {
  return function(d) { return "이 측정값에 대한 값이 너무 적어서 이 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a254690929 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값을 사용하는 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1593731897 = messageFormatterFn((function(  ) {
  return function(d) { return "이 측정값의 집계를 분석할 수 없습니다. 집계를 합계 또는 카운트로 변경해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1613405465 = messageFormatterFn((function(  ) {
  return function(d) { return "특수 값인 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b618672630 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 계산을 사용하는 측정값을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b67919243 = messageFormatterFn((function(  ) {
  return function(d) { return "이 마크에서 설명을 분석할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1493058378 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + "별 " + d.baseColumnCaption + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a152908477 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a404951899 = messageFormatterFn((function(  ) {
  return function(d) { return "관심 가질 만한 다른 차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1145340846 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 가장 큰 영향을 미치는 차원은 무엇입니까? 차원이 설명의 타당성 순으로 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1943076876 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 유형은 나열된 차원이 비주얼리제이션에 표시된 측정값과 상관 관계가 없더라도 다른 마크와 비교하여 " + d.analyzedMark + "을(를) 고유하게 만드는 요소에 대해 제안합니다.\n\n예를 들어, 이 설명 유형은 \"이 영업 담당자는 고양이를 키우는 유일한 사람이었습니다.\" 또는 \"뉴욕의 직원은 다른 주의 직원과 다른 애완 동물 분포를 갖고 있습니다.\"와 같은 정보를 표시할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2134250721 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "에 대한 레코드 분포는 " + d.aggTargetMeasureName + "과(와) 상관 관계가 있으며, 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2005071879 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "에 대한 레코드 분포는 " + d.aggTargetMeasureName + "과(와) 상관 관계가 있으며, 이는 " + d.analyzedMark + "에 대해 " + d.aggTargetMeasureName + "이(가) 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a920291761 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimensionName + "의 분포는 " + d.aggTargetMeasureName + "과(와) 상관 관계가 있지만 분석된 마크 " + d.analyzedMark + "은(는) 아직 예상 범위에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b267056193 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에 대한 " + d.dimensionName + "의 레코드 분포는 다른 마크와 다르지만 비주얼리제이션에 표시된 측정값과 상관 관계가 발견되지 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b415219613 = messageFormatterFn((function(  ) {
  return function(d) { return d.dimension + "별 레코드 분포"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1581632110 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 높습니다. 이 값은 더 높은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a194751993 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 낮습니다. 이 값은 더 높은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 높은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1200196904 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 낮습니다. 이 값은 더 낮은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a728491087 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "은(는) 다른 마크보다 평균 " + d.measureName + "이(가) 높습니다. 이 값은 더 낮은 " + d.aggTargetMeasureName + "의 값과 연관되며 이는 해당 값이 더 낮은 이유가 될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a148542530 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "에는 " + d.aggTargetMeasureName + " 값에 영향을 줄 수 있는 평균 " + d.measureName + "이(가) 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1343110922 = messageFormatterFn((function(  ) {
  return function(d) { return "기여하는 측정값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1744405628 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + "의 " + d.aggTargetMeasureName + "에 가장 큰 영향을 미치는 측정값은 무엇입니까? 측정값은 설명의 타당성 순으로 나열되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1751894948 = messageFormatterFn((function(  ) {
  return function(d) { return d.unvisualizedMeasureName + ": " + d.unvisualizedMeasureValue; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1035964535 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureName + " 및 " + d.targetMeasureName + "의 평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1403438145 = messageFormatterFn((function(  ) {
  return function(d) { return "분석 시간 " + d.datetime; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b927796586 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산(모집단 기준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1089241721 = messageFormatterFn((function(  ) {
  return function(d) { return d.measureCaption + "의 분산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b488917648 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터가 변경되었기 때문에 이 설명을 새 워크시트에 표시할 수 없습니다. 설명을 새로 고치려면 데이터 설명을 다시 실행하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a950816962 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1693478121 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명은 이 뷰를 생성할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1264067854 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b248586323 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 버전 " + d.VERSION + "을(를) 현재 실행 중입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2098535431 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau " + d.VERSION + "(으)로 내보내면 통합 문서 기능 및 특징이 변경되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2098536392 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau " + d.VERSION + "(으)로 내보내면 새로운 통합 문서가 기본적으로 약간 변경되지만 동일하게 표시됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2098537353 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau " + d.VERSION + "(으)로 내보내면 새로운 통합 문서가 기본적으로 약간 변경되지만 동일하게 표시됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2098538314 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau " + d.VERSION + "(으)로 내보내면 새로운 통합 문서 특징 및 기능이 일부 변경됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2098539275 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau " + d.VERSION + "(으)로 내보내면 새로운 통합 문서 특징 및 기능이 크게 변경됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2098540236 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau " + d.VERSION + "(으)로 내보내면 새로운 통합 문서의 주요 특징 및 기능이 크게 변경됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1920118468 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 버전으로 내보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1228416773 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 이름으로 내보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a512636664 = messageFormatterFn((function(  ) {
  return function(d) { return "내보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b851926906 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 버전 " + d.VERSION + "에서는 다음 기능을 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1584313675 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b640799524 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서를 Tableau 버전 " + d.VERSION + "(으)로 내보내면 일부 기능 및 시각적 특징이 손실되거나 저하될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b674956085 = messageFormatterFn((function(  ) {
  return function(d) { return "이 작업을 수행하면 새 통합 문서가 저장되고 기존 통합 문서를 덮어쓰지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b296513460 = messageFormatterFn((function(  ) {
  return function(d) { return "CSV"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1419954784 = messageFormatterFn((function(  ) {
  return function(d) { return "이 대시보드에서 시트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b782193818 = messageFormatterFn((function(  ) {
  return function(d) { return "문서를 생성하는 동안 예기치 않은 오류가 발생했습니다. 추가 정보: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a39184609 = messageFormatterFn((function(  ) {
  return function(d) { return "선택할 시트가 없습니다. 다른 뷰를 사용해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1001334659 = messageFormatterFn((function(  ) {
  return function(d) { return "Excel"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1725186249 = messageFormatterFn((function(  ) {
  return function(d) { return "잘못된 내보내기 명령을 찾았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1029911246 = messageFormatterFn((function(  ) {
  return function(d) { return "크로스탭 내보내기 대화 상자를 렌더링하는 동안 예기치 않은 오류가 발생했습니다. 오류는 'InvalidFileType'입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1730167093 = messageFormatterFn((function(  ) {
  return function(d) { return "문서를 생성하는 동안 예기치 않은 오류가 발생했습니다. 오류는 'InvalidSheetSelection'입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b256709595 = messageFormatterFn((function(  ) {
  return function(d) { return "크로스탭 내보내기 대화 상자를 렌더링하는 동안 예기치 않은 오류가 발생했습니다. 오류는 'InvalidSheetType'입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a371844699 = messageFormatterFn((function(  ) {
  return function(d) { return "단일 시트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b524450024 = messageFormatterFn((function(  ) {
  return function(d) { return "형식 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a894060281 = messageFormatterFn((function(  ) {
  return function(d) { return "이 스토리포인트에서 시트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2042698670 = messageFormatterFn((function(  ) {
  return function(d) { return "가로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1274467846 = messageFormatterFn((function(  ) {
  return function(d) { return "세로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a661721694 = messageFormatterFn((function(  ) {
  return function(d) { return "방향"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1826287426 = messageFormatterFn((function(  ) {
  return function(d) { return "A5"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1831811254 = messageFormatterFn((function(  ) {
  return function(d) { return "A4"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a288224420 = messageFormatterFn((function(  ) {
  return function(d) { return "A3"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1581176189 = messageFormatterFn((function(  ) {
  return function(d) { return "B5"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1575652361 = messageFormatterFn((function(  ) {
  return function(d) { return "B4"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2042733879 = messageFormatterFn((function(  ) {
  return function(d) { return "Executive"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1149940680 = messageFormatterFn((function(  ) {
  return function(d) { return "Folio"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a62299472 = messageFormatterFn((function(  ) {
  return function(d) { return "Ledger"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b411036216 = messageFormatterFn((function(  ) {
  return function(d) { return "Legal"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a532371661 = messageFormatterFn((function(  ) {
  return function(d) { return "Letter"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a884907161 = messageFormatterFn((function(  ) {
  return function(d) { return "Note"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1426288823 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarto"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a124681470 = messageFormatterFn((function(  ) {
  return function(d) { return "Statement"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a352410242 = messageFormatterFn((function(  ) {
  return function(d) { return "Tabloid"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b231200826 = messageFormatterFn((function(  ) {
  return function(d) { return "지정되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a862767446 = messageFormatterFn((function(  ) {
  return function(d) { return "페이지 크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b137718170 = messageFormatterFn((function(  ) {
  return function(d) { return "문제가 발생하여 PDF를 만들 수 없습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a512423137 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 1페이지 높이"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a941768146 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 1페이지 너비"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1982663078 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 2페이지 높이"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1882959209 = messageFormatterFn((function(  ) {
  return function(d) { return "최대 2페이지 너비"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1847348117 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a86844741 = messageFormatterFn((function(  ) {
  return function(d) { return d.PERCENT_NUMBER + "%"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1404270599 = messageFormatterFn((function(  ) {
  return function(d) { return "배율"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1024532809 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1990840233 = messageFormatterFn((function(  ) {
  return function(d) { return "이 대시보드의 특정 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1069891925 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서의 특정 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b719432899 = messageFormatterFn((function(  ) {
  return function(d) { return "포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1307193979 = messageFormatterFn((function(  ) {
  return function(d) { return "시트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1680995146 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a337922134 = messageFormatterFn((function(  ) {
  return function(d) { return "이 스토리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a974788020 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a936445785 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2142810062 = messageFormatterFn((function(  ) {
  return function(d) { return d.x + " / " + d.y; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b314647662 = messageFormatterFn((function(  ) {
  return function(d) { return "작성자: " + d["0"]; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1807785912 = messageFormatterFn((function(  ) {
  return function(d) { return "개발자 웹 사이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b169600820 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a952523020 = messageFormatterFn((function(  ) {
  return function(d) { return "버전: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1708843879 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 URL: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1215954745 = messageFormatterFn((function(  ) {
  return function(d) { return "인스턴스 ID: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1453594533 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1882480547 = messageFormatterFn((function(  ) {
  return function(d) { return "네트워크 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1782582113 = messageFormatterFn((function(  ) {
  return function(d) { return "샌드박스 적용됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1416690278 = messageFormatterFn((function(  ) {
  return function(d) { return "지원: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b295810936 = messageFormatterFn((function(  ) {
  return function(d) { return "갤러리의 뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1357201757 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b556273402 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1215092300 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a330376677 = messageFormatterFn((function(  ) {
  return function(d) { return "작성자:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1960947501 = messageFormatterFn((function(  ) {
  return function(d) { return "작성자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1858365849 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2003204744 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b106508813 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a213800880 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 이름:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1537885568 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 URL:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a183217232 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 허용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b803996889 = messageFormatterFn((function(  ) {
  return function(d) { return "이 대시보드에 다음과 같은 네트워크 지원 확장 프로그램이 포함되어 있습니다. 확장 프로그램은 Tableau 기능을 확장하는 웹 응용 프로그램입니다. 이러한 확장 프로그램이 대시보드에서 실행되도록 허용하려면 [확인]을 클릭하십시오. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1791907347 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 데이터 액세스:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1579276209 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 데이터 액세스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a389662143 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램이 사용자 데이터에 액세스하는 방법에 대해 자세히 알아보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2010077591 = messageFormatterFn((function(  ) {
  return function(d) { return "확장 프로그램 허용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1914644110 = messageFormatterFn((function(  ) {
  return function(d) { return "허용 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1941452358 = messageFormatterFn((function(  ) {
  return function(d) { return "이 대시보드에 다음과 같은 네트워크 지원 확장 프로그램이 포함되어 있습니다. 확장 프로그램은 Tableau 기능을 확장하는 웹 응용 프로그램입니다. 이 확장 프로그램이 대시보드에서 실행되도록 허용하려면 [확인]을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2088540544 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a447649302 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b406869882 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1128438052 = messageFormatterFn((function(  ) {
  return function(d) { return "월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1962485744 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1884368614 = messageFormatterFn((function(  ) {
  return function(d) { return "두 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a924513839 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a130153931 = messageFormatterFn((function(  ) {
  return function(d) { return "집계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b709460146 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b508491120 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1264061308 = messageFormatterFn((function(  ) {
  return function(d) { return "표시된 차원에 대한 데이터 집계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b737888288 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 기간으로 날짜 롤업:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1363258637 = messageFormatterFn((function(  ) {
  return function(d) { return "집계 Uber"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b472136100 = messageFormatterFn((function(  ) {
  return function(d) { return "증분 새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a214904552 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 행: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b755023129 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b42068882 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1321427625 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2032833069 = messageFormatterFn((function(  ) {
  return function(d) { return "설정 저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1446081282 = messageFormatterFn((function(  ) {
  return function(d) { return "열 이름 드롭다운"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1197951998 = messageFormatterFn((function(  ) {
  return function(d) { return "각 물리적 테이블에 테이블 하나를 사용하여 데이터를 저장합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1233437171 = messageFormatterFn((function(  ) {
  return function(d) { return "각 논리적 테이블에 테이블 하나를 사용하여 데이터를 저장합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1510774991 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1063077043 = messageFormatterFn((function(  ) {
  return function(d) { return "물리적 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2137647492 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 저장소 옵션 드롭다운"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b599213720 = messageFormatterFn((function(  ) {
  return function(d) { return "경우에 따라 이 옵션을 사용하면 성능이 향상되고 추출의 크기가 줄어들 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1553572663 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 필터, 집계 또는 기타 추출 설정을 사용해야 하는 경우 이 옵션을 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1899524770 = messageFormatterFn((function(  ) {
  return function(d) { return "논리적 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1879690777 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 데이터 저장 방법 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1577638345 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않은 필드 모두 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2010392474 = messageFormatterFn((function(  ) {
  return function(d) { return "추출할 데이터의 양 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1525390379 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 추출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b638017061 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b605918608 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b122879136 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1260454362 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b627762478 = messageFormatterFn((function(  ) {
  return function(d) { return "추가..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2128942287 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b604250551 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1483479733 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 Uber"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b971085560 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 행이 추가됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1864067552 = messageFormatterFn((function(  ) {
  return function(d) { return "전체 새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1777445569 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 열을 사용하여 새 행 식별:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1198745076 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고칠 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1477834936 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1296839719 = messageFormatterFn((function(  ) {
  return function(d) { return "샘플 옵션 드롭다운"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b610961677 = messageFormatterFn((function(  ) {
  return function(d) { return "%"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2143201919 = messageFormatterFn((function(  ) {
  return function(d) { return "행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a790835300 = messageFormatterFn((function(  ) {
  return function(d) { return "샘플: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b55598865 = messageFormatterFn((function(  ) {
  return function(d) { return "기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1356814902 = messageFormatterFn((function(  ) {
  return function(d) { return "입력 조건"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a981331572 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1025835418 = messageFormatterFn((function(  ) {
  return function(d) { return "샘플"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a277394793 = messageFormatterFn((function(  ) {
  return function(d) { return "행 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b129311377 = messageFormatterFn((function(  ) {
  return function(d) { return "상위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1144467853 = messageFormatterFn((function(  ) {
  return function(d) { return "왜 하나의 테이블만 샘플링할 수 있습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1791271676 = messageFormatterFn((function(  ) {
  return function(d) { return "샘플링 Uber"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1277681149 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 드롭다운"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1926517411 = messageFormatterFn((function(  ) {
  return function(d) { return "상위: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1886334712 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1169089115 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 추출을 만드는 데 시간이 걸릴 수 있습니다. 지금 추출을 만들거나, 다른 데이터 원본 또는 시트를 선택할 때까지 기다리면 추출이 자동으로 만들어집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a479663822 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a849337575 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 위치에서 데이터를 가져오는 중:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a714189558 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1640637563 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1887215631 = messageFormatterFn((function(  ) {
  return function(d) { return "및 닫기."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2035366520 = messageFormatterFn((function(  ) {
  return function(d) { return "경과 시간(hh:mm:ss):"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1136797830 = messageFormatterFn((function(  ) {
  return function(d) { return "저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1540075636 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 이름으로 저장..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b203285908 = messageFormatterFn((function(  ) {
  return function(d) { return "또는"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a233966673 = messageFormatterFn((function(  ) {
  return function(d) { return "추출을 만드는 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1029011227 = messageFormatterFn((function(  ) {
  return function(d) { return "추출을 새로 고치는 데 시간이 다소 걸릴 수 있습니다. 계속하시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b959294962 = messageFormatterFn((function(  ) {
  return function(d) { return "지금 새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a539788854 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b258535759 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a845364030 = messageFormatterFn((function(  ) {
  return function(d) { return "에디터 닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a722890431 = messageFormatterFn((function(  ) {
  return function(d) { return "이제 에디터를 닫을 수 있습니다. 추출이 완료되면 '" + d.WORKBOOK_NAME + "' 통합 문서가 '" + d.PROJECT_NAME + "' 프로젝트에 저장되고 이메일 알림을 받게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1328420962 = messageFormatterFn((function(  ) {
  return function(d) { return "추출 완료 시 알림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2011470253 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본에 대한 비밀번호 내장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1897938488 = messageFormatterFn((function(  ) {
  return function(d) { return "완료 시 나에게 알림"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a266148755 = messageFormatterFn((function(  ) {
  return function(d) { return "저장 위치 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1372202414 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a489498391 = messageFormatterFn((function(  ) {
  return function(d) { return "저장 위치 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1466228453 = messageFormatterFn((function(  ) {
  return function(d) { return "추출이 완료되면 통합 문서가 이 위치에 게시되고 이메일 알림을 받게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b276854834 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1772046088 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1913904765 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1020278370 = messageFormatterFn((function(  ) {
  return function(d) { return "테두리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1995248509 = messageFormatterFn((function(  ) {
  return function(d) { return "셀"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1337853454 = messageFormatterFn((function(  ) {
  return function(d) { return "열 색상 교차"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a557533323 = messageFormatterFn((function(  ) {
  return function(d) { return "열 구분선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1323266312 = messageFormatterFn((function(  ) {
  return function(d) { return "열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1955822672 = messageFormatterFn((function(  ) {
  return function(d) { return "모퉁이"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a269912588 = messageFormatterFn((function(  ) {
  return function(d) { return "파선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b150226363 = messageFormatterFn((function(  ) {
  return function(d) { return "점선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1298873994 = messageFormatterFn((function(  ) {
  return function(d) { return "총합계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1682228712 = messageFormatterFn((function(  ) {
  return function(d) { return "머리글"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b533899841 = messageFormatterFn((function(  ) {
  return function(d) { return "가로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1129856223 = messageFormatterFn((function(  ) {
  return function(d) { return "수준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1975510061 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1931181053 = messageFormatterFn((function(  ) {
  return function(d) { return "패널"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b258549714 = messageFormatterFn((function(  ) {
  return function(d) { return "행 색상 교차"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b343789105 = messageFormatterFn((function(  ) {
  return function(d) { return "행 구분선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1860711884 = messageFormatterFn((function(  ) {
  return function(d) { return "행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b970384826 = messageFormatterFn((function(  ) {
  return function(d) { return "실선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1947611274 = messageFormatterFn((function(  ) {
  return function(d) { return "총계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b56382319 = messageFormatterFn((function(  ) {
  return function(d) { return "세로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a711415753 = messageFormatterFn((function(  ) {
  return function(d) { return "워크시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1928606121 = messageFormatterFn((function(  ) {
  return function(d) { return "pane header linked"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b655911422 = messageFormatterFn((function(  ) {
  return function(d) { return "pane header unlinked"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1837547940 = messageFormatterFn((function(  ) {
  return function(d) { return "Size"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1155544187 = messageFormatterFn((function(  ) {
  return function(d) { return "Shading"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a398605156 = messageFormatterFn((function(  ) {
  return function(d) { return "서식 패널 닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1533817147 = messageFormatterFn((function(  ) {
  return function(d) { return "색상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1601875017 = messageFormatterFn((function(  ) {
  return function(d) { return d.context + " 서식 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b456579810 = messageFormatterFn((function(  ) {
  return function(d) { return "죄송합니다. 오류가 발생했습니다! 서식 패널을 닫고 다시 시도해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b456578849 = messageFormatterFn((function(  ) {
  return function(d) { return "오류 보고서를 엔지니어에게 보냈습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1342802989 = messageFormatterFn((function(  ) {
  return function(d) { return "채우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1401263117 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 패밀리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a566367568 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1146830367 = messageFormatterFn((function(  ) {
  return function(d) { return "서식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1707621383 = messageFormatterFn((function(  ) {
  return function(d) { return "16진수 색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a813427556 = messageFormatterFn((function(  ) {
  return function(d) { return "대화형 컨트롤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1751396369 = messageFormatterFn((function(  ) {
  return function(d) { return "범례, 필터, 하이라이터 및 매개 변수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1511099075 = messageFormatterFn((function(  ) {
  return function(d) { return "간단히"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1548920191 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1649590790 = messageFormatterFn((function(  ) {
  return function(d) { return "다중"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1577430178 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b641226808 = messageFormatterFn((function(  ) {
  return function(d) { return "기본값으로 재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b495938493 = messageFormatterFn((function(  ) {
  return function(d) { return "테두리 및 구분선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2115030811 = messageFormatterFn((function(  ) {
  return function(d) { return "라인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b686926762 = messageFormatterFn((function(  ) {
  return function(d) { return "Shading and Banding"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b625371474 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1717595091 = messageFormatterFn((function(  ) {
  return function(d) { return "십억(B)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1717599896 = messageFormatterFn((function(  ) {
  return function(d) { return "십억(G)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b513518088 = messageFormatterFn((function(  ) {
  return function(d) { return "굵게"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a457368157 = messageFormatterFn((function(  ) {
  return function(d) { return "아래쪽 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2083704051 = messageFormatterFn((function(  ) {
  return function(d) { return "가운데 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1483984769 = messageFormatterFn((function(  ) {
  return function(d) { return "색상표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1882724075 = messageFormatterFn((function(  ) {
  return function(d) { return "통화(사용자 지정)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b817880287 = messageFormatterFn((function(  ) {
  return function(d) { return "통화(표준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b874254876 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1947972987 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 형식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1913543264 = messageFormatterFn((function(  ) {
  return function(d) { return "https://help.tableau.com/current/pro/desktop/ko-kr/formatting_specific_numbers.htm"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b469003607 = messageFormatterFn((function(  ) {
  return function(d) { return "어두운 색상표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a286962212 = messageFormatterFn((function(  ) {
  return function(d) { return "파선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1922589952 = messageFormatterFn((function(  ) {
  return function(d) { return "소수 자릿수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b133176739 = messageFormatterFn((function(  ) {
  return function(d) { return "점선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b489955548 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 패밀리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a796801575 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a199989157 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 스타일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b426954338 = messageFormatterFn((function(  ) {
  return function(d) { return "16진수 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1789872359 = messageFormatterFn((function(  ) {
  return function(d) { return "가로 맞춤 컨트롤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b752578887 = messageFormatterFn((function(  ) {
  return function(d) { return "1,000 단위 구분 기호 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1028742680 = messageFormatterFn((function(  ) {
  return function(d) { return "해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b310274276 = messageFormatterFn((function(  ) {
  return function(d) { return "설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b417732381 = messageFormatterFn((function(  ) {
  return function(d) { return "기울임꼴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1158182076 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b499818751 = messageFormatterFn((function(  ) {
  return function(d) { return "왼쪽 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1268953543 = messageFormatterFn((function(  ) {
  return function(d) { return "수준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1369714393 = messageFormatterFn((function(  ) {
  return function(d) { return "밝은 색상표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1082452938 = messageFormatterFn((function(  ) {
  return function(d) { return "선 스타일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b919041515 = messageFormatterFn((function(  ) {
  return function(d) { return "선 너비"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a420371085 = messageFormatterFn((function(  ) {
  return function(d) { return "로캘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1644079181 = messageFormatterFn((function(  ) {
  return function(d) { return "중간 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1911629434 = messageFormatterFn((function(  ) {
  return function(d) { return "백만(M)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1225258326 = messageFormatterFn((function(  ) {
  return function(d) { return "음수 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a741468985 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b169907733 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b457422259 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자(사용자 지정)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1197402535 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자(표준)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1181699050 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b957974898 = messageFormatterFn((function(  ) {
  return function(d) { return "불투명도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a906515149 = messageFormatterFn((function(  ) {
  return function(d) { return "백분율"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1525993669 = messageFormatterFn((function(  ) {
  return function(d) { return "접두사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1146091844 = messageFormatterFn((function(  ) {
  return function(d) { return "오른쪽 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2028355428 = messageFormatterFn((function(  ) {
  return function(d) { return "공학용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1835893463 = messageFormatterFn((function(  ) {
  return function(d) { return "색상 선택기 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b831287506 = messageFormatterFn((function(  ) {
  return function(d) { return "실선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a855630276 = messageFormatterFn((function(  ) {
  return function(d) { return "접미사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1982834833 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a669005685 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a749440424 = messageFormatterFn((function(  ) {
  return function(d) { return "아래로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b152489276 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 방향: " + d.textOrientationSelection; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1236200979 = messageFormatterFn((function(  ) {
  return function(d) { return "일반"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a778937377 = messageFormatterFn((function(  ) {
  return function(d) { return "위로"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1190644568 = messageFormatterFn((function(  ) {
  return function(d) { return "천(K)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1529697123 = messageFormatterFn((function(  ) {
  return function(d) { return "위쪽 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1775335665 = messageFormatterFn((function(  ) {
  return function(d) { return "밑줄"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a912662258 = messageFormatterFn((function(  ) {
  return function(d) { return "표시 단위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1323642489 = messageFormatterFn((function(  ) {
  return function(d) { return "세로 맞춤 컨트롤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a22403638 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1277683747 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 줄 바꿈: " + d.wordWrapSelection; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a13189342 = messageFormatterFn((function(  ) {
  return function(d) { return "줄 바꿈 해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b692305562 = messageFormatterFn((function(  ) {
  return function(d) { return "줄 바꿈 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1733160747 = messageFormatterFn((function(  ) {
  return function(d) { return "목록을 필터링하려면 여기에 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a220024905 = messageFormatterFn((function(  ) {
  return function(d) { return "이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a335792573 = messageFormatterFn((function(  ) {
  return function(d) { return "목록에서 바로 이동하려는 항목을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1326816155 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a717799712 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b288209354 = messageFormatterFn((function(  ) {
  return function(d) { return "복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b31014041 = messageFormatterFn((function(  ) {
  return function(d) { return "로드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1247017121 = messageFormatterFn((function(  ) {
  return function(d) { return "부동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a260042333 = messageFormatterFn((function(  ) {
  return function(d) { return "개체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1798752810 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드 제목 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b163880297 = messageFormatterFn((function(  ) {
  return function(d) { return "바둑판식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1337446465 = messageFormatterFn((function(  ) {
  return function(d) { return "대체 텍스트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1301874623 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1288463261 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2064391164 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지 가운데 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2129559849 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지 파일 선택..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a756732073 = messageFormatterFn((function(  ) {
  return function(d) { return "선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1543444898 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지 개체 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1716237158 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지 파일 삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1555990544 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지 맞추기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b849391633 = messageFormatterFn((function(  ) {
  return function(d) { return "파일 또는 링크 설정/해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1034290731 = messageFormatterFn((function(  ) {
  return function(d) { return "웹 이미지의 URL 입력..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1262438803 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지 링크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a830033503 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b218594535 = messageFormatterFn((function(  ) {
  return function(d) { return "옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1186727128 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지를 클릭하면 열리는 URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1096424156 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1600204017 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 이미 이름이 \"" + d.mapName + "\"인 맵을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1822636182 = messageFormatterFn((function(  ) {
  return function(d) { return "중복 맵 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b731308862 = messageFormatterFn((function(  ) {
  return function(d) { return "이 이름은 이미 사용 중입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1526778207 = messageFormatterFn((function(  ) {
  return function(d) { return "새 맵 무시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b246825467 = messageFormatterFn((function(  ) {
  return function(d) { return "새 맵으로 기존 맵 바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1205781466 = messageFormatterFn((function(  ) {
  return function(d) { return "새 맵 이름 바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b856659298 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1461563237 = messageFormatterFn((function(  ) {
  return function(d) { return "새 맵 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1153547600 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.mapName + "\"은(는) Tableau 맵의 예약된 이름입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b91595453 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a10581916 = messageFormatterFn((function(  ) {
  return function(d) { return "초기 SQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1735524166 = messageFormatterFn((function(  ) {
  return function(d) { return "여기에 SQL 쿼리를 입력하십시오. 예: 'CREATE TABLE " + "#" + "TempTable(x varchar(25));'"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a533936910 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 시간에 실행할 SQL 문:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b417429849 = messageFormatterFn((function(  ) {
  return function(d) { return "삽입:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1085589083 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a97929509 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1666881490 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a138873304 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 선택 취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1072260828 = messageFormatterFn((function(  ) {
  return function(d) { return "스키마 수준 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a89345014 = messageFormatterFn((function(  ) {
  return function(d) { return "예시 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2097838096 = messageFormatterFn((function(  ) {
  return function(d) { return "스키마"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a588845328 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a760890794 = messageFormatterFn((function(  ) {
  return function(d) { return "필요한 데이터가 보이지 않습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1369596646 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Desktop은 전체 JSON 파일을 검사할 수 있는 풍부한 기능을 제공합니다. Tableau Desktop에서 흐름을 계속 진행하여 추가 분석을 수행할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1470876456 = messageFormatterFn((function(  ) {
  return function(d) { return "스키마는 문서 샘플을 검사하여 유추됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1784727087 = messageFormatterFn((function(  ) {
  return function(d) { return "스키마 수준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b484019024 = messageFormatterFn((function(  ) {
  return function(d) { return "개 선택됨. 이 숫자가 높으면 로드 시간이 느려질 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1869817893 = messageFormatterFn((function(  ) {
  return function(d) { return "워크시트에서 차원 및 측정값으로 사용할 수 있도록 설정할 스키마 수준을 선택하세요."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2141962062 = messageFormatterFn((function(  ) {
  return function(d) { return "스키마 수준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a691575609 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1034130483 = messageFormatterFn((function(  ) {
  return function(d) { return "선택됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1010935537 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b572242249 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1181258692 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1447775553 = messageFormatterFn((function(  ) {
  return function(d) { return "Alt+"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b187215263 = messageFormatterFn((function(  ) {
  return function(d) { return "⌘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a916429811 = messageFormatterFn((function(  ) {
  return function(d) { return "Ctrl+"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2053066034 = messageFormatterFn((function(  ) {
  return function(d) { return "⌃"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1102333766 = messageFormatterFn((function(  ) {
  return function(d) { return "⌥"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1296885197 = messageFormatterFn((function(  ) {
  return function(d) { return "⇧"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1070331752 = messageFormatterFn((function(  ) {
  return function(d) { return "Shift+"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1094526873 = messageFormatterFn((function(  ) {
  return function(d) { return "Win+"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b686860367 = messageFormatterFn((function(  ) {
  return function(d) { return "&"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1930947321 = messageFormatterFn((function(  ) {
  return function(d) { return "아래쪽 화살표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1711650004 = messageFormatterFn((function(  ) {
  return function(d) { return "왼쪽 화살표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b376328083 = messageFormatterFn((function(  ) {
  return function(d) { return "오른쪽 화살표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2070776000 = messageFormatterFn((function(  ) {
  return function(d) { return "위쪽 화살표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1498999884 = messageFormatterFn((function(  ) {
  return function(d) { return "*"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1540596310 = messageFormatterFn((function(  ) {
  return function(d) { return "@"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a155634418 = messageFormatterFn((function(  ) {
  return function(d) { return "백슬래시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a269671483 = messageFormatterFn((function(  ) {
  return function(d) { return "백스페이스"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1000760158 = messageFormatterFn((function(  ) {
  return function(d) { return "`"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b643585530 = messageFormatterFn((function(  ) {
  return function(d) { return "Caps Lock"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1838164289 = messageFormatterFn((function(  ) {
  return function(d) { return "^"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a573467049 = messageFormatterFn((function(  ) {
  return function(d) { return ">"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1654254069 = messageFormatterFn((function(  ) {
  return function(d) { return "닫는 중괄호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1099646488 = messageFormatterFn((function(  ) {
  return function(d) { return ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1758479245 = messageFormatterFn((function(  ) {
  return function(d) { return "]"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1442605157 = messageFormatterFn((function(  ) {
  return function(d) { return ":"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1441753711 = messageFormatterFn((function(  ) {
  return function(d) { return "쉼표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b861920276 = messageFormatterFn((function(  ) {
  return function(d) { return "빼기 부호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b322372603 = messageFormatterFn((function(  ) {
  return function(d) { return "Del"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1433479155 = messageFormatterFn((function(  ) {
  return function(d) { return "$"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b847032921 = messageFormatterFn((function(  ) {
  return function(d) { return "\""; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a155806923 = messageFormatterFn((function(  ) {
  return function(d) { return "8"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b165056937 = messageFormatterFn((function(  ) {
  return function(d) { return "End"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a310867156 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b560676583 = messageFormatterFn((function(  ) {
  return function(d) { return "="; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a699111771 = messageFormatterFn((function(  ) {
  return function(d) { return "Esc"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1461753622 = messageFormatterFn((function(  ) {
  return function(d) { return "!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806470555 = messageFormatterFn((function(  ) {
  return function(d) { return "F1"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b166000639 = messageFormatterFn((function(  ) {
  return function(d) { return "F10"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b165999678 = messageFormatterFn((function(  ) {
  return function(d) { return "F11"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b165998717 = messageFormatterFn((function(  ) {
  return function(d) { return "F12"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806469594 = messageFormatterFn((function(  ) {
  return function(d) { return "F2"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806468633 = messageFormatterFn((function(  ) {
  return function(d) { return "F3"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806467672 = messageFormatterFn((function(  ) {
  return function(d) { return "F4"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806466711 = messageFormatterFn((function(  ) {
  return function(d) { return "F5"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806465750 = messageFormatterFn((function(  ) {
  return function(d) { return "F6"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806464789 = messageFormatterFn((function(  ) {
  return function(d) { return "F7"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806463828 = messageFormatterFn((function(  ) {
  return function(d) { return "F8"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806462867 = messageFormatterFn((function(  ) {
  return function(d) { return "F9"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b797187316 = messageFormatterFn((function(  ) {
  return function(d) { return "5"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2007041426 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b791663488 = messageFormatterFn((function(  ) {
  return function(d) { return "4"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b734656007 = messageFormatterFn((function(  ) {
  return function(d) { return "Home"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b600298093 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242712023 = messageFormatterFn((function(  ) {
  return function(d) { return "A"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242712984 = messageFormatterFn((function(  ) {
  return function(d) { return "B"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242713945 = messageFormatterFn((function(  ) {
  return function(d) { return "C"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242714906 = messageFormatterFn((function(  ) {
  return function(d) { return "D"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242715867 = messageFormatterFn((function(  ) {
  return function(d) { return "E"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242716828 = messageFormatterFn((function(  ) {
  return function(d) { return "F"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242717789 = messageFormatterFn((function(  ) {
  return function(d) { return "G"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242718750 = messageFormatterFn((function(  ) {
  return function(d) { return "H"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242719711 = messageFormatterFn((function(  ) {
  return function(d) { return "I"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242720672 = messageFormatterFn((function(  ) {
  return function(d) { return "J"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242721633 = messageFormatterFn((function(  ) {
  return function(d) { return "K"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242722594 = messageFormatterFn((function(  ) {
  return function(d) { return "L"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242723555 = messageFormatterFn((function(  ) {
  return function(d) { return "M"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242724516 = messageFormatterFn((function(  ) {
  return function(d) { return "N"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242725477 = messageFormatterFn((function(  ) {
  return function(d) { return "O"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242726438 = messageFormatterFn((function(  ) {
  return function(d) { return "P"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242727399 = messageFormatterFn((function(  ) {
  return function(d) { return "Q"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242728360 = messageFormatterFn((function(  ) {
  return function(d) { return "R"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242729321 = messageFormatterFn((function(  ) {
  return function(d) { return "S"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242730282 = messageFormatterFn((function(  ) {
  return function(d) { return "T"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242731243 = messageFormatterFn((function(  ) {
  return function(d) { return "U"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242732204 = messageFormatterFn((function(  ) {
  return function(d) { return "V"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242733165 = messageFormatterFn((function(  ) {
  return function(d) { return "W"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242734126 = messageFormatterFn((function(  ) {
  return function(d) { return "X"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242735087 = messageFormatterFn((function(  ) {
  return function(d) { return "Y"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a242736048 = messageFormatterFn((function(  ) {
  return function(d) { return "Z"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1705777514 = messageFormatterFn((function(  ) {
  return function(d) { return "↓"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1486480197 = messageFormatterFn((function(  ) {
  return function(d) { return "←"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1985998658 = messageFormatterFn((function(  ) {
  return function(d) { return "→"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a244539535 = messageFormatterFn((function(  ) {
  return function(d) { return "↑"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1854506656 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a768431357 = messageFormatterFn((function(  ) {
  return function(d) { return "-"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b687839773 = messageFormatterFn((function(  ) {
  return function(d) { return "↵"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b196031956 = messageFormatterFn((function(  ) {
  return function(d) { return "⎋"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1603309716 = messageFormatterFn((function(  ) {
  return function(d) { return "."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1122210053 = messageFormatterFn((function(  ) {
  return function(d) { return "+"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1108050799 = messageFormatterFn((function(  ) {
  return function(d) { return "␣"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b600700295 = messageFormatterFn((function(  ) {
  return function(d) { return "메뉴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b568392436 = messageFormatterFn((function(  ) {
  return function(d) { return "9"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b155820766 = messageFormatterFn((function(  ) {
  return function(d) { return "1"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1230531161 = messageFormatterFn((function(  ) {
  return function(d) { return "<"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a864177989 = messageFormatterFn((function(  ) {
  return function(d) { return "여는 중괄호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a566652776 = messageFormatterFn((function(  ) {
  return function(d) { return "("; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a652630237 = messageFormatterFn((function(  ) {
  return function(d) { return "["; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1472269077 = messageFormatterFn((function(  ) {
  return function(d) { return "Page down"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b282591196 = messageFormatterFn((function(  ) {
  return function(d) { return "Page up"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2121861726 = messageFormatterFn((function(  ) {
  return function(d) { return "%"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b708165989 = messageFormatterFn((function(  ) {
  return function(d) { return "마침표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b508141580 = messageFormatterFn((function(  ) {
  return function(d) { return "더하기 부호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1513280392 = messageFormatterFn((function(  ) {
  return function(d) { return "#"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b860050195 = messageFormatterFn((function(  ) {
  return function(d) { return "?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1876592621 = messageFormatterFn((function(  ) {
  return function(d) { return ";"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b404802359 = messageFormatterFn((function(  ) {
  return function(d) { return "7"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1278550352 = messageFormatterFn((function(  ) {
  return function(d) { return "'"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b152257378 = messageFormatterFn((function(  ) {
  return function(d) { return "6"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b223380935 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b109343870 = messageFormatterFn((function(  ) {
  return function(d) { return "스페이스바"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b151593327 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a564886042 = messageFormatterFn((function(  ) {
  return function(d) { return "3"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a587944276 = messageFormatterFn((function(  ) {
  return function(d) { return "~"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b150925432 = messageFormatterFn((function(  ) {
  return function(d) { return "2"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b911275564 = messageFormatterFn((function(  ) {
  return function(d) { return "_"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1681589433 = messageFormatterFn((function(  ) {
  return function(d) { return "|"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b228407934 = messageFormatterFn((function(  ) {
  return function(d) { return "0"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b951431574 = messageFormatterFn((function(  ) {
  return function(d) { return "Analytics 확장 프로그램 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a331027662 = messageFormatterFn((function(  ) {
  return function(d) { return "바인딩 연결 실패"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1904643362 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b275491018 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b823149106 = messageFormatterFn((function(  ) {
  return function(d) { return "Analytics 확장 프로그램 연결 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b5996547 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1366151006 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1965421630 = messageFormatterFn((function(  ) {
  return function(d) { return "템플릿 프로젝트 기여자를 숨깁니다!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b231725273 = messageFormatterFn((function(  ) {
  return function(d) { return "선택된 연결이 없으면 게시된 통합 문서의 일부 비주얼리제이션이 중단될 수 있습니다. 연결 관련 문제는 서버 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1075578076 = messageFormatterFn((function(  ) {
  return function(d) { return "선택..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1356405187 = messageFormatterFn((function(  ) {
  return function(d) { return "템플릿 프로젝트 기여자를 표시합니다!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a410110454 = messageFormatterFn((function(  ) {
  return function(d) { return "백그라운드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a189285302 = messageFormatterFn((function(  ) {
  return function(d) { return "인구 통계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a383041457 = messageFormatterFn((function(  ) {
  return function(d) { return "계층 컨트롤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a916905540 = messageFormatterFn((function(  ) {
  return function(d) { return "맵 스타일을 변경하는 동안 오류가 발생했습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1638693926 = messageFormatterFn((function(  ) {
  return function(d) { return "마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a530621207 = messageFormatterFn((function(  ) {
  return function(d) { return "상호 작용 사용 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1973381282 = messageFormatterFn((function(  ) {
  return function(d) { return "상호 작용 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2141002788 = messageFormatterFn((function(  ) {
  return function(d) { return d.layerName + " 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b584908501 = messageFormatterFn((function(  ) {
  return function(d) { return d.layerName + " 숨기기 취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2146270280 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b131596608 = messageFormatterFn((function(  ) {
  return function(d) { return "설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b609288423 = messageFormatterFn((function(  ) {
  return function(d) { return "백그라운드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1420584258 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1503132750 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2136196008 = messageFormatterFn((function(  ) {
  return function(d) { return "계층"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1237221742 = messageFormatterFn((function(  ) {
  return function(d) { return "색상표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b200492007 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 계층"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a693579293 = messageFormatterFn((function(  ) {
  return function(d) { return "이 계층을 보려면 확대하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a766979590 = messageFormatterFn((function(  ) {
  return function(d) { return d.category + " 범주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1133543450 = messageFormatterFn((function(  ) {
  return function(d) { return "배경 맵 계층"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b843641807 = messageFormatterFn((function(  ) {
  return function(d) { return "기본값으로 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1084673069 = messageFormatterFn((function(  ) {
  return function(d) { return "맵 계층 패널을 로드하는 동안 오류가 발생했습니다. 패널을 다시 연 후 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b419728383 = messageFormatterFn((function(  ) {
  return function(d) { return "맵 스타일을 변경하는 동안 오류가 발생했습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1920401400 = messageFormatterFn((function(  ) {
  return function(d) { return "사용할 수 있는 계층이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2094780801 = messageFormatterFn((function(  ) {
  return function(d) { return "백그라운드 레이어"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1932614138 = messageFormatterFn((function(  ) {
  return function(d) { return "백그라운드 반복"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a440328269 = messageFormatterFn((function(  ) {
  return function(d) { return "기본값으로 재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b908757558 = messageFormatterFn((function(  ) {
  return function(d) { return "스타일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b480686752 = messageFormatterFn((function(  ) {
  return function(d) { return "투명도(%)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2134269536 = messageFormatterFn((function(  ) {
  return function(d) { return "Mapbox 맵 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a687663226 = messageFormatterFn((function(  ) {
  return function(d) { return "WMS 맵 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b981930780 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1180109960 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1470773571 = messageFormatterFn((function(  ) {
  return function(d) { return "Mapbox 맵 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1029234563 = messageFormatterFn((function(  ) {
  return function(d) { return "WMS 맵 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a121236448 = messageFormatterFn((function(  ) {
  return function(d) { return "오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1531272217 = messageFormatterFn((function(  ) {
  return function(d) { return "맵 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b847420769 = messageFormatterFn((function(  ) {
  return function(d) { return "맵 서비스 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1653094023 = messageFormatterFn((function(  ) {
  return function(d) { return "Mapbox"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b198561712 = messageFormatterFn((function(  ) {
  return function(d) { return "새 Mapbox 연결을 추가하는 동안 오류가 발생했습니다. Mapbox URL이 올바른지 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1313278255 = messageFormatterFn((function(  ) {
  return function(d) { return "Mapbox 연결을 편집하는 동안 오류가 발생했습니다. Mapbox URL이 올바른지 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a916512472 = messageFormatterFn((function(  ) {
  return function(d) { return "Mapbox 서버에 연결하는 동안 문제가 발생했습니다. API 토큰과 Mapbox 맵 ID를 확인하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b899156356 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a98886486 = messageFormatterFn((function(  ) {
  return function(d) { return "입력한 URL이 잘못된 형식입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1461289126 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a443951217 = messageFormatterFn((function(  ) {
  return function(d) { return "스타일 이름이 이미 사용 중입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a869666000 = messageFormatterFn((function(  ) {
  return function(d) { return "스타일 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1572642097 = messageFormatterFn((function(  ) {
  return function(d) { return "스타일 이름 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1825626723 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1288170972 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a7944155 = messageFormatterFn((function(  ) {
  return function(d) { return "WMS"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2116355236 = messageFormatterFn((function(  ) {
  return function(d) { return "새 WMS 연결을 추가하는 동안 오류가 발생했습니다. WMS URL이 올바른지 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1563827796 = messageFormatterFn((function(  ) {
  return function(d) { return "바둑판식 맵 사용(권장)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a61259611 = messageFormatterFn((function(  ) {
  return function(d) { return "WMS 연결을 편집하는 동안 오류가 발생했습니다. WMS URL이 올바른지 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b992720203 = messageFormatterFn((function(  ) {
  return function(d) { return "추가..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1603770249 = messageFormatterFn((function(  ) {
  return function(d) { return "이 맵을 삭제하시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b826655072 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b948382511 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b998753772 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제 확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a511534251 = messageFormatterFn((function(  ) {
  return function(d) { return "URL / 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1443719058 = messageFormatterFn((function(  ) {
  return function(d) { return "다운로드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a849006704 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a339036634 = messageFormatterFn((function(  ) {
  return function(d) { return "내보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1544235211 = messageFormatterFn((function(  ) {
  return function(d) { return "가져오기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1395221321 = messageFormatterFn((function(  ) {
  return function(d) { return "맵을 가져오는 동안 문제가 발생했습니다. 다시 시도하거나 다른 파일에 연결해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a611232286 = messageFormatterFn((function(  ) {
  return function(d) { return "맵 관리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2132315458 = messageFormatterFn((function(  ) {
  return function(d) { return "맵: " + d.mapSourceName + "이(가) 다음 워크시트에 사용되고 있음:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b639624052 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1918963810 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b98615717 = messageFormatterFn((function(  ) {
  return function(d) { return "AQL 쿼리 실패"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1597120934 = messageFormatterFn((function(  ) {
  return function(d) { return "이 메트릭을 추가할 대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b586687637 = messageFormatterFn((function(  ) {
  return function(d) { return "집계: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2117323335 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 계산이 이 측정값에 적용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b748880474 = messageFormatterFn((function(  ) {
  return function(d) { return "정보 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1552460364 = messageFormatterFn((function(  ) {
  return function(d) { return "경고 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b398160683 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭은 소유자의 관점에서 데이터를 표시합니다. 이 메트릭을 볼 수 있는 사용 권한이 있는 사용자는 소유자와 동일한 형식으로 데이터를 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b777878647 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 메트릭으로 돌아가기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1571146610 = messageFormatterFn((function(  ) {
  return function(d) { return "위치 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a43882777 = messageFormatterFn((function(  ) {
  return function(d) { return "위치 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b107829375 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a438613057 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: " + d.columnName + " 열의 유형을 쿼리할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a420201150 = messageFormatterFn((function(  ) {
  return function(d) { return "새 메트릭 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b752008702 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰에서 만들어진 메트릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1679906089 = messageFormatterFn((function(  ) {
  return function(d) { return "만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b665106311 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1158379132 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "측정값이 크기 제한을 초과합니다. 메트릭에 가장 최근 " + plural(d.dataPointsCount, 0, pluralFuncs.ko, { one: function() { return "값";}, other: function() { return d.dataPointsCountLoc + "개 값";} }) + "이 저장됩니다."; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b662269379 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: 해당 데이터 원본에 대한 정보를 가져오지 못함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b598709503 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: Tableau Server에서 해당 데이터 원본을 찾을 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1889881898 = messageFormatterFn((function(  ) {
  return function(d) { return "정의"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1335766589 = messageFormatterFn((function(  ) {
  return function(d) { return d.characters + "자 남음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a427572997 = messageFormatterFn((function(  ) {
  return function(d) { return "설명(선택 사항)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a514218308 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1982932193 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b589737565 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b874726054 = messageFormatterFn((function(  ) {
  return function(d) { return "덮어쓰기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a854563596 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a307090269 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 덮어쓰는 중 오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a275802435 = messageFormatterFn((function(  ) {
  return function(d) { return "오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1202927102 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: 가져오기 요청이 실패했습니다. API 키 누락이나 잘못된 CORS 구성이 원인일 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1896927327 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: 필드 목록을 가져오지 못함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2121115466 = messageFormatterFn((function(  ) {
  return function(d) { return "선택된 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1473047907 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b649571525 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭을 만들려면 마크를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1338132845 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭은 데이터를 추적하는 가장 빠른 방법입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1448766048 = messageFormatterFn((function(  ) {
  return function(d) { return "마크를 선택하여 새 메트릭을 만듭니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1049560809 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 값에 대한 HTTPS 요청을 수행할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a564222022 = messageFormatterFn((function(  ) {
  return function(d) { return "업데이트 날짜: " + d.lastUpdated; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1242915330 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1337810501 = messageFormatterFn((function(  ) {
  return function(d) { return "로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a213561951 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트 로드 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b277241369 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b725609373 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1190278645 = messageFormatterFn((function(  ) {
  return function(d) { return "선택된 필드 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b995100421 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a52860472 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 이름을 제공하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1381403643 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: API 키 쿠키를 찾을 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1783561586 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1878643185 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 이름 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1471538888 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰에서 만들어진 메트릭이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b971206360 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서에 메트릭을 만들 수 있는 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a676532190 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 권한에 대한 도움이 필요한 경우 통합 문서 소유자에게 연락하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1178454605 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: 제공된 데이터 원본 ID가 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1345286980 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: 선택된 필드가 없는 메트릭을 저장할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b364159184 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트를 찾을 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a574760168 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1818187123 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰의 전체 데이터를 다운로드할 수 있는 사용 권한이 없기 때문에 메트릭을 만들 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1468992985 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 권한에 대한 도움이 필요한 경우 이 뷰의 소유자에게 연락하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a762352697 = messageFormatterFn((function(  ) {
  return function(d) { return "값 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a215655269 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: 메트릭 값 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a162542268 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트를 선택해야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1074611479 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1473798244 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 덮어쓰기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1621813533 = messageFormatterFn((function(  ) {
  return function(d) { return "패널 닫기 실패"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b413861408 = messageFormatterFn((function(  ) {
  return function(d) { return "PAST"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a550412091 = messageFormatterFn((function(  ) {
  return function(d) { return "라인 차트에서 선택한 마크입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b950031687 = messageFormatterFn((function(  ) {
  return function(d) { return "미리 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2059929992 = messageFormatterFn((function(  ) {
  return function(d) { return "미리 보기는 메트릭에 대한 가장 최근 값을 보여 줍니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b955661086 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b398092728 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a840664306 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트 \"" + d.PROJECT_NAME + "\"에 대한 저장 권한이 없습니다. 다른 프로젝트를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1258069299 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a364054268 = messageFormatterFn((function(  ) {
  return function(d) { return "이 뷰에는 사용자 필터 또는 행 수준 보안이 있기 때문에 메트릭을 만들 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1481288325 = messageFormatterFn((function(  ) {
  return function(d) { return "참조 링크를 위한 자리 표시자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1648179511 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 값(선택 사항)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1548036131 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 \"" + d.metricName + "\"인 메트릭이 \"" + d.projectName + "\" 프로젝트에 이미 있습니다. 이 메트릭을 덮어쓸 수 있는 사용 권한이 없습니다. 메트릭의 이름을 바꾸거나 다른 프로젝트를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2061118599 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 \"" + d.metricName + "\"인 메트릭이 \"" + d.projectName + "\" 프로젝트에 이미 있습니다. 이 메트릭을 덮어쓸 수 없습니다. 메트릭의 이름을 바꾸거나 다른 프로젝트를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a321378465 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.metricName + "\" 메트릭을 덮어쓰는 동안 오류가 발생했으며 메트릭이 일부만 덮어써졌습니다. 메트릭 덮어쓰기를 다시 시도하십시오. 오류가 계속되면 Tableau 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1908144695 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.metricName + "\" 메트릭을 만들 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a991476602 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 \"" + d.metricName + "\"인 메트릭이 \"" + d.projectName + "\" 프로젝트에 이미 있습니다. 덮어쓰시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b686575921 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 \"" + d.metricName + "\"인 메트릭이 \"" + d.projectName + "\" 프로젝트에 이미 있습니다. 덮어쓰시겠습니까? 이 메트릭을 덮어쓰면 Tableau가 모든 기존 스냅샷을 저장합니다. 이 메트릭을 다른 스냅샷 메트릭으로 덮어쓰면 저장된 스냅샷이 표시됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1319478846 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 \"" + d.metricName + "\"인 메트릭이 \"" + d.projectName + "\" 프로젝트에 이미 있습니다. 덮어쓰시겠습니까? 이 메트릭을 덮어쓰는 경우 Tableau는 모든 기존 스냅샷을 저장하고 새 스냅샷 옆의 일정에 표시합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a781417145 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 \"" + d.metricName + "\"인 메트릭이 \"" + d.projectName + "\" 프로젝트에 이미 있습니다. 덮어쓰시겠습니까? 이 메트릭을 덮어쓰는 경우 Tableau는 기존 스냅샷을 저장하고 새 스냅샷 옆의 일정에 표시합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1483638142 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 \"" + d.metricName + "\"인 메트릭이 \"" + d.projectName + "\" 프로젝트에 이미 있습니다. 덮어쓰시겠습니까? 이 메트릭을 덮어쓰면 Tableau가 기존 스냅샷을 저장합니다. 이 메트릭을 다른 스냅샷 메트릭으로 덮어쓰면 저장된 스냅샷이 표시됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1287052322 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 \"" + d.metricName + "\"을(를) 프로젝트 \"" + d.projectName + "\"에 만들었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1051060521 = messageFormatterFn((function(  ) {
  return function(d) { return "선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1457137862 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1508607332 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷이 일정을 생성합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1423461338 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 상태"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1980320016 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1132854683 = messageFormatterFn((function(  ) {
  return function(d) { return "기간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b947514409 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a819226271 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b237577797 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1238944943 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1296090808 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b525188047 = messageFormatterFn((function(  ) {
  return function(d) { return "전송 오류: 잠시 후에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b474870937 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭을 만들 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a547055554 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: 알 수 없는 동작 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a232037021 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본의 비밀번호가 내장되어 있지 않거나 인증 방법이 지원되지 않기 때문에 이 뷰에서 메트릭을 만들 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1545459223 = messageFormatterFn((function(  ) {
  return function(d) { return "내장된 자격 증명에 대한 도움이 필요한 경우 이 뷰의 소유자에게 연락하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b3480197 = messageFormatterFn((function(  ) {
  return function(d) { return "이름을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a265867944 = messageFormatterFn((function(  ) {
  return function(d) { return "고급"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1374190126 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름 또는 비밀번호가 잘못되었습니다.  데이터베이스 이름 및 자격 증명을 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1474248144 = messageFormatterFn((function(  ) {
  return function(d) { return "찾아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a513011815 = messageFormatterFn((function(  ) {
  return function(d) { return "찾아보기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1137061130 = messageFormatterFn((function(  ) {
  return function(d) { return d.dataSourceCaption + "에 연결할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a296441893 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 버전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a903401589 = messageFormatterFn((function(  ) {
  return function(d) { return "자세한 오류 메시지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b670570090 = messageFormatterFn((function(  ) {
  return function(d) { return "드라이버 다운로드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b442927833 = messageFormatterFn((function(  ) {
  return function(d) { return "이 커넥터를 사용하려면 먼저 드라이버를 다운로드하여 설치해야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b280817800 = messageFormatterFn((function(  ) {
  return function(d) { return "일반"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b51355498 = messageFormatterFn((function(  ) {
  return function(d) { return "정보 및 지원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1096182352 = messageFormatterFn((function(  ) {
  return function(d) { return "초기 SQL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1631849023 = messageFormatterFn((function(  ) {
  return function(d) { return "삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b591454007 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1232338315 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 파일 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a953146982 = messageFormatterFn((function(  ) {
  return function(d) { return "선택 사항"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1401066760 = messageFormatterFn((function(  ) {
  return function(d) { return "로그인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b587568993 = messageFormatterFn((function(  ) {
  return function(d) { return "지원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2114992314 = messageFormatterFn((function(  ) {
  return function(d) { return "지원이 필요한 경우 문의처:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2044130727 = messageFormatterFn((function(  ) {
  return function(d) { return "Update and Restart"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a892096590 = messageFormatterFn((function(  ) {
  return function(d) { return "There is an update available for this connector."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1814121051 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2111789974 = messageFormatterFn((function(  ) {
  return function(d) { return "수정한 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1454375896 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b640643812 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1763018256 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 사용자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a133015274 = messageFormatterFn((function(  ) {
  return function(d) { return "통화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b646457658 = messageFormatterFn((function(  ) {
  return function(d) { return "위치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b35034631 = messageFormatterFn((function(  ) {
  return function(d) { return "적용하기 전에 데이터 역할을 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1805009402 = messageFormatterFn((function(  ) {
  return function(d) { return "기존 데이터 역할이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b440675633 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 데이터 역할에서 동의어가 상속됩니다. 아래 목록에서 액세스 권한이 있는 모든 데이터 역할 중에서 선택할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2116773652 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할 적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b3663150 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1483428886 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b501499764 = messageFormatterFn((function(  ) {
  return function(d) { return "축소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1397930239 = messageFormatterFn((function(  ) {
  return function(d) { return "확장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1752646437 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 데이터 역할에서 동의어 상속"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b537421647 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할을 적용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1372813512 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할이 없기 때문에 동의어를 상속할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1947104701 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할을 이 필드에 연결한 사용자가 동의어를 더 이상 볼 수 없으므로 동의어를 상속할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a681595573 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1172969951 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1031723141 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1704264684 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할 적용..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1149413690 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 데이터 역할 적용..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b10069064 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 역할이 적용되었습니다. 해당 사용 권한은 동의어를 상속하는 데 사용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1087498521 = messageFormatterFn((function(  ) {
  return function(d) { return "지리적 역할에서 상속"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a838332923 = messageFormatterFn((function(  ) {
  return function(d) { return "적용된 데이터 역할 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1580960860 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1720482776 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 데이터 역할을 나열하지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1141171871 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1694413638 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드의 동의어를 다른 데이터 원본에서 상속할 수 있도록 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b17627413 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할 게시..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1637165620 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a912714269 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 데이터 역할을 제거하지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a765258931 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a565017257 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b988592516 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜/시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a897508489 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1302044883 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자(정수)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a20606105 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1287445069 = messageFormatterFn((function(  ) {
  return function(d) { return "공간 데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1221865990 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1877090429 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1742072198 = messageFormatterFn((function(  ) {
  return function(d) { return "차원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1568696363 = messageFormatterFn((function(  ) {
  return function(d) { return "변경 내용을 저장할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1329900933 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 세부 정보 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b950096335 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1298024607 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1664504844 = messageFormatterFn((function(  ) {
  return function(d) { return "유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1588998044 = messageFormatterFn((function(  ) {
  return function(d) { return "구간차원 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1477889307 = messageFormatterFn((function(  ) {
  return function(d) { return "계산된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b149316557 = messageFormatterFn((function(  ) {
  return function(d) { return "열 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1253193566 = messageFormatterFn((function(  ) {
  return function(d) { return "결합된 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2139657222 = messageFormatterFn((function(  ) {
  return function(d) { return "결합된 집합 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a353087644 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1787448742 = messageFormatterFn((function(  ) {
  return function(d) { return "계층형 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1427566849 = messageFormatterFn((function(  ) {
  return function(d) { return "집합 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1939249717 = messageFormatterFn((function(  ) {
  return function(d) { return "필드에 대한 인덱싱 설정을 검색하는 동안 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b975726047 = messageFormatterFn((function(  ) {
  return function(d) { return "결과를 즉시 확인하려면 여기를 클릭하여 데이터 원본을 다시 인덱싱하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b634436183 = messageFormatterFn((function(  ) {
  return function(d) { return "값 인덱싱"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b121206343 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 값 인덱싱"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a556435930 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b923529188 = messageFormatterFn((function(  ) {
  return function(d) { return "값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1933613289 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 사용할 데이터 원본을 수정하고 다시 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a344790518 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명은 고유해야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a550645022 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 이 필드를 인덱싱할 수 없기 때문에 일부 분석 기능을 사용하지 않도록 설정했습니다. 인덱싱을 다시 시도하려면 데이터 원본을 다시 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1277710777 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1525892472 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 인덱스를 만들지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1073514594 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드에 값이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a638393027 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 이 필드를 인덱싱할 수 없기 때문에 일부 분석 기능을 사용하지 않도록 설정했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1319949630 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 문자열 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1550257501 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 필터로 인해 필드 인덱싱을 사용하지 않도록 설정했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1897193467 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 이 필드를 인덱싱할 수 없기 때문에 일부 분석 기능을 사용하지 않도록 설정했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1706282870 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b214861675 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 인덱스를 만들지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a331440404 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1039877875 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 인덱스를 만들지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a185735134 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 사용할 수 있도록 데이터 원본을 수정하고 다시 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1185583145 = messageFormatterFn((function(  ) {
  return function(d) { return "수식이 잘못되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1489091792 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 이 필드의 인덱싱이 지원되지 않으며 지금은 따옴표로 묶이지 않은 값을 인식할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1434557225 = messageFormatterFn((function(  ) {
  return function(d) { return "인덱싱이 지원되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1642826314 = messageFormatterFn((function(  ) {
  return function(d) { return "위도 또는 경도 유형의 필드는 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b530369322 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드는 매개 변수를 참조하는 상수 수식을 포함하기 때문에 데이터에 질문에서 지원되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b69116483 = messageFormatterFn((function(  ) {
  return function(d) { return "지원되지 않는 집계 유형입니다. 데이터에 질문에서 사용할 수 있도록 데이터 원본을 수정하고 다시 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b336155360 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드의 이름에는 올바르지 않은 문자가 있으므로 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1439376963 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명은 숫자, 값 또는 날짜일 수 없으므로 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a154641083 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드명은 25자 제한을 초과합니다. 데이터에 질문에서 이 필드를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1583682969 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명이 예약된 용어이므로 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2077578317 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명의 길이는 1자 이상이어야 합니다. 데이터에 질문에서 이 필드를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b854781214 = messageFormatterFn((function(  ) {
  return function(d) { return "클러스터 필드는 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1128018701 = messageFormatterFn((function(  ) {
  return function(d) { return "결합된 필드는 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b935394107 = messageFormatterFn((function(  ) {
  return function(d) { return "결합된 집합 필드는 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1173121309 = messageFormatterFn((function(  ) {
  return function(d) { return "계층 필드는 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1811725878 = messageFormatterFn((function(  ) {
  return function(d) { return "집합 필드는 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b270902990 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없는 필드 유형입니다. 데이터에 질문에서 사용할 수 있도록 데이터 원본을 수정하고 다시 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1306489783 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 계산은 데이터에 질문에 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b581151426 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자, 부울, 날짜 또는 null은 허용되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a57722603 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명의 최대 길이는 " + d.maxLength + "자입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1203098382 = messageFormatterFn((function(  ) {
  return function(d) { return "이 이름을 편집하는 동안 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b787083901 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명의 길이는 " + d.minLength + "자 이상이어야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b104071410 = messageFormatterFn((function(  ) {
  return function(d) { return "이 이름은 이미 사용 중입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a313415836 = messageFormatterFn((function(  ) {
  return function(d) { return "원래 이름으로 되돌리기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a338687009 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2118343963 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2064661535 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a495953629 = messageFormatterFn((function(  ) {
  return function(d) { return "범위 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2058888217 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1738205701 = messageFormatterFn((function(  ) {
  return function(d) { return "수식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2101154095 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a399564404 = messageFormatterFn((function(  ) {
  return function(d) { return "값 분포"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1017560110 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.rowCount + "개 " + plural(d.rowCounter, 0, pluralFuncs.ko, { one: function() { return "행";}, other: function() { return "행";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b1479561400 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.valueCount + "개 " + plural(d.valueCounter, 0, pluralFuncs.ko, { one: function() { return "고유 값";}, other: function() { return "고유 값";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a2015859058 = messageFormatterFn((function(  ) {
  return function(d) { return "끝"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b192664117 = messageFormatterFn((function(  ) {
  return function(d) { return "시작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2047445278 = messageFormatterFn((function(  ) {
  return function(d) { return "Null"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1654948469 = messageFormatterFn((function(  ) {
  return function(d) { return "평균"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1935134446 = messageFormatterFn((function(  ) {
  return function(d) { return "최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a355305903 = messageFormatterFn((function(  ) {
  return function(d) { return "최소, 최대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1278218396 = messageFormatterFn((function(  ) {
  return function(d) { return "최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a979593964 = messageFormatterFn((function(  ) {
  return function(d) { return "처음 " + d.maxFetch + "개 값이 데이터에 질문에서 인식됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a82682985 = messageFormatterFn((function(  ) {
  return function(d) { return d.role + "(" + d.dataType + ") "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a71052850 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 찾기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a905366179 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a993451387 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1703106948 = messageFormatterFn((function(  ) {
  return function(d) { return "게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b950337639 = messageFormatterFn((function(  ) {
  return function(d) { return "제출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a924691098 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.objectName + "\" 테이블의 행 수를 계산하는 생성 필드입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b961876674 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블의 행 수를 계산하는 생성 필드입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a665585532 = messageFormatterFn((function(  ) {
  return function(d) { return "행 수를 계산하는 생성 필드입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1130015545 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 게시하여 모든 필드의 인덱싱을 마치거나, 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1735569318 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본에 대한 연결이 끊긴 후 인덱싱을 완료하지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a779099256 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 문자열 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b805458025 = messageFormatterFn((function(  ) {
  return function(d) { return "시스템 오류로 인해 인덱싱에 실패했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b154115627 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 문자열 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2022070220 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 소유자가 인덱싱을 사용하지 않도록 설정했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1395567374 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 문자열 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1192946605 = messageFormatterFn((function(  ) {
  return function(d) { return "시스템 오류로 인해 인덱싱에 실패했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1520179268 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문이 문자열 값을 빠르게 검색할 수 있도록 필드 수를 줄여서 다시 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1120699429 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본의 필드 수가 너무 많아 인덱싱할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b192673390 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 사용할 데이터 원본을 수정하고 다시 게시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1266803919 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명이 중복됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b518022808 = messageFormatterFn((function(  ) {
  return function(d) { return d.count + "개 필드 인덱스를 만들지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b528317789 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 더 많은 질문에 대한 답을 제공하고 필드 값을 인식할 수 있도록 데이터 원본에서 필드를 제거하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b516316030 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 필터로 인해 인덱싱이 사용되지 않도록 설정되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1323468367 = messageFormatterFn((function(  ) {
  return function(d) { return "추출을 만들고 다시 게시하여 성능을 개선하십시오. 데이터에 질문에서 문자열 값을 검색할 수 없게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1528913106 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본이 너무 느려 인덱싱할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a69907834 = messageFormatterFn((function(  ) {
  return function(d) { return "그러면 데이터에 질문에서 더 많은 질문에 대한 답을 제공하고 따옴표로 묶이지 않은 필드 값을 인식할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1848549657 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 자격 증명을 내장하여 인덱싱을 사용하면 데이터에 질문이 문자열 값을 빠르게 검색할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b188418223 = messageFormatterFn((function(  ) {
  return function(d) { return "값을 인덱싱하는 렌즈를 만드십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a726494384 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문은 관련 렌즈가 있는 경우에만 데이터 원본의 값을 인덱싱합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a175528230 = messageFormatterFn((function(  ) {
  return function(d) { return "인덱싱을 사용하면 데이터에 질문에서 필드 값을 빠르게 검색할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1456734769 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 완료:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1170668957 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 분포 마지막 업데이트:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1760051250 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 분포 " + d.count + " 업데이트 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1097960420 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 인덱싱 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b809601993 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldCountLoc + " 인덱싱 중"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a301359067 = messageFormatterFn((function(  ) {
  return function(d) { return "값 인덱싱 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1297208002 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도를 기다리는 중입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2091177448 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 필드 새로 고침"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b525056780 = messageFormatterFn((function(  ) {
  return function(d) { return "지금 인덱싱"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a611139633 = messageFormatterFn((function(  ) {
  return function(d) { return "지금 업데이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b639741331 = messageFormatterFn((function(  ) {
  return function(d) { return "지금 인덱싱"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a312918518 = messageFormatterFn((function(  ) {
  return function(d) { return "인덱싱 다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a240521257 = messageFormatterFn((function(  ) {
  return function(d) { return "인덱싱된 데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1774907093 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.fieldCountLoc + "개의 적격 " + plural(d.fieldCount, 0, pluralFuncs.ko, { one: function() { return "필드";}, other: function() { return "필드";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a1671007799 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.fieldCountLoc + "개의 지원되지 않는 " + plural(d.fieldCount, 0, pluralFuncs.ko, { one: function() { return "필드";}, other: function() { return "필드";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b2062101316 = messageFormatterFn((function(  ) {
  return function(d) { return "인덱싱됨:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a854810427 = messageFormatterFn((function(  ) {
  return function(d) { return "건너뜀:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a852152884 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1171086073 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1093434303 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 콘텐츠"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1417991047 = messageFormatterFn((function(  ) {
  return function(d) { return "인덱싱 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1730468482 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 설명의 최대 길이는 " + d.maxLength + "자입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b12077367 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명을 편집하는 동안 오류 발생(오류: " + d.errorCode + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a565301171 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 콘텐츠로 되돌리기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b634326476 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본에서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1426056528 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명이 너무 깁니다. 데이터에 질문을 더 잘 활용할 수 있도록 데이터 원본 또는 렌즈의 필드명을 바꾸십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1961663407 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈에 사용할 데이터 원본 필드를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a283979985 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈에서 [" + d.lens_display_name + "](으)로 이름이 변경됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1329677346 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2104746993 = messageFormatterFn((function(  ) {
  return function(d) { return "선택 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1740110193 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b356389439 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 필드를 업데이트하는 동안 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1725264252 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 필드가 업데이트되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2107187639 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 편집 권한을 확인하는 동안 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2011068846 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본의 [ " + d.field + " ]"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a440410948 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a238455399 = messageFormatterFn((function(  ) {
  return function(d) { return "차원 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2056603091 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b203843296 = messageFormatterFn((function(  ) {
  return function(d) { return "측정값 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b266933168 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.formattedItemCount + "개의 필드 " + plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return "동의어";}, other: function() { return "동의어";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b1714928953 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.formattedItemCount + "개 값의 " + plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return "동의어";}, other: function() { return "동의어";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a409657787 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할 콘텐츠"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b816493426 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할을 게시하여 이 필드의 동의어를 다른 데이터 원본에서 상속할 수 있도록 설정하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1629675783 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트에 대한 기본 사용 권한으로 데이터 역할이 만들어집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1750428493 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할 게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b842129087 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어가 있는 값만이 필드에서 데이터 역할로 복사됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1067187951 = messageFormatterFn((function(  ) {
  return function(d) { return "이 이름의 데이터 역할이 이미 존재합니다. 게시하면 기존 데이터 역할을 덮어씁니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b691445085 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할이 게시되었지만 적용되지는 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1184552533 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할을 게시할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1359144326 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할을 게시할 수 없습니다. 사용 권한이 거부되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a806782224 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할이 게시 및 적용되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b921901133 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1271102490 = messageFormatterFn((function(  ) {
  return function(d) { return "잘못된 문자를 포함합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b32796663 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어는 숫자, 부울, 날짜 또는 null이 아니어야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1320944668 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어는 " + d.max + "자 이하여야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1994492468 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어는 예약된 용어를 포함할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a848625081 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어의 최대 수는 25개입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b653653816 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어에는 적어도 문자 하나가 있어야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1831848065 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.value + "\"의 동의어"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1775794330 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 이름은 테이블 행을 집합적으로 나타내는 복수형 명사가 좋습니다. 예를 들어 \"주문\" 또는 \"고객\"을 사용할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b406351586 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b605898263 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어를 게시할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1104600160 = messageFormatterFn((function(  ) {
  return function(d) { return "동의어를 게시할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b594557823 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드에는 이미 필터가 있습니다. 기존 필터를 편집하거나 제거하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1870764336 = messageFormatterFn((function(  ) {
  return function(d) { return "사용할 수 있는 집계 유형이 더 이상 없기 때문에 이 필드를 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b976910967 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1232366851 = messageFormatterFn((function(  ) {
  return function(d) { return d.baseTitle + " - 데이터에 질문"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2138209045 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1830057811 = messageFormatterFn((function(  ) {
  return function(d) { return "전체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a904927913 = messageFormatterFn((function(  ) {
  return function(d) { return "포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a897494184 = messageFormatterFn((function(  ) {
  return function(d) { return "끝 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a283203550 = messageFormatterFn((function(  ) {
  return function(d) { return "포함하지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a275769821 = messageFormatterFn((function(  ) {
  return function(d) { return "제외할 끝 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b800667786 = messageFormatterFn((function(  ) {
  return function(d) { return "제외할 시작 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a483799294 = messageFormatterFn((function(  ) {
  return function(d) { return "특정 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b324009087 = messageFormatterFn((function(  ) {
  return function(d) { return "시작 문자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a475615271 = messageFormatterFn((function(  ) {
  return function(d) { return "범주형 필터 탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1226385500 = messageFormatterFn((function(  ) {
  return function(d) { return "와일드카드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1582828250 = messageFormatterFn((function(  ) {
  return function(d) { return "기본 데이터 분석"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b121405912 = messageFormatterFn((function(  ) {
  return function(d) { return "단순 계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b216841250 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 및 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a139786867 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2119248048 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1048296070 = messageFormatterFn((function(  ) {
  return function(d) { return "복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a737619078 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b500607963 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1368221794 = messageFormatterFn((function(  ) {
  return function(d) { return "제목 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1678668694 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b214606328 = messageFormatterFn((function(  ) {
  return function(d) { return d.addAQuestion + "할 때까지 이 그룹은 비어 있거나 다른 사용자에게 숨겨집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a575628059 = messageFormatterFn((function(  ) {
  return function(d) { return "이 섹션은 비어 있거나 다른 사용자에게 숨겨집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1559249231 = messageFormatterFn((function(  ) {
  return function(d) { return "핀 아이콘을 클릭합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a280719721 = messageFormatterFn((function(  ) {
  return function(d) { return "이 목록에 링크를 추가하거나 바꾸려면 비주얼리제이션으로 이동하여 툴바에서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b898717138 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 비주얼리제이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1577651424 = messageFormatterFn((function(  ) {
  return function(d) { return "섹션 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1942752357 = messageFormatterFn((function(  ) {
  return function(d) { return "변경 내용을 저장할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1792494281 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1987759870 = messageFormatterFn((function(  ) {
  return function(d) { return "AM"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a568559847 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a572887951 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b311612481 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a715868875 = messageFormatterFn((function(  ) {
  return function(d) { return "월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a990493687 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1979626015 = messageFormatterFn((function(  ) {
  return function(d) { return "두 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a992606623 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1049752488 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a415070622 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a109689272 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1231055784 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b758388286 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1585814960 = messageFormatterFn((function(  ) {
  return function(d) { return "월 및 일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a336539517 = messageFormatterFn((function(  ) {
  return function(d) { return "월, 일 및 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1375610839 = messageFormatterFn((function(  ) {
  return function(d) { return "4월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a144735254 = messageFormatterFn((function(  ) {
  return function(d) { return "8월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a33740728 = messageFormatterFn((function(  ) {
  return function(d) { return "12월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1074020341 = messageFormatterFn((function(  ) {
  return function(d) { return "2월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1785873651 = messageFormatterFn((function(  ) {
  return function(d) { return "1월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1721922837 = messageFormatterFn((function(  ) {
  return function(d) { return "7월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1721882475 = messageFormatterFn((function(  ) {
  return function(d) { return "6월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a254878886 = messageFormatterFn((function(  ) {
  return function(d) { return "3월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1161739960 = messageFormatterFn((function(  ) {
  return function(d) { return "5월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a222555525 = messageFormatterFn((function(  ) {
  return function(d) { return "11월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2111218691 = messageFormatterFn((function(  ) {
  return function(d) { return "10월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a13518772 = messageFormatterFn((function(  ) {
  return function(d) { return "9월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1568569646 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b772673016 = messageFormatterFn((function(  ) {
  return function(d) { return "초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a529407944 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2079771414 = messageFormatterFn((function(  ) {
  return function(d) { return d.weekNumber + "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a586553809 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a610531639 = messageFormatterFn((function(  ) {
  return function(d) { return "4분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a27958667 = messageFormatterFn((function(  ) {
  return function(d) { return "1분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1083262019 = messageFormatterFn((function(  ) {
  return function(d) { return "3분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a32854001 = messageFormatterFn((function(  ) {
  return function(d) { return "2분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1406172418 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b681306922 = messageFormatterFn((function(  ) {
  return function(d) { return "잘못된 연도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a243263094 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1976755913 = messageFormatterFn((function(  ) {
  return function(d) { return "종료 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a491128373 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 " + d.timeUnit; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a779170171 = messageFormatterFn((function(  ) {
  return function(d) { return "이번 " + d.timeUnit + " 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1676600426 = messageFormatterFn((function(  ) {
  return function(d) { return "오늘 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a194823016 = messageFormatterFn((function(  ) {
  return function(d) { return d.dateValue + "(데이터 없음)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1987313005 = messageFormatterFn((function(  ) {
  return function(d) { return "PM"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1240006825 = messageFormatterFn((function(  ) {
  return function(d) { return "일 번호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1269229284 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a193902032 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1970744143 = messageFormatterFn((function(  ) {
  return function(d) { return "주 번호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b841329844 = messageFormatterFn((function(  ) {
  return function(d) { return "요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1571835657 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1354863233 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1749595729 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1085124315 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b637314041 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b935144561 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b877998696 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a253610937 = messageFormatterFn((function(  ) {
  return function(d) { return "이전 " + d.timeUnit; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a332157417 = messageFormatterFn((function(  ) {
  return function(d) { return "MM/DD/YYYY"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b281525598 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a267703150 = messageFormatterFn((function(  ) {
  return function(d) { return "지난"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a328804491 = messageFormatterFn((function(  ) {
  return function(d) { return "다음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b737709014 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a518797074 = messageFormatterFn((function(  ) {
  return function(d) { return "범위 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b355052421 = messageFormatterFn((function(  ) {
  return function(d) { return "사이"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a818712298 = messageFormatterFn((function(  ) {
  return function(d) { return "종료"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1267479101 = messageFormatterFn((function(  ) {
  return function(d) { return "시작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2132602083 = messageFormatterFn((function(  ) {
  return function(d) { return "기준 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1415336868 = messageFormatterFn((function(  ) {
  return function(d) { return d.firstPeriod + " ~ " + d.lastPeriod; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1023183180 = messageFormatterFn((function(  ) {
  return function(d) { return "8일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1213520919 = messageFormatterFn((function(  ) {
  return function(d) { return "5월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1293603803 = messageFormatterFn((function(  ) {
  return function(d) { return "5월 8일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a800449416 = messageFormatterFn((function(  ) {
  return function(d) { return "5월 8일, 오후 10:32"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1427953567 = messageFormatterFn((function(  ) {
  return function(d) { return "금요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b952009220 = messageFormatterFn((function(  ) {
  return function(d) { return "주 24"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1342900444 = messageFormatterFn((function(  ) {
  return function(d) { return "2020"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a101296668 = messageFormatterFn((function(  ) {
  return function(d) { return "2020년 5월 8일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1027368710 = messageFormatterFn((function(  ) {
  return function(d) { return "2020년 5월 8일 오전 10시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b559971734 = messageFormatterFn((function(  ) {
  return function(d) { return "2020년 5월 8일 오전 10:32"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1647447360 = messageFormatterFn((function(  ) {
  return function(d) { return "2020년 5월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1881291436 = messageFormatterFn((function(  ) {
  return function(d) { return "2020년 1분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1731266762 = messageFormatterFn((function(  ) {
  return function(d) { return "2020년 5월 8일 오전 10:32:12"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b607650038 = messageFormatterFn((function(  ) {
  return function(d) { return "2020년 주 5"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b83281289 = messageFormatterFn((function(  ) {
  return function(d) { return "특정 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1280156720 = messageFormatterFn((function(  ) {
  return function(d) { return "시작 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1587564852 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 필터 탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a146248754 = messageFormatterFn((function(  ) {
  return function(d) { return "이번 " + d.timeUnit; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1922896351 = messageFormatterFn((function(  ) {
  return function(d) { return "오늘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b811695749 = messageFormatterFn((function(  ) {
  return function(d) { return "내일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1383495074 = messageFormatterFn((function(  ) {
  return function(d) { return "어제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1695292252 = messageFormatterFn((function(  ) {
  return function(d) { return "설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b187987976 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 선택 취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1312971352 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2047482353 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1843321969 = messageFormatterFn((function(  ) {
  return function(d) { return "기간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a849849374 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1720955083 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 내장 코드가 클립보드에 복사되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1117660025 = messageFormatterFn((function(  ) {
  return function(d) { return "HTML 페이지에 이 렌즈에 대한 데이터에 질문을 내장합니다. 어떠한 시트 또는 비주얼리제이션도 내장되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1326504125 = messageFormatterFn((function(  ) {
  return function(d) { return "이 항목을 복사하여 HTML 페이지에 붙여 넣으십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1074403721 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에 대한 내장 코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a90986220 = messageFormatterFn((function(  ) {
  return function(d) { return "집계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1818600422 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1795244763 = messageFormatterFn((function(  ) {
  return function(d) { return "계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a885698530 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a765440771 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 연산자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1873592273 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1048432499 = messageFormatterFn((function(  ) {
  return function(d) { return "제한"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a730593404 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1629241249 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b122856979 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1587751985 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1256877332 = messageFormatterFn((function(  ) {
  return function(d) { return "필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b501058448 = messageFormatterFn((function(  ) {
  return function(d) { return "제한 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1038179732 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a888367052 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1957500745 = messageFormatterFn((function(  ) {
  return function(d) { return "결과 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b13078672 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1742122682 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1459763243 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션에 검색을 적용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1464272728 = messageFormatterFn((function(  ) {
  return function(d) { return "이해할 수 없는 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1475350334 = messageFormatterFn((function(  ) {
  return function(d) { return "제출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a173122516 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션에 검색을 적용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1604040565 = messageFormatterFn((function(  ) {
  return function(d) { return "이해할 수 없는 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2078362819 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에 오류가 발생하여 검색을 처리할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b322656270 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 필드가 포함되어 있어 요청을 처리할 수 없습니다. 다시 시작하려면 \"모두 지우기\"를 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1127025817 = messageFormatterFn((function(  ) {
  return function(d) { return "해석에 사용되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1462086363 = messageFormatterFn((function(  ) {
  return function(d) { return "지정되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1724586102 = messageFormatterFn((function(  ) {
  return function(d) { return "포함:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b233280124 = messageFormatterFn((function(  ) {
  return function(d) { return "-"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1889818563 = messageFormatterFn((function(  ) {
  return function(d) { return "제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1004048894 = messageFormatterFn((function(  ) {
  return function(d) { return "피드백"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1478276580 = messageFormatterFn((function(  ) {
  return function(d) { return "빌드 버전 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1685969263 = messageFormatterFn((function(  ) {
  return function(d) { return "댓글"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b458367366 = messageFormatterFn((function(  ) {
  return function(d) { return "회사(선택 사항)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1267437928 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 데이터에 질문 팀에 직접 피드백을 보내세요. 이 기능을 사용하여 마지막으로 질문한 내용, 여기서 추가한 설명 및 기본 시스템 설정이 표시됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1019141818 = messageFormatterFn((function(  ) {
  return function(d) { return "피드백 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a354516104 = messageFormatterFn((function(  ) {
  return function(d) { return "피드백 제출"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b206699878 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1387850330 = messageFormatterFn((function(  ) {
  return function(d) { return "어떻게 도와드릴까요?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a375671634 = messageFormatterFn((function(  ) {
  return function(d) { return "이 환경에서 무엇이 마음에 드십니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1905729953 = messageFormatterFn((function(  ) {
  return function(d) { return "어떤 문제가 발생했는지 알려주십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a309797732 = messageFormatterFn((function(  ) {
  return function(d) { return d.URL + "에 연결하려고 했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a704224409 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 문제 피드백. Tableau Server 관리자 또는 IT 부서에 문의하여 진단하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1594926879 = messageFormatterFn((function(  ) {
  return function(d) { return "피드백을 제출할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a787746552 = messageFormatterFn((function(  ) {
  return function(d) { return "피드백을 제공해 주셔서 감사합니다!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2081630134 = messageFormatterFn((function(  ) {
  return function(d) { return "제출 중, 잠시 기다려 주십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1347914562 = messageFormatterFn((function(  ) {
  return function(d) { return " - 입력을 추적하기 위해 만들어졌습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a25579248 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문이 예상한 결과를 생성하지 않는 경우 이 렌즈의 작성자에게 이메일로 질문을 보내십시오. 아래에 입력하신 이메일 주소와 메시지가 해당 소유자에게 표시됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b933850114 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문이 예상한 결과를 생성하지 않는 경우 이 렌즈의 작성자에게 이메일로 질문을 보내십시오. 메시지는 공개되지만 귀하의 이름이나 연락처 정보는 볼 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a290657044 = messageFormatterFn((function(  ) {
  return function(d) { return "메시지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b573711204 = messageFormatterFn((function(  ) {
  return function(d) { return "내게 복사본 보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1576092118 = messageFormatterFn((function(  ) {
  return function(d) { return "이메일 보내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1910538103 = messageFormatterFn((function(  ) {
  return function(d) { return "예기치 않은 오류로 인해 메시지를 보낼 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1014864495 = messageFormatterFn((function(  ) {
  return function(d) { return "이메일 정보가 누락되었기 때문에 이 요청을 완료할 수 없습니다. 다시 시도하기 전에 사용자 본인과 렌즈 작성자의 이메일 정보를 모두 사용할 수 있는지 확인하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1478309792 = messageFormatterFn((function(  ) {
  return function(d) { return "메시지를 보냈습니다!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1897725938 = messageFormatterFn((function(  ) {
  return function(d) { return "메시지를 보내는 중입니다. 잠시 기다려 주십시오..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1891724020 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 작성자에게 연락"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b176591713 = messageFormatterFn((function(  ) {
  return function(d) { return "기능 요청"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1294562710 = messageFormatterFn((function(  ) {
  return function(d) { return "칭찬"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1077555608 = messageFormatterFn((function(  ) {
  return function(d) { return "문제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2083016375 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 개선 지원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1175966989 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b970441638 = messageFormatterFn((function(  ) {
  return function(d) { return "부울 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1537839445 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b579553441 = messageFormatterFn((function(  ) {
  return function(d) { return "통화 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1734609894 = messageFormatterFn((function(  ) {
  return function(d) { return "통화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1326035554 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1338102435 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b921572709 = messageFormatterFn((function(  ) {
  return function(d) { return "지리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a91064551 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a433228706 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1429506486 = messageFormatterFn((function(  ) {
  return function(d) { return "비율 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a132256689 = messageFormatterFn((function(  ) {
  return function(d) { return "백분율"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1674941726 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b572987852 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1686426311 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜/시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1736087885 = messageFormatterFn((function(  ) {
  return function(d) { return "위치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1268935353 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1119122673 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a641148952 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2007828767 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a106027604 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블 행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a921860862 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b195541470 = messageFormatterFn((function(  ) {
  return function(d) { return "선택됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1659363682 = messageFormatterFn((function(  ) {
  return function(d) { return "최소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1477400256 = messageFormatterFn((function(  ) {
  return function(d) { return "최대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1138562804 = messageFormatterFn((function(  ) {
  return function(d) { return "사이"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1143799113 = messageFormatterFn((function(  ) {
  return function(d) { return "동의"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1127816645 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1534513879 = messageFormatterFn((function(  ) {
  return function(d) { return "바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1672772094 = messageFormatterFn((function(  ) {
  return function(d) { return "저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a454911936 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 작성자에게 연락"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b137450935 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 질문에 가능한 한 빨리 답변하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a732933251 = messageFormatterFn((function(  ) {
  return function(d) { return "이 렌즈를 사용자 지정하여 사용자가 데이터에 질문을 최대한 활용할 수 있도록 지원하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2134094480 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 작성자의 경우"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1957918197 = messageFormatterFn((function(  ) {
  return function(d) { return "개별 필드 위로 마우스오버하고 연필 아이콘을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a212467815 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 이름 및 값에 대한 동의어 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1574140672 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션에 연결하려면 비주얼리제이션을 보는 동안 툴바에서 핀 아이콘을 클릭하면 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1577752348 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 비주얼리제이션 목록 사용자 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b694119089 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 패널 상단에 있는 연필 아이콘을 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1034473131 = messageFormatterFn((function(  ) {
  return function(d) { return "불필요한 필드 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b187278113 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에 대해 최적화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a927920326 = messageFormatterFn((function(  ) {
  return function(d) { return "활용 방법"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a785967216 = messageFormatterFn((function(  ) {
  return function(d) { return "연락처 양식 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1662453789 = messageFormatterFn((function(  ) {
  return function(d) { return "연락처 양식 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1582852438 = messageFormatterFn((function(  ) {
  return function(d) { return "시스템 오류로 인해 설정을 변경할 수 없습니다. 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a860936723 = messageFormatterFn((function(  ) {
  return function(d) { return "제품 피드백 제공"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1621859875 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 팁"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1640263686 = messageFormatterFn((function(  ) {
  return function(d) { return "온라인 도움말 시스템"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a4106117 = messageFormatterFn((function(  ) {
  return function(d) { return "설치 가이드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b609267496 = messageFormatterFn((function(  ) {
  return function(d) { return "둘러보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1486323112 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a967055702 = messageFormatterFn((function(  ) {
  return function(d) { return "팁을 다시 보려면 여기를 클릭하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1810893589 = messageFormatterFn((function(  ) {
  return function(d) { return "사용량 분석"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1932242550 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1737965924 = messageFormatterFn((function(  ) {
  return function(d) { return "새 렌즈 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b239148502 = messageFormatterFn((function(  ) {
  return function(d) { return "새 데이터에 질문 렌즈"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b521265903 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 렌즈에는 선택한 필드, 동의어 및 추천 비주얼리제이션과 같은 설정이 저장됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1053596931 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1396244809 = messageFormatterFn((function(  ) {
  return function(d) { return "위치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1556868829 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a204729615 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈 이름은 이미 사용 중입니다. 다른 이름을 사용해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1815489731 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.LENS_NAME + "” 렌즈를 게시하는 동안 예기치 않은 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b669231248 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1944148077 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.LENS_NAME + "” 렌즈를 만들었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1144927609 = messageFormatterFn((function(  ) {
  return function(d) { return "이 이름의 렌즈가 이미 존재합니다. 다른 이름을 사용해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b841732673 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 데이터에 질문 렌즈(" + d.numberOfLenses + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1568630352 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본의 연결된 렌즈를 가져오지 못했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b452844942 = messageFormatterFn((function(  ) {
  return function(d) { return "오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2097161225 = messageFormatterFn((function(  ) {
  return function(d) { return "렌즈를 사용하면 특정 사용자별로 데이터에 질문을 사용자 지정할 수 있습니다. 데이터 필드 중에서 해당 사용자와 관련된 하위 집합을 선택하고 필드명 및 값에 일반적으로 사용하는 동의어를 추가하면 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2119354630 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에 사용할 렌즈 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2038215096 = messageFormatterFn((function(  ) {
  return function(d) { return "하위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b3176110 = messageFormatterFn((function(  ) {
  return function(d) { return "상위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a915722144 = messageFormatterFn((function(  ) {
  return function(d) { return "기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b641192476 = messageFormatterFn((function(  ) {
  return function(d) { return "제한"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a901566157 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 시트를 공유하려면 이 데이터 원본에 액세스할 수 있는 사용자에게 이 링크를 보내십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a816620963 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1139768044 = messageFormatterFn((function(  ) {
  return function(d) { return "링크가 클립보드에 복사되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1342422282 = messageFormatterFn((function(  ) {
  return function(d) { return "ko_KR"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1858851680 = messageFormatterFn((function(  ) {
  return function(d) { return "삭제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b855283094 = messageFormatterFn((function(  ) {
  return function(d) { return "복제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1663825045 = messageFormatterFn((function(  ) {
  return function(d) { return "새 시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2101360970 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션을 만드는 필드 또는 값 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2097039476 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션을 만드는 필드 또는 값 검색(영어만 해당)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1591115349 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션에 추가할 필드 또는 필터 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2078895910 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문이 응답하는 데 너무 오래 걸립니다. 문제가 지속되는 경우 관리자 또는 Tableau 지원 팀에 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1037124667 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 이해하지 못했습니다. 계속 입력하거나 아래의 제안을 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1017306034 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문에서 오류가 발생했습니다. 문제가 지속되는 경우 관리자 또는 Tableau 지원 팀에 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1725117081 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b413032501 = messageFormatterFn((function(  ) {
  return function(d) { return "질문에 대한 필터와 일치하는 데이터가 없습니다. "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b635473999 = messageFormatterFn((function(  ) {
  return function(d) { return "레코드 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1424641012 = messageFormatterFn((function(  ) {
  return function(d) { return "사용하도록 설정하려면 Tableau 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b147927716 = messageFormatterFn((function(  ) {
  return function(d) { return "이 사이트에 대해 데이터에 질문을 사용 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1691301799 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a122504574 = messageFormatterFn((function(  ) {
  return function(d) { return "사용할 수 없는 페이지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1259865092 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b193215028 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1408850104 = messageFormatterFn((function(  ) {
  return function(d) { return "고급"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a73793256 = messageFormatterFn((function(  ) {
  return function(d) { return "카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a970603077 = messageFormatterFn((function(  ) {
  return function(d) { return "행 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b391663607 = messageFormatterFn((function(  ) {
  return function(d) { return "고유 카운트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a452870630 = messageFormatterFn((function(  ) {
  return function(d) { return "고유 값의 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b172614864 = messageFormatterFn((function(  ) {
  return function(d) { return "가장 이른 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a481962637 = messageFormatterFn((function(  ) {
  return function(d) { return "첫 번째 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1215971556 = messageFormatterFn((function(  ) {
  return function(d) { return "가장 늦은 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a227500609 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a892048441 = messageFormatterFn((function(  ) {
  return function(d) { return "최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a626875926 = messageFormatterFn((function(  ) {
  return function(d) { return "가장 큰 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1664527015 = messageFormatterFn((function(  ) {
  return function(d) { return "최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1506033540 = messageFormatterFn((function(  ) {
  return function(d) { return "가장 작은 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1334876257 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1360611833 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a972859911 = messageFormatterFn((function(  ) {
  return function(d) { return "필터링하려는 필드는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a132137990 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 날짜를 어떤 방식으로 그룹화하시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1733701059 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필드를 어떤 방식으로 사용하시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a971161083 = messageFormatterFn((function(  ) {
  return function(d) { return "새 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a249119661 = messageFormatterFn((function(  ) {
  return function(d) { return "새 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a858962651 = messageFormatterFn((function(  ) {
  return function(d) { return "기타"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1118896656 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b335220843 = messageFormatterFn((function(  ) {
  return function(d) { return "집계 방법 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a740546572 = messageFormatterFn((function(  ) {
  return function(d) { return "값을 표시할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b837152514 = messageFormatterFn((function(  ) {
  return function(d) { return "필드가 인덱싱되지 않았으므로 데이터에 질문에서 해당 값을 검색할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b836180851 = messageFormatterFn((function(  ) {
  return function(d) { return "시각화하려는 필드는 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1882926619 = messageFormatterFn((function(  ) {
  return function(d) { return "제안"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1593087542 = messageFormatterFn((function(  ) {
  return function(d) { return "지금은 제안을 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1904378539 = messageFormatterFn((function(  ) {
  return function(d) { return "수량 필터 탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1604518061 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 일부 비주얼리제이션이 잘못되었습니다. 새 비주얼리제이션으로 이동하고 툴바의 핀 아이콘을 클릭한 다음 추천 항목 바꾸기를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b873428889 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 비주얼리제이션에 고정..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2028512172 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션이 잘못되었습니다.  바꾸려면 핀 아이콘을 클릭하고 [추천 항목 바꾸기]를 선택하세요."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b236376576 = messageFormatterFn((function(  ) {
  return function(d) { return "이름은 고유해야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b281116050 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 필요합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a28979846 = messageFormatterFn((function(  ) {
  return function(d) { return "연결된 비주얼리제이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a606217382 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b435991651 = messageFormatterFn((function(  ) {
  return function(d) { return "섹션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b46068229 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 비주얼리제이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1302286700 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 비주얼리제이션에 저장됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1194903069 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 항목 바꾸기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2088113665 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 항목 바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a498193064 = messageFormatterFn((function(  ) {
  return function(d) { return "새 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1434690685 = messageFormatterFn((function(  ) {
  return function(d) { return "새 비주얼리제이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b52729770 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 항목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b788219921 = messageFormatterFn((function(  ) {
  return function(d) { return "바뀐 추천 비주얼리제이션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1615562476 = messageFormatterFn((function(  ) {
  return function(d) { return "추천 항목 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1232514281 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션 고정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1435783152 = messageFormatterFn((function(  ) {
  return function(d) { return "액세스 요청"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b159754770 = messageFormatterFn((function(  ) {
  return function(d) { return "액세스를 요청하는 동안 오류가 발생했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a350880260 = messageFormatterFn((function(  ) {
  return function(d) { return "오류가 발생하여 요청을 보낼 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a868895121 = messageFormatterFn((function(  ) {
  return function(d) { return "소유자는 알림을 받습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1245896916 = messageFormatterFn((function(  ) {
  return function(d) { return "이 페이지를 보려면 소유자에게 액세스 권한을 요청하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2097197407 = messageFormatterFn((function(  ) {
  return function(d) { return "요청 제출됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1170964721 = messageFormatterFn((function(  ) {
  return function(d) { return "이전 세션에서 " + d.numberOfSheets + "개 시트를 복원하시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2122554771 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1586097470 = messageFormatterFn((function(  ) {
  return function(d) { return "세션 복원"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1364751535 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2047974724 = messageFormatterFn((function(  ) {
  return function(d) { return "이전 세션을 복원했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b453230040 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 이름으로 저장..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2124153302 = messageFormatterFn((function(  ) {
  return function(d) { return "저장(덮어쓰기)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b971029482 = messageFormatterFn((function(  ) {
  return function(d) { return "저장..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1661164426 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션이 통합 문서에 저장됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1427258187 = messageFormatterFn((function(  ) {
  return function(d) { return "지금은 데이터에 질문을 사용할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a13107959 = messageFormatterFn((function(  ) {
  return function(d) { return "네트워크 연결을 시도하고 새로 고치십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1587857625 = messageFormatterFn((function(  ) {
  return function(d) { return "이 페이지를 다시 로드하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1150767358 = messageFormatterFn((function(  ) {
  return function(d) { return "존재하지 않거나 액세스할 수 있는 사용 권한이 없습니다. " + d.datasourceName + " 렌즈로 이동하여 더 많은 질문을 하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b735570199 = messageFormatterFn((function(  ) {
  return function(d) { return "해당 페이지를 표시할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2070434118 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문 비주얼리제이션 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b880444164 = messageFormatterFn((function(  ) {
  return function(d) { return "사전순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1658401578 = messageFormatterFn((function(  ) {
  return function(d) { return "오름차순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1748485756 = messageFormatterFn((function(  ) {
  return function(d) { return "내림차순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b908859743 = messageFormatterFn((function(  ) {
  return function(d) { return "기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1802345533 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1451627035 = messageFormatterFn((function(  ) {
  return function(d) { return "오류"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b533839492 = messageFormatterFn((function(  ) {
  return function(d) { return "모두 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b820254977 = messageFormatterFn((function(  ) {
  return function(d) { return "내장 코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a644351131 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 실행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a669812826 = messageFormatterFn((function(  ) {
  return function(d) { return "저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b529178824 = messageFormatterFn((function(  ) {
  return function(d) { return "공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a608910930 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2009299339 = messageFormatterFn((function(  ) {
  return function(d) { return "축 바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a167693534 = messageFormatterFn((function(  ) {
  return function(d) { return "나중에 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1069160905 = messageFormatterFn((function(  ) {
  return function(d) { return "실행 취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b911085215 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본에 대해 데이터에 질문이 지원되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1661548886 = messageFormatterFn((function(  ) {
  return function(d) { return "보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a270022130 = messageFormatterFn((function(  ) {
  return function(d) { return "막대 차트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1934552307 = messageFormatterFn((function(  ) {
  return function(d) { return "Gantt 차트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1565980395 = messageFormatterFn((function(  ) {
  return function(d) { return "히트 맵"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1300987901 = messageFormatterFn((function(  ) {
  return function(d) { return "히스토그램"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1856931836 = messageFormatterFn((function(  ) {
  return function(d) { return "라인 차트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2085510444 = messageFormatterFn((function(  ) {
  return function(d) { return "맵"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a283177259 = messageFormatterFn((function(  ) {
  return function(d) { return "파이 차트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1733164750 = messageFormatterFn((function(  ) {
  return function(d) { return "분산형 차트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a770559043 = messageFormatterFn((function(  ) {
  return function(d) { return "누적 막대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1211056299 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1388224029 = messageFormatterFn((function(  ) {
  return function(d) { return "트리맵"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a471648698 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자 필드에 Null 값이 있기 때문에 이 비주얼리제이션에 나타나는 마크가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1084779270 = messageFormatterFn((function(  ) {
  return function(d) { return "지리적 데이터가 누락되었거나 구조가 잘못되었기 때문에 이 맵에 마크가 표시되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a552181554 = messageFormatterFn((function(  ) {
  return function(d) { return "백분율 형식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a805622682 = messageFormatterFn((function(  ) {
  return function(d) { return "다음의 차이 계산:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1819304182 = messageFormatterFn((function(  ) {
  return function(d) { return "대비"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1996788336 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1912980682 = messageFormatterFn((function(  ) {
  return function(d) { return "개인 공간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1325667637 = messageFormatterFn((function(  ) {
  return function(d) { return "(나에게만 공개)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a144183800 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1506586250 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.PROJECT_NAME + "”(으)로 이동할 수 있는 사용 권한이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2088423311 = messageFormatterFn((function(  ) {
  return function(d) { return "콘텐츠를 “" + d.PROJECT_NAME + "”(으)로 이동할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a40205336 = messageFormatterFn((function(  ) {
  return function(d) { return d.SITE_NAME + "(사이트 루트)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1036636079 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 권한 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b489483858 = messageFormatterFn((function(  ) {
  return function(d) { return d.PROJECT_NAME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1126762589 = messageFormatterFn((function(  ) {
  return function(d) { return d.DATA_SOURCE + "에 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2099068531 = messageFormatterFn((function(  ) {
  return function(d) { return "자신의 데이터를 사용하여 대시보드를 보려면 자신의 " + d.DATA_SOURCE + " 계정을 사용하여 로그인하고, 샘플 데이터를 사용하여 대시보드를 빠르게 보려면 로그인하지 않고 계속하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1110960122 = messageFormatterFn((function(  ) {
  return function(d) { return d.DATA_SOURCE + "에 로그인하여 대시보드에 자신의 데이터를 표시하거나, 로그인하지 않고 계속하여 샘플 데이터를 표시하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b88954869 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 전 확인 사항"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1057977978 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b317607885 = messageFormatterFn((function(  ) {
  return function(d) { return "계속"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1641478262 = messageFormatterFn((function(  ) {
  return function(d) { return "로그인하지 않고 계속"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b777528927 = messageFormatterFn((function(  ) {
  return function(d) { return " 즉, Tableau를 사용하여 QuickBooks Online에 연결하려면 QuickBooks Online 계정의 회사 관리자여야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b316998835 = messageFormatterFn((function(  ) {
  return function(d) { return "회사 관리자여야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b777527966 = messageFormatterFn((function(  ) {
  return function(d) { return " Tableau를 사용하여 QuickBooks Online에 연결할 수 있습니다. 다른 회사 관리자가 Tableau를 사용하고 있다면 해당 관리자가 Tableau Online 응용 프로그램 권한을 포기해야 사용할 수 있게 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1425811500 = messageFormatterFn((function(  ) {
  return function(d) { return "회사별로 회사 관리자 한 명만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a989054498 = messageFormatterFn((function(  ) {
  return function(d) { return "클라우드 기반 버전의 ServiceNow를 사용하고 있으며 필요한 데이터에 액세스할 수 있는 권한이 있는지 확인하십시오. 로그인할 때 ServiceNow 자격 증명을 사용하십시오. 이 자격 증명은 Single Sign-On에 사용하는 자격 증명과 다를 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a84465566 = messageFormatterFn((function(  ) {
  return function(d) { return "내장 데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b456716983 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Desktop에서 여는 중"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1807578907 = messageFormatterFn((function(  ) {
  return function(d) { return "건너뛰기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b13627053 = messageFormatterFn((function(  ) {
  return function(d) { return "문제가 발생한 경우"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1069790061 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서를 열려면 Tableau Desktop 버전 2021.2 이상이 필요합니다. 최신 버전의 Tableau Desktop을 설치하거나 이전 버전 형식의 통합 문서를 다운로드하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1571152291 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서를 열려면 Tableau Desktop 버전 2021.2 이상이 필요합니다. 관리자에게 문의하여 Tableau Desktop의 최신 버전을 설치하거나 이전 버전 형식의 통합 문서를 다운로드하세요."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a459002603 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Desktop에서 이 파일을 여는 중입니다. 열리지 않은 경우 다시 시도하거나 브라우저에서 계속 편집할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1803265401 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터의 단일 원본을 유지하려면 데이터 원본을 Tableau Online 또는 Server에 게시하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1632318404 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b590405385 = messageFormatterFn((function(  ) {
  return function(d) { return "다시 시도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a744623940 = messageFormatterFn((function(  ) {
  return function(d) { return "Playback Mode"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2143165326 = messageFormatterFn((function(  ) {
  return function(d) { return "Forward"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b617691461 = messageFormatterFn((function(  ) {
  return function(d) { return "Reverse"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1820019611 = messageFormatterFn((function(  ) {
  return function(d) { return "Stop"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a223460471 = messageFormatterFn((function(  ) {
  return function(d) { return "Previous"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b512184589 = messageFormatterFn((function(  ) {
  return function(d) { return "Next"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2036411042 = messageFormatterFn((function(  ) {
  return function(d) { return "필드에서 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1437178829 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수에서 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1054011659 = messageFormatterFn((function(  ) {
  return function(d) { return "추가하려면 클릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a455382612 = messageFormatterFn((function(  ) {
  return function(d) { return "다음에서 값 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a466513573 = messageFormatterFn((function(  ) {
  return function(d) { return "별칭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b66423414 = messageFormatterFn((function(  ) {
  return function(d) { return "전체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1955616012 = messageFormatterFn((function(  ) {
  return function(d) { return "허용 가능한 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b600930149 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a147899439 = messageFormatterFn((function(  ) {
  return function(d) { return "선택 항목 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1495316980 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1080055495 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a516625491 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b647112484 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a667918034 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜/시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1280256033 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b247294817 = messageFormatterFn((function(  ) {
  return function(d) { return "실수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2081882226 = messageFormatterFn((function(  ) {
  return function(d) { return "정수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1014423753 = messageFormatterFn((function(  ) {
  return function(d) { return "공간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a39233500 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1226293748 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b987391704 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2025828732 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO 분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1610233175 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO 주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b913212306 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO 연도"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a456317816 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b619063280 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a711084004 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1529732840 = messageFormatterFn((function(  ) {
  return function(d) { return "초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b861014760 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a910507055 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a379079935 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서가 열릴 때의 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1852614464 = messageFormatterFn((function(  ) {
  return function(d) { return "표시 형식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1284736949 = messageFormatterFn((function(  ) {
  return function(d) { return "도메인 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1760459006 = messageFormatterFn((function(  ) {
  return function(d) { return "중복 값이 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b468885562 = messageFormatterFn((function(  ) {
  return function(d) { return "목록의 모든 값은 고유한 표시 이름을 포함해야 합니다. 업데이트하려면 하이라이트된 필드를 두 번 클릭하십시오. [확인]을 선택하면 중복 값이 자동으로 제거됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1101492964 = messageFormatterFn((function(  ) {
  return function(d) { return d.alias + "이(가) 중복됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1256297254 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a426280507 = messageFormatterFn((function(  ) {
  return function(d) { return "새 행, Enter 키를 눌러 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a734199434 = messageFormatterFn((function(  ) {
  return function(d) { return "거짓"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1355152511 = messageFormatterFn((function(  ) {
  return function(d) { return "고정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a569960610 = messageFormatterFn((function(  ) {
  return function(d) { return "목록"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2117901532 = messageFormatterFn((function(  ) {
  return function(d) { return "최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1007462602 = messageFormatterFn((function(  ) {
  return function(d) { return "최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1346739701 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b940904487 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 항목이 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1651163783 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b295202851 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a370213305 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a873861448 = messageFormatterFn((function(  ) {
  return function(d) { return "클립보드에서 붙여넣기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b771859278 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 사용 중인 브라우저가 이 기능을 지원하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1027677890 = messageFormatterFn((function(  ) {
  return function(d) { return "속성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1428018467 = messageFormatterFn((function(  ) {
  return function(d) { return "값 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a288384331 = messageFormatterFn((function(  ) {
  return function(d) { return "범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1839180352 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서가 열릴 때"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a356141495 = messageFormatterFn((function(  ) {
  return function(d) { return "필드에서 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b70490072 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수에서 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a410392817 = messageFormatterFn((function(  ) {
  return function(d) { return "단계 크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a131448247 = messageFormatterFn((function(  ) {
  return function(d) { return "표시 형식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1976142245 = messageFormatterFn((function(  ) {
  return function(d) { return "값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b761845198 = messageFormatterFn((function(  ) {
  return function(d) { return "결과가 너무 많아 표시할 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1825917789 = messageFormatterFn((function(  ) {
  return function(d) { return "참"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1423804789 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a306249377 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a926279518 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본에 이 통합 문서의 다른 데이터 원본을 참조하는 계산이 포함되어 있습니다. 이러한 계산은 이 통합 문서 외부에서는 유효하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1630533635 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본 이름이 이미 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1695889154 = messageFormatterFn((function(  ) {
  return function(d) { return "자격 증명 내장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1459235026 = messageFormatterFn((function(  ) {
  return function(d) { return "이름은 비워 둘 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1082119462 = messageFormatterFn((function(  ) {
  return function(d) { return "이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b286379607 = messageFormatterFn((function(  ) {
  return function(d) { return "추출을 새로 고칠 때 오류를 방지하고 인증 요청 없이 사용자가 이 데이터 원본을 사용할 수 있도록 자격 증명을 내장하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1811577340 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본을 바꾸려면 자격 증명을 내장해야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b377430953 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트를 선택해야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1804292073 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1289469592 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본을 덮어쓰시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1994322860 = messageFormatterFn((function(  ) {
  return function(d) { return "덮어쓰기 확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1387064752 = messageFormatterFn((function(  ) {
  return function(d) { return "이름이 “" + d.DS_NAME + "”인 데이터 원본이 이미 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b837251104 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1773912790 = messageFormatterFn((function(  ) {
  return function(d) { return "게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a697183202 = messageFormatterFn((function(  ) {
  return function(d) { return "이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b161058884 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터 원본을 보고 사용 권한 및 기타 속성을 변경하려면 데이터 원본 페이지로 이동하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b50055091 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 게시 성공"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1368296119 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1165237588 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없는 오류 발생"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a17390682 = messageFormatterFn((function(  ) {
  return function(d) { return "게시된 데이터 원본을 사용하도록 통합 문서 업데이트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2008548399 = messageFormatterFn((function(  ) {
  return function(d) { return "고정 기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a433241009 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b757526995 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2073271858 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1049835169 = messageFormatterFn((function(  ) {
  return function(d) { return "종료 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a137277670 = messageFormatterFn((function(  ) {
  return function(d) { return "시작 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1547744333 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 [" + d.fieldName + "]"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1356803028 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1856395235 = messageFormatterFn((function(  ) {
  return function(d) { return "최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1666093487 = messageFormatterFn((function(  ) {
  return function(d) { return "최소값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1203912022 = messageFormatterFn((function(  ) {
  return function(d) { return "유효한 날짜가 아님"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a121781195 = messageFormatterFn((function(  ) {
  return function(d) { return "유효한 값이 아님"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1503964771 = messageFormatterFn((function(  ) {
  return function(d) { return "값 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a775182825 = messageFormatterFn((function(  ) {
  return function(d) { return "최소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1587425625 = messageFormatterFn((function(  ) {
  return function(d) { return "최대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2099394831 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b465490788 = messageFormatterFn((function(  ) {
  return function(d) { return "기준 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1971429038 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1025532980 = messageFormatterFn((function(  ) {
  return function(d) { return "시간 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a115187772 = messageFormatterFn((function(  ) {
  return function(d) { return "특수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a812506048 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a509100829 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1881822093 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 날짜 제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b701840144 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값 제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a553389944 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 날짜만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1066436197 = messageFormatterFn((function(  ) {
  return function(d) { return "Null 값만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b847051015 = messageFormatterFn((function(  ) {
  return function(d) { return "표시할 [" + d.fieldName + "] 설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a75902660 = messageFormatterFn((function(  ) {
  return function(d) { return "오늘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b884568104 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Story"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1402973361 = messageFormatterFn((function(  ) {
  return function(d) { return "부울"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b721841283 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a621281834 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 및 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1326021349 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자(정수)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b317898387 = messageFormatterFn((function(  ) {
  return function(d) { return "숫자(실수)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a370457899 = messageFormatterFn((function(  ) {
  return function(d) { return "공간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2098991648 = messageFormatterFn((function(  ) {
  return function(d) { return "문자열"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a982073839 = messageFormatterFn((function(  ) {
  return function(d) { return "집합"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1979388657 = messageFormatterFn((function(  ) {
  return function(d) { return "알 수 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1327433091 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 레코드가 다음과 일치할 수 있음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1573245850 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1503726343 = messageFormatterFn((function(  ) {
  return function(d) { return "카디널리티"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1053792651 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 한 레코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a691234029 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 여러 레코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1030678919 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 임의 개수 레코드(없을 수도 있음)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2113260426 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 1개 또는 0개 레코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1735694971 = messageFormatterFn((function(  ) {
  return function(d) { return "다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a447361625 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 필드의 값이 고유하지 않거나 알 수 없는 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1020158623 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "의 값이 고유하지 않거나 알 수 없는 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a241122783 = messageFormatterFn((function(  ) {
  return function(d) { return "다대다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1375472132 = messageFormatterFn((function(  ) {
  return function(d) { return "다대일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a651611369 = messageFormatterFn((function(  ) {
  return function(d) { return "분석 중에 데이터를 조인 이전에 집계하여 집계 중복을 방지합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a750949856 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1225236171 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 선택한 필드의 값이 고유함을 감지했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1874187069 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 " + d.fieldName + "의 값이 고유함을 감지했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a952630910 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 필드의 값이 고유합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1372705082 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "의 값이 고유합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b830340028 = messageFormatterFn((function(  ) {
  return function(d) { return "일대다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1964224777 = messageFormatterFn((function(  ) {
  return function(d) { return "일대일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1796002596 = messageFormatterFn((function(  ) {
  return function(d) { return "분석 중에 데이터를 집계 이전에 조인하여 쿼리를 최적화합니다. 필드 값이 고유하지 않으면 중복 집계가 나타날 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b107692249 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a625802765 = messageFormatterFn((function(  ) {
  return function(d) { return "관계 계산 만들기..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1811389518 = messageFormatterFn((function(  ) {
  return function(d) { return "(기본값)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a91119601 = messageFormatterFn((function(  ) {
  return function(d) { return "(검색됨)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2143598811 = messageFormatterFn((function(  ) {
  return function(d) { return "관계 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1198551105 = messageFormatterFn((function(  ) {
  return function(d) { return "계산 편집..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1969791432 = messageFormatterFn((function(  ) {
  return function(d) { return "관계를 생성하는 것과 조인하는 것의 차이점은 무엇입니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b562289102 = messageFormatterFn((function(  ) {
  return function(d) { return "이 관계를 만들 일치하는 필드를 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1651156169 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 모든 레코드가 일치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1911239123 = messageFormatterFn((function(  ) {
  return function(d) { return "외래 키"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b710328220 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a549306869 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 많은 레코드가 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a993858244 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 많은 레코드와 일치할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a741581171 = messageFormatterFn((function(  ) {
  return function(d) { return d.thisTable + "의 모든 레코드가 " + d.otherTable + "의 한 레코드와 일치합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b60046743 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 레코드 하나가 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b716234544 = messageFormatterFn((function(  ) {
  return function(d) { return d.table + "의 레코드 하나와 일치할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b480675344 = messageFormatterFn((function(  ) {
  return function(d) { return d.leftTable + "의 레코드 하나가 " + d.rightTable + "의 레코드 하나와 일치합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a688094127 = messageFormatterFn((function(  ) {
  return function(d) { return "운영자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1377216059 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 설정을 통해 Tableau가 분석 중에 쿼리를 최적화할 수 있습니다. 어떤 설정을 선택할지 잘 모르는 경우 기본 설정을 사용하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b957629864 = messageFormatterFn((function(  ) {
  return function(d) { return "기본값으로 되돌리기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1280384846 = messageFormatterFn((function(  ) {
  return function(d) { return "이러한 설정이 정확하지 않으면 집계가 부정확해집니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a76960985 = messageFormatterFn((function(  ) {
  return function(d) { return "성능 옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a866851282 = messageFormatterFn((function(  ) {
  return function(d) { return d.first + " ~ " + d.second; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1969349235 = messageFormatterFn((function(  ) {
  return function(d) { return "카디널리티를 아는 경우 설정을 변경하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1703449242 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 데이터베이스에서 " + d.tableName + "의 카디널리티를 검색했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b21192032 = messageFormatterFn((function(  ) {
  return function(d) { return "참조 무결성을 아는 경우 설정을 변경하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1014280921 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 데이터베이스에서 " + d.tableName + "의 참조 무결성을 검색했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1523426433 = messageFormatterFn((function(  ) {
  return function(d) { return "기본 키"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1487487409 = messageFormatterFn((function(  ) {
  return function(d) { return "참조 무결성"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1274170020 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 레코드 일치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1054533480 = messageFormatterFn((function(  ) {
  return function(d) { return d.hoveredTable + "의 모든 레코드가 " + d.otherTable + "의 레코드와 일치한다고 가정합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1362752679 = messageFormatterFn((function(  ) {
  return function(d) { return "일부 레코드 일치"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1000726123 = messageFormatterFn((function(  ) {
  return function(d) { return d.hoveredTable + "의 일부 레코드가 " + d.otherTable + "의 레코드와 일치한다고 가정합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b420278809 = messageFormatterFn((function(  ) {
  return function(d) { return "관계 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b3796175 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 " + d.firstTable + "의 선택된 필드의 값과 일치하는 항목이 " + d.secondTable + "에 있음을 감지했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1660933177 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 " + d.firstTable + "의 " + d.fieldName + "에 있는 값과 일치하는 항목이 " + d.secondTable + "에 있음을 감지했습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1601626370 = messageFormatterFn((function(  ) {
  return function(d) { return d.firstTable + "의 선택된 필드의 값과 일치하는 항목이 " + d.secondTable + "에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1903944266 = messageFormatterFn((function(  ) {
  return function(d) { return d.firstTable + "의 " + d.fieldName + "에 있는 값과 일치하는 항목이 " + d.secondTable + "에 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1123005408 = messageFormatterFn((function(  ) {
  return function(d) { return "더 적은 수의 간단한 조인을 생성하여 쿼리를 최적화합니다. " + d.firstTable + "에 일치하지 않는 값이 있는 경우 분석 중에 일관되지 않은 결과가 나타날 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b319857979 = messageFormatterFn((function(  ) {
  return function(d) { return d.firstTable + "의 선택된 필드에 있는 일부 값은 " + d.secondTable + "에 일치하는 항목이 없거나 알 수 없는 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1732112589 = messageFormatterFn((function(  ) {
  return function(d) { return d.firstTable + "의 " + d.fieldName + "에 있는 일부 값은 " + d.secondTable + "에 일치하는 항목이 없거나 알 수 없는 값입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a709507837 = messageFormatterFn((function(  ) {
  return function(d) { return "일치하지 않는 값을 비롯하여 모든 측정값이 유지됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b503332939 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a117916848 = messageFormatterFn((function(  ) {
  return function(d) { return "일치하는 필드의 조합이 고유합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b787322617 = messageFormatterFn((function(  ) {
  return function(d) { return d.thisTable + "에 있는 " + d.linkedField + "의 각 값이 고유합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a722776664 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b983980697 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b455830942 = messageFormatterFn((function(  ) {
  return function(d) { return "굵게"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b288789954 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1858075597 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1686197797 = messageFormatterFn((function(  ) {
  return function(d) { return "가운데 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a241802996 = messageFormatterFn((function(  ) {
  return function(d) { return "서식 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a656792323 = messageFormatterFn((function(  ) {
  return function(d) { return "서식 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a57124951 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1482718548 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 패밀리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1250899927 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a309550734 = messageFormatterFn((function(  ) {
  return function(d) { return "하이퍼링크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1337859101 = messageFormatterFn((function(  ) {
  return function(d) { return "하이퍼링크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b335254282 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a248368380 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1623808245 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1642337139 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2123472609 = messageFormatterFn((function(  ) {
  return function(d) { return "삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1284618769 = messageFormatterFn((function(  ) {
  return function(d) { return "시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b335364498 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a854572247 = messageFormatterFn((function(  ) {
  return function(d) { return "기울임꼴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1100846057 = messageFormatterFn((function(  ) {
  return function(d) { return "왼쪽 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2058480356 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1992648491 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a262433111 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b992503642 = messageFormatterFn((function(  ) {
  return function(d) { return "재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a755486814 = messageFormatterFn((function(  ) {
  return function(d) { return "오른쪽 맞춤"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b573044705 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 색상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1513571115 = messageFormatterFn((function(  ) {
  return function(d) { return "해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1752296079 = messageFormatterFn((function(  ) {
  return function(d) { return "설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b992032725 = messageFormatterFn((function(  ) {
  return function(d) { return "범주로 선택 허용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a19763578 = messageFormatterFn((function(  ) {
  return function(d) { return "도구 설명 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1103222411 = messageFormatterFn((function(  ) {
  return function(d) { return "명령 단추 포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1716080085 = messageFormatterFn((function(  ) {
  return function(d) { return "즉각 반응 - 도구 설명을 즉시 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1524853050 = messageFormatterFn((function(  ) {
  return function(d) { return "마우스오버 - 커서를 올려 놓으면 도구 설명 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a765245513 = messageFormatterFn((function(  ) {
  return function(d) { return "밑줄"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1888633097 = messageFormatterFn((function(  ) {
  return function(d) { return "링크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1777508535 = messageFormatterFn((function(  ) {
  return function(d) { return "시간: " + d.TIME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1943228443 = messageFormatterFn((function(  ) {
  return function(d) { return d.EVERY_DAYS_OF_THE_WEEK + ", " + d.RECURRING_EVERY + " " + d.STARTING_FROM_ENDING_AT; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b310504120 = messageFormatterFn((function(  ) {
  return function(d) { return "간격: " + d.DAYS_OF_MONTH + ", " + d.AT; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a234496646 = messageFormatterFn((function(  ) {
  return function(d) { return "일(매월)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1691879807 = messageFormatterFn((function(  ) {
  return function(d) { return d.DAYS_OF_MONTH + "일(매월)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a832365855 = messageFormatterFn((function(  ) {
  return function(d) { return d.ORDINAL + " " + d.DAY_OF_WEEK; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1765480636 = messageFormatterFn((function(  ) {
  return function(d) { return d.EVERY_DAYS_OF_WEEK + ", " + d.AT; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b98086314 = messageFormatterFn((function(  ) {
  return function(d) { return "다섯 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b87022321 = messageFormatterFn((function(  ) {
  return function(d) { return "첫 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1582607695 = messageFormatterFn((function(  ) {
  return function(d) { return "네 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a722874550 = messageFormatterFn((function(  ) {
  return function(d) { return "금요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a854344493 = messageFormatterFn((function(  ) {
  return function(d) { return "지난"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a613247290 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1813247015 = messageFormatterFn((function(  ) {
  return function(d) { return "월요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a699090056 = messageFormatterFn((function(  ) {
  return function(d) { return "시간:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1894188439 = messageFormatterFn((function(  ) {
  return function(d) { return "완료"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b329635332 = messageFormatterFn((function(  ) {
  return function(d) { return "간격"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b57007263 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 평일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1954254783 = messageFormatterFn((function(  ) {
  return function(d) { return "시작"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a699501364 = messageFormatterFn((function(  ) {
  return function(d) { return "설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a243677273 = messageFormatterFn((function(  ) {
  return function(d) { return "반복"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a699651280 = messageFormatterFn((function(  ) {
  return function(d) { return "대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1942189032 = messageFormatterFn((function(  ) {
  return function(d) { return "매일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a585395957 = messageFormatterFn((function(  ) {
  return function(d) { return "금요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1067969078 = messageFormatterFn((function(  ) {
  return function(d) { return "금"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1679031395 = messageFormatterFn((function(  ) {
  return function(d) { return "금"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1675768422 = messageFormatterFn((function(  ) {
  return function(d) { return "월요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1213710459 = messageFormatterFn((function(  ) {
  return function(d) { return "월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b219955508 = messageFormatterFn((function(  ) {
  return function(d) { return "월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1599977457 = messageFormatterFn((function(  ) {
  return function(d) { return "토요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1007602844 = messageFormatterFn((function(  ) {
  return function(d) { return "토"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1538536765 = messageFormatterFn((function(  ) {
  return function(d) { return "토"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a277783334 = messageFormatterFn((function(  ) {
  return function(d) { return "일요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a714907963 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1205877236 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1840125424 = messageFormatterFn((function(  ) {
  return function(d) { return "목요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a948524165 = messageFormatterFn((function(  ) {
  return function(d) { return "목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1752530558 = messageFormatterFn((function(  ) {
  return function(d) { return "목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b752129523 = messageFormatterFn((function(  ) {
  return function(d) { return "화요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1439456994 = messageFormatterFn((function(  ) {
  return function(d) { return "화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1598146683 = messageFormatterFn((function(  ) {
  return function(d) { return "화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b419927146 = messageFormatterFn((function(  ) {
  return function(d) { return "수요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b783657557 = messageFormatterFn((function(  ) {
  return function(d) { return "수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2085502052 = messageFormatterFn((function(  ) {
  return function(d) { return "수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1677968108 = messageFormatterFn((function(  ) {
  return function(d) { return "간격: " + d.DAYS_OF_WEEK_LOC; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a985938414 = messageFormatterFn((function(  ) {
  return function(d) { return "1시간마다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a499395867 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_HOURS + "시간마다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b964936021 = messageFormatterFn((function(  ) {
  return function(d) { return "매 " + d.NUM_MINUTES + "분마다"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1651440232 = messageFormatterFn((function(  ) {
  return function(d) { return "매시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1104689061 = messageFormatterFn((function(  ) {
  return function(d) { return "8시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1659832496 = messageFormatterFn((function(  ) {
  return function(d) { return "15분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b500822280 = messageFormatterFn((function(  ) {
  return function(d) { return "4시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1924823995 = messageFormatterFn((function(  ) {
  return function(d) { return "30분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a697134002 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b884856402 = messageFormatterFn((function(  ) {
  return function(d) { return "6시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1842177685 = messageFormatterFn((function(  ) {
  return function(d) { return "12시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a834598808 = messageFormatterFn((function(  ) {
  return function(d) { return "2시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1966677028 = messageFormatterFn((function(  ) {
  return function(d) { return "매월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1431272063 = messageFormatterFn((function(  ) {
  return function(d) { return "요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b87073684 = messageFormatterFn((function(  ) {
  return function(d) { return "일자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1388305214 = messageFormatterFn((function(  ) {
  return function(d) { return "(매월)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a11959026 = messageFormatterFn((function(  ) {
  return function(d) { return "다섯 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a23023019 = messageFormatterFn((function(  ) {
  return function(d) { return "첫 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1828797845 = messageFormatterFn((function(  ) {
  return function(d) { return "네 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b943220975 = messageFormatterFn((function(  ) {
  return function(d) { return "지난"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2087851665 = messageFormatterFn((function(  ) {
  return function(d) { return "두 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b473813342 = messageFormatterFn((function(  ) {
  return function(d) { return "세 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a354084744 = messageFormatterFn((function(  ) {
  return function(d) { return "회(매월)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1612415329 = messageFormatterFn((function(  ) {
  return function(d) { return "회(매월)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a489979405 = messageFormatterFn((function(  ) {
  return function(d) { return d.WHICH + d.WHAT + " " + d.OF_THE_MONTH + " " + d.WHEN; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1380859905 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 새로 고침 시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b842491380 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1703783171 = messageFormatterFn((function(  ) {
  return function(d) { return "지정된 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1447259450 = messageFormatterFn((function(  ) {
  return function(d) { return "시작 시기: " + d.START_AT; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a358425807 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + d.DAYS + " " + d.AT_OR_FROM_TO; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a322516812 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + ", 간격: " + d.LOC_MIN_NUM + " " + d.AT_OR_FROM_TO; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2024412775 = messageFormatterFn((function(  ) {
  return function(d) { return "일(매주),"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a162754004 = messageFormatterFn((function(  ) {
  return function(d) { return "일(매주),"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1111865359 = messageFormatterFn((function(  ) {
  return function(d) { return "시간: " + d.START_TIME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1753924995 = messageFormatterFn((function(  ) {
  return function(d) { return d.START_TIME + "~" + d.END_TIME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a430293924 = messageFormatterFn((function(  ) {
  return function(d) { return d["1"] + ", 시간: " + d["2"]; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1713167728 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + ", 간격: " + d.LOC_MIN_NUM + ", 시작: " + d.START_TIME + ", 끝: " + d.END_TIME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b737906736 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " 매" + d.LOC_MIN_NUM + ", 시작 시간: " + d.START_TIME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1373583973 = messageFormatterFn((function(  ) {
  return function(d) { return "끝:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1767952960 = messageFormatterFn((function(  ) {
  return function(d) { return "표준 시간대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2028722264 = messageFormatterFn((function(  ) {
  return function(d) { return "매주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1317586369 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS_LOC + " " + d.DAYS + " " + d.START_TIME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1667931536 = messageFormatterFn((function(  ) {
  return function(d) { return "토요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1204289909 = messageFormatterFn((function(  ) {
  return function(d) { return "두 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a415261927 = messageFormatterFn((function(  ) {
  return function(d) { return "일요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1320105155 = messageFormatterFn((function(  ) {
  return function(d) { return "1"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1320864345 = messageFormatterFn((function(  ) {
  return function(d) { return "2"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1321907030 = messageFormatterFn((function(  ) {
  return function(d) { return "3"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1346905523 = messageFormatterFn((function(  ) {
  return function(d) { return d.N; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b583858682 = messageFormatterFn((function(  ) {
  return function(d) { return "세 번째"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a813067121 = messageFormatterFn((function(  ) {
  return function(d) { return "목요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b785260436 = messageFormatterFn((function(  ) {
  return function(d) { return "화요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2101003829 = messageFormatterFn((function(  ) {
  return function(d) { return "수요일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b873268651 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터에 질문"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1176719191 = messageFormatterFn((function(  ) {
  return function(d) { return d.CURRENT_LENGTH + "/" + d.MAX_LENGTH; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a27133471 = messageFormatterFn((function(  ) {
  return function(d) { return "지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b469901470 = messageFormatterFn((function(  ) {
  return function(d) { return "모음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1878680238 = messageFormatterFn((function(  ) {
  return function(d) { return "콘텐츠 유형: " + d.CONTENT_TYPE; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a546555859 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b131028279 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1382093372 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 역할"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a902943561 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b945533068 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" 내장 코드가 클립보드에 복사되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1757455256 = messageFormatterFn((function(  ) {
  return function(d) { return "내장 코드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a513408508 = messageFormatterFn((function(  ) {
  return function(d) { return "내장 코드 복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1300190509 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 설명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b190015310 = messageFormatterFn((function(  ) {
  return function(d) { return "흐름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1393277002 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 목록에 오류가 있어서 공유할 수 없습니다. 오류를 수정한 후 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a771933434 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" 링크가 클립보드에 복사되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1292266902 = messageFormatterFn((function(  ) {
  return function(d) { return "링크를 사용하여 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b596137048 = messageFormatterFn((function(  ) {
  return function(d) { return "링크를 가져오는 중…"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b383256972 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1355816877 = messageFormatterFn((function(  ) {
  return function(d) { return "공유하기 전에 하나 이상의 사용자 이름을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1067940780 = messageFormatterFn((function(  ) {
  return function(d) { return d.NAME + "에게는 알림을 받도록 설정된 이메일 주소가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1094737239 = messageFormatterFn((function(  ) {
  return function(d) { return d.NAME + "은(는) 이 사이트의 사용자가 아닙니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b982161463 = messageFormatterFn((function(  ) {
  return function(d) { return "다른 사용자와 공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a941494921 = messageFormatterFn((function(  ) {
  return function(d) { return d.FULL_NAME + "(" + d.USER_NAME + ")"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1519984888 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a683036203 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b694248642 = messageFormatterFn((function(  ) {
  return function(d) { return "가상 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1224573745 = messageFormatterFn((function(  ) {
  return function(d) { return "공유"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b305176167 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\"을(를) 공유할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1223038852 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\"이(가) 공유되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1994416854 = messageFormatterFn((function(  ) {
  return function(d) { return "권한이 있는 사용자만 이 " + d.CONTENT_TYPE + "을(를) 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1626066383 = messageFormatterFn((function(  ) {
  return function(d) { return "현재 비주얼리제이션을 공유합니다. 사용 권한이 있는 사용자만 이를 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b332947032 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자는 모음에서 액세스 권한이 있는 항목만 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1349570227 = messageFormatterFn((function(  ) {
  return function(d) { return "이 설명 및 함께 제공되는 뷰를 공유하십시오. 사용 권한이 있는 사용자만 이를 볼 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1958431419 = messageFormatterFn((function(  ) {
  return function(d) { return "메시지(선택 사항)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a264982633 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1197169022 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a64894636 = messageFormatterFn((function(  ) {
  return function(d) { return "Hello World!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a246643122 = messageFormatterFn((function(  ) {
  return function(d) { return "전체"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b989087080 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드의 모든 항목 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1486849247 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b614371774 = messageFormatterFn((function(  ) {
  return function(d) { return d.worksheetName + "을(를) 선택 취소합니다. 확인란이 선택되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a693072659 = messageFormatterFn((function(  ) {
  return function(d) { return "세부 정보"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1431385153 = messageFormatterFn((function(  ) {
  return function(d) { return "워크시트 " + d.fieldCaption + "에 필터 적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a924974866 = messageFormatterFn((function(  ) {
  return function(d) { return "필터가 " + d.count + "개의 워크시트에 적용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a653108490 = messageFormatterFn((function(  ) {
  return function(d) { return "필터가 1개의 워크시트에 적용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b568926051 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a285464769 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b855286371 = messageFormatterFn((function(  ) {
  return function(d) { return "관계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a234661308 = messageFormatterFn((function(  ) {
  return function(d) { return "검색 텍스트 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b592138289 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 워크시트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2101516765 = messageFormatterFn((function(  ) {
  return function(d) { return d.worksheetName + "을(를) 선택합니다. 확인란이 선택 취소되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a551109978 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서의 모든 워크시트 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1614621725 = messageFormatterFn((function(  ) {
  return function(d) { return "선택한 워크시트만 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1058844694 = messageFormatterFn((function(  ) {
  return function(d) { return "워크시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2001901451 = messageFormatterFn((function(  ) {
  return function(d) { return "집계"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1866708159 = messageFormatterFn((function(  ) {
  return function(d) { return "지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a853874961 = messageFormatterFn((function(  ) {
  return function(d) { return "아래로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a42428984 = messageFormatterFn((function(  ) {
  return function(d) { return "필드명"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a158135964 = messageFormatterFn((function(  ) {
  return function(d) { return "맨 아래로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1447072548 = messageFormatterFn((function(  ) {
  return function(d) { return "맨 위로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b57255925 = messageFormatterFn((function(  ) {
  return function(d) { return "사전순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1304982773 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 순서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a480018618 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬 기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a500742044 = messageFormatterFn((function(  ) {
  return function(d) { return "필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1590265084 = messageFormatterFn((function(  ) {
  return function(d) { return "수동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b38390987 = messageFormatterFn((function(  ) {
  return function(d) { return "중첩"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1164759775 = messageFormatterFn((function(  ) {
  return function(d) { return "필터링 기준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a716944295 = messageFormatterFn((function(  ) {
  return function(d) { return "오름차순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b26310727 = messageFormatterFn((function(  ) {
  return function(d) { return "내림차순"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2116396330 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬 순서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b663221320 = messageFormatterFn((function(  ) {
  return function(d) { return "위로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1149547216 = messageFormatterFn((function(  ) {
  return function(d) { return "매개 변수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2123790135 = messageFormatterFn((function(  ) {
  return function(d) { return "유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b328231784 = messageFormatterFn((function(  ) {
  return function(d) { return "값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a588650933 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1633139673 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1017332233 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1211912752 = messageFormatterFn((function(  ) {
  return function(d) { return "거짓"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a100571991 = messageFormatterFn((function(  ) {
  return function(d) { return "참"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a660872949 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름 또는 비밀번호가 잘못되었습니다.  데이터베이스 이름 및 자격 증명을 확인하고 다시 시도하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1286144753 = messageFormatterFn((function(  ) {
  return function(d) { return "로그인하여 다시 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1441809949 = messageFormatterFn((function(  ) {
  return function(d) { return "복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b739066710 = messageFormatterFn((function(  ) {
  return function(d) { return "잘라내기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a79045002 = messageFormatterFn((function(  ) {
  return function(d) { return "자세한 오류 메시지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1499540086 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 세부 정보 숨기기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1709663573 = messageFormatterFn((function(  ) {
  return function(d) { return d.connectorName + " 커넥터용 드라이버가 설치되지 않았습니다. 관리자에게 문의하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1106089303 = messageFormatterFn((function(  ) {
  return function(d) { return " 연결하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1754279181 = messageFormatterFn((function(  ) {
  return function(d) { return "드라이버를 다운로드하여 설치하고,"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a593704334 = messageFormatterFn((function(  ) {
  return function(d) { return "선택 사항"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1922303188 = messageFormatterFn((function(  ) {
  return function(d) { return "비밀번호:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a803053947 = messageFormatterFn((function(  ) {
  return function(d) { return "붙여넣기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b306888867 = messageFormatterFn((function(  ) {
  return function(d) { return d.prompt + ":"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a103010443 = messageFormatterFn((function(  ) {
  return function(d) { return "비밀번호 저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a607014895 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 세부 정보 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1534335162 = messageFormatterFn((function(  ) {
  return function(d) { return "로그인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1621209929 = messageFormatterFn((function(  ) {
  return function(d) { return "로그인 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a133022865 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 이름:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b669980232 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1454886663 = messageFormatterFn((function(  ) {
  return function(d) { return "문자 집합"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a308158690 = messageFormatterFn((function(  ) {
  return function(d) { return "쉼표"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b930608588 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 구분 기호"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b828574781 = messageFormatterFn((function(  ) {
  return function(d) { return "로캘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1573773743 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 항목이 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b644949855 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1788392867 = messageFormatterFn((function(  ) {
  return function(d) { return "기타"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a246338616 = messageFormatterFn((function(  ) {
  return function(d) { return "검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1797258562 = messageFormatterFn((function(  ) {
  return function(d) { return "세미콜론"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1640568531 = messageFormatterFn((function(  ) {
  return function(d) { return "공백"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1092684322 = messageFormatterFn((function(  ) {
  return function(d) { return "탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1360404490 = messageFormatterFn((function(  ) {
  return function(d) { return "텍스트 한정자"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1573719882 = messageFormatterFn((function(  ) {
  return function(d) { return "세로 막대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1457465278 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a848448835 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b125805909 = messageFormatterFn((function(  ) {
  return function(d) { return "추세선 옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a63266693 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 차원을 기반으로 별도의 추세선을 작성하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1522372786 = messageFormatterFn((function(  ) {
  return function(d) { return "요소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1131930319 = messageFormatterFn((function(  ) {
  return function(d) { return "모델 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a400156620 = messageFormatterFn((function(  ) {
  return function(d) { return "옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1002681085 = messageFormatterFn((function(  ) {
  return function(d) { return "지수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a891945411 = messageFormatterFn((function(  ) {
  return function(d) { return "선형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b37150089 = messageFormatterFn((function(  ) {
  return function(d) { return "로그"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a443863090 = messageFormatterFn((function(  ) {
  return function(d) { return "다항식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a31668958 = messageFormatterFn((function(  ) {
  return function(d) { return "차수:"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b120437635 = messageFormatterFn((function(  ) {
  return function(d) { return "거듭제곱"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a356350711 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b70891223 = messageFormatterFn((function(  ) {
  return function(d) { return "색상별 추세선 허용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a672940090 = messageFormatterFn((function(  ) {
  return function(d) { return "신뢰 구간 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a981863157 = messageFormatterFn((function(  ) {
  return function(d) { return "하이라이트되거나 선택된 데이터 요소의 다시 계산된 라인 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a552181600 = messageFormatterFn((function(  ) {
  return function(d) { return "도구 설명 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b160105639 = messageFormatterFn((function(  ) {
  return function(d) { return "y절편을 0으로 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1015759222 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1624775665 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1656985561 = messageFormatterFn((function(  ) {
  return function(d) { return "및 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1605668358 = messageFormatterFn((function(  ) {
  return function(d) { return "적용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b971238295 = messageFormatterFn((function(  ) {
  return function(d) { return "적용(Ctrl+Enter)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1773706108 = messageFormatterFn((function(  ) {
  return function(d) { return "이 칸을 비워 두면 어떤 항목도 제외되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b861910538 = messageFormatterFn((function(  ) {
  return function(d) { return "이 칸을 비워 두면 모든 항목이 포함됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a916916809 = messageFormatterFn((function(  ) {
  return function(d) { return "영업* "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1297192723 = messageFormatterFn((function(  ) {
  return function(d) { return "연결: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1570449299 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터베이스에는 유니온을 사용할 수 없으므로 선택한 첫 번째 테이블만 추가됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a761591737 = messageFormatterFn((function(  ) {
  return function(d) { return "동일한 연결의 데이터만 유니온할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1193125070 = messageFormatterFn((function(  ) {
  return function(d) { return "유니온으로 테이블 끌기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a18823629 = messageFormatterFn((function(  ) {
  return function(d) { return "여기로 테이블 끌기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1339100060 = messageFormatterFn((function(  ) {
  return function(d) { return "제외"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1059113636 = messageFormatterFn((function(  ) {
  return function(d) { return "찾기 "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2008471691 = messageFormatterFn((function(  ) {
  return function(d) { return "예: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1843984662 = messageFormatterFn((function(  ) {
  return function(d) { return "포함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1011078233 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau가 이 테이블을 찾거나 인식할 수 없습니다. 테이블을 제거하거나 바꾸십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1466578225 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a321469877 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 패턴(xxx*)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a57191642 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1228525775 = messageFormatterFn((function(  ) {
  return function(d) { return "적용하고 닫기(Enter)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1807668950 = messageFormatterFn((function(  ) {
  return function(d) { return "Sales.csv "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b410211598 = messageFormatterFn((function(  ) {
  return function(d) { return "Sales 1999.csv."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a668310345 = messageFormatterFn((function(  ) {
  return function(d) { return "검색 위치: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b723935082 = messageFormatterFn((function(  ) {
  return function(d) { return "상위 폴더로 검색 확장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1064513033 = messageFormatterFn((function(  ) {
  return function(d) { return "하위 폴더로 검색 확장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1915347234 = messageFormatterFn((function(  ) {
  return function(d) { return "시트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b868558942 = messageFormatterFn((function(  ) {
  return function(d) { return "특정(수동)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1780670609 = messageFormatterFn((function(  ) {
  return function(d) { return "유니온의 테이블: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1803049222 = messageFormatterFn((function(  ) {
  return function(d) { return "이 데이터베이스에는 유니온을 사용할 수 없으므로 선택한 첫 번째 테이블만 추가됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a611305906 = messageFormatterFn((function(  ) {
  return function(d) { return "임의의 문자열과 일치시키려면 별표(*)를 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1780701702 = messageFormatterFn((function(  ) {
  return function(d) { return "와일드카드(자동)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1628379215 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b975692911 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a144045231 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1280982698 = messageFormatterFn((function(  ) {
  return function(d) { return "아니요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a270686353 = messageFormatterFn((function(  ) {
  return function(d) { return "자동 생성 레이아웃을 해제하고 사용자 지정 레이아웃을 만드시겠습니까?"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a257617633 = messageFormatterFn((function(  ) {
  return function(d) { return "레이아웃 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b108893976 = messageFormatterFn((function(  ) {
  return function(d) { return "예"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1205709915 = messageFormatterFn((function(  ) {
  return function(d) { return "이 메시지를 다시 표시 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a985486080 = messageFormatterFn((function(  ) {
  return function(d) { return "(전체)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1252110998 = messageFormatterFn((function(  ) {
  return function(d) { return "정렬 지우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b768389699 = messageFormatterFn((function(  ) {
  return function(d) { return "기본 패널 축소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1700916516 = messageFormatterFn((function(  ) {
  return function(d) { return "탭 패널 확장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b389350286 = messageFormatterFn((function(  ) {
  return function(d) { return d.tableName + " 사용자 지정 SQL 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2050041951 = messageFormatterFn((function(  ) {
  return function(d) { return "다운로드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1695707067 = messageFormatterFn((function(  ) {
  return function(d) { return "다운로드 정보는 Tableau 브라우저 창을 참조하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a933522427 = messageFormatterFn((function(  ) {
  return function(d) { return "다운로드할 수 있는 열 데이터가 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a739747248 = messageFormatterFn((function(  ) {
  return function(d) { return "기본 패널 확장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b461450690 = messageFormatterFn((function(  ) {
  return function(d) { return "탭 패널 축소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a194884623 = messageFormatterFn((function(  ) {
  return function(d) { return d.tableName + " 필드 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b484325443 = messageFormatterFn((function(  ) {
  return function(d) { return "행 카운트 입력 " + d.value + "이(가) 잘못됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1242856549 = messageFormatterFn((function(  ) {
  return function(d) { return "열을 처음으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b972622937 = messageFormatterFn((function(  ) {
  return function(d) { return "열을 시작 아이콘으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a729382842 = messageFormatterFn((function(  ) {
  return function(d) { return "열을 끝으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1126995066 = messageFormatterFn((function(  ) {
  return function(d) { return "열을 끝 아이콘으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1784192177 = messageFormatterFn((function(  ) {
  return function(d) { return "왼쪽으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1757078072 = messageFormatterFn((function(  ) {
  return function(d) { return "열을 왼쪽으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1332172164 = messageFormatterFn((function(  ) {
  return function(d) { return "열을 왼쪽으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1669831850 = messageFormatterFn((function(  ) {
  return function(d) { return "오른쪽으로 이동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b761924419 = messageFormatterFn((function(  ) {
  return function(d) { return "열 왼쪽으로 이동 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1602176329 = messageFormatterFn((function(  ) {
  return function(d) { return "열 오른쪽으로 이동 아이콘"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a260370523 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1939327398 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs.ko, { one: function() { return d.fieldName + " 제거됨";}, other: function() { return "열이 제거됨";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b793974007 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.rowCount, 0, pluralFuncs.ko, { one: function() { return d.formattedRowCount + "개 행";}, other: function() { return d.formattedRowCount + "개 행";} }) + " " + plural(d.fieldCount, 0, pluralFuncs.ko, { one: function() { return d.formattedFieldCount + "개 필드";}, other: function() { return d.formattedFieldCount + "개 필드";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a975167344 = messageFormatterFn((function(  ) {
  return function(d) { return "행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a725764220 = messageFormatterFn((function(  ) {
  return function(d) { return "행 카운트가 " + d.value + "(으)로 업데이트됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2095846666 = messageFormatterFn((function(  ) {
  return function(d) { return "행 제한 업데이트 단추"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a979937961 = messageFormatterFn((function(  ) {
  return function(d) { return "표시할 최대 행 수를 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a346502799 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + "은(는) 이제 " + d.columnPosition + "에 위치함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b138106873 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs.ko, { one: function() { return d.formattedFieldCount + "개의 필드";}, other: function() { return d.formattedFieldCount + "개의 필드";} }) + "가 선택됨"; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a6988090 = messageFormatterFn((function(  ) {
  return function(d) { return "설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b650759520 = messageFormatterFn((function(  ) {
  return function(d) { return "별칭 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a106766701 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1964816842 = messageFormatterFn((function(  ) {
  return function(d) { return "필드 검색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1164849556 = messageFormatterFn((function(  ) {
  return function(d) { return "표시할 필드 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a256290041 = messageFormatterFn((function(  ) {
  return function(d) { return "오름차순 정렬"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1232701069 = messageFormatterFn((function(  ) {
  return function(d) { return "내림차순 정렬"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1908552733 = messageFormatterFn((function(  ) {
  return function(d) { return d.tableName + " 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b122207748 = messageFormatterFn((function(  ) {
  return function(d) { return "테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1018870741 = messageFormatterFn((function(  ) {
  return function(d) { return "탭"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1642969238 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 보기 테이블에 표시될 항목에 대한 탭 옵션"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b731150621 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 보기 테이블"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1318849538 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b550398979 = messageFormatterFn((function(  ) {
  return function(d) { return "더 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1182328772 = messageFormatterFn((function(  ) {
  return function(d) { return "표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1403942859 = messageFormatterFn((function(  ) {
  return function(d) { return "디스플레이 설정 변경"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a951204060 = messageFormatterFn((function(  ) {
  return function(d) { return "다운로드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1950829597 = messageFormatterFn((function(  ) {
  return function(d) { return "다운로드할 형식 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1287759266 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1165707083 = messageFormatterFn((function(  ) {
  return function(d) { return "기타 옵션..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1220844356 = messageFormatterFn((function(  ) {
  return function(d) { return "비주얼리제이션 제어"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1748163153 = messageFormatterFn((function(  ) {
  return function(d) { return "보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b337048312 = messageFormatterFn((function(  ) {
  return function(d) { return "업데이트 추적"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1560477023 = messageFormatterFn((function(  ) {
  return function(d) { return "태그 추가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1745843083 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1819205810 = messageFormatterFn((function(  ) {
  return function(d) { return "저장"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b447084510 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1056100953 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a973121429 = messageFormatterFn((function(  ) {
  return function(d) { return "삽입"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2071655059 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2064282932 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1363650477 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 입력"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1881910040 = messageFormatterFn((function(  ) {
  return function(d) { return "URL 편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a398870992 = messageFormatterFn((function(  ) {
  return function(d) { return "굵게"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b971026299 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a284995171 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1202311115 = messageFormatterFn((function(  ) {
  return function(d) { return "대화 상자 닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2143774627 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 색상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a474525717 = messageFormatterFn((function(  ) {
  return function(d) { return "편집"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2060110533 = messageFormatterFn((function(  ) {
  return function(d) { return "에디터 모드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1110605277 = messageFormatterFn((function(  ) {
  return function(d) { return "유효한 날짜를 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1039062852 = messageFormatterFn((function(  ) {
  return function(d) { return "오류: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1359076542 = messageFormatterFn((function(  ) {
  return function(d) { return "서식 지정 가이드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1844077321 = messageFormatterFn((function(  ) {
  return function(d) { return "굵게"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1854483624 = messageFormatterFn((function(  ) {
  return function(d) { return "가져올 내용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1334315440 = messageFormatterFn((function(  ) {
  return function(d) { return "입력할 내용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a518471359 = messageFormatterFn((function(  ) {
  return function(d) { return "이미지"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b501661337 = messageFormatterFn((function(  ) {
  return function(d) { return "기울임꼴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1563260628 = messageFormatterFn((function(  ) {
  return function(d) { return "링크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b763574416 = messageFormatterFn((function(  ) {
  return function(d) { return "밑줄"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b946636998 = messageFormatterFn((function(  ) {
  return function(d) { return "머리글 1"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b946636037 = messageFormatterFn((function(  ) {
  return function(d) { return "머리글 2"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b946635076 = messageFormatterFn((function(  ) {
  return function(d) { return "머리글 3"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1933070774 = messageFormatterFn((function(  ) {
  return function(d) { return "정보: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1929659922 = messageFormatterFn((function(  ) {
  return function(d) { return "기울임꼴"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1338089036 = messageFormatterFn((function(  ) {
  return function(d) { return "Ctrl+"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1862860625 = messageFormatterFn((function(  ) {
  return function(d) { return "Shift+"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a679687685 = messageFormatterFn((function(  ) {
  return function(d) { return "링크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2117729042 = messageFormatterFn((function(  ) {
  return function(d) { return "링크 텍스트"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2147146688 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1317478792 = messageFormatterFn((function(  ) {
  return function(d) { return "다음 월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1721763299 = messageFormatterFn((function(  ) {
  return function(d) { return "일치 항목이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b372327892 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.optionCount, 0, pluralFuncs.ko, { one: function() { return d.formattedOptionCount + "개의 옵션";}, other: function() { return d.formattedOptionCount + "개의 옵션";} }) + "을 사용할 수 있습니다."; }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b1661532181 = messageFormatterFn((function(  ) {
  return function(d) { return "(선택 사항)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1032736892 = messageFormatterFn((function(  ) {
  return function(d) { return d.COUNT + "개 옵션 선택됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1591518634 = messageFormatterFn((function(  ) {
  return function(d) { return "순서 있는 목록"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1049828441 = messageFormatterFn((function(  ) {
  return function(d) { return "단락"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1346190285 = messageFormatterFn((function(  ) {
  return function(d) { return "미리 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b614667788 = messageFormatterFn((function(  ) {
  return function(d) { return "이전 월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1360674801 = messageFormatterFn((function(  ) {
  return function(d) { return "제거"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1409733738 = messageFormatterFn((function(  ) {
  return function(d) { return "(필수)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1915668129 = messageFormatterFn((function(  ) {
  return function(d) { return "성공: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2053060800 = messageFormatterFn((function(  ) {
  return function(d) { return "미리 보기 모드에서 편집을 사용할 수 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1957640665 = messageFormatterFn((function(  ) {
  return function(d) { return "Textile 마크업 가이드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a544061996 = messageFormatterFn((function(  ) {
  return function(d) { return "Textile 마크업 미리 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1319320119 = messageFormatterFn((function(  ) {
  return function(d) { return "밑줄"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b306065315 = messageFormatterFn((function(  ) {
  return function(d) { return "순서 없는 목록"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2062145797 = messageFormatterFn((function(  ) {
  return function(d) { return "대기 표시기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a702035880 = messageFormatterFn((function(  ) {
  return function(d) { return "경고: "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a228216232 = messageFormatterFn((function(  ) {
  return function(d) { return d.weekNum + "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1077381761 = messageFormatterFn((function(  ) {
  return function(d) { return "Waiting for content"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1859303752 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 셀 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1302518872 = messageFormatterFn((function(  ) {
  return function(d) { return "행 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a582198821 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 최적화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2038552812 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1661032150 = messageFormatterFn((function(  ) {
  return function(d) { return "노트북"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b769175736 = messageFormatterFn((function(  ) {
  return function(d) { return "전화"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1984844702 = messageFormatterFn((function(  ) {
  return function(d) { return "태블릿"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a958036873 = messageFormatterFn((function(  ) {
  return function(d) { return "많은 양의 데이터에 연결하는 경우 시간이 다소 걸릴 수 있습니다. 대시보드가 준비되면 이메일을 보내 드립니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b729265796 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1371344421 = messageFormatterFn((function(  ) {
  return function(d) { return "중요한 데이터의 경우 게시된 통합 문서에 대한 사용 권한을 변경하여 액세스 권한을 조정하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2131569830 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터를 사용하여 추출 작성 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2104601712 = messageFormatterFn((function(  ) {
  return function(d) { return "많은 양의 데이터에 연결하는 경우 시간이 다소 걸릴 수 있습니다. 대시보드가 준비되면 이메일을 보내 드립니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1538982177 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서를 만드는 중..."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1413820281 = messageFormatterFn((function(  ) {
  return function(d) { return "공동 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1484537405 = messageFormatterFn((function(  ) {
  return function(d) { return "사용 가능한 레이아웃"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1803552996 = messageFormatterFn((function(  ) {
  return function(d) { return "비슷한 항목 더 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2044401061 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b377499202 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a254762045 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a999739004 = messageFormatterFn((function(  ) {
  return function(d) { return "프로젝트 선택"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a570437165 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 만들기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a890580551 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1877417382 = messageFormatterFn((function(  ) {
  return function(d) { return d.CONNECTION_TYPE + "에 로그인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b835582599 = messageFormatterFn((function(  ) {
  return function(d) { return d.CONNECTION_TYPE + "에 로그인, 대상: " + d.TEMPLATE_NAME; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a120413617 = messageFormatterFn((function(  ) {
  return function(d) { return d.TEMPLATE_NAME + "에 샘플 데이터 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1158796959 = messageFormatterFn((function(  ) {
  return function(d) { return d.TEMPLATE_NAME + " 미리 보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a490544630 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a716190313 = messageFormatterFn((function(  ) {
  return function(d) { return "미리 구축된 대시보드 중 하나에서 시작하십시오. 데이터 원본에 로그인하기만 하면 됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b152697602 = messageFormatterFn((function(  ) {
  return function(d) { return "샘플 데이터 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1137137589 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1952879394 = messageFormatterFn((function(  ) {
  return function(d) { return "취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1936122382 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드 항목 이름 바꾸기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1002047588 = messageFormatterFn((function(  ) {
  return function(d) { return "확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1367053249 = messageFormatterFn((function(  ) {
  return function(d) { return "기본 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1200989535 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a591973092 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a527581444 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "개의 null이 표시되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a824587159 = messageFormatterFn((function(  ) {
  return function(d) { return "1개의 null이 표시되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b681252584 = messageFormatterFn((function(  ) {
  return function(d) { return "확대"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b851555599 = messageFormatterFn((function(  ) {
  return function(d) { return "축 재설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2090823145 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1481806702 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1962424493 = messageFormatterFn((function(  ) {
  return function(d) { return "색상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1028174733 = messageFormatterFn((function(  ) {
  return function(d) { return "파선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1845617015 = messageFormatterFn((function(  ) {
  return function(d) { return "소수 자릿수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a608035782 = messageFormatterFn((function(  ) {
  return function(d) { return "점선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b752906132 = messageFormatterFn((function(  ) {
  return function(d) { return "죄송합니다. 오류가 발생했습니다! 서식 패널을 닫고 다시 시도해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b752905171 = messageFormatterFn((function(  ) {
  return function(d) { return "오류 보고서를 엔지니어에게 보냈습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1732546847 = messageFormatterFn((function(  ) {
  return function(d) { return "채우기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a99509211 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 패밀리"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a270041246 = messageFormatterFn((function(  ) {
  return function(d) { return "글꼴 크기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b265137581 = messageFormatterFn((function(  ) {
  return function(d) { return "서식"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1166004437 = messageFormatterFn((function(  ) {
  return function(d) { return "16진수 색"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1932751923 = messageFormatterFn((function(  ) {
  return function(d) { return "선 스타일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b683221921 = messageFormatterFn((function(  ) {
  return function(d) { return "자동"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a294364515 = messageFormatterFn((function(  ) {
  return function(d) { return "해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b544688063 = messageFormatterFn((function(  ) {
  return function(d) { return "설정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b68742530 = messageFormatterFn((function(  ) {
  return function(d) { return "선 너비"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b451380756 = messageFormatterFn((function(  ) {
  return function(d) { return "다중"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1967174036 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1172481577 = messageFormatterFn((function(  ) {
  return function(d) { return "해제"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a993737893 = messageFormatterFn((function(  ) {
  return function(d) { return "실선"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1557279639 = messageFormatterFn((function(  ) {
  return function(d) { return "단위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a34680486 = messageFormatterFn((function(  ) {
  return function(d) { return "워크시트 제목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b600251608 = messageFormatterFn((function(  ) {
  return function(d) { return "값 초과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b864361280 = messageFormatterFn((function(  ) {
  return function(d) { return "해당 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a4063257 = messageFormatterFn((function(  ) {
  return function(d) { return "나쁨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a95579156 = messageFormatterFn((function(  ) {
  return function(d) { return "값 미만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1821240915 = messageFormatterFn((function(  ) {
  return function(d) { return "비교 유형"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a258627297 = messageFormatterFn((function(  ) {
  return function(d) { return "상수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1312309698 = messageFormatterFn((function(  ) {
  return function(d) { return "값을 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a256758502 = messageFormatterFn((function(  ) {
  return function(d) { return "상수 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2137910234 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2019331342 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1483763903 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 시작 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1819849379 = messageFormatterFn((function(  ) {
  return function(d) { return d.dateExample + " 형식의 올바른 날짜를 입력하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1181023252 = messageFormatterFn((function(  ) {
  return function(d) { return "시작 날짜는 최대 날짜 범위(" + d.dateRangeString + ") 내에 있어야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1254850575 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a554212779 = messageFormatterFn((function(  ) {
  return function(d) { return "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a727648244 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 일 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a315016099 = messageFormatterFn((function(  ) {
  return function(d) { return "좋음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1302181063 = messageFormatterFn((function(  ) {
  return function(d) { return "기간별"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b634705640 = messageFormatterFn((function(  ) {
  return function(d) { return "비교 값은 1에서 10,000 사이여야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b347065263 = messageFormatterFn((function(  ) {
  return function(d) { return "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1405933682 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b608301368 = messageFormatterFn((function(  ) {
  return function(d) { return "개 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1409997385 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 마크 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1629704289 = messageFormatterFn((function(  ) {
  return function(d) { return "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a239194494 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2051187207 = messageFormatterFn((function(  ) {
  return function(d) { return "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1847568872 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1325786203 = messageFormatterFn((function(  ) {
  return function(d) { return "보통"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1128229826 = messageFormatterFn((function(  ) {
  return function(d) { return "비교 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1568640997 = messageFormatterFn((function(  ) {
  return function(d) { return "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2110726268 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1071061038 = messageFormatterFn((function(  ) {
  return function(d) { return "상대적 기간(" + d.granularity + "의 수)"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1032177857 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 기간은 1에서 10,000 사이여야 합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b356346367 = messageFormatterFn((function(  ) {
  return function(d) { return "초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1273571294 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1371095592 = messageFormatterFn((function(  ) {
  return function(d) { return "비교 라인 표시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a299624280 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b606093242 = messageFormatterFn((function(  ) {
  return function(d) { return "상태"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b220688319 = messageFormatterFn((function(  ) {
  return function(d) { return "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1098253726 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1550833496 = messageFormatterFn((function(  ) {
  return function(d) { return "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b53488857 = messageFormatterFn((function(  ) {
  return function(d) { return "비교할 이전 년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2138055022 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭을 마지막으로 새로 고친 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a922883464 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 이름"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b447925899 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 값의 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a544788959 = messageFormatterFn((function(  ) {
  return function(d) { return "메트릭 값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b26105807 = messageFormatterFn((function(  ) {
  return function(d) { return "이 메트릭에 대한 일정입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1778373307 = messageFormatterFn((function(  ) {
  return function(d) { return "이 메트릭에 대한 대화형 일정입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1238054158 = messageFormatterFn((function(  ) {
  return function(d) { return "일정 날짜 범위"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1785244929 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b900035428 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고쳐지지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1415995060 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고침이 일시 중단됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1796596308 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고침: " + d.fromDate; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1137251171 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜: " + d.date; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2056834428 = messageFormatterFn((function(  ) {
  return function(d) { return "동기화된 시점: " + d.date; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b338182543 = messageFormatterFn((function(  ) {
  return function(d) { return "이 메트릭에 대한 일정이 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1682943711 = messageFormatterFn((function(  ) {
  return function(d) { return "주: " + d.date; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b929863960 = messageFormatterFn((function(  ) {
  return function(d) { return "닫기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b442833509 = messageFormatterFn((function(  ) {
  return function(d) { return "복사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2097619515 = messageFormatterFn((function(  ) {
  return function(d) { return "동작 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1844249139 = messageFormatterFn((function(  ) {
  return function(d) { return "모범 사례를 따르도록 이러한 항목을 업데이트해도 통합 문서 기능에는 영향을 미치지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a776791223 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b259571081 = messageFormatterFn((function(  ) {
  return function(d) { return "…"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1755206844 = messageFormatterFn((function(  ) {
  return function(d) { return "규칙이 수정되지 않았습니다. 문제를 수동으로 해결해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2135255075 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서가 이 지침에 대한 모범 사례를 따르지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1183317882 = messageFormatterFn((function(  ) {
  return function(d) { return "규칙 수정"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1268498411 = messageFormatterFn((function(  ) {
  return function(d) { return "문제 해결에 대한 모범 사례 지침 및 정보를 보려면 항목을 선택하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a456883699 = messageFormatterFn((function(  ) {
  return function(d) { return "이 규칙 무시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a490185033 = messageFormatterFn((function(  ) {
  return function(d) { return d.ruleName + "은(는) 이 통합 문서에 대해 다시 평가되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a226838260 = messageFormatterFn((function(  ) {
  return function(d) { return "무시된 항목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2055713659 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 실행 시간: " + d.time; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a575280617 = messageFormatterFn((function(  ) {
  return function(d) { return "자세히 알아보기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1362658582 = messageFormatterFn((function(  ) {
  return function(d) { return "통과됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1744131151 = messageFormatterFn((function(  ) {
  return function(d) { return "통과 및 무시됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a143280604 = messageFormatterFn((function(  ) {
  return function(d) { return "통과된 모든 항목은 모범 사례 지침을 충족하는 항목입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a133315680 = messageFormatterFn((function(  ) {
  return function(d) { return "통과된 항목"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1043706058 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서가 이 지침에 대한 모범 사례를 따릅니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1440108181 = messageFormatterFn((function(  ) {
  return function(d) { return "모범 사례 확인"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b341185995 = messageFormatterFn((function(  ) {
  return function(d) { return "+" + d.numExceeding + "개 이상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1685320447 = messageFormatterFn((function(  ) {
  return function(d) { return "게시"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1258842365 = messageFormatterFn((function(  ) {
  return function(d) { return "최적화 프로그램 다시 실행"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a653335921 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서 검사"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a468136596 = messageFormatterFn((function(  ) {
  return function(d) { return d.ruleName + "을(를) 수정함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a71200586 = messageFormatterFn((function(  ) {
  return function(d) { return "실행 취소"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1410524218 = messageFormatterFn((function(  ) {
  return function(d) { return "이 규칙 평가"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a402734736 = messageFormatterFn((function(  ) {
  return function(d) { return d.ruleName + "은(는) 이 통합 문서에 대해 평가됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b990140477 = messageFormatterFn((function(  ) {
  return function(d) { return d.passedRules + "/" + d.totalRules; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1501129140 = messageFormatterFn((function(  ) {
  return function(d) { return "검토 필요"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1643150054 = messageFormatterFn((function(  ) {
  return function(d) { return "모범 사례를 따르도록 이러한 항목을 업데이트하려면 통합 문서에서 조정이 필요할 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1331042505 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 시작 날짜: " + d.date; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b379078407 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1402831436 = messageFormatterFn((function(  ) {
  return function(d) { return "1일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a140613803 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1684128386 = messageFormatterFn((function(  ) {
  return function(d) { return "1시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a801142946 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "개 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1724185525 = messageFormatterFn((function(  ) {
  return function(d) { return "1개 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1726591856 = messageFormatterFn((function(  ) {
  return function(d) { return "상태: 나쁨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a869828592 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + " 초과"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a830670945 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + " 초과 대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a898620696 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 수준"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a965745796 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + " 미만"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2125079051 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + " 미만 대상"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a665650949 = messageFormatterFn((function(  ) {
  return function(d) { return "변경 없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1867220280 = messageFormatterFn((function(  ) {
  return function(d) { return d.first + " 대비 " + d.last; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a782288811 = messageFormatterFn((function(  ) {
  return function(d) { return d.first + " 대비\n" + d.last; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b472498049 = messageFormatterFn((function(  ) {
  return function(d) { return "사용자 지정 시작 날짜"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b905618262 = messageFormatterFn((function(  ) {
  return function(d) { return "최대값"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b751554590 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 " + d.num + "개 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b64494859 = messageFormatterFn((function(  ) {
  return function(d) { return "마지막 마크"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a852069916 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b874603857 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 1일"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a385004994 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1247572181 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 1시간"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1371012558 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1636852037 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 1분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b100617024 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1578719149 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 달"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1664550060 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1765233345 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 1분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a527646866 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a887457701 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 1초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2137426320 = messageFormatterFn((function(  ) {
  return function(d) { return d.startDate + " - " + d.endDate; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1727418322 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1478375707 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1290608869 = messageFormatterFn((function(  ) {
  return function(d) { return "지난 " + d.num + " 년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1595385838 = messageFormatterFn((function(  ) {
  return function(d) { return "작년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2116727852 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "일 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2030974361 = messageFormatterFn((function(  ) {
  return function(d) { return "1일 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a388675966 = messageFormatterFn((function(  ) {
  return function(d) { return "회계 연도 " + d.year; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a165346724 = messageFormatterFn((function(  ) {
  return function(d) { return d.fy + " " + d.qN; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a58792856 = messageFormatterFn((function(  ) {
  return function(d) { return "상태: 좋음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1450022852 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "시간 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1277596465 = messageFormatterFn((function(  ) {
  return function(d) { return "1시간 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a143276632 = messageFormatterFn((function(  ) {
  return function(d) { return d.start + " - " + d.end; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1796711221 = messageFormatterFn((function(  ) {
  return function(d) { return d.start + " -\n" + d.end; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1128493285 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "개 마크 이전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1519718600 = messageFormatterFn((function(  ) {
  return function(d) { return "1개 마크 이전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a761161836 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "분 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1957044479 = messageFormatterFn((function(  ) {
  return function(d) { return "1분 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a787545528 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "개월 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1541968715 = messageFormatterFn((function(  ) {
  return function(d) { return "1개월 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1109729682 = messageFormatterFn((function(  ) {
  return function(d) { return "상태: 보통"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2013776781 = messageFormatterFn((function(  ) {
  return function(d) { return "비교 안 함"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1243554405 = messageFormatterFn((function(  ) {
  return function(d) { return "—"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b872558876 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "분기 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b385496713 = messageFormatterFn((function(  ) {
  return function(d) { return "1분기 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1646842164 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "초 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1442394273 = messageFormatterFn((function(  ) {
  return function(d) { return "1초 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2136290875 = messageFormatterFn((function(  ) {
  return function(d) { return "새로 고침: " + d.day + ", " + d.time; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1931247340 = messageFormatterFn((function(  ) {
  return function(d) { return "대상 " + d.targetValue; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b207049140 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "주 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b780767521 = messageFormatterFn((function(  ) {
  return function(d) { return "1주 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2081682358 = messageFormatterFn((function(  ) {
  return function(d) { return "주: " + d.week; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1422514217 = messageFormatterFn((function(  ) {
  return function(d) { return "주:\n" + d.week; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a30766677 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + "년 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a126965928 = messageFormatterFn((function(  ) {
  return function(d) { return "1년 전"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1027672891 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a376130574 = messageFormatterFn((function(  ) {
  return function(d) { return "1분"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a208950485 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b437086424 = messageFormatterFn((function(  ) {
  return function(d) { return "1개월"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1343556311 = messageFormatterFn((function(  ) {
  return function(d) { return "없음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a12682857 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b71715908 = messageFormatterFn((function(  ) {
  return function(d) { return "1분기"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1291525925 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a714095022 = messageFormatterFn((function(  ) {
  return function(d) { return "1초"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b802609379 = messageFormatterFn((function(  ) {
  return function(d) { return "스냅샷으로 생성됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a839879835 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a295630190 = messageFormatterFn((function(  ) {
  return function(d) { return "1주"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1749670651 = messageFormatterFn((function(  ) {
  return function(d) { return "시작 날짜: " + d.date; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1246107342 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + "년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1411680325 = messageFormatterFn((function(  ) {
  return function(d) { return "1년"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b795619504 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 논리는 복잡할 수 있습니다. Tableau에서 수행해야 하는 날짜 계산 및 변환의 양을 최소화하십시오. 필요한 경우 다른 방법보다 DATEPARSE 및 MAKEDATE를 사용하고 가능하면 DATEDIFF()와 같은 기본 제공 함수를 사용하십시오. 날짜를 기준으로 필터링하는 경우 불연속형 필터 대신 기준 날짜 필터 또는 연속형 날짜 필터를 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1910219917 = messageFormatterFn((function(  ) {
  return function(d) { return "날짜 계산 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1093859930 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return d.datasourceName + " 데이터 원본에 " + d.numDateCalcs + "개의 날짜 계산이 있습니다.";}, other: function() { return d.datasourceName + " 데이터 원본에 " + d.numDateCalcs + "개의 날짜 계산이 있습니다.";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a1464068490 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본에 날짜 계산이 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a611335434 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 최소 날짜 계산을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a957527461 = messageFormatterFn((function(  ) {
  return function(d) { return "계산에서 여러 데이터 원본의 필드를 사용하는 경우 Tableau는 최적화를 활용할 수 없으며 로컬에서 계산을 수행해야 합니다. Tableau Prep을 사용하여 계산을 만들고 추출을 사용해 보십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1677460440 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본을 사용하는 계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2054054033 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return "데이터 원본 " + d.datasourceName + "에 다른 데이터 원본을 사용하는 " + d.numCalcs + "개의 계산이 있습니다.";}, other: function() { return "데이터 원본 " + d.datasourceName + "에 다른 데이터 원본을 사용하는 " + d.numCalcs + "개의 계산이 있습니다.";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b1563776609 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 개의 데이터 원본에 다른 데이터 원본의 필드를 사용한 계산이 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b446562721 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 데이터 원본에 걸쳐 사용 중인 계산은 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b571979512 = messageFormatterFn((function(  ) {
  return function(d) { return "복잡한 계산 결과를 구하면 성능에 영향을 줄 수 있습니다. 계산만 따로 분리하여 가능한 모든 계산을 데이터베이스로 옮기거나, Tableau Prep을 사용하여 분석 전에 계산을 만드는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a506210773 = messageFormatterFn((function(  ) {
  return function(d) { return "계산 길이"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1263527442 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 " + d.datasourceName + "의 " + d.calculationName + " 계산은 길이가 " + d.calculationLength + "자입니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b394945214 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 계산의 길이가 500자를 초과합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2022998334 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 긴 계산을 사용하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1580730997 = messageFormatterFn((function(  ) {
  return function(d) { return "고정 크기 대시보드는 예측 가능한 크기이기 때문에 캐싱될 수 있습니다. 자동 대시보드 크기 조정을 사용하면 결과가 사용자의 화면에 따라 달라지므로 매번 대시보드를 렌더링해야 합니다. 대시보드를 렌더링하면 성능 저하가 더 자주 발생합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1796114168 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드 크기가 고정되지 않음"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b155910081 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드 " + d.dashboardName + "은(는) 고정된 크기가 아닙니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1646803567 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 대시보드가 고정된 크기가 아닙니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a26051375 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 고정된 대시보드 크기를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1312930557 = messageFormatterFn((function(  ) {
  return function(d) { return "다중 연결을 포함하는 데이터 원본은 로컬에서 계산할 수 없습니다. Tableau Prep에서 데이터 원본을 결합하고 분석에는 추출을 사용하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1881026176 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본의 다중 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a185904839 = messageFormatterFn((function(  ) {
  return function(d) { return d.datasourceName + " 데이터 원본이 여러 데이터 연결을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b279650057 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본이 다중 연결을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1455281225 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 데이터 원본은 단일 연결을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1261545915 = messageFormatterFn((function(  ) {
  return function(d) { return "차원 필터링은 값 목록, 와일드카드 일치 또는 조건부 논리 사용 등의 다양한 방법으로 수행될 수 있습니다. 조건부 논리는 느리게 실행될 수 있습니다. 조건부 논리를 사용하지 않도록 필터를 변경하는 것을 고려하십시오. 필요한 경우 가장 빈번한 결과에 대해 논리 테스트를 먼저 수행하고 가능한 경우 ELSEIF 또는 CASE를 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2140002104 = messageFormatterFn((function(  ) {
  return function(d) { return "필터에 조건부 논리가 사용됨"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a15177743 = messageFormatterFn((function(  ) {
  return function(d) { return "시트 " + d.sheetName + "의 " + d.filterName + " 필터에 조건부 논리가 사용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b278003137 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 필터에 조건부 논리가 사용됩니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b431816961 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 조건부 논리 필터가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a145410942 = messageFormatterFn((function(  ) {
  return function(d) { return "계산을 중첩하면 특히 IF 문과 기타 성능 집약적 함수에서 계산이 복잡해지고 추가 처리가 필요할 수 있습니다. 계산을 데이터 원본으로 푸시하는 것을 고려하거나 추출에서 계산을 구체화하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b737681377 = messageFormatterFn((function(  ) {
  return function(d) { return "중첩된 계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b813980920 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return "데이터 원본 " + d.datasourceName + "에는 다른 계산을 참조하는 " + d.numCalcs + "개의 계산이 있습니다.";}, other: function() { return "데이터 원본 " + d.datasourceName + "에는 다른 계산을 참조하는 " + d.numCalcs + "개의 계산이 있습니다.";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b857209800 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 계산이 다른 계산을 참조합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b401134792 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 중첩된 계산을 포함하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1806471194 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본이 추출되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b427027690 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 데이터 원본이 추출되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a331434620 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau 추출은 분석과 함께 사용할 수 있도록 최대한 효율적으로 설계되었습니다. 추출을 사용하는 것은 데이터 원본으로 인한 성능을 향상시키는 가장 쉬운 방법 중 하나입니다. 추출에는 최적화를 위한 많은 기본 기능도 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b632872223 = messageFormatterFn((function(  ) {
  return function(d) { return "라이브 데이터 연결"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1861114502 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 " + d.datasourceName + "이(가) 추출이 아닙니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1084072522 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본이 추출이 아닙니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1203096630 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 추출을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a91348841 = messageFormatterFn((function(  ) {
  return function(d) { return "계산 결과를 구하면 성능에 영향을 줄 수 있습니다. 가능하면 데이터 원본에 계산을 푸시하는 것이 좋습니다. 추출을 사용하는 경우 계산을 구체화하여 결과를 미리 계산하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1419080044 = messageFormatterFn((function(  ) {
  return function(d) { return "구체화되지 않은 계산"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1228052429 = messageFormatterFn((function(  ) {
  return function(d) { return d.datasourceName + " 데이터 원본은 미리 계산되지 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1680043619 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본이 미리 계산되지 않았습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1559045155 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 미리 계산된 데이터 원본을 포함합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1971139497 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본별로 Tableau가 통합 문서를 로드하고 렌더링해야 하므로 소요 시간이 길어집니다. 특히 세부 수준이 동일하거나 동일한 분석을 지원하는 경우 가능하면 데이터 원본을 결합하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1256836762 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a995545505 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서에 " + d.numDatasources + "개의 데이터 원본이 포함되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1074707695 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 몇 개의 데이터 원본을 포함합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b711899702 = messageFormatterFn((function(  ) {
  return function(d) { return "뷰에 대한 필터가 과도하면 쿼리가 더 복잡해집니다. 가능한 경우 필터 수를 줄이고 필터 동작을 사용하는 것이 좋습니다. 필터 유형 및 형식에 따라 필터를 만드는 데 필요한 성능이 모두 다르므로 필요한 필터를 최적화하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1643979603 = messageFormatterFn((function(  ) {
  return function(d) { return "필터 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b55788972 = messageFormatterFn((function(  ) {
  return function(d) { return d.sheetName + " 시트가 " + d.numFilters + "개의 대화형 필터를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1667436420 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 시트에서 10개가 넘는 대화형 필터를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a271882628 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 뷰당 몇 가지 대화형 필터를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a944279507 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 시트는 전체 통합 문서를 복잡하게 만듭니다. 대시보드에서 항목을 제거하거나 대시보드를 여러 통합 문서로 분리하여 통합 문서의 총 시트 수를 줄이는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a384246122 = messageFormatterFn((function(  ) {
  return function(d) { return "숨겨진 통합 문서 시트 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1900435939 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서에 " + d.numHiddenWindows + "개의 숨겨진 시트가 포함되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b899036531 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 제한된 숨겨진 시트를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b505532036 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본에 조인이 많으면 쿼리를 최적화하기 어려울 수 있습니다. 가능한 경우 관계를 사용하는 것이 좋습니다. 또는 조인이 적고 잘 설계된 여러 데이터 원본이 조인이 많은 복잡한 단일 데이터 원본보다 성능이 더 좋습니다. 단일 데이터 원본에 여러 세부 수준이 있는 경우 특히 더 그렇습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1204820961 = messageFormatterFn((function(  ) {
  return function(d) { return "조인 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a695042438 = messageFormatterFn((function(  ) {
  return function(d) { return d.datasourceName + " 데이터 원본에 " + d.numJoins + "개의 조인이 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b137722698 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본에 5개보다 많은 조인이 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b100945098 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 제한된 수의 조인을 포함합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a519816949 = messageFormatterFn((function(  ) {
  return function(d) { return "레이아웃 컨테이너로 인해 대시보드 렌더링이 복잡해질 수 있습니다. 불필요한 레이아웃 컨테이너를 제거하고 대시보드 디자인을 단순화하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1989096312 = messageFormatterFn((function(  ) {
  return function(d) { return "레이아웃 컨테이너 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1787061057 = messageFormatterFn((function(  ) {
  return function(d) { return d.dashboardName + " 대시보드에 " + d.numLayoutContainers + "개의 레이아웃 컨테이너가 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1328916753 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 대시보드에 20개가 넘는 레이아웃 컨테이너가 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1291010129 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 레이아웃 컨테이너 수에 대한 모범 사례를 따릅니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1898347802 = messageFormatterFn((function(  ) {
  return function(d) { return "복잡한 계산 결과를 구하면 성능에 영향을 줄 수 있습니다. 경우에 따라 LOD는 분석 전에 처리할 수 있는 데이터 원본의 세부 수준 문제를 해결하기 위해 즉석에서 사용됩니다. 많은 LOD가 필요하지 않도록 데이터 원본을 분석에 맞게 조정하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1903917565 = messageFormatterFn((function(  ) {
  return function(d) { return "LOD 계산 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a131161508 = messageFormatterFn((function(  ) {
  return function(d) { return d.datasourceName + " 데이터 원본에 " + d.numLodCalculations + "개의 LOD 계산이 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b224959788 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본에 5개보다 많은 LOD 계산이 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1342537940 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 데이터 원본이 과도한 LOD를 사용하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1072158413 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드는 표시되기 전에 모든 요소를 로드해야 합니다. 대시보드에 포함된 뷰가 많을수록 로드하는 데 더 오래 걸립니다. 뷰, 필터 및 기타 요소의 수를 줄여 대시보드를 가능한 한 효과적이고 단순하게 간소화하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a815223818 = messageFormatterFn((function(  ) {
  return function(d) { return "대시보드에 있는 뷰 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1627940733 = messageFormatterFn((function(  ) {
  return function(d) { return d.dashboardName + " 대시보드에 " + d.numSheets + "개의 뷰가 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a985105325 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 대시보드에 10개가 넘는 뷰가 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1824914451 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 대시보드당 제한된 뷰를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1179276385 = messageFormatterFn((function(  ) {
  return function(d) { return "통합 문서의 전체 크기가 통합 문서를 처리 및 표시하는 데 걸리는 시간에 영향을 줍니다. 시트 수를 줄이면 로드 시간을 단축할 수 있습니다. 불필요한 시트를 닫거나 분석을 여러 통합 문서로 분할하여 통합 문서의 시트 수를 줄이는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b455052514 = messageFormatterFn((function(  ) {
  return function(d) { return "표시된 통합 문서 시트 수"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1766784745 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서에는 표시 가능한 " + d.numVisibleWindows + "개의 시트가 포함되어 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b317433255 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 제한된 수의 표시 가능한 시트를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2028221740 = messageFormatterFn((function(  ) {
  return function(d) { return "이 필터에 대해 “관련된 값만”이 해제되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1866347100 = messageFormatterFn((function(  ) {
  return function(d) { return "모든 필터에 대해 “관련된 값만”이 해제되었습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b796328894 = messageFormatterFn((function(  ) {
  return function(d) { return "필터가 \"관련된 값만\"을 사용하는 경우 퀵 필터 컨트롤은 뷰의 현재 상태에 적용할 수 있는 옵션만 표시합니다. 다른 필터로 변경될 때마다 표시할 값 목록을 다시 쿼리해야 하므로 성능에 영향을 미칩니다. 이 기능을 사용하는 것이 최종 사용자에게 충분한 가치가 있는 경우 데이터를 추출하고 추출을 최적화하는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2009154523 = messageFormatterFn((function(  ) {
  return function(d) { return "“관련된 값만”을 사용하는 필터"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a412136140 = messageFormatterFn((function(  ) {
  return function(d) { return "시트 " + d.sheetName + "의 " + d.filterName + " 필터가 “관련된 값만”을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1209856004 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 필터가 “관련된 값만”을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1261066236 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 \"관련된 값만\" 필터를 사용하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1565373111 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않은 데이터 원본이 닫혔습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a557112697 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않은 데이터 원본이 닫혔습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a341749279 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 원본별로 Tableau가 통합 문서를 로드하고 렌더링해야 하므로 소요 시간이 길어집니다. 사용하지 않는 데이터 원본을 닫는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a205340830 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않은 데이터 원본"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1111400087 = messageFormatterFn((function(  ) {
  return function(d) { return d.datasourceName + " 데이터 원본이 통합 문서에 사용되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1635921511 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본이 통합 문서에 사용되지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a970120409 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 모든 데이터 원본을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b627924290 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않는 필드가 숨겨졌습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b180949522 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않는 필드가 숨겨졌습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a1724141936 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않은 필드를 숨기면 불필요하게 쿼리되는 것을 방지하고 추출 크기를 줄일 수 있습니다. 데이터 원본이 추출인지 여부에 관계없이 사용되지 않은 필드를 숨기는 것이 좋습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a2064336493 = messageFormatterFn((function(  ) {
  return function(d) { return "사용되지 않은 필드"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a223048826 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return d.datasourceName + " 데이터 원본에 사용되지 않은 " + d.numUnusedFields + "개의 필드가 있습니다.";}, other: function() { return d.datasourceName + " 데이터 원본에 사용되지 않은 " + d.numUnusedFields + "개의 필드가 있습니다.";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.b1328528470 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본에 사용되지 않은 필드가 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b745758934 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 여기에는 사용되지 않은 필드가 없습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a801064184 = messageFormatterFn((function(  ) {
  return function(d) { return "연결 필드의 고유한 멤버 수에 따라 데이터 혼합 성능이 달라집니다. 가능한 한 관계를 사용하는 것이 좋습니다. 혼합이 필요한 경우 낮은 카디널리티 연결 필드를 사용하십시오."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b559957019 = messageFormatterFn((function(  ) {
  return function(d) { return "데이터 혼합 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b2091407870 = messageFormatterFn((function(  ) {
  return function(d) { return d.sheetName + " 시트가 데이터 혼합을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a947285298 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 시트가 데이터 혼합을 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1136686414 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 데이터 혼합을 사용하지 않습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b1511407440 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau의 기본 그룹화 기능은 필드의 전체 도메인을 로드하므로 성능에 영향을 미칠 수 있습니다. 대신 CASE 문과 함께 계산된 필드를 사용하여 그룹화하면 성능이 향상될 수 있습니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a838369069 = messageFormatterFn((function(  ) {
  return function(d) { return "그룹화 사용"; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.a416420794 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs.ko, { one: function() { return "데이터 원본 " + d.datasourceName + "이(가) " + d.numGroupFields + "개의 그룹화된 필드를 사용합니다.";}, other: function() { return "데이터 원본 " + d.datasourceName + "이(가) " + d.numGroupFields + "개의 그룹화된 필드를 사용합니다.";} }); }
})(messageFormat.plural, {"ko": Globalize("ko").pluralGenerator()}), Globalize("ko").pluralGenerator({}));
Globalize.a1751360234 = messageFormatterFn((function(  ) {
  return function(d) { return "여러 데이터 원본이 그룹화된 필드를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
Globalize.b621883798 = messageFormatterFn((function(  ) {
  return function(d) { return "이 통합 문서는 모범 사례를 따르며 최소한의 그룹화된 필드를 사용합니다."; }
})(), Globalize("ko").pluralGenerator({}));
}));
