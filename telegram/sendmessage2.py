from telethon import TelegramClient, sync
from telethon.tl.types import InputPeerUser, InputPeerChannel 
import time
import random

groupname = 'Super Grupo - Portal Rubem Gonzalez'
message =  'Aldo Rebelo adverte contra a banalização do impeachment https://jornalpurosangue.com/2021/01/20/aldo-rebelo-adverte-contra-a-banalizacao-do-impeachment/'

#api_id = '2084377'
#api_hash = 'c650d0a994eeca50b707b31f9a324e73'
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


#print(client.get_participants(dialogs[3].entity,limit=0).total)
print(dialogs[groupname])
SLEEP_TIME = 30
for u in client.get_participants(dialogs[groupname],aggressive=True):
    try:
        print(u.username, u.first_name, u.last_name, u.username, u.id, u.access_hash)
        receiver = InputPeerUser(u.id, u.access_hash) 
        # sending message using telegram client 
        client.send_message(receiver, message, parse_mode='html') 
        print(message)
        time.sleep(1+random.randrange(10))

    except PeerFloodError:
        print("Getting Flood Error from telegram. Script is stopping now. Please try again after some time.")
        client.disconnect()
        sys.exit()
