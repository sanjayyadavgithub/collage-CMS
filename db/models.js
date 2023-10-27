const Joi = require('joi');

const deptSchema = Joi.object({
    deptName: Joi.string().min(2).max(50).required(),
    building: Joi.string().min(2).max(50).required(),
    budget: Joi.number().min(0).required()
});

const instructorSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    salary: Joi.string().min(0).required(),
    department_name: Joi.string().min(2).max(50).required()
});

const studentSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    total_credits: Joi.number().min(0).required(),
    department_name: Joi.string().max(50).required()
});

const sectionSchema = Joi.object({
    id: Joi.number().required(),
    semester: Joi.number().min(0).max(8).required(),
    year: Joi.number().min(0).max(4).required()
});

const teachesSchema = Joi.object({
    instructor_id: Joi.number().min(0).required(),
    section_id: Joi.number().min(0).required()
});

module.exports.validateDepartment = (department) => {
    //return Joi.validate(department, deptSchema);
    return deptSchema.validate(department)
};

module.exports.validateInstructor = (instructor) => {
    //return Joi.validate(instructor, instructorSchema);
    return instructorSchema.validate(instructor)
};

module.exports.validateStudent = (student) => {
    //return Joi.validate(student, studentSchema);
    return studentSchema.validate(student)
};

module.exports.validateSection = (section) => {
    //return Joi.validate(section, sectionSchema);
    return sectionSchema.validate(section)
};

module.exports.validateTeaches = (teaches) => {
    //return Joi.validate(teaches, teachesSchema);
    return teachesSchema.validate(teaches)
};
