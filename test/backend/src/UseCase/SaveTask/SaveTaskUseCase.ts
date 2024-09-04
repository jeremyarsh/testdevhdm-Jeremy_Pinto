import { BadRequestException, Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import TaskRepository from '../../Repositories/TaskRepository';
import SaveTaskDto from './SaveTaskDto';

@Injectable()
export default class SaveTaskUseCase implements UseCase<void, [SaveTaskDto]> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    try {
      await this.taskRepository.save(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
