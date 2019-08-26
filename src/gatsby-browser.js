exports.onInitialClientRender = (
  _,
  pluginOptions = { enableDuringDevelop: false }
) => {
  if (
    (pluginOptions.enableDuringDevelop ||
      process.env.NODE_ENV === 'production') &&
    typeof drift === 'object' &&
    window.driftAppId
  ) {
    window.drift.SNIPPET_VERSION = '0.3.1';
    window.drift.load(window.driftAppId);
  }
};
