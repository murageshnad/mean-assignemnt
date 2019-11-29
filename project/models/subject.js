const mongoose = require('mongoose');

var subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
   credit:{
       type: String,
       required: 'This field is required.'

   }

});



mongoose.model('subject', subjectSchema);