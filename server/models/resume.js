import mongoose from 'mongoose';
import crypto from 'crypto';
import CONFIG from '../../config/resume_sample';
const {DB} = CONFIG;

const ResumeSchema = new mongoose.Schema({
      personal :{
          name: {
            type: String,
            trim:true,
            required : true,
            unique: true
          },
          email: {
              primary: {
                type: String,
                trim: true,
                required : true,
                unique: true
              },
              secondry: {
                type: String,
                trim: true,
                required : true,
                unique: true
              }
          },
          phone: {
              primary: {
                type: String,
                trim: true,
                required : true,
                unique: true
              },
              secondry: {
                type: String,
                trim: true,
                required : true,
                unique: true
              }
          },
          address: {
            type: String,
            trim:true
          }
      },
      summary: {
        type: String,
        trim: true
      }
      skills :[
        {
           type: String,
           trim: true
        }
      ],
      workexp: [
         {
          designation: {type: String, trim: true, lowercase: true},
          company: {type: String, trim: true, lowercase: true},
          city: {type: String, trim: true, lowercase: true}, state: {type: String, trim: true, lowercase: true},
          start: {type: String, trim: true, lowercase: true}, end: {type: String, trim: true, lowercase: true},
          details: [
             {type: String, trim: true, lowercase: true}
          ],
         }
      ],
      education: [
         {
            degree: {type: String, trim: true, lowercase: true},
            college: {type: String, trim: true, lowercase: true}, 'university': {type: String, trim: true, lowercase: true},
            state: {type: String, trim: true, lowercase: true}, passedout: {type: String, trim: true, lowercase: true}
         }
      ],
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