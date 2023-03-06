# vgupe2023_team2
## Project: [LAPP](https://docs.google.com/document/d/1-nmSOiMTKfd_a97TnvdPY18_VqLa1RAgG1yS37_zXLo/edit)

## Members:
 1. Phan Chí Thọ: https://gitlab.com/TomNewbie (17232)
 2. Trần Nguyễn Minh Quân: https://gitlab.com/17640 (17640)
 3. Lê Hoàng Kim Thanh https://gitlab.com/Kimthanh11 (18047) (Leader)
 4. Nguyễn Lê Anh Quân https://gitlab.com/WataNekko (18875)
 5. Phạm Nguyễn Đan Quỳnh  https://gitlab.com/pndquyynh (17937) 
 6. Lê Hoàng Đăng Nguyên https://gitlab.com/NguyenLe1605 (17028)
 7. Vương Khánh Linh https://gitlab.com/peLinh (18070)
 8. Hoàng Minh Thông https://gitlab.com/Shwooshie (17995)

## Use case

Use-Case Diagram

- 2 Primary Actors: Teacher and Student

- 17 use cases

<img src="images/usecase.jpg" width="500">


### Actor: Teacher


#### 1. Create Course:
| Use Case ID | Create Course_1 |
| ------------| ---------------|
| Use Case Name | Create Course | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Quan Nguyen Le Anh|
| Date Last Updated |  05/03/2023|


|Actors|  Teacher|
|-----| -----|
|Description|  Teacher creates course for students to join|
|Trigger|  Teacher clicks the “Create Course” button|
|Preconditions|  The lecturer is logged in to the site with their account.|
||The lecturer has the necessary permissions to create a course.|
||The lecturer has all the necessary information and materials to create the course.|
|Postconditions|  The course is created and published on the site.  |
||The lecturer can edit or update the course information at any time.|
||The lecturer can delete the course if necessary.|
|Priority|  high|
| Normal Flow | 1. The lecturer navigates to the "Create Course" page.|
||2. The lecturer fills in the required information for the course, including the course |title, description, objectives, and materials.
||3. The lecturer adds a course image or video to make the course more attractive to |potential students.
||4. The lecturer saves the course information.|
||5. The course is now published and available for students to join.|
|Alternative Flows| Alternative Flow 1: The teacher cancels the creation of the new course|
||1. The teacher decides to cancel the creation of the new course|
||2. The teacher clicks the “Cancel” button|
||3. Confirmation box is shown|
||4. The creation of the new course is canceled and the teacher is redirected back to the home page |
|Exceptions| The teacher encounters an error when creating the new course. |
||1. An error occurs while creating the course (such as missing information or invalid data) |
||2. The system prompts the lecturer to correct the errors before publishing the new course. |
|Special Requirements|  |
|Notes and Issues| |


#### 2. Modify Course:
| Use Case ID | Modify Course_2 |
| ------------| ---------------|
| Use Case Name | Modify Course | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Nguyen Le Hoang Dang|
| Date Last Updated | 05/03/2023|


|Actors| Teacher|
|-----| -----|
|Description| Teacher modifies the Course to reflect changes in the course content, structure, or schedule|
|Trigger| Teacher clicks the “Modify Course” button|
|Preconditions| The teacher  must be logged in to the learning system.|
||The teacher must have permission to modify the course.|
|Postconditions| The course has been modified to reflect the teacher's changes, or remains unchanged if modifications were not saved.|
||Students enrolled in the course can access the updated course information.|
|Priority| medium|
|Normal Flow|1. The teacher selects the course they wish to modify from the list of courses available to them.|
||2. The teacher navigates to the course editing interface within the learning system.|
||3. The teacher makes the necessary changes to the course content, structure, or schedule, using the editing tools provided by the learning system. |
||4. The teacher saves the changes to the course.|
||5. The learning system confirms that the changes have been saved and updates the course information accordingly. |
|Alternative Flows|Alternate Scenario 1: teacher cancels course modifications.|
||1. The teacher decides not to make the changes to the course after all.|
||2. The teacher navigates away from the course editing interface without saving any changes.|
||3. The learning system confirms that no changes were made to the course.|
|Exceptions|Teacher encounters an error when trying to modify the course.|
||1. The teacher receives an error message when attempting to save changes to the course.|
||2. The learning system provides the teacher with information about the error and suggestions for resolving it.|
||3. The teacher  makes the necessary changes to resolve the error and tries again to save the modifications to the course.|
|Special Requirements| |
|Notes and Issues||


