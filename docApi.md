# API Movie

Documentation avec toutes les informations nécessaires pour l'API.

**Pas besoin d'authentification**

## **Display a list of movies :**

Request: <span style="color:#318ce7">**GET**</span> api/movies

### _Example request:_

```js
const url = new URL("http://localhost:3000/api/movies");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "GET",
  headers,
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/movies",
  method: "get",
});
```

## **Store a new movie :**

Request: <span style="color:#318ce7">**POST**</span> api/movies

### **Body Parameters:**

- **id** _integer_  
  The id of the movie.

- **grade** _integer_  
  The grade of the movie.

- **comment** _string_  
  A comment of the movie.

### **Example request:**

```js
const url = new URL("http://localhost:3000/api/movies");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  id: 15,
  note: 4,
  comment: "Amazing",
};

fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(body),
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/movies",
  method: "post",
  data: {
    id: 15,
    note: 4,
    comment: "Amazing",
  },
});
```

## **Display a movie :**

Request: <span style="color:#318ce7">**GET**</span> api/movies/{movie_id}

### **URL Parameters:**

- **movie** _integer_  
  The ID of the movie.

### _Example request:_

```js
const url = new URL("http://localhost:3000/api/movies/14");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "GET",
  headers,
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/movies/14",
  method: "get",
});
```

## **Update a movie :**

Request: <span style="color:#318ce7">**PUT**</span> api/movies/{movie}

### **URL Parameters:**

- **movie** _integer_  
  The ID of the movie.

### **Body Parameters:**

- **id** _integer_  
  The id of the movie.

- **grade** _integer_  
  The grade of the movie.

- **comment** _string_  
  A comment of the movie.

### _Example request:_

```js
const url = new URL("http://localhost:3000/api/movies/8");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  id: 12,
  grade: 3,
  comment: "Cool",
};

fetch(url, {
  method: "PUT",
  headers,
  body: JSON.stringify(body),
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/movies/8",
  method: "post",
  data: {
    id: 12,
    grade: 3,
    comment: "Cool",
  },
});
```

## **Delete a movie :**

Request: <span style="color:#318ce7">**DELETE**</span> api/movies/{movie}

### **URL Parameters:**

- **movie** _integer_  
  The ID of the movie.

  ==============================================================

# API Liste Movie

Documentation avec toutes les informations nécessaires pour l'API.

**Pas besoin d'authentification**

## **Display a list of movies :**

Request: <span style="color:#318ce7">**GET**</span> api/listmovies

### _Example request:_

```js
const url = new URL("http://localhost:3000/api/listmovies");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "GET",
  headers,
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/listmovies",
  method: "get",
});
```

## **Store a new movie :**

Request: <span style="color:#318ce7">**POST**</span> api/listmovies

### **Body Parameters:**

- **id** _integer_  
  The id of the movie.

- **label** _string_  
  label of the movie.

- **liste** _string_  
  A list of the movies.

### _Example request:_

```js
const url = new URL("http://localhost:3000/api/listmovies");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  id: 15,
  label: "horreur",
  liste: "3,8,9",
};

fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(body),
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/listmovies",
  method: "post",
  data: {
    id: 15,
    label: "horreur"
    liste: "3,8,9",
  },
});
```

## **Display a movie :**

Request: <span style="color:#318ce7">**GET**</span> api/listmovies/{listmovie_id}

### **URL Parameters:**

- **listmovie** _integer_  
  The ID of the listmovies.

### _Example request:_

```js
const url = new URL("http://localhost:3000/api/listmovies/14");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "GET",
  headers,
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/listmovies/14",
  method: "get",
  data: {
    id: 15,
  },
});
```

## **Update a listmovies :**

Request: <span style="color:#318ce7">**PUT**</span> api/listmovies/{listmovie}

### **URL Parameters:**

- **listmovie** _integer_  
  The ID of the listmovie.

### **Body Parameters:**

- **id** _integer_  
  The id of the listmovie.

- **label** _integer_  
  The label of the listmovie.

- **liste** _string_  
  A list of the movies.

### _Example request:_

```js
const url = new URL("http://localhost:3000/api/listmovies/8");

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

let body = {
  id: 12,
  label: "thriller",
  liste: "1,5,6,9",
};

fetch(url, {
  method: "PUT",
  headers,
  body: JSON.stringify(body),
}).then((response) => response.json());
```

### _Example request with axios:_

```js
axios({
  url: "http://localhost:3000/api/listmovies/8",
  method: "put",
  data: {
    id: 12,
    label:"thriller",
    liste:"1,5,6,9",
  };
});
```

## **Delete a movie :**

Request: <span style="color:#318ce7">**DELETE**</span> api/listmovies/{listmovie}

### **URL Parameters:**

- **listmovie** _integer_  
  The ID of the listmovie.
