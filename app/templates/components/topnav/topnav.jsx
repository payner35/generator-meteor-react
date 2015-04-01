
/**
 * This directive is necessary to enable prepossessing of JSX tags:
 * @jsx React.DOM
 */


var Topnav = ReactMeteor.createClass({

  // Specifying a templateName property allows the component to be
  // interpolated into a Blaze template just like any other template:
  // {{> Widget x=1 y=2}}. This corresponds to the JSX expression
  // <Widget x={1} y={2} />.
  templateName: "Topnav",

  startMeteorSubscriptions: function() {
    Meteor.subscribe("navigation");
  },

  getMeteorState: function() {
    return {
      navItems: Navigation.find({}).fetch
    };
  },

  render: function() {
    console.log(this)
    return (
      <div
        className="ui menu">
        <Navitem />
      </div>
    );
  }
});


var Navitem = React.createClass({
  render: function() {
    return (
      <a className="active item">home</a>

    );
  }
});









