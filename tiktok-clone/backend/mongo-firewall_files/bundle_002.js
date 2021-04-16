(function () {function Da(a){return a&&a.__esModule?{d:a.default}:{d:a}}function Ea(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ha(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Fa(e,t,i){return t&&ha(e.prototype,t),i&&ha(e,i),e}var I,J,Ga,q,P,H,Y,ia,Ha=false;function Z(){throw new Error("setTimeout has not been defined")}function _(){throw new Error("clearTimeout has not been defined")}function ja($){if(I===setTimeout)return setTimeout($,0);if((I===Z||!I)&&setTimeout)return I=setTimeout,setTimeout($,0);try{return I($,0)}catch(e){try{return I.call(null,$,0)}catch(e){return I.call(this,$,0)}}}function Ia($){if(J===clearTimeout)return clearTimeout($);if((J===_||!J)&&clearTimeout)return J=clearTimeout,clearTimeout($);try{return J($)}catch(e){try{return J.call(null,$)}catch(e){return J.call(this,$)}}}function Ja(){Y&&P&&(Y=!1,P.length?H=P.concat(H):ia=-1,H.length&&ka())}function ka(){if(!Y){var $=ja(Ja);Y=!0;for(var e=H.length;e;){for(P=H,H=[];++ia<e;)P&&P[ia].run();ia=-1,e=H.length}P=null,Y=!1,Ia($)}}function la($,e){this.fun=$,this.array=e}function G(){}function Ka(){if(Ha)return;Ha=true;Ga={};q=Ga={};!function(){try{I="function"==typeof setTimeout?setTimeout:Z}catch($){I=Z}try{J="function"==typeof clearTimeout?clearTimeout:_}catch($){J=_}}();H=[];Y=!1;ia=-1;q.nextTick=function($){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];H.push(new la($,e)),1!==H.length||Y||ja(ka)},la.prototype.run=function(){this.fun.apply(null,this.array)},q.title="browser",q.env={},q.argv=[],q.version="",q.versions={},q.on=G,q.addListener=G,q.once=G,q.off=G,q.removeListener=G,q.removeAllListeners=G,q.emit=G,q.prependListener=G,q.prependOnceListener=G,q.listeners=function($){return[]},q.binding=function($){throw new Error("process.binding is not supported")},q.cwd=function(){return"/"},q.chdir=function($){throw new Error("process.chdir is not supported")},q.umask=function(){return 0}}var F,La,aa,ma,na,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta,Ua=false;function oa(r,e){for(var t=0,$=r.length-1;$>=0;$--){var n=r[$];"."===n?r.splice($,1):".."===n?(r.splice($,1),t++):t&&(r.splice($,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}function Va(r){"string"!=typeof r&&(r+="");var e,t=0,$=-1,n=!0;for(e=r.length-1;e>=0;--e)if(47===r.charCodeAt(e)){if(!n){t=e+1;break}}else-1===$&&(n=!1,$=e+1);return-1===$?"":r.slice(t,$)}function ba(r,e){if(r.filter)return r.filter(e);for(var t=[],$=0;$<r.length;$++)e(r[$],$,r)&&t.push(r[$]);return t}function Wa(){if(Ua)return;Ua=true;F={};La=(Ka(),Ga);aa=function(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var $=t>=0?arguments[t]:La.cwd();if("string"!=typeof $)throw new TypeError("Arguments to path.resolve must be strings");$&&(r=$+"/"+r,e="/"===$.charAt(0))}return(e?"/":"")+(r=oa(ba(r.split("/"),function(r){return!!r}),!e).join("/"))||"."};F.resolve=aa;ma=function(r){var e=na(r),t="/"===Ta(r,-1);return(r=oa(ba(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r};F.normalize=ma;na=function(r){return"/"===r.charAt(0)};F.isAbsolute=na;Ma=function(){var r=Array.prototype.slice.call(arguments,0);return ma(ba(r,function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))};F.join=Ma;Na=function(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=aa(r).substr(1),e=aa(e).substr(1);for(var $=t(r.split("/")),n=t(e.split("/")),o=Math.min($.length,n.length),U=o,s=0;s<o;s++)if($[s]!==n[s]){U=s;break}var i=[];for(s=U;s<$.length;s++)i.push("..");return(i=i.concat(n.slice(U))).join("/")};F.relative=Na;Oa="/";F.sep=Oa;Pa=":";F.delimiter=Pa;Qa=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var e=r.charCodeAt(0),t=47===e,$=-1,n=!0,o=r.length-1;o>=1;--o)if(47===(e=r.charCodeAt(o))){if(!n){$=o;break}}else n=!1;return-1===$?t?"/":".":t&&1===$?"/":r.slice(0,$)};F.dirname=Qa;Ra=function(r,e){var t=Va(r);return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t};F.basename=Ra;Sa=function(r){"string"!=typeof r&&(r+="");for(var e=-1,t=0,$=-1,n=!0,o=0,U=r.length-1;U>=0;--U){var s=r.charCodeAt(U);if(47!==s)-1===$&&(n=!1,$=U+1),46===s?-1===e?e=U:1!==o&&(o=1):-1!==e&&(o=-1);else if(!n){t=U+1;break}}return-1===e||-1===$||0===o||1===o&&e===$-1&&e===t+1?"":r.slice(e,$)};F.extname=Sa;Ta="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)}}var Xa={};Xa=function(r,a){for(var t=[],$=0;$<r.length;$++){var o=a(r[$],$);Ya(o)?t.push.apply(t,o):t.push(o)}return t};var Ya=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};var pa={};function qa(a,e,n){a instanceof RegExp&&(a=ra(a,n)),e instanceof RegExp&&(e=ra(e,n));var $=sa(a,e,n);return $&&{start:$[0],end:$[1],pre:n.slice(0,$[0]),body:n.slice($[0]+a.length,$[1]),post:n.slice($[1]+e.length)}}function ra(a,e){var n=e.match(a);return n?n[0]:null}function sa(a,e,n){var $,r,t,c,y,i=n.indexOf(a),l=n.indexOf(e,i+1),v=i;if(i>=0&&l>0){for($=[],t=n.length;v>=0&&!y;)v==i?($.push(v),i=n.indexOf(a,v+1)):1==$.length?y=[$.pop(),l]:((r=$.pop())<t&&(t=r,c=l),l=n.indexOf(e,v+1)),v=i<l&&i>=0?i:l;$.length&&(y=[t,c])}return y}pa=qa,qa.range=sa;var Za={};Za=ab;var ta="\0SLASH"+Math.random()+"\0",ua="\0OPEN"+Math.random()+"\0",ca="\0CLOSE"+Math.random()+"\0",va="\0COMMA"+Math.random()+"\0",wa="\0PERIOD"+Math.random()+"\0";function da($){return parseInt($,10)==$?parseInt($,10):$.charCodeAt(0)}function $a($){return $.split("\\\\").join(ta).split("\\{").join(ua).split("\\}").join(ca).split("\\,").join(va).split("\\.").join(wa)}function _a($){return $.split(ta).join("\\").split(ua).join("{").split(ca).join("}").split(va).join(",").split(wa).join(".")}function xa($){if(!$)return[""];var r=[],a=pa("{","}",$);if(!a)return $.split(",");var e=a.pre,n=a.body,t=a.post,d=e.split(",");d[d.length-1]+="{"+n+"}";var s=xa(t);return t.length&&(d[d.length-1]+=s.shift(),d.push.apply(d,s)),r.push.apply(r,d),r}function ab($){return $?("{}"===$.substr(0,2)&&($="\\{\\}"+$.substr(2)),L($a($),!0).map(_a)):[]}function bb($){return"{"+$+"}"}function cb($){return /^-?0\d/.test($)}function db($,r){return $<=r}function eb($,r){return $>=r}function L($,r){var a=[],e=pa("{","}",$);if(!e||/\$$/.test(e.pre))return[$];var n,t=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(e.body),d=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(e.body),s=t||d,o=e.body.indexOf(",")>=0;if(!s&&!o)return e.post.match(/,.*\}/)?L($=e.pre+"{"+e.body+ca+e.post):[$];if(s)n=e.body.split(/\.\./);else if(1===(n=xa(e.body)).length&&1===(n=L(n[0],!1).map(bb)).length)return(i=e.post.length?L(e.post,!1):[""]).map(function($){return e.pre+n[0]+$});var v,p=e.pre,i=e.post.length?L(e.post,!1):[""];if(s){var c=da(n[0]),w=da(n[1]),Q=Math.max(n[0].length,n[1].length),X=3==n.length?Math.abs(da(n[2])):1,l=db;w<c&&(X*=-1,l=eb);var u=n.some(cb);v=[];for(var h=c;l(h,w);h+=X){var m;if(d)"\\"===(m=String.fromCharCode(h))&&(m="");else if(m=String(h),u){var f=Q-m.length;if(f>0){var g=new Array(f+1).join("0");m=h<0?"-"+g+m.slice(1):g+m}}v.push(m)}}else v=Xa(n,function($){return L($,!1)});for(var b=0;b<v.length;b++)for(var C=0;C<i.length;C++){var x=p+v[b]+i[C];(!r||s||x)&&a.push(x)}return a}var fb={};fb=D,D.Minimatch=z;var V={sep:"/"};try{V=(Wa(),F)}catch(er){}var ea=D.GLOBSTAR=z.GLOBSTAR={},ya={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},fa="[^/]",ga=fa+"*?",gb="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",hb="(?:(?!(?:\\/|^)\\.).)*?",za=ib("().*{}+?[]^$\\!");function ib(t){return t.split("").reduce(function(t,e){return t[e]=!0,t},{})}var Aa=/\/+/;function jb(t,e){return e=e||{},function(i,r,a){return D(i,t,e)}}function Ba(t,e){t=t||{},e=e||{};var i={};return Object.keys(e).forEach(function(t){i[t]=e[t]}),Object.keys(t).forEach(function(e){i[e]=t[e]}),i}function D(t,e,i){if("string"!=typeof e)throw new TypeError("glob pattern string required");return i||(i={}),!(!i.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new z(e,i).match(t))}function z(t,e){if(!(this instanceof z))return new z(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==V.sep&&(t=t.split(V.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function kb(){if(!this._made){var t=this.pattern,e=this.options;if(e.nocomment||"#"!==t.charAt(0)){if(t){this.parseNegate();var i=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error),this.debug(this.pattern,i),i=this.globParts=i.map(function(t){return t.split(Aa)}),this.debug(this.pattern,i),i=i.map(function(t,e,i){return t.map(this.parse,this)},this),this.debug(this.pattern,i),i=i.filter(function(t){return-1===t.indexOf(!1)}),this.debug(this.pattern,i),this.set=i}else this.empty=!0;}else this.comment=!0}}function lb(){var t=this.pattern,e=!1,i=0;if(!this.options.nonegate){for(var r=0,a=t.length;r<a&&"!"===t.charAt(r);r++)e=!e,i++;i&&(this.pattern=t.substr(i)),this.negate=e}}function Ca(t,e){if(e||(e=this instanceof z?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:Za(t)}D.filter=jb,D.defaults=function(t){if(!t||!Object.keys(t).length)return D;var e=D,i=function(i,r,a){return e.minimatch(i,r,Ba(t,a))};return i.Minimatch=function(i,r){return new e.Minimatch(i,Ba(t,r))},i},z.defaults=function(t){return t&&Object.keys(t).length?D.defaults(t).Minimatch:z},z.prototype.debug=function(){},z.prototype.make=kb,z.prototype.parseNegate=lb,D.braceExpand=function(t,e){return Ca(t,e)},z.prototype.braceExpand=Ca,z.prototype.parse=mb;var W={};function mb(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var i=this.options;if(!i.noglobstar&&"**"===t)return ea;if(""===t)return"";var r,a="",n=!!i.nocase,$=!1,s=[],h=[],c=!1,o=-1,p=-1,u="."===t.charAt(0)?"":i.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",v=this;function l(){if(r){switch(r){case"*":a+=ga,n=!0;break;case"?":a+=fa,n=!0;break;default:a+="\\"+r;}v.debug("clearStateChar %j %j",r,a),r=!1}}for(var f,g=0,m=t.length;g<m&&(f=t.charAt(g));g++)if(this.debug("%s\t%s %s %j",t,g,a,f),$&&za[f])a+="\\"+f,$=!1;else switch(f){case"/":return!1;case"\\":l(),$=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,g,a,f),c){this.debug("  in class"),"!"===f&&g===p+1&&(f="^"),a+=f;continue}v.debug("call clearStateChar %j",r),l(),r=f,i.noext&&l();continue;case"(":if(c){a+="(";continue}if(!r){a+="\\(";continue}s.push({type:r,start:g-1,reStart:a.length,open:ya[r].open,close:ya[r].close}),a+="!"===r?"(?:(?!(?:":"(?:",this.debug("plType %j %j",r,a),r=!1;continue;case")":if(c||!s.length){a+="\\)";continue}l(),n=!0;var N=s.pop();a+=N.close,"!"===N.type&&h.push(N),N.reEnd=a.length;continue;case"|":if(c||!s.length||$){a+="\\|",$=!1;continue}l(),a+="|";continue;case"[":if(l(),c){a+="\\"+f;continue}c=!0,p=g,o=a.length,a+=f;continue;case"]":if(g===p+1||!c){a+="\\"+f,$=!1;continue}if(c){var K=t.substring(p+1,g);try{RegExp("["+K+"]")}catch(er){var d=this.parse(K,W);a=a.substr(0,o)+"\\["+d[0]+"\\]",n=n||d[1],c=!1;continue}}n=!0,c=!1,a+=f;continue;default:l(),$?$=!1:!za[f]||"^"===f&&c||(a+="\\"),a+=f;}for(c&&(K=t.substr(p+1),d=this.parse(K,W),a=a.substr(0,o)+"\\["+d[0],n=n||d[1]),N=s.pop();N;N=s.pop()){var b=a.slice(N.reStart+N.open.length);this.debug("setting tail",a,N),b=b.replace(/((?:\\{2}){0,64})(\\?)\|/g,function(t,e,i){return i||(i="\\"),e+e+i+"|"}),this.debug("tail=%j\n   %s",b,b,N,a);var S="*"===N.type?ga:"?"===N.type?fa:"\\"+N.type;n=!0,a=a.slice(0,N.reStart)+S+"\\("+b}l(),$&&(a+="\\\\");var y=!1;switch(a.charAt(0)){case".":case"[":case"(":y=!0;}for(var w=h.length-1;w>-1;w--){var x=h[w],E=a.slice(0,x.reStart),M=a.slice(x.reStart,x.reEnd-8),R=a.slice(x.reEnd-8,x.reEnd),k=a.slice(x.reEnd);R+=k;var A=E.split("(").length-1,O=k;for(g=0;g<A;g++)O=O.replace(/\)[+*?]?/,"");var j="";""===(k=O)&&e!==W&&(j="$"),a=E+M+k+j+R}if(""!==a&&n&&(a="(?=.)"+a),y&&(a=u+a),e===W)return[a,n];if(!n)return pb(t);var T=i.nocase?"i":"";try{var B=new RegExp("^"+a+"$",T)}catch(er){return new RegExp("$.")}return B._glob=t,B._src=a,B}function nb(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,i=e.noglobstar?ga:e.dot?gb:hb,r=e.nocase?"i":"",a=t.map(function(t){return t.map(function(t){return t===ea?i:"string"==typeof t?qb(t):t._src}).join("\\/")}).join("|");a="^(?:"+a+")$",this.negate&&(a="^(?!"+a+").*$");try{this.regexp=new RegExp(a,r)}catch(n){this.regexp=!1}return this.regexp}function ob(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var i=this.options;"/"!==V.sep&&(t=t.split(V.sep).join("/")),t=t.split(Aa),this.debug(this.pattern,"split",t);var r,a,n=this.set;for(this.debug(this.pattern,"set",n),a=t.length-1;a>=0&&!(r=t[a]);a--);for(a=0;a<n.length;a++){var $=n[a],s=t;if(i.matchBase&&1===$.length&&(s=[r]),this.matchOne(s,$,e))return!!i.flipNegate||!this.negate}return!i.flipNegate&&this.negate}function pb(t){return t.replace(/\\(.)/g,"$1")}function qb(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}D.makeRe=function(t,e){return new z(t,e||{}).makeRe()},z.prototype.makeRe=nb,D.match=function(t,e,i){var r=new z(e,i=i||{});return t=t.filter(function(t){return r.match(t)}),r.options.nonull&&!t.length&&t.push(e),t},z.prototype.match=ob,z.prototype.matchOne=function(t,e,i){var r=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var a=0,n=0,$=t.length,s=e.length;a<$&&n<s;a++,n++){this.debug("matchOne loop");var h,c=e[n],o=t[a];if(this.debug(e,c,o),!1===c)return!1;if(c===ea){this.debug("GLOBSTAR",[e,c,o]);var p=a,u=n+1;if(u===s){for(this.debug("** at the end");a<$;a++)if("."===t[a]||".."===t[a]||!r.dot&&"."===t[a].charAt(0))return!1;return!0}for(;p<$;){var v=t[p];if(this.debug("\nglobstar while",t,p,e,u,v),this.matchOne(t.slice(p),e.slice(u),i))return this.debug("globstar found match!",p,$,v),!0;if("."===v||".."===v||!r.dot&&"."===v.charAt(0)){this.debug("dot detected!",t,p,e,u);break}this.debug("globstar swallow a segment, and continue"),p++}return!(!i||(this.debug("\n>>> no match, partial?",t,p,e,u),p!==$))}if("string"==typeof c?(h=r.nocase?o.toLowerCase()===c.toLowerCase():o===c,this.debug("string match",c,o,h)):(h=o.match(c),this.debug("pattern match",c,o,h)),!h)return!1}if(a===$&&n===s)return!0;if(a===$)return i;if(n===s)return a===$-1&&""===t[a];throw new Error("wtf?")};var rb="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-external-link\"><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line></svg>";var sb="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-check\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>";var tb="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>";var ub=function(){function e(t){Ea(this,e),this.element=t,this.glob=t.getAttribute("data-glob-string"),t.removeAttribute("data-glob-tool-embed"),t.removeAttribute("data-glob-string"),this.tests=[];for(var i=0,n=Array.from(t.attributes);i<n.length;i++){var r=n[i];r.name.match(/^data-glob-test-\d+$/)&&(this.tests.push(r.value),t.removeAttribute(r.name))}this.results=[]}return Fa(e,[{key:"run",value:function(){var e=this;this.results=this.tests.map(function(t){var $NtKi$$interop$default=Da(fb);return{match:$NtKi$$interop$default.d(t,e.glob),test:t}}),this.element.innerHTML="",this.element.style.border="1px solid #e5e5e5",this.element.style.borderRadius="3px",this.element.style.margin="16px 0",this.element.style.padding="10px";var t=document.createElement("h4");t.textContent="Glob string: ",t.style.fontSize="14px",t.style.margin="0 0 10px";var i=document.createElement("code");i.textContent=this.glob,i.style.background="#eee",i.style.border="1px solid #ccc",i.style.padding="0 8px 1px",i.style.borderRadius="3px",i.style.fontSize="15px",i.style.fontWeight="normal",t.appendChild(i),this.element.appendChild(t),this.results.forEach(function(t){return e.element.appendChild(e.result(t))}),this.element.appendChild(this.button())}},{key:"result",value:function(e){var t=e.match,i=e.test,n=document.createElement("div");n.style.display="flex",n.style.flexDirection="row",n.style.flexWrap="nowrap",n.style.color=t?"#0069ff":"#666";var r=document.createElement("div");r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.style.padding="2px 6px",r.innerHTML=t?sb:tb,r.firstElementChild.removeAttribute("class"),r.firstElementChild.removeAttribute("height"),r.firstElementChild.setAttribute("width","16px"),n.appendChild(r);var l=document.createElement("p");return l.style.flexGrow="1",l.style.margin="0",l.style.fontSize="16px",l.textContent=i,n.appendChild(l),n}},{key:"button",value:function(){var e=document.createElement("a");e.href="https://www.digitalocean.com/community/tools/glob?glob=".concat(encodeURIComponent(this.glob),"&").concat(this.tests.map(function(e){return"tests=".concat(encodeURIComponent(e))}).join("&")),e.target="_blank",e.textContent="Explore this glob string in our full glob testing tool",e.style.background="#0069ff",e.style.border="none",e.style.borderRadius="3px",e.style.color="#fff",e.style.display="inline-block",e.style.fontSize="14px",e.style.margin="10px 0 0",e.style.padding="4px 12px 6px",e.style.textDecoration="none";var t=document.createElement("div");return t.innerHTML=rb,t.firstElementChild.removeAttribute("class"),t.firstElementChild.removeAttribute("width"),t.firstElementChild.setAttribute("height","12px"),t.firstElementChild.style.display="inline-block",t.firstElementChild.style.margin="0 0 -1px 5px",t.firstElementChild.style.verticalAlign="baseline",e.appendChild(t.firstElementChild),e}}]),e}();window.GlobToolEmbeds=function(o){o=o||document,Array.from(o.querySelectorAll("[data-glob-tool-embed][data-glob-string][data-glob-test-1]")).map(function(o){return new ub(o)}).forEach(function(o){return o.run()})};})();