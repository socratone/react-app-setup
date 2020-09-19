import React from 'react';
import ReactDom from 'react-dom';
import Main from './main';

const Index = () => {
  return (
    <>
      <Main />
    </>
  );
};

ReactDom.render(<Index />, document.getElementById('root'));
