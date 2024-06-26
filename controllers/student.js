import express from "express";

const allStudents = (req, res) => {
    res.send("All students");
};
const updateStudent = (req, res) => {
    res.send("Update student");
};
const createStudent = (req, res) => {
    res.send("Create student");
};
const deleteStudent = (req, res) => {
    res.send("Delete student");
};

export {allStudents, updateStudent, createStudent, deleteStudent}
