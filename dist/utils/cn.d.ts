export type ClassValue = string | undefined | null | false | ClassValue[] | Record<string, boolean>;
export declare const cn: (...values: ClassValue[]) => string;
export default cn;
