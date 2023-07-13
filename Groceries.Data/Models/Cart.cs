namespace Groceries.Data.Models;

public class Cart
{
    public int Id { get; set; }
    public Products Product { get; set; }
    public string prodName { get; set; }
    public int Quantity { get; set;}
    public Users users { get; set; }
    public string user{get; set; }
    public DateTime created_at { get; set; }
}