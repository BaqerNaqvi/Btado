using System.Collections.Generic;

namespace EPMS.Models.DomainModels
{
   public class Contact
    {
        public long ContactId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public virtual ICollection<GroupContact> Groups { get; set; }
    }
}
