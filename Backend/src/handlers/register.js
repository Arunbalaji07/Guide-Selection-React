import RegisterModel from "../models/register.model.js";

// get all projects

export const getAllProjects = async (req, res) => {
  try {
    const data = await RegisterModel.find();
    res.json({ data: data });
  } catch (err) {
    console.log(err);
  }
};

// get single project

export const getSingleProject = async (req, res) => {};

// register a new project
export const registerProject = async (req, res) => {
  console.log(req.body);
  try {
    const project = await RegisterModel.create({
      member1: req.body.member1,
      regno1: req.body.regno1,
      phno1: req.body.phno1,
      email1: req.body.email1,
      guide: req.body.guide,
      title: req.body.title,
      member2: req.body.member2,
      regno2: req.body.regno2,
      phno2: req.body.phno2,
      email2: req.body.email2,
    });
    res.json({"data": "created"})
  } catch (err) {
    console.log(err);
  }
};

export const updateProject = async (req, res) => {};

export const deleteProject = async (req, res) => {};
