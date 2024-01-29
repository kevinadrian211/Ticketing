import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async createEvent(createEventDto: CreateEventDto) {
    const createdEvent = await this.prisma.event.create({
      data: createEventDto,
    });
    return createdEvent;
  }

  async getAllEvents() {
    const events = await this.prisma.event.findMany();
    return events;
  }

  async getEventById(eventId: number) {
    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${eventId} not found`);
    }

    return event;
  }

  async updateEvent(eventId: number, updateEventDto: UpdateEventDto) {
    const updatedEvent = await this.prisma.event.update({
      where: { id: eventId },
      data: updateEventDto,
    });

    if (!updatedEvent) {
      throw new NotFoundException(`Event with ID ${eventId} not found`);
    }

    return updatedEvent;
  }

  async patchEvent(eventId: number, updateEventDto: UpdateEventDto) {
    const patchedEvent = await this.prisma.event.update({
      where: { id: eventId },
      data: updateEventDto,
    });

    if (!patchedEvent) {
      throw new NotFoundException(`Event with ID ${eventId} not found`);
    }

    return patchedEvent;
  }

  async deleteEvent(eventId: number) {
    const deletedEvent = await this.prisma.event.delete({
      where: { id: eventId },
    });

    if (!deletedEvent) {
      throw new NotFoundException(`Event with ID ${eventId} not found`);
    }

    return deletedEvent;
  }
}
