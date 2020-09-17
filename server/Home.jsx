import React from 'react';

const Home = () => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>My Lunch</title>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body style={{ fontFamily: 'Open Sans' }}>
      <h1 style={{ textAlign: 'center' }}>What&apos;s for Lunch?</h1>
      <div id="content" />
      <script src="lib/vendors~main.Bundle.js" />
      <script src="lib/main.Bundle.js" />
    </body>
  </html>
);

export default Home;
