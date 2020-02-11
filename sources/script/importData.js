function getData() {
    $.ajax({
        dataType: "json",
        url: "./src/json/leftSidebar.min.json",
        success: leftSidebarJSON,
        error: function(){
            console.log('No left sidebar JSON found.');
        },
        complete: function(){
            console.log('Left sidebar JSON loaded.');
        }
    });

    $.ajax({
        dataType: "json",
        url: "./src/json/rightSidebar.min.json",
        success: rightSidebarJSON,
        error: function(){
            console.log('No right sidebar JSON found.');
        },
        complete: function(){
            console.log('Right sidebar JSON loaded.');
        }
    });

    $.ajax({
        dataType: "json",
        url: "./src/json/leftContainer.min.json",
        success: leftContainerJSON,
        error: function(){
            console.log('No left container JSON found.');
        },
        complete: function(){
            console.log('Left container JSON loaded.');
        }
    });

    $.ajax({
        dataType: "json",
        url: "./src/json/rightContainer.min.json",
        success: rightContainerJSON,
        error: function(){
            console.log('No right container JSON found.');
        },
        complete: function(){
            console.log('Right container JSON loaded.');
        }
    });
   
    $.ajax({
        dataType: "json",
        url: "./src/json/Object.min.json",
        success: mainContainerJSON,
        error: function(){
            console.log('No main container JSON found.');
        },
        complete: function(){
            console.log('Main container JSON loaded.');
        }
    });

    $.ajax({
        dataType: "json",
        url: "./src/json/simpleForm.min.json",
        success: simpleFormJSON,
        error: function(){
            console.log('No simple form JSON found.');
        },
        complete: function(){
            console.log('Simple form JSON loaded.');
        }
    });
}