(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{369:function(e,t,s){},388:function(e,t,s){"use strict";s(369)},394:function(e,t,s){"use strict";s.r(t);var a=s(26);function r(e,t,s,a){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}},s)}function i(e,t,s,n,l,u=1){return!t||u>l?null:e("ul",{class:"sidebar-sub-headers"},t.map(t=>{const p=Object(a.g)(n,s+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[r(e,s+"#"+t.slug,t.title,p),i(e,t.children,s,n,l,u+1)])}))}var n={functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:s,$route:n,$themeConfig:l,$themeLocaleConfig:u},props:{item:p,sidebarDepth:c}}){const o=Object(a.g)(n,p.path),d="auto"===p.type?o||p.children.some(e=>Object(a.g)(n,p.basePath+"#"+e.slug)):o,h=r(e,p.path,p.title||p.path,d),b=t.frontmatter.sidebarDepth||c||u.sidebarDepth||l.sidebarDepth,f=null==b?1:b,g=u.displayAllHeaders||l.displayAllHeaders;if("auto"===p.type)return[h,i(e,p.children,p.basePath,n,f)];if((d||g)&&p.headers&&!a.f.test(p.path)){return[h,i(e,Object(a.e)(p.headers),p.path,n,f)]}return h}},l=(s(388),s(1)),u=Object(l.a)(n,void 0,void 0,!1,null,null,null);t.default=u.exports}}]);