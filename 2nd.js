let Movie = function(pTitle, pRating){
    this.title = pTitle;
    this.rating = parseInt(pRating);
};

Movie.prototype.isValid = function(){
    if(this.title == " " || isNaN(this.rating) ){
        return false;
    }
    else if (this.rating < 1 || this.rating > 5){
        return false;
    }
    else{
        return true;
    }
};

Movie.prototype.GetAll = function(){
    return this.title + " with rating " + this.rating;
};
