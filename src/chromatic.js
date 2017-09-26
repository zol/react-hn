// Note that how you check if code is running in development may differ in your app
if (process.env.NODE_ENV === 'development') {
  const chromatic = require('react-chromatic').default;

  chromatic({
    appCode: 's684zqqn8f',
    // components: [Array, Of, Imported, Or, Required, Components],
    // Alternatively, if your app is built with webpack, you can create a require context:
    componentContext: [
      // This will find all files in the components directory or subdirectories of it
      require.context('.', true, /\/[^.]*\.js/),
      // require.context('./screens', true, /\/[^.]*\.js/),
    ],
  });
}
