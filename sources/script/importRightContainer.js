function rightContainerJSON(data) {
    //Panel Heads
    $("#rightContainer .title .label").append(data.title);
    $("#rightContainer .title .count").append(" (" + data.items.length + ")");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<article>';
        htmlItem += '   <h3>' + this.title + '</h3>';
        htmlItem += '   <p class="details">created on ' + this.date + ', at ' + this.timestamp + ' by <a href="#">' + this.user + '</a></p>';
        htmlItem += '   <p class="message">' + this.message + '</p>';
        htmlItem += '</article>';
        $(htmlItem).appendTo("#rightContainer .content");
    });
}

function getRightContainerData() {
    $.ajax({
        dataType: "json",
        url: "../../src/json/rightContainer.min.json",
        success: rightContainerJSON,
        error: function () {
            console.log('No right container JSON found.');
        },
        complete: function () {
            console.log('Right container JSON loaded.');
        }
    });
}