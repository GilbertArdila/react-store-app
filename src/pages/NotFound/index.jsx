import React from 'react';
import Layout from '../../components/Layout';

import './styles.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <Layout>
     

<section class="error-container">
  <span>4</span>
  <span><span class="screen-reader-text">0</span></span>
  <span>4</span>
</section>
  <Link to="/" className="btn btn-primary">Go to main page</Link>
    </Layout>
  )
}

export default NotFound