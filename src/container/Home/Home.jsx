import React from 'react';
import Artist from '../../components/Artist/Artist';
import Episodes from '../../components/Episodes/Episodes';
import Form from '../../components/Form/Form';

function Home(props) {
  return (
    <>
      <Episodes />
      <Artist />
      <Form />
    </>
  );
}

export default Home;