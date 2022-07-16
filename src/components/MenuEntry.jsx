import Price from "./Price";
import "./MenuEntry.scss"

export default function MenuEntry({entry: entry, lang: lang}) {
    const hasImage = entry.img ? true: false;
    const noImage = hasImage ? '': ' no-image'
    const className = "MenuEntry shadow-2 flex align-items-center mb-2 mt-2" + noImage

    return <div className="flex justify-content-center">
        <div className={className}>
            { hasImage &&
            <div className="flex-none flex item-photo">

            </div>
            }
            
            <div className="flex-grow-1 flex ml-2 flex-column">
                <div className="title">{entry.title[lang]}</div>

                { entry.description &&
                    <div className="description">
                        {entry.description[lang]}
                    </div>
                }
                
            </div>

            <div className="flex-none flex justify-content-end">
                <div className="flex">
                    <Price entry={entry} lang={lang}/>
                </div>
            </div>
        </div>
    </div>
}