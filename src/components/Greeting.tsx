import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => (
  <div>
    <h1>Hello, {name}!</h1>
  </div>
);

export default Greeting;