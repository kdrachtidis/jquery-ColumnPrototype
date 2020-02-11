function rightContainerJSON(data) {
    //Panel Heads
    $("#right-container .title .label").append(data.title);
    $("#right-container .title .count").append(" (" + data.items.length + ")");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<article>';
        htmlItem += '   <h3>' + this.title + '</h3>';
        htmlItem += '   <p class="details">created on ' + this.date + ', at ' + this.timestamp + ' by <a href="#">' + this.user + '</a></p>';
        htmlItem += '   <p class="message">' + this.message + '</p>';
        htmlItem += '</article>';
        $(htmlItem).appendTo("#timeline");
    });
}