import express from 'express';
import mediaController from '../controllers/media.controller.js';  

const router = express.Router({mergeParams: true});


router.get("/search", mediaController.search)

router.get("/genres", mediaController.getGenres)

router.get("/:mediaCategory", mediaController.getList)

router.get("/:mediaType/:mediaId", mediaController.getDetail)



export default router;