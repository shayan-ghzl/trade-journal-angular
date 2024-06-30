export interface IParam {
    [param: string]: string | number | boolean;
}

export interface IQuery {
    [param: string]: string | number | boolean;
}

export interface IParamRegister extends IParam {
    email: string;
}

export interface IParamLogin extends IParam {
    email: string;
    password: string;
}

export interface IParamRegisterVerify extends IParam {
    key: string;
    password: string;
    secret: string;
}

export interface IParamLoginVerify extends IParam {
    key: string;
    secret: string;
}

export interface IParamSessions extends IParam {
    sessionId: string;
    name: string;
    description: string;
}