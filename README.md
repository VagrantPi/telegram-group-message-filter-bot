# telegram-group-message-filter-bot

過濾群組訊息的 Bot，轉發單一用戶訊息到 toChatId 中

Set Env:

- token: telegram bot token
- fromChatId: 轉發的來源 chatId
- toChatId: 轉發的目標 chatId
- userId: 只轉發該用戶訊息

## Deploy to HEROKU

### Prepare

```
$ heroku login
heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com
```

### Create app

```
$ heroku create 專案名稱
```

### Set ENV

https://dashboard.heroku.com/apps/benson-trading-telegram-bot/settings

> Config Vars

### deploy 

```
$ git push heroku master
```


