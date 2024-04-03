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
