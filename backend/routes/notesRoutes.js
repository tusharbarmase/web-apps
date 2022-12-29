const express = require("express");
const {
  createNote,
  getNotes,
  getNote,
  deleteNote,
  updateNote,
} = require("../controllers/notesController");
const router = express.Router();

router.get("/", getNotes);

router.post("/", createNote);

router.get("/:id", getNote);

router.delete("/:id", deleteNote);

router.patch("/:id", updateNote);

module.exports = router;
