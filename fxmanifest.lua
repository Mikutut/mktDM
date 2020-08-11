fx_version 'bodacious'
game 'gta5'

author 'Marcin "Mikut" Mikuła'
description 'Mikut\'s DM system for FiveM'
version '1.1.0'

ui_page 'html/index.html'

files {

    'html/*'

}

client_scripts {

    'dm_config.lua',
    'dm_client.lua',
    'locales/locale.lua'

}
server_scripts {

    '@mysql-async/lib/MySQL.lua',
    'dm_server.lua',
    'dm_config.lua',
    'locales/locale.lua'

}

dependencies {

    'es_extended',
    'mysql-async'

}