using System.Web.Mvc;
using EPMS.Interfaces.IServices;

namespace IdentitySample.Controllers
{
    public class HomeController : Controller
    {
        public readonly IGroupService GroupService;

        public HomeController(IGroupService GroupService)
        {
            this.GroupService = GroupService;
        }

        public ActionResult Index()
        {
         //   var resposne = GroupService.GetGroup();
            return View();
        }

       
    }
}
