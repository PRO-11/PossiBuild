const mongoose = require('mongoose');
const connectToMongo=()=>{
   mongoose
   .connect(process.env.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
   })
   .then((data) => {
     console.log(`Mongodb connected with server: ${data.connection.host}`);
   });
}

module.exports=connectToMongo