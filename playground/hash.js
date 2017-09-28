const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

var data = {
  id: 17
}
var token = jwt.sign(data,'12354khbkasg').toString()
console.log(token);

var decode = jwt.verify(token, '12354khbkasg')
console.log(decode);
// var message = "I am pramudit somvanshi"
//
// var hash = SHA256(message).toString()
//
// console.log(message);
// console.log(hash);
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'bkukukbk').toString()
// }
// // token.data.id = 5
// // token.hash = SHA256(JSON.stringify(token.data)).toString()
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'bkukukbk').toString()
//
// if(resultHash===token.hash){
//   console.log('Data was not manipulated');
// }else {
//   console.log('Data badal rhe ho chutiye!');
// }
