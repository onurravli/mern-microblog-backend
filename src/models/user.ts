import { ObjectId } from 'mongodb'

export class User {
  constructor(
    public email: string,
    public password: string,
    public id?: ObjectId
  ) {}
}