#### 3. Upload materials
| Use Case ID | Upload materials_3 |
| ------------| ---------------|
| Use Case Name | Upload materials | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Nguyen Le Hoang Dang|
| Date Last Updated | 05/03/2023|


|Actors| Teacher|
|-----| -----|
|Description| Teacher can upload materials to the Course|
|Trigger| Teacher clicks the “Upload Material” button|
|Preconditions|The teacher must be logged in to the learning system.|
||The teacher must have permission to upload materials.|
||The course is already existed.|
|Postconditions| The material has been uploaded to the learning system and can be accessed by the teacher and students enrolled in the course.|
|Priority| high|
|Normal Flow|1. The teacher selects the course they wish to upload materials for from the list of courses available to them.|
||2. The teacher navigates to the materials upload interface within the learning system.|
||3. The teacher selects the type of material they wish to upload (e.g., document, video, audio).|
||4. The teacher selects the file they wish to upload from their computer or other device.|
||5. The teacher adds a title and description for the material.|
||6. The teacher clicks the "upload" button.|
||7. The learning system confirms that the file has been uploaded. |
|Alternative Flows|Alternate Scenario 1: Teacher cancels material upload.|
||1. The teacher decides not to upload the material after all.|
||2. The teacher navigates away from the materials upload interface without uploading any files.|
||3. The learning system confirms that no files were uploaded.|
|Exceptions| Teacher encounters an error when trying to upload materials.|
||1. The teacher receives an error message when attempting to upload the file.|
||2. The learning system provides the teacher with information about the error and suggestions for resolving it.|
||3. The teacher makes the necessary changes to resolve the error and tries again to upload the file.|
|Special Requirements|  |
|Notes and Issues||


#### 4. Modify Material:
| Use Case ID | Modify Material_4 |
| ------------| ---------------|
| Use Case Name | Modify Material | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Nguyen Le Hoang Dang|
| Date Last Updated | 05/03/2023|


|Actors|  Teacher|
|-----| -----|
|Description|  Teacher can modify the materials that he/she has uploaded before|
|Trigger|  Teacher clicks the “Modify” button|
|Preconditions|  There exists a material in the first place|
||The teacher must be logged in to the learning system.|
||The teacher must have permission to modify materials.|
|Postconditions|  The materials are modified and updated so that all students can see them|
||The teacher can update the link to the material in the course content or share it with students via another method.|
|Priority|  high|
|Normal Flow| 1. The teacher selects the course they wish to modify materials for from the list of courses available to them.|
||2. The teacher navigates to the materials editing interface within the learning system.|
||3. The teacher selects the material they wish to modify.|
||4. The teacher makes the necessary changes to the material using the editing tools provided by the learning system.|
||5. The teacher saves the changes to the material.|
||6. The learning system confirms that the changes have been saved and updates the material information accordingly.|
|Alternative Flows| Alternate Scenario 1: Teacher cancels material modifications.|
||1. The teacher decides not to make changes to the material after all.|
||2. The teacher navigates away from the materials editing interface without saving any changes.|
||3. The learning system confirms that no changes were made to the material.|
|Exceptions| Teacher encounters an error when trying to modify materials.|
||1. The teacher receives an error message when attempting to save changes to the material.|
||2. The learning system provides the teacher with information about the error and suggestions for resolving it.|
||3. The teacher makes the necessary changes to resolve the error and tries again to save the modifications to the material.|
|Special Requirements|  |
|Notes and Issues| |

#### 5. Track Students’ Activities:
| Use Case ID | Track Students’ Activities_5 |
| ------------| ---------------|
| Use Case Name | Track Students’ Activities | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Quan Tran Nguyen Minh|
| Date Last Updated | 05/03/2023 |


