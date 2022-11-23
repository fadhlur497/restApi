# Movie API Documentation

## Endpoints :

List of available endpoints:

- `GET /movies`
- `POST /movies/add`
- `PUT /movies/:id`

### GET /movies
#### Description
- Get all the movies data

#### Response
_200 - OK_

- Body
    ```json
    {
          "id": Integer,
          "title": String,
          "genre": String,
          "released": String,
          "image": String,
          "createdAt": Date,
          "updatedAt": Date
    }
    ```

### POST /movies/add
#### Description
- Create a new movies data

#### Request
- Headers
    ```json
    {
      "Content-Type": "application/form-data"
    }
- Body
    ```json
    {
      title: Text,
      genre: Text,
      released: Text,
      image: file
    }
    ```
#### Response
_201 - Created_
- Body
    ```json
    {
          "id": Integer,
          "title": String,
          "genre": String,
          "released": String,
          "image": String,
          "createdAt": Date,
          "updatedAt": Date
    }
    ```

### POST /movies/:id/edit
#### Description
- edit movies data

#### Request
- Headers
    ```json
    {
      "Content-Type": "application/form-data"
    }
- Body
    ```json
    {
      title: Text,
      genre: Text,
      released: Text,
      image: file
    }
    ```
#### Response
_200 - Updated_
- Body
    ```json
    {
          "id": Integer,
          "title": String,
          "genre": String,
          "released": String,
          "image": String,
          "createdAt": Date,
          "updatedAt": Date
    }
    ```

_400 - Bad Request_
- Body
    ```json
    {
        "message": "Validation error: Title cant be empty"
    }
    OR
    {
        "message": "Validation error: Genre cant be empty"
    }
    OR
    {
        "message": "Validation error: Released cant be empty"
    }
    ```
