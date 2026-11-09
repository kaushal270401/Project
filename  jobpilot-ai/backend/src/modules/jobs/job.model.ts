import mongoose, {Schema , type Model}from "mongoose";
import type {Job} from './jobs.types.js'


const jobSchema = new Schema<Job>({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    company:{
        type:String,
        required:true,
        trim:true,
    },
    location:{
        type:String,
        default:null,
    },
    salary:{
        type:String,
        default:null
    },
    experience:{
        type:String,
        default:null
    },
    jobType:{
        type:String,
        default:null
    },
    workMode:{
        type:String,
        default:null
    },
    description: {
      type: String,
      default: null,
    },
    skills: {
      type: [String],
      default: [],
    },
    jobUrl: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    postedAt: {
      type: Date,
      default: null,
    },
    scrapedAt: {
      type: Date,
      default: Date.now,
    },
} ,  {
    timestamps: true,
  })

export const JobModel: Model<Job> = mongoose.models.Job || mongoose.model<Job>('Job', jobSchema);

jobSchema.index(
  { source: 1, jobUrl: 1 },
  { unique: true }
);