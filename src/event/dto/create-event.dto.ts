import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
  @ApiProperty({ example: 'Concert' })
  title: string;

  @ApiProperty({ example: '2024-02-01T20:00:00Z' })
  date: Date;

  @ApiProperty({ example: 'Music Hall' })
  venue: string;
}
