using EPMS.Implementation.Identity;
using EPMS.Implementation.Services;
using EPMS.Interfaces.IServices;
using EPMS.Models.IdentityModels;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Practices.Unity;

namespace EPMS.Implementation
{
    public static class TypeRegistrations
    {
        public static void RegisterType(IUnityContainer unityContainer)
        {
            UnityConfig.UnityContainer = unityContainer;
            EPMS.Repository.TypeRegistrations.RegisterType(unityContainer);
            unityContainer.RegisterType<IMenuRightsService, MenuRightsService>();
            unityContainer.RegisterType<ILogger, LoggerService>();
            unityContainer.RegisterType<IMenuRightsService, MenuRightsService>();
            unityContainer.RegisterType<IGroupService, GroupService>();


            unityContainer.RegisterType<IUserStore<ApplicationUser>, UserStore<ApplicationUser>>();
        }
    }
}
