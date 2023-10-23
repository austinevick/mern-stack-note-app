import express from "express";
import Note from "../model/Note.js";

const router = express.Router();

/// GET NOTE
router.route('/note').get(async (req, res) => {
    try {
        const note = await Note.find({});
        return res.status(201).json({
            status: 200,
            data: note
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            data: error.message
        });
    }
});

/// CREATE NOTE
router.route('/note').post(async (req, res) => {
    try {
        const note = Note(req.body);
        const savedNote = await note.save();
        return res.status(201).json({
            status: 201,
            data: savedNote
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            data: error.message
        });
    }
});

/// UPDATE NOTE
router.route('/note/:id').put(async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id);
        return res.status(200).json({
            status: 200,
            data: note
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            data: error.message
        });
    }
});

/// DELETE NOTE
router.route('/note/:id').delete(async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: 200,
            data: note
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            data: error.message
        });
    }
});



export default router;
