

export function showPoster(movieData){
    console.log(movieData.Poster);
    poster.setAttribute('src', movieData.Poster);
}

export function showBasicInfo(movieData){
    console.log('show basic info called');
    //removeBasicInfoDivInfo();

    let title = movieData.Title;
    console.log(movieData.Title);
    let year = movieData.Year;
    let rated = movieData.Rated;
    let released = movieData.Released;
    let runtime = movieData.Runtime;

    basicInfoDiv.setAttribute('class', 'infoDiv');

    let removeH3 = document.querySelector('.infoHeader');
    if(removeH3 != null){
        removeH3.remove();
    }

    let basicInfoHeader = document.createElement('h3');
    basicInfoHeader.setAttribute('class', 'infoHeader');
    basicInfoHeader.innerHTML = 'General Information';
    basicInfoDiv.appendChild(basicInfoHeader);

    let removeTitle = document.getElementById('movieTitle');
    if(removeTitle != null){
        removeTitle.remove();
    }
    let p_title = document.createElement('p');
    p_title.setAttribute('class', 'basicInfo');
    p_title.setAttribute('id', 'movieTitle');
    p_title.innerHTML = 'Title: ' + title;
    basicInfoDiv.appendChild(p_title);

    let removeYear = document.getElementById('year');
    if(removeYear != null){
        removeYear.remove();
    }
    let p_year = document.createElement('p');
    p_year.setAttribute('class', 'basicInfo');
    p_year.setAttribute('id', 'year');
    p_year.innerHTML = 'Year: ' + year;
    basicInfoDiv.appendChild(p_year);

    let removeRated = document.getElementById('rated');
    if(removeRated != null){
        removeRated.remove();
    }
    let p_rated = document.createElement('p');
    p_rated.setAttribute('class', 'basicInfo');
    p_rated.setAttribute('id', 'rated');
    p_rated.innerHTML = 'Rated: ' + rated;
    basicInfoDiv.appendChild(p_rated);

    let removeReleased = document.getElementById('released');
    if(removeReleased != null){
        removeReleased.remove();
    }
    let p_released = document.createElement('p');
    p_released.setAttribute('class', 'basicInfo');
    p_released.setAttribute('id', 'released');
    p_released.innerHTML = 'Released: ' + released;
    basicInfoDiv.appendChild(p_released);

    let removeRuntime = document.getElementById('runtime');
    if(removeRuntime != null){
        removeRuntime.remove();
    }
    let p_runtime = document.createElement('p');
    p_runtime.setAttribute('class', 'basicInfo');
    p_runtime.setAttribute('id', 'runtime');
    p_runtime.innerHTML = 'Runtime: ' + runtime;
    basicInfoDiv.appendChild(p_runtime);
}

export function showPlotInfo(movieData){
    console.log('show plot info called');

    let plot = movieData.Plot;
    console.log(movieData.Plot);

    plotInfoDiv.setAttribute('class', 'infoDiv');

    let removeH3 = document.getElementById('plotInfoH3');
    if(removeH3 != null){
        removeH3.remove();
    }

    let plotInfoHeader = document.createElement('h3');
    plotInfoHeader.setAttribute('class', 'infoHeader');
    plotInfoHeader.setAttribute('id', 'plotInfoH3');
    plotInfoHeader.innerHTML = 'Plot Information';
    plotInfoDiv.appendChild(plotInfoHeader);

    let removePlot = document.getElementById('moviePlot');
    if(removePlot != null){
        removePlot.remove();
    }
    let p_plot = document.createElement('p');
    p_plot.setAttribute('class', 'plotInfo');
    p_plot.setAttribute('id', 'moviePlot');
    p_plot.innerHTML = plot;
    plotInfoDiv.appendChild(p_plot);
}

export function showRatingsInfo(movieData){
    console.log('show ratings info called');

    let ratings = movieData.Ratings;
    console.log(movieData.Ratings);
    const imdRating = ratings[0];
    const rtRating = ratings[1];
    const metaRating = ratings[2];

    ratingsInfoDiv.setAttribute('class', 'infoDiv');

    let removeH3 = document.querySelector('#ratingsInfoH3');
    if(removeH3 != null){
        removeH3.remove();
    }
    let ratingsInfoHeader = document.createElement('h3');
    ratingsInfoHeader.setAttribute('class', 'infoHeader');
    ratingsInfoHeader.setAttribute('id', 'ratingsInfoH3');
    ratingsInfoHeader.innerHTML = 'Ratings Information';
    ratingsInfoDiv.appendChild(ratingsInfoHeader);

    let removeImdRating = document.getElementById('imdRating');
    if(removeImdRating != null){
        removeImdRating.remove();
    }
    let p_imdRating = document.createElement('p');
    p_imdRating.setAttribute('class', 'ratingsInfo');
    p_imdRating.setAttribute('id', 'imdRating');
    p_imdRating.innerHTML = 'Source: ' + imdRating.Source + '<br>' + 'Rated: ' + imdRating.Value;
    ratingsInfoDiv.appendChild(p_imdRating);

    let removeRtRating = document.getElementById('rtRating');
    if(removeRtRating != null){
        removeRtRating.remove();
    }
    let p_rtRating = document.createElement('p');
    p_rtRating.setAttribute('class', 'ratingsInfo');
    p_rtRating.setAttribute('id', 'rtRating');
    p_rtRating.innerHTML = 'Source: ' + rtRating.Source + '<br>' + 'Rated: ' + rtRating.Value;
    ratingsInfoDiv.appendChild(p_rtRating);

    let removeMetaRating = document.getElementById('metaRating');
    if(removeMetaRating != null){
        removeMetaRating.remove();
    }
    let p_metaRating = document.createElement('p');
    p_metaRating.setAttribute('class', 'ratingsInfo');
    p_metaRating.setAttribute('id', 'metaRating');
    p_metaRating.innerHTML = 'Source: ' + metaRating.Source + '<br>' + 'Rated: ' + metaRating.Value;
    ratingsInfoDiv.appendChild(p_metaRating);    
}