
import { showPoster, showBasicInfo, showPlotInfo, showRatingsInfo } from "./showInfo.js";
import { titleInput } from "./fetch.js";

let movieData;

export function getData(result){
    console.log(result);
    movieData = result;
    
    showPoster(movieData);
    showBasicInfo(movieData);
    showPlotInfo(movieData);
    showRatingsInfo(movieData);

    titleInput.value = " ";
}