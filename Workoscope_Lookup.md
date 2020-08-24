## Workoscope Website LookUp
<br/>

### Sign Up Page 
***
<br/>

 * API call is being made for Email Verification:  https://www.workoscope.com/emailverify?Parameters
***
<br/>
  
### OnBoarding Page
***
<br/>

  * API call is made for getting countries.
    API Details:
      * API: https://www.workoscope.com/loadcountrydata
      * Request Type: POST
      * X-Requested-With: XML Http Request
  <br/>
  
  * API call is made to get states.
    API Details:
      * API: https://www.workoscope.com/getstates
      * Request Type: POST
      * X-Requested-With: XML Http Request 
  <br/>
  
  * API call made to get cities.
    API Details:
      * API: https://www.workoscope.com/getcity
      * Request Type: POST
      * X-Requested-With: XML Http Request 
  <br/>
  
  * API call being made when user Submits after selecting wich previous platforms user been using.
    API Details:
      * API call to update user data.
  <br/>
  
  * API call being made when user selects the purpose of them using this platform.
    API Details:
      * API call to update user data.
  <br/>
  
  * API call made when user enter his Professional Title.
    API Details:
      * API call to update user data
  <br/>
  
  * API call made while Skills(Upto 6).
    API Details:
      * API Call: /GetSkillDAta
    On Submission API call is made,
    API Details:
      * API Call: /updateprofessionaldetailsfreelancer
      
 ***
<br/>

### LOGIN INTO AN APP 
***
<br/>

  * Continuous API Calls being made to fetch peers details.
    API Details:
      * API Call: /peerjs/myapp/peers
  <br/>
      
  * To check for the pending follow request an API call is being made.
    API Details:
      * API Call: /Fetchfollowrequest
  <br/>    
  
  * To check for any notifications or unread messages API call is being made.
***
 <br/>
 
### VIEW PROFILE
***
<br/>
  * API call made to get all the user details.
  <br/>
  
  * API Call made while updating or removing cover page of profile
    
  <br/>
  
  * API call made if you upload your portfolio in upload portfolio section
***
  <br/>
  
### EDIT PROFILE
***
<br/>

  * Basic Details
  
    * Updating Profile Picture or Removing it will call an API.
    * Updating country, state or city; An POST API call is being made to update user's location, once user submits the updated data.
    * Updating Description, Once done an API call is made to update description of the user.
    
  <br/>
  
  * Freelancing Details
    
    * Updating Skills, Profession, Daily wage per hours, API Call is being made regarding it to update user details.
    (Pre-filled Data isn't available for user)
   
  <br/>
   
  * Professional and Company Details
  
    * On updating professional title or other details, API cal, being made to update user details.
  
  <br/>
  
  * Social Account
  
    * API call made if you add any social media link like linkedin, Github, etc and submitted.
    * It is then fetched and also shown on your profile page under "You can also find me on" Section.
    
   <br/>
   
  * Upload Portfolio
   
    * API call made in upload portfolio.
    
 ***
 <br/>
 
 ### 'Connects' in Menu
***
<br/>

  * API call made to fetch follow requests.
  
  * On clicking 'Message', Chat is opened while which api call made to fetch previous chat details with the users.
  
  * API call made to fetch recommendations in recommendation tab.
  
  * API call made to fetch current connections of user. 
 
  

  

    
  
  
  
  
    
