function rightSidebarJSON(data){
    //Panel Head
    $("#rightSidebar .title .label").append(data.title);
    $("#rightSidebar .title .count").append(" (" + data.items.length + ")");

    //Panel Body - list
    $(data.items).each(function () {
        $('<li><a href="#">' + this.header + '</a></li>').appendTo("#rightSidebar .content ol");
    });
}

function getRightSidebarData(){
    $.ajax({
        dataType: "json",
        url: "../../src/json/rightSidebar.min.json",
        success: rightSidebarJSON,
        error: function(){
            console.log('No right sidebar JSON found.');
        },
        complete: function(){
            console.log('Right sidebar JSON loaded.');
        }
    });
}