|Actors|  Teacher|
|-----| -----|
|Description|  Teacher can track student’s activities by seeing how much time they spend on the exercises, tasks,...|
|Trigger|  Teacher clicks the “Track Activity” button|
|Preconditions|  |
|Postconditions|  Teacher knows the progress of student by knowing how much time he/she spends on exercises, tasks, whether he/she finishes the exercises or not…|
|Priority|  high|
|Normal Flow| 1. Teacher searches for the student’s name/id that of whom he/she wants to see the learning activities, progress|
| | 2. Teacher clicks the “Track Activities” button to see the student’s activities/progress|
|Alternative Flows| |
|Exceptions| |
|Special Requirements|  |
|Notes and Issues| |


#### 6. Answer questions
| Use Case ID | Answer questions_6 |
| ------------| ---------------|
| Use Case Name | Answer questions | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Quan Tran Nguyen Minh|
| Date Last Updated | 05/03/2023 |


|Actors| Teacher|
|-----| -----|
Description| Teacher answers students’ questions in the chatbox|
|Trigger| Teacher clicks the “Track Activity” button|
|Preconditions| The Student must already attend the Course|
||There exists a student posing a question|
|Postconditions| Teacher has answered the Student’s question and the teacher's answer message has been successfully delivered to the Student.|
|Priority| high|
|Normal Flow|  1. Teacher clicks the Student’s name on the chat list that he/she wants to reply first |
||2. Teacher write message contents|
||3. Teacher clicks “Send Message”|
||4. The System delivers the message and notify Teacher that his/her reply has delivered successfully|
|Alternative Flows|At step 1,|
||1.1. Teacher searches Student’s name|
||1.2. Teacher selects a Student to answer question|
||Continue to step 2 as in the Normal Flow|
||At step 2, |
||2.1. Teacher clicks “Attachment”|
||2.2. Teacher selects a media (audio, images)|
||2.3. Teacher chooses the media|
||Continue to step 3 as in the Normal Flow|
|Exceptions|At step 2.2, if there is no media, show a pop-up to notify teacher, then end|
||At step 2.2, if the file type (pdf, mp3, wav…) of the selected media is not supported by the system, then show a pop-up to notify teacher, then end|
||At step 2.2, if the capacity of the selected media exceeds the allowable capacity of the system, then show a pop-up to notify teacher, then end|
|Special Requirements| |
|Notes and Issues||


#### 7. Upload exercise
| Use Case ID | Upload exercise_7 |
| ------------| ---------------|
| Use Case Name | Upload exercise | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Quan Tran Nguyen Minh|
| Date Last Updated | 03/03/2023 |


| Actors | Teacher |
| ------- | ------ |
| Description | Teacher uploads exercise to the Course |
| Trigger | Teacher clicks the “Upload Exercise” button |
| Preconditions | There exists a Course |
| Postconditions | Exercises are uploaded to the Course and students are informed of the exercise |
| Priority | high |
| Normal Flow |1. Teacher clicks the “Upload Exercise” button |
| | 2. Teacher chooses the Exercise file to upload|
||3. Teacher clicks “Submit” to confirm the uploading|
||4. The system notifies teacher that Exercise is uploaded successfully|
||5. The system notifies the Students in the Course of the new Exercise|
| Alternative Flows | |
| Exceptions | At step 2, if there is no file, then show a pop-up to notify teacher, then end|
| Special Requirements |  |
| Notes and Issues | |




#### 8. Delete Exercise:
| Use Case ID | Delete Exercise_8 |
| ------------| ---------------|
| Use Case Name | Delete Exercise | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Quan Nguyen Le Anh|
| Date Last Updated | 05/03/2023 |


