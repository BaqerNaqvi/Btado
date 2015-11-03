using EPMS.Models.DomainModels;

namespace EPMS.Interfaces.Repository
{
    public interface IGroupRepository : IBaseRepository<Group, int>
    {
        Group GetAllGroups();
    }
}
