# Welcome to Spotify webapp

## Resources

- [Git](https://github.com/Nandish-SS/spotify-test-task)
- [Heroku](https://spotify-tt.herokuapp.com/)

## Dependencies

The app runs on the platform consisting of these:

    % Ruby 2.6.6
    % React ^17.0.2
    % React-dom ^17.0.2
    % Mysql
    % Node.js >= 13.8.0

## Setup:
    bin/rake db:create
    bin/rake db:migrate
    
    rake task to update db
    bin/rake parse_records_to_database (update Spotify ACCESS_TOKEN to parse_records_to_database.rake file to get the tracks from spotify)
    
