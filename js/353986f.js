var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){typeof a=="string"&&(a=document.getElementById(a));if(!a.addClass)a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=""},a.addClass=function(a){this.removeClass(a);this.className+=" "+a},a.removeClass=function(a){for(var c=this.className.split(/\s+/),d=-1,e=0;e<c.length;e++)if(c[e]==a)d=e,e=c.length;if(d>-1)c.splice(d,1),this.className=c.join(" ");return this},a.hasClass=
function(a){return!!this.className.match(RegExp("\\s*"+a+"\\s*"))};return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,b,c){(a=this.clients[a])&&a.receiveEvent(b,c)},register:function(a,b){this.clients[a]=b},getDOMObjectPosition:function(a,b){for(var c={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};a&&a!=b;)c.left+=a.offsetLeft,c.top+=a.offsetTop,a=a.offsetParent;return c},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;
this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);a&&this.glue(a)}};
ZeroClipboard.Client.prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:!0,handlers:null,glue:function(a,b,c){this.domElement=ZeroClipboard.$(a);a=3;this.domElement.style.zIndex&&(a=parseInt(this.domElement.style.zIndex,10)+1);typeof b=="string"?b=ZeroClipboard.$(b):typeof b=="undefined"&&(b=document.getElementsByTagName("body")[0]);var d=ZeroClipboard.getDOMObjectPosition(this.domElement,b);this.div=document.createElement("div");var e=this.div.style;e.position="absolute";
e.left=""+d.left+"px";e.top=""+d.top+"px";e.width=""+d.width+"px";e.height=""+d.height+"px";e.zIndex=a;if(typeof c=="object")for(addedStyle in c)e[addedStyle]=c[addedStyle];b.appendChild(this.div);this.div.innerHTML=this.getHTML(d.width,d.height)},getHTML:function(a,b){var c="",d="id="+this.id+"&width="+a+"&height="+b;if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+
a+'" height="'+b+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+d+'"/><param name="wmode" value="transparent"/></object>'}else c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+
'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+b+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+d+'" wmode="transparent" />';return c},hide:function(){if(this.div)this.div.style.left="-2000px"},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML=
"";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.div=this.domElement=null}},reposition:function(a){if(a)(this.domElement=ZeroClipboard.$(a))||this.hide();if(this.domElement&&this.div){var a=ZeroClipboard.getDOMObjectPosition(this.domElement),b=this.div.style;b.left=""+a.left+"px";b.top=""+a.top+"px"}},setText:function(a){this.clipText=a;this.ready&&this.movie.setText(a)},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");this.handlers[a]||
(this.handlers[a]=[]);this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a;this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");switch(a){case "load":this.movie=document.getElementById(this.movieId);if(!this.movie){var c=this;setTimeout(function(){c.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){c=
this;setTimeout(function(){c.receiveEvent("load",null)},100);this.ready=!0;return}this.ready=!0;this.movie.setText(this.clipText);this.movie.setHandCursor(this.handCursorEnabled);break;case "mouseover":this.domElement&&this.cssEffects&&(this.domElement.addClass("hover"),this.recoverActive&&this.domElement.addClass("active"));break;case "mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=!1;if(this.domElement.hasClass("active"))this.domElement.removeClass("active"),this.recoverActive=
!0;this.domElement.removeClass("hover")}break;case "mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case "mouseup":if(this.domElement&&this.cssEffects)this.domElement.removeClass("active"),this.recoverActive=!1}if(this.handlers[a])for(var d=0,e=this.handlers[a].length;d<e;d++){var f=this.handlers[a][d];if(typeof f=="function")f(this,b);else if(typeof f=="object"&&f.length==2)f[0][f[1]](this,b);else if(typeof f=="string")window[f](this,b)}}};
$(function(){$("body#home").length>0&&($("#section1 h1").html("HTML5 Video, Now Available Everywhere"),$(".skin:first").add(".tech:first").addClass("selected"),$(".skin a").click(function(a){a.preventDefault();setSkin(this)}),$(".tech a").click(function(a){a.preventDefault();setTech(this)}))});
function setSkin(a){var a=$(a).parent(),b=$("#home_video"),c=a.attr("data-skin");$(".skin").each(function(){b.removeClass($(this).attr("data-skin"));$(this).removeClass("selected")});b.addClass(c);a.addClass("selected");$(".vjs-controls").css({opacity:"0.9"})}
function setTech(a){var a=$(a).parent(),b=_V_("home_video"),c=a.attr("data-tech");$(".tech").each(function(){$(this).removeClass("selected")});a.addClass("selected");b.options.techOrder=[c];b.src(b.options.sources).ready(function(){setTimeout(function(){b.load();b.play()},1)})};
$(function(){if($("body#home").length){var d=$("#subnav").offset().top,j=$("#subnav").css("position"),h={2:$("#section2").offset().top,3:$("#section3").offset().top,4:$("#section4").offset().top-5,5:$("#section5").offset().top-5};$("#nav_setup").click(function(){$("#section5").scrollintoview();return!1});$("#section2nav").click(function(){$("#section2").scrollintoview();return!1});$("#section3nav").click(function(){$("#section3").scrollintoview();return!1});$("#navlogo").click(function(){$("#site_header").scrollintoview();
return!1});$("#section4nav").click(function(){$("#section4").scrollintoview();return!1});$("#section5nav").click(function(){$("#section5").scrollintoview();return!1});$(window).scroll(function(){if($("body#home").length){var i=$(window).scrollTop();i>=d?$("#subnav").css({position:"fixed"}):$("#subnav").css({position:j});for(var e=2;e<=5;e++)i>=h[e]&&(e==5||i<h[e+1])?$("#section"+e+"nav").addClass("selected"):$("#section"+e+"nav").removeClass("selected")}})}});
(function(d){var j={vertical:{x:!1,y:!0},horizontal:{x:!0,y:!1},both:{x:!0,y:!0},x:{x:!0,y:!1},y:{x:!1,y:!0}},h={duration:"fast",direction:"both"},i=/^(?:html)$/i,e=function(a,b){var b=b||(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,null):a.currentStyle),c=document.defaultView&&document.defaultView.getComputedStyle?!0:!1,f=parseFloat(c?b.borderTopWidth:d.css(a,"borderTopWidth"))||0,g=parseFloat(c?b.borderLeftWidth:d.css(a,"borderLeftWidth"))||
0,e=parseFloat(c?b.borderBottomWidth:d.css(a,"borderBottomWidth"))||0,c=parseFloat(c?b.borderRightWidth:d.css(a,"borderRightWidth"))||0;return{top:f,left:g,bottom:e,right:c,vertical:f+e,horizontal:g+c}},m=function(a){var b=d(window),c=i.test(a[0].nodeName);return{border:c?{top:0,left:0,bottom:0,right:0}:e(a[0]),scroll:{top:(c?b:a).scrollTop(),left:(c?b:a).scrollLeft()},scrollbar:{right:c?0:a.innerWidth()-a[0].clientWidth,bottom:c?0:a.innerHeight()-a[0].clientHeight},rect:function(){var b=a[0].getBoundingClientRect();
return{top:c?0:b.top,left:c?0:b.left,bottom:c?a[0].clientHeight:b.bottom,right:c?a[0].clientWidth:b.right}}()}};d.fn.extend({scrollintoview:function(a){a=d.extend({},h,a);a.direction=j[typeof a.direction==="string"&&a.direction.toLowerCase()]||j.both;var b="";a.direction.x===!0&&(b="horizontal");a.direction.y===!0&&(b=b?"both":"vertical");var c=this.eq(0),f=c.closest(":scrollable("+b+")");if(f.length>0){var f=f.eq(0),g=m(c),b=m(f),c=g.rect.top-(b.rect.top+b.border.top),e=b.rect.bottom-b.border.bottom-
b.scrollbar.bottom-g.rect.bottom,l=g.rect.left-(b.rect.left+b.border.left),g=b.rect.right-b.border.right-b.scrollbar.right-g.rect.right,k={};if(a.direction.y===!0)if(c<0)k.scrollTop=b.scroll.top+c;else if(c>0&&e<0)k.scrollTop=b.scroll.top+Math.min(c,-e);if(a.direction.x===!0)if(l<0)k.scrollLeft=b.scroll.left+l;else if(l>0&&g<0)k.scrollLeft=b.scroll.left+Math.min(l,-g);d.isEmptyObject(k)?d.isFunction(a.complete)&&a.complete.call(f[0]):(i.test(f[0].nodeName)&&(f=d("html,body")),f.animate(k,a.duration).eq(0).queue(function(b){d.isFunction(a.complete)&&
a.complete.call(f[0]);b()}))}return this}});var n={auto:!0,scroll:!0,visible:!1,hidden:!1};d.extend(d.expr[":"],{scrollable:function(a,b,c){var b=j[typeof c[3]==="string"&&c[3].toLowerCase()]||j.both,c=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,null):a.currentStyle,d=n[c.overflowX.toLowerCase()]||!1,e=n[c.overflowY.toLowerCase()]||!1,h=i.test(a.nodeName);if(!d&&!e&&!h)return!1;a={height:{scroll:a.scrollHeight,client:a.clientHeight},width:{scroll:a.scrollWidth,
client:a.clientWidth},scrollableX:function(){return(d||h)&&this.width.scroll>this.width.client},scrollableY:function(){return(e||h)&&this.height.scroll>this.height.client}};return b.y&&a.scrollableY()||b.x&&a.scrollableX()}})})(jQuery);
$(function(){ if ($("body#tag_builder").length) {

  // Default Settings
  window.tag = {
    id: "example_video_1",
    'class': "video-js vjs-default-skin",
    controls: true,
    width: 640,
    height: 264,
    poster: 'http://video-js.zencoder.com/oceans-clip.jpg',
    autoplay: false,
    preload: "auto",
    setup: 'auto',
    'data-setup': "{}",
    sources: {},
    tracks: {}
  };

  // HTML DISPLAY HELPERS

  function regenerateHTML() {
    $("#tb_result").html(generateTag(tag));
  }

  function generateTag(tag) {
    var attrs = ['preload', 'autoplay', 'controls' ],
        html = tagStart('video'),
        scriptTag;

    html += attrHTML("id", tag.id);
    html += attrHTML("class", tag["class"]);
    html += attrHTML("controls", tag.controls, true);
    html += attrHTML("width", tag.width);
    html += attrHTML("height", tag.height);

    html += attrHTML("poster", tag.poster);
    html += attrHTML("autoplay", tag.autoplay, true);
    html += attrHTML("preload", tag.preload);
    html += attrHTML("loop", tag.loop, true);

    if (tag.setup == 'auto') {
      html += attrHTML("data-setup", tag['data-setup']);
    } else {
      scriptTag = true;
    }
    

    html += tagEnd() + "\n";

    var sources = tag.sources;
    for (i in sources) {
      if (sources.hasOwnProperty(i)) {
        var source = sources[i];
        html += "  " + tagStart('source');
        html += attrHTML('type', source.type);
        html += attrHTML('src', source.src || "REPLACE-ME");
        html += tagEnd();
        html += "\n";
      }
    }

    var tracks = tag.tracks;
    for (i in tracks) {
      if (tracks.hasOwnProperty(i)) {
        var track = tracks[i];
        html += "  " + tagStart('track');
        html += attrHTML('kind', track.kind);
        html += attrHTML('src', track.src || "REPLACE-ME");
        html += attrHTML('srclang', track.srclang);
        html += attrHTML('label', track.label);
        html += tagEnd();
        html += "\n";
      }
    }

    // html += "  " + 'Your web browser or device does not support video playback. Learn more about &lt;a href=”http://videojs.com/support”&gt;supporting web video.&lt;/a&gt;'+"\n";

    html += tagStart('/video') + tagEnd();

    if (scriptTag) {
      html += "\n" + tagStart('script') + tagEnd();
      
      html += "\n\n  " + '<span class="kd">var</span> <span class="nx">myPlayer</span> <span class="o">=</span> <span class="nx">_V_</span><span class="p">(</span><span class="s2">"'+tag.id+'"</span><span class="p">);</span>';
      
      html += "\n\n" + tagStart('/script') + tagEnd();
    }

    return html;
  }

  function tagStart(tagName) { return '<span class="nt">&lt;'+tagName+'</span>'; }
  function tagEnd() { return '<span class="nt">&gt;</span>'; }

  function attrHTML(name, value, bool){
    if (!value) return '';

    if (bool) {
      if (!value) {
        return '';
      } else {
        return ' <span class="na">'+name+'</span>';
      }
    } else {
      return ' <span class="na">'+name+'=</span><span class="s">&quot;'+value+'&quot;</span>';
    }
  }

  // BASIC OPTIONS

  // ID
  $("#tb_id").val(tag.id);
  $("#tb_id").change(function(){
    tag.id = $(this).val();
    regenerateHTML();
  }).keyup(function(){
    $(this).trigger("change");
  });

  $("#tb_width").val(tag.width);
  $("#tb_width").change(function(){
    tag.width = $(this).val();
    regenerateHTML();
  }).keyup(function(){
    $(this).trigger("change");
  });

  // Height
  $("#tb_height").val(tag.height);
  $("#tb_height").change(function(){
    tag.height = $(this).val();
    regenerateHTML();
  }).keyup(function(){
    $(this).trigger("change");
  });

  // Poster
  $("#tb_poster").val(tag.poster);
  $("#tb_poster").change(function(){
    tag.poster = $(this).val();
    regenerateHTML();
  }).keyup(function(){
    $(this).trigger("change");
  });

  // Preload
  $("#tb_preload").val(tag.preload);
  $("#tb_preload").change(function(){
    tag.preload = $(this).val();
    regenerateHTML();
  });

  // Controls
  $("#tb_controls").prop("checked", tag.controls);
  $("#tb_controls").change(function(){
    tag.controls = !!$(this).is(":checked");
    regenerateHTML();
  });
  
  // Autoplay
  $("#tb_autoplay").prop("checked", tag.autoplay);
  $("#tb_autoplay").change(function(){
    tag.autoplay = !!$(this).is(":checked");
    regenerateHTML();
  });
  
  // Loop
  $("#tb_loop").prop("checked", tag.loop);
  $("#tb_loop").change(function(){
    tag.loop = !!$(this).is(":checked");
    regenerateHTML();
  });
  
  // Muted
  // $("#tb_muted").prop("checked", tag.muted);
  // $("#tb_muted").change(function(){
  //   tag.muted = !!$(this).is(":checked");
  //   regenerateHTML();
  // });

  // ADVANCED OPTIONS

  // Setup Method
  $("input:radio[name='tb_setup'][value="+tag.setup+"]").prop("checked",true);
  $("input:radio[name='tb_setup']").change(function(){
    if ($(this).prop("checked")) {
      tag.setup = $(this).val();
      regenerateHTML();
    }
  });

  // SOURCES

  var sourceUID = 1;
  function addSource(e, type, src) {
    var si = sourceUID++,
        type = type || 'video/mp4',
        src = src || '',
        $sourceDiv = $('<div id="tb_source_'+si+'" class="tb-source"></div>');
        $sourceType = $('<select id="tb_source_'+si+'_type"></select>');
        $sourceSrc = $('<input id="tb_source_'+si+'_src" type="text" value="">');
        $sourceDel = $('<button id="tb_source_'+si+'_del" type="button">X</button>');

    // Add to tag info
    tag.sources[si] = {
      type: type,
      src: src
    };
    regenerateHTML();

    // Type Select
    var types = [
      { name: "MP4", mime: "video/mp4" },
      { name: "WebM", mime: "video/webm" },
      { name: "Ogg", mime: "video/ogg" }
    ];

    $(types).each(function(thisType){
      $sourceType.append('<option value="'+this.mime+'">'+this.name+'</option>');
    });

    $sourceType.val(type);
    $sourceType.change(function(){
      tag.sources[si].type = $sourceType.val();
      regenerateHTML();
    });

    // Src Text Field
    $sourceSrc.val(src);
    $sourceSrc.change($.proxy(function(){
      tag.sources[si].src = this.val();
      regenerateHTML();
    }, $sourceSrc));

    $sourceSrc.keyup(function(){
      $(this).trigger("change");
    });

    // Delete Source
    $sourceDel.click($.proxy(function(){
      delete tag.sources[si];
      this.remove();
      regenerateHTML();
    }, $sourceDiv));

    $sourceDiv.append($sourceType, $sourceSrc, $sourceDel).insertBefore('#add_source');

    return si;
  }
  addSource(false, "video/mp4", 'http://video-js.zencoder.com/oceans-clip.mp4');
  $("#add_source").click(addSource);
  
  // TRACKS

  var trackUID = 1;
  function addTrack() {
    var ti = trackUID++,
        kind = kind || 'captions',
        src = src || '/video-js/captions.vtt',
        srclang = 'en',
        label = 'English',
        $trackDiv = $('<div id="tb_track_'+ti+'" class="tb-track"></div>');
        $trackKind = $('<select id="tb_track_'+ti+'_kind"></select>');
        $trackSrc = $('<input id="tb_track_'+ti+'_src" type="text" value="">');
        $trackSrclang = $('<select id="tb_track_'+ti+'_srclang"></select>');
        $trackDel = $('<button id="tb_track_'+ti+'_del" type="button">X</button>');

    // Add to tag info
    tag.tracks[ti] = {
      kind: kind,
      src: src,
      srclang: srclang,
      label: label
    };
    regenerateHTML();

    // Type Select
    var kinds = [
      { name: "Captions", kind: "captions" },
      { name: "Subtitles", kind: "subtitles" }
      // { name: "Chapters", kind: "chapters" }
    ];

    $(kinds).each(function(kind){
      $trackKind.append('<option value="'+this.kind+'">'+this.name+'</option>');
    });

    $trackKind.val(kind);
    $trackKind.change(function(){
      tag.tracks[ti].kind = $trackKind.val();
      regenerateHTML();
    });

    for (thislang in SRCLANGS) {
      if (SRCLANGS.hasOwnProperty(thislang)) {
        $trackSrclang.append('<option value="'+thislang+'">'+SRCLANGS[thislang]+'</option>');
      }
    }

    $trackSrclang.val(srclang);
    $trackSrclang.change(function(){
      tag.tracks[ti].srclang = $trackSrclang.val();
      // Get label from srclangs object
      tag.tracks[ti].label = SRCLANGS[$trackSrclang.val()];
      regenerateHTML();
    });

    // Src Text Field
    $trackSrc.val(src);
    $trackSrc.change($.proxy(function(){
      tag.tracks[ti].src = this.val();
      regenerateHTML();
    }, $trackSrc));

    $trackSrc.keyup(function(){
      $(this).trigger("change");
    });

    // Delete Track
    $trackDel.click($.proxy(function(){
      delete tag.tracks[ti];
      this.remove();
      regenerateHTML();
    }, $trackDiv));

    $trackDiv.append($trackKind, $trackSrc, $trackSrclang, $trackDel).insertBefore('#add_track');

    return ti;
  }
  $("#add_track").click(addTrack);

  // TEST VIDEO

  $("#test_button").click(function(e){
    e.preventDefault();
    
    var testTag = '<video id="'+tag.id+'" class="'+tag["class"]+'"';

    if (tag.width) testTag += ' width="'+tag.width+'"';
    if (tag.height) testTag += ' height="'+tag.height+'"';
    if (tag.poster) testTag += ' poster="'+tag.poster+'"';
    if (tag.preload) testTag += ' preload="'+tag.preload+'"';

    if (tag.controls) testTag += ' controls';
    if (tag.autoplay) testTag += ' autoplay';
    if (tag.loop) testTag += ' loop';
    if (tag.muted) testTag += ' muted';

    testTag += ">";

    for (sid in tag.sources) {
      if (tag.sources.hasOwnProperty(sid)) {
        var source = tag.sources[sid];
        testTag += '<source type="'+source.type+'" src="'+source.src+'">';
      }
    }

    for (tid in tag.tracks) {
      if (tag.tracks.hasOwnProperty(tid)) {
        var track = tag.tracks[tid];
        testTag += '<track kind="'+track.kind+'" src="'+track.src+'" srclang="'+track.srclang+'" label="'+track.label+'">';
      }
    }

    testTag += "</video>";

    if (_V_.players[tag.id]) {
      _V_.players[tag.id].destroy();
    }
    $("#player_box").html(testTag);
    
    _V_(tag.id);

  });

  // GENERATE

  regenerateHTML();

} });

