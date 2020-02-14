function leftContainerJSON(data) {
    //Panel Head
    $("#drop-masterlist .label, #leftContainer .title .label").append(data.title);
    $("#drop-masterlist .count, #leftContainer .title .count").append(" (" + data.items.length + ")");

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
        htmlItem += '<li class="right">' + this.attribute2 + '</li>';
        htmlItem += '           <li>' + this.attribute3 + '</li>';
        htmlItem += '           <li class="right">' + this.attribute4 + '</li>';
        htmlItem += '       </ul>';
        htmlItem += '   </footer >';
        htmlItem += '</article >';
        $(htmlItem).appendTo("#leftContainer .content");

        if (this.header.length < 26) {
            $('<option>' + this.header + '</option>').appendTo("#drop-masterlist select");
        } else {
            $('<option>' + this.header.substr(0, 25) + '...</option>').appendTo("#drop-masterlist select");
        }
    });
}

function getLeftContainerData(customPath) {
    $.ajax({
        dataType: "json",
        url: customPath + '/src/json/leftContainer.min.json',
        success: leftContainerJSON,
        error: function () {
            console.log('No left container JSON found.');
        },
        complete: function () {
            console.log('Left container JSON loaded.');
        }
    });
}