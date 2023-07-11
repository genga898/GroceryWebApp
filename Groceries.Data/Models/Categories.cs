using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Groceries.Data.Models;

public class Categories
{
    [Key]
    public int ID{ get; set; }
    public string Name{ get; set; }
    public string Description{ get; set; }
    public string ImageUrl{ get; set; }
    [DisplayName("Created At")]
    public DateTime created_at{ get; set; }
}