import React from 'react';
import { PageContainer } from './Layout/PageContainer/Styled';
import { BrowserRouter, Routes} from 'react-router-dom';

const App: React.FunctionComponent = () => {

  return (
    <PageContainer flexDirection='column'>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </PageContainer>
  )
}

export default App;
