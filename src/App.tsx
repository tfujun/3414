import React from 'react';
import { PageContainer } from './Layout/PageContainer/Styled';
import Header from './Layout/Header/Header';
import Body from './Layout/Body/Body';
import InputField from './Interactive/InputField/InputField';

const App: React.FunctionComponent = () => {

  return (
    <PageContainer flexDirection='column'>
      <Header>
        THis is in the header
      </Header>
      <Body>
        This is outside
      </Body>
        <InputField type='text'></InputField>

    </PageContainer>
  )
}

export default App;
