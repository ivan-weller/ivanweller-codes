function showDetail(){$(".hero-content").toggleClass("hide"),$(".about-me").toggleClass("hide")}function createList(t){var e=t,a="";$.each(e,(function(t,e){a+='<a href="',a+=e.link,a+='" target="_blank" class="portfolio-grid__thumbnail';for(var l=0;l<e.tags.length;l++)a+=" "+e.tags[l];a+='" data-tilt data-tilt-maxTilt="35" data-tilt-perspective="2000" data-tilt-glare="true" data-tilt-maxGlare=".5" data-tilt-speed="1200" data-tilt-scale="1.05"><img src="img/',a+=e.thumbnail,a+='" alt=""></a>'})),$(".portfolio-grid").html(a)}function filterSelection(t){var e=document.getElementsByClassName("portfolio-grid__thumbnail");"all"==t&&(t="");for(var a=0;a<e.length;a++)removeClass(e[a],"show"),e[a].className.indexOf(t)>-1&&addClass(e[a],"show")}function addClass(t,e){for(var a=t.className.split(" "),l=e.split(" "),s=0;s<l.length;s++)-1==a.indexOf(l[s])&&(t.className+=" "+l[s])}function removeClass(t,e){for(var a=t.className.split(" "),l=e.split(" "),s=0;s<l.length;s++)for(;a.indexOf(l[s])>-1;)a.splice(a.indexOf(l[s],1));t.className=a.join(" ")}$((function(){$.ajax({type:"GET",url:"./portfolio.json",async:!1,beforeSend:function(){},dataType:"json",success:function(t){createList(t),filterSelection("all"),$.getScript("scripts/tilt.jquery.min.js")}})}));for(var btnFilter=document.getElementById("filter-bar"),btns=btnFilter.getElementsByClassName("filter-btn"),i=0;i<btns.length;i++)btns[i].addEventListener("click",(function(){var t=document.getElementsByClassName("selected");t[0].className=t[0].className.replace(" selected",""),this.className+=" selected"}));