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

  * API call made to check whether user exists in database and to confirm his password.
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
  
  * API Call made while updating or removing cover page of profile.
    
  <br/>
  
  * API call made if you upload your portfolio in upload portfolio section.
  <br/>
  
  * Viewing Other's Profile(Who is in your connection), API call would be made if you want to remove user from your connection or message user(In case of message user it would take you to message inbox of user and will be fetching previous chat to show you).
  <br/>
  
  * Viewing Other's Profile(Who is not in your connection), API call would be made if you want to connect with the user or a project inquiry could be sent to user.
  
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
 
***
 <br/>
 
 ### 'Alert' in Menu
***
<br/>

  * Contains notification section where all your notification will be shown, So whenever an event happens in which you are included an API would be called to notify you.
  
  * Connection requests is the part where anyone who wants to be your friend can request you to accept their request. If you do so API call will be made to get you in connection else it will be removed from your connection request tab on declining and the other person could again send you a request.
  
***
 <br/>
 
 ### 'Chat' in Menu
***
<br/>

  * In chat there is a pencil option which on clicking you can decide if you want to message anyone from your friendlist/connections. So API call will be made such that your connections are fetched there.
  
  * On compose, samee thing as mentioned above will happen.
  
  * On sending a message to your conncection api would be called in order to show you those message, they needed to be stored in database.
  
  * Job offer can be sent in the chat message options which call an API regarding it.
  
***
<br/>

### Search
***
<br/>

  * You can directly search from the top at home which will run a search query API with LIKE function.
  
  * Their are also options for searching by categories based on their professional title for which API will be called to fetch userss having such title's.

***
 <br/>
 
### HOME
***
<br/>
    
   * Hastags
      * API call made when user selects any of the hastags to show him feed with those hashtags.
   <br/>
   
   * Explore
      * API call made to fetch all the jobs in explore job tab, Other tabs resgarding this tab in the same page are Post Job and Manage Job.
      * API call made to fetch the portfolio's of users.
   <br/>
   
   * Recent Jobs
    * API call would be made to fetch all the jobs available recently(i.e. posted recently).
    * On clicking see more you move ont to job explore page.
   <br/>
   
   * Recommendation
    * It contains recommendation of people you might wanna connect for which API is called, and too see more connections you are taken to new page for which again API would be called to fetch and give you more connection you caan make.
   <br/>
   
   * Feed
    * API call made to fetch the post based on your connections post(Prioritised by time posted).
   <br/>
   
   * Profile(In left section)
    * User's profile pic, his connections and profile views made will be fetched through API
    
***
   <br/>
  
  
  
  
  
    
