## API Routes  
Routes will be accessed through the version of their API
ex. version 1 will use /v1/
The specific model can then be accessed through their model name
ex. to access user would be /v1/user


#### user
/v1/user/login
/v1/user/register

#### address
/v1/address/add
/v1/address/edit
/v1/address/remove

#### chat
/v1/chat/:chatId
/v1/chat/message/:messageId/edit
/v1/chat/message/send
/v1/chat/message/:messageId/delete

#### events
/v1/event/all
/v1/event/:eventId
/v1/event/create
/v1/event/:eventId/update'
/v1/event/:eventId/cancel'

#### inventory
/v1/inventory

#### posts
/v1/post/all
/v1/post/:postId
/v1/post/create
/v1/post/:postId/comment
/v1/post/:postId/update
/v1/post/:postId/delete

#### products
/v1/product/:productId
/v1/product/all
/v1/product/create
/v1/product/:productId/edit
/v1/product/:productId/delete


#### layer


#### wallet
/v1/wallet/add
/v1/wallet/remove