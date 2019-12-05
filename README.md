# LiveStreamURLApp
This simple app for saving live stream urls (NBA,UFC, NFL ...etc)

In www/index.html
add firebase Cred.
```
   <script>
      // Initialize Firebase
      var config = {};
      firebase.initializeApp(config);
    </script>
    
   ```
   
  Json Data will be like this :
  ```
{
  "-LvLQIuqCKvIHVTBwiz0" : {
    "link" : "https://www.yalla-shoot-new.com/2019/12/iraq-vs-bahrain.html",
    "linkTitle" : "Iraq vs bahren"
  }
}

  ```
Go to add Data and you can add title and links for live stream URLS

