function http_request(url, method, body, ...headers) {
  console.log(`url: ${url}, method: ${method}, body: `, body);
  console.log('headers', headers);
}

http_request(
  'localhost',
  'POST',
  { name: 'Vinayak' },
  122,
  345,
  222,
  444,
  66778,
  9999
);
