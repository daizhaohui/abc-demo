export default {
  db: {
    type: 'mysql',
    host: 'abc-demo-mysql',
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
