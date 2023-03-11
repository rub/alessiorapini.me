import React from 'react';
import Layout from '../components/layout';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import Header from '../components/Header/Header';
import Link from '../components/LinkGlassEfx/LinkGlassEfx';
import Hero from '../components/Hero/Hero';
import RubParallax from '../components/RubParallax/RubParallax';
import About from '../components/About/About';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout fullScreen>
      <CustomCursor>
        <Header
          isHome
          navItems={<Link to="/projects" isHome label="Selected works" />}
        />
        <Hero />
        <About />
      </CustomCursor>
      <RubParallax />
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <SEO />;
}
