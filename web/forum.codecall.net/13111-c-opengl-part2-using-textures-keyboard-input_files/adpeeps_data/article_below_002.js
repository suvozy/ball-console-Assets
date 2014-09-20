var cmPageURL; if(self == top) cmPageURL = document.location.href; else cmPageURL = document.referrer;
var cmifr = (self==top ? '' : 'env=ifr;');
document.write('<scr'+'ipt type="text/javascript" language="javascript" src="http://a.collective-media.net/cmadj/idgt.codecall/article_below;sec=article;fold=below;tile=3;sz=300x250;net=idgt;ord=339497206137054.94;'+cmifr+'ord1=' +Math.floor(Math.random() * 1000000) + ';cmpgurl='+escape(escape(cmPageURL))+'?"></scr'+'ipt>');
