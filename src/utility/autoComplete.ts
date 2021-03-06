import {usaCity} from '../usaCity'
import {AutoComplete} from '../interfaces/autoComplete_interface'
import autocomplete from 'autocompleter'

const input = document.getElementById('auto-complete') ! as HTMLInputElement;

autocomplete<AutoComplete>(
    {
        input:input,
        emptyMsg:"No City Found",
        minLength:1,
        fetch:(text:string,update:(items:AutoComplete[])=>void)=>{
            text = text.toLowerCase();
            const suggestions = usaCity.filter(item=>`${item.label},${item.state}`.toLowerCase().startsWith(text)).slice(0,10)
            update(suggestions)
        },
        onSelect:(item:AutoComplete)=>{
            input.value = `${item.label},${item.state}`
        },
        render: function(item: AutoComplete): HTMLDivElement | undefined {
            const itemElement = document.createElement("div");
            itemElement.textContent = `${item.label},${item.state}`
            return itemElement;
        }
    }
)