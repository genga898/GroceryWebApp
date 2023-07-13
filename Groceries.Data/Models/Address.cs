using System.ComponentModel;

namespace Groceries.Data.Models;

public class Address
{
    public int Id { get; set; }
    public Users User { get; set; }
    public string County{get; set; }
    public string Town { get; set; }
    public string Street { get; set; }
    public string Estate { get; set; }
    [DisplayName("House Number")]
    public string HouseNumber { get; set; }
}