// const mongoose = require("mongoose");

// const contactSchema = mongoose.Schema(
//   {
//     user_id: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     name: {
//       type: String,
//       required: [true, "Please add the contact name"],
//     },
//     email: {
//       type: String,
//       required: [true, "Please add the email id "],
//     },
//     phone: {
//       type: String,
//       required: [true, "Please add the phone number "],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Contact", contactSchema);

const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
  currdegree: {
    type: String,
    required: [true, "Please enter "],
  },
  currcourse: {
    type: String,
    required: [true, "Please enter "],
  },
  // curryear: {
  //   type: Number,
  //   required: [true, "Please enter "],
  // },
  passyear: {
    type: Number,
    required: [true, "Please enter "],
  },
  // percentage: {
  //   type: Number,
  //   // required: [true, "Please enter "],
  // },
  // cgpa: {
  //   type: Number,
  //   // required: [true, "Please enter "],
  // },
});

const skillsSchema = mongoose.Schema({
  skillss: {
    type: String,
    required: [true, "Please enter "],
  },
  interests: {
    type: String,
    // required: [true, "Please enter "],
  },
});

const projectSchema = mongoose.Schema({
  // projectTitle: {
  //   type: String,
  //   // required: [true, "Please enter "],
  // },
  // projectDesc: {
  //   type: String,
  //   // required: [true, "Please enter "],
  // },
  projectLink: {
    type: String,
    // required: [true, "Please enter "],
  },
  // techno: {
  //   type: String,
  //   // required: [true, "Please enter "],
  // },
});

const personalSchema = mongoose.Schema({
  linkedIn: {
    type: String,
  },
  github: {
    type: String,
  },
  // leetCode: {
  //   type: String,
  // },
  insta: {
    type: String,
  },
  // wp: {
  //   type: String,
  // },
  // facebook: {
  //   type: String,
  // },
  // twitter: {
  //   type: String,
  // },
});

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    fname: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    // lname: {
    //   type: String,
    //   required: [true, "Please add the contact name"],
    // },
    // enrollment: {
    //   type: Number,
    //   // required:[true]
    // },
    // dob: {
    //   type: String,
    //   // required: [true, "Please add the contact name"],
    // },
    gender: {
      type: String,
      required: [true, "Please enter your gender"],
    },
    usertype: {
      type: String,
      required: [true, "Select one"],
    },
    // username: {
    //   type: String,
    //   // required: [true, "Please add the contact name"],
    // },
    email: {
      type: String,
      required: [true, "Please add the email id "],
    },
    education: educationSchema,
    skills: skillsSchema,
    project: projectSchema,
    personalInfo: personalSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