|Actors| Teacher|
|----------|--------| 
|Description| Teacher can delete the exercises if they are irrelevant |
|Trigger| Teacher clicks the “Delete Exercise” button|
|Preconditions| The lecturer is logged in to the site with their account.|
||The lecturer has the necessary permissions to delete exercises in a course.|
||The course containing the exercise and the exercise to be deleted has already been created and published.|
|Postconditions| The exercise is deleted from the Course|
|Priority| medium|
|Normal Flow|1. The lecturer navigates to the course page containing the exercise they wish to delete.|
||2. The lecturer clicks on the "Delete Exercise" button for the specific exercise they want to delete.|
||3. The system displays a confirmation dialog box, asking the lecturer to confirm the deletion.|
||4. The lecturer confirms the deletion.|
||5. The system deletes the exercise and notifies the lecturer of the successful deletion.|
|Alternative Flows|Alternative Flow 1: Cancel deletion|
||1. The lecturer decides to cancel the exercise deletion|
||2. The lecturer clicks the “Cancel” button|
||3. The exercise is not deleted|
|Exceptions|The teacher encounters an error when deleting.|
||An error occurs while deleting the exercise|
||The system informs the lecturer of the error and provides guidance on how to proceed.|
|Special Requirements| |
|Notes and Issues||


#### 9. Modify Exercise:
| Use Case ID | Modify Exercise_9 |
| ------------| ---------------|
| Use Case Name | Modify Exercise | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Quan Nguyen Le Anh|
| Date Last Updated | 05/03/2023 |

|Actors| Teacher|
|----------|--------| 
|Description| Teacher makes changes to the existing exercise|
|Trigger| Teacher clicks the “Modify Exercise” button|
|Preconditions| The lecturer is logged in to the site with their account.|
||The lecturer has the necessary permissions to modify exercises in a course.|
||The course containing the exercise and the exercise to be modified has already been created and published.|
|Postconditions| The exercise is modified and updated|
|Priority| medium|
|Normal Flow|1. The teacher navigates to the course page containing the exercise they wish to modify.|
||2. The teacher clicks on the "Edit Exercise" button for the specific exercise they want to modify. |
||3. The system displays the existing exercise information (such as the exercise prompt, instructions, sample solution, etc.).|
||4. The teacher modifies the exercise information as desired.|
||5. The lecturer saves the modified exercise information.|
||6. The system updates the exercise information and notifies the lecturer of the successful modification.|
|Alternative Flows|Alternative Flow 1: Cancel modification|
||1. The lecturer decides to cancel the exercise modification|
||2. The lecturer clicks the “Cancel” button|
||3. Confirmation box is shown|
||4. The modification is not saved|
|Exceptions|The teacher encounters an error when modifying.|
||1. An error occurs while modifying the exercise (such as missing information or invalid data)|
||2. The system prompts the lecturer to correct the errors before submitting the modification.|
|Special Requirements| |
|Notes and Issues||


#### 10. Evaluate Students’ Performance
| Use Case ID | Evaluate Students’ Performance_10 |
| ------------| ---------------|
| Use Case Name | Evaluate Students’ Performance | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Tho Phan Chi|
| Date Last Updated | 05/03/2023 |


|Actors| Teacher|
|----------|--------| 
|Description| Teacher can evaluate students’ performance to determine he/she passes the |Course or not at the end of the Course|
|Trigger| Teacher clicks the “Evaluate Performance” button|
|Preconditions| |
|Postconditions| Teacher can see the performance (how many exercises are accomplished, % of progress,...) |
|Priority| high|
|Normal Flow|1. Teacher searches for the student’s id/name|
||2. Teacher clicks the “Evaluate Performance” button to see the student’s performance|
||3. A green notification text with percentage to demonstrate that the student is pass the course|
|Alternative Flows|The student didn’t pass the course|
||3.1 A red notification text with percentage to show the student didn’t pass the course|
|Exceptions|Student ID not found|
||2.1 System notifies teachers that the ID not found|
||2.2 Back to step 1|
|Special Requirements| |
|Notes and Issues||

### Actor: Teacher and Student


#### 11. Log in
|Use Case ID| Log in_11 |
|----------|--------| 
|Use Case Name|  Log in |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  Tho Phan Chi|
|Date Last Updated|  05/03/2023|


