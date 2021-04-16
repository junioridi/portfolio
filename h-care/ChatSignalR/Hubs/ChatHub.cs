using Microsoft.AspNetCore.SignalR;
using System.Diagnostics;
using System.Threading.Tasks;

namespace ChatSignalR.Hubs
{
    [DebuggerDisplay("{" + nameof(GetDebuggerDisplay) + "(),nq}")]
    public class ChatHub : Hub
    {
        public async Task JoinRoom(string mysession)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, mysession);
        }
        public async Task SendMessage(string mysession, string user, string message)
        {
            await Clients.Group(mysession).SendAsync("ReceiveMessage", user, message);
            //await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
        private string GetDebuggerDisplay()
        {
            return ToString();
        }
    }
}
