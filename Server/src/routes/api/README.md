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
/v1/event/:eventId/update
/v1/event/:eventId/cancel

#### inventory
/v1/inventory/game/:userId
/v1/inventory/game/create/:userId
/v1/inventory/game/add/:userId/:productId
/v1/inventory/game/delete/:userId/:productId

/v1/inventory/product/:userId
/v1/inventory/product/create/:userId
/v1/inventory/product/add/:userId/:productId
/v1/inventory/product/delete/:userId/:productId

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
/v1/layer/all
/v1/layer/:layerId
/v1/layer/create
/v1/layer/:layerId/update
/v1/layer/:layerId/delete

#### wallet
/v1/wallet/add
/v1/wallet/remove