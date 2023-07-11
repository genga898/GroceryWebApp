using System.ComponentModel;

namespace Groceries.Data.Models;

public class Address
{
    public int Id { get; set; }
    public Users user { get; set; }
    public string County{get; set; }
    public string Town { get; set; }
    public string Street { get; set; }
    public string Estate { get; set; }
    [DisplayName("House Number")]
    public string HouseNumber { get; set; }
    [DisplayName("Created At")]
    public DateTime created_at{ get; set; }
}