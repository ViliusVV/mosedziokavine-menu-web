import i8n from "./assets/i8n.json";

export function text(lang, stringKey) {
    return i8n[stringKey][lang];
}