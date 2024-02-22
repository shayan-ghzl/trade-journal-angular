export interface IParam {
    [param: string]: string | number | boolean;
}

export interface IQuery {
    [param: string]: string | number | boolean;
}

export interface IQueryRegister extends IQuery {
    email: string;
}

export interface IParamLogin extends IParam {
    email: string;
    password: string;
}

export interface IQueryRegisterVerify extends IQuery {
    key: string;
    password: string;
    secret: string;
}

export interface IParamLoginVerify extends IQuery {
    key: string;
    secret: string;
}

export interface IQuerySessions extends IQuery {
    sessionId: string;
    name: string;
    description: string;
}