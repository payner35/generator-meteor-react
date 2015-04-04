
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

  getInitialState: function(){
    //better to start with something... and wait for the subscription
    return {
      navItems: []
    }
  },

  startMeteorSubscriptions: function() {
    Meteor.subscribe("navigation");
  },

  getMeteorState: function() {
    //load up the new meteor state
    return {
      navItems: Navigation.find({}).fetch()
    };
  },

  render: function() {
    return (
      <div
        className="ui menu">
        <Navitems items={this.state.navItems}/>
      </div>
    );
  }
});


var Navitems = React.createClass({

  goRoute: function(someRoute) {
    Router.go(someRoute)
  },

  renderItem: function(someItem) {
    return(
      <a
        key={someItem._id}
        className="item"
        onClick={this.goRoute.bind(this, someItem.route)}>
        {someItem.title}
      </a>
    )
  },

  render: function() {
    //load up the props for use
    var { items, ...rest } = this.props;
    return <div>{items.map(this.renderItem)}</div>;
    }
  });
