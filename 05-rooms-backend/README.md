# 05-rooms-backend

## Workflows

```sh
# Setup
npm install

# Development
npm run dev

# Production
npm run build
npm run start
```

Note that the DB resets every time the server is restarted.

## Endpoints

### Reads

```tsx
// All params are optional but can be applied as follows:
// - `page=2`: The third page (note that this is an index)
// - `size=9`: 9 items will be returned as part of a page
// - `sort=pricePerNight`: Sort by price instead of by `createdAt` (default)
GET /rooms{?page,size,sort} 

GET /rooms/{id}
GET /users/{id}
GET /users/me
```

### Writes


#### Toggling the starred status of a room

```tsx
fetch('http://localhost:3001/rooms/{id}/toggle-starred', {method: 'POST'})
```

**Responses:**
 - `200`: The request has succeeded
 - `404`: The provided `id` is not known

#### Adding a room

```tsx
fetch('http://localhost:3001/rooms', {
  method: 'POST',
  body: JSON.stringify({
    title: 'New room',
    description: 'This is a new room',
    heroUrl: 'https://c.pxhere.com/photos/75/9b/sailboat_ship_sailing_greenland_boat-1092104.jpg!d',
    pricePerNight: {
      amount: 100,
      currency: 'USD'
    }
  })
})
```

**Responses:**
 - `201`: The request has succeeded.
 - `400`: The provided data is invalid. More details may be read from the response body.

The following validations are in place:
1. All shown properties are mandatory
2. `heroUrl` must be a URL that starts with `https://c.pxhere.com/`
3. `pricePerNight.currency` currently only supports `USD`
