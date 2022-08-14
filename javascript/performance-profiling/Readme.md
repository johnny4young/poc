Test

run the program with the following command:
```
node --prof server.js
```
then in a terminal, run the following command:
```
 curl -X GET "http://localhost:3000/newUser?username=johnny&password=password"  
 
 ab -k -c 20 -n 250 "http://localhost:3000/auth?username=johnny&password=password"
```

