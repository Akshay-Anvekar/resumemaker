import mongoose from 'mongoose';
import crypto from 'crypto';
import SAMPLE_RESUME from '../../config/resume_sample';
// const {DB} = CONFIG;

const ResumeSchema = new mongoose.Schema({
      resume_id:{
         type:String,
         unique: true, required: true
      },
      name: {
        type: String,
        trim:true,
        required : true,
        default: SAMPLE_RESUME.personal.name
      },
      email: {
          primary: {
            type: String,
            trim: true,
            required : true,
            default: SAMPLE_RESUME.personal.email.primary
          },
          secondry: {
            type: String,
            trim: true,
            required : true,
            default: SAMPLE_RESUME.personal.email.secondry
          }
      },
      phone: {
          primary: {
            type: String,
            trim: true,
            required : true,
            default: SAMPLE_RESUME.personal.phone.secondry
          },
          secondry: {
            type: String,
            trim: true,
            required : true,
            default: SAMPLE_RESUME.personal.phone.secondry
          }
      },
      address: {
          primary: {
            type: String,
            trim: true,
            default: SAMPLE_RESUME.personal.address.primary
          },
          secondry: {
            type: String,
            trim: true,
            default: SAMPLE_RESUME.personal.address.secondry
          }
      },
      summary: {
        type: String,
        trim: true,
        default: SAMPLE_RESUME.summary
      },
      skills :{
          type: Array,
          default: SAMPLE_RESUME.skills
      },
      workexp:{
          type: Array,
          default: SAMPLE_RESUME.workexp
      },
      education:{
          type: Array,
          default: SAMPLE_RESUME.education
      },
      // workexp: [
      //    {
      //     // designation: {type: String, trim: true, lowercase: true},
      //     // company: {type: String, trim: true, lowercase: true},
      //     // city: {type: String, trim: true, lowercase: true}, state: {type: String, trim: true, lowercase: true},
      //     // start: {type: String, trim: true, lowercase: true}, end: {type: String, trim: true, lowercase: true},
      //     // details: [
      //     //    {type: String, trim: true, lowercase: true}
      //     // ],
      //     default: SAMPLE_RESUME.workExp
      //    }
      // ],
      // education: [
      //    {
      //       // degree: {type: String, trim: true, lowercase: true},
      //       // college: {type: String, trim: true, lowercase: true}, 'university': {type: String, trim: true, lowercase: true},
      //       // state: {type: String, trim: true, lowercase: true}, passedout: {type: String, trim: true, lowercase: true}
      //       default: SAMPLE_RESUME.education
      //    },

      // ],
      profile_pic:{
            thumbnail: {
                  url : { type: String },
                  width: {type: Number},
                  height: { type:Number },
                  size: {type: Number}
            },
            original: {
                  url : { type: String },
                  width: {type: Number},
                  height: { type:Number },
                  size: {type: Number}
            }
      },
      created: {
         type: Date,
         default: Date.now
      },
      updated:{ 
         type: Date
      },
      comment: {
         type: String
      }
})



export default mongoose.model('resume', ResumeSchema);