var cid='121a748ae18865d';var CollectiveMedia={rand:function(a){return Math.floor(Math.random()*a)},appendChild:function(a,b){if(null==a.canHaveChildren||a.canHaveChildren){a.appendChild(document.createTextNode(b))}else{a.text=b}},createAndAttachAd:function(i,c,a,f,g){var h=document.getElementsByTagName("script");var b=h[h.length-1];if(b==null){return}var k=document.createElement("script");k.language="javascript";k.setAttribute("type","text/javascript");var l="document.write('<scr'+'ipt language=\"javascript\" src=\""+c+"\"></scr'+'ipt>');";b.parentNode.insertBefore(k,b);CollectiveMedia.appendChild(k,l);if(g){try{var d=new cmIV_()}catch(j){return false}d._init(i,k.parentNode,a,f);return d}},buildPixel:function(a){img=document.createElement("img");img.src=a;CollectiveMedia.appendChild(img)},addPixel:function(b,a){if(!navigator.cookieEnabled){return true}if(a){CollectiveMedia.buildPixel(b)}else{CollectiveMedia.addEvt(window,"load",function(){CollectiveMedia.buildPixel(b)})}},addTrackingImages:function(){CollectiveMedia.trackingImages=arguments;CollectiveMedia.addEvt(window,"load",CollectiveMedia.loadTrackingImages)},loadTrackingImages:function(){var a=CollectiveMedia.trackingImages,c="?";c+=CollectiveMedia.rand(1000000);for(var b=0;b<a.length;b++){new Image().src=a[b]+c}}};if(window.addEventListener){CollectiveMedia.addEvt=function(b,a,c){b.addEventListener(a,c,false)}}else{if(window.attachEvent){CollectiveMedia.addEvt=function(b,a,c){b.attachEvent("on"+a,c)}}else{CollectiveMedia.addEvt=function(){}}};document.write('<scr'+'ipt language="Javascript">CollectiveMedia.createAndAttachAd("idgt-30218585518_1316233608","http://ib.adnxs.com/ptj?member=752&inv_code=idgt.codecall&size=300x250&imp_id=idgt-30218585518_1316233608,121a748ae18865d&referrer=http%3A%2F%2Fforum.codecall.net%2Fc-tutorials%2F13111-c-opengl-part2-using-textures-keyboard-input.html&redir=http%3A%2F%2Fad.doubleclick.net%2Fadj%2Fidgt.codecall%2Farticle_below%3Bnet%3Didgt%3Bu%3D%2Cidgt-30218585518_1316233608%2C121a748ae18865d%2Cprogramming%2Cax.{PRICEBUCKET}-ak.b-idgt.unicomm_l-idgt.programming_h-bz.37-bz.ac-bz.aa-ex.25%3B%3Bsec%3Darticle%3Bfold%3Dbelow%3Btile%3D3%3Bcmw%3Dnurl%3Bsz%3D300x250%3Bnet%3Didgt%3Benv%3Difr%3Bord1%3D163176%3Bcontx%3Dprogramming%3Ban%3D{PRICEBUCKET}%3Bdc%3Ds%3Bbtg%3Dak.b%3Bbtg%3Didgt.unicomm_l%3Bbtg%3Didgt.programming_h%3Bbtg%3Dbz.37%3Bbtg%3Dbz.ac%3Bbtg%3Dbz.aa%3Bbtg%3Dex.25%3Bord%3D339497206137054.94%3F","300","250",false);</scr'+'ipt>');var __cs_c1 = 8;
var __cs_c2 = "6035308";
var __cs_c3 = "";
var __cs_c4 = "";
var __cs_c5 = "";
var __cs_c6 = "";
var __cs_c10 = "";
var __cs_c15 = "";
var __cs_params = ["c1=", __cs_c1, "&c2=", __cs_c2, "&c3=",
__cs_c3, "&c4=", __cs_c4, "&c5=", __cs_c5, "&c6=", __cs_c6, "&c10=",
__cs_c10, "&c15=", __cs_c15].join('');
document.write(unescape("%3Cscript src='" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js?" + __cs_params +"'%3E%3C/script%3E"));