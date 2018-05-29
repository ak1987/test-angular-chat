export class Message {
  userId: number;
  userName: string;
  text: string;
  datetime: string;
  type?: string = 'message';
}