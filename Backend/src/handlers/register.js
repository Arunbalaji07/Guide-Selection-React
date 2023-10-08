import RegisterModel from "../models/register.model.js";

// create new register

export const registerProject = async (req, res) => {
    try {
      const user = await RegisterModel.create({
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
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };

// to get all registeration 

export const getAllProjects = async (req, res) => {
    try {
      const user = await RegisterModel.find();
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };

// to get a single register

export const getSingleProject = async (req, res) => {
    try {
      const user = await RegisterModel.findById(req.params.id);
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };

//   to get particular register with guide name

export const getGuideProject = async (req, res) => {
    try {
      const user = await RegisterModel.find({guide: req.body.guide});
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };