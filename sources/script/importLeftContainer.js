function leftContainerJSON(data) {
    //Panel Head
    $("#drop-masterlist .label, #left-container .title .label").append(data.title);
    $("#drop-masterlist .count, #left-container .title .count").append(" (" + data.items.length + ")");

    //Panel Body - list
    $(data.items).each(function () {
        var htmlItem;

        htmlItem = '<article class="list-object">';
        htmlItem += '   <aside>' + this.subheader + '</aside>';
        htmlItem += '   <header><h2>' + this.header + '</h2><h3>' + this.kpi + '</h3></header>';
        htmlItem += '   <footer>';
        htmlItem += '       <ul class="switch">';
        htmlItem += '          <li class="more"><button type="button">more</button></li>';
        htmlItem += '          <li class="less"><button type="button">less</button></li>';
        htmlItem += '       </ul>';
        htmlItem += '       <ul class="attributes">';
        htmlItem += '           <li>' + this.attribute1 + '</li>';
        htmlItem +=             '<li class="right">' + this.attribute2 + '</li>';
        htmlItem += '           <li>' + this.attribute3 + '</li>';
        htmlItem += '           <li class="right">' + this.attribute4 + '</li>';
        htmlItem += '       </ul>';
        htmlItem += '   </footer >';
        htmlItem += '</article >';
        $(htmlItem).appendTo("#masterlist");

        if (this.header.length < 26) {
            $('<option>' + this.header + '</option>').appendTo("#drop-masterlist select");
        } else {
            $('<option>' + this.header.substr(0, 25) + '...</option>').appendTo("#drop-masterlist select");
        }
    });
}