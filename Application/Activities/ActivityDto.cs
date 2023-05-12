using Application.Profiles;

namespace Application.Activities
{
    public class ActivityDto
    {
        public Guid Id { get; set; } // id da atividade
        public string Title { get; set; } // nome da atividade
        public string Description { get; set; } // descrição da atividade
        public string HostUsername { get; set; }
        public ICollection<AttendeeDto> AttendeesProfiles { get; set; }
        public bool IsCancelled { get; set; }
    }
}