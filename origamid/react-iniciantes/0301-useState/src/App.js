import React from 'react';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

const App = () => {
  return (
    <>
      <section>
        <h1>Exemplo 1</h1>
        <br />
        <Example1 />
      </section>
      <hr />
      <section>
        <h1>Exemplo 2</h1>
        <Example2 />
      </section>
      <hr />
      <section>
        <h1>Exemplo 3</h1>
        <Example3 />
      </section>
    </>
  )
}

export default App;
