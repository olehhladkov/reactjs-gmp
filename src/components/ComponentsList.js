import React from 'react';

const mark = React.createElement('mark', null, 'React.createElement');

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2>
          A component created using{' '}
          <code>
            <mark>React.Component</mark>
          </code>
        </h2>

        <h3>
          An element created using <code>{mark}</code>
        </h3>
      </header>
    );
  }
}

class Main extends React.PureComponent {
  render() {
    return (
      <main className="main">
        A component created using{' '}
        <code>
          <mark>React.PureComponent</mark>
        </code>
      </main>
    );
  }
}

function ComponentsList() {
  return (
    <div>
      <h1>A functional component</h1>
      <Header />
      <Main />
    </div>
  );
}

export default ComponentsList;
