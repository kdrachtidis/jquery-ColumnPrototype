function rightSidebarJSON(data){
    //Panel Head
    $("#rightSidebar .fd-panel__title").append(data.title);
    $("#rightSidebar .fd-panel__description").append(data.description);
    $("#rightSidebar .fd-panel__footer").append(data.items.length + " items loaded successfully.");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;
        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '</li>';
        $(htmlItem).appendTo("#rightSidebar .fd-list");
    });
}

function getRightSidebarData(customPath){
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/rightSidebar.min.json',
        success: rightSidebarJSON,
        error: function(){
            console.log('No right sidebar JSON found.');
        },
        complete: function(){
            console.log('Right sidebar JSON loaded.');
        }
    });
}