import { SourceLocation } from './ast';

export class IncompleteParseError extends Error {
    public readonly name: 'IncompleteParseError' = 'IncompleteParseError';
    constructor(msg: string) {
        super(msg);
    }
}

export class ImpossibleError extends Error {
    public readonly name: 'ImpossibleError' = 'ImpossibleError';
    constructor(msg: string) {
        super(msg);
    }
}

export class ParsingError extends Error {
    public readonly name: 'ParsingError' = 'ParsingError';
    loc: null | SourceLocation;
    constructor(syn: SourceLocation | { loc?: SourceLocation }, msg: string) {
        super(msg);
        const loc = 'start' in syn ? syn : syn.loc ? syn.loc : null;
        this.loc = loc;
    }
}
