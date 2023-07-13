using System.ComponentModel;

namespace Groceries.Data.Models;

public class Feedback
{
    public int Id { get; set; }
    [DisplayName("Email Address")]
    public string emailAddress { get; set; }
    public string Subject { get; set; }
    public string Message { get; set; }
    [DisplayName("Submitted:")]
    public DateTime created_at { get; set;}
}