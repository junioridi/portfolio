from telethon import TelegramClient, sync

groupname = 'Super Grupo - Portal Rubem Gonzalez'


api_id = '2509032'
api_hash = 'fa7c51f27e187123c89c2ab85af9c12b'

client = TelegramClient('Manazona', api_id, api_hash).start()

# get all the channels that I can access
channels = {d.entity.username: d.entity
            for d in client.get_dialogs()
            if d.is_channel}
channel_name = 'SuperGrupoPortalRubemGonzalez' 

# choose the one that I want list users from
#channel = channels[channel_name]
#dialogs = client.get_dialogs()
dialogs = {d.name: d.entity
            for d in client.get_dialogs()
           }

# get all the users and print them
#for u in client.get_participants(dialogs[3].entity,limit=0):
#    print(u.id, u.first_name, u.last_name, u.username, u.access_hash)

#for u in client.get_participants(channel):
#    print(u.id, u.first_name, u.last_name, u.username, u.access_hash)


#for i in channels:
#    print(i)

#for u in dialogs:
#    print(u)

for u in dialogs:
    print(u)
#for u in dialogs:
#    print(u.name)

#print(dialogs[3])

#for u in client.get_participants(dialogs[3].entity,aggressive=True):
#    print(u.username, u.first_name, u.last_name, u.username, u.id, u.access_hash)

print(client.get_participants(dialogs[groupname],limit=0).total)
#print(dialogs['Comando e Controle'])
print(dialogs[groupname])
client.disconnect()
