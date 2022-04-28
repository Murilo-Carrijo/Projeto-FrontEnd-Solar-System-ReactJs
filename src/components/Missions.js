import React from 'react';

import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div className="contaniner-missions" data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

export default Missions;
