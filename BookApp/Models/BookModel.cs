
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookApp.Models
{
    public class BookModel
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "El nombre del libro es requerido")]
        public string Name { get; set; }
        [Required(ErrorMessage = "El autor del libro es requerido")]
        public string Author { get; set; }
        [Required(ErrorMessage = "La  sinipsis del libro es requerida")]
        public string Sinopsis { get; set; }
        [Required(ErrorMessage = "El inventario del libro es requerido")]
        public string Stock { get; set; }
        [Required(ErrorMessage = "El precio del libro es requerido")]
        public string Price { get; set; }
    }
}
