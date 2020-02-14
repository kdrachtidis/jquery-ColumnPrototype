$(document).ready(function () {
    $.when(getStructure()).done(function(){
        getLeftSidebarData('.');
        getLeftContainerData('.');
        getMainContainerData('.');
        getRightContainerData('.');
        getRightSidebarData('.');
    });
});