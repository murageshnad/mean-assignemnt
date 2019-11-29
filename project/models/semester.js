const mongoose = require('mongoose');

var semesterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    
});

// Custom validation for email


mongoose.model('Semester', semesterSchema);


