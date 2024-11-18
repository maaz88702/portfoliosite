const mongoose = require('mongoose');
mongoose.connect(process.env.CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connected successfully...");
}).catch((err) => {
    console.log(`some error occurs ${err}`);
})