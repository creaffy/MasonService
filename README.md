# MasonService

Shitty [Zombs Royale](https://zombsroyale.io) mason service websocket wrapper (if you can even call it that) that I made a long time ago + all API types translated to Typescript from C#.

This parses incoming messages and emits events based on that.

All outgoing messages are supported.

This repository is very unkikely to be maintained.

## How to use

1. Setup Typescript
2. Install `ws` module
3. Have fun, you should be able to figure out the rest

## Incoming messages

Here are all the messages that the server might send to you

```
clansData
partyInviteReceived
partyData
friendsData
partyStateUpdated
partyLeft
partyPlayerJoined
partyVersionUpdated
partyMetadataUpdated
partyGameModeUpdated
privateMessageReceived
friendUpdated
partyJoinServer
friendRequestRejected
partyPlayerUpdated
friendDeleted
friendRequests
partyPlayerLeft
clanMessageReceived
loggedIn
partyAutofillUpdated
friendRequestReceived
partyRegionUpdated
```
