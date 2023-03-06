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
| Last Updated By | |
| Date Last Updated | |


|Actors|  Teacher|
|-----| -----|
|Description|  Teacher creates course for students to join|
|Trigger|  Teacher clicks the “Create Course” button|
|Preconditions|  |
|Postconditions|  |
|Priority|  high|
| Normal Flow | 1. Teacher clicks the “Create Course” button |
|| 2. Teacher specifies the Course’s information |
|Alternative Flows| |
|Exceptions| |
|Special Requirements|  |
|Notes and Issues| |


#### 2. Modify Course:
| Use Case ID | Modify Course_2 |
| ------------| ---------------|
| Use Case Name | Modify Course | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |


|Actors| Teacher|
|-----| -----|
|Description| Teacher modifies the Course|
|Trigger| Teacher clicks the “Modify Course” button|
|Preconditions| The Course must exist in the first place|
|Postconditions| |
|Priority| medium|
|Normal Flow|1.Teacher clicks the “Modify Course” button|
||2. Teacher chooses what to modify|
|Alternative Flows||
|Exceptions||
|Special Requirements| |
|Notes and Issues||


#### 3. Upload materials
| Use Case ID | Upload materials_3 |
| ------------| ---------------|
| Use Case Name | Upload materials | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |


|Actors| Teacher|
|-----| -----|
|Description| Teacher can upload materials to the Course|
|Trigger| Teacher clicks the “Upload Material” button|
|Preconditions| The Course must exist in the first place|
Postconditions| The materials are uploaded to the Course and all students who have joined the Course can see them
|Priority| high|
|Normal Flow|1. Teacher clicks the “Upload Material” button|
||2. Teacher uploads the file of material|
|Alternative Flows||
|Exceptions||
|Special Requirements| |
|Notes and Issues||


#### 4. Modify Material:
| Use Case ID | Modify Material_4 |
| ------------| ---------------|
| Use Case Name | Modify Material | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |


|Actors|  Teacher|
|-----| -----|
|Description|  Teacher can modify the materials that he/she has uploaded before|
|Trigger|  Teacher clicks the “Modify” button|
|Preconditions|  There exists a material in the first place|
|Postconditions|  The materials are modified and updated so that all students can see them|
|Priority|  high|
|Normal Flow| 1. Teacher clicks the “Modify” button|
|| 2. Teacher makes changes to the existing materials|
|Alternative Flows| |
|Exceptions| |
|Special Requirements|  |
|Notes and Issues| |

#### 5. Track Students’ Activities:
| Use Case ID | Track Students’ Activities_5 |
| ------------| ---------------|
| Use Case Name | Track Students’ Activities | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |


|Actors|  Teacher|
|-----| -----|
|Description|  Teacher can track student’s activities by seeing how much time they spend on the exercises, tasks,...
|Trigger|  Teacher clicks the “Track Activity” button
|Preconditions|  |
|Postconditions|  Teacher knows the progress of student by knowing how much time he/she spends on exercises, tasks, whether he/she finishes the exercises or not…
|Priority|  high|
|Normal Flow| 1. Teacher searches for the student’s name/id that of whom he/she wants to see the learning activities, progress
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
| Last Updated By | |
| Date Last Updated | |


|Actors| Teacher|
|-----| -----|
Description| Teacher can track student’s activities by seeing how much time they spend |on |the exercises, tasks,...
|Trigger| Teacher clicks the “Track Activity” button|
|Preconditions| |
|Postconditions| Teacher knows the progress of student by knowing how much time he/she |spends on exercises, tasks, whether he/she finishes the exercises or not…
|Priority| high|
|Normal Flow| 1. Teacher searches for the student’s name/id that of whom he/she wants to see the learning activities, progress
||2. Teacher clicks the “Track Activities” button to see the student’s activities/progress|
|Alternative Flows||
|Exceptions||
|Special Requirements| |
|Notes and Issues||


#### 7. Upload exercise
| Use Case ID | Upload exercise_7 |
| ------------| ---------------|
| Use Case Name | Upload exercise | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |


| Actors | Teacher |
| ------- | ------ |
| Description | Teacher uploads exercise to the Course |
| Trigger | Teacher clicks the “Upload Exercise” button |
| Preconditions | There exists a Course |
| Postconditions | Exercises are uploaded to the Course and students are informed of the exercise |
| Priority | high |
| Normal Flow |1. Teacher clicks the “Upload Exercise” button |
| | 2. Teacher chooses the Exercise file to upload|
| Alternative Flows | |
| Exceptions | |
| Special Requirements |  |
| Notes and Issues | |




#### 8. Delete Exercise:
| Use Case ID | Delete Exercise_8 |
| ------------| ---------------|
| Use Case Name | Delete Exercise | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |


|Actors| Teacher|
|----------|--------| 
|Description| Teacher can delete the exercises if they are irrelevant |
|Trigger| Teacher clicks the “Delete Exercise” button|
|Preconditions| The exercise must exist|
|Postconditions| The exercise is deleted from the Course|
|Priority| medium|
|Normal Flow|1. Teacher searches for the exercise to be deleted|
||2. Teacher clicks the “Delete Exercise” button|
||Teacher confirms to delete that exercise|
|Alternative Flows||
|Exceptions|
|Special Requirements| 
|Notes and Issues|


#### 9. Modify Exercise:
| Use Case ID | Modify Exercise_9 |
| ------------| ---------------|
| Use Case Name | Modify Exercise | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |

