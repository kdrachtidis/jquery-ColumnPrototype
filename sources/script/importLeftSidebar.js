function leftSidebarJSON(data) {
    //Panel Head
    $("#drop-groupslist .label, #leftSidebar .fd-panel__title").append(data.title);
    $("#drop-groupslist .label, #leftSidebar .fd-panel__description").append(data.description);
    $("#drop-groupslist .count, #leftSidebar .fd-panel__footer").append(data.items.length + " items loaded succesfully.");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<li class="fd-list__item">';
        htmlItem += '   <span class="fd-list__title">' + this.header + '</span>';
        htmlItem += '</li>';
        $(htmlItem).appendTo("#leftSidebar .fd-list");

        if (this.header.length < 17) {
            $('<option>' + this.header + '</option>').appendTo("#drop-groupslist select");
        } else {
            $('<option>' + this.header.substr(0, 16) + '...</option>').appendTo("#drop-groupslist select");
        }
    });
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