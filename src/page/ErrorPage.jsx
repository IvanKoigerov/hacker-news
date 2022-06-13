import React from "react";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
   return (
      <main className='page'>
         <section className='section'>
            <div className="error-box">
               <h1 className="title">Page Not Found</h1>
               <Link className="link error-link" to="/">back to the home page</Link>
            </div>
         </section>
      </main>
   )
}

export default ErrorPage;
