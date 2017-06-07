using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace jsonapi.Controllers
{
    public class EventController : ApiController
    {
        public JToken Get([FromUri]string id = null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(File.ReadAllText(path + "/data/" + id + ".json"));
        }
    }
}
