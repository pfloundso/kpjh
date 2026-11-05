import{_ as D}from"./Diashow.c348beb8.js";import{a as m,o as a,F as c,e,B as d,I as i,D as x,w as h,G as f,K as $,p as v,b as y,L as b,N as G,c as g,H as I}from"./entry.20cd287f.js";import{_ as k}from"./DefaultView.45846933.js";import"./_commonjsHelpers.87174ba5.js";const C={props:{groupData:{type:Object,required:!0}}},S={class:"groupDetails"},q={class:"pics"},B={class:"name"},E={class:"info"},L={key:0};function N(t,o,s,r,n,p){const _=D;return a(),c("div",S,[e("div",q,[d(_,{images:s.groupData.images.items.map(u=>u.url),"current-img":"3",height:"280px",repeat:""},null,8,["images"])]),e("div",B,i(s.groupData.name),1),e("div",E,[e("p",null,"Jahrgang: "+i(s.groupData.year),1),s.groupData.time?(a(),c("p",L,"Gruppenstunde: "+i(s.groupData.time),1)):x("",!0),e("p",null,"Leiter:in: "+i(s.groupData.supervisor),1)])])}const V=m(C,[["render",N],["__scopeId","data-v-8d1f9e9d"]]),J=""+new URL("imageError.ef762fd4.svg",import.meta.url).href;const O={props:{gruppe:{type:Object,required:!0}},data(){return{showDetails:!1,loaded:!1}},computed:{getImages(){return this.gruppe.images.items}}},P=t=>(v("data-v-e07381ab"),t=t(),y(),t),R=["src"],Y={key:1,class:"cover",src:J},j={class:"name"},F=P(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-down",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})],-1));function H(t,o,s,r,n,p){const _=V,u=$;return a(),c(f,null,[d(u,{show:n.showDetails,"button-color":"white",onClose:o[0]||(o[0]=l=>n.showDetails=!1)},{default:h(()=>[d(_,{"group-data":s.gruppe},null,8,["group-data"])]),_:1},8,["show"]),e("div",{class:"group",onClick:o[1]||(o[1]=l=>n.showDetails=!0)},[p.getImages[0]?(a(),c("img",{key:0,class:"cover",src:p.getImages[0].url},null,8,R)):(a(),c("img",Y)),e("p",j,i(s.gruppe.name),1),F])],64)}const K=m(O,[["render",H],["__scopeId","data-v-e07381ab"]]);const M={async setup(){const t=b`
            query {
                groups: groupCollection(limit: 0) {
                    items {
                        name
                        supervisor
                        year
                        time
                        images: imagesCollection(limit: 0) {
                            items {
                                url(
                                    transform: {
                                        format: JPG_PROGRESSIVE
                                        quality: 20
                                    }
                                )
                            }
                        }
                    }
                }
            }
        `,{data:{value:{groups:{items:o}}}}=await G(t);return o.forEach(r=>{r.numericYear=Number(r.year.slice(-4))}),{groups:o.sort((r,n)=>n.numericYear-r.numericYear)}}},z=t=>(v("data-v-2cb8753c"),t=t(),y(),t),A=z(()=>e("head",null,[e("title",null,"KPJH - Gruppen")],-1)),Q={class:"groups"},U={class:"group-grid"};function T(t,o,s,r,n,p){const _=K,u=k;return a(),g(u,{titel:"Gruppen"},{default:h(()=>[A,e("div",Q,[e("div",U,[(a(!0),c(f,null,I(r.groups,(l,w)=>(a(),g(_,{key:w,gruppe:l},null,8,["gruppe"]))),128))])])]),_:1})}const te=m(M,[["render",T],["__scopeId","data-v-2cb8753c"]]);export{te as default};
