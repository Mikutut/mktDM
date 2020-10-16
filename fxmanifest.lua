fx_version "cerulean"
game "gta5"

author 'Marcin "Mikut" Mikuła'
description "Mikut's DM System for FiveM - Revision 2.0"
version '0.2.1'

ui_page "html/public/index.html"

files {
    "node_modules/*",
    "package.json",
    "package-lock.json",
    "html/*"
}

client_scripts {
    "client/client.js",
    "config/config.js"
}
server_scripts {
    "server/server.js",
    "config/config.js"
}