|Actors| Teacher, Student|
|----------|--------| 
|Description| Teacher/Student logs in to the system using his/her account|
|Trigger| Teacher/Student clicks the “Log in” button|
|Preconditions| Teacher/Student has already created an account|
|Postconditions| Teacher/Student logs in successfully and go to the Teacher’s / Student’s view/interface|
|Priority| high|
|Normal Flow|1. Teacher/Student feeds in his/her id/username and password|
||2. Teacher/Student clicks the “Log in” button|
|Alternative Flows|1.1 Teacher/ Student click forget password|
||1.2 Go to step 2.3|
|Exceptions|At step 2, if teacher/Student fails to log in, then send notification|
||2.1. The system prompts the user to click “Forgot Password”|
||2.2. User clicks “Forgot Password” button|
||2.3. The system sends the OTP code to the email/phone number that user used to create |account
||2.4. User creates new password|
||2.5. User logs in with new password|
|Special Requirements| |
|Notes and Issues||



#### 12. Log out
|Use Case ID| Log out_12 |
|----------|--------| 
|Use Case Name|  Log out |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  Tho Phan Chi|
|Date Last Updated|  05/03/2023|


|Actors| Teacher, Student|
|----------|--------| 
|Description| Teacher/Student logs out off the account after finishing work|
|Trigger| Teacher/Student clicks the “Log out” button|
|Preconditions| |
|Postconditions| Teacher/Student successfully logs out|
|Priority| high|
|Normal Flow|1. Teacher/Student clicks the “Log out” button|
||2. Teacher/Student confirms logging out and log out|
|Alternative Flows||
|Exceptions||
|Special Requirements| |
|Notes and Issues||



### Actor: Student


#### 13. Attend Course
|Use Case ID| Attend Course_13 |
|----------|--------| 
|Use Case Name|  Attend Course |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  Tho Phan Chi|
|Date Last Updated|  05/03/2023|


|Actors|  Attend Course|
|----------|--------| 
|Description|  Student can attend Course available|
|Trigger|  Student clicks the “Register to a Course” button|
|Preconditions|  |
|Postconditions|  Student successfully joins the Course and access to all the materials, exercises in the Course|
|Priority|  high|
|Normal Flow|1. Student clicks the “Course” button|
||2. The system will show all the course|
||3. Student selects a Course|
||4. Student confirms registration|
|Alternative Flows| At step 2, |
|| 2.1. Student searches for a Course|
||Continue step 3 in the Normal Flow|
|Exceptions| At step 2.1: The course not found|
||2.1.1: System notify that course not found|
||2.1.2: Back to step 2|
||At step 3: The course no longer available|
||3.1: System will show error (course can not register) to student|
||3.2: Back to step 2|
|Special Requirements|  |
|Notes and Issues| |

#### 14. Track Course Progress
|Use Case ID| Track Course_14 |
|----------|--------| 
|Use Case Name|  Track Course |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  Thanh Le Hoang Kim|
|Date Last Updated|  05/03/2023|


|Actors|  Student|
|----------|--------| 
Description|  Student can track his/her own progress to see how much of the course he/|she |has accomlished
|Trigger|  Student clicks the “Progress” button  on each course page|
|Preconditions|  Student has already registered for that course|
|Postconditions|  The students know how much time they spent on the course, how many percent did they finish the exercise, and how many points they got on each exercise … |
|Priority|  high|
|Normal Flow| 1. Student searches for the course he/she registered|
|| 2. Student clicks on that Course to go to the Course|
|| 3. Student clicks the “Progress” button|
|| 4. The Progress of ABC course interface appears|
|Alternative Flows| Step 4 If the student has passed the course, there will be a section “Congratulate!” and the total grade|
||Step 4 If the student want to print the progress they can click on Print button.|
|Exceptions| |
|Special Requirements|  Only student and the lecturer of the course know the course progress of the student|
|Notes and Issues| |


#### 15. Post Questions
|Use Case ID|  Post Question_15 |
|----------|--------| 
|Use Case Name|  Post Question |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  Thanh Le Hoang Kim|
|Date Last Updated|  05/03/2023|

