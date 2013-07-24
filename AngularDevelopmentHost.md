Angular UI dev environment
==========================

Goals
-----

Goal is to have the most productive angular UI development workflow

An effective front-end development environment has number of potentially independant aspects
_In Place_
* Dev Environment can be loaded at required state 
** explicit state does not require server
** e.g URL .../devarea/UIName#stateDesc
* Required user interaction/model change is available
** external to App UI can change application state (i.e. trigger Service or Controller action / modify Model data)
* Fast load of environment and app code and state
* Dev Env imports smallest app subset needed
* Multiple tests of same element quickly available
	- switchable / separate tabs / multi-view
_Needed_
* Dev Env runs parallel to app, re-uses all app resources possible
* The Dev Env does not impact the application (CSS, etc)
* run Automated unit tests stepping through scenarios
* No refresh of browser needed
* Support external testing framework
* Support automated render testing
** image matching (implies window size control) 
** dom/css tree matching
* Manual and Automated tests don't violate DRY
 

Implementation So far
---------------------
* Have a custom controller for each app state
* Using ng-emit for cross controller messaging

To Do
-----
* Make original part of app 
* Ignore unused services / definitions
* Reusable controllers
* auto re-load functionality


