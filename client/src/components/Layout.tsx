import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import { LayoutProps } from '@interfaces/props.interfaces';

const Layout = ({ children, title }: LayoutProps) => {
  title = `Learn Vocabulary | ${title}`;

  //state de la URL actual
  const [actualUrl, setActualUrl] = useState('');

  //actualizar la url actual cuando se renderize el componente
  useEffect(() => {
    setActualUrl(window.location.href);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />

        <link rel="canonical" href={actualUrl} />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        />

        <meta http-equiv="Content-Language" content="es" />
        <meta
          httpEquiv="content-type"
          content="text/html"
          charSet="UTF-8"
        />
        <meta
          httpEquiv="cache-control"
          content="public, max-age=3024000"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        />

        <meta name="author" content="Jesús García" />
        <meta name="copyright" content="Jesús García" />
        <meta name="DC.Language" content="Spanish" />
        <meta name="Resource-type" content="Document" />
        <meta name="robots" content="ALL" />
        <meta name="distribution" content="global" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:url" content={actualUrl} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={actualUrl} />
        <meta name="twitter:title" content={title} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Nunito:ital,wght@0,300;1,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {children}
    </>
  );
};

export default Layout;
