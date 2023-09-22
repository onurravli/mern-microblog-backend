import { ObjectId } from 'mongodb'

export class Post {
  constructor(
    public author: string,
    public title: string,
    public content: string,
    public date: number,
    public id?: ObjectId
  ) {}
}
