
## Models
WIP schema models
Minimum requirement for app to function, some records may be missing.

| Model | Records |
|-|-|
| User | id, firstName, lastName, username, password, email, biography, status, avatarImage, bannerImage, Addresses[], settings, Layers[], InventoryID, userType, Wallet[], Chats[], notifications[] |
| Post | id, user, userDescription, image, description, tags[], comments[], likes |
| Event | host, email, title, price, description, date, eventType, startTime, endTime, eventTime, address, tags[] |
| Orders | id, sellerID, productID, date, price |
| Address | id, name, addressLines[], city, province, postalCode |
| Chat | id, users[], history[], createdAt, createdBy |
| Message | id, date, sender, recieverID, content |
| Wallet | userID, cardNum, cardOwner |
| Layer | id, name, profileImage, banner, visibility, category, description, rules[] |
| Product (Potential duplicate of inventoryItem) | sellerID, seller, productName, description rating, reviews, features, type, tags |
| Inventory | id, userID, items[] |
| InventoryItem | id, name, description, rating, tags[] |

# Database Server commands
WIP API endpoints to mongoDB.
List of endpoints needed for app to function
```
- user
    loginSpotstitch(username: String, password: String)
    logoutSpotstitch(sessionToken: String)

    getNotifications(userID: String)
    getUnreadNotifications(userID: String)
    createSpotstitchNotification(userInput: NotificationInput) 
    updateSpotstitchNotification(userInput: SpotstitchNotificationInput)
    deleteNotification(notificationID: String)
    markNotificationAsRead(notificationID: String)
    markAllNotificationsAsRead(userID: String)
    
    getUserbyID(userID: String)
    updateSpotstitchUser(userInput: SpotstitchUserInput)
    updateSpotstitchUserSettings(userInput: UserSettingsInput)
    createSpotstitchUser(userInput: UserInput)
    deleteSpotstitchUser(userID: String)
- post
    getPosts() // get all posts
    getPostbyUser(userID: String)
    getPostbyID(postID: String)
    getPostbyLayer(layerID: String)
    getPostsForUser(userInterests: String[])
    getPostsFollowing(followedID: String[])
    createSpotstitchPost(userInput: PostInput)
    updateSpotstitchPost(userInput: PostInput)
    deleteSpotstitchPost(postID: String)
- event
    getEvents() // get all events
    createSpotstitchEvent(userInput: EventInput)
    updateSpotstitchEvent(userInput: SpotstitchEventInput)
- orders
    createSpotstitchOrder(userInput: OrderInput)
    updateSpotstitchOrder(userInput: OrderInput)
- address
    createSpotstitchAddress(userInput: SpotstitchAddressInput)
    updateSpotstitchAddress(userInput: SpotstitchAddressInput)
    deleteSpotstitchAddress(addressID: String)
- chat
    getChatHistory(chatID: String)
    getChatUsers(chatID: String)
    createSpotstitchChat(userInput: ChatInput)
- message
    createMessage(chatID: String, content: MessageInput)
    updateMessage(messageID: String)
    deleteMessage(messageID: String)
- wallet
    getSpotstitchWallet(userID: String)
    createSpotstitchWallet(userInput: SpotstitchWalletInput)
    updateSpotstitchWallet(userInput: SpotstitchWalletInput)
    deleteSpotstitchWallet(walletID: String)
- layer
    getLayers(userID: String) 
    getLayerbyID(layerID: String)
    createSpotstitchLayer(userInput: LayerInput)
    updateSpotstitchLayer(userInput: SpotstitchLayerInput)
- product
    getProducts() // get all products
    getProductbyID(productID: String)
    createSpotstitchProduct()
    updateSpotstitchProduct()
- inventory
    getInventory(userID: String)
    getInventoryItembyID(itemID: String)
    createSpotstitchInventory(userInput: InventoryInput)
    updateSpotstitchInventory(userInput: SpotstitchInventoryInput)
     
```

# API Routes
- GET
- POST
- PUT
- DELETE