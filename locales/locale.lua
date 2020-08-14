Locales = {}

-- ENGLISH LOCALES
Locales['en-US'] = {

    closePanel = "Close DM Panel",
    received = "Received",
    sent = "Sent",
    sendDM = "Send a DM",
    info = "Info",
    hideAll = "Hide main window",
    showMsg = "Show message",
    dateSentInTable = "Date and time of sending",
    msgSender = "Sender",
    msgReceiver = "Receiver",
    showLimit1 = "Show",
    showLimit2 = "messages",
    msgTopic = "Topic",
    dateSent = "Sent",
    msgContent = "Message",
    close = "Close",
    optional = "optional",
    sendDMConfirm = "Send",
    sendDMIDEmpty = "\"Receiver\" field mustn't be empty!",
    sendDMIDInvalid = "Provided ID is not valid!",
    playerOffline = "~h~~r~Player with provided ID (( %s )) is offline!~h~",
    IDInvalid = "~h~~r~Provided ID (( %s )) is not valid!~h~",
    DMSent = "~g~Message to ~b~%s ~h~(( %s ))~h~ ~g~has been successfully sent!",
    DMReceived = "~r~~h~You received new message!~n~~n~From: ~b~%s ~h~~n~~r~~h~Topic: ~b~%s ~h~~n~~n~~r~~h~To show it, open DM panel ( ~g~%s ~r~)~h~",
    DMReceivedNotify = "~r~~h~You received new message!~n~~n~From: ~b~%s ~h~~n~~r~~h~Topic: ~b~%s ~h~~n~~r~~h~Message:~h~ ~w~%s ~n~~n~~r~~h~To show more info about it, open DM panel ( ~g~%s ~r~)~h~",
    noTopic = "No topic",
    noMessage = "No message",
    advancedSearchBtn = "Advanced search",
    sortBy = "Sort by",
    show = "Show"

}

-- POLISH LOCALES
Locales['pl-PL'] = {

    closePanel = "Zamknij panel DMów",
    received = "Odebrane",
    sent = "Wysłane",
    sendDM = "Wyślij DM'a",
    info = "Informacje",
    hideAll = "Schowaj główne okienko",
    showMsg = "Wyświetl wiadomość",
    dateSentInTable = "Data i godzina wysłania",
    msgSender = "Nadawca",
    msgReceiver = "Adresat",
    showLimit1 = "Wyświetl",
    showLimit2 = "wiadomości",
    msgTopic = "Temat",
    dateSent = "Wysłano",
    msgContent = "Wiadomość",
    close = "Zamknij",
    optional = "opcjonalne",
    sendDMConfirm = "Wyślij",
    sendDMIDEmpty = "Pole \"Adresat\" nie może być puste!",
    sendDMIDInvalid = "Podane ID jest nieprawidłowe",
    playerOffline = "~h~~r~Gracz o podanym ID (( %s )) nie znajduje się obecnie na serwerze!~h~",
    IDInvalid = "~h~~r~Podane ID (( %s )) jest nieprawidłowe!~h~",
    DMSent = "~g~Wiadomość do ~b~%s ~h~(( %s ))~h~ ~g~została pomyślnie wysłana!",
    DMReceived = "~r~~h~Otrzymałeś nową wiadomość!~n~~n~Od: ~b~%s ~h~~n~~r~~h~Temat: ~b~%s ~h~~n~~n~~r~~h~Aby ją wyświetlić, otwórz panel DMów ( ~g~%s ~r~)~h~",
    DMReceivedNotify = "~r~~h~Otrzymałeś nową wiadomość!~h~~n~~n~~h~Od: ~b~%s ~h~~n~~r~~h~Temat: ~b~%s ~h~~n~~r~~h~Wiadomość:~h~ ~w~%s ~n~~n~~r~~h~Aby wyświetlić więcej szczegółów, otwórz panel DMów ( ~g~%s ~r~)~h~",
    noTopic = "Brak tematu",
    noMessage = "Brak wiadomości",
    advancedSearchBtn = "Zaawansowane wyszukiwanie",
    sortBy = "Sortuj według",
    show = "Wyświetl"


}


-- WHEN ADDING NEW LOCALES, PLEASE USE NAMING THAT CONSISTS OF:
-- 2-letter ISO 639-1 code (e.g. "pl, en, de, fr")
-- hyphen (-)
-- 2-letter ISO 3166-1 code (e.g. "PL, US, UK, DE")
-- EXAMPLES OF "PROPER" LOCALE NAME - "pl-PL", "en-US", "de-DE", "fr-CA"

-- OF COURSE MKT_DM WOULD STILL WORK WITH LOCALE NAMES THAT DON'T FIT THE SCHEMA ABOVE
-- BUT IT GIVES SOME SORT OF STANDARIZATION TO THE LOCALES

-- INSERT YOUR LOCALES BELOW 