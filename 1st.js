document.addEventListener("DOMContentLoaded", function (event) {

    
        document.getElementById("add_movie").addEventListener("click", newMovie);
        // see what this next line does!
        
    });
    
    let newMovie = function () {
        let movie = new movie(
            document.getElementById("nameOfMovie").value,
            document.getElementById("rateOfMovie").value,
        );
        if (!movie.isValid()) {
            alert("Please complete all fields. " +
                "Miles and gallons must be numeric " +
                "and greater than zero.");
        } else {
            movies.push(movie);  // storing each movie object created in the array, used as a "stack"
            displaymovies();
        }
        document.getElementById("nameOfMovie").focus();
    };
    
    
    
    // these are definations, this code is not executed on page load.
    let movies = [];
    
    // define the function used to calc and update screen output
    let displaymovies = function () {
        let displayString = "", mpgTotal = 0;
    
        for (let i in movies) {                            // JS for loop auto's from 0 to length of collection
            displayString += movies[i].toString() + "\n";  // use "overwrite" version of objects .ToString() method
            mpgTotal += movies[i].calculateMpg();          // use added method of object defintion
        }
        let cumulativeMpg = mpgTotal / movies.length;  // a little math and string catcatenation << bogus math!
        displayString += "\nCumulative MPG:" +
            cumulativeMpg.toFixed(1);
    
        document.getElementById("rateOfMovie").value = displayString; // update the data
        document.getElementById("nameOfMovie").select();           // make it easy to enter a new dest
    };
    
        