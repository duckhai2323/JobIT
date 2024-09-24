const analyzerConfig = {
  analyzerMode: process.env.MIX_NODE_ENV == 'hot' ? 'disable' : 'static',
  defaultSizes: 'parsed',
  reportFilename: 'report.html',
  openAnalyzer: false,
  generateStatsFile: false,
  statsFilename: 'stats.json',
  statsOptions: {
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: true,
    modules: true,
    reasons: true,
    children: true,
    source: true,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: true,
  },
};

module.exports = analyzerConfig;
