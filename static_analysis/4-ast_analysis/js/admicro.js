(function(){function v(b,d,a){for(var n in d)"dopplerFactor"===n||"speedOfSound"===n||"currentTime"===n||"number"!==typeof d[n]&&"string"!==typeof d[n]||(b[(a?a:"")+n]=d[n]);return b}function A(){if(window.WebGLRenderingContext){var b=document.createElement("canvas"),d=["webgl","experimental-webgl","moz-webgl"],a=!1,n;for(n in d)try{if((a=b.getContext(d[n]))&&"function"==typeof a.getParameter)return d[n]}catch(p){}}return!1}var c=function(){this.letter="0123456789abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ!()-_*.~".split("")};
c.prototype.hashFont=function(b){for(var d=b.length,a=d,n=b.length,c=this.letter.length,l=0;l<b.length;l++)d*=b.charCodeAt(l),d=d%c+1,a+=b.charCodeAt(l),a=a%c+1;var q=Array(3);q[0]=b.charCodeAt(0)*b.charCodeAt(n-1)+7*n;q[1]=d;q[2]=a;for(l=0;l<q.length;l++)q[l]=this.letter[q[l]%c];b="";for(l=0;l<q.length;l++)b+=q[l];return b};c.prototype.webGLinfo=function(){var b;var d="";if(b=A()){var a=document.createElement("canvas").getContext(b);b=a.getParameter(a.VERSION);var n=a.getParameter(a.SHADING_LANGUAGE_VERSION),
c=a.getParameter(a.VENDOR),l=a.getParameter(a.RENDERER),q=a.getParameter(a.ACTIVE_TEXTURE),k=a.getParameter(a.ALIASED_LINE_WIDTH_RANGE),m=a.getParameter(a.ALIASED_POINT_SIZE_RANGE),f=a.getParameter(a.ALPHA_BITS),g=a.getParameter(a.BLEND_COLOR),e=a.getParameter(a.BLUE_BITS),h=a.getParameter(a.COLOR_CLEAR_VALUE),r=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),t=a.getParameter(a.DEPTH_BITS),u=a.getParameter(a.DEPTH_CLEAR_VALUE),v=a.getParameter(a.DEPTH_RANGE),B=a.getParameter(a.GREEN_BITS),C=a.getParameter(a.LINE_WIDTH),
D=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),F=a.getParameter(a.MAX_TEXTURE_SIZE),G=a.getParameter(a.MAX_VIEWPORT_DIMS),H=a.getParameter(a.VIEWPORT);d+=b+n+c+l+q+k+m+f+g+e+h+r+t+u+v+B+C+D+E+F+G+H;var w=["FRAGMENT_SHADER","VERTEX_SHADER"];"LOW_FLOAT MEDIUM_FLOAT HIGH_FLOAT LOW_INT MEDIUM_INT HIGH_INT".split(" ").forEach(function(b){w.forEach(function(e){var g=a.getShaderPrecisionFormat(a[e],a[b]);d+=e+", "+b+"  precision: "+g.precision+", rangeMin: "+
g.rangeMin+", rangeMax: "+g.rangeMax})})}return d};var x=window.AudioContext||window.webkitAudioContext||!1,r;if(x){var w=new x;var I=w.createAnalyser()}c.prototype.getOscillatorNode=function(){try{"function"!==typeof x?r="Not available":(r=v({},w,"ac-"),r=v(r,w.destination,"ac-"),r=v(r,w.listener,"ac-"),r=v(r,I,"an-"),r=window.JSON.stringify(r,void 0,2))}catch(b){console.log(b.message),r=0}return r};var y=[],z=[];try{var t=new (window.AudioContext||window.webkitAudioContext)}catch(b){t=null}c.prototype.getOscillatorNode_Dynamic=
function(){oscillator=t.createOscillator();analyser=t.createAnalyser();gain=t.createGain();scriptProcessor=t.createScriptProcessor(4096,1,1);gain.gain.value=0;oscillator.type="triangle";oscillator.connect(analyser);analyser.connect(scriptProcessor);scriptProcessor.connect(gain);gain.connect(t.destination);scriptProcessor.onaudioprocess=function(b){b=new Float32Array(analyser.frequencyBinCount);analyser.getFloatFrequencyData(b);for(var d=0;d<b.length;d+=1)y.push(b[d]);analyser.disconnect();scriptProcessor.disconnect();
gain.disconnect();z=y.slice(0,30);return y};oscillator.start(0)};var u=0;c.prototype.run_pxi_fp=function(){try{(context=new (window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,44100,44100),context)||(u=0),pxi_oscillator=context.createOscillator(),pxi_oscillator.type="triangle",pxi_oscillator.frequency.value=1E4,pxi_compressor=context.createDynamicsCompressor(),pxi_compressor.threshold&&(pxi_compressor.threshold.value=-50),pxi_compressor.knee&&(pxi_compressor.knee.value=40),pxi_compressor.ratio&&
(pxi_compressor.ratio.value=12),pxi_compressor.reduction&&(pxi_compressor.reduction.value=-20),pxi_compressor.attack&&(pxi_compressor.attack.value=0),pxi_compressor.release&&(pxi_compressor.release.value=.25),pxi_oscillator.connect(pxi_compressor),pxi_compressor.connect(context.destination),pxi_oscillator.start(0),context.startRendering(),context.oncomplete=function(b){u=0;for(var d=4500;5E3>d;d++)u+=Math.abs(b.renderedBuffer.getChannelData(0)[d]);console.log("pxi: "+u);return u}}catch(b){return console.log("ERROR"+
b.message),0}return context.oncomplete};c.prototype.run_pxi_fp();c.prototype.md5=function(b){var d=function(a,b){var d=a&2147483648;var e=b&2147483648;var g=a&1073741824;var f=b&1073741824;var h=(a&1073741823)+(b&1073741823);return g&f?h^2147483648^d^e:g|f?h&1073741824?h^3221225472^d^e:h^1073741824^d^e:h^d^e},a=function(a,b,e,g,h,f,c){a=d(a,d(d(b&e|~b&g,h),c));return d(a<<f|a>>>32-f,b)},n=function(a,b,e,g,h,f,c){a=d(a,d(d(b&g|e&~g,h),c));return d(a<<f|a>>>32-f,b)},c=function(a,b,e,g,h,f,c){a=d(a,
d(d(b^e^g,h),c));return d(a<<f|a>>>32-f,b)},l=function(a,b,e,g,f,h,c){a=d(a,d(d(e^(b|~g),f),c));return d(a<<h|a>>>32-h,b)},q=function(a){var b="",e;for(e=0;3>=e;e++){var d=a>>>8*e&255;d="0"+d.toString(16);b+=d.substr(d.length-2,2)}return b},k=[],m;b=this.utf8_encode(b);k=function(a){var b=a.length;var e=b+8;for(var d=16*((e-e%64)/64+1),g=Array(d-1),h,f=0;f<b;)e=(f-f%4)/4,h=f%4*8,g[e]|=a.charCodeAt(f)<<h,f++;g[(f-f%4)/4]|=128<<f%4*8;g[d-2]=b<<3;g[d-1]=b>>>29;return g}(b);var f=1732584193;var g=4023233417;
var e=2562383102;var h=271733878;b=k.length;for(m=0;m<b;m+=16){var r=f;var t=g;var u=e;var v=h;f=a(f,g,e,h,k[m+0],7,3614090360);h=a(h,f,g,e,k[m+1],12,3905402710);e=a(e,h,f,g,k[m+2],17,606105819);g=a(g,e,h,f,k[m+3],22,3250441966);f=a(f,g,e,h,k[m+4],7,4118548399);h=a(h,f,g,e,k[m+5],12,1200080426);e=a(e,h,f,g,k[m+6],17,2821735955);g=a(g,e,h,f,k[m+7],22,4249261313);f=a(f,g,e,h,k[m+8],7,1770035416);h=a(h,f,g,e,k[m+9],12,2336552879);e=a(e,h,f,g,k[m+10],17,4294925233);g=a(g,e,h,f,k[m+11],22,2304563134);
f=a(f,g,e,h,k[m+12],7,1804603682);h=a(h,f,g,e,k[m+13],12,4254626195);e=a(e,h,f,g,k[m+14],17,2792965006);g=a(g,e,h,f,k[m+15],22,1236535329);f=n(f,g,e,h,k[m+1],5,4129170786);h=n(h,f,g,e,k[m+6],9,3225465664);e=n(e,h,f,g,k[m+11],14,643717713);g=n(g,e,h,f,k[m+0],20,3921069994);f=n(f,g,e,h,k[m+5],5,3593408605);h=n(h,f,g,e,k[m+10],9,38016083);e=n(e,h,f,g,k[m+15],14,3634488961);g=n(g,e,h,f,k[m+4],20,3889429448);f=n(f,g,e,h,k[m+9],5,568446438);h=n(h,f,g,e,k[m+14],9,3275163606);e=n(e,h,f,g,k[m+3],14,4107603335);
g=n(g,e,h,f,k[m+8],20,1163531501);f=n(f,g,e,h,k[m+13],5,2850285829);h=n(h,f,g,e,k[m+2],9,4243563512);e=n(e,h,f,g,k[m+7],14,1735328473);g=n(g,e,h,f,k[m+12],20,2368359562);f=c(f,g,e,h,k[m+5],4,4294588738);h=c(h,f,g,e,k[m+8],11,2272392833);e=c(e,h,f,g,k[m+11],16,1839030562);g=c(g,e,h,f,k[m+14],23,4259657740);f=c(f,g,e,h,k[m+1],4,2763975236);h=c(h,f,g,e,k[m+4],11,1272893353);e=c(e,h,f,g,k[m+7],16,4139469664);g=c(g,e,h,f,k[m+10],23,3200236656);f=c(f,g,e,h,k[m+13],4,681279174);h=c(h,f,g,e,k[m+0],11,3936430074);
e=c(e,h,f,g,k[m+3],16,3572445317);g=c(g,e,h,f,k[m+6],23,76029189);f=c(f,g,e,h,k[m+9],4,3654602809);h=c(h,f,g,e,k[m+12],11,3873151461);e=c(e,h,f,g,k[m+15],16,530742520);g=c(g,e,h,f,k[m+2],23,3299628645);f=l(f,g,e,h,k[m+0],6,4096336452);h=l(h,f,g,e,k[m+7],10,1126891415);e=l(e,h,f,g,k[m+14],15,2878612391);g=l(g,e,h,f,k[m+5],21,4237533241);f=l(f,g,e,h,k[m+12],6,1700485571);h=l(h,f,g,e,k[m+3],10,2399980690);e=l(e,h,f,g,k[m+10],15,4293915773);g=l(g,e,h,f,k[m+1],21,2240044497);f=l(f,g,e,h,k[m+8],6,1873313359);
h=l(h,f,g,e,k[m+15],10,4264355552);e=l(e,h,f,g,k[m+6],15,2734768916);g=l(g,e,h,f,k[m+13],21,1309151649);f=l(f,g,e,h,k[m+4],6,4149444226);h=l(h,f,g,e,k[m+11],10,3174756917);e=l(e,h,f,g,k[m+2],15,718787259);g=l(g,e,h,f,k[m+9],21,3951481745);f=d(f,r);g=d(g,t);e=d(e,u);h=d(h,v)}return(q(f)+q(g)+q(e)+q(h)).toLowerCase()};c.prototype.utf8_encode=function(b){if(null===b||"undefined"===typeof b)return"";b+="";var d="",a;var c=a=0;var p=b.length;for(var l=0;l<p;l++){var q=b.charCodeAt(l),k=null;128>q?a++:
k=127<q&&2048>q?String.fromCharCode(q>>6|192)+String.fromCharCode(q&63|128):String.fromCharCode(q>>12|224)+String.fromCharCode(q>>6&63|128)+String.fromCharCode(q&63|128);null!==k&&(a>c&&(d+=b.slice(c,a)),d+=k,c=a=l+1)}a>c&&(d+=b.slice(c,p));return d};c.prototype.drawCanvas=function(){var b=document.createElement("canvas"),d=b.getContext("2d"),a=d.createLinearGradient(0,0,200,0);a.addColorStop(0,"red");a.addColorStop(1,"blue");d.fillStyle=a;d.fillRect(50,50,400,200);d.moveTo(0,0);d.lineTo(400,200);
d.stroke();d.fillText("http://admicro.vn/",2,15);d.fillStyle="rgba(102, 204, 0, 0.7)";d.arc(400,200,50,0,2*Math.PI);d.stroke();return b.toDataURL()};c.prototype.binaryToHex=function(b){var d,a,c,p="";for(d=b.length-1;3<=d;d-=4){var l=b.substr(d+1-4,4);for(a=c=0;4>a;a+=1){if("0"!==l[a]&&"1"!==l[a])return{valid:!1};c=2*c+parseInt(l[a],10)}p=10<=c?String.fromCharCode(c-10+65)+p:String(c)+p}if(0<=d){for(a=c=0;a<=d;a+=1){if("0"!==b[a]&&"1"!==b[a])return{valid:!1};c=2*c+parseInt(b[a],10)}p=String(c)+p}return{valid:!0,
result:p}};window.IP_ADDRESS={};localIP=[];i=0;(function(b){try{var d=function(d){var c=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(d);null!=c&&(d=c[1]);void 0===a[d]&&b(d);a[d]=!0},a={};var c=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(!c){var p=iframe.contentWindow;c=p.RTCPeerConnection||p.mozRTCPeerConnection||p.webkitRTCPeerConnection}var l=new c({iceServers:[{urls:"stun:stun.services.mozilla.com"}]},{optional:[{RtpDataChannels:!0}]});
l.onicecandidate=function(a){a.candidate&&d(a.candidate.candidate)};l.createDataChannel("");l.createOffer(function(a){l.setLocalDescription(a,function(){},function(){})},function(){});setTimeout(function(){l.localDescription.sdp.split("\n").forEach(function(a){0===a.indexOf("a=candidate:")&&d(a)})},1E3)}catch(q){console.log("ERROR"+q.message)}})(function(b){document.createElement("li").textContent=b;b.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)?(localIP[i]=b,i+=1):b.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)?
IP_ADDRESS.ipv6=b:IP_ADDRESS.publicIP=b});c.prototype.getWebGL=function(){var b;try{if(window.WebGLRenderingContext)for(var d=document.createElement("canvas"),a=["webgl","experimental-webgl","moz-webgl","webkit-3d"],c=0;4>c;c++)try{if((b=d.getContext(a[c]))&&"function"==typeof b.getParameter){b={name:a[c],gl:b};break}}catch(p){}if("undefined"==typeof b)return"Unknown";b=b.gl;d="";a=b.getExtension("WEBGL_debug_renderer_info");null!=a&&(d+=b.getParameter(a.UNMASKED_RENDERER_WEBGL)+"|");null==a&&(d+=
"0|");d+=b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS)+"|"+b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE);return""==d?"0|0|0":d}catch(p){return""}};c.prototype.getNumberCore=function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"Unknown"};c.prototype.getFontFlash=function(){var b="";try{b=ADS_CHECKER.getFlashMovie("_admFlck").getFont()}catch(d){}return this.getFontResult(b)};c.prototype.getFontJS=function(){return this.getFontResult("Book Antiqua,Palatino Linotype,Constantia,MS Mincho,Browallia New,.VnTime,Segoe UI Semibold,Century Gothic,VNI-Times,MT Extra,VNI-Maria,Viner Hand ITC,Mistral,Lucida Sans,Arial Unicode MS,VNI-Linus,VNI-Awchon,Rage Italic,Papyrus,French Script MT,VNI-Thufap2,WST_Swed,.TMC-Ong Do,VnTimes2,Calibri Light,VNI-ShellaL,VNI-Rush,SansSerif,Segoe UI Semilight,VNI-Pagon,Vni 13 Annabelle,VNcommercial Script,TeamViewer10,VNI Helve Condense,BankGothic Md BT,Verdana Ref,ABC Sans Serif,Myanmar Text,Vineta BT,Swis721 BT,ISOCT2,Thanhoa,VnNCentury2,VPS Courier Hoa,GreekS,VnHelvIns2,Anklepants,VnBookman,VnMystical,VfFree45,Giolinh,Smudger LET,Arabic Transparent,Architecture,Myriad Pro,Andong,Amazone,Letter Gothic Std,TeamViewer9,VPS My Tho Hoa,Palatino,VNbanff,MusicalSymbols,Adobe Hebrew,Vni 01 LinotypeZapfino one,PhuongThaoH 1.1,Times,AvantGarde,ZapfDingbats BT,A Charming Font,Banmethuot,Georgia Ref,Clarendon,Parry Hotter,VNHelvet,TypoUpright BT,VNTime,Nueva Std,AnkeCalligraph,DT-Umbrella,VNI Centur,KV-Mariage,VNI-Ongdo (nobita),VNmonotype corsiva,Futura,OCR-A BT,Antique,VN-UniversityRoman,DS Sans Serif,ThaHuongH 1.1,Furniture,UVN Vi Vi,Fences,DejaVu Sans,Angiang,HL Thuphap 2BK,Tuyhoa,TeamViewer8,Usuzi,Monotype Sorts,DreamScar,VfFree17,Bell Gothic Std Light,UVN Hong Ha,Arno Pro,MT Extra Tiger,Humanst521 BT,WP CyrillicA,SVNhelvetica,MS Reference Serif,PhTimes,AngelasHand,Scriptina,Map Symbols,VS2 Sample Font,Vn-Sans-Serif,Lingoes Unicode,ParkAvenue BT,HL Freewrite,Blade Runner Movie Font,Graffiti Treat,MarionsHand,Pokemon Hollow,Loki Cola,Ruritania,Distortia,UNI Tap Viet 0,VSDict Phonetic,.VnTahoma,Source Sans Pro,VNIWed1,Abadi MT Condensed Light,HGSHeiseiMinchotaiW9,AvantGarde Bk BT,Almonte Snow,Bizarro,Eurostile,Plasma Drip BRK,SketchFlow Print,Albertus Extra Bold,VNtimes New Roman,Helvetica Neue,Degrassi,HP Simplified,VNIBandit,Polo,VNI-Eurasia,Myriad Web Pro,GoudyOlSt BT,Bookshelf Symbol 2,CD Tahoma,Open Sans,Inkburrow,HP-Helve-Condense,Univers Condensed,VNI-ThienHoang,Bleeding Cowboys,HL Hoctro,PN-Time,Yu Gothic UI,BatmanForeverAlternate,Amazone BT,HP-Dan Truong,PT Serif,barcode font,Blazed,Anastasia,VnArchitecture,Matisse ITC,Westminster,GOST Common,UTM Edwardian,VAGRounded BT,LCD,Earwig Factory,A Charming Font Expanded,Liberation Sans Narrow,Nokia Standard Multiscript,MapInfo Miscellaneous,OfficinaSanITCMedium,VU Times,Blood Of Dracula,Comic Book Commando,Windsong,VNFriz,Schoolnet Sans Serif,Courier10 BT,BaileysCar,IT Arial Narrow,VnCommerce2,Fiolex Girls,Due Date,Barber shop,kt001,A Yummy Apology,Cooper Blk BT,FZShuTi,VNI Wed2,VNSVNI2,Deftone Stylus,KR Heartalicious,Aliens,Rapscallion,Alien League,SWSimp,TMC-Holtzschue,Belphebe,PresidentGas,VPS Times,AlphaMack AOE,RixLoveFool,VNI 39 GoodVibrationsROB,UTM Chickenhawk,HGGothicE,Guitar Pro 5,UTM Neo Sans Intel,Boomerang,Neurochrome,SquareDance10,Arial CE,VPS Times Hoa,Maximillion,Buffet Script,Code39AzaleaRegular1,UVnVogue Medium,ESRI Cartography,VfFree50,SFU Futura,AlfredDrake,UVnHelvetIns Medium,Kievit Offc Pro,Good Times,Adriator,Bullpen,Mael,Beckett,Apple LiSung,WC Rhesus B Bta,Maestro,CygnetRound,Lithos Pro,QUAKE,AdineKirnberg-Script,BN Manson Nights,Airstream,Khmer OS,Baby Kruffy,Autumn,BlackChancery,Starcraft,Creepygirl,Black Rose,IDAutomationHC39M,VNI QuangNinh 2,VNTeknika,Sesame,Bitstream Vera Sans Mono,VNI Souvir,Ubuntu,Aphrodite Pro,Breathe Pro,PJ Hiragana,VfWedding34,Digital-7,OCR-B-Seagull")};
c.prototype.getFontResult=function(b){function d(b){var e=document.createElement("p");e.innerHTML="abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789";e.style.font='20px "'+b+'",Impact,"Courier New",Georgia,"century schoolbook l","URW Chancery L",Geneva';l.appendChild(e);var c=e.clientWidth,g=e.clientHeight;l.removeChild(e);if(g!==k||c!==q)return!0;m.font='20px "'+b+'", sans-serif';if(m.measureText("abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789").width!==f)return!0;for(e=
0;e<a.length;e++)if(0<=b.indexOf(" "+a[e]))return b=b.replace(" "+a[e],""),d(b);return!1}var a="black bold italic semilight semibold demibold demi compressed light medium ultra extra extended ext condensed cond".split(" "),c=b.split(","),p=document.getElementsByTagName("body")[0],l=document.createElement("div");p.appendChild(l);b=document.createElement("p");b.innerHTML="abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789";b.style.font='20px Impact,"Courier New",Georgia,"century schoolbook l","URW Chancery L",Geneva';
l.appendChild(b);var q=b.clientWidth,k=b.clientHeight;l.removeChild(b);var m=document.createElement("canvas").getContext("2d");m.font="20px sans-serif";var f=m.measureText("abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789").width;return this.binaryToHex(function(){for(var a="",b=0;b<c.length;b++)a+=d(c[b].toLowerCase())?"1":"0";p.removeChild(l);return a}()).result};c.prototype.getCanvas=function(){try{var b=document.createElement("canvas"),d=b.getContext("2d");d.textBaseline="top";d.font=
"14px 'Arial'";d.textBaseline="alphabetic";d.fillStyle="#f60";d.fillRect(125,1,62,20);d.fillStyle="#069";d.fillText("http://admicro.vn/",2,15);d.fillStyle="rgba(102, 204, 0, 0.7)";d.fillText("http://admicro.vn/",4,17);return this.md5(b.toDataURL())}catch(a){return"Unknown"}};c.prototype.getDisplay=function(){var b;var d=b=null;try{return(b=window.screen)&&(d=b.colorDepth+"|"+b.pixelDepth+"|"+Math.floor(window.devicePixelRatio*b.width)+"|"+Math.floor(window.devicePixelRatio*b.height)+"|"+b.availWidth+
"|"+b.availHeight),d}catch(a){return"0|0|0|0|0|0"}};c.prototype.yesNo=function(){var b=""+(navigator.cookieEnabled?"1":"0");b+=1==navigator.doNotTrack||navigator.msDoNotTrack?"1":"0";b+=navigator.javaEnabled?"1":"0";b+=window.localStorage?"1":"0";b+=window.sessionStorage?"1":"0";b+=ADS_CHECKER.flash?"1":"0";return b+(navigator.plugins["Silverlight Plug-In"]?"1":"0")};c.prototype.getTimeZone=function(){return(new Date).getTimezoneOffset()};c.prototype.getTime=function(){return(new Date).getTime()};
c.prototype.getLanguage=function(){return navigator.language};c.prototype.getPlugins=function(){var b=navigator.plugins.length,d="",a="",c,p;for(i=0;i<b;i++){var l=navigator.plugins[i];d+=l.name;d+=","+l.filename;var q=l.length;for(j=0;j<q;j++)if(c=l[j]){var k="0";(p=c.enabledPlugin)&&p.name==l.name&&(k="1");d+=","+c.type+"|"+c.suffixes+"|"}a+=this.hashFont(d)+k;d=""}return a};c.prototype.getFont=function(){var b="";try{b=ADS_CHECKER.getFlashMovie("_admFlck").getFont()}catch(d){}return b};c.prototype.getUA=
function(){var b="";try{b=navigator.userAgent}catch(d){}return b};c.prototype.getFingerCode=function(){try{var b=c.webGLinfo();var d=c.getWebGL()}catch(l){d=b=""}try{var a=c.getFont()}catch(l){a=""}try{var n=c.getFontJS()}catch(l){n=""}try{var p=c.getPlugins()+c.getTimeZone()+c.getDisplay()+c.getLanguage()+c.drawCanvas()+c.getNumberCore()+c.getUA()}catch(l){p=""}b=b+p+","+a+","+n+d;try{b+=u+c.getOscillatorNode()+z}catch(l){}return c.md5(b)};c=new c;window.setTimeout(function(){var b=encodeURIComponent(c.md5(c.getFont())+
","+c.getFontJS());window.setTimeout(function(){var d=document.domain;(new Image).src="//lg1.logging.admicro.vn/fig?fc="+c.getFingerCode()+"&guid="+ADM_AdsTracking.get("__uid")+"&pl="+encodeURIComponent(c.getPlugins())+"&src=1&je="+c.yesNo()+"&tz="+encodeURIComponent(c.getTimeZone())+"&st="+encodeURIComponent(c.getTime())+"&rs="+encodeURIComponent(c.getDisplay())+"&lf="+b+"&lg="+encodeURIComponent(c.getLanguage())+"&wr="+encodeURIComponent("")+"&cv="+encodeURIComponent(c.getCanvas())+"&nc="+encodeURIComponent(c.getNumberCore());
var a=(c.getFont()+"").split(","),n=[];if(150<a.length)for(var p="",l=1,q=0,k=a.length;q<k;q++)q<150*l&&(p=p+a[q]+","),q==150*l&&(p=p.slice(0,-1),n[n.length]=p,l++,p=""),q==a.length-1&&(p=p.slice(0,-1),n[n.length]=p);else n=[a];if(a=[],l=0,"soha.vn"==d)for(p=n.length;l<p;l++)a[l]=new Image,a[l].src="//lg1.logging.admicro.vn/fig?fc="+c.getFingerCode()+"&guid="+ADM_AdsTracking.get("__uid")+"&pl="+c.getPlugins()+"&src=1&je="+c.yesNo()+"&tz="+c.getTimeZone()+"&st="+c.getTime()+"&rs="+c.getDisplay()+"&lf="+
n[l]+"&lg="+c.getLanguage()+"&wr="+c.getWebGL()+"&cv="+c.getCanvas()+"&nc="+c.getNumberCore()},3E3)},1E3);window._ADMFP=c})();