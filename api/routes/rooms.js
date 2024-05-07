import express from "express";
import {
  allRoom,
  createRoom,
  deleteRoom,
  getRoom,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//
router.post("/:hotelid", verifyAdmin, createRoom);

// update
router.put("/:hotelid", verifyUser, updateRoom);

// delete
router.delete("/:id/:hotelid", verifyUser, deleteRoom);

// get
router.get("/:id", verifyUser, getRoom);

// get all
router.get("/", verifyAdmin, allRoom);

export default router;
