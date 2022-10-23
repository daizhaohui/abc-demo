export default {
  db: {
    type: 'mysql',
    host: 'abc-emo-mysql', // demo-mysql为容器网络别名,用于容器部署。 本地运行可以修改为localhost，或在host文件中添加127.0.0.1 abc-demo-mysql
    port: 3306,
    username: 'root',
    password: 'abc-demo',
    database: 'demo',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    retryDelay: 20000,
  },
  aws: {
    s3: {
      url: 'https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/*',
      bucket: 'daizhaohui-abc-demo',
      accessKeyId: 'AKIA2AHBTNFPQ22P6PNJ',
      secretAccessKey: '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',
    },
  },
};
