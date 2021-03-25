const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({}, {timestamps:true});

const Submission = mongoose.model('Submission', SubmissionSchema);
module.exports = Submission;