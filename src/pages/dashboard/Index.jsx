import React from 'react';
import Sidebar from '../../components/sidebar/Index.jsx'

const Index = ({children}) => {
    return (
        <div className="container-dashboard">
            <Sidebar />

            <section className="main-page">
                {children}
            </section>
        </div>
    )
}

export default Index;
