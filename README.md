#  Articles to DB

## Requirements

* Node.js v9.11.1+
* A running MongoDB instance

## Instructions

Install Grunt:

    npm install -g grunt-cli

Install dependencies:
    
    npm install

To run the app:

    grunt
    
## Notes
### Fetching Articles
The applitacion will try to retrieve articles from the given URL as soon as the server start. Then, it will repeat the operation every 60 minutes.

### Configuration
MongoDB connection string and interval time to fetch articles can be changed in `./config/config.js`, where:

* **db:** is the MongoDB connection String
* **interval:** is the time between every articles fetch

    

