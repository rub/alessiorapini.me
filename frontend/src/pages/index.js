import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import RubParallax from '../components/RubParallax/RubParallax';
import { SEO } from '../components/seo';

function IndexPage() {
  return (
    <Layout fullScreen>
      <CustomCursor>
        <Header navItems={<Link to="/projects">Selected works</Link>} />
        <Hero />
        <Footer />
      </CustomCursor>
      <RubParallax />
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <SEO />;
}
