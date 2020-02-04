"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * These helpers help us to construct AST nodes required for Apollo
 * Federation's printSchema to work.
 */
function Name(value) {
    return {
        kind: "Name",
        value,
    };
}
exports.Name = Name;
function StringValue(value, block = false) {
    return {
        kind: "StringValue",
        value,
        block,
    };
}
exports.StringValue = StringValue;
function ObjectTypeDefinition(spec) {
    return {
        kind: "ObjectTypeDefinition",
        name: Name(spec.name),
        description: spec.description
            ? StringValue(spec.description, true)
            : undefined,
        directives: [],
    };
}
exports.ObjectTypeDefinition = ObjectTypeDefinition;
function Directive(name, args = {}) {
    return {
        kind: "Directive",
        name: Name(name),
        arguments: Object.entries(args).map(([argName, value]) => ({
            kind: "Argument",
            name: Name(argName),
            value,
        })),
    };
}
exports.Directive = Directive;
//# sourceMappingURL=AST.js.map