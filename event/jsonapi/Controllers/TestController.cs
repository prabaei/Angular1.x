using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace jsonapi.Controllers
{
    public class TestController : ApiController
    {
        public JToken get(string id=null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(System.IO.File.ReadAllText(path+"../app/data/event/"+id+".json"));
        }
    }
}
