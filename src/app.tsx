import React from 'react';
import Auth from './Auth';

import styled from 'styled-components';

const AppContainer = styled.div`
    background-color: #F3F7FA;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

const App = () => {
    return (
        <AppContainer>
            <Auth />
        </AppContainer>
    )
}

export default App