"use strict";(self["webpackChunktest_app"]=self["webpackChunktest_app"]||[]).push([[54],{5054:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var r=a(3396),n=a(7139);const c={className:"characters"},s=["src","alt"];function h(t,e,a,h,i,o){const u=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h1",null,(0,n.zw)(i.episodeInfo.name),1),(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.filteredCharacters,(t=>((0,r.wg)(),(0,r.iD)("ul",{className:"characterItem",key:t},[(0,r.Wm)(u,{to:o.url(t.url).pathname},{default:(0,r.w5)((()=>[(0,r._)("img",{width:"110",src:t.image,alt:t.name},null,8,s),(0,r._)("h3",null,(0,n.zw)(t.name),1)])),_:2},1032,["to"])])))),128))])])}a(7658);const i=async()=>await fetch("https://rickandmortyapi.com"+window.location.pathname).then((t=>t.json()));var o={name:"EpisodeView",data(){return{episodeInfo:[],charactersURL:[],charactersInfo:[]}},methods:{url:t=>new URL(t),getCharacter:async t=>{const e=await fetch(t),a=await e.json();return a}},created(){i().then((t=>{this.episodeInfo=t,this.charactersURL=t.characters;for(let e=0;e<this.charactersURL.length;e++)this.getCharacter(this.charactersURL[e]).then((t=>{this.charactersInfo.push(t)}))}))},computed:{filteredCharacters:function(){return[...this.charactersInfo].sort(((t,e)=>t.id-e.id))}}},u=a(89);const l=(0,u.Z)(o,[["render",h]]);var d=l}}]);
//# sourceMappingURL=54.7dd7c851.js.map