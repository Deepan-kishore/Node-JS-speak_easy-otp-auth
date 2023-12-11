Title: Otp-Authentication Assignment
Author: Deepan Kishore

Packages Used: Express JS, speakEasy, JWT
Roles available: Read,write,Admin
User Database:
    Configured internally to save space on packages
    1.Deepan (read,write)
    2.Kishore (read,write,Admin privileged)
Routes Available:
    1.http://localhost:3000/auth/generate-otp
    2.http://localhost:3000/auth/verify-otp
    3.http://localhost:3000/api/secure-endpoint

Description/steps/workflow:
1.Run npm install to install all the packages
2.Run node server.js to start the server.
3.Open postman or any related software.
4.Visit host http://localhost:3000/auth/generate-otp with headers ( userid:kishore ).You will receive OtpURI 
5.In any Authenticator like Google Authenticator, use this URI to generate OTP.
6.In postman, visit, http://localhost:3000/auth/verify-otp with headers ( userid: kishore , otp: (< otp received >) ).You will receive a jwt token generated which is valid for 1 hour.
7.In postman, visit http://localhost:3000/api/secure-endpoint with the token as authorization in type as "bearer token".
8.Since you have entered with Kishore ( who is admin ), you will get "Secure Endpoint Accessed!" message.
9.If you have entered with non admin user like "Deepan", you will receive a "Insufficient permissions" message.
10.If you didn't enter the token properly, you'll get "unAuthorized/forbidden" message


Notes:
Kindly do all the endpoint hits in post method.
To conserve space, we have not used an external database.
Since developing UI was not a part of the assignment, a UI haven't been designed but is possible.


Tasks given:
1.Usage of speak easy ( Generation of URI, send to client , verification of OTP received from client  )  - completed
2.Claim based Authorization ( roles and claims integration ) - completed
3.API security (securing a dummy api and allowing Admin only) - completed

Folder structure:
root
|-- src
|   |-- controllers
|   |   |-- authController.js
|   |   |-- apiController.js
|   |-- middleware
|   |   |-- authenticationMiddleware.js
|   |   |-- authorizationMiddleware.js
|   |-- routes
|   |   |-- authRoutes.js
|   |   |-- apiRoutes.js
|   |-- utils
|       |-- otpUtils.js
|-- .env
|-- package.json
|-- server.js


Thank you for the opportunity.
In need of any further clarification, Kindly reach out to dpnkishore@gmail.com