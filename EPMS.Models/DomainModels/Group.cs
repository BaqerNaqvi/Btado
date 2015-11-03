
using System.Collections.Generic;

namespace EPMS.Models.DomainModels
{
    public class Group
    {
        public long GroupId { get; set; }

        public string GroupName { get; set; }

        public string Description { get; set; }

        public virtual ICollection<GroupContact> Contacts { get; set; }
    }
}
