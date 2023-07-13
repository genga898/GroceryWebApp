using System.ComponentModel;

namespace Groceries.Data.Models;

public class ContactInfo
{
    public int Id { get; set; }
    public Users User { get; set; }
    [DisplayName("Phone Number")]
    public string Contact { get; set; }
}