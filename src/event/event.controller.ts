import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    return this.eventService.createEvent(createEventDto);
  }

  @Get()
  getAllEvents() {
    return this.eventService.getAllEvents();
  }

  @Get(':id')
  getEventById(@Param('id') eventId: string) {
    return this.eventService.getEventById(+eventId);
  }

  @Patch(':id')
  updateEvent(@Param('id') eventId: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.updateEvent(+eventId, updateEventDto);
  }

  @Delete(':id')
  deleteEvent(@Param('id') eventId: string) {
    return this.eventService.deleteEvent(+eventId);
  }
}
