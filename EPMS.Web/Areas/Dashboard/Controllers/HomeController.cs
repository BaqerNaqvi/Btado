using System.Web.Mvc;

namespace EPMS.Web.Areas.Dashboard.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        
        [Authorize]
        // GET: /Dashboard/Home/
        public ActionResult Index()
        {
            return View();
        }
	}
}