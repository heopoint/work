google.maps.__gjsload__('overlay', function(_){var $t=function(a){this.g=a},Ala=function(){},au=function(a){a.ep=a.ep||new Ala;return a.ep},Bla=function(a){this.Ia=new _.Uh(function(){var b=a.ep;if(a.getPanes()){if(a.getProjection()){if(!b.eo&&a.onAdd)a.onAdd();b.eo=!0;a.draw()}}else{if(b.eo)if(a.onRemove)a.onRemove();else a.remove();b.eo=!1}},0)},Cla=function(a,b){function c(){return _.Vh(e.Ia)}var d=au(a),e=d.Pm;e||(e=d.Pm=new Bla(a));_.qb(d.Ya||[],_.K.removeListener);var f=d.Xa=d.Xa||new _.Rr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Us=d.Us||new $t(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ya=[_.K.addListener(a,"panes_changed",c),_.K.addListener(g,"zoom_changed",c),_.K.addListener(g,"offset_changed",c),_.K.addListener(b,"projection_changed",c),_.K.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.kf&&(_.O(b,"Ox"),_.N(b,148440))},Gla=function(a){if(a){var b=a.getMap();if(Dla(a)!==b&&b&&b instanceof _.kf){var c=b.__gm;c.overlayLayer?a.__gmop=new Ela(b,a,c.overlayLayer):c.g.then(function(d){d=d.La;var e=new bu(b,d);d.hb(e);c.overlayLayer=e;Fla(a);Gla(a)})}}},Fla=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.g.unbindAll(),b.g.set("panes",null),b.g.set("projection",null),b.i.kg(b),b.h&&(b.h=!1,b.g.onRemove?b.g.onRemove():b.g.remove()))}},Dla=function(a){return(a=a.__gmop)?a.map:null},
Ela=function(a,b,c){this.map=a;this.g=b;this.i=c;this.h=!1;_.O(this.map,"Ox");_.N(this.map,148440);c.sf(this)},Hla=function(a,b){a.g.get("projection")!=b&&(a.g.bindTo("panes",a.map.__gm),a.g.set("projection",b))},bu=function(a,b){this.j=a;this.i=b;this.g=null;this.h=[]};_.D($t,_.L);
$t.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.je(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};var cu={};_.D(Bla,_.L);cu.sf=function(a){if(a){var b=a.getMap();(au(a).Bs||null)!==b&&(b&&Cla(a,b),au(a).Bs=b)}};cu.kg=function(a){var b=au(a),c=b.Xa;c&&c.unbindAll();(c=b.Us)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Ya&&_.qb(b.Ya,_.K.removeListener);b.Ya=null;b.Pm&&(b.Pm.Ia.Nd(),b.Pm=null);delete au(a).Bs};var du={};Ela.prototype.draw=function(){this.h||(this.h=!0,this.g.onAdd&&this.g.onAdd());this.g.draw&&this.g.draw()};bu.prototype.dispose=function(){};bu.prototype.Mc=function(a,b,c,d,e,f,g,h){var k=this.g=this.g||new _.wp(this.j,this.i,function(){});k.Mc(a,b,c,d,e,f,g,h);a=_.A(this.h);for(b=a.next();!b.done;b=a.next())b=b.value,Hla(b,k),b.draw()};bu.prototype.sf=function(a){this.h.push(a);this.g&&Hla(a,this.g);this.i.refresh()};bu.prototype.kg=function(a){_.xb(this.h,a)};du.sf=Gla;du.kg=Fla;_.We("overlay",{uq:function(a){if(a){(0,cu.kg)(a);(0,du.kg)(a);var b=a.getMap();b&&(b instanceof _.kf?(0,du.sf)(a):(0,cu.sf)(a))}},preventMapHitsFrom:function(a){_.Yp(a,{onClick:function(b){return _.Fp(b.event)},yd:function(b){return _.Cp(b)},li:function(b){return _.Dp(b)},ee:function(b){return _.Dp(b)},Fd:function(b){return _.Ep(b)}}).ij(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.$e);a.addEventListener("contextmenu",_.$e);a.addEventListener("dblclick",_.$e);a.addEventListener("mousedown",
_.$e);a.addEventListener("mousemove",_.$e);a.addEventListener("MSPointerDown",_.$e);a.addEventListener("pointerdown",_.$e);a.addEventListener("touchstart",_.$e);a.addEventListener("wheel",_.$e)}});});