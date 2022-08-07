# Group Finder

It is a single-person project at a university course but I find it interesting. The aim was to create a frontend (in ReactJS) for a web application that will resolve the common problem in every university which is the finding persons to the group (currently I'm working also at backend using Firebase). The application provides two main sections "Find group" and "Find students". The first one allows us to view current groups which looking for students and the second one to view students list who looking for a group. We have also a section called "Your ads" where we can check out our ads or add a new one. The next section is "Manage groups" which is dedicated to group management. In the group ad, we can specify current group members and basic information about courses that will be implemented via the group. In a single one, we can use tags, add descriptions and point to courses in which we are interested. Every advert includes a place for a small picture. The application is supported via Firebase authentication and mostly consists of Ant Design components. At this moment application does not have full functionality, for example, we can only work with single ads and the "Manage groups" section is not implemented but I still working on this. 

<div align="center">

|<img src="https://user-images.githubusercontent.com/63188869/182158036-a9495dc7-2daf-4223-b1f3-8afa6ca007e6.png" alt="drawing" width="1000"/>|
| :--: | 
| *Main view* |

|<img src="https://user-images.githubusercontent.com/63188869/182157169-164de670-e030-45ec-bcc3-1b2dc91c42d1.png" alt="drawing" width="1000"/>|<img src="https://user-images.githubusercontent.com/63188869/182156532-d7b2c2af-c2d5-467c-8c04-72c89ac8af91.png" alt="drawing" width="1000"/>|
| :--: | :--: | 
| *Login panel* | *Register panel* |

|<img src="https://user-images.githubusercontent.com/63188869/182158169-d1b6717b-064c-4e34-8251-a855f1c7c4af.png" alt="drawing" width="300"/>| <img src="https://user-images.githubusercontent.com/63188869/182158175-fa3d5f05-b44b-46c1-8ae3-f4ab1a2ad49a.png" alt="drawing" width="300"/>| <img src="https://user-images.githubusercontent.com/63188869/182158172-a72e6f6b-2072-419f-94be-48db53b50549.png" alt="drawing" width="300"/>|
| :--: | :--: | :--: | 
| *Login error handling* | *Register errors handling* | *Basic errors handling* | 

|<img src="https://user-images.githubusercontent.com/63188869/182159351-71990008-8c7e-4bb9-921e-19803546e233.png" alt="drawing" width="700"/>|
| :--: | 
| *Login with Google* |

</div>

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
