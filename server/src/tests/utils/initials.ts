export const lecturers = [
    {
      name: "Dr. Sarah Lee",
      _id: "sarahlee@example.com",
      avatar: "https://example.com/avatar/sarahlee.jpg",
      phone_number: "111-111-1111",
      faculty: "Computer Science"
    },
    {
      name: "Dr. Michael Johnson",
      _id: "michaeljohnson@example.com",
      avatar: "https://example.com/avatar/michaeljohnson.jpg",
      phone_number: "222-222-2222",
      faculty: "Business Administration"
    },
    {
      name: "Dr. Lisa Chen",
      _id: "lisachen@example.com",
      avatar: "https://example.com/avatar/lisachen.jpg",
      phone_number: "333-333-3333",
      faculty: "Psychology"
    }
  ]

export const students = [
    {
      name: "John Doe",
      _id: "17028@student.vgu.edu.vn",
      avatar: "https://example.com/avatar/johndoe.jpg",
      phone_number: "1234567890",
      major: "Computer Science",
      intake: 2022
    },
    {
      name: "Jane Smith",
      _id: "17018@student.vgu.edu.vn",
      avatar: "https://example.com/avatar/janesmith.jpg",
      phone_number: "0987654321",
      major: "Business Administration",
      intake: 2021
    },
    {
      name: "Bob Johnson",
      _id: "18028@student.vgu.edu.vn",
      avatar: "https://example.com/avatar/bobjohnson.jpg",
      phone_number: "555-555-5555",
      major: "Psychology",
      intake: 2023
    }
  ]

export const courses = [
    {
      name: "Course A",
      content: "6020f0ed02e4646ec5a5e825",
      picture: "http://example.com/image1.jpg",
      semester: "Fall 2022",
      duration: "3 months",
      lecturer_id: "sarahlee@example.com",
      participants: [
        {
            email: "17028@student.vgu.edu.vn",
            progress: 75,
        },
        {
            email: "17018@student.vgu.edu.vn",
            progress: 100,
        },
      ],
    },
    {
      name: "Course B",
      content: "6020f0ed02e4646ec5a5e825",
      picture: "http://example.com/image2.jpg",
      semester: "Spring 2022",
      duration: "4 months",
      lecturer_id: "sarahlee@example.com",
      participants: [
        {
          email: "17028@student.vgu.edu.vn",
          progress: 75,
        },
        {
          email: "18028@student.vgu.edu.vn",
          progress: 100,
        },
      ],
    },
  ]