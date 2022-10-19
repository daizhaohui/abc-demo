module.exports = (mode) => {
  if (mode === 'development') {
    return {
      injects: [
        {
          position: 'header',  
          content: '<script src="//unpkg.byted-static.com/xgplayer/2.31.6/browser/index.js" charset="utf-8"></script>'
        },
        {
          position: 'header',  
          content: '<script src="//unpkg.byted-static.com/xgplayer-hls/2.5.2/dist/index.min.js" charset="utf-8"></script>'
        },
      ],
      devServer: {
        port: 8082,
        proxy: {
          '/api': {
            target: 'http://127.0.0.1:8002',
            pathRewrite: { '^/api': '' }
          }
        }
      },
      mock: {
        timeout: '200-600',
        enabled: false
      },
      theme: {
        enabled: false,
        default: ''
      },
      alias: {}
    };
  } else if (mode === 'production') {
    return {
      injects: [
        {
          position: 'header',  
          content: '<script src="//unpkg.byted-static.com/xgplayer/2.31.6/browser/index.js" charset="utf-8"></script>'
        },
        {
          position: 'header',  
          content: '<script src="//unpkg.byted-static.com/xgplayer-hls/2.5.2/dist/index.min.js" charset="utf-8"></script>'
        },
      ],
      theme: {
        enabled: true,
        default: ''
      },
      alias: {},
      mock: {
        enabled: false
      },
      splitChunks: {
        vendors2: ['moment', 'lodash-es', '@ant-design/icons-vue/*', '@ant-design/icons-svg/*']
      },
      compress: {
        enabled: false,
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      },
      cdn: [
        {
          type: 'css',
          match: false,
          address: 'http://www.xxx.yyy/css'
        },
        {
          type: 'js',
          match: false,
          // (name)=>{
          //   if(name.indexOf('vendors')!==-1) return true;
          //   return false;
          // },
          address: 'http://www.xxx.yyy/js'
        }
      ]
    };
  }
};
