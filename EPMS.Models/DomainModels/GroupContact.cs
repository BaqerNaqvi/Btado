
namespace EPMS.Models.DomainModels
{
   public class GroupContact
    {
       public long GroupContactId { get; set; }

       public long ContactId { get; set; }

       public long GroupId { get; set; }

       public virtual Contact Contact { get; set; }
       public virtual Group Group { get; set; }
    }
}
