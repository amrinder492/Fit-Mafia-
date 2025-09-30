
export class ApiResponse<T = unknown> {
    statusCode: number;   
    message: string;
    data?: T;
    token?: string;

    constructor(
        statusCode: number,
        message: string,
        data?: T,
        token?: string,
    )
    {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.token = token;
    }
}