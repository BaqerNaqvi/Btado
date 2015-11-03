using EPMS.Interfaces.Repository;
using EPMS.Models.DomainModels;
using EPMS.Repository.BaseRepository;
using Microsoft.Practices.Unity;
using System.Data.Entity;
using System.Linq;

namespace EPMS.Repository.Repositories
{
    public class GroupRepository : BaseRepository<Group>, IGroupRepository
    {
        #region Constructor
        /// <summary>
        /// Constructor
        /// </summary>
        public GroupRepository(IUnityContainer container)
            : base(container)
        {

        }
        /// <summary>
        /// Primary database set
        /// </summary>
        protected override IDbSet<Group> DbSet
        {
            get { return db.Groups; }
        }
        #endregion

        public Group GetAllGroups()
        {
            return DbSet.FirstOrDefault(group => group.GroupId==1);
        }
    }
}