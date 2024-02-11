import express from 'express';
import {body} from "express-validator";
import favoriteController from "../controllers/favorite.controller.js";
import userController from "../controllers/user.controller.js";
import {validate} from "../handlers/request.handler.js";
import userModel from "../models/user.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

//register route
router.post(
    "/register", 
    body("username")
        .exists().withMessage("Username is required")
        .isLength({min: 6}).withMessage("Usernames must have at least 6 characters")
        .custom(async value => {
            const user = await userModel.findOne({username: value});
            if(user){
                return Promise.reject("Username is already in use")
            }
        }),
    body("password")
        .exists().withMessage("Password is required")
        .isLength({min: 9}).withMessage("Passwords must have at least 9 characters"),
    body("confirmPassword")
        .exists().withMessage("Confirmation password is required")
        .isLength({min: 9}).withMessage("Confirmation passwords must match the password chosen")
        .custom((value, { req }) => {
            if(value !== req.body.password) throw new Error("Passwords must match")
            return true;
        }),
    body("displayName")
        .exists().withMessage("Display name is required")
        .isLength({min: 4 }).withMessage("Display names must have at least 4 characters"),
    validate,
    userController.register
)
//login route
router.post(
    "/login",
    body("username")
        .exists().withMessage("Username is required")
        .isLength({min: 6}).withMessage("Username is required"),
    body("password")
        .exists().withMessage("Password is required")
        .isLength({min: 9}).withMessage("Password is required"),
    validate,
    userController.login
)
//update password route
router.put(
    "/update-password",
    tokenMiddleware.auth,
    body("password")
        .exists().withMessage("Password is required")
        .isLength({min: 9}).withMessage("Passwords must have at least 9 characters"),
    body("newPassword")
        .exists().withMessage("New Password is required")
        .isLength({min: 9}).withMessage("New Passwords must have at least 9 characters"),
    body("confirmNewPassword")
        .exists().withMessage("Confirmation for the new password is required")
        .isLength({min: 9}).withMessage("Confirmation passwords must match the password chosen")
        .custom((value, { req }) => {
            if(value !== req.body.newPassword) throw new Error("Passwords must match")
            return true;
        }),
    validate,
    userController.updatePassword
)

//get user data route
router.get(
    "/info",
    tokenMiddleware.auth,
    userController.getInfo
)
//get user favorites route
router.get(
    "/favorites",
    tokenMiddleware.auth,
    favoriteController.getUserFavorites
)
//add favorites route
router.post(
    "/favorites",
    tokenMiddleware.auth,
    body("mediaType")
        .exists().withMessage("mediaType is required")
        .custom(type => ["movie", "tv"].includes(type)).withMessage("mediaType invalid"),
    body("mediaId")
        .exists().withMessage("mediaId is required")
        .isLength({min: 1}).withMessage("mediaId cannot be empty"),
    body("mediaTitle")
        .exists().withMessage("mediaTitle is required"),
    body("mediaPoster")
        .exists().withMessage("mediaPoster is required"),
    body("mediaRate")
        .exists().withMessage("mediaRate is required"),
    validate,
    favoriteController.addFavorite
)
//remove favorites route
router.delete(
    "/favorites/:favoriteId",
    tokenMiddleware.auth,
    favoriteController.removeFavorite
)


export default router;