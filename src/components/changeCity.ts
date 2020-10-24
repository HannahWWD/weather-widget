import {AutoBind} from '../decorators/autobind';
// import {projectState} from '../state/projectState'

export class ChangeCity {
    formElem:HTMLFormElement;
    changeButton:HTMLButtonElement;
    confirmButton:HTMLButtonElement;
    cancelButton:HTMLButtonElement;
    city:string;
    cityInputElem:HTMLInputElement;
    constructor(){
        this.cityInputElem = document.querySelector('input')! as HTMLInputElement;
        this.formElem = document.querySelector('form') ! as HTMLFormElement;
        this.changeButton = document.getElementById('change') ! as HTMLButtonElement;
        this.confirmButton = document.getElementById('confirm') ! as HTMLButtonElement;
        this.cancelButton = document.getElementById('cancel') ! as HTMLButtonElement;
        // set default city
        this.city = 'seattle'
        
        this.configure()
    }

    configure(){
        this.changeButton.addEventListener('click',this.handleChangeBtnClicked)
        this.cancelButton.addEventListener('click',this.handleCancelBtnClicked)
        this.formElem.addEventListener('submit',this.setCity)
    }

    @AutoBind
    private setCity(event:Event){
        event.preventDefault();
        if(this.cityInputElem.value){
          this.city = this.cityInputElem.value
           //console.log("this.city:",this.city)
            this.formElem.classList.add('hidden')
        }
       

    }

    @AutoBind
    private handleChangeBtnClicked(){
        this.formElem.classList.remove('hidden')
    }

    @AutoBind
    private handleCancelBtnClicked(){
        this.formElem.classList.add('hidden')
    }


}