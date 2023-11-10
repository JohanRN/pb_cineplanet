class Message {
  constructor(
    public status: number,
    public message: string,
    public data: any,

  ) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  response() {
    const objResponse = {
      statusCode: this.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this),
    }
    return objResponse;
  }
  responseToken() {
    const objResponse = {
      statusCode: this.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: this.status,
        data: this.data
      }),
    }
    return objResponse;
  }
}

export default Message;