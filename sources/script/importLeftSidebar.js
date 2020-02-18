function leftSidebarJSON(data) {
    //Panel Head
    $("#leftSidebar .fd-panel__title").append(data.type);
    $("#leftSidebar .fd-panel__description").append(data.description);

    //Panel Body - List
    $.each(data.regions, function (i) {
        var htmlItem;

        htmlItem = '<li class="fd-list__group-header" id="group-' + this.id + '">' + this.name + ' ' + this.id + ' (' + this.items.length + ' items)</li>';
        $(htmlItem).appendTo('#leftSidebar .fd-list');

        $.each(data.regions[i].items, function () {
            var htmlItem;
    
            htmlItem = '<li class="fd-list__item">';
            htmlItem += '   <span class="fd-list__title">' + this.header + ' ' + this.id + '</span>';
            htmlItem += '</li>';
            $(htmlItem).insertAfter('#group-' + data.regions[i].id);
        });
    });

    //Panel Body - List footer
    var lastItem;
    lastItem = '<li class="fd-list__footer">' + data.regions.length + ' groups of tenants successfully loaded.</li>';

    $('#leftSidebar .fd-list').append(lastItem);
}

function getLeftSidebarData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/leftSidebar.min.json',
        success: leftSidebarJSON,
        error: function () {
            console.log('No left sidebar JSON found.');
        },
        complete: function () {
            console.log('Left sidebar JSON loaded.');
        }
    });
}