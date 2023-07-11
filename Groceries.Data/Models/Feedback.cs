using System.ComponentModel;

namespace Groceries.Data.Models;

public class Feedback
{
    public int Id { get; set; }
    [DisplayName("Email Address")]
    public string emailAddress { get; set; }
    public string subject { get; set; }
    public string message { get; set; }
    public DateTime created_at { get; set;}
}