import React from "react";

    const Container = React.createClass({
        render: function() {
            return (
              <div id='article'></div>
              <div id='note'></div>
            )
        }
    })
    ReactDOM.render(<Container />, document.querySelector('#app'))