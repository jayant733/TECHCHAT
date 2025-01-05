#dev tinder 

created a repository in github 
created a vite + react project  

learn about daisy ui library



body 
    navabar 
    router = / feed
    route =/login :- login page
    route =/conncetion => connecitons
    route = /profile


CREATE A LOGIN PAGE 


//axios is the package which we gonna usee 
axios and fetch are just same it is wrapper around xhrhttp request 

//A CORS (Cross-Origin Resource Sharing) error occurs when a web application running on one domain (or origin) tries to make a request for resources (e.g., API data, images, or scripts) hosted on a different domain (or origin), but the server hosting the resource doesn't allow such cross-origin requests.

this cors error is at the browser level 
mai localhost me hi changes karunga then it will work 
but different localhost se different localhost call karunga then it will throw me an error 

ip is same as local host 

the error is 
access to xmlhttprrequrest /7777 tfrom origin 5173 has been blockes by cores policy . request doesnt pass access control check 
to fix this issue we will use a package for cors which is middleware 


whenever you are not woriking with https then the browser does not store the cookies that containe the token
axios wont set the cookies in the applicaiotn 
so we will have to whitelist the cookie 


to get the cookies withcrediantals should be true in login.jsx and app.js mai crediants and origin daalna hoga 

we wrap up our app with the provider component form the redux toolkiyt and give the store as the app store created  


how to add a data we use a hook known as usedispatch by react rdux

so const dipsatch = usedispatch()
then we use dispatch(adduser(res.data))
adduser is the reducer which is we are calling and res.data is the data we are sending 

we use useSelector to subscribe to the store 

benifit of store is there iot will refreshing by everyting that is including my navbar in the store 

never call a hook inside the function 

never hardcode your url at any point always create a util page to do that 