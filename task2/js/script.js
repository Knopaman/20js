$(function(){


    $.getJSON('https://raw.​githubusercontent.​com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(dataSkills){

        skills = (_.flattenDeep(_.map(dataSkills,'skills'))).sort();
        console.log(skills);

    });

    $.getJSON('https://raw.​githubusercontent.​com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(dataName){

        names = _.map(_.sortBy(dataName, function(obj){return obj.friends.length;}), 'name');

        console.log(names);

    });

    $.getJSON('https://raw.​githubusercontent.​com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(dataSkills){

        friends = _.uniq(_.flattenDeep(_.map(dataSkills,'friends'))).sort();

        console.log(friends);

    });


});