function setupProxy({ tls }) {
  const conf = [
    {
      context: ['/api', '/services', '/management', '/v3/api-docs', '/h2-console', '/auth', '/health'],
      target: `http${tls ? 's' : ''}://localhost:8080`,
      secure: false,
      changeOrigin: tls,
      // devServer: {
      //   client: {
      //     webSocketURL: {
      //       hostname: '4422-85-241-151-186.eu.ngrok.io'
      //     },
      //   }
      // }
    },
  ];
  return conf;
}

module.exports = setupProxy;
