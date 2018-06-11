<<<<<<< HEAD
import React, { Component } from 'react';

class Album extends Component {
    render() {
      return (
        <section className="album">
         {this.props.match.params.slug} Album will go here 
        </section>
      );
    }
  }

  export default Album;
=======
import React from 'react';

const Album = () => (
  <section className="album">
    Album will go here
  </section>
);

export default Album;
>>>>>>> assignment
const Album = () => (
    <section className="album">
      Library will go here
    </section>
  );
  
  export default Album;