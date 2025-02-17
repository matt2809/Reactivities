using System;
using Application.Activities.Command;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers;

public class ActivitiesController: BaseAPIController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActiviityDetail(string id)
    {
        return await Mediator.Send(new GetActvityDetails.Query() { Id = id });
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity([FromBody] Activity activity)
    {
        return await Mediator.Send(new CreateActivity.Command() { Activity = activity });
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(Activity activity)
    {   
        await Mediator.Send(new EditActivity.Command() { Activity = activity });
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command() { Id = id });
        return NoContent();
    }

}
