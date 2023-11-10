export class userData {
  public name: string = '';
  public email: string = '';
  public photoURL: string = '';
  public uid: string = '';
  public chat: string[] = [];
  public channel: string[] = [];

  public toJson() {
    return {
      name: this.name,
      email: this.email,
      photoURL: this.photoURL,
      uid: this.uid,
      chat: this.chat,
      channel: this.channel,
    };
  }
}
