---
slug: /config
title: Configuration
---

## Environment variables

You can configure the app at runtime using various environment variables:

- `SUNFLOWER__APIS__ICANHAZDADJOKE__HOST` -
  host of the icanhazdadjoke API
  (default: `icanhazdadjoke.com`)
- `SUNFLOWER__APIS__ICANHAZDADJOKE__PATH` -
  path of the icanhazdadjoke API
  (default: ``)
- `SUNFLOWER__APIS__ICANHAZDADJOKE__PORT` -
  port of the icanhazdadjoke API
  (default: ``)
- `SUNFLOWER__APIS__ICANHAZDADJOKE__SCHEME` -
  scheme of the icanhazdadjoke API
  (default: `https`)
- `SUNFLOWER__APPS` -
  apps to display as a JSON array of objects with `name`, `emoji` and `url`
  (default: `[]`)
- `SUNFLOWER__DEBUG` -
  enable debug mode
  (default: `true`)
- `SUNFLOWER__IDENTITY__USERS__DEBUG__ID` -
  identifier of the debug user
  (default: `debug`)
- `SUNFLOWER__IDENTITY__USERS__DEBUG__TRAITS__LOCALES__PREFERRED` -
  preferred locale of the debug user
  (default: ``)
- `SUNFLOWER__IDENTITY__USERS__DEBUG__TRAITS__NAMES__DISPLAY` -
  display name of the debug user
  (default: `Debug User`)
- `SUNFLOWER__IDENTITY__USERS__DEBUG__TRAITS__PICTURES__PROFILE__URL` -
  profile picture URL of the debug user
  (default: ``)
- `SUNFLOWER__SERVER__HOST` -
  host to run the server on
  (default: `0.0.0.0`)
- `SUNFLOWER__SERVER__PORT` -
  port to run the server on
  (default: `30000`)
- `SUNFLOWER__URLS__ORCHID__HOST` -
  host of the public URL of the orchid app
  (default: `localhost`)
- `SUNFLOWER__URLS__ORCHID__PATH` -
  path of the public URL of the orchid app
  (default: ``)
- `SUNFLOWER__URLS__ORCHID__PORT` -
  port of the public URL of the orchid app
  (default: `20120`)
- `SUNFLOWER__URLS__ORCHID__SCHEME` -
  scheme of the public URL of the orchid app
  (default: `http`)
