                //****  MVC ***//

MODEL-VIEW-CONTROLLER

Model--
defintion: Represents the data and business logic of the application
1.It manages the data and rules of application.
2.Retrieves data from the database or other sources
3.updates data in response to change
4.Notifies the viw of the data changes

View--
definition-Reprents the user interaction of the application
1. display data from the model to the user.
2. presents the user interface and manage user interaction.
3. updates the display in the response to user action or  data changes

Controller--
definition-Acts as an intermediary between the model and the view 
1.recieves user inout from the view
2.processes user input andmake changes to the model.
3. updates the view based on changes in the model.


how does MVC Works
1.User interaction:
    the user interacts with the view
2. controller Action:
    the controller recieves the user input and processes . It may modify the model based on input.
3. Model Update
    the model updates its state and notifies the view if necessary.
4.View update
    the view is updated to reflect changes in the model, providing feedback to user.





///--- what is needed to create a backend ---///
-- services
--routes
-- models
-- controller
-- middlewares


npm init:
    1. package.json
    2. package-lock.json




                //****  MVC ***//

MODEL-VIEW-CONTROLLER

Model--
defintion: Represents the data and business logic of the application
1.It manages the data and rules of application.
2.Retrieves data from the database or other sources
3.updates data in response to change
4.Notifies the viw of the data changes

View--
definition-Reprents the user interaction of the application
1. display data from the model to the user.
2. presents the user interface and manage user interaction.
3. updates the display in the response to user action or  data changes

Controller--
definition-Acts as an intermediary between the model and the view 
1.recieves user inout from the view
2.processes user input andmake changes to the model.
3. updates the view based on changes in the model.


how does MVC Works
1.User interaction:
    the user interacts with the view
2. controller Action:
    the controller recieves the user input and processes . It may modify the model based on input.
3. Model Update
    the model updates its state and notifies the view if necessary.
4.View update
    the view is updated to reflect changes in the model, providing feedback to user.


ADVANTAGES--
1.Seperations of concerns
2.Scalability
3.Flexibility
4.Ressability


Web FrameWorks--
1. ruby on rails
2. ASP.NET MVC
3.Django
4.Angular
5.Laravel


///--- what is needed to create a backend ---///
-- services
--routes
-- models
-- controller
-- middlewares


npm init:
    1. package.json
    2. package-lock.json

    Difference between package json and package json.lock

package.json- This file is the main configuration file  for node.js project. it defines the project metadata,scripts and dependies.it is essential for both development and distributed of project

package.json.lock-This file provide a detailed exact record of dependency tree generated when npm install is run.
it locks the versions of the installed modules, including their dependencies and sub-dependencies . this ensure consistent installations across different .

