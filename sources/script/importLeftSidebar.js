function leftSidebarJSON(data) {
    //Panel Head
    $("#drop-groupslist .label, #leftSidebar .fd-panel__title").append(data.title);
    $("#drop-groupslist .label, #leftSidebar .fd-panel__description").append(data.description);

    //Panel Body - list
    $.each(data.regions, function (i, item) {
        var htmlItem;

        htmlItem = '<li class="fd-list__group-header" id="group-' + this.id + '">' + this.name + ' ' + this.id + ' (' + this.items.length + ' items)</li>';
        $(htmlItem).appendTo('#leftSidebar .fd-list');

        $(data.regions[i].items).each(function () {
            var htmlItem;
    
            htmlItem = '<li class="fd-list__item">';
            htmlItem += '   <span class="fd-list__title">' + this.header + ' ' + this.id + '</span>';
            htmlItem += '</li>';
            $(htmlItem).insertAfter('#leftSidebar #group-' + data.regions[i].id);
    
            $('<option>' + this.header + '</option>').appendTo("#drop-groupslist select");
            
        });
    });

    //Panel Footer
    $("#drop-groupslist .count, #leftSidebar .fd-panel__footer").append(data.regions.length + ' groups of tenants successfully loaded.');
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