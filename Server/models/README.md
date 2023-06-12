# Models
- UserInfo
    - id
    - first name
    - last name
    - username
    - password
    - email
    
- UserData
    - id
    - biography
    - status
    - avatarImg
    - bannerImg
    - addresses[]
    - settings
        - options
    - layers[]
        - user layers
    - inventory[]
        - items
    - userType (regular or vendor)
    - wallet[]
        - card

- Post
    - id
    - user
    - userDescription
    - image
    - description
    - tags[]
    - comments
    - likes

- Message
    - id
    - date
    - sender
    - reciever
    - content

- Event
    - host
    - email
    - title
    - price
    - description
    - date
    - eventType
    - startTime
    - endTime
    - eventTime
    - address
    - tags[]

- Orders
    - id
    - seller 
    - product
    
- Product 
    - seller name
    - product name
    - description
    - rating
    - reviews
    - features
    - tags[]

- address
    - name
    - addressLine
    - city
    - province
    - postalCode

# Database
- getEvents
- getProducts

# API Routes
- GET
- POST
- PUT
- DELETE