|Actors| Teacher|
|----------|--------| 
|Description| Teacher makes changes to the existing exercise|
|Trigger| Teacher clicks the “Modify Exercise” button|
|Preconditions| The exercise must exist|
|Postconditions| The exercise is modified and updated|
|Priority| medium|
|Normal Flow|1. Teacher searches for the exercise to be modified|
||2. Teacher clicks the “Modify Exercise” button|
||3. Teacher makes changes to the exercise|
||Teacher confirms the changes and commit to the Course|
|Alternative Flows||
|Exceptions||
|Special Requirements| |
|Notes and Issues||


#### 10. Evaluate Students’ Performance
| Use Case ID | Evaluate Students’ Performance_10 |
| ------------| ---------------|
| Use Case Name | Evaluate Students’ Performance | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |


|Actors| Teacher|
|----------|--------| 
|Description| Teacher can evaluate students’ performance to determine he/she passes the |Course or not at the end of the Course
|Trigger| Teacher clicks the “Evaluate Performance” button|
|Preconditions| |
|Postconditions| Teacher can see the performance (how many exercises are accomplished, % |of progress,...)
|Priority| high|
|Normal Flow|1. Teacher searches for the student’s id/name|
||2. Teacher clicks the “Evaluate Performance” button to see the student’s performance|
|Alternative Flows||
|Exceptions||
|Special Requirements| |
|Notes and Issues||

### Actor: Teacher and Student


#### 11. Log in
|Use Case ID| Log in_11 |
|----------|--------| 
|Use Case Name|  Log in |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  |
|Date Last Updated|  |


|Actors| Teacher, Student|
|----------|--------| 
|Description| Teacher/Student logs in to the system using his/her account|
|Trigger| Teacher/Student clicks the “Log in” button|
|Preconditions| Teacher/Student has already created an account|
|Postconditions| Teacher/Student logs in successfully and go to the Teacher’s / Student’s view/interface
|Priority| high|
|Normal Flow|1. Teacher/Student feeds in his/her id/username and password|
||2. Teacher/Student clicks the “Log in” button|
|Alternative Flows||
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
|Last Updated By|  |
|Date Last Updated|  |


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
|Last Updated By|  |
|Date Last Updated|  |


|Actors|  Attend Course|
|----------|--------| 
|Description|  Student can attend Course available|
|Trigger|  Student clicks the “Register to a Course” button|
|Preconditions|  |
|Postconditions|  Student successfully joins the Course and access to all the materials, exercises in the Course
|Priority|  high|
|Normal Flow| 1. Student clicks the “Register to a Course” button|
|| 2. Student selects a Course|
|| 3. Student confirms registration|
|Alternative Flows| At step 2, |
|| 2.1. Student searches for a Course|
|| 2.2. Student reviews and selects a Course|
||Continue step 3 in the Normal Flow|
|Exceptions| Exeption 1: At step 2, if there is no course available, then notify student, |then end
|| Exeption 2: At step 2.1, if there is no available course, then notify student, then end|
|Special Requirements|  |
|Notes and Issues| |

#### 14. Track Course Progress
|Use Case ID| Track Course_14 |
|----------|--------| 
|Use Case Name|  Track Course |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  |
|Date Last Updated|  |


|Actors|  Student|
|----------|--------| 
Description|  Student can track his/her own progress to see how much of the course he/|she |has accomlished
|Trigger|  Student clicks the “Progress” button|
|Preconditions|  Student has already registered for that course|
|Postconditions|  |
|Priority|  high|
|Normal Flow| 1. Student searches for the course he/she registered|
|| 2. Student clicks on that Course to go to the Course|
|| 3. Student clicks the “Progress” button|
|Alternative Flows| |
|Exceptions| |
|Special Requirements|  |
|Notes and Issues| |


#### 15. Post Questions
|Use Case ID|  Post Question_15 |
|----------|--------| 
|Use Case Name|  Post Question |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  |
|Date Last Updated|  |

|Actors| Student|
|-----| -----|
|Description| Student can post questions to the chatbox to ask teacher|
|Trigger| Student goes to the chat box to send question to teacher|
|Preconditions| |
|Postconditions| The teacher is notified about the questions and answer to them|
|Priority| high|
|Normal Flow|1. Student choose the teacher he/she wants to ask|
||2. Student sends the questions to the teacher via chat box|
|Alternative Flows||
|Exceptions||
|Special Requirements| |
|Notes and Issues||


#### 16. Do Exercise

|Use Case ID| Leave Course_16 |
|----------|--------| 
|Use Case Name| Leave Course |
|Created By| Minh Quan |
|Date Created| 28/02/2023 |
|Last Updated By|  |
|Date Last Updated|  |

| Actors | Student |
| ------ | ------ |
| Description | Student can do exercise and submit them on the Course |
| Trigger | Student clicks the “Submit Exercise” button |
| Preconditions | The exercise has been uploaded by the teacher |
| Postconditions | Student has successfully submitted the exercise |
| Priority | high |
| Normal Flow | 1. Student clicks the “Submit Exercise” button |
| | 2. Student uploads the solution file |
| | 3. Student confirms submission|
| Alternative Flows| |
| Exceptions | |
| Special Requirements | 
| Notes and Issues| |




#### 17. Leave Course
| Use Case ID | Leave Course_17 |
| ------------| ---------------|
| Use Case Name | Leave Course | 
| Created By |  Minh Quan |
| Date Created | 28/02/2023 |
| Last Updated By | |
| Date Last Updated | |
 

 
| Actors | Student |
| -------| -------|
| Description | Student can leave the course after he/she has accomplished it |
| Trigger | Student clicks the “Leave Course” button |
| Preconditions |  |
| Postconditions |  |
| Priority | low |
| Normal Flow | 1. Student clicks the “Leave Course” button  |
| | 2. Student confirms leaving the course |
| Alternative Flows |  |
| Exceptions | |
| Special Requirements |  |
| Notes and Issues | |




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
