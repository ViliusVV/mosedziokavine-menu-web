import MenuEntry from "./MenuEntry";

export default function MenuSection({section: section, lang: lang}) {
    
    return <>
        <h1>{section.title[lang]}</h1>
        <hr/>
        { section.items && section.items.map(item => {
            return <MenuEntry key={item.title.en} entry={item} lang={lang}/>
        })}
    </>;
}
