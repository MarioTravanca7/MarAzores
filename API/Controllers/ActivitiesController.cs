using Application;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet] // api/activities
        public async Task<ActionResult<List<Activity>>> GetAtcivities() // retorna aguma coisa
        {

            return await Mediator.Send( new List.Query());
        }

        [HttpGet("{id}")] // api/activities/id
        public async Task<ActionResult<Activity>> GetActivity(Guid id){ // Retorna
            return await Mediator.Send( new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity){ // não retorna nada
             return Ok(await Mediator.Send(new Create.Command {ActivityVar = activity}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity){
            activity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {ActivityVar = activity}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActiivty(Guid id){
            return Ok(await Mediator.Send(new Delete.Command {IdDelete = id }));
        }
    }
}