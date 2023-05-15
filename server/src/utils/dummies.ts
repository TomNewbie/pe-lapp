import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

faker.seed(123);

const generateStudentId = () => {
  return faker.number.int({min: 11000, max: 19999}) + "";
}

const generateEmail = (name: string, domain: string) => `${name}@${domain}`

const generateStudent = () => {
  const studentDomain = "student.vgu.edu.vn";
  const majors = ["CSE", "BFA"];
  const studentId = generateStudentId();
  const email = generateEmail(studentId, studentDomain);
  return {
    _id: studentId,
    email,  
    name: faker.person.fullName(),
    intake: faker.number.int({min: 2008, max: 2022}),
    major: faker.helpers.arrayElement(majors),
  }
  
}

export const students = faker.helpers.multiple(generateStudent, {
  count: 10,
})


const generateLecturer = () => {
    const lecturerDomain = "vgu.edu.vn";
    const lecturerId = faker.person.firstName();
    const email = generateEmail(lecturerId, lecturerDomain);
    const falcuty = "Engineering";
    return {
        _id: lecturerId,
        email,
        name: faker.person.fullName({firstName: lecturerId}),
        falcuty,
    }   
}

export const lecturers = faker.helpers.multiple(generateLecturer, {
    count: 10,
})

const files = [
    {
        "name":"01_Ch1 Introduction.pdf",
        "url":"https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2F01_Ch1%20Introduction.pdf?alt=media&token=25998c44-7c45-4e36-8ce7-3afd63816768",
        "refPath":"production/default/01_Ch1 Introduction.pdf"
    },
    {
        "name":"02_Ch2 Software Processes.pdf",
        "url":"https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2F02_Ch2%20Software%20Processes.pdf?alt=media&token=ec6d6ddb-52d0-493f-8d22-90445c3a1b15",
        "refPath":"production/default/02_Ch2 Software Processes.pdf"
    },
    {
        "name":"7 - Deadlock.pdf",
        "url":"https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2F7%20-%20Deadlock.pdf?alt=media&token=13eb8012-e9d7-4045-ba5c-af6dff245974",
        "refPath":"production/default/7 - Deadlock.pdf"
    },
    {
        "name":"Activity_Diagram.pdf",
        "url":"https://firebasestorage.googleapis.com/v0/b/pe-lapp-384707.appspot.com/o/production%2Fdefault%2FActivity_Diagram.pdf?alt=media&token=d3f32e87-fbfa-410d-9478-b8d94053ebac",
        "refPath":"production/default/Activity_Diagram.pdf"
    },
]

const generateContent = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        title: faker.lorem.sentence(),
        files: faker.helpers.arrayElements(files),
        body: faker.lorem.paragraph(),
    }
}

export const contents = faker.helpers.multiple(generateContent, {
    count: 24,
})

const courseNames = [
    "Software Engineering",
    "Operating System",
    "Computer Network",
    "Realtime system",
    "Distributed System",
    "Discrete Math",
    "Data structure and Algorithm",
    "IT security",
]
const lecturerIds = lecturers.map(lecturer => lecturer._id);
const participantIds = students.map(student => student._id);

const generateCourse = (name: string) => {
    const contentIds = contents.map(content => content._id);
    const semesters = ["SS2023", "WS2023"];
    return {
        _id: faker.database.mongodbObjectId(),
        name,
        contents: faker.helpers.arrayElements(contentIds),
        semester: faker.helpers.arrayElement(semesters),
        lecturer_id: faker.helpers.arrayElement(lecturerIds),
        participants: faker.helpers.arrayElements(participantIds),
    }
}

export const courses = courseNames.map(name => generateCourse(name));

const generateExercise = (lecturer: string, course: string) => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.lorem.sentence(),
        files: faker.helpers.arrayElements(files),
        description: faker.lorem.lines(),
        lecturer,
        course,
        deadline: new Date("2023-12-31"),
    }
}

export const exercises = courses.map(course => generateExercise(course.lecturer_id, course._id))