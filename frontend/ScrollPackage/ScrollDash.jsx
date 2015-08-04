"use strict";
var React = require('react');
var Scroll = require('./Scroll.jsx');

var ScrollDash = React.createClass({
  S: function(d){
    if (d){
      console.log('scrolling');
    }
  },
 render: function(){
   var elt = React.createElement('div',{
                                        style: {
                                          border: "1px solid black",
                                          width: "500px",
                                          height: "1000px"
                                        }
                                        });

   return (
     <div>
     <h1>HEY</h1>
      <Scroll
       scrolling={this.S}
       height={1000}
       width={500}
       heightComp={500}
       widthComp={500}
       component={elt}
       />
   </div>
   );
 }
});

module.exports = ScrollDash;
