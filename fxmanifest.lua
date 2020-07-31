fx_version 'bodacious'
game 'gta5'

author 'Marcin "Mikut" Mikuła'
description 'Mikut\'s DM system for FiveM'
version '1.0.0'

ui_page 'html/index.html'

files {

    'html/*'

}

client_script 'dm_client.lua'
server_scripts {

    '@mysql-async/lib/MySQL.lua',
    'dm_server.lua'

}

dependencies {

    'es_extended',
    'mysql-async'

}