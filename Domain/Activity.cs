using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; } // id da atividade
        
       // [Required]
        public string Title { get; set; } // nome da atividade
        public string Description { get; set; } // descrição da atividade
        public ICollection<ActivityAttendee> AttendeesActivity { get; set; } = new List<ActivityAttendee>();
        public bool IsCancelled { get; set; }

    }
}