using System.Collections.Generic;
using System.Linq;
using EPMS.Models.DomainModels;
using Microsoft.AspNet.Identity.EntityFramework;
using EPMS.Interfaces.IServices;
using EPMS.Interfaces.Repository;
using EPMS.Models.MenuModels;

namespace EPMS.Implementation.Services
{
    /// <summary>
    /// Menu Rights Service
    /// </summary>
    public sealed class GroupService: IGroupService
    {
        #region Private

        private readonly IGroupRepository groupRepository;

        #endregion

        #region Constructor
        /// <summary>
        /// Constructor
        /// </summary>
        public GroupService(IGroupRepository groupRepository)
        {
            this.groupRepository = groupRepository;
        }

        #endregion

        #region Public
       

        #endregion

        public Group GetGroup()
        {
            return groupRepository.GetAllGroups();
        }
    }
}
