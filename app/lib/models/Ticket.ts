import { getModelForClass, prop } from '@typegoose/typegoose';

// Define enums for better type safety
export enum TicketStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  ON_HOLD = 'On Hold',
}

export enum TicketCategory {
  BUG = 'Bug',
  FEATURE = 'Feature',
  IMPROVEMENT = 'Improvement',
  SUPPORT = 'Support',
}

export enum Priority {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}

export class Ticket {
  @prop({ required: true })
  public title!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true, enum: TicketCategory, default: TicketCategory.BUG })
  public category!: TicketCategory;

  @prop({ enum: Priority, default: Priority.THREE })
  public priority!: Priority;

  @prop({ min: 0, max: 100, default: 0 })
  public progress!: number;

  @prop({
    required: true,
    enum: TicketStatus,
    default: TicketStatus.NOT_STARTED,
  })
  public status!: TicketStatus;

  @prop({ required: true, default: true })
  public active!: boolean;

  @prop({ default: Date.now })
  public createdDate!: Date;

  @prop()
  public updatedDate?: Date;
}

export const TicketModel = getModelForClass(Ticket);
