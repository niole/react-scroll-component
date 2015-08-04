"use strict";

var React = require('react');

var Scroll = React.createClass({
    getDefaultProps: function(){
      return {
        scrolling: function(){return false;}
      };
    },
    propTypes: {
      scrolling: React.PropTypes.func,
      height: React.PropTypes.number,
      width: React.PropTypes.number,
      widthComp: React.PropTypes.number,
      heightComp: React.PropTypes.number,
      component: React.PropTypes.object
    },
    getInitialState: function() {
        return {
                scrolling: false,
                top: 0
                };
    },
    componentDidMount: function(){
      $('#scroll-window').bind('mousewheel', function(event){
        this.onScroll(event);
       }.bind(this));
      this.scrolling = false;
      this.scrollVal = 0;
      this.CheckInterval = 100;

      this.checkInterval = setInterval(this.checkScroll, this.CheckInterval);
    },
   componentWillUnmount: function() {
     $('#scroll-window').removeEventListener('mousewheel');
     clearInterval(this.checkInterval);
   },
   checkScroll: function() {
       if (Date.now() - this.lastScrollTime > this.CheckInterval*2 && this.props.scrolling) {
        this.props.scrolling(false);
        this.scrolling = false;
        this.onScrollEnd();
      }
   },
   onScroll: function(event) {
    event.preventDefault();
    this.scrollVal = event.originalEvent.wheelDelta;
    console.log(this.scrollVal);
    if (!this.props.scrolling) {
        this.scrolling=true;
        this.props.scrolling(true);
        this.onScrollStart();
    }

    //TODO: this.scrollVal needs to translate to displacment of inner div
    //1. update delta
    //2. add/subtract from this.state.top/reset state
    var delta = 0;
    var scrollDiff = 0;

    if (Math.abs(this.scrollVal) < 1300){
      //for every 18 delta pts, get 1% change in height
      scrollDiff = Math.floor(Math.abs(this.scrollVal)/18);
      delta = (scrollDiff/100)*this.props.heightComp;
    }else{
      //update delta to be 75% change in height
      delta = (3/4)*this.props.heightComp;
    }
    if (this.scrollVal < 0){
      //add to top
      if (this.state.top - delta <= -this.props.height+this.props.heightComp){
        //only add part of delta
        this.setState({ top: -this.props.height+this.props.heightComp});
      }else{
        //add delta
        this.setState({ top: this.state.top-delta});
      }
    }else{
      //subtract from top
      if (this.state.top + delta > 0){
        //only subtract part of delta
        this.setState({ top: 0});
      }else{
        //subtract all of delta
        this.setState({ top: this.state.top+delta});
      }
    }
    this.lastScrollTime = Date.now();
    },
    onScrollStart: function() {
        this.setState({scrolling: true});
    },
    onScrollEnd: function() {
      this.setState({scrolling: false});
    },
    render: function() {
      return (
        React.createElement('div',{
                                  style: {
                                    width: this.props.widthComp,
                                    height: this.props.heightComp,
                                    position: "relative",
                                    border: "3px solid red",
                                  }
                                  },
          React.createElement('div',{
                                    id: 'scroll-window',
                                    className: 'scroll-window',
                                    style:{
                                         overflow: "hidden",
                                         position: "absolute",
                                         width: this.props.width,
                                         height: this.props.height,
                                         top: (this.state.top).toString()+"px"
                                         }},this.props.component)
                            )

            );
    }
});

module.exports = Scroll;
