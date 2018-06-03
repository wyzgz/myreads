# MyReads Project
This is the practice program  for the final assessment project for Udacity's React Fundamentals course. This App could display books in three shelvs, search books and update the shelvs;

## TL;DR
Start the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## URL
http://localhost:3000/   --My Reads App main page
http://localhost:3000/search -- My Reads App search Page
http://localhost:3000/sample -- The sample page from the starter code.

## Main Function
 1 Main page:
    1) The main page shows 3 shelves for books
 2 Search
    1) The search page has a search input field.
    2) The search page behaves:
      a) As the user types into the search field, books that match the query are displayed on the page.
      b) Search results are not shown when all of the text is deleted out of the search input box.
      c) Invalid queries are handled and prior search results are not shown.
      d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
      e) The user is able to search for multiple words, such as “artificial intelligence.”
3 Routing
  1) The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
  2) The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
