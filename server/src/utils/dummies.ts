import { faker } from '@faker-js/faker';

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
    const falcuties = ["engineering", "business"]
    return {
        _id: lecturerId,
        email,
        name: faker.person.fullName({firstName: lecturerId}),
        falcuty: faker.helpers.arrayElement(falcuties),
    }   
}

export const lecturers = faker.helpers.multiple(generateLecturer, {
    count: 10,
})