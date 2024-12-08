import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AdminApp from './AdminApp'; // Import the simplified admin app

ReactDOM.render(
    <BrowserRouter>
        <AdminApp />
    </BrowserRouter>,
    document.getElementById('root')
);
