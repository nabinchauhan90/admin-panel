(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{oXnO:function(e,s,i){"use strict";i.r(s);var c=i("ofXK"),n=i("tyNb"),t=i("fXoL");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Lb({type:e,selectors:[["ngx-message-archives"]],decls:1,vars:0,template:function(e,s){1&e&&t.Sb(0,"router-outlet")},directives:[n.h],encapsulation:2}),e})();var a=i("M+mG"),o=i("OEGk"),b=i("aceb");function l(e,s){if(1&e&&(t.Xb(0,"nb-accordion-item"),t.Xb(1,"nb-accordion-item-header"),t.Dc(2),t.Wb(),t.Xb(3,"nb-accordion-item-body"),t.Xb(4,"p"),t.Dc(5,"Message: "),t.Sb(6,"br"),t.Dc(7),t.Wb(),t.Sb(8,"p"),t.Xb(9,"p"),t.Dc(10,"Date: "),t.Xb(11,"b"),t.Dc(12),t.Wb(),t.Wb(),t.Xb(13,"p"),t.Dc(14),t.Wb(),t.Wb(),t.Wb()),2&e){const e=s.$implicit,i=s.index,c=t.hc().$implicit;t.Eb(2),t.Gc(" ",c.service_name," Message ",i+1," "),t.Eb(5),t.Fc(" ",e.message," "),t.Eb(5),t.Ec(e.time),t.Eb(2),t.Fc("Sent By:",e.from,"")}}function m(e,s){if(1&e&&(t.Xb(0,"nb-accordion-item"),t.Xb(1,"nb-accordion-item-header"),t.Dc(2),t.Wb(),t.Xb(3,"nb-accordion-item-body"),t.Xb(4,"nb-accordion"),t.Bc(5,l,15,5,"nb-accordion-item",0),t.Wb(),t.Wb(),t.Wb()),2&e){const e=s.$implicit,i=t.hc();t.Eb(2),t.Fc(" ",e.service_name," "),t.Eb(3),t.nc("ngForOf",i.MessageArray)}}const h=[{path:"",component:r,children:[{path:"archives",component:(()=>{class e{constructor(e,s){this.service=e,this.service2=s,this.arrayMessage=[],this.MessageArray=[],this.apple=[{service_name:"ONe",subpart:[{service_name:"Child 1",seen:!0,message:"This is apple For Child1",time:"232345"},{service_name:"Child 2",seen:!0,message:"This is apple for Child2",time:"383593"}]},{service_name:"Two",subpart:[{service_name:"Child 1",seen:!0,message:"This is apple For Child1",time:"232345"},{service_name:"Child 2",seen:!0,message:"This is apple for Child2",time:"383593"}]},{service_name:"Three",subpart:[{service_name:"Child 1",seen:!0,message:"This is apple For Child1",time:"232345"},{service_name:"Child 2",seen:!0,message:"This is apple for Child2",time:"383593"}]}],this.getServices(),this.getMessage(),console.log(this.MessageArray)}getServices(){this.service2.getData().subscribe(e=>{this.serviceName=e,console.log(e)})}getMessage(){this.service.getMessages().subscribe(e=>{this.MessageArray=e,console.log(this.MessageArray)})}checkStatus(){this.getMessage()}ngOnInit(){}}return e.\u0275fac=function(s){return new(s||e)(t.Rb(a.a),t.Rb(o.a))},e.\u0275cmp=t.Lb({type:e,selectors:[["ngx-archives"]],decls:12,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"]],template:function(e,s){1&e&&(t.Xb(0,"nb-accordion"),t.Xb(1,"h3"),t.Dc(2,"Messages By Services"),t.Wb(),t.Sb(3,"br"),t.Bc(4,m,6,2,"nb-accordion-item",0),t.Xb(5,"nb-accordion-item"),t.Xb(6,"nb-accordion-item-header"),t.Dc(7," Edit "),t.Wb(),t.Xb(8,"nb-accordion-item-body"),t.Xb(9,"button",1),t.fc("click",(function(){return s.checkStatus()})),t.Dc(10,"Click Me!!!"),t.Wb(),t.Dc(11," A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. "),t.Wb(),t.Wb(),t.Wb()),2&e&&(t.Eb(4),t.nc("ngForOf",s.serviceName))},directives:[b.g,c.l,b.i,b.j,b.h],styles:[""]}),e})()}]}];let d=(()=>{class e{}return e.\u0275mod=t.Pb({type:e}),e.\u0275inj=t.Ob({factory:function(s){return new(s||e)},imports:[[n.g.forChild(h)],n.g]}),e})();i.d(s,"MessageArchivesModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=t.Pb({type:e}),e.\u0275inj=t.Ob({factory:function(s){return new(s||e)},imports:[[c.c,d,b.v,b.P,b.k,b.gb]]}),e})()}}]);