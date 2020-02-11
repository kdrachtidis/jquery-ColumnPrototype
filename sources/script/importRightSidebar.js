function rightSidebarJSON(data){
    //Panel Head
    $("#right-sidebar .title .label").append(data.title);
    $("#right-sidebar .title .count").append(" (" + data.items.length + ")");

    //Panel Body - list
    $(data.items).each(function () {
        $('<li><a href="#">' + this.header + '</a></li>').appendTo("#resources ol");
    });
}