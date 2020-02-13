function leftSidebarJSON(data) {
    //Panel Head
    $("#drop-groupslist .label, #leftSidebar .title .label").append(data.title);
    $("#drop-groupslist .count, #leftSidebar .title .count").append(" (" + data.items.length + ")");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<li>';
        htmlItem += '   <h1>';
        htmlItem += '       <a href="#">' + this.header + '</a>';
        htmlItem += '   </h1>';
        htmlItem += '</li>';
        $(htmlItem).appendTo("#leftSidebar .content ol");

        if (this.header.length < 17) {
            $('<option>' + this.header + '</option>').appendTo("#drop-groupslist select");
        } else {
            $('<option>' + this.header.substr(0, 16) + '...</option>').appendTo("#drop-groupslist select");
        }
    });
}

function getLeftSidebarData() {
    $.ajax({
        dataType: "json",
        url: "../../src/json/leftSidebar.min.json",
        success: leftSidebarJSON,
        error: function () {
            console.log('No left sidebar JSON found.');
        },
        complete: function () {
            console.log('Left sidebar JSON loaded.');
        }
    });
}