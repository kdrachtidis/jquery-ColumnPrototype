function leftSidebarJSON(data) {
    //Panel Head
    $("#drop-groupslist .label, #left-sidebar .title .label").append(data.title);
    $("#drop-groupslist .count, #left-sidebar .title .count").append(" (" + data.items.length + ")");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<li>';
        htmlItem += '   <h1>';
        htmlItem += '       <a href="#">' + this.header + '</a>';
        htmlItem += '   </h1>';
        htmlItem += '</li>';
        $(htmlItem).appendTo("#groupslist ol");

        if (this.header.length < 17) {
            $('<option>' + this.header + '</option>').appendTo("#drop-groupslist select");
        } else {
            $('<option>' + this.header.substr(0, 16) + '...</option>').appendTo("#drop-groupslist select");
        }
    });
}