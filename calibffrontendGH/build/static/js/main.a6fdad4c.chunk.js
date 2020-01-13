(this.webpackJsonpsandcfrontend=this.webpackJsonpsandcfrontend||[]).push([[0],{184:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(24),c=a.n(o),i=(a(46),a(17)),l=a.n(i),u=a(3),h=a(4),d=a(6),p=a(5),m=a(7),b=a(31),f={width:"620px",height:"80%",float:"left",position:"none",transform:"translate(-235px,-690px)",color:"black",borderRadius:"100%",textShadow:"none"},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).displayMarkers=function(){var e=a(89);return n.props.beaches.map((function(t,a){return s.a.createElement(b.Marker,{icon:{url:e,scaledSize:new window.google.maps.Size(40,40)},key:a,id:a,displayBeach:n.props.displayBeach,position:{lat:t.lat,lng:t.lng},onClick:function(){return n.props.displayBeach(t,n.props)}})}))},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.qLatLong;return s.a.createElement("div",{className:"map-container"},s.a.createElement(b.Map,{id:"map-showcase",style:f,google:this.props.google,zoom:11,initialCenter:{lat:37.8591,lng:-122.4853},center:e},this.displayMarkers()))}}]),t}(r.Component),v=Object(b.GoogleApiWrapper)({apiKey:"AIzaSyCrN9OLFD2SSP9_lYIqcGINzsOJ1iAJ7fM"})(g),E=a(18),y=a(64),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={city:"",state:"California"},a.handleChange=function(e){e.preventDefault(),a.setState(Object(y.a)({},a.state,Object(E.a)({},e.target.name,e.target.value)))},a.onSubmit=function(e){e.preventDefault();var t=a.state.city,n=a.state.state;fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(t,",").concat(n,"&key=").concat("AIzaSyDhdrtDDMX9kJqDm0xrsIntQQhbIrdOueQ")).then((function(e){return e.json()})).then((function(e){a.props.queryCode(e)})),a.setState({city:"",state:""})},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{id:"searchform",onSubmit:this.onSubmit},"Please Enter Your Location:",s.a.createElement("label",null,s.a.createElement("input",{onChange:this.handleChange,type:"text",placeholder:"city",name:"city",display:"city",defaultValue:this.state.city,autoComplete:"off",id:"searchform_input"})),s.a.createElement("div",null,s.a.createElement("button",{type:"submit",value:"Submit",className:"roundbutton"},"Submit"))))}}]),t}(r.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"favbeach"},s.a.createElement("div",null,s.a.createElement("img",{id:"favbeachimg",key:this.props.beach.id,src:this.props.beach.photo_1,alt:"beach"}),s.a.createElement("div",{id:"detailtext"},s.a.createElement("div",null),"Beach: ",this.props.beach.name,s.a.createElement("div",null),"Stroller Friendly: ",this.props.beach.ez4strollers?this.props.beach.ez4strollers:"No Info",s.a.createElement("div",null),"Dog Friendly: ",this.props.beach.dog_friendly?this.props.beach.dog_friendly:"No Info",s.a.createElement("div",null),"Camping: ",this.props.beach.campground?this.props.beach.campground:"No Info",s.a.createElement("div",null),"Fishing: ",this.props.beach.fishing?this.props.beach.fishing:"No Info",s.a.createElement("div",null),"Boating: ",this.props.beach.boating?this.props.beach.boating:"No Info")),s.a.createElement("button",{className:"roundbutton",onClick:function(){return e.props.addBeachtoUBs(e.props)}},console.log(this.props),"Add This Beach to my Favs!"))}}]),t}(r.Component),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:"Please submit a beach review."},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.value;console.log("displayBeach",a.props.displayBeach);var n={review:t,beach_id:a.props.displayBeach.id,user_id:a.props.user_id};fetch("http://localhost:3000/reviews",{method:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){console.log("Success:",e),a.props.addReview(e)}))},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"reviewform"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,s.a.createElement("div",null,"Review for : ",this.props.displayBeach.name),s.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange}),s.a.createElement("div",null,s.a.createElement("input",{className:"roundbutton",type:"submit",value:"Submit"}))))))}}]),t}(r.Component),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[]},a.handleChange=function(e){a.setState({reviews:e.target.value})},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.reviews.sort((function(e,t){return t.id-e.id})).map((function(t){return t.user_id===parseInt(e.props.user_id)?s.a.createElement("span",{key:t.id},s.a.createElement("div",null,"Beach:",t.beach_id),s.a.createElement("textarea",{defaultValue:t.review,onChange:e.handleChange}),s.a.createElement("button",{onClick:function(){return e.props.deleteReview(t.id)},className:"roundbutton"},"Delete"),s.a.createElement("button",{onClick:function(){return e.props.updateReview(t,e.state.reviews)},className:"roundbutton"},"Update"),s.a.createElement("br",null)):(console.log("user",t.user_id,e.props.user_id),s.a.createElement("span",null))}));return s.a.createElement("div",{className:"container reviews"},s.a.createElement("div",null,"Reviews of Beaches"),s.a.createElement("div",null,t))}}]),t}(r.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.userbeaches.sort((function(e,t){return t.id-e.id})),n=this.props.user_id;return e=a.filter((function(e){return e.user_id===n})).map((function(e){return s.a.createElement("span",null,s.a.createElement("div",{id:"userbeach"},s.a.createElement("div",{key:e.beach_id},e.name,s.a.createElement("br",null),s.a.createElement("img",{id:"userbeachphoto",src:e.beach?e.beach.photo_1:"loading",alt:"no_image_available_for_this_beach"})),s.a.createElement("button",{id:"userbeachesbuttons",className:"roundbuttonFavbeach",onClick:function(){return t.props.deleteFromUBs(e)}},"Delete Favorite"),s.a.createElement("button",{id:"userbeachesbuttons",className:"roundbuttonFavbeach",onClick:function(){return t.props.reviewBeach(t.props,e.beach_id)}},"Review Beach")))})),s.a.createElement("div",{id:"roundbutton"},s.a.createElement("div",{id:"favbeachbox"},"     Favorite Beaches:",e,s.a.createElement("div",{id:"userbeach"})))}}]),t}(r.Component),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={logIn:!0,username:"",password:"",errors:[]},a.onChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.submitLogin=function(e){e.preventDefault(),a.logInSubmitted(e)},a.logInSubmitted=function(e){e.preventDefault(),fetch("http://localhost:3000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.username,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.errors?a.setState({errors:e.errors}):(a.props.setToken(e),a.setState({username:"",password:""}))}))},a.signUpSubmitted=function(e){e.preventDefault(),fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.username,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.errors?a.setState({errors:e.errors}):a.props.setToken(e)}))},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{id:"signup"},this.state.errors.map((function(e){return s.a.createElement("li",null,e)}))),this.state.logIn?s.a.createElement("section",{id:"signup"},s.a.createElement("h2",null,"Log In"),s.a.createElement("button",{id:"signup-button",className:"roundbutton",onClick:function(){return e.setState({logIn:!1})}},"Sign Up"),s.a.createElement("form",{onSubmit:this.submitLogin},s.a.createElement("label",{htmlFor:"log_in_username"},"Username"),s.a.createElement("input",{id:"log_in_username",type:"text",onChange:this.onChange,name:"username",value:this.state.username}),s.a.createElement("div",null),s.a.createElement("label",{htmlFor:"log_in_password"},"Password"),s.a.createElement("input",{id:"log_in_password",type:"password",onChange:this.onChange,name:"password",value:this.state.password}),s.a.createElement("input",{id:"password-submit",type:"submit",className:"roundbutton"}),s.a.createElement("div",null,s.a.createElement("br",null)))):s.a.createElement("section",{id:"signup"},s.a.createElement("h2",null,"Sign up"),s.a.createElement("button",{id:"signup-button",className:"roundbutton",onClick:function(){return e.setState({logIn:!0})}},"I already signed up"),s.a.createElement("form",{onSubmit:this.signUpSubmitted},s.a.createElement("label",{htmlFor:"sign_up_username"},"Username"),s.a.createElement("input",{id:"sign_up_username",type:"text",onChange:this.onChange,name:"username",value:this.state.username}),s.a.createElement("label",{htmlFor:"sign_up_password"},"Password"),s.a.createElement("input",{id:"sign_up_password",type:"password",onChange:this.onChange,name:"password",value:this.state.password}),s.a.createElement("input",{type:"submit",id:"password-submit",className:"roundbutton"}),s.a.createElement("div",null,s.a.createElement("br",null)))))}}]),t}(r.Component),k=a(15),_=a(13),I=a(65),F=["Dog Friendly \ud83d\udc15","Stroller Friendly \ud83d\udc76\ud83c\udffb","Fishing \ud83c\udfa3","Biking \ud83d\udeb2","Restrooms \ud83d\udebb","Camping \u26fa\ufe0f"],N=["#FB3640","#EFCA08","#43AA8B","ff5e00","#115DA8","#8A2BE2"],x={legend:{display:!0,position:"left",labels:{fontColor:"#000000",fontSize:30}},tooltips:{titleFontSize:20,bodyFontSize:20,opacity:"none"}},L=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){if(!this.props)return console.log("no beaches yet"),null;var e=(this.props.rawBeaches.filter((function(e){return"yes"===e.dog_friendly.toLowerCase()})).length/1563*100).toFixed(2);console.log(e);var t=(this.props.rawBeaches.filter((function(e){return"yes"===e.ez4strollers.toLowerCase()})).length/1563*100).toFixed(2),a=(this.props.rawBeaches.filter((function(e){return"yes"===e.fishing.toLowerCase()})).length/1563*100).toFixed(2),r=(this.props.rawBeaches.filter((function(e){return"yes"===e.bike_path.toLowerCase()})).length/1563*100).toFixed(2),o=(this.props.rawBeaches.filter((function(e){return"yes"===e.restrooms.toLowerCase()})).length/1563*100).toFixed(2),c=(this.props.rawBeaches.filter((function(e){return"yes"===e.campground.toLowerCase()})).length/1563*100).toFixed(2);return n={labels:F,datasets:[{data:[e,t,a,r,o,c],backgroundColor:N,hoverBackgroundColor:N}],backgroundColor:"rgba(0, 0, 0, 0.5)"},console.log(e,t,a),s.a.createElement("div",null,s.a.createElement("h2",{id:"piechart",className:"beachDataFont"},"Beach Data"),s.a.createElement("h4",{id:"piechart",className:"beachDataFont"},"Percentages based on all beach visitor reviews for 1563 beaches as provided by www.coastal.ca.gov."),s.a.createElement(I.a,{id:"piechart",className:"chartText",data:n,options:x,style:{backgroundColor:"#000000"}}))}}]),t}(r.Component),D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={userbeaches:[],qLatLong:{},reviews:[],results:[],rawBeaches:[],displayBeach:[],user:{id:1},geocode:{lat:"",long:""},token:localStorage.token,loggedInUserId:localStorage.userId,name:localStorage.name},a.setToken=function(e){var t=e.token,n=e.user_id,r=e.name;localStorage.token=t,localStorage.userId=n,localStorage.name=r,a.setState({token:t,loggedInUserId:n,name:r})},a.logOutClick=function(){localStorage.clear(),a.setState({loggedInUserId:null,token:null})},a.addReview=function(e){var t=a.state.reviews.filter((function(t){return t.id!==e.id}));t.unshift(e),a.setState({reviews:t})},a.deleteReview=function(e){var t="http://localhost:3000/reviews/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(t){var n=a.state.reviews.filter((function(t){return t.id!==e}));a.setState({reviews:n})}))},a.grabBeaches=function(e){var t,n,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.a.awrap(fetch("http://localhost:3000/beaches"));case 2:return t=s.sent,s.next=5,l.a.awrap(t.json());case 5:n=s.sent,r=n.filter((function(t){return parseFloat(t.lat)<=e.lat+.05&&parseFloat(t.lat)>=e.lat-.05})),a.setState({results:r,rawBeaches:n});case 8:case"end":return s.stop()}}))},a.queryCode=function(e){var t={};e.results.length>0?(t.lat=e.results[0].geometry.location.lat,t.lng=e.results[0].geometry.location.lng):alert("Your Please Resubmit your user Query"),a.grabBeaches(t),a.setState({qLatLong:t})},a.displayBeach=function(e,t){a.setState({displayBeach:e}),t.history.push("/favbeach")},a.reviewBeach=function(e,t){if(!e)return s.a.createElement("redirect",{to:{pathname:"/reviews"}});e.history.push("/reviews")},a.updateReview=function(e,t){console.log(e,t);var n=e.id,r={user_id:a.state.loggedInUserId,beach_id:e.beach_id,review:t},s="http://localhost:3000/reviews/".concat(n);fetch(s,{method:"PATCH",body:JSON.stringify(r),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){return console.log(e)}))},a.addBeachtoUBs=function(e){var t,n,r,s;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,l.a.awrap(parseInt(e.beach.id));case 2:return t=o.sent,n=a.state.loggedInUserId,o.next=6,l.a.awrap(e.beach.name);case 6:r=o.sent,s={beach_id:t,user_id:n,name:r},"http://localhost:3000/userbeaches",fetch("http://localhost:3000/userbeaches",{method:"POST",body:JSON.stringify(s),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(t){console.log("Success:",t);var n=a.state.userbeaches;n.unshift(t),a.setState({userbeaches:n}),e.history.push("/userbeaches")}));case 10:case"end":return o.stop()}}))},a.deleteFromUBs=function(e){var t="http://localhost:3000/userbeaches/".concat(e.id);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(t){var n=a.state.userbeaches.filter((function(t){return t.id!==e.id}));a.setState({userbeaches:n})}))},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/reviews").then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(t){e.setState({reviews:t})})),fetch("http://localhost:3000/userbeaches").then((function(e){return e.json()})).then((function(t){e.setState({userbeaches:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"title"},"CALIFORNIA BEACH FINDER",s.a.createElement("div",{className:"navbuttonscontainer"},s.a.createElement(k.b,{to:"/"},s.a.createElement("button",{className:"roundbutton"},"Beach Finder Mainpage")),s.a.createElement(k.b,{to:"/beachchart"},s.a.createElement("button",{className:"roundbutton"},"Beach Data Chart")),s.a.createElement(k.b,{to:"/userbeaches"},s.a.createElement("button",{className:"roundbutton"},"Favorite Beaches")),s.a.createElement(k.b,{to:"/reviews"},s.a.createElement("button",{className:"roundbutton"},"Reviews")),this.state.token?s.a.createElement(C,{token:this.state.token,setToken:this.setToken,loggedInUserId:this.state.loggedInUserId}):s.a.createElement(C,{setToken:this.setToken}),s.a.createElement(s.a.Fragment,null,this.state.token?s.a.createElement("button",{className:"roundbutton",onClick:this.logOutClick},"Log Out"):"")),s.a.createElement(_.a,{exact:!0,path:"/",render:function(t){return s.a.createElement("div",{id:"search-bar"},s.a.createElement(w,Object.assign({},t,{grabBeaches:e.grabBeaches,queryCode:e.queryCode})))}}),s.a.createElement(_.a,{exact:!0,path:"/",render:function(t){return 0===e.state.results.length?s.a.createElement("div",{id:"map-showcase"},s.a.createElement(v,Object.assign({},t,{beaches:e.state.results,qLatLong:e.state.qLatLong,displayBeach:e.displayBeach}))):s.a.createElement("div",{id:"map-showcase"},s.a.createElement(v,Object.assign({},t,{beaches:e.state.results,displayBeach:e.displayBeach,qLatLong:e.state.qLatLong})))}}),s.a.createElement(_.a,{exact:!0,path:"/favbeach",render:function(t){return s.a.createElement("div",{id:"fav-beach"},s.a.createElement(j,Object.assign({id:"favbeach"},t,{beach:e.state.displayBeach,refreshBeaches:e.refreshBeaches,addBeachtoUBs:e.addBeachtoUBs,userBeaches:e.userBeaches})))}}),s.a.createElement(_.a,{exact:!0,path:"/userbeaches",render:function(t){return s.a.createElement("div",{id:"userbeaches"},s.a.createElement(S,Object.assign({},t,{userbeaches:e.state.userbeaches,deleteFromUBs:e.deleteFromUBs,returnHome:e.returnHome,reviewBeach:e.reviewBeach,user_id:e.state.loggedInUserId,rawBeaches:e.state.rawBeaches})))}}),s.a.createElement(_.a,{exact:!0,path:"/reviews",render:function(t){return s.a.createElement("div",{id:"reviewform roundbutton"},s.a.createElement(O,Object.assign({},t,{displayBeach:e.state.displayBeach,addReview:e.addReview,returnHome:e.returnHome,user_id:e.state.loggedInUserId})))}}),s.a.createElement(_.a,{exact:!0,path:"/reviews",render:function(t){return s.a.createElement("div",{id:"reviews"},s.a.createElement(B,Object.assign({},t,{reviews:e.state.reviews,beaches:e.state.results,deleteReview:e.deleteReview,updateReview:e.updateReview,user_id:e.state.loggedInUserId})))}}),s.a.createElement(_.a,{exact:!0,path:"/beachchart",render:function(t){return s.a.createElement("div",{id:"beachchart"},s.a.createElement(L,Object.assign({},t,{rawBeaches:e.state.rawBeaches})))}}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(k.a,null,s.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,a){},69:function(e,t,a){e.exports=a(184)},89:function(e,t,a){e.exports=a.p+"static/media/beach-marker.cfafeca2.png"}},[[69,1,2]]]);
//# sourceMappingURL=main.a6fdad4c.chunk.js.map