// List of srclangs with their codes. Language name will be used for label too.
var SRCLANGS = {
  ab: 'Abkhazian',
  aa: 'Afar',
  af: 'Afrikaans',
  sq: 'Albanian',
  am: 'Amharic',
  ar: 'Arabic',
  an: 'Aragonese',
  hy: 'Armenian',
  as: 'Assamese',
  ay: 'Aymara',
  az: 'Azerbaijani',
  ba: 'Bashkir',
  eu: 'Basque',
  bn: 'Bengali (Bangla)',
  dz: 'Bhutani',
  bh: 'Bihari',
  bi: 'Bislama',
  br: 'Breton',
  bg: 'Bulgarian',
  my: 'Burmese',
  be: 'Byelorussian (Belarusian)',
  km: 'Cambodian',
  ca: 'Catalan',
  zh: 'Chinese (Simplified)',
  zh: 'Chinese (Traditional)',
  co: 'Corsican',
  hr: 'Croatian',
  cs: 'Czech',
  da: 'Danish',
  nl: 'Dutch',
  en: 'English',
  eo: 'Esperanto',
  et: 'Estonian',
  fo: 'Faeroese',
  fa: 'Farsi',
  fj: 'Fiji',
  fi: 'Finnish',
  fr: 'French',
  fy: 'Frisian',
  gl: 'Galician',
  gd: 'Gaelic (Scottish)',
  gv: 'Gaelic (Manx)',
  ka: 'Georgian',
  de: 'German',
  el: 'Greek',
  kl: 'Greenlandic',
  gn: 'Guarani',
  gu: 'Gujarati',
  ht: 'Haitian Creole',
  ha: 'Hausa',
  he: 'Hebrew',
  hi: 'Hindi',
  hu: 'Hungarian',
  is: 'Icelandic',
  io: 'Ido',
  id: 'Indonesian',
  ia: 'Interlingua',
  ie: 'Interlingue',
  iu: 'Inuktitut',
  ik: 'Inupiak',
  ga: 'Irish',
  it: 'Italian',
  ja: 'Japanese',
  jv: 'Javanese',
  kn: 'Kannada',
  ks: 'Kashmiri',
  kk: 'Kazakh',
  rw: 'Kinyarwanda (Ruanda)',
  ky: 'Kirghiz',
  rn: 'Kirundi (Rundi)',
  ko: 'Korean',
  ku: 'Kurdish',
  lo: 'Laothian',
  la: 'Latin',
  lv: 'Latvian (Lettish)',
  li: 'Limburgish ( Limburger)',
  ln: 'Lingala',
  lt: 'Lithuanian',
  mk: 'Macedonian',
  mg: 'Malagasy',
  ms: 'Malay',
  ml: 'Malayalam',
  mt: 'Maltese',
  mi: 'Maori',
  mr: 'Marathi',
  mo: 'Moldavian',
  mn: 'Mongolian',
  na: 'Nauru',
  ne: 'Nepali',
  no: 'Norwegian',
  oc: 'Occitan',
  or: 'Oriya',
  om: 'Oromo (Afan, Galla)',
  ps: 'Pashto (Pushto)',
  pl: 'Polish',
  pt: 'Portuguese',
  pa: 'Punjabi',
  qu: 'Quechua',
  rm: 'Rhaeto-Romance',
  ro: 'Romanian',
  ru: 'Russian',
  sm: 'Samoan',
  sg: 'Sangro',
  sa: 'Sanskrit',
  sr: 'Serbian',
  sh: 'Serbo-Croatian',
  st: 'Sesotho',
  tn: 'Setswana',
  sn: 'Shona',
  ii: 'Sichuan Yi',
  sd: 'Sindhi',
  si: 'Sinhalese',
  ss: 'Siswati',
  sk: 'Slovak',
  sl: 'Slovenian',
  so: 'Somali',
  es: 'Spanish',
  su: 'Sundanese',
  sw: 'Swahili (Kiswahili)',
  sv: 'Swedish',
  tl: 'Tagalog',
  tg: 'Tajik',
  ta: 'Tamil',
  tt: 'Tatar',
  te: 'Telugu',
  th: 'Thai',
  bo: 'Tibetan',
  ti: 'Tigrinya',
  to: 'Tonga',
  ts: 'Tsonga',
  tr: 'Turkish',
  tk: 'Turkmen',
  tw: 'Twi',
  ug: 'Uighur',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  vo: 'Volapük',
  wa: 'Wallon',
  cy: 'Welsh',
  wo: 'Wolof',
  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zu: 'Zulu'
};
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(a){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),b;b=d.pop();)a[b]=a[b]||c})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());

