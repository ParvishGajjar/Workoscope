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

### LOGIN INTO APP 
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
  
  * To check for any notifications or unread messages API call is being made
  <br/>
  
  

    
  
  
  
  
    
