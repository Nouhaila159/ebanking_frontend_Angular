----------------------------------------------------Realisé par : DANOUNI Nouhaila----------------------------------------------

Projet : Digital Banking Frontend 

Introduction
The project aims to develop a web application using Angular as the front-end framework and a Spring Boot API as the backend. The focus is on managing clients, bank accounts, customer-account relationships, and includes an authentication system.

It's important to note that this readme primarily highlights the frontend part of the project, showcasing code structure, implemented features, and the robustness of the integrated security system to meet specific management needs.

Components

1. Components
- Customers & New-Customer Component: Component dedicated to customer management.
- Accounts Component: Component for managing bank accounts.
- Customers-Accounts Component: Component ensuring the management of relationships between clients and accounts.
- Login Component: Authentication component allowing users to log in.
- environment.ts: Used in the Angular project to define environment variables.
- not-authorized:

2. Services
- Customers-Services: Service associated with customer management.
- Accounts-Services: Service responsible for managing bank accounts.
- Auth-Service: Authentication service ensuring application security.

3. Interceptors
- Interceptors have been created to handle outgoing and incoming HTTP requests, ensuring proper error control and management.

4. Guards
- Authentication Guard: A gatekeeper protecting routes requiring authentication.
- Authorization Guard: A gatekeeper managing access authorization to different parts of the application.

5. Route Definition
- Routes have been defined to allow smooth and intuitive navigation within the application. Routes are protected by authentication and authorization guards to ensure security. All components, services, interceptors, and guards have been thoroughly tested to ensure correct functionality and identify any undesirable behavior.

Access Page Management

- JWT_token
  ![Login](captures/jwt_token.PNG)

Admin Pages

- Login
  ![Login](captures/login_admin.PNG)

- Adding a New Customer
  ![Validation of Form Fields](captures/new_customer_form_validate_champs_admin.PNG)
  ![Success Message after Adding](captures/new_customer_form_validate_champs_message_sucess_admin.PNG)

- Search
  ![Search](captures/search_customer_admin.PNG)

- Deleting a Customer
  ![Deleting a Customer](captures/delete_customer_admin.PNG)

- Operations
  Credit
  ![Credit Operation](captures/credit_operation_admin.PNG)
  ![After Credit Operation](captures/apres_credit_operation_admin.PNG)
  Debit
  ![Debit Operation](captures/debit_operation_admin.PNG)
  ![After Debit Operation](captures/apres_debit_operation_admin.PNG)
  Transfer
  ![Transfer Operation](captures/transfer_operation_admin.PNG)
  ![After Transfer Operation](captures/apres_tansfer_operation_admin.PNG)



User Pages

- Login
  ![Login](captures/login_user.PNG)

- Search
  ![Search by Name](captures/search_customer_user_by_nom.PNG)

- Search for an Account
  ![Search for an Account](captures/account_user.PNG)

Conclusion
In conclusion, this project has successfully delivered a robust and secure frontend application that effectively meets the requirements of banking management. The clear code structure, successful implementation of features, and integration of an exemplary security system attest to the quality of the design. This work marks a significant step in providing a comprehensive and reliable solution for the banking sector.
