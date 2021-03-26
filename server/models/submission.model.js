const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
        user: {
            type: String,
        },
        category: {
            type: String ,
        },

        imageUrl: {
            type: String,
        },

        videoURL: {
            type: String,
        },

        description: {
            type: String
        }
    },
    {timestamps:true}
);

const Submission = mongoose.model('Submission', SubmissionSchema);
module.exports = Submission;