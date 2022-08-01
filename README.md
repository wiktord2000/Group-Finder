# Group Finder (still implementing)

It is a single-person project at a university course but I find it interesting. The aim was to create a frontend (in ReactJS) for a web application that will resolve the common problem in every university which is the finding persons to the group (currently I'm working also at backend using Firebase). The application provides two main sections "Find group" and "Find students". The first one allows us to view current groups which looking for students and the second one to view students list who looking for a group. We have also a section called "Your ads" where we can check out our ads or add a new one. The next section is "Manage groups" which is dedicated to group management. In the group ad, we can specify current group members and basic information about courses that will be implemented via the group. In a single one, we can use tags, add descriptions and point to courses in which we are interested. Every advert includes a place for a small picture. The application is supported via Firebase authentication and mostly consists of Ant Design components. At this moment application does not have full functionality, for example, we can only work with single ads and the "Manage groups" section is not implemented but I still working on this. 


|<img src="https://user-images.githubusercontent.com/63188869/182046299-decdcad3-5203-4c77-97c9-672240959579.png" alt="drawing" width="1000"/>|
| :--: | 
| *Main view* |

## Goals
 - [X] Login and Register posibility
 - [X] Firebase authentication (Google and Email&Password)
 - [X] Find students view (with fetching the data from Firebase database)
 - [X] Provide private routes
 - [ ] Find group view
 - [X] Add single ad
 - [ ] Add group ad
 - [ ] Manage groups view
 - [ ] Your ads
