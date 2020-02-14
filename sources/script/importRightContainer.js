function rightContainerJSON(data) {
    //Panel Heads
    $("#rightContainer .fd-panel__title").append(data.title);
    $("#rightContainer .fd-panel__description").append(data.description);
    $("#rightContainer .fd-panel__footer").append(data.items.length + " items loaded successfully.");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<div class="fd-notification fd-notification--m">';
        htmlItem += '   <div class="fd-notification__header">';
        htmlItem += '       <div class="fd-notification__title">' + this.title + '</div>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-notification__body">';
        htmlItem += '       <div class="fd-notification__content">';
        htmlItem += '           <div class="fd-notification__text">';
        htmlItem += '               <div class="fd-notification__description">' + this.message + '</div>';
        htmlItem += '               <div class="fd-notification__metadata">' + this.user + ' | ' + this.date + ' ' + this.timestamp + '</div>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '       <div class="fd-notification__footer">';
        htmlItem += '           <button class="fd-button--light">More Info</button>';
        htmlItem += '           <div class="fd-notification__actions">';
        htmlItem += '               <button class="fd-button--positive">Approve</button>';
        htmlItem += '               <button class="fd-button--negative">Reject</button>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '   </div>';
        htmlItem += '</div>';
        $(htmlItem).appendTo("#rightContainer .fd-panel__body");
    });
}

function getRightContainerData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/rightContainer.min.json',
        success: rightContainerJSON,
        error: function () {
            console.log('No right container JSON found.');
        },
        complete: function () {
            console.log('Right container JSON loaded.');
        }
    });
}