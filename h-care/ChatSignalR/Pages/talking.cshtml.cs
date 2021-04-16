using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;

namespace ChatSignalR.Pages
{
    public class TalkingModel : PageModel
    {
        public string _message { get; private set; } = "";
        public string _session { get; private set; } = "";
        public string _user { get; private set; } = "";

        public void OnGet(string session, string user)
        {
            _session = session;
            _user = user; 
            _message += _message + $" Server time is { DateTime.Now }";
        }
    }
}