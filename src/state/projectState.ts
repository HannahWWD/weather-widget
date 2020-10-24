export class ProjectState {
    private cityName:string[] = []
    private static instance: ProjectState;
    private constructor(){

    }

    static getInstance(){
        if(this.instance){
            return this.instance
        }

        this.instance = new ProjectState();
        return this.instance
    }

    updateCityName(name:string){
        this.cityName[0] = name;

    }

    getCityName(){
        console.log("project state",this.cityName)
        return this.cityName.length>0 ? this.cityName[0]:'seattle'
    }

}
export const projectState = ProjectState.getInstance();