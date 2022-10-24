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
    //AKIA2AHBTNFPUYSL52F2,Qhg7KCVz5eQvyEqCYxvnhNFrnRRsZ4ql8qTFy3QP//
    s3: {
      url: 'https://daizhaohui-abc-demo.s3.ca-central-1.amazonaws.com/*',
      bucket: 'daizhaohui-abc-demo',
      accessKeyId: '',
      secretAccessKey: ''
    },
  },
  port: 8002,
};
