function getLocalizeGlobalNamespace() {
  var globalContainer;

  if (typeof process !== 'undefined' && typeof process.release !== 'undefined' && process.release.name === 'node') {
    globalContainer = global;
  } else {
    globalContainer = window;
  }

  return globalContainer;
}
getLocalizeGlobalNamespace().Localize = getLocalizeGlobalNamespace().Localize || {};
getLocalizeGlobalNamespace().Localize.format = getLocalizeGlobalNamespace().Localize.format || {};
getLocalizeGlobalNamespace().Localize.format.currentLocale = getLocalizeGlobalNamespace().Localize.format.currentLocale || 'ko_KR';
getLocalizeGlobalNamespace().Localize.format.localeData = {"firstDayOfWeek":"sun","prefer24HourTimeCycle":false,"abbreviatedDayNames":{"sun":"일","mon":"월","tue":"화","wed":"수","thu":"목","fri":"금","sat":"토"},"narrowDayNames":{"sun":"일","mon":"월","tue":"화","wed":"수","thu":"목","fri":"금","sat":"토"},"shortDayNames":{"sun":"일","mon":"월","tue":"화","wed":"수","thu":"목","fri":"금","sat":"토"},"wideDayNames":{"sun":"일요일","mon":"월요일","tue":"화요일","wed":"수요일","thu":"목요일","fri":"금요일","sat":"토요일"}};

  getLocalizeGlobalNamespace().Localize.initFormattersAndParsers = function() {
  !function(e){function t(e){return r[e].runtimeKey=e,r[e]}var r,a,n,k,i,T,u,o,s,M,c,N,P,_,w,l,f,m,p,g,h,v;r=e.TabGlobalize,a=r._createError,n=r._partsJoin,k=r._partsPush,r._regexpEscape,i=r._runtimeKey,T=r._stringPad,u=r._validateParameterType,o=r._validateParameterPresence,s=r._validateParameterTypeString,M=function(e){return a("E_UNSUPPORTED","Unsupported {feature}.",{feature:e})},c=function(e,t){u(e,t,void 0===e||"number"==typeof e,"Number")},N=/^([^0]*)(0+)([^0]*)$/,P=function(e,t,r){var a;return 0===e?e:(a=Math.ceil(Math.log(Math.abs(e))/Math.log(10)),r(e,{exponent:a-=t}))},_={".":"decimal",",":"group","%":"percentSign","+":"plusSign","-":"minusSign",E:"exponential","‰":"perMille"},w=function(e){return e[0]+e[e.length-1]!=="''"?e:"''"===e?"'":e.replace(/''/g,"'").slice(1,-1)},l=function(e,t,r){var a,n,i,u,o,s=t[2],c=t[3],l=t[4],f=t[5],m=t[6],p=t[7],g=t[8],h=t[9],v=t[15],b=t[16],d=t[17],y=t[18],D=t[19],F=t[20];return isNaN(e)?[{type:"nan",value:d}]:(d=e<0?(u=t[12],a=t[13],t[14]):(u=t[11],a=t[0],t[10]),a=(t=function(e){var r="integer",a=[];return e.replace(/('([^']|'')+'|'')|./g,function(e,t){t?k(a,"literal",w(t)):"¤"!==e?(e=(e=e.replace(/[.,\-+E%\u2030]/,function(e){return"."===e&&(r="fraction"),k(a,_[e],y[e]),""})).replace(/[0-9]/,function(e){return D&&(e=D[+e]),k(a,r,e),""})).replace(/./,function(e){k(a,"literal",e)}):k(a,"currency",e)}),a})(a),d=t(d),isFinite(e)?(-1!==u.indexOf("%")?e*=100:-1!==u.indexOf("‰")&&(e*=1e3),F&&(i=Math.abs(Math.floor(e)).toString().length-1,"0"===(n=3<=(i=Math.min(i,F.maxExponent))?F[i]&&F[i].other:n)?n=null:n&&(o=n.split("0").length-1,e/=Math.pow(10,i-(o-1)))),e=isNaN(f*m)?(u=e,o=s,s=c,c=v,p=p,u=(l=l)?c(u,p||{exponent:-l}):c(u),u=String(u),l&&/e-/.test(u)&&(u=(+u).toFixed(l).replace(/0+$/,"").replace(/\.$/,"")),s&&((u=u.split("."))[1]=T(u[1]||"",s,!0),u=u.join(".")),o&&((u=u.split("."))[0]=T(u[0],o),u=u.join(".")),u):function(e,t,r,a){var n;if(r<t&&(r=t),e=(+(e=+(n=P(e,t,a))==+(a=P(e,r,a))?n:a)).toString(10),/e/.test(e))throw M({feature:"integers out of (1e21, 1e-7)"});return 0<t-e.replace(/^0+|\./g,"").length&&((e=e.split("."))[1]=T(e[1]||"",t-e[0].replace(/^0+/,"").length,!0),e=e.join(".")),e}(e,f,m,v),F&&n&&(r=r?r(+e):"other",r=(n=F[i][r]||n).match(N),a=a.concat((n=function(e){var a=[];return e.replace(/(\s+)|([^\s0]+)/g,function(e,t,r){t?k(a,"literal",t):r&&k(a,"compact",r)}),a})(r[1])),d=n(r[3]).concat(d)),e=e.replace(/^-/,""),g&&(e=function(e,t,r){for(var a=t,n="",i=!!r,u=(e=String(e).split("."))[0].length;a<u;)n=e[0].slice(u-a,u)+(n.length?",":"")+n,u-=a,i&&(a=r,i=!1);return e[0]=e[0].slice(0,u)+(n.length?",":"")+n,e.join(".")}(e,g,h)),a.concat(t(e),d)):a.concat({type:"infinity",value:b},d))},f=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,m=/[\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]|\uD803\uDEAD/g,p=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,g=function(e){return e.replace(f,"").replace(m,"-").replace(p," ")},h=function(e,t){var r,a,n,i,u,o,s,c,l;return r=[["nan"],["prefix","infinity","suffix"],["prefix","number","suffix"],["negativePrefix","infinity","negativeSuffix"],["negativePrefix","number","negativeSuffix"]],n=t[0],a=t[1]||{},c=t[2],e=g(e),l=e,!r.some(function(e){var r=l;return e.every(function(e){return null!==r.match(c[e])&&(r=r.replace(c[e],(t=e,function(e){switch(e=e.split("").map(function(e){return n[e]||a[e]||e}).join(""),t){case"infinity":u=1/0;break;case"nan":u=NaN;break;case"number":e=e.replace(/,/g,""),u=+e;break;case"prefix":case"negativePrefix":o=e;break;case"suffix":s=e;break;case"negativeSuffix":s=e,i=!0;break;default:throw new Error("Internal error")}return""})),!0);var t})&&!r.length})||isNaN(u)?NaN:(-1!==(e=""+o+s).indexOf("%")?u/=100:-1!==e.indexOf("‰")&&(u/=1e3),i&&(u*=-1),u)},v=function(e){return isNaN(e)?NaN:Math[e<0?"ceil":"floor"](e)},r._createErrorUnsupportedFeature=M,r._looseMatching=g,r._numberFormat=l,r._numberFormatterFn=function(t){return function(e){return n(t(e))}},r._numberParse=h,r._numberParserFn=function(t){return function(e){return o(e,"value"),s(e,"value"),h(e,t)}},r._numberRound=function(n){return n="truncate"===(n=n||"round")?v:Math[n],function(e,t){var r,a;if(e=+e,isNaN(e))return NaN;if("object"==typeof t&&t.exponent){if(a=1,0===(r=+t.exponent))return n(e);if("number"!=typeof r||r%1!=0)return NaN}else{if(1===(a=+t||1))return n(e);if(isNaN(a))return NaN;r=+(a=a.toExponential().split("e"))[1],a=+a[0]}return(e=e.toString().split("e"))[0]=+e[0]/a,e[1]=e[1]?+e[1]-r:-r,(e=(e=n(+(e[0]+"e"+e[1]))).toString().split("e"))[0]=+e[0]*a,e[1]=e[1]?+e[1]+r:r,+(e[0]+"e"+e[1])}},r._numberToPartsFormatterFn=function(t,r){return function(e){return o(e,"value"),c(e,"value"),l(e,t,r)}},r._removeLiteralQuotes=w,r._validateParameterPresence=o,r._validateParameterTypeNumber=c,r._validateParameterTypeString=s,r.numberFormatter=r.prototype.numberFormatter=function(e){return t(i("numberFormatter",this._locale,[e=e||{}]))},r.numberToPartsFormatter=r.prototype.numberToPartsFormatter=function(e){return t(i("numberToPartsFormatter",this._locale,[e=e||{}]))},r.numberParser=r.prototype.numberParser=function(e){return r[i("numberParser",this._locale,[e=e||{}])]},r.formatNumber=r.prototype.formatNumber=function(e,t){return o(e,"value"),c(e,"value"),this.numberFormatter(t)(e)},r.formatNumberToParts=r.prototype.formatNumberToParts=function(e,t){return o(e,"value"),c(e,"value"),this.numberFormatter(t)(e)},r.parseNumber=r.prototype.parseNumber=function(e,t){return o(e,"value"),s(e,"value"),this.numberParser(t)(e)}}(getLocalizeGlobalNamespace()),function(e){function t(e){return void 0!==e.skeleton||void 0!==e.date||void 0!==e.time||void 0!==e.datetime||void 0!==e.raw}var r,h,a,n,m,b,d,i,u,o,s,c,l,v,p,y,g,D,F,k,T,f,M,N,P,_;r=e.TabGlobalize,h=r._createErrorUnsupportedFeature,a=r._looseMatching,n=r._partsJoin,m=r._partsPush,b=r._regexpEscape,d=r._removeLiteralQuotes,i=r._runtimeKey,u=r._stringPad,o=r._validateParameterPresence,s=r._validateParameterType,c=r._validateParameterTypeString,l=function(e,t){s(e,t,void 0===e||e instanceof Date,"Date")},v=function(){function r(e,t,r){Object.defineProperty(e,t,{value:r})}function a(e,t){for(var r=0,a=e.getTime();r<t.length-1&&a>=t[r];)r++;return r}function n(e){var t=this.getTimezoneOffset(),r=e();this.original.setTime(new Date(this.getTime()));e=this.getTimezoneOffset();return e-t&&this.original.setMinutes(this.original.getMinutes()+e-t),r}function i(e,t){if(r(this,"original",new Date(e.getTime())),r(this,"local",new Date(e.getTime())),r(this,"timeZoneData",t),r(this,"setWrap",n),!(t.untils&&t.offsets&&t.isdsts))throw new Error("Invalid IANA data");this.setTime(this.local.getTime()-60*this.getTimezoneOffset()*1e3)}return i.prototype.clone=function(){return new i(this.original,this.timeZoneData)},["getFullYear","getMonth","getDate","getDay","getHours","getMinutes","getSeconds","getMilliseconds"].forEach(function(e){var t="getUTC"+e.substr(3);i.prototype[e]=function(){return this.local[t]()}}),i.prototype.valueOf=i.prototype.getTime=function(){return this.local.getTime()+60*this.getTimezoneOffset()*1e3},i.prototype.getTimezoneOffset=function(){var e=a(this.original,this.timeZoneData.untils);return this.timeZoneData.offsets[e]},["setFullYear","setMonth","setDate","setHours","setMinutes","setSeconds","setMilliseconds"].forEach(function(e){var r="setUTC"+e.substr(3);i.prototype[e]=function(e){var t=this.local;return this.setWrap(function(){return t[r](e)})}}),i.prototype.setTime=function(e){return this.local.setTime(e)},i.prototype.isDST=function(){var e=a(this.original,this.timeZoneData.untils);return Boolean(this.timeZoneData.isdsts[e])},i.prototype.inspect=function(){var e=a(this.original,this.timeZoneData.untils),t=this.timeZoneData.abbrs;return this.local.toISOString().replace(/Z$/,"")+" "+(t&&t[e]+" "||-1*this.getTimezoneOffset()+" ")+(this.isDST()?"(daylight savings)":"")},i.prototype.toDate=function(){return new Date(this.getTime())},["toISOString","toJSON","toUTCString"].forEach(function(e){i.prototype[e]=function(){return this.toDate()[e]()}}),i}(),p=function(e,t){return(e.getDay()-t+7)%7},y=function(e,t){switch(e=e instanceof v?e.clone():new Date(e.getTime()),t){case"year":e.setMonth(0);case"month":e.setDate(1);case"day":e.setHours(0);case"hour":e.setMinutes(0);case"minute":e.setSeconds(0);case"second":e.setMilliseconds(0)}return e},g=function(e){return Math.floor((t=y(e,"year"),(e.getTime()-t.getTime())/864e5));var t},D=function(r,a){return a=a||function(e,t,r){return e[r]=t,e},Object.keys(r).reduce(function(e,t){return a(e,t,r[t])},{})}({era:"G",year:"yY",quarter:"qQ",month:"ML",week:"wW",day:"dDF",weekday:"ecE",dayperiod:"a",hour:"hHkK",minute:"m",second:"sSA",zone:"zvVOxX"},function(t,r,e){return e.split("").forEach(function(e){t[e]=r}),t}),F=/([a-z])\1*|'([^']|'')+'|''|./gi,k=function(e,t,r,a){var e=e.getTimezoneOffset(),n=Math.abs(e);return a=a||{1:function(e){return u(e,1)},2:function(e){return u(e,2)}},t.split(";")[0<e?1:0].replace(":",r).replace(/HH?/,function(e){return a[e.length](Math.floor(n/60))}).replace(/mm/,function(){return a[2](Math.floor(n%60))}).replace(/ss/,function(){return a[2](Math.floor(n%1*60))})},T=["sun","mon","tue","wed","thu","fri","sat"],f=function(o,s,c){var l=[],f=c.timeSeparator;return c.timeZoneData&&(o=new v(o,c.timeZoneData())),c.pattern.replace(F,function(e){var t,r,a,n,i=e.charAt(0),u=e.length;switch("Z"===(i="j"===i?c.preferredTime:i)&&(u=u<4?(i="x",4):u<5?(i="O",4):(i="X",5)),"z"===i&&((a=o.isDST?o.isDST()?c.daylightTzName:c.standardTzName:a)||(i="O",u<4&&(u=1))),i){case"G":a=c.eras[o.getFullYear()<0?0:1];break;case"y":a=o.getFullYear(),2===u&&(a=+(a=String(a)).substr(a.length-2));break;case"Y":(a=new Date(o.getTime())).setDate(a.getDate()+7-p(o,c.firstDay)-c.firstDay-c.minDays),a=a.getFullYear(),2===u&&(a=+(a=String(a)).substr(a.length-2));break;case"Q":case"q":a=Math.ceil((o.getMonth()+1)/3),2<u&&(a=c.quarters[i][u][a]);break;case"M":case"L":a=o.getMonth()+1,2<u&&(a=c.months[i][u][a]);break;case"w":a=p(y(o,"year"),c.firstDay),a=Math.ceil((g(o)+a)/7)-(7-a>=c.minDays?0:1);break;case"W":a=p(y(o,"month"),c.firstDay),a=Math.ceil((o.getDate()+a)/7)-(7-a>=c.minDays?0:1);break;case"d":a=o.getDate();break;case"D":a=g(o)+1;break;case"F":a=Math.floor(o.getDate()/7)+1;break;case"e":case"c":if(u<=2){a=p(o,c.firstDay)+1;break}case"E":a=T[o.getDay()],a=c.days[i][u][a];break;case"a":a=c.dayPeriods[o.getHours()<12?"am":"pm"];break;case"h":a=o.getHours()%12||12;break;case"H":a=o.getHours();break;case"K":a=o.getHours()%12;break;case"k":a=o.getHours()||24;break;case"m":a=o.getMinutes();break;case"s":a=o.getSeconds();break;case"S":a=Math.round(o.getMilliseconds()*Math.pow(10,u-3));break;case"A":a=Math.round(((n=o)-y(n,"day"))*Math.pow(10,u-3));break;case"z":break;case"v":if(c.genericTzName){a=c.genericTzName;break}case"V":if(c.timeZoneName){a=c.timeZoneName;break}"v"===e&&(u=1);case"O":a=0===o.getTimezoneOffset()?c.gmtZeroFormat:(t=u<4?(t=o.getTimezoneOffset(),c.hourFormat[t%60-t%1==0?0:1]):c.hourFormat,a=k(o,t,f,s),c.gmtFormat.replace(/\{0\}/,a));break;case"X":if(0===o.getTimezoneOffset()){a="Z";break}case"x":t=o.getTimezoneOffset(),1===u&&t%60-t%1!=0&&(u+=1),4!==u&&5!==u||t%1!=0||(u-=2),a=k(o,a=["+HH;-HH","+HHmm;-HHmm","+HH:mm;-HH:mm","+HHmmss;-HHmmss","+HH:mm:ss;-HH:mm:ss"][u-1],":");break;case":":a=f;break;case"'":a=d(e);break;default:a=e}"number"==typeof a&&(a=s[u](a)),r=D[i],m(l,r||"literal",a)}),l},M=function(e,t){var r=e.getDate();e.setDate(1),e.setMonth(t),t=e,e=r,r=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),t.setDate(e<1?1:e<r?e:r)},N=function(e,t,r){return e<t||r<e},P=function(e,t,n){var i,u,o,s,c,l,f,m,r,p=new Date,g=[];if(n.timeZoneData&&(p=new v(p,n.timeZoneData())),!t.length)return null;if(!t.every(function(e){var t,r,a;if("literal"===e.type)return!0;switch(t=e.type.charAt(0),a=e.type.length,t="j"===t?n.preferredTimeData:t){case"G":g.push(0),c=+e.value;break;case"y":if(r=e.value,2===a){if(N(r,0,99))return!1;(r+=100*Math.floor(p.getFullYear()/100))>p.getFullYear()+20&&(r-=100)}p.setFullYear(r),g.push(0);break;case"Y":throw h({feature:"year pattern `"+t+"`"});case"Q":case"q":break;case"M":case"L":if(r=a<=2?e.value:+e.value,N(r,1,12))return!1;s=r,g.push(1);break;case"w":case"W":break;case"d":u=e.value,g.push(2);break;case"D":o=e.value,g.push(2);break;case"F":break;case"e":case"c":case"E":break;case"a":i=e.value;break;case"h":if(r=e.value,N(r,1,12))return!1;l=f=!0,p.setHours(12===r?0:r),g.push(3);break;case"K":if(r=e.value,N(r,0,11))return!1;l=f=!0,p.setHours(r),g.push(3);break;case"k":if(r=e.value,N(r,1,24))return!1;l=!0,p.setHours(24===r?0:r),g.push(3);break;case"H":if(r=e.value,N(r,0,23))return!1;l=!0,p.setHours(r),g.push(3);break;case"m":if(r=e.value,N(r,0,59))return!1;p.setMinutes(r),g.push(4);break;case"s":if(r=e.value,N(r,0,59))return!1;p.setSeconds(r),g.push(5);break;case"A":p.setHours(0),p.setMinutes(0),p.setSeconds(0);case"S":r=Math.round(e.value*Math.pow(10,3-a)),p.setMilliseconds(r),g.push(6);break;case"z":case"Z":case"O":case"v":case"V":case"X":case"x":"number"==typeof e.value&&(m=e.value)}return!0}))return null;if(l&&!(!i^f))return null;if(0===c&&p.setFullYear(-1*p.getFullYear()+1),void 0!==s&&M(p,s-1),void 0!==u){if(N(u,1,(r=p,new Date(r.getFullYear(),r.getMonth()+1,0).getDate())))return null;p.setDate(u)}else if(void 0!==o){if(N(o,1,(r=p.getFullYear(),1===new Date(r,1,29).getMonth()?366:365)))return null;p.setMonth(0),p.setDate(o)}return f&&"pm"===i&&p.setHours(p.getHours()+12),void 0!==m&&p.setMinutes(p.getMinutes()+m-p.getTimezoneOffset()),g=Math.max.apply(null,g),p=(p=y(p,["year","month","day","hour","minute","second","milliseconds"][g]))instanceof v?p.toDate():p},_=function(f,m,p){var e,g=[],h=["abbreviated","wide","narrow"],v=p.digitsRe;return f=a(f),e=p.pattern.match(F).every(function(e){var t,r,a,n,i={};function u(e,t){var r,a=f.match(e);return t=t||function(e){return+e},a&&(e=a[1],a.length<6?i.value=60*t(a[r=e?1:3]):a.length<10?i.value=60*t(a[(r=e?[1,3]:[5,7])[0]])+t(a[r[1]]):i.value=60*t(a[(r=e?[1,3,5]:[7,9,11])[0]])+t(a[r[1]])+t(a[r[2]])/60,e&&(i.value*=-1),1)}function o(){return 1===r&&(a=!0,n=v)}function s(){return(1===r||2===r)&&(a=!0,n=new RegExp("^("+v.source+"){1,2}"))}function c(){return 2===r&&(a=!0,n=new RegExp("^("+v.source+"){2}"))}function l(e){e=p[e.join("/")];e&&e.some(function(e){if(e[1].test(f))return i.value=e[0],n=e[1],!0})}switch(t=(i.type=e).charAt(0),r=e.length,"Z"===t&&(r=r<4?(t="x",4):r<5?(t="O",4):(t="X",5)),"z"===t&&p.standardOrDaylightTzName&&(i.value=null,n=p.standardOrDaylightTzName),"v"===t&&(p.genericTzName?(i.value=null,n=p.genericTzName):(t="V",r=4)),"V"===t&&p.timeZoneName&&(i.value=2===r?p.timeZoneName:null,n=p.timeZoneNameRe),t){case"G":l(["gregorian/eras",r<=3?"eraAbbr":4===r?"eraNames":"eraNarrow"]);break;case"y":case"Y":a=!0,n=1===r?new RegExp("^("+v.source+")+"):2===r?new RegExp("^("+v.source+"){1,2}"):new RegExp("^("+v.source+"){"+r+",}");break;case"Q":case"q":o()||c()||l(["gregorian/quarters","Q"===t?"format":"stand-alone",h[r-3]]);break;case"M":case"L":s()||l(["gregorian/months","M"===t?"format":"stand-alone",h[r-3]]);break;case"D":r<=3&&(a=!0,n=new RegExp("^("+v.source+"){"+r+",3}"));break;case"W":case"F":o();break;case"e":case"c":if(r<=2){o()||c();break}case"E":6===r?(l(["gregorian/days",["c"===t?"stand-alone":"format"],"short"]),l(["gregorian/days",["c"===t?"stand-alone":"format"],"abbreviated"])):l(["gregorian/days",["c"===t?"stand-alone":"format"],h[r<3?0:r-3]]);break;case"a":l(["gregorian/dayPeriods/format/wide"]);break;case"w":1===r&&(a=!0,n=new RegExp("^("+v.source+"){1,2}"))||c();break;case"d":case"h":case"H":case"K":case"k":case"j":case"m":case"s":s();break;case"S":a=!0,n=new RegExp("^("+v.source+"){"+r+"}");break;case"A":a=!0,n=new RegExp("^("+v.source+"){"+(r+5)+"}");break;case"v":case"V":case"z":if(n&&n.test(f))break;if("V"===t&&2===r)break;case"O":if(f===p["timeZoneNames/gmtZeroFormat"])i.value=0,n=p["timeZoneNames/gmtZeroFormatRe"];else if(!p["timeZoneNames/hourFormat"].some(function(e){if(u(e,m))return n=e,!0}))return null;break;case"X":if("Z"===f){i.value=0,n=/^Z/;break}case"x":if(!p.x.some(function(e){if(u(e))return n=e,!0}))return null;break;case"'":i.type="literal",n=new RegExp("^"+b(d(e)));break;default:i.type="literal",n=new RegExp("^"+b(e))}return!!n&&(f=f.replace(n,function(e){return i.lexeme=e,a&&(i.value=m(e)),""}),!!i.lexeme&&((!a||!isNaN(i.value))&&(g.push(i),!0)))}),(e=""!==f?!1:e)?g:[]},r._dateFormat=f,r._dateFormatterFn=function(t){return function(e){return n(t(e))}},r._dateParser=P,r._dateParserFn=function(t,r,a){return function(e){return o(e,"value"),c(e,"value"),e=_(e,t,a),P(0,e,r)||null}},r._dateTokenizer=_,r._dateToPartsFormatterFn=function(t,r){return function(e){return o(e,"value"),l(e,"value"),f(e,t,r)}},r._validateParameterTypeDate=l,r.dateFormatter=r.prototype.dateFormatter=function(e){return t(e=e||{})||(e.skeleton="yMd"),r[i("dateFormatter",this._locale,[e])]},r.dateToPartsFormatter=r.prototype.dateToPartsFormatter=function(e){return t(e=e||{})||(e.skeleton="yMd"),r[i("dateToPartsFormatter",this._locale,[e])]},r.dateParser=r.prototype.dateParser=function(e){return t(e=e||{})||(e.skeleton="yMd"),r[i("dateParser",this._locale,[e])]},r.formatDate=r.prototype.formatDate=function(e,t){return o(e,"value"),l(e,"value"),this.dateFormatter(t)(e)},r.formatDateToParts=r.prototype.formatDateToParts=function(e,t){return o(e,"value"),l(e,"value"),this.dateToPartsFormatter(t)(e)},r.parseDate=r.prototype.parseDate=function(e,t){return o(e,"value"),c(e,"value"),this.dateParser(t)(e)}}(getLocalizeGlobalNamespace()),function(e){var r,s,a,c,l;r=e.TabGlobalize,s=r._formatMessage,a=r._runtimeKey,c=r._validateParameterPresence,l=r._validateParameterTypeNumber,r._relativeTimeFormatterFn=function(i,u,o){return function(e){return c(e,"value"),l(e,"value"),r=i,a=u,(e=(n=o)["relative-type-"+(t=e)])||(e=(t<=0?n["relativeTime-type-past"]:n["relativeTime-type-future"])["relativeTimePattern-count-"+a(t=Math.abs(t))],s(e,[r(t)]));var t,r,a,n}},r.formatRelativeTime=r.prototype.formatRelativeTime=function(e,t,r){return c(e,"value"),l(e,"value"),this.relativeTimeFormatter(t,r)(e)},r.relativeTimeFormatter=r.prototype.relativeTimeFormatter=function(e,t){return r[a("relativeTimeFormatter",this._locale,[e,t=t||{}])]}}(getLocalizeGlobalNamespace()),function(e){var r,l,a,f,m;r=e.TabGlobalize,l=r._formatMessage,a=r._runtimeKey,f=r._validateParameterPresence,m=r._validateParameterTypeNumber,r._unitFormatterFn=function(o,s,c){return function(e){return f(e,"value"),m(e,"value"),t=e,r=o,a=s,u=(n=c).compoundUnitPattern,n=n.unitProperties,i=r(t),e=a(t),n instanceof Array?(r=n[0],t=(a=n[1]).hasOwnProperty("one")?"one":"other",r=l(r[e],[i]),t=l(a[t],[""]).trim(),l(u,[r,t])):(e=n[e],l(e,[i]));var t,r,a,n,i,u}},r.formatUnit=r.prototype.formatUnit=function(e,t,r){return this.unitFormatter(t,r)(e)},r.unitFormatter=r.prototype.unitFormatter=function(e,t){return r[a("unitFormatter",this._locale,[e,t=t||{}])]}}(getLocalizeGlobalNamespace());;
  (function( root, factory ) {
    root.Localize = root.Localize || {};
    root.Localize.format = root.Localize.format || {};
    root.Localize.format.fmt = new root.TabGlobalize('ko');
    root.Localize.format.currentLocale = 'ko_KR';
    factory( root.TabGlobalize, root.Localize );
  }(getLocalizeGlobalNamespace(), function( Globalize, Localize ) {
  // eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./Types.ts" />
/**
 * The runtime code for Localize. Note that this file is very different from the other TypeScript
 * files. It is used at runtime in the browser, not at build time in node. Because of this there are
 * some special considerations:
 *
 *   1. Don't pollute the global scope. Everything is wrapped in the initRuntime function and the
 *      localize.ts instance is injected.
 *   2. You can only reference other TypeScript files if importing interfaces or types and they must
 *      be imported via the Types reference (to avoid this file becoming a module).
 *   3. You can't debug through vscode like you would in a normal test. You'll need to write
 *      'debugger;' lines to set breakpoints, instead of setting breakpoints in the gutters through
 *      the vscode UI.
 *
 * We could make this experience better for developers by separating the build and runtime into two
 * different compiles and tests. This would make the dev experience more straightforward, but it's
 * more work to do and a more complicated build system. Unless this file grows significantly, we're
 * probably okay as is.
 *
 * Note that we do actually compile this separately than the rest of the TypeScript code. This is
 * because the rest of the code should be able to use the newest Node definitions, like Promises,
 * but we can't rely on those types in the browser. We also target ES6 for the node files, but ES5
 * for this file.
 */
// eslint-disable-next-line
function initRuntime(localize) {
    // The threshold at which to start reporting as the next type of unit. For example,
    // if the difference in two dates is 55 seconds, say "1 minute" instead of "55 seconds"
    var secondToMinuteThreshold = 45;
    var minuteToHourThreshold = 45;
    var hoursToDayThreshold = 22;
    var daysToWeekThreshold = 5;
    var weekToMonthThreshold = 4;
    var monthsToYearThreshold = 11;
    // With leap year days, there are 146097 days in 400 years.
    var yearPerDay = 400 / 146097;
    var singleMonthCCJ = '\u6708'; // `月`
    var wrongDoubleMonthCCJ = singleMonthCCJ + singleMonthCCJ; // `月月`
    localize.format.formatRelativeTime = function formatRelativeTime(num, options) {
        var normalizedUnit = options.form === 'long' ? options.unit : options.unit + "-" + options.form;
        return localize.format.fmt.formatRelativeTime(num, normalizedUnit, options.numberFormatOptions);
    };
    localize.format.formatBestFitRelativeTime = function formatBestFitRelativeTime(toDate, options, fromDate) {
        if (fromDate === void 0) { fromDate = new Date(); }
        var fromMilliseconds = fromDate.getTime();
        var toMilliseconds = toDate.getTime();
        var milliseconds = Math.round(toMilliseconds - fromMilliseconds);
        var format = function (num, unit) {
            return localize.format.formatRelativeTime(num, { unit: unit, form: options.form, numberFormatOptions: options.numberFormatOptions });
        };
        var seconds = Math.round(milliseconds / 1000);
        if (Math.abs(seconds) < secondToMinuteThreshold) {
            return format(seconds, 'second');
        }
        var minutes = Math.round(seconds / 60);
        if (Math.abs(minutes) < minuteToHourThreshold) {
            return format(minutes, 'minute');
        }
        var hours = Math.round(minutes / 60);
        if (Math.abs(hours) < hoursToDayThreshold) {
            return format(hours, 'hour');
        }
        var days = Math.round(hours / 24);
        if (Math.abs(days) < daysToWeekThreshold) {
            return format(days, 'day');
        }
        var weeks = Math.round(days / 7);
        if (Math.abs(weeks) < weekToMonthThreshold) {
            return format(weeks, 'week');
        }
        var yearsFraction = days * yearPerDay;
        var months = Math.round(yearsFraction * 12);
        if (Math.abs(months) < monthsToYearThreshold) {
            return format(months, 'month');
        }
        var years = Math.round(yearsFraction);
        return format(years, 'year');
    };
    localize.format.formatUnit = function formatUnit(value, opts) {
        var numberFormatOptions = opts.numberFormatOptions;
        var formatUnitOptions = {};
        if (numberFormatOptions === undefined) {
            formatUnitOptions = { form: opts.form };
        }
        else {
            formatUnitOptions = { form: opts.form, numberFormatter: localize.format.fmt.numberFormatter(numberFormatOptions) };
        }
        return localize.format.fmt.formatUnit(value, opts.unit, formatUnitOptions);
    };
    localize.format.formatDate = function formatDate(date, options) {
        // Workaround: TFSID: 1107571 : Incorrect month localization for China
        return localize.format.fmt.formatDate(date, options).replace(wrongDoubleMonthCCJ, singleMonthCCJ);
    };
    localize.format.formatNumber = function formatNumber(num, options) {
        // Workaround for CLDR issue: TFS: 1389887
        return localize.format.fmt.formatNumber(num, options).replace(/(Mio|Mrd|Bio)\'\.\'/, '$1.');
    };
    localize.format.parseDate = function parseDate(str, options) {
        return localize.format.fmt.parseDate(str, options);
    };
    localize.format.parseNumber = function parseNumber(str, options) {
        return localize.format.fmt.parseNumber(str, options);
    };
    // Setup backwards compatibility with Localize <8.2
    localize.fmt = localize.format.fmt;
    localize.localeData = localize.format.localeData;
    localize.formatBestFitRelativeTime = localize.format.formatBestFitRelativeTime;
}
;
  initRuntime(Localize);
  // TODO: remove workaround below
  var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
  var validateParameterPresence = Globalize._validateParameterPresence;
  var numberFormat = Globalize._numberFormat;
  // ----
  var numberRound = Globalize._numberRound;
var numberToPartsFormatterFn = Globalize._numberToPartsFormatterFn;
var numberFormatterFn = Globalize._numberFormatterFn;
var numberParserFn = Globalize._numberParserFn;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var dateToPartsFormatterFn = Globalize._dateToPartsFormatterFn;
var dateFormatterFn = Globalize._dateFormatterFn;
var dateParserFn = Globalize._dateParserFn;
var relativeTimeFormatterFn = Globalize._relativeTimeFormatterFn;

Globalize.a770941060 = numberToPartsFormatterFn(["",,1,0,0,,,,,,"","0","-0","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1870300208 = numberToPartsFormatterFn(["",,2,0,0,,,,,,"","00","-00","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a288474240 = numberToPartsFormatterFn(["",,1,0,0,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b477176486 = numberToPartsFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1807030898 = numberToPartsFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a276520663 = numberToPartsFormatterFn(["",,1,0,3,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a1975365445 = numberToPartsFormatterFn(["",,1,0,2,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"3":{"other":"0천"},"4":{"other":"0만"},"5":{"other":"00만"},"6":{"other":"000만"},"7":{"other":"0000만"},"8":{"other":"0억"},"9":{"other":"00억"},"10":{"other":"000억"},"11":{"other":"0000억"},"12":{"other":"0조"},"13":{"other":"00조"},"14":{"other":"000조"},"maxExponent":14}], Globalize("ko").pluralGenerator({}));
Globalize.a585136102 = numberToPartsFormatterFn(["",,1,0,0,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b2051587504 = numberToPartsFormatterFn(["",,4,0,0,,,,,,"","0000","-0000","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1664565246 = numberToPartsFormatterFn(["",,1,1,9,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b565161207 = numberToPartsFormatterFn(["",,1,0,3,1,15,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1509608791 = numberToPartsFormatterFn(["",,1,0,9,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.a89394328 = numberToPartsFormatterFn(["",,1,0,2,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b757613268 = numberToPartsFormatterFn(["",,1,0,2,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b1630309163 = numberToPartsFormatterFn(["",,1,0,2,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"3":{"other":"0천"},"4":{"other":"0만"},"5":{"other":"00만"},"6":{"other":"000만"},"7":{"other":"0000만"},"8":{"other":"0억"},"9":{"other":"00억"},"10":{"other":"000억"},"11":{"other":"0000억"},"12":{"other":"0조"},"13":{"other":"00조"},"14":{"other":"000조"},"maxExponent":14}], Globalize("ko").pluralGenerator({}));
Globalize.a994814057 = numberToPartsFormatterFn(["",,1,0,2,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"3":{"other":"0천"},"4":{"other":"0만"},"5":{"other":"00만"},"6":{"other":"000만"},"7":{"other":"0000만"},"8":{"other":"0억"},"9":{"other":"00억"},"10":{"other":"000억"},"11":{"other":"0000억"},"12":{"other":"0조"},"13":{"other":"00조"},"14":{"other":"000조"},"maxExponent":14}], Globalize("ko").pluralGenerator({}));
Globalize.a810437435 = numberToPartsFormatterFn(["",,1,2,2,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"3":{"other":"0천"},"4":{"other":"0만"},"5":{"other":"00만"},"6":{"other":"000만"},"7":{"other":"0000만"},"8":{"other":"0억"},"9":{"other":"00억"},"10":{"other":"000억"},"11":{"other":"0000억"},"12":{"other":"0조"},"13":{"other":"00조"},"14":{"other":"000조"},"maxExponent":14}], Globalize("ko").pluralGenerator({}));
Globalize.b268800561 = numberToPartsFormatterFn(["",,1,2,2,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"3":{"other":"0천"},"4":{"other":"0만"},"5":{"other":"00만"},"6":{"other":"000만"},"7":{"other":"0000만"},"8":{"other":"0억"},"9":{"other":"00억"},"10":{"other":"000억"},"11":{"other":"0000억"},"12":{"other":"0조"},"13":{"other":"00조"},"14":{"other":"000조"},"maxExponent":14}], Globalize("ko").pluralGenerator({}));
Globalize.b129460390 = numberToPartsFormatterFn(["",,1,0,0,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b976467986 = numberToPartsFormatterFn(["",,1,0,0,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},]);
Globalize.b258501865 = numberToPartsFormatterFn(["",,1,0,0,,,,3,,"","#,##0.###","-#,##0.###","-","",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"3":{"other":"0천"},"4":{"other":"0만"},"5":{"other":"00만"},"6":{"other":"000만"},"7":{"other":"0000만"},"8":{"other":"0억"},"9":{"other":"00억"},"10":{"other":"000억"},"11":{"other":"0000억"},"12":{"other":"0조"},"13":{"other":"00조"},"14":{"other":"000조"},"maxExponent":14}], Globalize("ko").pluralGenerator({}));
Globalize.b1928345941 = numberToPartsFormatterFn(["",,1,0,0,,,,3,,"%","#,##0%","-#,##0%%","-","%",numberRound(),"∞","NaN",{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"3":{"other":"0천"},"4":{"other":"0만"},"5":{"other":"00만"},"6":{"other":"000만"},"7":{"other":"0000만"},"8":{"other":"0억"},"9":{"other":"00억"},"10":{"other":"000억"},"11":{"other":"0000억"},"12":{"other":"0조"},"13":{"other":"00조"},"14":{"other":"000조"},"maxExponent":14}], Globalize("ko").pluralGenerator({}));
Globalize.a1328704305 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"raw":"0"}));
Globalize.b1759508797 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"raw":"00"}));
Globalize.b2107140819 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"maximumFractionDigits":0}));
Globalize.a413313799 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"decimal"}));
Globalize.b295687899 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({}));
Globalize.b1870961078 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"decimal","maximumFractionDigits":3,"useGrouping":true}));
Globalize.b726307470 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"decimal","maximumFractionDigits":2,"compact":"short"}));
Globalize.a1475626387 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"percent"}));
Globalize.a1339743363 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"raw":"0000"}));
Globalize.b282459857 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"decimal","minimumFractionDigits":1,"maximumFractionDigits":9}));
Globalize.b1144466116 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"decimal","minimumSignificantDigits":1,"maximumSignificantDigits":15}));
Globalize.a2139820566 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"decimal","maximumFractionDigits":9}));
Globalize.a1552554699 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"maximumFractionDigits":2,"useGrouping":true}));
Globalize.a1389872287 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"percent","maximumFractionDigits":2,"useGrouping":true}));
Globalize.a517176392 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"maximumFractionDigits":2,"compact":"short","useGrouping":true}));
Globalize.b947791588 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"percent","maximumFractionDigits":2,"compact":"short","useGrouping":true}));
Globalize.b1490151186 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"minimumFractionDigits":2,"maximumFractionDigits":2,"compact":"short","useGrouping":true}));
Globalize.a1266898114 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"percent","minimumFractionDigits":2,"maximumFractionDigits":2,"compact":"short","useGrouping":true}));
Globalize.a1333699981 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"maximumFractionDigits":0,"useGrouping":true}));
Globalize.a1171017569 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"percent","maximumFractionDigits":0,"useGrouping":true}));
Globalize.a1888983690 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"maximumFractionDigits":0,"compact":"short","useGrouping":true}));
Globalize.a424015710 = numberFormatterFn(Globalize("ko").numberToPartsFormatter({"style":"percent","maximumFractionDigits":0,"compact":"short","useGrouping":true}));
Globalize.b1343306998 = numberParserFn([{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"infinity":/^∞/,"nan":/^NaN/,"negativePrefix":/^-/,"negativeSuffix":/^/,"number":/^\d+/,"prefix":/^/,"suffix":/^/}]);
Globalize.b317056544 = numberParserFn([{".":".",",":",","%":"%","+":"+","-":"-","E":"E","‰":"‰"},,{"infinity":/^∞/,"nan":/^NaN/,"negativePrefix":/^-/,"negativeSuffix":/^/,"number":/^((\d{1,3}(,\d{3})+|\d+)(\.\d+|\.)?|((\d{1,3}(,\d{3})+|\d+))?\.\d+)/,"prefix":/^/,"suffix":/^/}]);
Globalize.a1835044563 = pluralGeneratorFn(function(n
) {
  return 'other';
});
Globalize.b1313321892 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y. M. d.","timeSeparator":":"});
Globalize.a1084848278 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y년 MMM d일 a h:mm","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b630531592 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"a h:mm","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b1494806532 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 MMM","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.a1614995076 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y. M. d.","timeSeparator":":"});
Globalize.a836108073 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y. M. d. a h:mm:ss","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b1929666762 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 MMM d일 a h시","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a1591191263 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y. M. d. a h:mm","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a982291138 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 M월 d일 EEEE","timeSeparator":":","days":{"E":{"4":{"sun":"일요일","mon":"월요일","tue":"화요일","wed":"수요일","thu":"목요일","fri":"금요일","sat":"토요일"}}}});
Globalize.a951172212 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"MMM d일 a h:mm","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a730026091 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"a h:mm","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a310173439 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y년 MMM d일 a h:mm","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a704822905 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"M. d.","timeSeparator":":"});
Globalize.a354627239 = dateToPartsFormatterFn({}, {"pattern":"LLL","timeSeparator":":","months":{"L":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.a301081051 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년","timeSeparator":":"});
Globalize.a1227993821 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"}),"4":Globalize("ko").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy. M. d. a h:mm:ss","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b930293676 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"}),"4":Globalize("ko").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy. M. d. a h:mm","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b921704135 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"4":Globalize("ko").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy. M. d.","timeSeparator":":"});
Globalize.b1890262832 = dateToPartsFormatterFn({}, {"pattern":"LLLL","timeSeparator":":","months":{"L":{"4":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.b1951086491 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 MMMM d일","timeSeparator":":","months":{"M":{"4":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.a1970707584 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y년 MMMM d일 a h:mm","timeSeparator":":","months":{"M":{"4":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b637017392 = dateToPartsFormatterFn({}, {"pattern":"cccc","timeSeparator":":","days":{"c":{"4":{"sun":"일요일","mon":"월요일","tue":"화요일","wed":"수요일","thu":"목요일","fri":"금요일","sat":"토요일"}}}});
Globalize.a300455440 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"d일","timeSeparator":":"});
Globalize.b352140073 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 MMMM d일 a h시","timeSeparator":":","months":{"M":{"4":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a964719665 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y년 MMMM d일 a h:mm:ss","timeSeparator":":","months":{"M":{"4":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b1376476680 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 QQQ","timeSeparator":":","quarters":{"Q":{"3":{"1":"1분기","2":"2분기","3":"3분기","4":"4분기"}}}});
Globalize.a906832411 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 MMMM","timeSeparator":":","months":{"M":{"4":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.b1285876105 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"yy. M. d.","timeSeparator":":"});
Globalize.a1842269109 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 M월 d일","timeSeparator":":"});
Globalize.a1822488827 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"a h:mm:ss","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b907537388 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"a h시 m분 s초 z","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"},"gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","hourFormat":["+H;-H","+H:mm;-H:mm"]});
Globalize.b1767515359 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"a h시 m분 s초 zzzz","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"},"gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","hourFormat":"+HH:mm;-HH:mm"});
Globalize.b662350326 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"yy. M. d. a h:mm","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b77279806 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y년 M월 d일 a h시 m분 s초 z","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"},"gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","hourFormat":["+H;-H","+H:mm;-H:mm"]});
Globalize.b937257777 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y년 M월 d일 EEEE a h시 m분 s초 zzzz","timeSeparator":":","days":{"E":{"4":{"sun":"일요일","mon":"월요일","tue":"화요일","wed":"수요일","thu":"목요일","fri":"금요일","sat":"토요일"}}},"dayPeriods":{"am":"오전","pm":"오후"},"gmtFormat":"GMT{0}","gmtZeroFormat":"GMT","hourFormat":"+HH:mm;-HH:mm"});
Globalize.b1614652528 = dateToPartsFormatterFn({"4":Globalize("ko").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy년 MMMM","timeSeparator":":","months":{"M":{"4":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.a1728253647 = dateToPartsFormatterFn({}, {"pattern":"ccccc","timeSeparator":":","days":{"c":{"5":{"sun":"일","mon":"월","tue":"화","wed":"수","thu":"목","fri":"금","sat":"토"}}}});
Globalize.b959846348 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"}),"4":Globalize("ko").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy. M. d. HH:mm","timeSeparator":":"});
Globalize.a311860989 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"4":Globalize("ko").numberFormatter({"raw":"0000"})}, {"pattern":"yyyy. M. d. H시 m분 s초","timeSeparator":":"});
Globalize.b1472761192 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y. M. d. a h시","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a744772636 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y. M.","timeSeparator":":"});
Globalize.a1027768722 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"}),"2":Globalize("ko").numberFormatter({"raw":"00"})}, {"pattern":"y년 MMM d일 a h:mm:ss","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.b1929726344 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 MMM d일 a h시","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}},"dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a907517604 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"y년 MMM d일","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.b1889577639 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"MMM d일","timeSeparator":":","months":{"M":{"3":{"1":"1월","2":"2월","3":"3월","4":"4월","5":"5월","6":"6월","7":"7월","8":"8월","9":"9월","10":"10월","11":"11월","12":"12월"}}}});
Globalize.a300574604 = dateToPartsFormatterFn({"1":Globalize("ko").numberFormatter({"raw":"0"})}, {"pattern":"a h시","timeSeparator":":","dayPeriods":{"am":"오전","pm":"오후"}});
Globalize.a2145484851 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"date":"medium"}));
Globalize.a1463562029 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMdjmm"}));
Globalize.a1559252801 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"time":"short"}));
Globalize.b1886213613 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMM"}));
Globalize.a1463821709 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMd"}));
Globalize.b1643942016 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"datetime":"medium"}));
Globalize.b114749555 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMdj"}));
Globalize.b1952493656 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMdhm"}));
Globalize.a1884213337 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"date":"full"}));
Globalize.b1528877877 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"MMMdhm"}));
Globalize.b106134462 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"hm"}));
Globalize.a738032008 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMdhm"}));
Globalize.b131337648 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"Md"}));
Globalize.a203453872 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"MMM"}));
Globalize.b1804101852 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"y"}));
Globalize.a83218214 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yyyyMdhms"}));
Globalize.b551579925 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yyyyMdhm"}));
Globalize.a893213072 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yyyyMd"}));
Globalize.a2013297383 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"MMMM"}));
Globalize.b136169284 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMMd"}));
Globalize.b1945545961 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMMdhm"}));
Globalize.b1028424473 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"EEEE"}));
Globalize.b1804727463 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"d"}));
Globalize.a75718496 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMMdh"}));
Globalize.b180055942 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMMdhms"}));
Globalize.b1767883761 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yQQQ"}));
Globalize.a1658114788 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMM"}));
Globalize.a903908288 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"date":"short"}));
Globalize.b1550775988 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"date":"long"}));
Globalize.a986328274 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"time":"medium"}));
Globalize.b5615189 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"time":"long"}));
Globalize.b865593160 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"time":"full"}));
Globalize.a88932051 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"datetime":"short"}));
Globalize.b468686887 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"datetime":"long"}));
Globalize.b1328664858 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"datetime":"full"}));
Globalize.b1235938777 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yyyyMMMM"}));
Globalize.b1815431272 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"EEEEE"}));
Globalize.b581132597 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yyyyMdHm"}));
Globalize.b832914618 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yyyyMdHms"}));
Globalize.b1864168273 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMdh"}));
Globalize.b91387917 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yM"}));
Globalize.a1406482473 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMdhms"}));
Globalize.b114809137 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMdh"}));
Globalize.a1658799981 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"yMMMd"}));
Globalize.a2013982576 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"MMMd"}));
Globalize.b1804608299 = dateFormatterFn(Globalize("ko").dateToPartsFormatter({"skeleton":"h"}));
Globalize.a1861644271 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y. M. d. a h:mm:ss","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^오전/],["pm",/^오후/]]});
Globalize.b1480801807 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yy. M. d.","digitsRe":/\d/});
Globalize.a1233915938 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y. M. d.","digitsRe":/\d/});
Globalize.a1697433851 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y년 M월 d일","digitsRe":/\d/});
Globalize.a837455880 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y년 M월 d일 EEEE","digitsRe":/\d/,"gregorian/days/format/wide":[["sun",/^일요일/],["mon",/^월요일/],["tue",/^화요일/],["wed",/^수요일/],["thu",/^목요일/],["fri",/^금요일/],["sat",/^토요일/]]});
Globalize.a617657476 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yy. M. d. a h:mm","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^오전/],["pm",/^오후/]]});
Globalize.b313083896 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y년 M월 d일 a h시 m분 s초 z","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^오전/],["pm",/^오후/]],"timeZoneNames/gmtZeroFormat":"GMT","timeZoneNames/hourFormat":[/^GMT\+((\d){1,2}):((\d){2})|GMT-((\d){1,2}):((\d){2})/,/^GMT\+((\d){1,2})|GMT-((\d){1,2})/],"timeZoneNames/gmtZeroFormatRe":/^GMT/,"x":[/^\+((\d){2})((\d){2})|-((\d){2})((\d){2})/,/^\+((\d){2})|-((\d){2})/]});
Globalize.b1173061867 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"y년 M월 d일 EEEE a h시 m분 s초 zzzz","digitsRe":/\d/,"gregorian/days/format/wide":[["sun",/^일요일/],["mon",/^월요일/],["tue",/^화요일/],["wed",/^수요일/],["thu",/^목요일/],["fri",/^금요일/],["sat",/^토요일/]],"gregorian/dayPeriods/format/wide":[["am",/^오전/],["pm",/^오후/]],"timeZoneNames/gmtZeroFormat":"GMT","timeZoneNames/hourFormat":[/^GMT\+((\d){2}):((\d){2})|GMT-((\d){2}):((\d){2})/],"timeZoneNames/gmtZeroFormatRe":/^GMT/,"x":[/^\+((\d){2})((\d){2})((\d){2})|-((\d){2})((\d){2})((\d){2})/,/^\+((\d){2})((\d){2})|-((\d){2})((\d){2})/]});
Globalize.a103832063 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy. M. d.","digitsRe":/\d/});
Globalize.a1062481818 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy. M. d. a h:mm","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^오전/],["pm",/^오후/]]});
Globalize.a1032929146 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy. M. d. HH:mm","digitsRe":/\d/});
Globalize.b1420475305 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy. M. d. a h:mm:ss","digitsRe":/\d/,"gregorian/dayPeriods/format/wide":[["am",/^오전/],["pm",/^오후/]]});
Globalize.a1958359159 = dateParserFn(Globalize("ko").numberParser({"raw":"0"}), {"preferredTimeData":"h"}, {"pattern":"yyyy. M. d. H시 m분 s초","digitsRe":/\d/});
Globalize.a223131586 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}년 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}년 전"},"relative-type--1":"작년","relative-type-0":"올해","relative-type-1":"내년"});
Globalize.a1938247885 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}개월 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}개월 전"},"relative-type--1":"지난달","relative-type-0":"이번 달","relative-type-1":"다음 달"});
Globalize.a1275786489 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}주 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}주 전"},"relative-type--1":"지난주","relative-type-0":"이번 주","relative-type-1":"다음 주"});
Globalize.a1180332265 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}일 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}일 전"},"relative-type--2":"그저께","relative-type--1":"어제","relative-type-0":"오늘","relative-type-1":"내일","relative-type-2":"모레"});
Globalize.a981656297 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}시간 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}시간 전"},"relative-type-0":"현재 시간"});
Globalize.b1178586087 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}분 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}분 전"},"relative-type-0":"현재 분"});
Globalize.a207962745 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}초 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}초 전"},"relative-type-0":"지금"});
Globalize.b641261143 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}년 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}년 전"},"relative-type--1":"작년","relative-type-0":"올해","relative-type-1":"내년"});
Globalize.a245349182 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}개월 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}개월 전"},"relative-type--1":"지난달","relative-type-0":"이번 달","relative-type-1":"다음 달"});
Globalize.b1438588526 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}주 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}주 전"},"relative-type--1":"지난주","relative-type-0":"이번 주","relative-type-1":"다음 주"});
Globalize.b887478366 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}일 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}일 전"},"relative-type--2":"그저께","relative-type--1":"어제","relative-type-0":"오늘","relative-type-1":"내일","relative-type-2":"모레"});
Globalize.a1461417378 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}시간 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}시간 전"},"relative-type-0":"현재 시간"});
Globalize.b547930510 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}분 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}분 전"},"relative-type-0":"현재 분"});
Globalize.a1990648850 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}초 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}초 전"},"relative-type-0":"지금"});
Globalize.a74456568 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}년 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}년 전"},"relative-type--1":"작년","relative-type-0":"올해","relative-type-1":"내년"});
Globalize.a130861901 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}개월 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}개월 전"},"relative-type--1":"지난달","relative-type-0":"이번 달","relative-type-1":"다음 달"});
Globalize.b1550958431 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}주 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}주 전"},"relative-type--1":"지난주","relative-type-0":"이번 주","relative-type-1":"다음 주"});
Globalize.b1709616463 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}일 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}일 전"},"relative-type--2":"그저께","relative-type--1":"어제","relative-type-0":"오늘","relative-type-1":"내일","relative-type-2":"모레"});
Globalize.a1554849969 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}시간 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}시간 전"},"relative-type-0":"현재 시간"});
Globalize.b1939618431 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}분 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}분 전"},"relative-type-0":"현재 분"});
Globalize.a726147873 = relativeTimeFormatterFn(Globalize("ko").numberFormatter({}), Globalize("ko").pluralGenerator({}), {"relativeTime-type-future":{"relativeTimePattern-count-other":"{0}초 후"},"relativeTime-type-past":{"relativeTimePattern-count-other":"{0}초 전"},"relative-type-0":"지금"});
  }));
}
if (getLocalizeGlobalNamespace().TabGlobalize) { getLocalizeGlobalNamespace().Localize.initFormattersAndParsers(); }
