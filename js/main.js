// ////////////
// time line
// ///////////
// gsap.to('.star' , {
//     stagger:1, // wait 1 socund between start of each item
//     x:750, //
//     rotaion:360, 
//     fill: 'yellow', 
//     duration: 1, 
// });
// gsap.fromTo('.star' ,
// // from
//  {
//     stagger:1, // wait 1 socund between start of each item
//     x:300, //
//     rotaion:150, 
//     fill: 'red', 
//     duration: 0, 
// },
// // to
//  {
//     stagger:1, // wait 1 socund between start of each item
//     x:750, //
//     rotaion:360, 
//     fill: 'yellow', 
//     duration: 1, 
// },
// );
// gsap.defaults({duration:1}); // duration for all
// //////////////////////////////////////////////////////////////
// //////////// delay and repeat ////////////////////////////////
// //////////////////////////////////////////////////////////////
// delay////////////////////////////////////
// gsap.to('.star' , {duration:2 , x:600 , delay:2 /* start after 2 suc*/ })
// yoyo////////////////////////////////////
// gsap.to('.star' , {duration:2 , x:600 , repeat:1 , yoyo:true /* repeat but from from end as yoyo from top to bottom and from bottom to top */ })
// infenity////////////////////////////////////
// gsap.to('.star' , {duration:2 , x:600 , repeat:-1 /* -1 => repeat infenity  */ , yoyo:true  })
// ease/////////////////////////////////////
// gsap.to('.star' , {duration:2 , x:600 , ease:bounce /*Boom Boom  ex: bounce.in , bounce.out , bounce.inOut , elastic , linear , back  , back(6) => back 6px  */  })
// stagger /////////////////////////////////////
// gsap.to('.freds img' , {duration:2 , x:600 , stagger: {each : 0.2 , from :"end" } /* from => from start or form end or center or edges  , each : 0.2 time stagger for evry element */  })
// ////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////timeline/////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////
// let animated = gsap.timeline();
// // animated
// .to('#start' , {duration:2 , x:1150})
// .to('#circle' ,{duration:3 , x:1150} ,"+=1" /* +=1 => increment 1 suc for this step */ )
// .to('#start' , {duration:1 , x:1150} , "<") // "<" => start when next step is start 
// .to('#start' , {duration:1 , x:1150} , "<") // "<" => start after 0.5 suc when next step is start  
// .to('#start' , {duration:1 , x:1150} , 4) // 1 => start in step 1
// //////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////// Scroll Trigger////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// 1
// gsap.registerPlugin(ScrollTrigger)
// gsap.to(".squar" , {
//     x:700,
//     duration:3 ,
//     scrollTrigger:".squar2" /* when i scroll to squar2 start  */
// })
// 2 Start and End
// gsap.registerPlugin(ScrollTrigger)
// gsap.to(".squar" , {
//     x:700,
//     duration:8 ,
//     scrollTrigger:{
//         trigger:".squar2",
//         // start:"top center", /* when top of squar2 in center of viewport */
//         start:"top 80%", /* when top of squar2 in 30% of viewport */
//         end:"top 30%", /* when top of squar2 in 80% of viewport */
//         // end:() => `+=${document.querySelector(".squar").offsetHeight}`, /* get height for element ### in other words i get end for element */
//         toggleActions:"play reverse resume none", /* "onEnter  onLeave onEnterBack , onLeaveBeck" 
//         // play , restart ,reverse,reset ,  none , pause ,resume ,  complete
//         toggleClass:"red", /* toglle cleass will active when element get into start and end */
//         markers:true,
//         scrub:4 ,
//         /* effict for scroll when no do action for scroll animated will stop & when i add number will be number of scroll duration  */ 
//         pin:".squar",
//         pinSpacing:false
//     }
// })
// ///////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////set timeLine//////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// const tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:".box",
//         markers:true,
//         start:"top 80%",
//         end:"top 30%",
//         scrub:1 ,
//     }
// })
// tl.to('.box' , {x:500 , duration:5}).to('.box' , {x:200 , duration:2}).to('.box' , {x:0 , duration:2})
// ///////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////Standalone ScrollTriggers/////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ScrollTrigger.create({
//     start:"top 6%",
//     trigger:".panel",
//     toggleClass:{targets:"nav" , className:"nav-active"},
//     // onUpdate:(self) =>{console.log(self);},
//     // onEnter:() =>{},
//     // onLeave:() =>{},
//     // onEnterBack:() =>{},
//     // onLeaveBack:() =>{},
// })