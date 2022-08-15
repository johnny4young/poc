Test

run the program with the following command:
```
node --prof server.js 
or
node --prof server_improved.js
```
then in a terminal, run the following command:
```
 curl -X GET "http://localhost:3000/newUser?username=johnny&password=password"  

 ab -k -c 20 -n 250 "http://localhost:3000/auth?username=johnny&password=password"
```

the --prof generates a profile file in the current directory. the file is not easy to read.
to do the file for analysis, run the following command:
```
node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt
