function getStructure() {
    $('#app-header').load('src/html/shellBar.min.html', function(){
        console.log('Shell bar loaded.');
    });
    $('#left-sidebar').load('src/html/leftSidebar.min.html #leftSidebar' , function(){
        console.log('Left sidebar loaded.');
    });
    $('#left-container').load('src/html/leftContainer.min.html #leftContainer' , function(){
        console.log('Left container loaded.');
    });
    $('#main-container').load('src/html/mainContainer.min.html #mainContainer' , function(){
        console.log('Main container loaded.');
    });
    $('#right-container').load('src/html/rightContainer.min.html #rightContainer' , function(){
        console.log('Right container loaded.');
    });
    $('#right-sidebar').load('src/html/rightSidebar.min.html #rightSidebar' , function(){
        console.log('Right sidebar loaded.');
    });
}