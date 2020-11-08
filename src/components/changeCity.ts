import { AutoBind } from "../decorators/autobind";
import { usaCity } from "../usaCity";

export class ChangeCity {
  formElem: HTMLFormElement;
  changeButton: HTMLButtonElement;
  confirmButton: HTMLButtonElement;
  cancelButton: HTMLButtonElement;
  city: string | null;
  cityInputElem: HTMLInputElement;
  errorMsg: HTMLDivElement;
  constructor() {
    this.cityInputElem = document.querySelector("input")! as HTMLInputElement;
    this.formElem = document.querySelector("form")! as HTMLFormElement;
    this.changeButton = document.getElementById("change")! as HTMLButtonElement;
    this.confirmButton = document.getElementById(
      "confirm"
    )! as HTMLButtonElement;
    this.cancelButton = document.getElementById("cancel")! as HTMLButtonElement;
    this.errorMsg = document.getElementById("error-msg")! as HTMLDivElement;
    // set default city
    this.city = "seattle";

    this.configure();
  }

  configure() {
    this.changeButton.addEventListener("click", this.handleChangeBtnClicked);
    this.cancelButton.addEventListener("click", this.handleCancelBtnClicked);
    this.formElem.addEventListener("submit", this.setCity);
  }

  @AutoBind
  private setCity(event: Event) {
    event.preventDefault();
    this.errorMsg.style.visibility = "hidden";
    if (this.cityInputElem.value !== "") {
      if (
        !usaCity.some(
          (item) => item.label === this.cityInputElem.value.split(",")[0]
        )
      ) {
        this.errorMsg.style.visibility = "visible";
        this.city = null;
      } else {
        this.city = this.cityInputElem.value;
        //console.log("this.city:",this.city)
        this.errorMsg.style.visibility = "hidden";
        this.formElem.classList.add("hidden");
        // clear value after submit
        this.cityInputElem.value = "";
      }
    } else {
      this.errorMsg.style.visibility = "visible";
      this.city = null;
    }
  }

  @AutoBind
  private handleChangeBtnClicked() {
    this.formElem.classList.remove("hidden");
  }

  @AutoBind
  private handleCancelBtnClicked() {
    this.formElem.classList.add("hidden");
  }
}
