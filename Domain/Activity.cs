using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        public Guid Id { get; set; } // id da atividade
        public string Title { get; set; } // nome da atividade
        public string Description { get; set; } // descrição da atividade

    }
}