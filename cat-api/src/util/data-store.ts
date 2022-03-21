import { Injectable } from '@nestjs/common';

export const DATA_STORE = Symbol();

@Injectable()
export class DataStore {
  private readonly entries = new Map<string, unknown>();

  getAll() {
    return [...this.entries.values()];
  }

  getById(id: string) {
    return this.entries.get(id);
  }

  removeById(id: string) {
    this.entries.delete(id);
  }

  upsert(id: string, data: unknown) {
    return this.entries.set(id, data);
  }
}
