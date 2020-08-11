# **MKT_DM**
## Mikut's DM system for FiveM

### Purpose
This resource allows players to send DMs (Direct Messages) to each other via chat command or neat NUI interface.

### Dependencies
This resource requires [es_extended](https://github.com/esx-framework/es_extended) and [mysql-async](https://github.com/brouznouf/fivem-mysql-async) resources to work.

### Installation
1. Download this resource
2. Place it anywhere in your (server-location)/resources folder
3. Add this line to `server.cfg` file in main server directory: `ensure 'mkt_dm'`
4. Import file `mkt_dm.sql` to your database.
5. Enjoy!

### Features
* Two ways of sending messages - chat command (w/o topic) or NUI Interface
* Localization
* Storing messages in SQL database
* Sending DMs from other resources via export function

### Usage
**To send DM to other player, you can use:**

**1. Chat command:**

`/dm [Server ID] [Message]`

**2. NUI Interface:**

**If you've just installed mkt_dm, the first thing you have to do in order to make NUI panel work is to set your default locale and hotkey.**
**To do these things, proceed as follows:**
1. Open `dm_config.lua`.
2. Locate `Keys` table (it should be at the top of the file) and choose the key of your preference.
3. Locate `Config.Hotkey` variable and set it to the key you have just chosen, e.g. `Config.Hotkey = Keys["F9"]` or `Config.Hotkey = Keys["BACKSPACE"]`.
4. Locate `Config.DefaultLocale` variable and set it to the locale of your preference (there are currently only two locales available - "pl-PL" and "en-US").
5. Save the file and close it.

**Now you should be able to open DM panel in-game.**



&copy; Mikut 2020
