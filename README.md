# Conversation Editor Project

This repo contains a JSON file that represents a "lesson" that Woebot gives to users - allornothing.json. Each JSON is keyed by an ID, and each object corresponds to a message set that Woebot sends the user.

Each object contains the following fields:

- text: A string of what Woebot says.
- replies: An array of strings with the text for each button.
- payloads: An array of strings that contain the payload that is sent back.
- routes: An array of strings with the symbols to route to for each payload.
- tag: An optional string label for this entry.
- lesson: The name of the lesson.

Here are the steps of this project:

1.  Using React.js, Angular.js, or Vue.js create a single page applcation that allows for the adding/editing/removing of individual entries in a list/detail style UI.
2.  The updated items do not need to be persisted across page refreshes and you can use the allornothing.json as the data source when loading the page.
3.  You do not need to create a server. It can be all clients-side.

Guidelines:

The purpose of this project is to see how you write and organize your code and what tools you prefer to use.

Out of respect for your time, please cap the time you spend on it to 4 hours (less is fine too).

Stylizing the page is more important than validation of the input. We understand there's only so much you can do in the short time.
