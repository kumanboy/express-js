import express from "express";
const router = express.Router();
router.get("/all", (req, res) => {
    res.send("All teacher");
});
router.put("/update", (req, res) => {
    res.send("Update teacher");
});
router.post("/create", (req, res) => {
    res.send("Create teacher");
});
router.delete("/delete", (req, res) => {
    res.send("Delete teacher");
});
export default router;
