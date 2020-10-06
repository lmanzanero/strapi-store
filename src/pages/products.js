import React from 'react';
import Layout from '../components/layout';
import Product from '../components/product';

export default function Products() {
  return (
    <Layout>
      <h1>Products</h1>
      <section>
        <h2>Category 1</h2>
      </section>
      <section>
        <h2>Category 2</h2>
      </section>
      <section>
        <h2>Category 3</h2>
      </section>
      <section>
        <h2>Category 4</h2>
      </section>
      <section>
        <h2>Category 5</h2>
      </section>
      <Product/>
    </Layout>
  );
}