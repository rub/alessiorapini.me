import React from 'react';
import PropTypes from 'prop-types';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export function SEO({ title, description, pathname, defaultImage, children }) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  defaultImage: PropTypes.string,
  children: PropTypes.node,
};

SEO.defaultProps = {
  title: '',
  description: '',
  pathname: '',
  defaultImage: '',
  children: [],
};

export default SEO;