|Actors| Student|
|-----| -----|
|Description| Student can post questions to the chatbox to ask teacher|
|Trigger| Student goes to the chat box to send question to teacher|
|Preconditions| The student and lecturer have registered in the system|
|Postconditions| The teacher is notified about the questions and answer to them|
|Priority| high|
|Normal Flow|1. Student choose the teacher he/she wants to ask|
||2. Student write message contents|
||3. Student clicks “Send Message”|
||4. The System delivers the message and notify student that his/her question has delivered successfully|
|Alternative Flows|At step 2,|
||2.1. Teacher clicks “Attachment”|
||2.2. Teacher selects a media (audio, images)|
||2.3. Teacher chooses the media|
||Continue to step 3 as in the Normal Flow|
|Exceptions|At step 2.2, if there is no media, show a pop-up to notify teacher, then end|
||At step 2.2, if the file type (pdf, mp3, wav…) of the selected media is not supported by the system, then show a pop-up to notify teacher, then end|
|Special Requirements| |
|Notes and Issues|We do not have enough time to do chatbox so maybe we can help the actor search for the mail and chat on different platform|


#### 16. Do Exercise

|Use Case ID| Leave Course_16 |
|----------|--------| 
|Use Case Name| Leave Course |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  Thanh Le Hoang Kim|
|Date Last Updated|  05/03/2023|

| Actors | Student |
| ------ | ------ |
| Description | Student can do exercise and submit them on the Course |
| Trigger | Student clicks the “Submit Exercise” button |
| Preconditions | The exercise has been uploaded by the teacher |
| Postconditions | Student has successfully submitted the exercise |
||The lecturer can see the submitted file on the system|
| Priority | high |
| Normal Flow | 1. Student clicks the “Submit Exercise” button |
| | 2. Student uploads the solution file |
| | 3. Student confirms submission|
| Alternative Flows| |
| Exceptions | At step 2, if the capacity of the selected media exceeds the allowable capacity of the system, then show a pop-up to notify student, then end|
| Special Requirements | The file format can be image, audio, video, pdf|
| Notes and Issues| |




#### 17. Leave Course
| Use Case ID | Leave Course_17 |
| ------------| ---------------|
| Use Case Name | Leave Course | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | Thanh Le Hoang Kim|
| Date Last Updated | 05/03/2023 |
 

 
| Actors | Student |
| -------| -------|
| Description | Student can leave the course after he/she has accomplished it or when he/she don’t want to complete the course|
| Trigger | Student clicks the “Leave Course” button |
| Preconditions |  The student has registered for the course|
| Postconditions |  The student do not have access to the material of the course anymore|
||The student is removed from the student list of the course|
||The teacher will be notified |
| Priority | low |
| Normal Flow | 1. Student clicks the “Leave Course” button  |
||2. A popup appears asking “Are you sure to leave the course?” |
| | 3. Student confirms leaving the course |
| Alternative Flows |  |
| Exceptions | Cancel leave course|
||At step 2, the student choose not leave, then end|
| Special Requirements |  |
| Notes and Issues | |

#### 18. Find contact information
| Use Case ID | Find contact information_18 |
| ------------| ---------------|
| Use Case Name | Leave Course | 
| Created By |  Thanh Le Hoang Kim |
| Date Created |  05/03/2023|
| Last Updated By | |
| Date Last Updated | |


| Actors|  Student / Lecturer|
| ------------| ---------------|
| Description| Students and lecturers can find the email of people they want to reach.|
| Trigger|  Student/lecturer click the button search on the All course interface|
| Preconditions|  The student and lecturer have registered in the system|
| Postconditions|  The lecturer/student can know the email of the people they search |
| Priority|  high|
| Normal Flow| 1. Actor enters the name of people they want to search|
||2. Student click on the Search icon or click “Enter”|
||3. All profiles of people having the input name appear, but in full name, full position, lecturer or student|
||4. The actor click on the desired profile|
||5. The actor can copy the email to send email via Google Mail or other email providers|
| Alternative Flows| 1.1 Actor enter name but with typo|
||1.2 Return to step 3 but with name having the similar pattern as the input name|
| Exceptions| 1.1 Actor enter name does not exist on the system|
||1.2 The system show a popup ‘Can not find this name’, the actor click OK|
||Return to step 1|
| Special Requirements| We can apply typeahead to suggest name for the actors|
| Notes and Issues| |


## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/galvdat/vgu_tinyprojects/pe2023/vgupe2023_team2.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/galvdat/vgu_tinyprojects/pe2023/vgupe2023_team2/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
