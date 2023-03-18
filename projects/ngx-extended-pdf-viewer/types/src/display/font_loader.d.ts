export class FontFaceObject {
    constructor(translatedData: any, { isEvalSupported, disableFontFace, ignoreErrors, fontRegistry, }: {
        isEvalSupported?: boolean | undefined;
        disableFontFace?: boolean | undefined;
        ignoreErrors?: boolean | undefined;
        fontRegistry?: null | undefined;
    });
    compiledGlyphs: any;
    isEvalSupported: boolean;
    disableFontFace: boolean;
    ignoreErrors: boolean;
    fontRegistry: any;
    createNativeFontFace(): FontFace | null;
    createFontFaceRule(): string | null;
    getPathGenerator(objs: any, character: any): any;
}
export class FontLoader {
    constructor({ ownerDocument, styleElement, }: {
        ownerDocument?: Document | undefined;
        styleElement?: null | undefined;
    });
    _document: Document;
    nativeFontFaces: any[];
    styleElement: HTMLStyleElement | null;
    loadingRequests: any[] | undefined;
    loadTestFontId: number | undefined;
    addNativeFontFace(nativeFontFace: any): void;
    insertRule(rule: any): void;
    clear(): void;
    bind(font: any): Promise<void>;
    get isFontLoadingAPISupported(): any;
    get isSyncFontLoadingSupported(): any;
    _queueLoadingCallback(callback: any): {
        done: boolean;
        complete: () => void;
        callback: any;
    };
    get _loadTestFont(): any;
    _prepareFontLoadEvent(font: any, request: any): void;
}
