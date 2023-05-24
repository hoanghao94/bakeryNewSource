const cors_proxy = require('cors-anywhere');

// Cấu hình và khởi động proxy trên cổng 8081
cors_proxy.createServer({
  originWhitelist: [], // Cho phép tất cả các nguồn
}).listen(8081, 'localhost', function() {
  console.log('CORS Anywhere proxy đã được khởi động trên cổng 8081...');
});
