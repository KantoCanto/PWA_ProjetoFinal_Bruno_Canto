import express from 'express';
import mediaController from '../controllers/media.controller.js';  

const router = express.Router({mergeParams: true});


router.get("/search", mediaController.search)

router.get("/genres", mediaController.getGenre)

router.get("/details/mediaId", mediaController.getDetail)

router.get("/:mediaCategoty", mediaController.getList)

export default router;
