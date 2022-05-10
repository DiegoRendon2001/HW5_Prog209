let movieArray = [];

document.addEventListener("DOMContentLoaded", function (event){
    document.getElementById("movieTitle").focus();

    document.getElementById("addMovie").addEventListener("click", newMovie);
    document.getElementById("showMovies").addEventListener("click", displayMovies);
});

let newMovie = function(){
    let movie = new Movie(
        document.getElementById("movieTitle").value,
        document.getElementById("movieRating").value
    );
    
    if (!movie.isValid()){
        alert("PLease fill in all the blanks.");
    }
    else{
        movieArray.push(movie);
        console.log(movieArray);
    }

    document.getElementById("movieTitle").value = "";
    document.getElementById("movieRating").value = "blank";

    document.getElementById("movieTitle").focus();
};

let displayMovies = function(){
    document.getElementById("movieList").innerHTML = "";

    let ul = document.createElement('ul');

    document.getElementById("movieList").appendChild(ul);

    movieArray.sort(function(a, b){return b.rating - a.rating});

    for (let i in movieArray){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = movieArray[i].GetAll();
    }
}
