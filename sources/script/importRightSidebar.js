function rightSidebarJSON(data){
    //Panel Head
    $("#rightSidebar .fd-panel__title").append(data.title);
    $("#rightSidebar .fd-panel__description").append(data.description);

    //Panel Body - List
    $.each(data.items, function () {
        var htmlItem;

        htmlItem = '<div class="fd-tile">';
        htmlItem += '   <div class="fd-tile__media">';
        htmlItem += '       <span class="fd-identifier fd-identifier--m sap-icon--' + this.icon + ' fd-identifier--transparent"></span>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__content">';
        htmlItem += '       <h3 class="fd-tile__title">' + this.header + '</h3>';
        htmlItem += '       <p class="fd-tile__text">' + this.description + '</p>';
        htmlItem += '   </div>';
        htmlItem += '   <div class="fd-tile__actions">';
        htmlItem += '       <div class="fd-popover fd-popover--right">';
        htmlItem += '           <div class="fd-popover__control">';
        htmlItem += '               <button class="fd-button--light sap-icon--overflow" aria-label="More" aria-expanded="false" aria-controls="WQIDD179" aria-haspopup="true"></button>';
        htmlItem += '           </div>';
        htmlItem += '           <div class="fd-popover__body fd-popover__body--right fd-popover__body--no-arrow" aria-hidden="true" id="WQIDD179">';
        htmlItem += '               <nav class="fd-menu" id="">';
        htmlItem += '                   <ul class="fd-menu__list">';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 1</a></li>';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 2</a></li>';
        htmlItem += '                       <li><a href="#" class="fd-menu__item">Option 3</a></li>';
        htmlItem += '                   </ul>';
        htmlItem += '               </nav>';
        htmlItem += '           </div>';
        htmlItem += '       </div>';
        htmlItem += '   </div>';
        htmlItem += '</div>';

        $(htmlItem).appendTo("#rightSidebar .fd-panel__body");
    });

    //Panel Body - Panel footer
    $("#rightSidebar .fd-panel__footer").append(data.items.length + " resources available.");
}

function getRightSidebarData(customPath){
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/rightSidebar.min.json',
        success: rightSidebarJSON,
        error: function(){
            console.log('No right sidebar JSON found.');
        },
        complete: function(){
            console.log('Right sidebar JSON loaded.');
        }
    });
}