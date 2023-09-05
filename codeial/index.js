const express = require('express');
const app = express();
const port = 8000;




// Use express router
app.use('/', require('./routes/index'));




app.listen(port, function(err){
    if(err){
        // interpolation way to write the object with string
        // console.log('Server error :', err);
        console.log(`Server error : ${err}`);
    }

    console.log(`Server is running, On port : ${port}`);
})