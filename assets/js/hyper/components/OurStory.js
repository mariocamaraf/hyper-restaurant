import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
   <section id="OurStory">
     <div class="container">
     <div class="row">
       <div class="col-md-6">
          <h5 class="comp-title">Our Story</h5>
          <h2> Cooking is the art of adjustment</h2>
          <p>The Lab Bunny — One time beauty school suspendee, two time college
             dropout, full time lipstick hoarder. Libra. Non-smoker. DTF.
             The Lab Bunny — One time beauty school suspendee, two time college
             dropout, full time lipstick hoarder. Libra. Non-smoker. DTF
             dropout, full time lipstick hoarder. Libra. Non-smoker. DTF </p>
          <div class="quote">"The best steak in the town of Huntington" <strong>Thomas Eggsy</strong></div>
          <a href="#" class="reserve-btn">Reserve</a>
         </div>
       <div class="col-md-6">
          <div class="video-img"></div>

     </div>
     </div>
     </div>
   </section>
  )
}
