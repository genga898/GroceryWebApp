using System.ComponentModel;

namespace Groceries.Data.Models;

public class Products
{
    public int Id { get; set; }
    [DisplayName("Product Name")]
    public string productName{get; set; }
    public decimal Price{get; set; }
    public int quantity{get; set; }
    public string ImageUrl{get; set; }
    public Categories Categories{get; set; }
    public string Category{get; set; }
    [DisplayName("Created At")]
    public DateTime created_at{get; set; }
}