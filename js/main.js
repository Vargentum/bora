// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

/*	
 *	CSSrefresh v1.0.1
 */
(function(){var a={array_filter:function(a,b){var c={};for(var d in a){if(b(a[d])){c[d]=a[d]}}return c},filemtime:function(a){var b=this.get_headers(a,1);return b&&b["Last-Modified"]&&Date.parse(b["Last-Modified"])/1e3||false},get_headers:function(a,b){var c=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;if(!c){throw new Error("XMLHttpRequest not supported.")}var d,e,f,g,h=0;try{c.open("HEAD",a,false);c.send(null);if(c.readyState<3){return false}d=c.getAllResponseHeaders();d=d.split("\n");d=this.array_filter(d,function(a){return a.toString().substring(1)!==""});e=b?{}:[];for(g in d){if(b){f=d[g].toString().split(":");e[f.splice(0,1)]=f.join(":").substring(1)}else{e[h++]=d[g]}}return e}catch(i){return false}}};var b=function(){this.reloadFile=function(b){for(var c=0,d=b.length;c<d;c++){var e=b[c],f=a.filemtime(this.getRandom(e.href));if(e.last){if(e.last!=f){e.elem.setAttribute("href",this.getRandom(this.getHref(e.elem)))}}e.last=f}setTimeout(function(){this.reloadFile(b)},1e3)};this.getHref=function(a){return a.getAttribute("href").split("?")[0]};this.getRandom=function(a){return a+"?x="+Math.random()};var b=document.getElementsByTagName("link"),c=[];for(var d=0,e=b.length;d<e;d++){var f=b[d],g=f.rel;if(typeof g!="string"||g.length==0||g=="stylesheet"){c.push({elem:f,href:this.getHref(f),last:false})}}this.reloadFile(c)};b()})()

$(function(){
    $('.b-nav').each(function(){
        var trigger = $(this).find('.unit');
        var expanded = $(this).find('.unit__expanded');
        $(expanded).hide();
        $(trigger).click(function(){
            if($(this).hasClass('active')){
                return false;
            }else{
                $(trigger).removeClass('active');
                $(expanded).slideUp();
                $(this).find('.unit__expanded').slideDown();
                $(this).addClass('active');
            }
        });
    });


    if(Modernizr.csscolumns){
        return false;
    }
    else{
        $('.columnize_2').columnize({
            columns: 2
        });
    }
});

$(window).load(function(){
    $('.b-footer--index__top').each(function(){
        var corner = $(this).find('.corner');
        /*125 - margin-top include*/
        var height = $(this).height() + 155;
        $(corner).css({
            'border-top-width': height
        });
    });
    $('.b-footer--index__bottom').each(function(){
        var corner = $(this).find('.corner');
        var height = $(this).height();
        $(corner).css({
            'border-top-width': height
        });
    });
});