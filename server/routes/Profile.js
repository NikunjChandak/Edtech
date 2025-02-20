const express = require("express")
const router =express.Router();


//Importing Middlewares
const { auth,isInstructor} = require("../middlewares/Auth")

const {deleteAccount,updateProfile,getAllUserDetails,updateDisplayPicture} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
// Get Enrolled Courses
//router.get("/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
//router.get("/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************