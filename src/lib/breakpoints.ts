export interface Breakpoint {
    name: string;
    media: string;
}

export const BREAKPOINTS: Breakpoint[] = [
    { name: "mobile", media: "(max-width: 480px)" },
    { name: "tablet", media: "(max-width: 768px)" },
    { name: "laptop", media: "(max-width: 1024px)" },
    { name: "desktop", media: "(max-width: 1280px)" },
    { name: "wide", media: "(min-width: 1281px)" }
];