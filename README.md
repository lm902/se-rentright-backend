# se-rentright-backend

Backend server of RentRight project for COMP 7082 Software Engineering

## Calling API

Requests from clients should include an ``` X-Requested-With: XMLHttpRequest ``` header.

Requests including a JSON encoded body should include a ``` Content-Type: application/json ``` header.

Requests from clients expecting a JSON encoded response should include an ``` Accept: application/json ``` header.

## Objects

### User

|Field|Type|Description|
|-|-|-|
|username|String|Optional|
|password|Buffer|Not accessible from the client|
|profilePicture|String|Optional - This could be an URI to an image or an image encoded as data URI|
|phone|String|Optional|
|email|String|
|favorites|[Listing]|

### Listing
|Field|Type|Description|
|-|-|-|
|publisher|User|
|title|String|
|images|[String]|
|description|String|
|rent|Number|
|location|Object|
|location.lat|Number|
|location.lon|Number|
|location.address|String|
|location.city|String|
|location.state|String|
|location.zip|String|
|category|String|

## API References

### User

#### POST /user/login

Login to the site. The login session is returned with cookies and should be passed back in subsequent requests.

Body fields:
- Email: String
- Password: String (length >= 6)

#### POST /user/logout

Logout from the site.

#### POST /user/register

Create a new account.

Body fields:
- Email: String
- Username: String, Optional
- Password: String (length >= 6)

#### GET /user/current

Get the information of the current logged in user. Can be used to check whether a valid login session exists.

#### PATCH /user/current

Update information about the current logged in user.

Body fields:
- All other fields of a User object.

### Listing

#### GET /listing

Get a list of all listings.

#### POST /listing/search

Get a list of listings matching search criterias.

Body fields:
- All other fields of a Listing object.

#### POST /listing

Create a new listing.

Body fields:
- All other fields of a Listing object.

#### GET /listing/{id}

Get a specific listing by _id

#### PATCH /listing/{id}

Update a specific listing by _id

Body fields:
- All other fields of a Listing object.

#### DELETE /listing/{id}

Delete a specific listing by _id

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org