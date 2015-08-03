 "use strict";
 var React = require('react');
 var Scroll = require('./Scroll.jsx');
 var Dash = React.createClass({
      SU: function(d){
 //       if (d){
 //        console.log(d);
 //         console.log('DOWN')
 //       }
      },
      SD: function(d){
 //       console.log(d);
 //       if (d){
 //         console.log('UP');
 //       }
      },                       
      SData: function(d){      
        console.log(d);        
      },

    },
    S: function(d){
      if (d){
        console.log('scrolling');
      }
    }, 
   render: function(){
     var delta;
     return (
       <div>
       <h1>HEY</h1>
        <Scroll
         scrollUp={this.SU}
         scrollDown={this.SD}
         lastScrollVal={this.SData}
         scrolling={this.S}
         scrollobj={React.createElement('div',{
           style: {
             position: "absolute",
             top: delta
           },
           id:"stuff"})}
           >
           <div id="stuff">
             <p>sdlfkja</p>
           </div>
     </Scroll>
     </div>
     );
); 

module.exports = Dash;
