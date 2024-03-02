import Course from "../models/course.model.js";

export async function createCourse(req, res) {
    try {
        const course = new Course(req.body)
        await course.save()
        res.status(201).send(course);

    } catch (e) {
        res.status(400).send(e)
    }
}

export async function getAllCourses(req, res) {
    try {
        const courses = await Course.find({});
        res.send(courses)
    } catch(e) {
        res.status(500).send(e)
    }
}

export async function getCourseById(req, res) {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
          return res.status(404).send();
        }
        res.send(course);
      } catch (e) {
        res.status(500).send(e);
      }
}

export async function updateCourse(req, res) {
    try {
      const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!course) {
        return res.status(404).send();
      }
      res.send(course);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  export async function deleteCourse(req, res) {
    try {
      const course = await Course.findByIdAndDelete(req.params.id);
      if (!course) {
        return res.status(404).send();
      }
      res.status(200).send(course);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  
  /*review object use cases:

  -create review: can call updateCourse() after locally adding review to course.reviews
  - delete review: can call updateCourse() after locally removing review from course.reviews
  - edit review: updateCourse() after locally editing it 
  - get reviews: no call needed, reviews retrieved w/ course GET req. 

  ie: no need to add more routes. handle reviews in front end only (?)

  */