# API DOCUMENTS

# /USER

### GET

for check user's id is already taken

- param : userId=12243
- return
- - status 201 / true
- - status 409 / "duplicate Data"

## /SIGNIN

### POST

for login

- body : { userId : string , password : string}
- return
- - status 200 / id(pk) , userId
- - status 403

## /SIGINUP

### POST

- body : { userId : string , password: string }
- return
- - status 200 / "complete"
- - status 403

# /GRAPH

## GET

to get graph data

- param uuid or postId
- return
- - status 200 / { result : { postId: string, name: string, value: string, createdAt: date, updatedAt: date}[] }
- - status 200 / { result : { name: string, value: string}}
- - status 403

## POST

to post new graph

- body { uuid : string, name : string, value : string }
- return
- - status 201 / "complete"
- - status 403

## DELETE

to delete graph

- body { postId : string }
- return
- - status 200 / "complete"
- - status 403
