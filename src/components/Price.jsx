import { text } from "../lang";
import { priceStr } from "../utils"

function SmallPrice({price: price, lang: lang}) {
    const p = priceStr(price);

    return <div className="flex align-items-center price-label">
        {p}
        <div style={{fontSize: "0.75rem"}}> ({text(lang, "smallPortion")})</div>
    </div>
}

function BigPrice({price: price, lang: lang}) {
    const p = priceStr(price);

    return <div  className="flex align-items-center price-label">
            {p}
            <div style={{fontSize: "0.75rem"}}> ({text(lang, "bigPortion")})</div>
        </div>
}

function RegularPrice({price: price}) {
    const p = priceStr(price);

    return <div className="flex align-items-center price-label">
        {p}
    </div>
}

export default function Price({entry: entry, lang: lang}) {
    let priceEl;

    if(entry.smallPrice || entry.bigPrice) {
        priceEl = <span>
            <RegularPrice price={entry.price}/>
            { entry.smallPrice && <SmallPrice price={entry.smallPrice} lang={lang}/>}
            { entry.bigPrice && <BigPrice price={entry.bigPrice} lang={lang}/>}
        </span>
    } else {
        priceEl = <RegularPrice price={entry.price}/>
    }

    return <div className="flex flex-column mr-2">
        {priceEl}
        </div>;
}
