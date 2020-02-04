export declare function Name(value: string): {
    kind: string;
    value: string;
};
export declare function StringValue(value: string, block?: boolean): {
    kind: string;
    value: string;
    block: boolean;
};
export declare function ObjectTypeDefinition(spec: {
    name: string;
    description?: string | null;
}): {
    kind: string;
    name: {
        kind: string;
        value: string;
    };
    description: {
        kind: string;
        value: string;
        block: boolean;
    } | undefined;
    directives: never[];
};
export declare function Directive(name: string, args?: {
    [argName: string]: any;
}): {
    kind: string;
    name: {
        kind: string;
        value: string;
    };
    arguments: {
        kind: string;
        name: {
            kind: string;
            value: string;
        };
        value: any;
    }[];
};
